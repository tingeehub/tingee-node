/**
 * Tingee SDK for Node.js
 * 
 * Official SDK for Tingee Open API
 */

// Import declaration file to enable TypeScript declaration merging
// This extends TingeeClient interface with generated method signatures
import type {} from './client/generated-methods.d.js'

export { TingeeClient } from './client/TingeeClient.js'
export type { TingeeClientOptions, TingeeEnvironment } from './client/types.js'
export { TingeeHttpError, TingeeApiError } from './client/http.js'
export { generateSignature, formatTimestamp } from './signature/signer.js'
export type { TingeeApiResponse } from './types/api-response.js'
export { isSuccessResponse, isErrorResponse } from './types/api-response.js'

// Export all generated types
export type * from './types/generated.js'
