import { createHmac, timingSafeEqual } from 'crypto'

/**
 * Generate signature for Tingee API request
 *
 * Signature format: HMAC-SHA512(secretKey, timestamp:JSON.stringify(body))
 *
 * @param secretKey - Secret key for HMAC
 * @param timestamp - Request timestamp in format yyyyMMddHHmmssSSS
 * @param body - Request body object (will be stringified)
 * @returns Hex-encoded signature string
 */
export function generateSignature(
  secretKey: string,
  timestamp: string,
  body: any
): string {
  const message = `${timestamp}:${JSON.stringify(body)}`
  return createHmac('sha512', secretKey)
    .update(message)
    .digest('hex')
}

/**
 * Format date to Tingee timestamp format: yyyyMMddHHmmssSSS
 * Always uses Vietnam timezone (UTC+7) regardless of machine timezone.
 *
 * @param date - Date object (defaults to now)
 * @returns Formatted timestamp string
 */
export function formatTimestamp(date: Date = new Date()): string {
  // Convert to Vietnam time (UTC+7) explicitly
  const vnOffset = 7 * 60 // minutes
  const utcMs = date.getTime() + date.getTimezoneOffset() * 60 * 1000
  const vnDate = new Date(utcMs + vnOffset * 60 * 1000)

  const year = vnDate.getFullYear()
  const month = String(vnDate.getMonth() + 1).padStart(2, '0')
  const day = String(vnDate.getDate()).padStart(2, '0')
  const hours = String(vnDate.getHours()).padStart(2, '0')
  const minutes = String(vnDate.getMinutes()).padStart(2, '0')
  const seconds = String(vnDate.getSeconds()).padStart(2, '0')
  const milliseconds = String(date.getMilliseconds()).padStart(3, '0')

  return `${year}${month}${day}${hours}${minutes}${seconds}${milliseconds}`
}

// ─── Webhook signature verification ─────────────────────────────────────────

export type WebhookVerifyResult =
  | { code: '00'; message: 'OK' }
  | { code: string; message: string }

export interface WebhookVerifyInput {
  /** Secret token provided by Tingee (from your merchant configuration) */
  secretToken: string
  /** Value of the `x-signature` header from the incoming webhook request */
  signature: string
  /** Value of the `x-request-timestamp` header from the incoming webhook request */
  timestamp: string
  /**
   * The parsed JSON body of the incoming webhook request.
   * Pass the already-parsed object — the function will JSON.stringify it
   * the same way the server does before comparing signatures.
   */
  body: Record<string, any>
}

/**
 * Verify the HMAC-SHA512 signature of an incoming Tingee webhook callback.
 *
 * Server signing logic:
 *   message   = `${x-request-timestamp}:${JSON.stringify(body)}`
 *   signature = HMAC-SHA512(secretToken, message) → hex
 *
 * @example
 * ```ts
 * app.post('/webhook', (req, res) => {
 *   const result = verifyWebhookSignature({
 *     secretToken: process.env.TINGEE_SECRET_TOKEN!,
 *     signature:   req.headers['x-signature'] as string,
 *     timestamp:   req.headers['x-request-timestamp'] as string,
 *     body:        req.body,
 *   })
 *   if (result.code !== '00') {
 *     return res.status(401).json(result)
 *   }
 *   // process webhook ...
 * })
 * ```
 */

const TIMESTAMP_REGEX = /^\d{17}$/

const REQUIRED_BODY_FIELDS = ['clientId', 'transactionCode', 'amount', 'bank', 'transactionDate'] as const

export function verifyWebhookSignature(input: WebhookVerifyInput): WebhookVerifyResult {
  const { secretToken, signature, timestamp, body } = input;

  if (!signature) {
    return { code: 'MISSING_SIGNATURE', message: 'x-signature header is required' }
  }
  if (!timestamp) {
    return { code: 'MISSING_TIMESTAMP', message: 'x-request-timestamp header is required' }
  }
  if (!TIMESTAMP_REGEX.test(timestamp)) {
    return { code: 'INVALID_TIMESTAMP', message: 'x-request-timestamp must be in yyyyMMddHHmmssSSS format (17 digits)' }
  }
  if (!body || typeof body !== 'object') {
    return { code: 'MISSING_BODY', message: 'body is required and must be an object' }
  }

  for (const field of REQUIRED_BODY_FIELDS) {
    if (!body[field]) {
      return { code: `MISSING_BODY_FIELD`, message: `body.${field} is required` }
    }
  }

  const expected = generateSignature(secretToken, timestamp, body)

  try {
    const expectedBuf = Buffer.from(expected, 'hex')
    const actualBuf = Buffer.from(signature, 'hex')

    if (expectedBuf.length !== actualBuf.length || !timingSafeEqual(expectedBuf, actualBuf)) {
      return { code: 'INVALID_SIGNATURE', message: 'Signature does not match' }
    }
  } catch {
    return { code: 'INVALID_SIGNATURE', message: 'Signature format is invalid' }
  }

  return { code: '00', message: 'Success' }
}
