// Auto-generated from openapi/sdk.json
// DO NOT EDIT MANUALLY

export type BankNameEnum = 'OCB' | 'BIDV' | 'MBB' | 'ACB' | 'VPB' | 'PGB' | 'VIB' | 'STB' | 'CTG' | 'VCB' | 'AGRIBANK' | 'SHINHAN' | 'COB' | 'MSB'

export type OpenApiGenerateVietQRInputDto = {
  bankBin: string
  bankName?: 'OCB' | 'BIDV' | 'MBB' | 'ACB' | 'VPB' | 'PGB' | 'VIB' | 'STB' | 'CTG' | 'VCB' | 'AGRIBANK' | 'SHINHAN' | 'COB' | 'MSB'
  accountNumber: string
  amount: number
  content: string
}

export type OpenApiOuputDto = {
  code: string
  message: string
  data: Record<string, any>
}

export type QRCodeTypeEnum = 'dynamic-one-time-payment' | 'dynamic-recurring-payment'

export type GenerateDynamicQRInputDto = {
  merchantId: number
  vaAccountNumber: string
  qrCodeType: 'dynamic-one-time-payment' | 'dynamic-recurring-payment'
  bankBin: string
  bankName?: 'OCB' | 'BIDV' | 'MBB' | 'ACB' | 'VPB' | 'PGB' | 'VIB' | 'STB' | 'CTG' | 'VCB' | 'AGRIBANK' | 'SHINHAN' | 'COB' | 'MSB'
  amount: number
  purpose: string
  extraInfo?: string
}

export type OpenApiDeleteDynamicQRInputDto = {
  merchantId?: number
  qrAccount: string
  billId: string
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

export type PagedResultDto = {
  totalCount: number
}

export type BankAccountTypeEnum = 'personal-account' | 'business-account' | 'business-household-account'

export type StatusMerchantAccountNumberEnum = 'inactive' | 'active' | 'lock'

export type OpenApiGetVAPagedOuputDto = {
  bankName: 'OCB' | 'BIDV' | 'MBB' | 'ACB' | 'VPB' | 'PGB' | 'VIB' | 'STB' | 'CTG' | 'VCB' | 'AGRIBANK' | 'SHINHAN' | 'COB' | 'MSB'
  bankBin: string
  accountType: 'personal-account' | 'business-account' | 'business-household-account'
  accountName?: string
  accountNumber: string
  vaAccountNumber?: string
  shopId: number
  status: 'inactive' | 'active' | 'lock'
  creationTime: string
}

export type DataAccessFilterEnum = 'referral-only' | 'distributor-only'

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
  dataAccess: 'referral-only' | 'distributor-only'
  bankBin: string
  bankName: 'OCB' | 'BIDV' | 'MBB' | 'ACB' | 'VPB' | 'PGB' | 'VIB' | 'STB' | 'CTG' | 'VCB' | 'AGRIBANK' | 'SHINHAN' | 'COB' | 'MSB'
}

export type OpenApiGenerateVietQROuputDto = {
  bankBin: string
  accountNumber: string
  amount: string
  purpose: string
  vaPrefix: string
  vaSuffix: string
}

export type CashFlowSourceEnum = 'bank-transfer' | 'card'

export type AppTypeEnum = 'ocb-web' | 'ocb-app' | 'bidv-web' | 'bidv-app' | 'stb-web' | 'stb-app' | 'vcb-web' | 'vcb-app' | 'tingee-web' | 'tingee-app' | 'tingee-merchant-app' | 'loa-hub' | 'mini-app-mbb' | 'baas'

export type LinkTypeEnum = 'api-exact' | 'manual-exact' | 'manual-include'

