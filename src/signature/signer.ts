import { createHmac } from 'crypto'

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
 * 
 * @param date - Date object (defaults to now)
 * @returns Formatted timestamp string
 */
export function formatTimestamp(date: Date = new Date()): string {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  const seconds = String(date.getSeconds()).padStart(2, '0')
  const milliseconds = String(date.getMilliseconds()).padStart(3, '0')
  
  return `${year}${month}${day}${hours}${minutes}${seconds}${milliseconds}`
}
