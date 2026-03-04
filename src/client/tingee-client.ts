import { TingeeClientOptions, ENVIRONMENT_URLS, TingeeEnvironment } from './types.js'
import { TingeeHttpClient } from './http.js'
import { v1Methods } from './generated-methods.js'
import type { TingeeV1Methods } from './generated-methods.js'
import { createV1CustomMethods } from './v1-custom-methods.js'
import type { V1CustomMethods } from './v1-custom-methods.js'
import { verifyWebhookSignature } from '../signature/signer.js'
import type { WebhookVerifyResult } from '../signature/signer.js'

export class TingeeClient {
  private httpClient: TingeeHttpClient
  private baseUrl: string
  private secretKey: string

  readonly v1: TingeeV1Methods & V1CustomMethods

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

    this.v1 = Object.assign(
      v1Methods(this.httpClient),
      createV1CustomMethods(this.httpClient),
    ) as TingeeV1Methods & V1CustomMethods;
  }

  getBaseUrl(): string {
    return this.baseUrl
  }

  verifyWebhookSignature(input: {
    signature: string
    timestamp: string
    body: Record<string, any>
  }): WebhookVerifyResult {
    return verifyWebhookSignature({
      secretToken: this.secretKey,
      ...input,
    })
  }
}
