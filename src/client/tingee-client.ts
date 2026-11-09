import { TingeeClientOptions, ENVIRONMENT_URLS, TingeeEnvironment } from './types.js'
import { TingeeHttpClient } from './http.js'
import { allMethods, type TingeeAllMethods } from './generated-methods.js'
import { createCustomMethods, type CustomMethods } from './custom-methods.js'
import { createUrlValidationResponse, verifyWebhookSignature } from '../signature/signer.js'
import type { UrlValidationResponse, WebhookVerifyResult } from '../signature/signer.js'

export interface TingeeClient extends TingeeAllMethods, CustomMethods { }

export class TingeeClient {
  private httpClient: TingeeHttpClient
  private baseUrl: string
  private secretKey: string

  constructor(options: TingeeClientOptions) {
    if (!options.secretKey) {
      throw new Error('secretKey is required')
    }
    if (!options.clientId) {
      throw new Error('clientId is required')
    }

    const environment: TingeeEnvironment = options.environment || 'production'
    this.baseUrl = options.baseUrl || ENVIRONMENT_URLS[environment]
    this.secretKey = options.secretKey

    this.httpClient = new TingeeHttpClient(
      this.baseUrl,
      options.secretKey,
      options.clientId,
      options.timeout || 90000
    )

    const generated = allMethods(this.httpClient)
    const custom = createCustomMethods(this.httpClient)
    Object.assign(this, generated, custom)
  }

  getBaseUrl(): string {
    return this.baseUrl
  }

  verifyWebhookSignature(
    signature: string,
    timestamp: string,
    body: object | string
  ): WebhookVerifyResult {
    return verifyWebhookSignature(this.secretKey, signature, timestamp, body)
  }

  /**
   * Build the response for a webhook URL validation request, null if body is not one.
   * Pass `secretToken` when your "Webhook verification" credential differs from the one used by this client.
   */
  createUrlValidationResponse(
    body: object | string,
    secretToken: string = this.secretKey
  ): UrlValidationResponse | null {
    return createUrlValidationResponse(secretToken, body)
  }
}
