import { createHmac, timingSafeEqual } from 'node:crypto'
import { NextResponse } from 'next/server'

export const runtime = 'nodejs'

const ALLOWED_ORIGIN = 'https://usr-cont.nx3r.com'

function corsHeaders(request: Request) {
  const origin = request.headers.get('origin')
  return {
    'Access-Control-Allow-Origin':
      origin === ALLOWED_ORIGIN ? ALLOWED_ORIGIN : 'null',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Vary': 'Origin',
  }
}

function validateTelegramInitData(initData: string, botToken: string) {
  try {
    const params = new URLSearchParams(initData)
    const hash = params.get('hash')

    if (!hash || !/^[a-f0-9]{64}$/i.test(hash)) return null

    params.delete('hash')

    const dataCheckString = [...params.entries()]
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([key, value]) => `${key}=${value}`)
      .join('\n')

    const secretKey = createHmac('sha256', 'WebAppData')
      .update(botToken)
      .digest()

    const calculatedHash = createHmac('sha256', secretKey)
      .update(dataCheckString)
      .digest('hex')

    const expected = Buffer.from(calculatedHash, 'hex')
    const received = Buffer.from(hash, 'hex')

    if (
      expected.length !== received.length ||
      !timingSafeEqual(expected, received)
    ) return null

    const authDate = Number(params.get('auth_date'))
    const now = Math.floor(Date.now() / 1000)

    if (
      !Number.isFinite(authDate) ||
      authDate > now + 30 ||
      now - authDate > 86400
    ) return null

    const userRaw = params.get('user')
    if (!userRaw) return null

    const user = JSON.parse(userRaw)

    if (!user || !Number.isSafeInteger(user.id)) return null

    return user
  } catch {
    return null
  }
}

export async function OPTIONS(request: Request) {
  return new Response(null, {
    status: 204,
    headers: corsHeaders(request),
  })
}

export async function POST(request: Request) {
  const headers = corsHeaders(request)

  if (request.headers.get('origin') !== ALLOWED_ORIGIN) {
    return NextResponse.json(
      { ok: false, error: 'Origin not allowed' },
      { status: 403, headers }
    )
  }

  const botToken = process.env.BOT_TOKEN

  if (!botToken) {
    return NextResponse.json(
      { ok: false, error: 'Server configuration error' },
      { status: 500, headers }
    )
  }

  let body: { initData?: unknown }

  try {
    body = await request.json()
  } catch {
    return NextResponse.json(
      { ok: false, error: 'Invalid request' },
      { status: 400, headers }
    )
  }

  if (typeof body.initData !== 'string' || !body.initData) {
    return NextResponse.json(
      { ok: false, error: 'Missing Telegram data' },
      { status: 400, headers }
    )
  }

  const user = validateTelegramInitData(body.initData, botToken)

  if (!user) {
    return NextResponse.json(
      { ok: false, error: 'Invalid or expired Telegram data' },
      { status: 401, headers }
    )
  }

  return NextResponse.json(
    {
      ok: true,
      user: {
        id: user.id,
        first_name: user.first_name ?? '',
        username: user.username ?? '',
      },
    },
    { headers }
  )
}
