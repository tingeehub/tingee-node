# @tingee/sdk-node

> SDK chính thức tích hợp **Tingee Open API** cho Node.js / TypeScript

[![npm](https://img.shields.io/npm/v/@tingee/sdk-node)](https://www.npmjs.com/package/@tingee/sdk-node)
[![Node.js](https://img.shields.io/badge/node-%3E%3D18-brightgreen)](https://nodejs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-ready-blue)](https://www.typescriptlang.org)
[![License: ISC](https://img.shields.io/badge/License-ISC-yellow)](LICENSE)

---

## Cài đặt

```bash
npm install @tingee/sdk-node
# hoặc
yarn add @tingee/sdk-node
# hoặc
pnpm add @tingee/sdk-node
```

---

## Bắt đầu nhanh

```ts
import { TingeeClient, isSuccessResponse } from '@tingee/sdk-node'

const client = new TingeeClient({
  secretKey:   process.env.TINGEE_SECRET_KEY!,
  clientId:    process.env.TINGEE_CLIENT_ID!,
  environment: 'uat', // 'uat' | 'production' mặc định 'uat'
  timeout: 90000, // mặc định 90s
  baseUrl: 'https://uat-open-api.tingee.vn', // tùy chọn, ghi đè Environment
})

const result = await client.v1.merchantGetPaging({ maxResultCount: 10, skipCount: 0 });
if (isSuccessResponse(result)) {
  console.log(result.data)
} else {
  console.error(`Lỗi ${result.code}: ${result.message}`)
}
```

---

## Cấu hình

| Tùy chọn | Kiểu | Mặc định | Mô tả |
|---|---|---|---|
| `secretKey` | `string` | — | **Bắt buộc.** Secret key từ Tingee Dashboard |
| `clientId` | `string` | — | **Bắt buộc.** Client ID từ Tingee Dashboard |
| `environment` | `'uat' \| 'production'` | `'uat'` | Môi trường API |
| `baseUrl` | `string` | — | Ghi đè URL (bỏ qua `environment`) |
| `timeout` | `number` | `90000` | Timeout (ms) |

---

## Gọi API

Tất cả phương thức nằm trong `client.v1.*`:

```ts
// Lấy danh sách shop (có phân trang)
const result = await client.v1.shopGetPaging({ maxResultCount: 10, skipCount: 0 })
if (isSuccessResponse(result)) {
  result.data.items.forEach(s => console.log(s.name))
}

// Direct Debit
const sub = await client.v1.directDebitGetSubscriptionStatus({
  requestId:     'uuid-here',
  subscriptionId: 'uuid-here',
  tokenRef:      'token-ref',
})
```

> **Lưu ý:** SDK trả về `TingeeApiResponse` với `code` và `message`. Kiểm tra `code === '00'` hoặc `isSuccessResponse(result)` để xác định thành công — SDK **không tự throw** khi `code !== '00'`.

## Xác thực Webhook

Khi Tingee gọi vào endpoint webhook của bạn, dùng `client.verifyWebhookSignature()`:

```ts
// Express.js
app.post('/webhook/tingee', express.json(), (req, res) => {
  const result = client.verifyWebhookSignature({
    signature: req.headers['x-signature']         as string,
    timestamp: req.headers['x-request-timestamp'] as string,
    body:      req.body,
  })

  if (isErrorResponse(result)) {
    return res.status(401).json({ error: result.message })
  }

  const { transactionCode, amount, bank } = req.body
  // Xử lý giao dịch...
  res.json({ received: true })
})
```

```ts
// NestJS
@Post('webhook/tingee')
handleWebhook(@Req() req: Request, @Body() body: Record<string, any>) {
  const result = this.tingeeClient.verifyWebhookSignature({
    signature: req.headers['x-signature'] as string,
    timestamp: req.headers['x-request-timestamp'] as string,
    body,
  })
  if (isErrorResponse(result)) throw new UnauthorizedException(result.message)
  // ...
}
```

---

## Bank Constants

```ts
import { BankNameEnum, getBankCode, getBankShortName, getBankBin } from '@tingee/sdk-node'

getBankCode(BankNameEnum.VIETCOMBANK)       // 'VCB'
getBankShortName(BankNameEnum.VIETCOMBANK)  // 'Vietcombank'
getBankBin(BankNameEnum.VIETCOMBANK)        // '970410'
```

---

## Liên hệ & Hỗ trợ

📧 **Email:** [developer@heno.vn](mailto:developer@heno.vn)
💬 **Telegram:** [@tingeesupport](https://t.me/tingeesupport)
🌐 **Website:** [tingee.vn](https://tingee.vn)

---

## Xem thêm

- [CHANGELOG](./CHANGELOG.md)
- [Tài liệu Tingee Open API](https://open-api.tingee.vn)
- [Tài liệu Tingee Developer](https://developers.tingee.vn)
- [Trang chủ Tingee](https://tingee.vn)
