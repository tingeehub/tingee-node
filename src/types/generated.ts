// Auto-generated from openapi/sdk.json
// DO NOT EDIT MANUALLY

import { BankBinEnum } from './bank-constants.js'

export type OpenApiOuputDto = {
  code: string
  message: string
  data: Record<string, any>
}

export type GenerateVietQROuputDto = {
  qrCode: string
  qrCodeImage: string
  qrAccount: string
  referenceLabelCode: string
}

export type BankNameEnum = 'OCB' | 'BIDV' | 'MBB' | 'ACB' | 'VPB' | 'PGB' | 'VIB' | 'STB' | 'CTG' | 'VCB' | 'AGRIBANK' | 'SHINHAN' | 'COB' | 'MSB'

export type OpenApiGenerateVietQRInputDto = {
  bankBin?: BankBinEnum | string
  bankName?: 'OCB' | 'BIDV' | 'MBB' | 'ACB' | 'VPB' | 'PGB' | 'VIB' | 'STB' | 'CTG' | 'VCB' | 'AGRIBANK' | 'SHINHAN' | 'COB' | 'MSB'
  accountNumber: string
  amount?: number
  content?: string
}

export type GenerateDynamicQROuputDto = {
  qrCode: string
  qrAccount: string
  billId: string
}

export type QRCodeTypeEnum = 'dynamic-one-time-payment' | 'dynamic-recurring-payment'

export type GenerateDynamicQRInputDto = {
  merchantId?: number
  vaAccountNumber: string
  qrCodeType: 'dynamic-one-time-payment' | 'dynamic-recurring-payment'
  bankBin?: BankBinEnum | string
  bankName?: 'OCB' | 'BIDV' | 'MBB' | 'ACB' | 'VPB' | 'PGB' | 'VIB' | 'STB' | 'CTG' | 'VCB' | 'AGRIBANK' | 'SHINHAN' | 'COB' | 'MSB'
  amount?: number
  purpose?: string
  expireInMinute?: number
  extraInfo?: string
}

export type EmptyDto = {

}

export type OpenApiDeleteDynamicQRInputDto = {
  merchantId?: number
  qrAccount: string
  billId: string
}

export type OpenApiBillInfoDto = {
  billId: string
  qrCodeType: string
  bankBin: BankBinEnum | string
  accountNumber: string
  vaAccountNumber: string
  qrAccount: string
  amount: number
  purpose: string
  totalAmountPaid: number
  totalPaymentsCount: number
  expireInMinute: number
  extraInfo?: string
  status: string
}

export type CashFlowSourceEnum = 'bank-transfer' | 'card'

export type OpenApiTransactionPagedOuputDto = {
  transactionId: string
  merchantId: number
  shopId: number
  bankBin?: BankBinEnum | string
  cashFlowSource?: 'bank-transfer' | 'card'
  code: string
  amount: number
  type?: string
  content?: string
  currency?: string
  accountNumber: string
  vaAccountNumber?: string
  transactionDate?: string
  billId?: string
}

export type OpenApiGetStatusDynamicQROutputDto = {
  billInfo: {
  billId: string
  qrCodeType: string
  bankBin: BankBinEnum | string
  accountNumber: string
  vaAccountNumber: string
  qrAccount: string
  amount: number
  purpose: string
  totalAmountPaid: number
  totalPaymentsCount: number
  expireInMinute: number
  extraInfo?: string
  status: string
}
  transactionInfos: {
  transactionId: string
  merchantId: number
  shopId: number
  bankBin?: BankBinEnum | string
  cashFlowSource?: 'bank-transfer' | 'card'
  code: string
  amount: number
  type?: string
  content?: string
  currency?: string
  accountNumber: string
  vaAccountNumber?: string
  transactionDate?: string
  billId?: string
}[]
}

export type OpenApiGetStatusDynamicQRInputDto = {
  merchantId?: number
  qrAccount: string
  billId: string
}

export type Bank = {
  code: 'OCB' | 'BIDV' | 'MBB' | 'ACB' | 'VPB' | 'PGB' | 'VIB' | 'STB' | 'CTG' | 'VCB' | 'AGRIBANK' | 'SHINHAN' | 'COB' | 'MSB'
  name: string
  shortName: string
  bin: string
  urlLogo: string
  termsAndConditions: Record<string, any>
}

export type PagedResultDto<T = any> = {
  totalCount?: number
  items: T[]
}

export type BankAccountTypeEnum = 'personal-account' | 'business-account' | 'business-household-account'

export type StatusMerchantAccountNumberEnum = 'inactive' | 'active' | 'lock'

export type OpenApiGetVAPagedOuputDto = {
  bankName: 'OCB' | 'BIDV' | 'MBB' | 'ACB' | 'VPB' | 'PGB' | 'VIB' | 'STB' | 'CTG' | 'VCB' | 'AGRIBANK' | 'SHINHAN' | 'COB' | 'MSB'
  bankBin?: BankBinEnum | string
  accountType: 'personal-account' | 'business-account' | 'business-household-account'
  accountName?: string
  accountNumber: string
  vaAccountNumber?: string
  shopId: number
  status: 'inactive' | 'active' | 'lock'
  creationTime?: string
}

export type DataAccessFilterEnum = 'referral-only' | 'distributor-only' | 'with-package-only'

export type OpenApiGetVAPagedInputDto = {
  filter?: string
  sorting?: string
  skipCount: number
  maxResultCount: number
  startTime?: string
  endTime?: string
  merchantId: number
  shopId?: number
  accountType: 'personal-account' | 'business-account' | 'business-household-account'
  agentId?: number
  dataAccess: 'referral-only' | 'distributor-only' | 'with-package-only'
  bankBin?: BankBinEnum | string
  bankName?: 'OCB' | 'BIDV' | 'MBB' | 'ACB' | 'VPB' | 'PGB' | 'VIB' | 'STB' | 'CTG' | 'VCB' | 'AGRIBANK' | 'SHINHAN' | 'COB' | 'MSB'
}

export type OpenApiGenerateVietQROuputDto = {
  bankBin: BankBinEnum | string
  accountNumber: string
  amount?: string
  purpose?: string
  vaPrefix: string
  vaSuffix: string
}

export type OtpStbConfirmMethodEnum = 'SMSTTT' | 'SmartOTP' | 'mCode'

export type BankCreateVAOuputDto = {
  bankName: 'OCB' | 'BIDV' | 'MBB' | 'ACB' | 'VPB' | 'PGB' | 'VIB' | 'STB' | 'CTG' | 'VCB' | 'AGRIBANK' | 'SHINHAN' | 'COB' | 'MSB'
  merchantAccountNumberId: number
  shopId: number
  status: 'inactive' | 'active' | 'lock'
  confirmId: string
  vaAccountNumber: string
  deepLink: string
  otpMethod: 'SMSTTT' | 'SmartOTP' | 'mCode'
}

export type AppTypeEnum = 'ocb-web' | 'ocb-app' | 'bidv-web' | 'bidv-app' | 'stb-web' | 'stb-app' | 'vcb-web' | 'vcb-app' | 'tingee-web' | 'tingee-app' | 'tingee-merchant-app' | 'loa-hub' | 'mini-app-mbb' | 'baas'

export type LinkTypeEnum = 'api-exact' | 'manual-exact' | 'manual-include'