export type OpenApiCreateVAInpuDto = {
  name?: string
  cashFlowSource?: 'bank-transfer' | 'card'
  accountType: 'personal-account' | 'business-account' | 'business-household-account'
  accountNumber: string
  accountName: string
  identity: string
  mobile: string
  shopId?: number
  vaPrefix?: string
  vaSuffix?: string
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
  isNotifyAccountNumber: boolean
  appType: 'ocb-web' | 'ocb-app' | 'bidv-web' | 'bidv-app' | 'stb-web' | 'stb-app' | 'vcb-web' | 'vcb-app' | 'tingee-web' | 'tingee-app' | 'tingee-merchant-app' | 'loa-hub' | 'mini-app-mbb' | 'baas'
  linkType: 'api-exact' | 'manual-exact' | 'manual-include'
  vaAccountNumber?: string
  acbUserId?: string
  bankBin: string
  bankName?: 'OCB' | 'BIDV' | 'MBB' | 'ACB' | 'VPB' | 'PGB' | 'VIB' | 'STB' | 'CTG' | 'VCB' | 'AGRIBANK' | 'SHINHAN' | 'COB' | 'MSB'
  merchantName?: string
  merchantAddress?: string
  merchantId?: number
}

export type OpenApiBankConfirmVAInputDto = {
  merchantId: number
  confirmId: string
  otpNumber: string
  bankName: 'OCB' | 'BIDV' | 'MBB' | 'ACB' | 'VPB' | 'PGB' | 'VIB' | 'STB' | 'CTG' | 'VCB' | 'AGRIBANK' | 'SHINHAN' | 'COB' | 'MSB'
  bankBin: string
}

export type OpenApiRegisterNotifyDto = {
  merchantId?: number
  vaAccountNumber: string
  bankBin: string
  bankName?: 'OCB' | 'BIDV' | 'MBB' | 'ACB' | 'VPB' | 'PGB' | 'VIB' | 'STB' | 'CTG' | 'VCB' | 'AGRIBANK' | 'SHINHAN' | 'COB' | 'MSB'
}

