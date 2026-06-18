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

export type BankNameEnum = 'OCB' | 'BIDV' | 'MBB' | 'ACB' | 'VPB' | 'PGB' | 'VIB' | 'STB' | 'CTG' | 'VCB' | 'AGRIBANK' | 'SHINHAN' | 'COB' | 'MSB' | 'NEXTPAY' | 'TPB'

export type OpenApiGenerateVietQRInputDto = {
  bankBin?: BankBinEnum | string
  bankName?: 'OCB' | 'BIDV' | 'MBB' | 'ACB' | 'VPB' | 'PGB' | 'VIB' | 'STB' | 'CTG' | 'VCB' | 'AGRIBANK' | 'SHINHAN' | 'COB' | 'MSB' | 'NEXTPAY' | 'TPB'
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
  bankName?: 'OCB' | 'BIDV' | 'MBB' | 'ACB' | 'VPB' | 'PGB' | 'VIB' | 'STB' | 'CTG' | 'VCB' | 'AGRIBANK' | 'SHINHAN' | 'COB' | 'MSB' | 'NEXTPAY' | 'TPB'
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
  purpose?: string
  totalAmountPaid?: number
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
  purpose?: string
  totalAmountPaid?: number
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
  code: 'OCB' | 'BIDV' | 'MBB' | 'ACB' | 'VPB' | 'PGB' | 'VIB' | 'STB' | 'CTG' | 'VCB' | 'AGRIBANK' | 'SHINHAN' | 'COB' | 'MSB' | 'NEXTPAY' | 'TPB'
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
  bankName: 'OCB' | 'BIDV' | 'MBB' | 'ACB' | 'VPB' | 'PGB' | 'VIB' | 'STB' | 'CTG' | 'VCB' | 'AGRIBANK' | 'SHINHAN' | 'COB' | 'MSB' | 'NEXTPAY' | 'TPB'
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
  bankName?: 'OCB' | 'BIDV' | 'MBB' | 'ACB' | 'VPB' | 'PGB' | 'VIB' | 'STB' | 'CTG' | 'VCB' | 'AGRIBANK' | 'SHINHAN' | 'COB' | 'MSB' | 'NEXTPAY' | 'TPB'
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

export type Provider = {

}

export type Consumer = {

}

export type Merchant = {

}

export type AdditionalData = {

}

export type OneQRDto = {
  isValid: boolean
  provider: {

}
  consumer: {

}
  merchant: {

}
  additionalData: {

}
  version: string
  initMethod: string
  category: string
  currency: string
  nation: string
  city: string
  crc: string
}

export type BankCreateVAOuputDto = {
  bankName: 'OCB' | 'BIDV' | 'MBB' | 'ACB' | 'VPB' | 'PGB' | 'VIB' | 'STB' | 'CTG' | 'VCB' | 'AGRIBANK' | 'SHINHAN' | 'COB' | 'MSB' | 'NEXTPAY' | 'TPB'
  merchantAccountNumberId: number
  shopId: number
  status: 'inactive' | 'active' | 'lock'
  confirmId: string
  vaAccountNumber: string
  deepLink: string
  authorizeLink: string
  otpMethod: 'SMSTTT' | 'SmartOTP' | 'mCode'
  qrDto: {
  isValid: boolean
  provider: {

}
  consumer: {

}
  merchant: {

}
  additionalData: {

}
  version: string
  initMethod: string
  category: string
  currency: string
  nation: string
  city: string
  crc: string
}
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
  requestId?: string
  bankBin?: BankBinEnum | string
  bankName?: 'OCB' | 'BIDV' | 'MBB' | 'ACB' | 'VPB' | 'PGB' | 'VIB' | 'STB' | 'CTG' | 'VCB' | 'AGRIBANK' | 'SHINHAN' | 'COB' | 'MSB' | 'NEXTPAY' | 'TPB'
  merchantId?: number
  redirectUrl?: string
  webhookUrl?: string
}

export type OpenApiConfirmVAOuputDto = {
  accountType: 'personal-account' | 'business-account' | 'business-household-account'
  bankName: 'OCB' | 'BIDV' | 'MBB' | 'ACB' | 'VPB' | 'PGB' | 'VIB' | 'STB' | 'CTG' | 'VCB' | 'AGRIBANK' | 'SHINHAN' | 'COB' | 'MSB' | 'NEXTPAY' | 'TPB'
  accountNumber: string
  vaAccountNumber: string
  shopId: number
}

export type OpenApiBankConfirmVAInputDto = {
  merchantId?: number
  confirmId: string
  otpNumber: string
  bankName: 'OCB' | 'BIDV' | 'MBB' | 'ACB' | 'VPB' | 'PGB' | 'VIB' | 'STB' | 'CTG' | 'VCB' | 'AGRIBANK' | 'SHINHAN' | 'COB' | 'MSB' | 'NEXTPAY' | 'TPB'
  bankBin: BankBinEnum | string
}

export type BankDeleteVAOutputDto = {
  confirmId: string
  authorizeLink: string
}

export type OpenApiRegisterNotifyDto = {
  merchantId?: number
  vaAccountNumber: string
  bankBin?: BankBinEnum | string
  bankName?: 'OCB' | 'BIDV' | 'MBB' | 'ACB' | 'VPB' | 'PGB' | 'VIB' | 'STB' | 'CTG' | 'VCB' | 'AGRIBANK' | 'SHINHAN' | 'COB' | 'MSB' | 'NEXTPAY' | 'TPB'
}

export type String = {

}

export type OpenApiReadSecurityCodeDto = {
  merchantId?: number
  uuid: string
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
  appType: 'ocb-web' | 'ocb-app' | 'bidv-web' | 'bidv-app' | 'stb-web' | 'stb-app' | 'vcb-web' | 'vcb-app' | 'tingee-web' | 'tingee-app' | 'tingee-merchant-app' | 'loa-hub' | 'mini-app-mbb' | 'baas'
  shopsLinkToDeviceDtos: {
  shopName: string
  shopId: number
  isLinkToDevice: boolean
  fullAddress: string
  vaAccountNumber?: string
}[]
  type?: 'app-tingee' | 'tingee-box-f1' | 'tingee-box-2a' | 'tingee-box-2as' | 'tingee-box-s1' | 'tingee-box-3ls' | 'tingee-box-3pro' | 'tingee-box-3vn' | 'tingee-box-3vna' | 'tingee-box-4ls' | 'tingee-box-5s' | 'tingee-box-5sa' | 'tingee-box-6ls' | 'tingee-box-6pro' | 'tingee-box-6xs' | 'vn-50' | 'loa-pay' | 'trusted-pay' | 'pay-alert' | 'tingee-box-3vn-mbb' | 'tingee-box-3pro-mbb' | 'tingee-box-3pro-x' | 'tingee-box-max' | 'tingee-box-8pro'
  merchantId?: number
}

export type OpenApiPrintReceiptItemDto = {
  name: string
  quantity: number
  unitPrice: number
}

export type OpenApiPrintDataDto = {
  logo?: 'printer_receipt_logo' | 'printer_receipt_logo2' | 'printer_receipt_logo3' | 'printer_receipt_logo4' | 'rintest'
  storeName: string
  address?: string
  hotline?: string
  orderCode?: string
  items: {
  name: string
  quantity: number
  unitPrice: number
}[]
  totalAmount: number
  discount?: number
  qrCode?: string
  barcode?: string
  footerNote?: string
  voiceFile?: number
  copies?: number
}

export type OpenApiReadAmountDto = {
  merchantId?: number
  uuid: string
  transactionId: string
  amount: number
  bankBin: BankBinEnum | string
  bankName?: 'OCB' | 'BIDV' | 'MBB' | 'ACB' | 'VPB' | 'PGB' | 'VIB' | 'STB' | 'CTG' | 'VCB' | 'AGRIBANK' | 'SHINHAN' | 'COB' | 'MSB' | 'NEXTPAY' | 'TPB'
  firstDisplayText?: string
  secondDisplayText?: string
  thirdDisplayText?: string
  playSound?: boolean
  isPrint?: boolean
  printData?: {
  logo?: 'printer_receipt_logo' | 'printer_receipt_logo2' | 'printer_receipt_logo3' | 'printer_receipt_logo4' | 'rintest'
  storeName: string
  address?: string
  hotline?: string
  orderCode?: string
  items: {
  name: string
  quantity: number
  unitPrice: number
}[]
  totalAmount: number
  discount?: number
  qrCode?: string
  barcode?: string
  footerNote?: string
  voiceFile?: number
  copies?: number
}
}

export type OpenApiShowQRCodeDto = {
  merchantId?: number
  vaAccountNumber?: string
  amount: number
  qrCode: string
  bankBin?: BankBinEnum | string
  bankName?: 'OCB' | 'BIDV' | 'MBB' | 'ACB' | 'VPB' | 'PGB' | 'VIB' | 'STB' | 'CTG' | 'VCB' | 'AGRIBANK' | 'SHINHAN' | 'COB' | 'MSB' | 'NEXTPAY' | 'TPB'
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
  creationTime?: string
  creatorUserId?: number
  lastModificationTime?: string
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
  selectedBankNames?: 'OCB' | 'BIDV' | 'MBB' | 'ACB' | 'VPB' | 'PGB' | 'VIB' | 'STB' | 'CTG' | 'VCB' | 'AGRIBANK' | 'SHINHAN' | 'COB' | 'MSB' | 'NEXTPAY' | 'TPB'[]
  serialNumber?: string
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
  simPhoneNumber?: string
  simSerialNumber?: string
  simProvider?: string
  simPlan?: string
  simExpirationDate?: string
  simActivationDate?: string
}

export type OpenApiGetPagingDeviceInputDto = {
  filter?: string
  sorting?: string
  skipCount: number
  maxResultCount: number
  merchantId: number
  type?: 'app-tingee' | 'tingee-box-f1' | 'tingee-box-2a' | 'tingee-box-2as' | 'tingee-box-s1' | 'tingee-box-3ls' | 'tingee-box-3pro' | 'tingee-box-3vn' | 'tingee-box-3vna' | 'tingee-box-4ls' | 'tingee-box-5s' | 'tingee-box-5sa' | 'tingee-box-6ls' | 'tingee-box-6pro' | 'tingee-box-6xs' | 'vn-50' | 'loa-pay' | 'trusted-pay' | 'pay-alert' | 'tingee-box-3vn-mbb' | 'tingee-box-3pro-mbb' | 'tingee-box-3pro-x' | 'tingee-box-max' | 'tingee-box-8pro'
}

export type OpenApiGenerateAndShowDynamicQrCodeDto = {
  merchantId?: number
  vaAccountNumber: string
  qrCodeType: 'dynamic-one-time-payment' | 'dynamic-recurring-payment'
  bankBin?: BankBinEnum | string
  bankName?: 'OCB' | 'BIDV' | 'MBB' | 'ACB' | 'VPB' | 'PGB' | 'VIB' | 'STB' | 'CTG' | 'VCB' | 'AGRIBANK' | 'SHINHAN' | 'COB' | 'MSB' | 'NEXTPAY' | 'TPB'
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

export type OpenApiPrintReceiptDto = {
  logo?: 'printer_receipt_logo' | 'printer_receipt_logo2' | 'printer_receipt_logo3' | 'printer_receipt_logo4' | 'rintest'
  storeName: string
  address?: string
  hotline?: string
  orderCode?: string
  items: {
  name: string
  quantity: number
  unitPrice: number
}[]
  totalAmount: number
  discount?: number
  qrCode?: string
  barcode?: string
  footerNote?: string
  voiceFile?: number
  copies?: number
  merchantId?: number
  uuid: string
}

export type OpenApiNfcCommandDto = {
  merchantId?: number
  uuid: string
  enableNfc?: boolean
  playSound?: boolean
  nfcUrl: string
  nfcPackageName: string
}

export type OpenApiResetDeviceDto = {
  uuid: string
  phoneNumber?: string
  accountNumber?: string
  isBankRequest?: boolean
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

export type OpenApiDeepLinkDto = {
  merchantId?: number
  type: string
  qrCode: string
  redirectUrl?: string
  callbackUrl?: string
  bankBin: BankBinEnum | string
  destinationBankBin: string
  accountName: string
  accountNumber: string
  amount?: number
  content?: string
  billNumber: string
}

export type OpenApiDeepLinkBIDVTESTDto = {
  type: string
  qrCode: string
  redirectUrl?: string
  callbackUrl?: string
  bankBin: BankBinEnum | string
  destinationBankBin: string
  accountName: string
  accountNumber: string
  amount?: number
  content?: string
  billNumber: string
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
  lastModificationTime?: string
  lastModifierUserId?: number
  email?: string
  bankName: 'OCB' | 'BIDV' | 'MBB' | 'ACB' | 'VPB' | 'PGB' | 'VIB' | 'STB' | 'CTG' | 'VCB' | 'AGRIBANK' | 'SHINHAN' | 'COB' | 'MSB' | 'NEXTPAY' | 'TPB'
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
  customerKey?: string
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
  bankName: 'OCB' | 'BIDV' | 'MBB' | 'ACB' | 'VPB' | 'PGB' | 'VIB' | 'STB' | 'CTG' | 'VCB' | 'AGRIBANK' | 'SHINHAN' | 'COB' | 'MSB' | 'NEXTPAY' | 'TPB'
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
  creationTime?: string
  creatorUserId?: number
  lastModificationTime?: string
  lastModifierUserId?: number
  deleterUserId?: number
  merchantId: number
  accountType: 'personal-account' | 'business-account' | 'business-household-account'
  configDto?: Record<string, any>
  bankBin?: BankBinEnum | string
  bankName?: 'OCB' | 'BIDV' | 'MBB' | 'ACB' | 'VPB' | 'PGB' | 'VIB' | 'STB' | 'CTG' | 'VCB' | 'AGRIBANK' | 'SHINHAN' | 'COB' | 'MSB' | 'NEXTPAY' | 'TPB'
}

export type OpenApiMerchantBankConfigPagedInputDto = {
  filter?: string
  sorting?: string
  skipCount: number
  maxResultCount: number
  accountType?: 'personal-account' | 'business-account' | 'business-household-account'
  merchantId?: number
  bankBin?: BankBinEnum | string
  bankName?: 'OCB' | 'BIDV' | 'MBB' | 'ACB' | 'VPB' | 'PGB' | 'VIB' | 'STB' | 'CTG' | 'VCB' | 'AGRIBANK' | 'SHINHAN' | 'COB' | 'MSB' | 'NEXTPAY' | 'TPB'
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
  bankName?: 'OCB' | 'BIDV' | 'MBB' | 'ACB' | 'VPB' | 'PGB' | 'VIB' | 'STB' | 'CTG' | 'VCB' | 'AGRIBANK' | 'SHINHAN' | 'COB' | 'MSB' | 'NEXTPAY' | 'TPB'
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
  bankName?: 'OCB' | 'BIDV' | 'MBB' | 'ACB' | 'VPB' | 'PGB' | 'VIB' | 'STB' | 'CTG' | 'VCB' | 'AGRIBANK' | 'SHINHAN' | 'COB' | 'MSB' | 'NEXTPAY' | 'TPB'
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
  bankName?: 'OCB' | 'BIDV' | 'MBB' | 'ACB' | 'VPB' | 'PGB' | 'VIB' | 'STB' | 'CTG' | 'VCB' | 'AGRIBANK' | 'SHINHAN' | 'COB' | 'MSB' | 'NEXTPAY' | 'TPB'
}

export type OpenApiMerchantIdDto = {
  merchantId: number
}

export type MerchantBaasTypeEnum = 'trial' | 'trial-extended' | 'customer' | 'cancelled' | 'unclassified'

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
  referralCode?: string
  baasType?: 'trial' | 'trial-extended' | 'customer' | 'cancelled' | 'unclassified'
  password: string
  appType: 'ocb-web' | 'ocb-app' | 'bidv-web' | 'bidv-app' | 'stb-web' | 'stb-app' | 'vcb-web' | 'vcb-app' | 'tingee-web' | 'tingee-app' | 'tingee-merchant-app' | 'loa-hub' | 'mini-app-mbb' | 'baas'
  requirePasswordChange?: boolean
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

export type MerchantPackageInfo = {
  packageName: string
  expirationDate: string
}

export type MerchantDto = {
  id: number
  creationTime?: string
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
  baasType?: 'trial' | 'trial-extended' | 'customer' | 'cancelled' | 'unclassified'
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

export type EInvoiceProviderEnum = 'x-cyber' | 'hilo' | 's-invoice' | 'misa'

export type GetPagingEInvoiceAccountOutputDto = {
  id: number
  creationTime?: string
  merchantId: number
  provider: 'x-cyber' | 'hilo' | 's-invoice' | 'misa'
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
  provider?: 'x-cyber' | 'hilo' | 's-invoice' | 'misa'
  isDefault?: boolean
  isActive?: boolean
  merchantId?: number
}

export type CreateOrUpdateEInvoiceAccountDto = {
  provider: 'x-cyber' | 'hilo' | 's-invoice' | 'misa'
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
  code: 'x-cyber' | 'hilo' | 's-invoice' | 'misa'
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
  quantity: string
  unitPrice: string
  discount?: string
  discountAmount?: string
  totalBeforeTax?: string
  taxRateCode: string
  taxAmount?: string
  totalAfterTax?: string
  itemType?: number
  adjustmentType?: number
}

export type TaxRateSummaryDto = {
  taxRateCode: string
  totalTaxableAmount?: string
  taxAmount?: string
}

export type CreateInvoiceDto = {
  merchantId?: number
  accountId?: number
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
  exchangeRate?: string
  amountInWords?: string
  note?: string
  items: {
  itemCode?: string
  itemName: string
  unitName?: string
  quantity: string
  unitPrice: string
  discount?: string
  discountAmount?: string
  totalBeforeTax?: string
  taxRateCode: string
  taxAmount?: string
  totalAfterTax?: string
  itemType?: number
  adjustmentType?: number
}[]
  totalDiscount?: string
  totalBeforeTax?: string
  totalTax?: string
  totalAfterTax?: string
  taxRateSummaries?: {
  taxRateCode: string
  totalTaxableAmount?: string
  taxAmount?: string
}[]
}

export type TrackingResultDto = {
  invoiceCode: string
  trackingCode?: string
  invoiceNumber?: string
  reservationCode?: string
  codeOfTax?: string
  url?: string
}

export type GetInvoiceInfoQueryDto = {
  merchantId?: number
  accountId?: number
  invoiceCode: string
}

export type DownloadInvoiceQueryDto = {
  merchantId?: number
  accountId?: number
  invoiceCode: string
}

export type InvoiceTemplateOutputDto = {
  invoicePattern: string
  invoiceSeries: string
  quota?: number
}

export type InvoiceTemplateInputDto = {
  merchantId: number
  accountId: number
  provider: 'x-cyber' | 'hilo' | 's-invoice' | 'misa'
  taxCode: string
  username: string
  password: string
  invoiceNoToCheck: number
}

export type SendInvoiceEmailDto = {
  merchantId?: number
  accountId?: number
  invoiceCode: string
  buyerName?: string
  recipientEmail: string
}