export type OpenApiCreateVAInpuDto = {
  name?: string
  cashFlowSource?: 'bank-transfer' | 'card'
  accountType: 'personal-account' | 'business-account' | 'business-household-account'
  accountNumber?: string
  accountName?: string
  identity?: string
  mobile?: string
  masterMerchantId?: number
  shopId?: number
  vaPrefix?: string
  vaSuffix?: string
  merchantName?: string
  merchantAddress?: string
  serviceId?: number
  isCreateNonOtp?: boolean
  code?: string
  taxCode?: string
  softposUserName?: string
  softposDeveloperId?: string
  softposTid?: string
  softposMid?: string
  authorizationCode?: string
  sessionLogin?: string
  isNotifyAccountNumber?: boolean
  appType: 'ocb-web' | 'ocb-app' | 'bidv-web' | 'bidv-app' | 'stb-web' | 'stb-app' | 'vcb-web' | 'vcb-app' | 'tingee-web' | 'tingee-app' | 'tingee-merchant-app' | 'loa-hub' | 'mini-app-mbb' | 'baas'
  linkType?: 'api-exact' | 'manual-exact' | 'manual-include'
  vaAccountNumber?: string
  acbUserId?: string
  bankBin?: BankBinEnum | string
  bankName?: 'OCB' | 'BIDV' | 'MBB' | 'ACB' | 'VPB' | 'PGB' | 'VIB' | 'STB' | 'CTG' | 'VCB' | 'AGRIBANK' | 'SHINHAN' | 'COB' | 'MSB'
  merchantId?: number
  redirectUrl?: string
  webhookUrl?: string
}

export type OpenApiConfirmVAOuputDto = {
  accountType: 'personal-account' | 'business-account' | 'business-household-account'
  bankName: 'OCB' | 'BIDV' | 'MBB' | 'ACB' | 'VPB' | 'PGB' | 'VIB' | 'STB' | 'CTG' | 'VCB' | 'AGRIBANK' | 'SHINHAN' | 'COB' | 'MSB'
  accountNumber: string
  vaAccountNumber: string
}

export type OpenApiBankConfirmVAInputDto = {
  merchantId?: number
  confirmId: string
  otpNumber: string
  bankName: 'OCB' | 'BIDV' | 'MBB' | 'ACB' | 'VPB' | 'PGB' | 'VIB' | 'STB' | 'CTG' | 'VCB' | 'AGRIBANK' | 'SHINHAN' | 'COB' | 'MSB'
  bankBin: BankBinEnum | string
}

export type BankDeleteVAOutputDto = {
  confirmId: string
}

export type OpenApiRegisterNotifyDto = {
  merchantId?: number
  vaAccountNumber: string
  bankBin?: BankBinEnum | string
  bankName?: 'OCB' | 'BIDV' | 'MBB' | 'ACB' | 'VPB' | 'PGB' | 'VIB' | 'STB' | 'CTG' | 'VCB' | 'AGRIBANK' | 'SHINHAN' | 'COB' | 'MSB'
}

export type OpenApiRefundDto = {
  merchantId?: number
  transactionCode: string
  bankBin?: BankBinEnum | string
  bankName?: 'OCB' | 'BIDV' | 'MBB' | 'ACB' | 'VPB' | 'PGB' | 'VIB' | 'STB' | 'CTG' | 'VCB' | 'AGRIBANK' | 'SHINHAN' | 'COB' | 'MSB'
}

export type OpenApiReadSecurityCodeDto = {
  merchantId?: number
  uuid: string
}

export type OpenApiReadPartnerSecurityCodeDto = {
  merchantId?: number
  uuid: string
  securityCode: string
}

export type DeviceTypeEnum = 'app-tingee' | 'tingee-box-f1' | 'tingee-box-2a' | 'tingee-box-2as' | 'tingee-box-s1' | 'tingee-box-3ls' | 'tingee-box-3pro' | 'tingee-box-3vn' | 'tingee-box-3vna' | 'tingee-box-4ls' | 'tingee-box-5s' | 'tingee-box-5sa' | 'tingee-box-6ls' | 'tingee-box-6pro' | 'tingee-box-6xs' | 'vn-50' | 'loa-pay' | 'trusted-pay' | 'pay-alert' | 'tingee-box-3vn-mbb' | 'tingee-box-3pro-mbb' | 'tingee-box-3pro-x' | 'tingee-box-max' | 'tingee-box-8pro'

export type SendNotifyTingeeBoxDto = {
  type: 'app-tingee' | 'tingee-box-f1' | 'tingee-box-2a' | 'tingee-box-2as' | 'tingee-box-s1' | 'tingee-box-3ls' | 'tingee-box-3pro' | 'tingee-box-3vn' | 'tingee-box-3vna' | 'tingee-box-4ls' | 'tingee-box-5s' | 'tingee-box-5sa' | 'tingee-box-6ls' | 'tingee-box-6pro' | 'tingee-box-6xs' | 'vn-50' | 'loa-pay' | 'trusted-pay' | 'pay-alert' | 'tingee-box-3vn-mbb' | 'tingee-box-3pro-mbb' | 'tingee-box-3pro-x' | 'tingee-box-max' | 'tingee-box-8pro'
  uuid: string
}

export type OpenApiAddDeviceToShop = {
  uuid: string
  securityCode: string
  appType: 'ocb-web' | 'ocb-app' | 'bidv-web' | 'bidv-app' | 'stb-web' | 'stb-app' | 'vcb-web' | 'vcb-app' | 'tingee-web' | 'tingee-app' | 'tingee-merchant-app' | 'loa-hub' | 'mini-app-mbb' | 'baas'
  masterMerchantId?: number
  merchantId?: number
  vaAccountNumbers?: string[]
  shopIds?: number[]
}

export type OpenApiShopLinkToDeviceDto = {
  shopName: string
  shopId: number
  isLinkToDevice: boolean
  fullAddress: string
  vaAccountNumber?: string
}

export type OpenApiUpdateShopDeviceLinkDto = {
  uuid: string
  type: 'app-tingee' | 'tingee-box-f1' | 'tingee-box-2a' | 'tingee-box-2as' | 'tingee-box-s1' | 'tingee-box-3ls' | 'tingee-box-3pro' | 'tingee-box-3vn' | 'tingee-box-3vna' | 'tingee-box-4ls' | 'tingee-box-5s' | 'tingee-box-5sa' | 'tingee-box-6ls' | 'tingee-box-6pro' | 'tingee-box-6xs' | 'vn-50' | 'loa-pay' | 'trusted-pay' | 'pay-alert' | 'tingee-box-3vn-mbb' | 'tingee-box-3pro-mbb' | 'tingee-box-3pro-x' | 'tingee-box-max' | 'tingee-box-8pro'
  appType: 'ocb-web' | 'ocb-app' | 'bidv-web' | 'bidv-app' | 'stb-web' | 'stb-app' | 'vcb-web' | 'vcb-app' | 'tingee-web' | 'tingee-app' | 'tingee-merchant-app' | 'loa-hub' | 'mini-app-mbb' | 'baas'
  shopsLinkToDeviceDtos: {
  shopName: string
  shopId: number
  isLinkToDevice: boolean
  fullAddress: string
  vaAccountNumber?: string
}[]
  merchantId?: number
}

export type BIDVOpenApiReadAmountDto = {
  uuid: string
  transactionId: string
  amount: number
  bankBin: BankBinEnum | string
  bankName?: 'OCB' | 'BIDV' | 'MBB' | 'ACB' | 'VPB' | 'PGB' | 'VIB' | 'STB' | 'CTG' | 'VCB' | 'AGRIBANK' | 'SHINHAN' | 'COB' | 'MSB'
  firstDisplayText?: string
  secondDisplayText?: string
  thirdDisplayText?: string
  playSound?: boolean
}

export type OpenApiReadAmountDto = {
  merchantId?: number
  uuid: string
  transactionId: string
  amount: number
  bankBin: BankBinEnum | string
  bankName?: 'OCB' | 'BIDV' | 'MBB' | 'ACB' | 'VPB' | 'PGB' | 'VIB' | 'STB' | 'CTG' | 'VCB' | 'AGRIBANK' | 'SHINHAN' | 'COB' | 'MSB'
  firstDisplayText?: string
  secondDisplayText?: string
  thirdDisplayText?: string
  playSound?: boolean
}

