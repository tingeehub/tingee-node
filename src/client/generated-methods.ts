// Auto-generated from openapi/sdk.json
// DO NOT EDIT MANUALLY

import type { TingeeHttpClient } from './http.js'
import type { TingeeApiResponse } from '../types/api-response.js'
import type { BankBinEnum } from '../types/bank-constants.js'
import type { BankCreateVAOuputDto } from '../types/generated.js'
import type { BankDeleteVAOutputDto } from '../types/generated.js'
import type { CreateInvoiceDto } from '../types/generated.js'
import type { CreateOrUpdateEInvoiceAccountDto } from '../types/generated.js'
import type { DeleteEInvoiceAccountDto } from '../types/generated.js'
import type { DeleteSubscriptionOutputDto } from '../types/generated.js'
import type { DeviceDto } from '../types/generated.js'
import type { DownloadInvoiceOutputDto } from '../types/generated.js'
import type { DownloadInvoiceQueryDto } from '../types/generated.js'
import type { EmptyDto } from '../types/generated.js'
import type { GenerateDynamicQRInputDto } from '../types/generated.js'
import type { GenerateDynamicQROuputDto } from '../types/generated.js'
import type { GenerateVietQROuputDto } from '../types/generated.js'
import type { GetPagingEInvoiceAccountInputDto } from '../types/generated.js'
import type { GetPagingEInvoiceAccountOutputDto } from '../types/generated.js'
import type { InvoiceTemplateOutputDto } from '../types/generated.js'
import type { InvoiceTemplateQueryDto } from '../types/generated.js'
import type { MerchantBankConfigPagedOutputDto } from '../types/generated.js'
import type { MerchantDto } from '../types/generated.js'
import type { OpenApiAddDeviceToShop } from '../types/generated.js'
import type { OpenApiBankConfirmVAInputDto } from '../types/generated.js'
import type { OpenApiBankCreateOrUpdateConfigDto } from '../types/generated.js'
import type { OpenApiConfigAccountBusinessDto } from '../types/generated.js'
import type { OpenApiConfirmVAOuputDto } from '../types/generated.js'
import type { OpenApiCreateBankVAOutputDto } from '../types/generated.js'
import type { OpenApiCreateMerchantDto } from '../types/generated.js'
import type { OpenApiCreateOrUpdateShopDto } from '../types/generated.js'
import type { OpenApiCreateOrUpdateShopOutputDto } from '../types/generated.js'
import type { OpenApiCreateVAInpuDto } from '../types/generated.js'
import type { OpenApiDeepLinkDto } from '../types/generated.js'
import type { OpenApiDeleteConfigBusinessDto } from '../types/generated.js'
import type { OpenApiDeleteConfigDto } from '../types/generated.js'
import type { OpenApiDeleteDynamicQRInputDto } from '../types/generated.js'
import type { OpenApiDeleteSubscriptionDto } from '../types/generated.js'
import type { OpenApiEditConfirmBeforePaymentMethodDto } from '../types/generated.js'
import type { OpenApiGenerateAndShowDynamicQrCodeDto } from '../types/generated.js'
import type { OpenApiGenerateVietQRInputDto } from '../types/generated.js'
import type { OpenApiGenerateVietQROuputDto } from '../types/generated.js'
import type { OpenApiGetDevicesLinkToShopOrVA } from '../types/generated.js'
import type { OpenApiGetPagingDeviceInputDto } from '../types/generated.js'
import type { OpenApiGetPagingMerchantsDto } from '../types/generated.js'
import type { OpenApiGetShopPagedInputDto } from '../types/generated.js'
import type { OpenApiGetShopPagedOuputDto } from '../types/generated.js'
import type { OpenApiGetStatusDynamicQRInputDto } from '../types/generated.js'
import type { OpenApiGetStatusDynamicQROutputDto } from '../types/generated.js'
import type { OpenApiGetVAPagedInputDto } from '../types/generated.js'
import type { OpenApiGetVAPagedOuputDto } from '../types/generated.js'
import type { OpenApiMerchantBankConfigPagedInputDto } from '../types/generated.js'
import type { OpenApiPaymentBillDto } from '../types/generated.js'
import type { OpenApiPaymentTransactionStatusResponseDto } from '../types/generated.js'
import type { OpenApiPaymentTransactionsPagedOutputDto } from '../types/generated.js'
import type { OpenApiReadAmountDto } from '../types/generated.js'
import type { OpenApiReadSecurityCodeDto } from '../types/generated.js'
import type { OpenApiRefundInputDto } from '../types/generated.js'
import type { OpenApiRegisterDto } from '../types/generated.js'
import type { OpenApiRegisterNotifyDto } from '../types/generated.js'
import type { OpenApiShowQRCodeDto } from '../types/generated.js'
import type { OpenApiSubscriptionStatusResponseDto } from '../types/generated.js'
import type { OpenApiTransactionPagedInputDto } from '../types/generated.js'
import type { OpenApiTransactionPagedOuputDto } from '../types/generated.js'
import type { OpenApiUpdateShopDeviceLinkDto } from '../types/generated.js'
import type { PagedResultDto } from '../types/generated.js'
import type { PaymentBillResponseDto } from '../types/generated.js'
import type { RefundOutputDto } from '../types/generated.js'
import type { SendInvoiceEmailDto } from '../types/generated.js'
import type { String } from '../types/generated.js'
import type { TrackingResultDto } from '../types/generated.js'

