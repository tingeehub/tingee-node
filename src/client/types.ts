export type TingeeEnvironment = 'production' | 'uat'

export const ENVIRONMENT_URLS: Record<TingeeEnvironment, string> = {
  production: 'https://open-api.tingee.vn',
  uat: 'https://uat-open-api.tingee.vn',
}

/**
 * Required options for TingeeClient
 */
export interface TingeeClientRequiredOptions {
  /**
   * Secret key for generating request signature
   */
  secretKey: string

  /**
   * Client ID for API authentication
   */
  clientId: string
}

/**
 * Optional options for TingeeClient
 */
export interface TingeeClientOptionalOptions {
  /**
   * API environment
   * @default 'production'
   */
  environment?: TingeeEnvironment

  /**
   * Request timeout in milliseconds
   * @default 90000 (90 seconds)
   */
  timeout?: number

  /**
   * Custom base URL (overrides environment)
   */
  baseUrl?: string
}

/**
 * Complete options for TingeeClient
 * Only secretKey and clientId are required
 */
export interface TingeeClientOptions 
  extends TingeeClientRequiredOptions, TingeeClientOptionalOptions {}