export type OpenApiShowQRCodeDto = {
  merchantId?: number
  vaAccountNumber?: string
  amount: number
  qrCode: string
  bankBin?: BankBinEnum | string
  bankName?: 'OCB' | 'BIDV' | 'MBB' | 'ACB' | 'VPB' | 'PGB' | 'VIB' | 'STB' | 'CTG' | 'VCB' | 'AGRIBANK' | 'SHINHAN' | 'COB' | 'MSB'
  uuid: string
  deviceType?: 'app-tingee' | 'tingee-box-f1' | 'tingee-box-2a' | 'tingee-box-2as' | 'tingee-box-s1' | 'tingee-box-3ls' | 'tingee-box-3pro' | 'tingee-box-3vn' | 'tingee-box-3vna' | 'tingee-box-4ls' | 'tingee-box-5s' | 'tingee-box-5sa' | 'tingee-box-6ls' | 'tingee-box-6pro' | 'tingee-box-6xs' | 'vn-50' | 'loa-pay' | 'trusted-pay' | 'pay-alert' | 'tingee-box-3vn-mbb' | 'tingee-box-3pro-mbb' | 'tingee-box-3pro-x' | 'tingee-box-max' | 'tingee-box-8pro'
  firstText?: string
  secondText?: string
  thirdText?: string
  showTime?: number
  isStaticQr?: boolean
  playSound?: boolean
}

export type OpenApiGetDevicesLinkToShopOrVA = {
  merchantId: number
  vaAccountNumber: string
  shopId: number
}

export type DeviceStatusEnum = 'waiting-progressing' | 'refuse' | 'approved'

export type DeviceInfoDto = {

}

export type ShopInfoDto = {
  name: string
  id: number
}

export type DeviceDto = {
  id?: number
  creationTime: string
  creatorUserId?: number
  lastModificationTime: string
  lastModifierUserId?: number
  deleterUserId?: number
  type: 'app-tingee' | 'tingee-box-f1' | 'tingee-box-2a' | 'tingee-box-2as' | 'tingee-box-s1' | 'tingee-box-3ls' | 'tingee-box-3pro' | 'tingee-box-3vn' | 'tingee-box-3vna' | 'tingee-box-4ls' | 'tingee-box-5s' | 'tingee-box-5sa' | 'tingee-box-6ls' | 'tingee-box-6pro' | 'tingee-box-6xs' | 'vn-50' | 'loa-pay' | 'trusted-pay' | 'pay-alert' | 'tingee-box-3vn-mbb' | 'tingee-box-3pro-mbb' | 'tingee-box-3pro-x' | 'tingee-box-max' | 'tingee-box-8pro'
  uuid: string
  name: string
  system?: string
  systemVersion?: string
  merchantId?: number
  assignedAgentId?: number
  merchantPhoneNumber?: string
  employeeName?: string
  firebaseToken?: string
  status: 'waiting-progressing' | 'refuse' | 'approved'
  deviceInfoDto?: {

}
  useDate?: string
  securityCode?: string
  selectedBankNames?: 'OCB' | 'BIDV' | 'MBB' | 'ACB' | 'VPB' | 'PGB' | 'VIB' | 'STB' | 'CTG' | 'VCB' | 'AGRIBANK' | 'SHINHAN' | 'COB' | 'MSB'[]
  userReferralAncestorIds?: string
  userReferralLevel?: number
  deviceDistributorAncestorIds?: string
  deviceDistributorLevel?: number
  masterMerchantId: number
  expirationDate?: string
  merchantName?: string
  shopDtos?: {
  name: string
  id: number
}[]
  agentName?: string
  agentId?: number
}

export type OpenApiGetPagingDeviceInputDto = {
  filter?: string
  sorting?: string
  skipCount: number
  maxResultCount: number
  merchantId: number
  type?: 'app-tingee' | 'tingee-box-f1' | 'tingee-box-2a' | 'tingee-box-2as' | 'tingee-box-s1' | 'tingee-box-3ls' | 'tingee-box-3pro' | 'tingee-box-3vn' | 'tingee-box-3vna' | 'tingee-box-4ls' | 'tingee-box-5s' | 'tingee-box-5sa' | 'tingee-box-6ls' | 'tingee-box-6pro' | 'tingee-box-6xs' | 'vn-50' | 'loa-pay' | 'trusted-pay' | 'pay-alert' | 'tingee-box-3vn-mbb' | 'tingee-box-3pro-mbb' | 'tingee-box-3pro-x' | 'tingee-box-max' | 'tingee-box-8pro'
}

export type String = {

}

export type OpenApiGenerateAndShowDynamicQrCodeDto = {
  merchantId?: number
  vaAccountNumber: string
  qrCodeType: 'dynamic-one-time-payment' | 'dynamic-recurring-payment'
  bankBin?: BankBinEnum | string
  bankName?: 'OCB' | 'BIDV' | 'MBB' | 'ACB' | 'VPB' | 'PGB' | 'VIB' | 'STB' | 'CTG' | 'VCB' | 'AGRIBANK' | 'SHINHAN' | 'COB' | 'MSB'
  amount?: number
  purpose?: string
  expireInMinute?: number
  extraInfo?: string
  uuid: string
  deviceType?: 'app-tingee' | 'tingee-box-f1' | 'tingee-box-2a' | 'tingee-box-2as' | 'tingee-box-s1' | 'tingee-box-3ls' | 'tingee-box-3pro' | 'tingee-box-3vn' | 'tingee-box-3vna' | 'tingee-box-4ls' | 'tingee-box-5s' | 'tingee-box-5sa' | 'tingee-box-6ls' | 'tingee-box-6pro' | 'tingee-box-6xs' | 'vn-50' | 'loa-pay' | 'trusted-pay' | 'pay-alert' | 'tingee-box-3vn-mbb' | 'tingee-box-3pro-mbb' | 'tingee-box-3pro-x' | 'tingee-box-max' | 'tingee-box-8pro'
  firstText?: string
  secondText?: string
  thirdText?: string
  showTime?: number
  playSound?: boolean
  readAmountAfterPay?: boolean
}

export type OpenApiVerifyReferralCodeResponseDto = {
  isValid: boolean
  canConnectAllBanks?: boolean
  bankBins?: string[]
}

export type OpenApiCreateOrUpdateShopOutputDto = {
  shopId: number
}

export type SendNotifyTelegramDto = {
  chatId: number
}

export type SendNotifyLarkDto = {
  urlWebhook: string
}

export type ZaloTypeEnum = 'phone-number' | 'group'

export type SendNotifyZaloDto = {
  type: 'phone-number' | 'group'
  name: string
}

export type SendNotifyPlatformDto = {
  telegramDtos: {
  chatId: number
}[]
  larkDtos: {
  urlWebhook: string
}[]
  zaloDtos: {
  type: 'phone-number' | 'group'
  name: string
}[]
  tingeeBoxDtos: {
  type: 'app-tingee' | 'tingee-box-f1' | 'tingee-box-2a' | 'tingee-box-2as' | 'tingee-box-s1' | 'tingee-box-3ls' | 'tingee-box-3pro' | 'tingee-box-3vn' | 'tingee-box-3vna' | 'tingee-box-4ls' | 'tingee-box-5s' | 'tingee-box-5sa' | 'tingee-box-6ls' | 'tingee-box-6pro' | 'tingee-box-6xs' | 'vn-50' | 'loa-pay' | 'trusted-pay' | 'pay-alert' | 'tingee-box-3vn-mbb' | 'tingee-box-3pro-mbb' | 'tingee-box-3pro-x' | 'tingee-box-max' | 'tingee-box-8pro'
  uuid: string
}[]
}

