// Auto-generated from openapi/sdk.json
// DO NOT EDIT MANUALLY

import type { TingeeApiResponse } from '../types/api-response.js'
import type {
  OpenApiBankCreateOrUpdateConfigDto,
  OpenApiConfigAccountBusinessDto,
  OpenApiCreateBankVAOutputDto,
  OpenApiCreateMerchantDto,
  OpenApiDeleteConfigBusinessDto,
  OpenApiDeleteConfigDto,
  OpenApiGetPagingMerchantsDto,
  OpenApiGetShopPagedInputDto,
  OpenApiMerchantBankConfigPagedInputDto
} from '../types/generated.js'

// Declaration merging - extends TingeeClient interface with generated methods
declare module './TingeeClient.js' {
  interface TingeeClient {
    v1UserVerifyReferralCode(query: {
      referralCode: string
    }): Promise<TingeeApiResponse<any>>
    v1ShopGetPaging(body: OpenApiGetShopPagedInputDto): Promise<TingeeApiResponse<any>>
    v1MerchantGetPagingConfig(body: OpenApiMerchantBankConfigPagedInputDto): Promise<TingeeApiResponse<any>>
    v1MerchantCreateOrUpdateConfig(body: OpenApiBankCreateOrUpdateConfigDto): Promise<TingeeApiResponse<any>>
    v1MerchantDeleteConfig(body: OpenApiDeleteConfigDto): Promise<TingeeApiResponse<any>>
    v1MerchantConfigAccountBusiness(body: OpenApiConfigAccountBusinessDto): Promise<TingeeApiResponse<OpenApiCreateBankVAOutputDto>>
    v1MerchantDeleteConfigAccountBusiness(body: OpenApiDeleteConfigBusinessDto): Promise<TingeeApiResponse<any>>
    v1MerchantCreate(body: OpenApiCreateMerchantDto): Promise<TingeeApiResponse<any>>
    v1MerchantGetPaging(body: OpenApiGetPagingMerchantsDto): Promise<TingeeApiResponse<any>>
    v1MerchantDelete(query: {
      merchantId: number
    }): Promise<TingeeApiResponse<any>>
  }
}
