// Auto-generated from openapi/sdk.json
// DO NOT EDIT MANUALLY

import { TingeeApiResponse } from '../types/api-response.js'
import type { OpenApiBankCreateOrUpdateConfigDto } from '../types/generated.js'
import type { OpenApiConfigAccountBusinessDto } from '../types/generated.js'
import type { OpenApiCreateBankVAOutputDto } from '../types/generated.js'
import type { OpenApiCreateMerchantDto } from '../types/generated.js'
import type { OpenApiDeleteConfigBusinessDto } from '../types/generated.js'
import type { OpenApiDeleteConfigDto } from '../types/generated.js'
import type { OpenApiGetPagingMerchantsDto } from '../types/generated.js'
import type { OpenApiGetShopPagedInputDto } from '../types/generated.js'
import type { OpenApiMerchantBankConfigPagedInputDto } from '../types/generated.js'


// These methods will be inserted into TingeeClient class
// Import and use: Object.assign(TingeeClient.prototype, generatedMethods)
export const generatedMethods = {
  async v1UserVerifyReferralCode(query: {
    referralCode: string
  }): Promise<TingeeApiResponse<any>> {
    const response = await (this as any).httpClient.request({
      method: 'post',
      path: '/v1/user/verify-referral-code',
      query
    }) as { status: number; data: TingeeApiResponse<any>; headers: Record<string, string> }
    return response.data
  },

  async v1ShopGetPaging(body: OpenApiGetShopPagedInputDto): Promise<TingeeApiResponse<any>> {
    const response = await (this as any).httpClient.request({
      method: 'post',
      path: '/v1/shop/get-paging',
      body
    }) as { status: number; data: TingeeApiResponse<any>; headers: Record<string, string> }
    return response.data
  },

  async v1MerchantGetPagingConfig(body: OpenApiMerchantBankConfigPagedInputDto): Promise<TingeeApiResponse<any>> {
    const response = await (this as any).httpClient.request({
      method: 'post',
      path: '/v1/merchant/get-paging-config',
      body
    }) as { status: number; data: TingeeApiResponse<any>; headers: Record<string, string> }
    return response.data
  },

  async v1MerchantCreateOrUpdateConfig(body: OpenApiBankCreateOrUpdateConfigDto): Promise<TingeeApiResponse<any>> {
    const response = await (this as any).httpClient.request({
      method: 'post',
      path: '/v1/merchant/create-or-update-config',
      body
    }) as { status: number; data: TingeeApiResponse<any>; headers: Record<string, string> }
    return response.data
  },

  async v1MerchantDeleteConfig(body: OpenApiDeleteConfigDto): Promise<TingeeApiResponse<any>> {
    const response = await (this as any).httpClient.request({
      method: 'post',
      path: '/v1/merchant/delete-config',
      body
    }) as { status: number; data: TingeeApiResponse<any>; headers: Record<string, string> }
    return response.data
  },

  async v1MerchantConfigAccountBusiness(body: OpenApiConfigAccountBusinessDto): Promise<TingeeApiResponse<OpenApiCreateBankVAOutputDto>> {
    const response = await (this as any).httpClient.request({
      method: 'post',
      path: '/v1/merchant/config-account-business',
      body
    }) as { status: number; data: TingeeApiResponse<OpenApiCreateBankVAOutputDto>; headers: Record<string, string> }
    return response.data
  },

  async v1MerchantDeleteConfigAccountBusiness(body: OpenApiDeleteConfigBusinessDto): Promise<TingeeApiResponse<any>> {
    const response = await (this as any).httpClient.request({
      method: 'post',
      path: '/v1/merchant/delete-config-account-business',
      body
    }) as { status: number; data: TingeeApiResponse<any>; headers: Record<string, string> }
    return response.data
  },

  async v1MerchantCreate(body: OpenApiCreateMerchantDto): Promise<TingeeApiResponse<any>> {
    const response = await (this as any).httpClient.request({
      method: 'post',
      path: '/v1/merchant/create',
      body
    }) as { status: number; data: TingeeApiResponse<any>; headers: Record<string, string> }
    return response.data
  },

  async v1MerchantGetPaging(body: OpenApiGetPagingMerchantsDto): Promise<TingeeApiResponse<any>> {
    const response = await (this as any).httpClient.request({
      method: 'post',
      path: '/v1/merchant/get-paging',
      body
    }) as { status: number; data: TingeeApiResponse<any>; headers: Record<string, string> }
    return response.data
  },

  async v1MerchantDelete(query: {
    merchantId: number
  }): Promise<TingeeApiResponse<any>> {
    const response = await (this as any).httpClient.request({
      method: 'delete',
      path: '/v1/merchant/delete',
      query
    }) as { status: number; data: TingeeApiResponse<any>; headers: Record<string, string> }
    return response.data
  }
}