export type OpenApiCreateOrUpdateShopDto = {
  id?: number
  name: string
  email?: string
  phoneNumber?: string
  provinceId?: string
  districtId?: string
  communeId?: string
  address?: string
  fullAddress?: string
  sendNotifyPlatformDto?: {
  telegramDtos: {
  chatId: number
}[]
  larkDtos: {
  urlWebhook: string
}[]
  zaloDtos: {
  type: 'phone-number' | 'group'
  name: string
}[]
  tingeeBoxDtos: {
  type: 'app-tingee' | 'tingee-box-f1' | 'tingee-box-2a' | 'tingee-box-2as' | 'tingee-box-s1' | 'tingee-box-3ls' | 'tingee-box-3pro' | 'tingee-box-3vn' | 'tingee-box-3vna' | 'tingee-box-4ls' | 'tingee-box-5s' | 'tingee-box-5sa' | 'tingee-box-6ls' | 'tingee-box-6pro' | 'tingee-box-6xs' | 'vn-50' | 'loa-pay' | 'trusted-pay' | 'pay-alert' | 'tingee-box-3vn-mbb' | 'tingee-box-3pro-mbb' | 'tingee-box-3pro-x' | 'tingee-box-max' | 'tingee-box-8pro'
  uuid: string
}[]
}
  isActive: boolean
  status?: 'notConnectedDevice' | 'delivering' | 'delivered' | 'connectedDevice' | 'linkedVa' | 'linkedVaNoDevice'
  userReferralAncestorIds?: string
  userReferralLevel?: number
  deviceDistributorAncestorMap?: string
  merchantId?: number
}

export type OpenApiGetShopPagedOuputDto = {
  id: number
  isActive: boolean
  name: string
  address: string
}

export type OpenApiGetShopPagedInputDto = {
  filter?: string
  sorting?: string
  skipCount: number
  maxResultCount: number
  merchantId?: number
}

export type GoogleModuleConfigDto = {
  enable: boolean
  position: number
  placeId: string
  title: string
}

export type HotlineModuleConfigDto = {
  enable: boolean
  position: number
  phoneNumber: string
  title: string
}

export type EmailModuleConfigDto = {
  enable: boolean
  position: number
  email: string
  title: string
}

export type ZaloModuleConfigDto = {
  enable: boolean
  position: number
  zaloId: string
  title: string
}

export type MessengerModuleConfigDto = {
  enable: boolean
  position: number
  pageId: string
  title: string
}

export type PaymentModuleConfigDto = {
  enable: boolean
  position: number
  accountNumberIds: string[]
  title: string
  description: string
}

export type InvoiceModuleConfigDto = {
  enable: boolean
  position: number
  title: string
  description: string
  webhook: string
}

export type ShopNfcModuleItemDto = {
  googleConfig: {
  enable: boolean
  position: number
  placeId: string
  title: string
}
  hotlineConfig: {
  enable: boolean
  position: number
  phoneNumber: string
  title: string
}
  emailConfig: {
  enable: boolean
  position: number
  email: string
  title: string
}
  zaloConfig: {
  enable: boolean
  position: number
  zaloId: string
  title: string
}
  messengerConfig: {
  enable: boolean
  position: number
  pageId: string
  title: string
}
  paymentConfig: {
  enable: boolean
  position: number
  accountNumberIds: string[]
  title: string
  description: string
}
  invoiceConfig: {
  enable: boolean
  position: number
  title: string
  description: string
  webhook: string
}
}

export type OpenApiShopNFCConfigDto = {
  merchantId?: number
  shopId: number
  displayName: string
  color: string
  address: string
  title: string
  description: string
  logo: string
  avatar: string
  isActive: boolean
  modules: {
  googleConfig: {
  enable: boolean
  position: number
  placeId: string
  title: string
}
  hotlineConfig: {
  enable: boolean
  position: number
  phoneNumber: string
  title: string
}
  emailConfig: {
  enable: boolean
  position: number
  email: string
  title: string
}
  zaloConfig: {
  enable: boolean
  position: number
  zaloId: string
  title: string
}
  messengerConfig: {
  enable: boolean
  position: number
  pageId: string
  title: string
}
  paymentConfig: {
  enable: boolean
  position: number
  accountNumberIds: string[]
  title: string
  description: string
}
  invoiceConfig: {
  enable: boolean
  position: number
  title: string
  description: string
  webhook: string
}
}
}

export type OpenApiLinkOrUnlinkNfcShopDto = {
  nfcId: string
  shopId: number
  isLink: boolean
  merchantId?: number
}

export type OpenApiDeepLinkDto = {
  merchantId?: number
  type: string
  qrCode: string
  redirectUrl: string
  callbackUrl: string
  bankBin: BankBinEnum | string
  destinationBankBin: string
  accountName: string
  accountNumber: string
  amount?: number
  content?: string
  billNumber: string
}

export type OCBInfoDto = {
  vaPrefix: string
  identificationNumber: string
  accountName: string
  accountNumber: string
  registerDate: string
  vaAccountNumber: string
  merchantName: string
  merchantAddress: string
  mobilePhone: string
  email: string
}

export type TPBInfoDto = {
  accountName: string
}

export type BIDVInfoDto = {
  vaPrefix: string
  merchantName: string
  merchantAddress: string
  accountNo: string
  accountName: string
  identity: string
  mobile: string
  email: string
}

export type MBBInfoDto = {
  merchantName: string
  merchantAddress: string
  accountNumber: string
  accountName: string
  identity: string
  mobile: string
  email: string
}

export type ACBInfoDto = {
  vaPrefix: string
  merchantName: string
  merchantAddress: string
  accountNumber: string
  accountName: string
  mobile: string
  email: string
  acbUserId: string
}

export type VPBInfoDto = {
  accountNumber: string
  accountName: string
  identity: string
  registerId: string
  bankRegisterId: string
  isWaitingForApproveDelete: boolean
  softposUserName: string
  softposDeveloperId: string
  softposTid: string
  softposMid: string
}

export type ShinhanInfoDto = {
  vaPrefix: string
  accountNumber: string
  merchantName: string
}

export type PGBInfoDto = {
  accountName: string
  accountNumber: string
  identity: string
  mobile: string
}

export type VIBInfoDto = {
  vaPrefix: string
  merchantName: string
  accountNumber: string
  accountName: string
  identity: string
  mobile: string
  email: string
  contractId: string
  custId: string
}

export type CTGInfoDto = {
  vaPrefix: string
  merchantName: string
  accountNumber: string
  accountName: string
  identity: string
  mobile: string
}

export type STBInfoDto = {
  merchantName: string
  accountNumber: string
  accountName: string
  identity: string
  mobile: string
  merchantId: string
  storeId: string
}

export type AgribankInfoDto = {
  accountNumber: string
  accountName: string
  identity: string
  mobile: string
  taxCode: string
  agribankVaId: string
}

export type VCBBaasDto = {
  requestId: string
  redirectUrl: string
  webhookUrl: string
}

export type VCBInfoDto = {
  accountName: string
  accountNumber: string
  mobile: string
  baasDto: {
  requestId: string
  redirectUrl: string
  webhookUrl: string
}
}

export type COBInfoDto = {
  accountName: string
  accountNumber: string
  identity: string
  mobile: string
  merchantName: string
}

export type MSBInfoDto = {
  mobile: string
  vaPrefix: string
}