export const allMethods = (http: TingeeHttpClient) => ({
  bank: new class {
    generateVietQr(body: OpenApiGenerateVietQRInputDto): Promise<TingeeApiResponse<GenerateVietQROuputDto>> {
      return http.request<TingeeApiResponse<GenerateVietQROuputDto>>({
        method: 'post',
        path: '/v1/bank/generate-viet-qr',
        body
      }).then(r => r.data)
    }

    generateDynamicQr(body: GenerateDynamicQRInputDto): Promise<TingeeApiResponse<GenerateDynamicQROuputDto>> {
      return http.request<TingeeApiResponse<GenerateDynamicQROuputDto>>({
        method: 'post',
        path: '/v1/bank/generate-dynamic-qr',
        body
      }).then(r => r.data)
    }

    deleteDynamicQr(body: OpenApiDeleteDynamicQRInputDto): Promise<TingeeApiResponse<EmptyDto>> {
      return http.request<TingeeApiResponse<EmptyDto>>({
        method: 'post',
        path: '/v1/bank/delete-dynamic-qr',
        body
      }).then(r => r.data)
    }

    getStatusDynamicQr(body: OpenApiGetStatusDynamicQRInputDto): Promise<TingeeApiResponse<OpenApiGetStatusDynamicQROutputDto>> {
      return http.request<TingeeApiResponse<OpenApiGetStatusDynamicQROutputDto>>({
        method: 'post',
        path: '/v1/bank/get-status-dynamic-qr',
        body
      }).then(r => r.data)
    }

    getBanks(): Promise<TingeeApiResponse<{
  code: 'OCB' | 'BIDV' | 'MBB' | 'ACB' | 'VPB' | 'PGB' | 'VIB' | 'STB' | 'CTG' | 'VCB' | 'AGRIBANK' | 'SHINHAN' | 'COB' | 'MSB' | 'NEXTPAY'
  name: string
  shortName: string
  bin: string
  urlLogo: string
  termsAndConditions: Record<string, any>
}[]>> {
      return http.request<TingeeApiResponse<{
  code: 'OCB' | 'BIDV' | 'MBB' | 'ACB' | 'VPB' | 'PGB' | 'VIB' | 'STB' | 'CTG' | 'VCB' | 'AGRIBANK' | 'SHINHAN' | 'COB' | 'MSB' | 'NEXTPAY'
  name: string
  shortName: string
  bin: string
  urlLogo: string
  termsAndConditions: Record<string, any>
}[]>>({
        method: 'get',
        path: '/v1/bank/get-banks'
      }).then(r => r.data)
    }

    getVaPaging(body: OpenApiGetVAPagedInputDto): Promise<TingeeApiResponse<PagedResultDto<OpenApiGetVAPagedOuputDto>>> {
      return http.request<TingeeApiResponse<PagedResultDto<OpenApiGetVAPagedOuputDto>>>({
        method: 'post',
        path: '/v1/bank/get-va-paging',
        body
      }).then(r => r.data)
    }

    getAccountNumberInfoByQrCode(query: {
    qrCode: string
  }): Promise<TingeeApiResponse<PagedResultDto<OpenApiGenerateVietQROuputDto>>> {
      return http.request<TingeeApiResponse<PagedResultDto<OpenApiGenerateVietQROuputDto>>>({
        method: 'post',
        path: '/v1/bank/get-account-number-info-by-qr-code',
        query
      }).then(r => r.data)
    }

    createVa(body: OpenApiCreateVAInpuDto): Promise<TingeeApiResponse<BankCreateVAOuputDto>> {
      return http.request<TingeeApiResponse<BankCreateVAOuputDto>>({
        method: 'post',
        path: '/v1/bank/create-va',
        body
      }).then(r => r.data)
    }

    createVaAdvanced(body: OpenApiCreateVAInpuDto): Promise<TingeeApiResponse<BankCreateVAOuputDto>> {
      return http.request<TingeeApiResponse<BankCreateVAOuputDto>>({
        method: 'post',
        path: '/v1/bank/create-va-advanced',
        body
      }).then(r => r.data)
    }

    confirmVa(body: OpenApiBankConfirmVAInputDto): Promise<TingeeApiResponse<OpenApiConfirmVAOuputDto>> {
      return http.request<TingeeApiResponse<OpenApiConfirmVAOuputDto>>({
        method: 'post',
        path: '/v1/bank/confirm-va',
        body
      }).then(r => r.data)
    }

    deleteVa(query: {
    bankBin?: string
    bankName?: 'OCB' | 'BIDV' | 'MBB' | 'ACB' | 'VPB' | 'PGB' | 'VIB' | 'STB' | 'CTG' | 'VCB' | 'AGRIBANK' | 'SHINHAN' | 'COB' | 'MSB' | 'NEXTPAY'
    vaAccountNumber: string
    merchantId?: number
  }): Promise<TingeeApiResponse<BankDeleteVAOutputDto>> {
      return http.request<TingeeApiResponse<BankDeleteVAOutputDto>>({
        method: 'post',
        path: '/v1/bank/delete-va',
        query
      }).then(r => r.data)
    }

    confirmDeleteVa(body: OpenApiBankConfirmVAInputDto): Promise<TingeeApiResponse<EmptyDto>> {
      return http.request<TingeeApiResponse<EmptyDto>>({
        method: 'post',
        path: '/v1/bank/confirm-delete-va',
        body
      }).then(r => r.data)
    }

    registerNotify(body: OpenApiRegisterNotifyDto): Promise<TingeeApiResponse<BankDeleteVAOutputDto>> {
      return http.request<TingeeApiResponse<BankDeleteVAOutputDto>>({
        method: 'post',
        path: '/v1/bank/register-notify',
        body
      }).then(r => r.data)
    }

    confirmRegisterNotify(body: OpenApiBankConfirmVAInputDto): Promise<TingeeApiResponse<BankDeleteVAOutputDto>> {
      return http.request<TingeeApiResponse<BankDeleteVAOutputDto>>({
        method: 'post',
        path: '/v1/bank/confirm-register-notify',
        body
      }).then(r => r.data)
    }
  }(),

  device: new class {
    readSecurityCode(body: OpenApiReadSecurityCodeDto): Promise<TingeeApiResponse<EmptyDto>> {
      return http.request<TingeeApiResponse<EmptyDto>>({
        method: 'post',
        path: '/v1/device/read-security-code',
        body
      }).then(r => r.data)
    }

    addDeviceToShop(body: OpenApiAddDeviceToShop): Promise<TingeeApiResponse<{
  type: 'app-tingee' | 'tingee-box-f1' | 'tingee-box-2a' | 'tingee-box-2as' | 'tingee-box-s1' | 'tingee-box-3ls' | 'tingee-box-3pro' | 'tingee-box-3vn' | 'tingee-box-3vna' | 'tingee-box-4ls' | 'tingee-box-5s' | 'tingee-box-5sa' | 'tingee-box-6ls' | 'tingee-box-6pro' | 'tingee-box-6xs' | 'vn-50' | 'loa-pay' | 'trusted-pay' | 'pay-alert' | 'tingee-box-3vn-mbb' | 'tingee-box-3pro-mbb' | 'tingee-box-3pro-x' | 'tingee-box-max' | 'tingee-box-8pro'
  uuid: string
}[]>> {
      return http.request<TingeeApiResponse<{
  type: 'app-tingee' | 'tingee-box-f1' | 'tingee-box-2a' | 'tingee-box-2as' | 'tingee-box-s1' | 'tingee-box-3ls' | 'tingee-box-3pro' | 'tingee-box-3vn' | 'tingee-box-3vna' | 'tingee-box-4ls' | 'tingee-box-5s' | 'tingee-box-5sa' | 'tingee-box-6ls' | 'tingee-box-6pro' | 'tingee-box-6xs' | 'vn-50' | 'loa-pay' | 'trusted-pay' | 'pay-alert' | 'tingee-box-3vn-mbb' | 'tingee-box-3pro-mbb' | 'tingee-box-3pro-x' | 'tingee-box-max' | 'tingee-box-8pro'
  uuid: string
}[]>>({
        method: 'post',
        path: '/v1/device/add-device-to-shop',
        body
      }).then(r => r.data)
    }

    updateShopDeviceLinkStatus(body: OpenApiUpdateShopDeviceLinkDto): Promise<TingeeApiResponse<EmptyDto>> {
      return http.request<TingeeApiResponse<EmptyDto>>({
        method: 'post',
        path: '/v1/device/update-shop-device-link-status',
        body
      }).then(r => r.data)
    }

    readAmountLinkToMerchant(body: OpenApiReadAmountDto): Promise<TingeeApiResponse<EmptyDto>> {
      return http.request<TingeeApiResponse<EmptyDto>>({
        method: 'post',
        path: '/v1/device/read-amount-link-to-merchant',
        body
      }).then(r => r.data)
    }

    showQrCode(body: OpenApiShowQRCodeDto): Promise<TingeeApiResponse<EmptyDto>> {
      return http.request<TingeeApiResponse<EmptyDto>>({
        method: 'post',
        path: '/v1/device/show-qr-code',
        body
      }).then(r => r.data)
    }

    showDynamicQrCode(body: OpenApiShowQRCodeDto): Promise<TingeeApiResponse<EmptyDto>> {
      return http.request<TingeeApiResponse<EmptyDto>>({
        method: 'post',
        path: '/v1/device/show-dynamic-qr-code',
        body
      }).then(r => r.data)
    }

    showStaticQrCode(body: OpenApiShowQRCodeDto): Promise<TingeeApiResponse<EmptyDto>> {
      return http.request<TingeeApiResponse<EmptyDto>>({
        method: 'post',
        path: '/v1/device/show-static-qr-code',
        body
      }).then(r => r.data)
    }

    getDevicesLinkToShopOrVa(body: OpenApiGetDevicesLinkToShopOrVA): Promise<TingeeApiResponse<{
  type: 'app-tingee' | 'tingee-box-f1' | 'tingee-box-2a' | 'tingee-box-2as' | 'tingee-box-s1' | 'tingee-box-3ls' | 'tingee-box-3pro' | 'tingee-box-3vn' | 'tingee-box-3vna' | 'tingee-box-4ls' | 'tingee-box-5s' | 'tingee-box-5sa' | 'tingee-box-6ls' | 'tingee-box-6pro' | 'tingee-box-6xs' | 'vn-50' | 'loa-pay' | 'trusted-pay' | 'pay-alert' | 'tingee-box-3vn-mbb' | 'tingee-box-3pro-mbb' | 'tingee-box-3pro-x' | 'tingee-box-max' | 'tingee-box-8pro'
  uuid: string
}[]>> {
      return http.request<TingeeApiResponse<{
  type: 'app-tingee' | 'tingee-box-f1' | 'tingee-box-2a' | 'tingee-box-2as' | 'tingee-box-s1' | 'tingee-box-3ls' | 'tingee-box-3pro' | 'tingee-box-3vn' | 'tingee-box-3vna' | 'tingee-box-4ls' | 'tingee-box-5s' | 'tingee-box-5sa' | 'tingee-box-6ls' | 'tingee-box-6pro' | 'tingee-box-6xs' | 'vn-50' | 'loa-pay' | 'trusted-pay' | 'pay-alert' | 'tingee-box-3vn-mbb' | 'tingee-box-3pro-mbb' | 'tingee-box-3pro-x' | 'tingee-box-max' | 'tingee-box-8pro'
  uuid: string
}[]>>({
        method: 'post',
        path: '/v1/device/get-devices-link-to-shop-or-va',
        body
      }).then(r => r.data)
    }

    getPaging(body: OpenApiGetPagingDeviceInputDto): Promise<TingeeApiResponse<PagedResultDto<DeviceDto>>> {
      return http.request<TingeeApiResponse<PagedResultDto<DeviceDto>>>({
        method: 'post',
        path: '/v1/device/get-paging',
        body
      }).then(r => r.data)
    }

    reset(query: {
    uuid: string
  }): Promise<TingeeApiResponse<String>> {
      return http.request<TingeeApiResponse<String>>({
        method: 'delete',
        path: '/v1/device/reset',
        query
      }).then(r => r.data)
    }

    generateAndShowDynamicQrCode(body: OpenApiGenerateAndShowDynamicQrCodeDto): Promise<TingeeApiResponse<any>> {
      return http.request<TingeeApiResponse<any>>({
        method: 'post',
        path: '/v1/device/generate-and-show-dynamic-qr-code',
        body
      }).then(r => r.data)
    }
  }(),

  shop: new class {
    createOrUpdate(body: OpenApiCreateOrUpdateShopDto): Promise<TingeeApiResponse<OpenApiCreateOrUpdateShopOutputDto>> {
      return http.request<TingeeApiResponse<OpenApiCreateOrUpdateShopOutputDto>>({
        method: 'post',
        path: '/v1/shop/create-or-update',
        body
      }).then(r => r.data)
    }

    getPaging(body: OpenApiGetShopPagedInputDto): Promise<TingeeApiResponse<PagedResultDto<OpenApiGetShopPagedOuputDto>>> {
      return http.request<TingeeApiResponse<PagedResultDto<OpenApiGetShopPagedOuputDto>>>({
        method: 'post',
        path: '/v1/shop/get-paging',
        body
      }).then(r => r.data)
    }
  }(),

  deepLink: new class {
    generate(body: OpenApiDeepLinkDto): Promise<TingeeApiResponse<String>> {
      return http.request<TingeeApiResponse<String>>({
        method: 'post',
        path: '/v1/deep-link/generate',
        body
      }).then(r => r.data)
    }
  }(),

  transaction: new class {
    getPaging(body: OpenApiTransactionPagedInputDto): Promise<TingeeApiResponse<PagedResultDto<OpenApiTransactionPagedOuputDto>>> {
      return http.request<TingeeApiResponse<PagedResultDto<OpenApiTransactionPagedOuputDto>>>({
        method: 'post',
        path: '/v1/transaction/get-paging',
        body
      }).then(r => r.data)
    }
  }(),

  directDebit: new class {
    register(body: OpenApiRegisterDto): Promise<TingeeApiResponse<String>> {
      return http.request<TingeeApiResponse<String>>({
        method: 'post',
        path: '/v1/direct-debit/register',
        body
      }).then(r => r.data)
    }

    paymentBill(body: OpenApiPaymentBillDto): Promise<TingeeApiResponse<PaymentBillResponseDto>> {
      return http.request<TingeeApiResponse<PaymentBillResponseDto>>({
        method: 'post',
        path: '/v1/direct-debit/payment-bill',
        body
      }).then(r => r.data)
    }

    deleteSubscription(body: OpenApiDeleteSubscriptionDto): Promise<TingeeApiResponse<DeleteSubscriptionOutputDto>> {
      return http.request<TingeeApiResponse<DeleteSubscriptionOutputDto>>({
        method: 'delete',
        path: '/v1/direct-debit/delete-subscription',
        body
      }).then(r => r.data)
    }

    refund(body: OpenApiRefundInputDto): Promise<TingeeApiResponse<RefundOutputDto>> {
      return http.request<TingeeApiResponse<RefundOutputDto>>({
        method: 'post',
        path: '/v1/direct-debit/refund',
        body
      }).then(r => r.data)
    }

    editConfirmPaymentMethod(body: OpenApiEditConfirmBeforePaymentMethodDto): Promise<TingeeApiResponse<String>> {
      return http.request<TingeeApiResponse<String>>({
        method: 'put',
        path: '/v1/direct-debit/edit-confirm-payment-method',
        body
      }).then(r => r.data)
    }

    getSubscriptionStatus(query: {
    requestId?: string
    subscriptionId: string
    tokenRef: string
  }): Promise<TingeeApiResponse<OpenApiSubscriptionStatusResponseDto>> {
      return http.request<TingeeApiResponse<OpenApiSubscriptionStatusResponseDto>>({
        method: 'get',
        path: '/v1/direct-debit/get-subscription-status',
        query
      }).then(r => r.data)
    }

    getTransactionStatus(query: {
    transactionId: string
    tokenRef: string
    subscriptionId: string
  }): Promise<TingeeApiResponse<OpenApiPaymentTransactionStatusResponseDto>> {
      return http.request<TingeeApiResponse<OpenApiPaymentTransactionStatusResponseDto>>({
        method: 'get',
        path: '/v1/direct-debit/get-transaction-status',
        query
      }).then(r => r.data)
    }

    getPagingTransactions(query: {
    subscriptionId: string
    tokenRef: string
    startTime?: string
    endTime?: string
    skipCount?: number
    maxResultCount?: number
  }): Promise<TingeeApiResponse<PagedResultDto<OpenApiPaymentTransactionsPagedOutputDto>>> {
      return http.request<TingeeApiResponse<PagedResultDto<OpenApiPaymentTransactionsPagedOutputDto>>>({
        method: 'get',
        path: '/v1/direct-debit/get-paging-transactions',
        query
      }).then(r => r.data)
    }
  }(),

  merchant: new class {
    getPagingConfig(body: OpenApiMerchantBankConfigPagedInputDto): Promise<TingeeApiResponse<PagedResultDto<MerchantBankConfigPagedOutputDto>>> {
      return http.request<TingeeApiResponse<PagedResultDto<MerchantBankConfigPagedOutputDto>>>({
        method: 'post',
        path: '/v1/merchant/get-paging-config',
        body
      }).then(r => r.data)
    }

    createOrUpdateConfig(body: OpenApiBankCreateOrUpdateConfigDto): Promise<TingeeApiResponse<number>> {
      return http.request<TingeeApiResponse<number>>({
        method: 'post',
        path: '/v1/merchant/create-or-update-config',
        body
      }).then(r => r.data)
    }

    deleteConfig(body: OpenApiDeleteConfigDto): Promise<TingeeApiResponse<number>> {
      return http.request<TingeeApiResponse<number>>({
        method: 'post',
        path: '/v1/merchant/delete-config',
        body
      }).then(r => r.data)
    }

    configAccountBusiness(body: OpenApiConfigAccountBusinessDto): Promise<TingeeApiResponse<OpenApiCreateBankVAOutputDto>> {
      return http.request<TingeeApiResponse<OpenApiCreateBankVAOutputDto>>({
        method: 'post',
        path: '/v1/merchant/config-account-business',
        body
      }).then(r => r.data)
    }

    deleteConfigAccountBusiness(body: OpenApiDeleteConfigBusinessDto): Promise<TingeeApiResponse<boolean | BankDeleteVAOutputDto>> {
      return http.request<TingeeApiResponse<boolean | BankDeleteVAOutputDto>>({
        method: 'post',
        path: '/v1/merchant/delete-config-account-business',
        body
      }).then(r => r.data)
    }

    create(body: OpenApiCreateMerchantDto): Promise<TingeeApiResponse<number>> {
      return http.request<TingeeApiResponse<number>>({
        method: 'post',
        path: '/v1/merchant/create',
        body
      }).then(r => r.data)
    }

    getPaging(body: OpenApiGetPagingMerchantsDto): Promise<TingeeApiResponse<PagedResultDto<MerchantDto>>> {
      return http.request<TingeeApiResponse<PagedResultDto<MerchantDto>>>({
        method: 'post',
        path: '/v1/merchant/get-paging',
        body
      }).then(r => r.data)
    }

    delete(query: {
    merchantId: number
  }): Promise<TingeeApiResponse<EmptyDto>> {
      return http.request<TingeeApiResponse<EmptyDto>>({
        method: 'delete',
        path: '/v1/merchant/delete',
        query
      }).then(r => r.data)
    }
  }(),

  eInvoice: new class {
    getPagingAccount(body: GetPagingEInvoiceAccountInputDto): Promise<TingeeApiResponse<PagedResultDto<GetPagingEInvoiceAccountOutputDto>>> {
      return http.request<TingeeApiResponse<PagedResultDto<GetPagingEInvoiceAccountOutputDto>>>({
        method: 'post',
        path: '/v1/e-invoice/get-paging-account',
        body
      }).then(r => r.data)
    }

    createOrUpdateAccount(body: CreateOrUpdateEInvoiceAccountDto): Promise<TingeeApiResponse<number>> {
      return http.request<TingeeApiResponse<number>>({
        method: 'post',
        path: '/v1/e-invoice/create-or-update-account',
        body
      }).then(r => r.data)
    }

    deleteAccount(body: DeleteEInvoiceAccountDto): Promise<TingeeApiResponse<EmptyDto>> {
      return http.request<TingeeApiResponse<EmptyDto>>({
        method: 'post',
        path: '/v1/e-invoice/delete-account',
        body
      }).then(r => r.data)
    }

    getProvider(): Promise<TingeeApiResponse<{
  code: 'x-cyber' | 'hilo' | 's-invoice'
  name: string
}[]>> {
      return http.request<TingeeApiResponse<{
  code: 'x-cyber' | 'hilo' | 's-invoice'
  name: string
}[]>>({
        method: 'post',
        path: '/v1/e-invoice/get-provider'
      }).then(r => r.data)
    }

    create(body: CreateInvoiceDto): Promise<TingeeApiResponse<DownloadInvoiceOutputDto>> {
      return http.request<TingeeApiResponse<DownloadInvoiceOutputDto>>({
        method: 'post',
        path: '/v1/e-invoice/create',
        body
      }).then(r => r.data)
    }

    createAndIssue(body: CreateInvoiceDto): Promise<TingeeApiResponse<TrackingResultDto>> {
      return http.request<TingeeApiResponse<TrackingResultDto>>({
        method: 'post',
        path: '/v1/e-invoice/create-and-issue',
        body
      }).then(r => r.data)
    }

    download(body: DownloadInvoiceQueryDto): Promise<TingeeApiResponse<DownloadInvoiceOutputDto>> {
      return http.request<TingeeApiResponse<DownloadInvoiceOutputDto>>({
        method: 'post',
        path: '/v1/e-invoice/download',
        body
      }).then(r => r.data)
    }

    invoiceTemplates(body: InvoiceTemplateQueryDto): Promise<TingeeApiResponse<InvoiceTemplateOutputDto>> {
      return http.request<TingeeApiResponse<InvoiceTemplateOutputDto>>({
        method: 'post',
        path: '/v1/e-invoice/invoice-templates',
        body
      }).then(r => r.data)
    }

    sendEmail(body: SendInvoiceEmailDto): Promise<TingeeApiResponse<EmptyDto>> {
      return http.request<TingeeApiResponse<EmptyDto>>({
        method: 'post',
        path: '/v1/e-invoice/send-email',
        body
      }).then(r => r.data)
    }
  }()
})

export type TingeeAllMethods = ReturnType<typeof allMethods>
