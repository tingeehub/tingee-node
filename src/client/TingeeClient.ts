import { TingeeClientOptions, ENVIRONMENT_URLS, TingeeEnvironment } from './types.js'
import { TingeeHttpClient } from './http.js'
import { generatedMethods } from './generated-methods.js'
// Import declaration file to enable TypeScript declaration merging
// This file extends TingeeClient interface with generated method signatures
import type { } from './generated-methods.d.js'

export class TingeeClient {
  private httpClient: TingeeHttpClient
  private baseUrl: string

  constructor(options: TingeeClientOptions) {
    if (!options.secretKey) {
      throw new Error('secretKey is required')
    }
    if (!options.clientId) {
      throw new Error('clientId is required')
    }

    const environment: TingeeEnvironment = options.environment || 'production'
    this.baseUrl = options.baseUrl || ENVIRONMENT_URLS[environment]

    this.httpClient = new TingeeHttpClient(
      this.baseUrl,
      options.secretKey,
      options.clientId,
      options.timeout || 90000
    )

    Object.assign(TingeeClient.prototype, generatedMethods)
  }

  getBaseUrl(): string {
    return this.baseUrl
  }

  // Auto-generated methods from openapi/sdk.json
  // DO NOT EDIT MANUALLY - Regenerate using: npm run build
}