export type BankInfoDto = {
  ocbInfoDto: {
  vaPrefix: string
  identificationNumber: string
  accountName: string
  accountNumber: string
  registerDate: string
  vaAccountNumber: string
  merchantName: string
  merchantAddress: string
  mobilePhone: string
  email: string
}
  tpbInfoDto: {
  accountName: string
}
  bidvInfoDto: {
  vaPrefix: string
  merchantName: string
  merchantAddress: string
  accountNo: string
  accountName: string
  identity: string
  mobile: string
  email: string
}
  mbbInfoDto: {
  merchantName: string
  merchantAddress: string
  accountNumber: string
  accountName: string
  identity: string
  mobile: string
  email: string
}
  acbInfoDto: {
  vaPrefix: string
  merchantName: string
  merchantAddress: string
  accountNumber: string
  accountName: string
  mobile: string
  email: string
  acbUserId: string
}
  vpbInfoDto: {
  accountNumber: string
  accountName: string
  identity: string
  registerId: string
  bankRegisterId: string
  isWaitingForApproveDelete: boolean
  softposUserName: string
  softposDeveloperId: string
  softposTid: string
  softposMid: string
}
  shinhanInfoDto: {
  vaPrefix: string
  accountNumber: string
  merchantName: string
}
  pgbInfoDto: {
  accountName: string
  accountNumber: string
  identity: string
  mobile: string
}
  vibInfoDto: {
  vaPrefix: string
  merchantName: string
  accountNumber: string
  accountName: string
  identity: string
  mobile: string
  email: string
  contractId: string
  custId: string
}
  ctgInfoDto: {
  vaPrefix: string
  merchantName: string
  accountNumber: string
  accountName: string
  identity: string
  mobile: string
}
  stbInfoDto: {
  merchantName: string
  accountNumber: string
  accountName: string
  identity: string
  mobile: string
  merchantId: string
  storeId: string
}
  agribankInfoDto: {
  accountNumber: string
  accountName: string
  identity: string
  mobile: string
  taxCode: string
  agribankVaId: string
}
  vcbInfoDto: {
  accountName: string
  accountNumber: string
  mobile: string
  baasDto: {
  requestId: string
  redirectUrl: string
  webhookUrl: string
}
}
  cobInfoDto: {
  accountName: string
  accountNumber: string
  identity: string
  mobile: string
  merchantName: string
}
  msbInfoDto: {
  mobile: string
  vaPrefix: string
}
}

export type V2AccountNumberDDLDto = {
  id: number
  name: string
  merchantId: number
  bankBin: BankBinEnum | string
  bankName: 'OCB' | 'BIDV' | 'MBB' | 'ACB' | 'VPB' | 'PGB' | 'VIB' | 'STB' | 'CTG' | 'VCB' | 'AGRIBANK' | 'SHINHAN' | 'COB' | 'MSB'
  accountNumber: string
  vaAccountNumber?: string
  realVANumber?: string
  bankInfoDto?: {
  ocbInfoDto: {
  vaPrefix: string
  identificationNumber: string
  accountName: string
  accountNumber: string
  registerDate: string
  vaAccountNumber: string
  merchantName: string
  merchantAddress: string
  mobilePhone: string
  email: string
}
  tpbInfoDto: {
  accountName: string
}
  bidvInfoDto: {
  vaPrefix: string
  merchantName: string
  merchantAddress: string
  accountNo: string
  accountName: string
  identity: string
  mobile: string
  email: string
}
  mbbInfoDto: {
  merchantName: string
  merchantAddress: string
  accountNumber: string
  accountName: string
  identity: string
  mobile: string
  email: string
}
  acbInfoDto: {
  vaPrefix: string
  merchantName: string
  merchantAddress: string
  accountNumber: string
  accountName: string
  mobile: string
  email: string
  acbUserId: string
}
  vpbInfoDto: {
  accountNumber: string
  accountName: string
  identity: string
  registerId: string
  bankRegisterId: string
  isWaitingForApproveDelete: boolean
  softposUserName: string
  softposDeveloperId: string
  softposTid: string
  softposMid: string
}
  shinhanInfoDto: {
  vaPrefix: string
  accountNumber: string
  merchantName: string
}
  pgbInfoDto: {
  accountName: string
  accountNumber: string
  identity: string
  mobile: string
}
  vibInfoDto: {
  vaPrefix: string
  merchantName: string
  accountNumber: string
  accountName: string
  identity: string
  mobile: string
  email: string
  contractId: string
  custId: string
}
  ctgInfoDto: {
  vaPrefix: string
  merchantName: string
  accountNumber: string
  accountName: string
  identity: string
  mobile: string
}
  stbInfoDto: {
  merchantName: string
  accountNumber: string
  accountName: string
  identity: string
  mobile: string
  merchantId: string
  storeId: string
}
  agribankInfoDto: {
  accountNumber: string
  accountName: string
  identity: string
  mobile: string
  taxCode: string
  agribankVaId: string
}
  vcbInfoDto: {
  accountName: string
  accountNumber: string
  mobile: string
  baasDto: {
  requestId: string
  redirectUrl: string
  webhookUrl: string
}
}
  cobInfoDto: {
  accountName: string
  accountNumber: string
  identity: string
  mobile: string
  merchantName: string
}
  msbInfoDto: {
  mobile: string
  vaPrefix: string
}
}
  shopId: number
  shopName: string
}

export type OpenApiAccountNumberDDLPagedInputDto = {
  filter?: string
  sorting?: string
  skipCount: number
  maxResultCount: number
  merchantId?: number
  merchantAccountNumberIds?: number[]
  shopIds?: number[]
  realVANumbers?: string[]
  isGetMerchantCashAccountsNumber?: boolean
  bankBins?: string[]
  bankNames?: 'OCB' | 'BIDV' | 'MBB' | 'ACB' | 'VPB' | 'PGB' | 'VIB' | 'STB' | 'CTG' | 'VCB' | 'AGRIBANK' | 'SHINHAN' | 'COB' | 'MSB'[]
}

export type OpenApiTransactionPagedInputDto = {
  filter?: string
  sorting?: string
  skipCount: number
  maxResultCount: number
  merchantId?: number
  shopIds?: number[]
  vaAccountNumbers?: string[]
  bankBin?: BankBinEnum | string
  billId?: string
  startTime?: string
  endTime?: string
}

export type OpenApiRegisterDto = {
  requestId: string
  bankBin?: BankBinEnum | string
  accountName?: string
  phone: string
  returnUrl: string
}

export type DirectDebitTransactionStatusEnum = 'success' | 'failure' | 'pending' | 'pending-confirm' | 'confirmed-and-sent-to-direct-debit' | 'insufficient-balance' | 'exceed-daily-limit' | 'refunded'

export type PaymentBillResponseDto = {
  code: string
  status: 'success' | 'failure' | 'pending' | 'pending-confirm' | 'confirmed-and-sent-to-direct-debit' | 'insufficient-balance' | 'exceed-daily-limit' | 'refunded'
  transactionCode: string
  isSentConfirmEmail: boolean
  isSentConfirmZalo: boolean
  returnUrl: string
}

export type DirectDebitPartnerEnum = 'one-pay'

export type OpenApiPaymentBillDto = {
  requestId: string
  clientId?: string
  subscriptionId: string
  amount: string
  description: string
  expirationTime?: string
  signature?: string
  token?: string
  additionalData?: Record<string, any>
  tokenRef?: string
  partnerCode: 'one-pay'
  accountNumber?: string
  serviceProviderName: string
  returnUrl?: string
}

export type DeleteSubscriptionOutputDto = {
  confirmUrl: string
  code: string
}

export type OpenApiDeleteSubscriptionDto = {
  requestId: string
  returnUrl: string
  subscriptionId: string
  tokenRef: string
}

export type DirectDebitRefundStatusEnum = 'success' | 'failure' | 'Pending'

