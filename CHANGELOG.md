# Changelog — @tingee/sdk-node

All notable changes to this package will be documented in this file.
Format: [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)

---

## [0.1.0] — 2026-03-04

### Initial release

#### Added
- `TingeeClient` — main client class with `v1.*` method namespace
- **49 auto-generated V1 API methods** from OpenAPI spec (`openapi/sdk.json`)
  - VietQR, Dynamic QR generation
  - Merchant, Shop, Device management
  - Direct Debit / Subscription APIs
  - Bank / VA (Virtual Account) APIs
  - Account info, Notification, Config endpoints
- `client.v1.customMethod()` — extensible namespace via `v1-custom-methods.ts` (hand-written, never overwritten by generator)
- `client.verifyWebhookSignature({ signature, timestamp, body })` — verify incoming Tingee webhooks using the secretKey already set on the client instance (no need to pass key again)
- `TingeeHttpClient` — internal fetch-based HTTP client with:
  - Automatic HMAC-SHA512 signature generation on every request (`x-signature`, `x-request-timestamp`, `x-client-id` headers)
  - Timestamp forced to **UTC+7 (Asia/Ho_Chi_Minh)** to prevent "Request expired" errors
  - Query string support for GET endpoints
  - Configurable timeout (default 90s)
- `generateSignature(secretKey, timestamp, body)` — low-level signature utility (exported)
- `formatTimestamp()` — returns UTC+7 timestamp in `yyyyMMddHHmmssSSS` format (exported)
- `verifyWebhookSignature(input)` — standalone webhook verifier (exported)
- `BankNameEnum`, `BankAccountTypeEnum`, `Banks`, `getBankCode()`, `getBankShortName()` — Vietnamese bank constants & helpers
- Full TypeScript types for all 138 DTO models
- Environment support: `'uat'` | `'production'` | custom `baseUrl`

#### Design decisions
- HTTP client returns raw `TingeeApiResponse` — callers check `result.code === '00'` themselves; no auto-throw on business errors
- Network/timeout errors still throw `TingeeHttpError`
