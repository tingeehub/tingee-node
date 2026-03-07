import { TingeeClientOptions, ENVIRONMENT_URLS, TingeeEnvironment } from './types.js'
import { TingeeHttpClient } from './http.js'
import { allMethods, type TingeeAllMethods } from './generated-methods.js'
import { createCustomMethods, type CustomMethods } from './custom-methods.js'
import { verifyWebhookSignature } from '../signature/signer.js'
import type { WebhookVerifyResult, TingeeWebhookBody } from '../signature/signer.js'

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

  verifyWebhookSignature(input: {
    signature: string
    timestamp: string
    body: TingeeWebhookBody | string
  }): WebhookVerifyResult {
    return verifyWebhookSignature({
      secretToken: this.secretKey,
      ...input,
    })
  }
}