export type RefundOutputDto = {
  refundAmount: number
  transactionId: string
  status: 'success' | 'failure' | 'Pending'
}

export type OpenApiRefundInputDto = {
  subscriptionId: string
  tokenRef: string
  transactionId: string
  amount: number
}

export type OpenApiEditConfirmBeforePaymentMethodDto = {
  requestId: string
  returnUrl: string
  subscriptionId: string
}

export type DirectDebitStatusEnum = 'active' | 'inactive'

export type OpenApiSubscriptionStatusResponseDto = {
  lastModificationTime: string
  lastModifierUserId?: number
  email?: string
  bankName: 'OCB' | 'BIDV' | 'MBB' | 'ACB' | 'VPB' | 'PGB' | 'VIB' | 'STB' | 'CTG' | 'VCB' | 'AGRIBANK' | 'SHINHAN' | 'COB' | 'MSB'
  accountName?: string
  accountNumber: string
  phone: string
  confirmPaymentByEmail: boolean
  confirmEmail?: string
  confirmPaymentByZalo: boolean
  confirmPhoneNumber: string
  tokenRef?: string
  status: 'active' | 'inactive'
  subscriptionId?: string
  bankBin?: BankBinEnum | string
}

export type CustomerInfoDto = {
  onepayAccountId: string
  name: string
  phone: string
  email?: string
}

export type WebhookStatusEnum = 'success' | 'failed' | 'pending' | 'insufficient-balance' | 'exceed-daily-limit' | 'confirm-va-success' | 'confirm-va-failed'

export type OpenApiPaymentTransactionStatusResponseDto = {
  transactionId?: string
  subscriptionId?: string
  tokenRef: string
  bankBin: BankBinEnum | string
  customer: {
  onepayAccountId: string
  name: string
  phone: string
  email?: string
}
  accountNumber?: string
  accountName?: string
  code?: string
  amount?: number
  currency?: string
  content?: string
  transactionDate?: string
  status: 'success' | 'failed' | 'pending' | 'insufficient-balance' | 'exceed-daily-limit' | 'confirm-va-success' | 'confirm-va-failed'
}

export type OpenApiPaymentTransactionsPagedOutputDto = {
  transactionId: string
  code: string
  bankName: 'OCB' | 'BIDV' | 'MBB' | 'ACB' | 'VPB' | 'PGB' | 'VIB' | 'STB' | 'CTG' | 'VCB' | 'AGRIBANK' | 'SHINHAN' | 'COB' | 'MSB'
  bankBin: BankBinEnum | string
  amount: string
  content: string
  accountNumber: string
  transactionDate: string
  subscriptionId: string
  tokenRef: string
  status: 'success' | 'failure' | 'pending' | 'pending-confirm' | 'confirmed-and-sent-to-direct-debit' | 'insufficient-balance' | 'exceed-daily-limit' | 'refunded'
  additionalData?: Record<string, any>
}

export type MerchantBankConfigPagedOutputDto = {
  id: number
  creationTime: string
  creatorUserId?: number
  lastModificationTime: string
  lastModifierUserId?: number
  deleterUserId?: number
  merchantId: number
  accountType: 'personal-account' | 'business-account' | 'business-household-account'
  configDto?: Record<string, any>
  bankBin?: BankBinEnum | string
  bankName?: 'OCB' | 'BIDV' | 'MBB' | 'ACB' | 'VPB' | 'PGB' | 'VIB' | 'STB' | 'CTG' | 'VCB' | 'AGRIBANK' | 'SHINHAN' | 'COB' | 'MSB'
}

export type OpenApiMerchantBankConfigPagedInputDto = {
  filter?: string
  sorting?: string
  skipCount: number
  maxResultCount: number
  accountType?: 'personal-account' | 'business-account' | 'business-household-account'
  merchantId?: number
  bankBin?: BankBinEnum | string
  bankName?: 'OCB' | 'BIDV' | 'MBB' | 'ACB' | 'VPB' | 'PGB' | 'VIB' | 'STB' | 'CTG' | 'VCB' | 'AGRIBANK' | 'SHINHAN' | 'COB' | 'MSB'
}

export type Number = {

}

export type BIDVConfigDto = {
  vaPrefix: string
  bankPartnerId: string
  accountNumber: string
  accountName: string
}

export type FileUploadDto = {
  fileLogId: string
  path: string
}

export type VIBConfigDto = {
  vaPrefix: string
  pathPublicKey?: {
  fileLogId: string
  path: string
}
  pathPrivateKey?: {
  fileLogId: string
  path: string
}
  basicAuthToken: string
  cif: string
  clientId: string
  clientSecret: string
  accountNumber: string
  vaCharactersNumber: number
}

export type CTGConfigDto = {
  accountNumber: string
  accountName: string
  vaPrefix: string
}

export type ACBConfigBusinessDto = {
  accountNumber: string
  accountName: string
  vaPrefix: string
  mobile: string
  acbUserId: string
}

export type VCBConfigBusinessDto = {
  accountNumber: string
  accountName: string
  merchantId: string
  terminalId: string
}

export type MSBConfigBusinessDto = {
  accountNumber: string
  vaPrefix: string
  mobile: string
  merchantId: string
  terminalId: string
  accessCode: string
  referralCode: string
}

export type OpenApiBankCreateOrUpdateConfigDto = {
  bidvConfigDto?: {
  vaPrefix: string
  bankPartnerId: string
  accountNumber: string
  accountName: string
}
  vibConfigDto?: {
  vaPrefix: string
  pathPublicKey?: {
  fileLogId: string
  path: string
}
  pathPrivateKey?: {
  fileLogId: string
  path: string
}
  basicAuthToken: string
  cif: string
  clientId: string
  clientSecret: string
  accountNumber: string
  vaCharactersNumber: number
}
  ctgConfigDto?: {
  accountNumber: string
  accountName: string
  vaPrefix: string
}
  acbConfigDto?: {
  accountNumber: string
  accountName: string
  vaPrefix: string
  mobile: string
  acbUserId: string
}
  vcbConfigDto?: {
  accountNumber: string
  accountName: string
  merchantId: string
  terminalId: string
}
  msbConfigDto?: {
  accountNumber: string
  vaPrefix: string
  mobile: string
  merchantId: string
  terminalId: string
  accessCode: string
  referralCode: string
}
  accountType: 'personal-account' | 'business-account' | 'business-household-account'
  id?: number
  otpNumber?: string
  confirmId?: string
  bankBin?: BankBinEnum | string
  bankName?: 'OCB' | 'BIDV' | 'MBB' | 'ACB' | 'VPB' | 'PGB' | 'VIB' | 'STB' | 'CTG' | 'VCB' | 'AGRIBANK' | 'SHINHAN' | 'COB' | 'MSB'
  merchantId?: number
}

export type OpenApiDeleteConfigDto = {
  otpNumber?: string
  confirmId?: string
  id: number
  merchantId?: number
}

export type OpenApiCreateBankVAOutputDto = {
  confirmId: string
}

export type OpenApiConfigAccountBusinessDto = {
  bankName?: 'OCB' | 'BIDV' | 'MBB' | 'ACB' | 'VPB' | 'PGB' | 'VIB' | 'STB' | 'CTG' | 'VCB' | 'AGRIBANK' | 'SHINHAN' | 'COB' | 'MSB'
  accountNumber?: string
  accountName?: string
  mobile?: string
  vaPrefix?: string
  merchantId?: number
  acbUserId: string
  bankBin?: BankBinEnum | string
}