export type OpenApiRefundDto = {
  merchantId?: number
  transactionCode: string
  bankBin: string
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

export type OpenApiAddDeviceToShop = {
  uuid: string
  securityCode: string
  appType: 'ocb-web' | 'ocb-app' | 'bidv-web' | 'bidv-app' | 'stb-web' | 'stb-app' | 'vcb-web' | 'vcb-app' | 'tingee-web' | 'tingee-app' | 'tingee-merchant-app' | 'loa-hub' | 'mini-app-mbb' | 'baas'
  masterMerchantId?: number
  merchantId?: number
  vaAccountNumbers: string[]
  shopIds?: number[]
}

export type DeviceTypeEnum = 'app-tingee' | 'tingee-box-f1' | 'tingee-box-2a' | 'tingee-box-2as' | 'tingee-box-s1' | 'tingee-box-3ls' | 'tingee-box-3pro' | 'tingee-box-3vn' | 'tingee-box-3vna' | 'tingee-box-4ls' | 'tingee-box-5s' | 'tingee-box-5sa' | 'tingee-box-6ls' | 'tingee-box-6pro' | 'tingee-box-6xs' | 'vn-50' | 'loa-pay' | 'trusted-pay' | 'tingee-box-3vn-mbb' | 'tingee-box-3pro-mbb' | 'tingee-box-3pro-x' | 'tingee-box-max'

export type OpenApiShopLinkToDeviceDto = {
  shopName: string
  shopId: number
  isLinkToDevice: boolean
  fullAddress: string
  vaAccountNumber: string
}

export type OpenApiUpdateShopDeviceLinkDto = {
  uuid: string
  type: 'app-tingee' | 'tingee-box-f1' | 'tingee-box-2a' | 'tingee-box-2as' | 'tingee-box-s1' | 'tingee-box-3ls' | 'tingee-box-3pro' | 'tingee-box-3vn' | 'tingee-box-3vna' | 'tingee-box-4ls' | 'tingee-box-5s' | 'tingee-box-5sa' | 'tingee-box-6ls' | 'tingee-box-6pro' | 'tingee-box-6xs' | 'vn-50' | 'loa-pay' | 'trusted-pay' | 'tingee-box-3vn-mbb' | 'tingee-box-3pro-mbb' | 'tingee-box-3pro-x' | 'tingee-box-max'
  appType: 'ocb-web' | 'ocb-app' | 'bidv-web' | 'bidv-app' | 'stb-web' | 'stb-app' | 'vcb-web' | 'vcb-app' | 'tingee-web' | 'tingee-app' | 'tingee-merchant-app' | 'loa-hub' | 'mini-app-mbb' | 'baas'
  shopsLinkToDeviceDtos: {
  shopName: string
  shopId: number
  isLinkToDevice: boolean
  fullAddress: string
  vaAccountNumber: string
}[]
  merchantId?: number
}

export type BIDVOpenApiReadAmountDto = {
  uuid: string
  transactionId: string
  amount: number
  bankBin: string
  bankName: 'OCB' | 'BIDV' | 'MBB' | 'ACB' | 'VPB' | 'PGB' | 'VIB' | 'STB' | 'CTG' | 'VCB' | 'AGRIBANK' | 'SHINHAN' | 'COB' | 'MSB'
  firstDisplayText: string
  secondDisplayText: string
  thirdDisplayText: string
  playSound: boolean
}

export type OpenApiReadAmountDto = {
  merchantId?: number
  uuid: string
  transactionId: string
  amount: number
  bankBin: string
  bankName: 'OCB' | 'BIDV' | 'MBB' | 'ACB' | 'VPB' | 'PGB' | 'VIB' | 'STB' | 'CTG' | 'VCB' | 'AGRIBANK' | 'SHINHAN' | 'COB' | 'MSB'
  firstDisplayText: string
  secondDisplayText: string
  thirdDisplayText: string
  playSound: boolean
}

export type OpenApiShowQRCodeDto = {
  merchantId?: number
  vaAccountNumber: string
  amount: number
  qrCode: string
  bankBin: string
  bankName?: 'OCB' | 'BIDV' | 'MBB' | 'ACB' | 'VPB' | 'PGB' | 'VIB' | 'STB' | 'CTG' | 'VCB' | 'AGRIBANK' | 'SHINHAN' | 'COB' | 'MSB'
  uuid: string
  deviceType?: 'app-tingee' | 'tingee-box-f1' | 'tingee-box-2a' | 'tingee-box-2as' | 'tingee-box-s1' | 'tingee-box-3ls' | 'tingee-box-3pro' | 'tingee-box-3vn' | 'tingee-box-3vna' | 'tingee-box-4ls' | 'tingee-box-5s' | 'tingee-box-5sa' | 'tingee-box-6ls' | 'tingee-box-6pro' | 'tingee-box-6xs' | 'vn-50' | 'loa-pay' | 'trusted-pay' | 'tingee-box-3vn-mbb' | 'tingee-box-3pro-mbb' | 'tingee-box-3pro-x' | 'tingee-box-max'
  firstText: string
  secondText: string
  thirdText: string
  showTime: number
  isStaticQr: boolean
  playSound: boolean
}

export type OpenApiGetDevicesLinkToShopOrVA = {
  merchantId?: number
  vaAccountNumber: string
  shopId?: number
}

export type OpenApiGetPagingDeviceInputDto = {
  filter?: string
  sorting?: string
  skipCount: number
  maxResultCount: number
  merchantId: number
  type?: 'app-tingee' | 'tingee-box-f1' | 'tingee-box-2a' | 'tingee-box-2as' | 'tingee-box-s1' | 'tingee-box-3ls' | 'tingee-box-3pro' | 'tingee-box-3vn' | 'tingee-box-3vna' | 'tingee-box-4ls' | 'tingee-box-5s' | 'tingee-box-5sa' | 'tingee-box-6ls' | 'tingee-box-6pro' | 'tingee-box-6xs' | 'vn-50' | 'loa-pay' | 'trusted-pay' | 'tingee-box-3vn-mbb' | 'tingee-box-3pro-mbb' | 'tingee-box-3pro-x' | 'tingee-box-max'
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

export type SendNotifyTingeeBoxDto = {
  type: 'app-tingee' | 'tingee-box-f1' | 'tingee-box-2a' | 'tingee-box-2as' | 'tingee-box-s1' | 'tingee-box-3ls' | 'tingee-box-3pro' | 'tingee-box-3vn' | 'tingee-box-3vna' | 'tingee-box-4ls' | 'tingee-box-5s' | 'tingee-box-5sa' | 'tingee-box-6ls' | 'tingee-box-6pro' | 'tingee-box-6xs' | 'vn-50' | 'loa-pay' | 'trusted-pay' | 'tingee-box-3vn-mbb' | 'tingee-box-3pro-mbb' | 'tingee-box-3pro-x' | 'tingee-box-max'
  uuid: string
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
  type: 'app-tingee' | 'tingee-box-f1' | 'tingee-box-2a' | 'tingee-box-2as' | 'tingee-box-s1' | 'tingee-box-3ls' | 'tingee-box-3pro' | 'tingee-box-3vn' | 'tingee-box-3vna' | 'tingee-box-4ls' | 'tingee-box-5s' | 'tingee-box-5sa' | 'tingee-box-6ls' | 'tingee-box-6pro' | 'tingee-box-6xs' | 'vn-50' | 'loa-pay' | 'trusted-pay' | 'tingee-box-3vn-mbb' | 'tingee-box-3pro-mbb' | 'tingee-box-3pro-x' | 'tingee-box-max'
  uuid: string
}[]
}

export type OpenApiCreateOrUpdateShopDto = {
  id?: number
  creationTime: string
  creatorUserId?: number
  lastModificationTime: string
  lastModifierUserId?: number
  deleterUserId?: number
  name: string
  email?: string
  phoneNumber: string
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
  type: 'app-tingee' | 'tingee-box-f1' | 'tingee-box-2a' | 'tingee-box-2as' | 'tingee-box-s1' | 'tingee-box-3ls' | 'tingee-box-3pro' | 'tingee-box-3vn' | 'tingee-box-3vna' | 'tingee-box-4ls' | 'tingee-box-5s' | 'tingee-box-5sa' | 'tingee-box-6ls' | 'tingee-box-6pro' | 'tingee-box-6xs' | 'vn-50' | 'loa-pay' | 'trusted-pay' | 'tingee-box-3vn-mbb' | 'tingee-box-3pro-mbb' | 'tingee-box-3pro-x' | 'tingee-box-max'
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
  name: number
  address?: string
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
  bankBin: string
  destinationBankBin: string
  accountName: string
  accountNumber: string
  amount: number
  content: string
  billNumber: string
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
  bankBins: string[]
  bankNames?: 'OCB' | 'BIDV' | 'MBB' | 'ACB' | 'VPB' | 'PGB' | 'VIB' | 'STB' | 'CTG' | 'VCB' | 'AGRIBANK' | 'SHINHAN' | 'COB' | 'MSB'[]
}

export type OpenApiTransactionPagedOuputDto = {
  transactionId: string
  merchantId: number
  shopId: number
  bankBin?: string
  cashFlowSource?: 'bank-transfer' | 'card'
  code: string
  amount: number
  type?: string
  content?: string
  currency?: string
  accountNumber: string
  vaAccountNumber?: string
  transactionDate?: string
  billId: string
}

export type OpenApiTransactionPagedInputDto = {
  filter?: string
  sorting?: string
  skipCount: number
  maxResultCount: number
  merchantId: number
  shopIds: number[]
  vaAccountNumbers: string[]
  bankBin?: string
  billId: string
  startTime?: string
  endTime?: string
}

export type OpenApiRegisterDto = {
  requestId: string
  bankBin: string
  accountName: string
  phone: string
  returnUrl: string
}

export type DirectDebitPartnerEnum = 'one-pay'

export type OpenApiPaymentBillDto = {
  requestId: string
  clientId: string
  subscriptionId: string
  amount: string
  description: string
  expirationTime: string
  signature: string
  token: string
  additionalData?: Record<string, any>
  tokenRef: string
  partnerCode: 'one-pay'
  accountNumber: string
  serviceProviderName: string
  returnUrl: string
}

export type OpenApiDeleteSubscriptionDto = {
  requestId: string
  returnUrl: string
  subscriptionId: string
  tokenRef: string
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

export type OpenApiMerchantBankConfigPagedInputDto = {
  filter?: string
  sorting?: string
  skipCount: number
  maxResultCount: number
  accountType: 'personal-account' | 'business-account' | 'business-household-account'
  merchantId: number
  bankBin: string
  bankName?: 'OCB' | 'BIDV' | 'MBB' | 'ACB' | 'VPB' | 'PGB' | 'VIB' | 'STB' | 'CTG' | 'VCB' | 'AGRIBANK' | 'SHINHAN' | 'COB' | 'MSB'
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
}
  accountType: 'personal-account' | 'business-account' | 'business-household-account'
  id: number
  otpNumber?: string
  confirmId?: string
  bankBin: string
  bankName?: 'OCB' | 'BIDV' | 'MBB' | 'ACB' | 'VPB' | 'PGB' | 'VIB' | 'STB' | 'CTG' | 'VCB' | 'AGRIBANK' | 'SHINHAN' | 'COB' | 'MSB'
  merchantId?: number
}

export type OpenApiDeleteConfigDto = {
  otpNumber?: string
  confirmId?: string
  id: number
  merchantId?: number
}

export type OpenApiConfigAccountBusinessDto = {
  bankName?: 'OCB' | 'BIDV' | 'MBB' | 'ACB' | 'VPB' | 'PGB' | 'VIB' | 'STB' | 'CTG' | 'VCB' | 'AGRIBANK' | 'SHINHAN' | 'COB' | 'MSB'
  accountNumber: string
  accountName: string
  mobile: string
  vaPrefix?: string
  merchantId: number
  acbUserId: string
  bankBin: string
}

export type OpenApiCreateBankVAOutputDto = {
  confirmId: string
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
  bankBin: string
  bankName?: 'OCB' | 'BIDV' | 'MBB' | 'ACB' | 'VPB' | 'PGB' | 'VIB' | 'STB' | 'CTG' | 'VCB' | 'AGRIBANK' | 'SHINHAN' | 'COB' | 'MSB'
}

export type EventUrlItemType = 'shop' | 'accountNumber' | 'all'

export type EventUrlItemDto = {
  url: string
  type: 'shop' | 'accountNumber' | 'all'
  ids?: string[]
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

export type OpenApiCreateMerchantDto = {
  id?: number
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
  type: 'app-tingee' | 'tingee-box-f1' | 'tingee-box-2a' | 'tingee-box-2as' | 'tingee-box-s1' | 'tingee-box-3ls' | 'tingee-box-3pro' | 'tingee-box-3vn' | 'tingee-box-3vna' | 'tingee-box-4ls' | 'tingee-box-5s' | 'tingee-box-5sa' | 'tingee-box-6ls' | 'tingee-box-6pro' | 'tingee-box-6xs' | 'vn-50' | 'loa-pay' | 'trusted-pay' | 'tingee-box-3vn-mbb' | 'tingee-box-3pro-mbb' | 'tingee-box-3pro-x' | 'tingee-box-max'
  uuid: string
}[]
}
  isOrganizationUnit?: boolean
  referralCode?: string
  userReferralAncestorIds?: string
  userReferralLevel?: number
  deviceDistributorAncestorMap?: string
  isMasterMerchant?: boolean
  password: string
  appType: 'ocb-web' | 'ocb-app' | 'bidv-web' | 'bidv-app' | 'stb-web' | 'stb-app' | 'vcb-web' | 'vcb-app' | 'tingee-web' | 'tingee-app' | 'tingee-merchant-app' | 'loa-hub' | 'mini-app-mbb' | 'baas'
  isMultipleRole?: boolean
  userReferrerId?: number
}

export type OpenApiGetPagingMerchantsDto = {
  filter?: string
  sorting?: string
  skipCount: number
  maxResultCount: number
}
