# Changelog — @tingee/sdk-node

## [0.3.0] — 2026-08-06

### Added
- Bank V1 API additions:
  - `createDebit`: `POST /v1/bank/create-debit` (tạo VA ghi nợ)
  - `createBatchVaOnOff`: `POST /v1/bank/create-batch-va-on-off` (tạo/bật/tắt VA hàng loạt)
  - `webhookNotification`: `POST /v1/bank/webhook-notification` (cập nhật cấu hình nhận webhook notification)
  - `createBankLinkSession`: `POST /v1/bank/create-bank-link-session` (tạo phiên liên kết tài khoản ngân hàng)
  - `onVa` / `offVa`: `POST /v1/bank/on-va`, `POST /v1/bank/off-va` (bật/tắt Virtual Account)
  - `confirmRegisterNotify`: `POST /v1/bank/confirm-register-notify` (xác nhận đăng ký nhận thông báo biến động)
- Payment Gateway API support (`/v1/payment-gateway/*`):
  - `createPaymentLink`: `POST /v1/payment-gateway/create-payment-link` (tạo link thanh toán)
- Webhook & transaction status enum values: `delete-va-success`, `delete-va-failed`, `bank-link-success`, `bank-link-failed`

### Fixed & Improved
- Prevented generator from creating duplicate DTO types for built-in primitive schema names (`Boolean`, `String`, `Number`, `Object`)
- Updated OpenAPI spec and regenerated client methods and DTO types (155 schemas, 72 API methods)

## [0.2.4] — 2026-06-18

### Changed
- Updated OpenAPI spec with latest API definitions
- Regenerated SDK client and DTO classes

## [0.2.3] [DEPRECATED] — 2026-04-09

> **⚠️ Deprecated** — Phiên bản này không còn được hỗ trợ. Vui lòng nâng cấp lên `>=0.2.4`.

### Changed
- Updated model classes

## [0.2.2] [DEPRECATED] — 2026-04-08

> **⚠️ Deprecated** — Phiên bản này không còn được hỗ trợ. Vui lòng nâng cấp lên `>=0.2.4`.

### Changed
- Updated OpenAPI spec with latest API definitions
- Regenerated SDK client methods and DTOs

## [0.2.1] [DEPRECATED] — 2026-03-31

> **⚠️ Deprecated** — Phiên bản này không còn được hỗ trợ. Vui lòng nâng cấp lên `>=0.2.4`.

### Changed
- Updated OpenAPI spec with latest API definitions
- Regenerated SDK client methods and DTOs

## [0.2.0] [DEPRECATED] — 2026-03-30

> **⚠️ Deprecated** — Phiên bản này không còn được hỗ trợ. Vui lòng nâng cấp lên `>=0.2.4`.

### Added
- E-Invoice API support: account management, invoice creation, template listing, invoice download, and email sending

### Changed
- Updated OpenAPI spec with latest API definitions
- Regenerated SDK client methods and DTOs

## [0.1.0] [DEPRECATED] — 2026-03-06

> **⚠️ Deprecated** — Phiên bản này không còn được hỗ trợ. Vui lòng nâng cấp lên `>=0.2.4`.

### Added
- Initial SDK release
- API client implementation
- Request signing
- Basic error handling