export type OpenApiDeleteConfigBusinessDto = {
  accountType: 'personal-account' | 'business-account' | 'business-household-account'
  configRemove: {
  accountNumber: string
  accountName: string
  vaPrefix: string
  mobile: string
  acbUserId: string
}
  merchantId?: number
  bankBin?: BankBinEnum | string
  bankName?: 'OCB' | 'BIDV' | 'MBB' | 'ACB' | 'VPB' | 'PGB' | 'VIB' | 'STB' | 'CTG' | 'VCB' | 'AGRIBANK' | 'SHINHAN' | 'COB' | 'MSB'
}

export type EventUrlItemType = 'shop' | 'accountNumber' | 'all'

export type EventUrlItemDto = {
  url: string
  type: 'shop' | 'accountNumber' | 'all'
  ids?: string[]
}

export type MerchantBaasTypeEnum = 'trial' | 'trial-extended' | 'customer' | 'cancelled'

export type OpenApiCreateMerchantDto = {
  id?: number
  code?: string
  name: string
  email?: string
  phoneNumber: string
  website?: string
  businessSectorIds?: number[]
  provinceId?: string
  districtId?: string
  communeId?: string
  address?: string
  fullAddress?: string
  eventUrl?: string
  eventUrls?: {
  url: string
  type: 'shop' | 'accountNumber' | 'all'
  ids?: string[]
}[]
  isLockEvent?: boolean
  isOrganizationUnit?: boolean
  referralCode?: string
  userReferralAncestorIds?: string
  userReferralLevel?: number
  deviceDistributorAncestorMap?: string
  isMasterMerchant?: boolean
  baasType?: 'trial' | 'trial-extended' | 'customer' | 'cancelled'
  password: string
  appType: 'ocb-web' | 'ocb-app' | 'bidv-web' | 'bidv-app' | 'stb-web' | 'stb-app' | 'vcb-web' | 'vcb-app' | 'tingee-web' | 'tingee-app' | 'tingee-merchant-app' | 'loa-hub' | 'mini-app-mbb' | 'baas'
  isMultipleRole?: boolean
  userReferrerId?: number
}

export type OCBConfigDto = {
  clientId: string
  clientSecret?: string
  pathCertKey?: {
  fileLogId: string
  path: string
}
  pathPrivateKey?: {
  fileLogId: string
  path: string
}
  userName: string
  password?: string
  vaPrefix?: string
  vaPrefixForDynamicQR?: string
  accountNumbers?: string[]
}

export type MBBConfigDto = {
  accountNumber: string
  accountName: string
  identity: string
  mobile: string
}

export type ShinhanConfigDto = {
  vaPrefix: string
  clientId: string
  clientSecret?: string
  pathPublicKey?: {
  fileLogId: string
  path: string
}
  pathPrivateKey?: {
  fileLogId: string
  path: string
}
  accountNumber: string
  accountName: string
}

export type ACBConfigDto = {
  businessAccounts: {
  accountNumber: string
  accountName: string
  vaPrefix: string
  mobile: string
  acbUserId: string
}[]
  businessHouseholdAccounts: {
  accountNumber: string
  accountName: string
  vaPrefix: string
  mobile: string
  acbUserId: string
}[]
}

export type VPBConfigBusinessDto = {
  accountNumber: string
  accountName: string
  merchantId: string
  terminalId: string
}

export type VPBConfigDto = {
  businessAccounts: {
  accountNumber: string
  accountName: string
  merchantId: string
  terminalId: string
}[]
  businessHouseholdAccounts: {
  accountNumber: string
  accountName: string
  merchantId: string
  terminalId: string
}[]
}

export type VCBConfigDto = {
  businessAccounts: {
  accountNumber: string
  accountName: string
  merchantId: string
  terminalId: string
}[]
  businessHouseholdAccounts: {
  accountNumber: string
  accountName: string
  merchantId: string
  terminalId: string
}[]
}

export type BankConfigDto = {
  ocbConfigDtos: {
  clientId: string
  clientSecret?: string
  pathCertKey?: {
  fileLogId: string
  path: string
}
  pathPrivateKey?: {
  fileLogId: string
  path: string
}
  userName: string
  password?: string
  vaPrefix?: string
  vaPrefixForDynamicQR?: string
  accountNumbers?: string[]
}[]
  mbbConfigDtos: {
  accountNumber: string
  accountName: string
  identity: string
  mobile: string
}[]
  bidvConfigDtos: {
  vaPrefix: string
  bankPartnerId: string
  accountNumber: string
  accountName: string
}[]
  shinhanConfigDtos: {
  vaPrefix: string
  clientId: string
  clientSecret?: string
  pathPublicKey?: {
  fileLogId: string
  path: string
}
  pathPrivateKey?: {
  fileLogId: string
  path: string
}
  accountNumber: string
  accountName: string
}[]
  vibConfigDtos: {
  vaPrefix: string
  pathPublicKey?: {
  fileLogId: string
  path: string
}
  pathPrivateKey?: {
  fileLogId: string
  path: string
}
  basicAuthToken: string
  cif: string
  clientId: string
  clientSecret: string
  accountNumber: string
  vaCharactersNumber: number
}[]
  ctgConfigDtos: {
  accountNumber: string
  accountName: string
  vaPrefix: string
}[]
  acbConfigDto: {
  businessAccounts: {
  accountNumber: string
  accountName: string
  vaPrefix: string
  mobile: string
  acbUserId: string
}[]
  businessHouseholdAccounts: {
  accountNumber: string
  accountName: string
  vaPrefix: string
  mobile: string
  acbUserId: string
}[]
}
  vpbConfigDto: {
  businessAccounts: {
  accountNumber: string
  accountName: string
  merchantId: string
  terminalId: string
}[]
  businessHouseholdAccounts: {
  accountNumber: string
  accountName: string
  merchantId: string
  terminalId: string
}[]
}
  vcbConfigDto: {
  businessAccounts: {
  accountNumber: string
  accountName: string
  merchantId: string
  terminalId: string
}[]
  businessHouseholdAccounts: {
  accountNumber: string
  accountName: string
  merchantId: string
  terminalId: string
}[]
}
}

export type BaoKimConfigDto = {
  mid: string
}

export type BNPLConfigDto = {
  baokimConfigDto: {
  mid: string
}
}

export type OnePayConfigDto = {
  merchantId: string
  signingKey: string
  verifyKey: string
  accessCode: string
  hashCode: string
  callbackUrl: string
}

export type DirectDebitConfigDto = {
  onePayConfigDto: {
  merchantId: string
  signingKey: string
  verifyKey: string
  accessCode: string
  hashCode: string
  callbackUrl: string
}
}

export type MerchantPackageInfo = {
  packageName: string
  expirationDate: string
}

