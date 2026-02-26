import { generateSignature, formatTimestamp } from '../signature/signer.js'
import type { TingeeApiResponse } from '../types/api-response.js'
import { isErrorResponse } from '../types/api-response.js'

/**
 * HTTP method types
 */
export type HttpMethod = 'get' | 'post' | 'put' | 'patch' | 'delete'

/**
 * Request options for HTTP client
 */
export interface HttpRequestOptions {
  method: HttpMethod
  path: string
  body?: any
  query?: Record<string, string | number | boolean | undefined>
  headers?: Record<string, string>
  timeout?: number
}

/**
 * Response from HTTP client
 */
export interface HttpResponse<T = any> {
  status: number
  data: T
  headers: Record<string, string>
}

/**
 * HTTP client for Tingee API
 * Handles signature generation and request execution
 */
export class TingeeHttpClient {
  private baseUrl: string
  private secretKey: string
  private clientId: string
  private defaultTimeout: number

  constructor(
    baseUrl: string,
    secretKey: string,
    clientId: string,
    timeout: number = 90000
  ) {
    this.baseUrl = baseUrl.replace(/\/$/, '')
    this.secretKey = secretKey
    this.clientId = clientId
    this.defaultTimeout = timeout
  }

  async request<T = any>(options: HttpRequestOptions): Promise<HttpResponse<T>> {
    const { method, path, body, headers = {}, timeout } = options

    const timestamp = formatTimestamp()
    const signature = generateSignature(this.secretKey, timestamp, body || {})

    const url = `${this.baseUrl}${path.startsWith('/') ? path : `/${path}`}`

    const requestHeaders: Record<string, string> = {
      'accept': 'application/json',
      'content-type': 'application/json',
      'x-signature': signature,
      'x-request-timestamp': timestamp,
      'x-client-id': this.clientId,
      ...headers,
    }

    const controller = new AbortController()
    const timeoutId = setTimeout(
      () => controller.abort(),
      timeout || this.defaultTimeout
    )

    try {
      const response = await fetch(url, {
        method: method.toUpperCase(),
        headers: requestHeaders,
        body: body ? JSON.stringify(body) : undefined,
        signal: controller.signal,
      })

      clearTimeout(timeoutId)

      let data: T
      const contentType = response.headers.get('content-type') || ''
      
      if (contentType.includes('application/json')) {
        data = (await response.json()) as T
      } else {
        data = (await response.text()) as T
      }

      const responseHeaders: Record<string, string> = {}
      response.headers.forEach((value, key) => {
        responseHeaders[key] = value
      })

      if (!response.ok) {
        throw new TingeeHttpError(
          `Request failed with status ${response.status}`,
          response.status,
          data,
          responseHeaders
        )
      }

      if (
        typeof data === 'object' &&
        data !== null &&
        'code' in data &&
        'message' in data
      ) {
        const apiResponse = data as unknown as TingeeApiResponse
        if (isErrorResponse(apiResponse)) {
          throw new TingeeApiError(
            apiResponse.message || 'API request failed',
            apiResponse.code,
            apiResponse,
            response.status,
            responseHeaders
          )
        }
      }

      return {
        status: response.status,
        data,
        headers: responseHeaders,
      }
    } catch (error: any) {
      clearTimeout(timeoutId)

      if (error.name === 'AbortError') {
        throw new TingeeHttpError(
          `Request timeout after ${timeout || this.defaultTimeout}ms`,
          0,
          null,
          {}
        )
      }

      if (error instanceof TingeeHttpError) {
        throw error
      }

      throw new TingeeHttpError(
        error.message || 'Network error',
        0,
        null,
        {}
      )
    }
  }
}

export class TingeeHttpError extends Error {
  constructor(
    message: string,
    public status: number,
    public data: any,
    public headers: Record<string, string>
  ) {
    super(message)
    this.name = 'TingeeHttpError'
  }
}

export class TingeeApiError extends Error {
  constructor(
    message: string,
    public code: string,
    public response: TingeeApiResponse,
    public status: number,
    public headers: Record<string, string>
  ) {
    super(message)
    this.name = 'TingeeApiError'
  }
}