export type MerchantDto = {
  id: number
  creationTime: string
  creatorUserId?: number
  lastModificationTime: string
  lastModifierUserId?: number
  deleterUserId?: number
  code?: string
  name: string
  email?: string
  phoneNumber: string
  website?: string
  businessSectorIds?: number[]
  provinceId?: string
  districtId?: string
  communeId?: string
  address?: string
  fullAddress?: string
  clientId?: string
  secretToken?: string
  eventUrl?: string
  eventUrls?: {
  url: string
  type: 'shop' | 'accountNumber' | 'all'
  ids?: string[]
}[]
  isLockEvent?: boolean
  bankConfigDto?: {
  ocbConfigDtos: {
  clientId: string
  clientSecret?: string
  pathCertKey?: {
  fileLogId: string
  path: string
}
  pathPrivateKey?: {
  fileLogId: string
  path: string
}
  userName: string
  password?: string
  vaPrefix?: string
  vaPrefixForDynamicQR?: string
  accountNumbers?: string[]
}[]
  mbbConfigDtos: {
  accountNumber: string
  accountName: string
  identity: string
  mobile: string
}[]
  bidvConfigDtos: {
  vaPrefix: string
  bankPartnerId: string
  accountNumber: string
  accountName: string
}[]
  shinhanConfigDtos: {
  vaPrefix: string
  clientId: string
  clientSecret?: string
  pathPublicKey?: {
  fileLogId: string
  path: string
}
  pathPrivateKey?: {
  fileLogId: string
  path: string
}
  accountNumber: string
  accountName: string
}[]
  vibConfigDtos: {
  vaPrefix: string
  pathPublicKey?: {
  fileLogId: string
  path: string
}
  pathPrivateKey?: {
  fileLogId: string
  path: string
}
  basicAuthToken: string
  cif: string
  clientId: string
  clientSecret: string
  accountNumber: string
  vaCharactersNumber: number
}[]
  ctgConfigDtos: {
  accountNumber: string
  accountName: string
  vaPrefix: string
}[]
  acbConfigDto: {
  businessAccounts: {
  accountNumber: string
  accountName: string
  vaPrefix: string
  mobile: string
  acbUserId: string
}[]
  businessHouseholdAccounts: {
  accountNumber: string
  accountName: string
  vaPrefix: string
  mobile: string
  acbUserId: string
}[]
}
  vpbConfigDto: {
  businessAccounts: {
  accountNumber: string
  accountName: string
  merchantId: string
  terminalId: string
}[]
  businessHouseholdAccounts: {
  accountNumber: string
  accountName: string
  merchantId: string
  terminalId: string
}[]
}
  vcbConfigDto: {
  businessAccounts: {
  accountNumber: string
  accountName: string
  merchantId: string
  terminalId: string
}[]
  businessHouseholdAccounts: {
  accountNumber: string
  accountName: string
  merchantId: string
  terminalId: string
}[]
}
}
  bnplConfigDto?: {
  baokimConfigDto: {
  mid: string
}
}
  directDebitConfigDto?: {
  onePayConfigDto: {
  merchantId: string
  signingKey: string
  verifyKey: string
  accessCode: string
  hashCode: string
  callbackUrl: string
}
}
  sendNotifyPlatformDto?: {
  telegramDtos: {
  chatId: number
}[]
  larkDtos: {
  urlWebhook: string
}[]
  zaloDtos: {
  type: 'phone-number' | 'group'
  name: string
}[]
  tingeeBoxDtos: {
  type: 'app-tingee' | 'tingee-box-f1' | 'tingee-box-2a' | 'tingee-box-2as' | 'tingee-box-s1' | 'tingee-box-3ls' | 'tingee-box-3pro' | 'tingee-box-3vn' | 'tingee-box-3vna' | 'tingee-box-4ls' | 'tingee-box-5s' | 'tingee-box-5sa' | 'tingee-box-6ls' | 'tingee-box-6pro' | 'tingee-box-6xs' | 'vn-50' | 'loa-pay' | 'trusted-pay' | 'pay-alert' | 'tingee-box-3vn-mbb' | 'tingee-box-3pro-mbb' | 'tingee-box-3pro-x' | 'tingee-box-max' | 'tingee-box-8pro'
  uuid: string
}[]
}
  isOrganizationUnit?: boolean
  referralCode?: string
  userReferralAncestorIds?: string
  userReferralLevel?: number
  deviceDistributorAncestorMap?: string
  isMasterMerchant?: boolean
  baasType?: 'trial' | 'trial-extended' | 'customer' | 'cancelled'
  merchantPackages?: {
  packageName: string
  expirationDate: string
}[]
  masterMerchantNames?: string
}

export type OpenApiGetPagingMerchantsDto = {
  filter?: string
  sorting?: string
  skipCount: number
  maxResultCount: number
}

export type EInvoiceProviderEnum = 'x-cyber' | 'hilo' | 's-invoice'

export type GetPagingEInvoiceAccountOutputDto = {
  id: number
  creationTime: string
  merchantId: number
  provider: 'x-cyber' | 'hilo' | 's-invoice'
  taxCode: string
  username: string
  password: string
  isDefault?: boolean
  isActive?: boolean
}

export type GetPagingEInvoiceAccountInputDto = {
  filter?: string
  sorting?: string
  skipCount: number
  maxResultCount: number
  provider?: 'x-cyber' | 'hilo' | 's-invoice'
  isDefault?: boolean
  isActive?: boolean
  merchantId?: number
}

export type EInvoiceAccountOutputDto = {
  id: number
  creationTime: string
  merchantId: number
  provider: 'x-cyber' | 'hilo' | 's-invoice'
  taxCode: string
  username: string
  isDefault?: boolean
  isActive?: boolean
}

export type CreateOrUpdateEInvoiceAccountDto = {
  provider: 'x-cyber' | 'hilo' | 's-invoice'
  taxCode: string
  username: string
  password: string
  isDefault?: boolean
  isActive?: boolean
  id?: number
  merchantId?: number
}

export type DeleteEInvoiceAccountDto = {
  id: number
  merchantId?: number
}

export type EInvoiceProviderDto = {
  code: 'x-cyber' | 'hilo' | 's-invoice'
  name: string
}

export type DownloadInvoiceOutputDto = {
  invoiceCode: string
  pdfBase64: string
}

export type InvoiceItemDto = {
  itemCode?: string
  itemName: string
  unitName?: string
  quantity: number
  unitPrice: number
  discount?: number
  discountAmount?: number
  totalBeforeTax?: number
  taxRateCode: string
  taxAmount?: number
  totalAfterTax?: number
  itemType?: number
  adjustmentType?: number
}

export type TaxRateSummaryDto = {
  taxRateCode: string
  totalTaxableAmount?: number
  taxAmount?: number
}

export type CreateInvoiceDto = {
  merchantId?: number
  provider?: 'x-cyber' | 'hilo' | 's-invoice'
  taxCode?: string
  invoiceType?: string
  invoicePattern: string
  invoiceSeries: string
  invoiceCode: string
  invoiceDate: string
  buyerTaxCode?: string
  buyerName?: string
  buyerLegalName?: string
  buyerAddress?: string
  buyerPhone?: string
  buyerEmail?: string
  buyerBankAccount?: string
  buyerBankName?: string
  paymentMethod?: number
  paymentMethodName?: string
  currency?: string
  exchangeRate?: number
  amountInWords?: string
  note?: string
  items: {
  itemCode?: string
  itemName: string
  unitName?: string
  quantity: number
  unitPrice: number
  discount?: number
  discountAmount?: number
  totalBeforeTax?: number
  taxRateCode: string
  taxAmount?: number
  totalAfterTax?: number
  itemType?: number
  adjustmentType?: number
}[]
  totalDiscount?: number
  totalBeforeTax?: number
  totalTax?: number
  totalAfterTax?: number
  taxRateSummaries?: {
  taxRateCode: string
  totalTaxableAmount?: number
  taxAmount?: number
}[]
}

export type TrackingResultDto = {
  invoiceCode: string
  trackingCode?: string
  invoiceNumber?: string
  reservationCode?: string
}

export type DownloadInvoiceQueryDto = {
  merchantId?: number
  provider?: 'x-cyber' | 'hilo' | 's-invoice'
  taxCode?: string
  invoicePattern: string
  invoiceSeries: string
  invoiceCode: string
}

export type InvoiceTemplateOutputDto = {
  invoicePattern: string
  invoiceSeries: string
  quota?: number
}

export type InvoiceTemplateQueryDto = {
  merchantId?: number
  provider?: 'x-cyber' | 'hilo' | 's-invoice'
  taxCode?: string
  invoiceNoToCheck: number
}

export type SendInvoiceEmailDto = {
  merchantId?: number
  provider?: 'x-cyber' | 'hilo' | 's-invoice'
  taxCode?: string
  invoiceCode: string
  recipientEmail: string
}
