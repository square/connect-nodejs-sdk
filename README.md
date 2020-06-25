![Square logo]

# Square Connect Node SDK

---

[![Build Status](https://travis-ci.org/square/connect-nodejs-sdk.svg?branch=master)](https://travis-ci.org/square/connect-nodejs-sdk)
[![npm version](https://badge.fury.io/js/square-connect.svg)](https://badge.fury.io/js/square-connect)
[![Apache-2 license](https://img.shields.io/badge/license-Apache2-brightgreen.svg)](https://www.apache.org/licenses/LICENSE-2.0)
==================
## NOTICE: Square Connect Node.js SDK deprecated
This Square Connect SDK will enter a security maintenance phase in Q3 2020 and will be RETIRED (EOL) in Q1 2021. In the security
maintenance phase, this SDK will continue to receive support and security patches but will no longer receive bug fixes or product
updates. Once it is retired, support and security patches will no longer be available.  A new SDK, more bespoke to the language, will be available once this SDK enters its security maintenance phase.
The SDK itself will continue to work indefinitely until such time that the underlying APIs are retired at which point portions of the SDK may stop functioning.  For a full list of API retirement dates, please see our [Square API Lifecycle documentation](https ://developer.squareup.com/docs/build-basics/api-lifecycle#deprecated-apis).

| Security Maintenance | New SDK Release | Retired (EOL)  |
| ------------- |-------------| -----|
| Q3, 2020      | Q3, 2020 | Q1, 2021 |

**If you have feedback about the new SDKs, or just want to talk to other Square Developers, request an invite to the new [slack community for Square Developers](https://squ.re/2uLSRw5)**


## Requirements

Node.js 6.0 or later

## Installation

### For [Node.js](https://nodejs.org/)

To install the SDK:

```shell
npm install square-connect --save
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = "YOUR ACCESS TOKEN";

var api = new SquareConnect.LocationsApi();

api.listLocations().then(function(data) {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data, 0, 1));
}, function(error) {
  console.error(error);
});
```

### How to configure sandbox environment
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;
// Set sandbox url
defaultClient.basePath = 'https://connect.squareupsandbox.com';
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
// Set sandbox access token
oauth2.accessToken = "YOUR SANDBOX ACCESS TOKEN";
// Pass client to API
var api = new SquareConnect.LocationsApi();
```

## Documentation for API Endpoints

All URIs are relative to *https://connect.squareup.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*SquareConnect.ApplePayApi* | [**registerDomain**](docs/ApplePayApi.md#registerDomain) | **POST** /v2/apple-pay/domains | RegisterDomain
*SquareConnect.BankAccountsApi* | [**getBankAccount**](docs/BankAccountsApi.md#getBankAccount) | **GET** /v2/bank-accounts/{bank_account_id} | GetBankAccount
*SquareConnect.BankAccountsApi* | [**getBankAccountByV1Id**](docs/BankAccountsApi.md#getBankAccountByV1Id) | **GET** /v2/bank-accounts/by-v1-id/{v1_bank_account_id} | GetBankAccountByV1Id
*SquareConnect.BankAccountsApi* | [**listBankAccounts**](docs/BankAccountsApi.md#listBankAccounts) | **GET** /v2/bank-accounts | ListBankAccounts
*SquareConnect.CashDrawersApi* | [**listCashDrawerShiftEvents**](docs/CashDrawersApi.md#listCashDrawerShiftEvents) | **GET** /v2/cash-drawers/shifts/{shift_id}/events | ListCashDrawerShiftEvents
*SquareConnect.CashDrawersApi* | [**listCashDrawerShifts**](docs/CashDrawersApi.md#listCashDrawerShifts) | **GET** /v2/cash-drawers/shifts | ListCashDrawerShifts
*SquareConnect.CashDrawersApi* | [**retrieveCashDrawerShift**](docs/CashDrawersApi.md#retrieveCashDrawerShift) | **GET** /v2/cash-drawers/shifts/{shift_id} | RetrieveCashDrawerShift
*SquareConnect.CatalogApi* | [**batchDeleteCatalogObjects**](docs/CatalogApi.md#batchDeleteCatalogObjects) | **POST** /v2/catalog/batch-delete | BatchDeleteCatalogObjects
*SquareConnect.CatalogApi* | [**batchRetrieveCatalogObjects**](docs/CatalogApi.md#batchRetrieveCatalogObjects) | **POST** /v2/catalog/batch-retrieve | BatchRetrieveCatalogObjects
*SquareConnect.CatalogApi* | [**batchUpsertCatalogObjects**](docs/CatalogApi.md#batchUpsertCatalogObjects) | **POST** /v2/catalog/batch-upsert | BatchUpsertCatalogObjects
*SquareConnect.CatalogApi* | [**catalogInfo**](docs/CatalogApi.md#catalogInfo) | **GET** /v2/catalog/info | CatalogInfo
*SquareConnect.CatalogApi* | [**deleteCatalogObject**](docs/CatalogApi.md#deleteCatalogObject) | **DELETE** /v2/catalog/object/{object_id} | DeleteCatalogObject
*SquareConnect.CatalogApi* | [**listCatalog**](docs/CatalogApi.md#listCatalog) | **GET** /v2/catalog/list | ListCatalog
*SquareConnect.CatalogApi* | [**retrieveCatalogObject**](docs/CatalogApi.md#retrieveCatalogObject) | **GET** /v2/catalog/object/{object_id} | RetrieveCatalogObject
*SquareConnect.CatalogApi* | [**searchCatalogObjects**](docs/CatalogApi.md#searchCatalogObjects) | **POST** /v2/catalog/search | SearchCatalogObjects
*SquareConnect.CatalogApi* | [**updateItemModifierLists**](docs/CatalogApi.md#updateItemModifierLists) | **POST** /v2/catalog/update-item-modifier-lists | UpdateItemModifierLists
*SquareConnect.CatalogApi* | [**updateItemTaxes**](docs/CatalogApi.md#updateItemTaxes) | **POST** /v2/catalog/update-item-taxes | UpdateItemTaxes
*SquareConnect.CatalogApi* | [**upsertCatalogObject**](docs/CatalogApi.md#upsertCatalogObject) | **POST** /v2/catalog/object | UpsertCatalogObject
*SquareConnect.CheckoutApi* | [**createCheckout**](docs/CheckoutApi.md#createCheckout) | **POST** /v2/locations/{location_id}/checkouts | CreateCheckout
*SquareConnect.CustomerGroupsApi* | [**createCustomerGroup**](docs/CustomerGroupsApi.md#createCustomerGroup) | **POST** /v2/customers/groups | CreateCustomerGroup
*SquareConnect.CustomerGroupsApi* | [**deleteCustomerGroup**](docs/CustomerGroupsApi.md#deleteCustomerGroup) | **DELETE** /v2/customers/groups/{group_id} | DeleteCustomerGroup
*SquareConnect.CustomerGroupsApi* | [**listCustomerGroups**](docs/CustomerGroupsApi.md#listCustomerGroups) | **GET** /v2/customers/groups | ListCustomerGroups
*SquareConnect.CustomerGroupsApi* | [**retrieveCustomerGroup**](docs/CustomerGroupsApi.md#retrieveCustomerGroup) | **GET** /v2/customers/groups/{group_id} | RetrieveCustomerGroup
*SquareConnect.CustomerGroupsApi* | [**updateCustomerGroup**](docs/CustomerGroupsApi.md#updateCustomerGroup) | **PUT** /v2/customers/groups/{group_id} | UpdateCustomerGroup
*SquareConnect.CustomerSegmentsApi* | [**listCustomerSegments**](docs/CustomerSegmentsApi.md#listCustomerSegments) | **GET** /v2/customers/segments | ListCustomerSegments
*SquareConnect.CustomerSegmentsApi* | [**retrieveCustomerSegment**](docs/CustomerSegmentsApi.md#retrieveCustomerSegment) | **GET** /v2/customers/segments/{segment_id} | RetrieveCustomerSegment
*SquareConnect.CustomersApi* | [**addGroupToCustomer**](docs/CustomersApi.md#addGroupToCustomer) | **PUT** /v2/customers/{customer_id}/groups/{group_id} | AddGroupToCustomer
*SquareConnect.CustomersApi* | [**createCustomer**](docs/CustomersApi.md#createCustomer) | **POST** /v2/customers | CreateCustomer
*SquareConnect.CustomersApi* | [**createCustomerCard**](docs/CustomersApi.md#createCustomerCard) | **POST** /v2/customers/{customer_id}/cards | CreateCustomerCard
*SquareConnect.CustomersApi* | [**deleteCustomer**](docs/CustomersApi.md#deleteCustomer) | **DELETE** /v2/customers/{customer_id} | DeleteCustomer
*SquareConnect.CustomersApi* | [**deleteCustomerCard**](docs/CustomersApi.md#deleteCustomerCard) | **DELETE** /v2/customers/{customer_id}/cards/{card_id} | DeleteCustomerCard
*SquareConnect.CustomersApi* | [**listCustomers**](docs/CustomersApi.md#listCustomers) | **GET** /v2/customers | ListCustomers
*SquareConnect.CustomersApi* | [**removeGroupFromCustomer**](docs/CustomersApi.md#removeGroupFromCustomer) | **DELETE** /v2/customers/{customer_id}/groups/{group_id} | RemoveGroupFromCustomer
*SquareConnect.CustomersApi* | [**retrieveCustomer**](docs/CustomersApi.md#retrieveCustomer) | **GET** /v2/customers/{customer_id} | RetrieveCustomer
*SquareConnect.CustomersApi* | [**searchCustomers**](docs/CustomersApi.md#searchCustomers) | **POST** /v2/customers/search | SearchCustomers
*SquareConnect.CustomersApi* | [**updateCustomer**](docs/CustomersApi.md#updateCustomer) | **PUT** /v2/customers/{customer_id} | UpdateCustomer
*SquareConnect.DevicesApi* | [**createDeviceCode**](docs/DevicesApi.md#createDeviceCode) | **POST** /v2/devices/codes | CreateDeviceCode
*SquareConnect.DevicesApi* | [**getDeviceCode**](docs/DevicesApi.md#getDeviceCode) | **GET** /v2/devices/codes/{id} | GetDeviceCode
*SquareConnect.DevicesApi* | [**listDeviceCodes**](docs/DevicesApi.md#listDeviceCodes) | **GET** /v2/devices/codes | ListDeviceCodes
*SquareConnect.DisputesApi* | [**acceptDispute**](docs/DisputesApi.md#acceptDispute) | **POST** /v2/disputes/{dispute_id}/accept | AcceptDispute
*SquareConnect.DisputesApi* | [**createDisputeEvidenceText**](docs/DisputesApi.md#createDisputeEvidenceText) | **POST** /v2/disputes/{dispute_id}/evidence_text | CreateDisputeEvidenceText
*SquareConnect.DisputesApi* | [**listDisputeEvidence**](docs/DisputesApi.md#listDisputeEvidence) | **GET** /v2/disputes/{dispute_id}/evidence | ListDisputeEvidence
*SquareConnect.DisputesApi* | [**listDisputes**](docs/DisputesApi.md#listDisputes) | **GET** /v2/disputes | ListDisputes
*SquareConnect.DisputesApi* | [**removeDisputeEvidence**](docs/DisputesApi.md#removeDisputeEvidence) | **DELETE** /v2/disputes/{dispute_id}/evidence/{evidence_id} | RemoveDisputeEvidence
*SquareConnect.DisputesApi* | [**retrieveDispute**](docs/DisputesApi.md#retrieveDispute) | **GET** /v2/disputes/{dispute_id} | RetrieveDispute
*SquareConnect.DisputesApi* | [**retrieveDisputeEvidence**](docs/DisputesApi.md#retrieveDisputeEvidence) | **GET** /v2/disputes/{dispute_id}/evidence/{evidence_id} | RetrieveDisputeEvidence
*SquareConnect.DisputesApi* | [**submitEvidence**](docs/DisputesApi.md#submitEvidence) | **POST** /v2/disputes/{dispute_id}/submit-evidence | SubmitEvidence
*SquareConnect.EmployeesApi* | [**listEmployees**](docs/EmployeesApi.md#listEmployees) | **GET** /v2/employees | ListEmployees
*SquareConnect.EmployeesApi* | [**retrieveEmployee**](docs/EmployeesApi.md#retrieveEmployee) | **GET** /v2/employees/{id} | RetrieveEmployee
*SquareConnect.InventoryApi* | [**batchChangeInventory**](docs/InventoryApi.md#batchChangeInventory) | **POST** /v2/inventory/batch-change | BatchChangeInventory
*SquareConnect.InventoryApi* | [**batchRetrieveInventoryChanges**](docs/InventoryApi.md#batchRetrieveInventoryChanges) | **POST** /v2/inventory/batch-retrieve-changes | BatchRetrieveInventoryChanges
*SquareConnect.InventoryApi* | [**batchRetrieveInventoryCounts**](docs/InventoryApi.md#batchRetrieveInventoryCounts) | **POST** /v2/inventory/batch-retrieve-counts | BatchRetrieveInventoryCounts
*SquareConnect.InventoryApi* | [**retrieveInventoryAdjustment**](docs/InventoryApi.md#retrieveInventoryAdjustment) | **GET** /v2/inventory/adjustment/{adjustment_id} | RetrieveInventoryAdjustment
*SquareConnect.InventoryApi* | [**retrieveInventoryChanges**](docs/InventoryApi.md#retrieveInventoryChanges) | **GET** /v2/inventory/{catalog_object_id}/changes | RetrieveInventoryChanges
*SquareConnect.InventoryApi* | [**retrieveInventoryCount**](docs/InventoryApi.md#retrieveInventoryCount) | **GET** /v2/inventory/{catalog_object_id} | RetrieveInventoryCount
*SquareConnect.InventoryApi* | [**retrieveInventoryPhysicalCount**](docs/InventoryApi.md#retrieveInventoryPhysicalCount) | **GET** /v2/inventory/physical-count/{physical_count_id} | RetrieveInventoryPhysicalCount
*SquareConnect.LaborApi* | [**createBreakType**](docs/LaborApi.md#createBreakType) | **POST** /v2/labor/break-types | CreateBreakType
*SquareConnect.LaborApi* | [**createShift**](docs/LaborApi.md#createShift) | **POST** /v2/labor/shifts | CreateShift
*SquareConnect.LaborApi* | [**deleteBreakType**](docs/LaborApi.md#deleteBreakType) | **DELETE** /v2/labor/break-types/{id} | DeleteBreakType
*SquareConnect.LaborApi* | [**deleteShift**](docs/LaborApi.md#deleteShift) | **DELETE** /v2/labor/shifts/{id} | DeleteShift
*SquareConnect.LaborApi* | [**getBreakType**](docs/LaborApi.md#getBreakType) | **GET** /v2/labor/break-types/{id} | GetBreakType
*SquareConnect.LaborApi* | [**getEmployeeWage**](docs/LaborApi.md#getEmployeeWage) | **GET** /v2/labor/employee-wages/{id} | GetEmployeeWage
*SquareConnect.LaborApi* | [**getShift**](docs/LaborApi.md#getShift) | **GET** /v2/labor/shifts/{id} | GetShift
*SquareConnect.LaborApi* | [**listBreakTypes**](docs/LaborApi.md#listBreakTypes) | **GET** /v2/labor/break-types | ListBreakTypes
*SquareConnect.LaborApi* | [**listEmployeeWages**](docs/LaborApi.md#listEmployeeWages) | **GET** /v2/labor/employee-wages | ListEmployeeWages
*SquareConnect.LaborApi* | [**listWorkweekConfigs**](docs/LaborApi.md#listWorkweekConfigs) | **GET** /v2/labor/workweek-configs | ListWorkweekConfigs
*SquareConnect.LaborApi* | [**searchShifts**](docs/LaborApi.md#searchShifts) | **POST** /v2/labor/shifts/search | SearchShifts
*SquareConnect.LaborApi* | [**updateBreakType**](docs/LaborApi.md#updateBreakType) | **PUT** /v2/labor/break-types/{id} | UpdateBreakType
*SquareConnect.LaborApi* | [**updateShift**](docs/LaborApi.md#updateShift) | **PUT** /v2/labor/shifts/{id} | UpdateShift
*SquareConnect.LaborApi* | [**updateWorkweekConfig**](docs/LaborApi.md#updateWorkweekConfig) | **PUT** /v2/labor/workweek-configs/{id} | UpdateWorkweekConfig
*SquareConnect.LocationsApi* | [**createLocation**](docs/LocationsApi.md#createLocation) | **POST** /v2/locations | CreateLocation
*SquareConnect.LocationsApi* | [**listLocations**](docs/LocationsApi.md#listLocations) | **GET** /v2/locations | ListLocations
*SquareConnect.LocationsApi* | [**retrieveLocation**](docs/LocationsApi.md#retrieveLocation) | **GET** /v2/locations/{location_id} | RetrieveLocation
*SquareConnect.LocationsApi* | [**updateLocation**](docs/LocationsApi.md#updateLocation) | **PUT** /v2/locations/{location_id} | UpdateLocation
*SquareConnect.LoyaltyApi* | [**accumulateLoyaltyPoints**](docs/LoyaltyApi.md#accumulateLoyaltyPoints) | **POST** /v2/loyalty/accounts/{account_id}/accumulate | AccumulateLoyaltyPoints
*SquareConnect.LoyaltyApi* | [**adjustLoyaltyPoints**](docs/LoyaltyApi.md#adjustLoyaltyPoints) | **POST** /v2/loyalty/accounts/{account_id}/adjust | AdjustLoyaltyPoints
*SquareConnect.LoyaltyApi* | [**calculateLoyaltyPoints**](docs/LoyaltyApi.md#calculateLoyaltyPoints) | **POST** /v2/loyalty/programs/{program_id}/calculate | CalculateLoyaltyPoints
*SquareConnect.LoyaltyApi* | [**createLoyaltyAccount**](docs/LoyaltyApi.md#createLoyaltyAccount) | **POST** /v2/loyalty/accounts | CreateLoyaltyAccount
*SquareConnect.LoyaltyApi* | [**createLoyaltyReward**](docs/LoyaltyApi.md#createLoyaltyReward) | **POST** /v2/loyalty/rewards | CreateLoyaltyReward
*SquareConnect.LoyaltyApi* | [**deleteLoyaltyReward**](docs/LoyaltyApi.md#deleteLoyaltyReward) | **DELETE** /v2/loyalty/rewards/{reward_id} | DeleteLoyaltyReward
*SquareConnect.LoyaltyApi* | [**listLoyaltyPrograms**](docs/LoyaltyApi.md#listLoyaltyPrograms) | **GET** /v2/loyalty/programs | ListLoyaltyPrograms
*SquareConnect.LoyaltyApi* | [**redeemLoyaltyReward**](docs/LoyaltyApi.md#redeemLoyaltyReward) | **POST** /v2/loyalty/rewards/{reward_id}/redeem | RedeemLoyaltyReward
*SquareConnect.LoyaltyApi* | [**retrieveLoyaltyAccount**](docs/LoyaltyApi.md#retrieveLoyaltyAccount) | **GET** /v2/loyalty/accounts/{account_id} | RetrieveLoyaltyAccount
*SquareConnect.LoyaltyApi* | [**retrieveLoyaltyReward**](docs/LoyaltyApi.md#retrieveLoyaltyReward) | **GET** /v2/loyalty/rewards/{reward_id} | RetrieveLoyaltyReward
*SquareConnect.LoyaltyApi* | [**searchLoyaltyAccounts**](docs/LoyaltyApi.md#searchLoyaltyAccounts) | **POST** /v2/loyalty/accounts/search | SearchLoyaltyAccounts
*SquareConnect.LoyaltyApi* | [**searchLoyaltyEvents**](docs/LoyaltyApi.md#searchLoyaltyEvents) | **POST** /v2/loyalty/events/search | SearchLoyaltyEvents
*SquareConnect.LoyaltyApi* | [**searchLoyaltyRewards**](docs/LoyaltyApi.md#searchLoyaltyRewards) | **POST** /v2/loyalty/rewards/search | SearchLoyaltyRewards
*SquareConnect.MerchantsApi* | [**listMerchants**](docs/MerchantsApi.md#listMerchants) | **GET** /v2/merchants | ListMerchants
*SquareConnect.MerchantsApi* | [**retrieveMerchant**](docs/MerchantsApi.md#retrieveMerchant) | **GET** /v2/merchants/{merchant_id} | RetrieveMerchant
*SquareConnect.MobileAuthorizationApi* | [**createMobileAuthorizationCode**](docs/MobileAuthorizationApi.md#createMobileAuthorizationCode) | **POST** /mobile/authorization-code | CreateMobileAuthorizationCode
*SquareConnect.OAuthApi* | [**obtainToken**](docs/OAuthApi.md#obtainToken) | **POST** /oauth2/token | ObtainToken
*SquareConnect.OAuthApi* | [**renewToken**](docs/OAuthApi.md#renewToken) | **POST** /oauth2/clients/{client_id}/access-token/renew | RenewToken
*SquareConnect.OAuthApi* | [**revokeToken**](docs/OAuthApi.md#revokeToken) | **POST** /oauth2/revoke | RevokeToken
*SquareConnect.OrdersApi* | [**batchRetrieveOrders**](docs/OrdersApi.md#batchRetrieveOrders) | **POST** /v2/locations/{location_id}/orders/batch-retrieve | BatchRetrieveOrders
*SquareConnect.OrdersApi* | [**calculateOrder**](docs/OrdersApi.md#calculateOrder) | **POST** /v2/orders/calculate | CalculateOrder
*SquareConnect.OrdersApi* | [**createOrder**](docs/OrdersApi.md#createOrder) | **POST** /v2/locations/{location_id}/orders | CreateOrder
*SquareConnect.OrdersApi* | [**payOrder**](docs/OrdersApi.md#payOrder) | **POST** /v2/orders/{order_id}/pay | PayOrder
*SquareConnect.OrdersApi* | [**searchOrders**](docs/OrdersApi.md#searchOrders) | **POST** /v2/orders/search | SearchOrders
*SquareConnect.OrdersApi* | [**updateOrder**](docs/OrdersApi.md#updateOrder) | **PUT** /v2/locations/{location_id}/orders/{order_id} | UpdateOrder
*SquareConnect.PaymentsApi* | [**cancelPayment**](docs/PaymentsApi.md#cancelPayment) | **POST** /v2/payments/{payment_id}/cancel | CancelPayment
*SquareConnect.PaymentsApi* | [**cancelPaymentByIdempotencyKey**](docs/PaymentsApi.md#cancelPaymentByIdempotencyKey) | **POST** /v2/payments/cancel | CancelPaymentByIdempotencyKey
*SquareConnect.PaymentsApi* | [**completePayment**](docs/PaymentsApi.md#completePayment) | **POST** /v2/payments/{payment_id}/complete | CompletePayment
*SquareConnect.PaymentsApi* | [**createPayment**](docs/PaymentsApi.md#createPayment) | **POST** /v2/payments | CreatePayment
*SquareConnect.PaymentsApi* | [**getPayment**](docs/PaymentsApi.md#getPayment) | **GET** /v2/payments/{payment_id} | GetPayment
*SquareConnect.PaymentsApi* | [**listPayments**](docs/PaymentsApi.md#listPayments) | **GET** /v2/payments | ListPayments
*SquareConnect.RefundsApi* | [**getPaymentRefund**](docs/RefundsApi.md#getPaymentRefund) | **GET** /v2/refunds/{refund_id} | GetPaymentRefund
*SquareConnect.RefundsApi* | [**listPaymentRefunds**](docs/RefundsApi.md#listPaymentRefunds) | **GET** /v2/refunds | ListPaymentRefunds
*SquareConnect.RefundsApi* | [**refundPayment**](docs/RefundsApi.md#refundPayment) | **POST** /v2/refunds | RefundPayment
*SquareConnect.ReportingApi* | [**listAdditionalRecipientReceivableRefunds**](docs/ReportingApi.md#listAdditionalRecipientReceivableRefunds) | **GET** /v2/locations/{location_id}/additional-recipient-receivable-refunds | ListAdditionalRecipientReceivableRefunds
*SquareConnect.ReportingApi* | [**listAdditionalRecipientReceivables**](docs/ReportingApi.md#listAdditionalRecipientReceivables) | **GET** /v2/locations/{location_id}/additional-recipient-receivables | ListAdditionalRecipientReceivables
*SquareConnect.TeamApi* | [**bulkCreateTeamMembers**](docs/TeamApi.md#bulkCreateTeamMembers) | **POST** /v2/team-members/bulk-create | BulkCreateTeamMembers
*SquareConnect.TeamApi* | [**bulkUpdateTeamMembers**](docs/TeamApi.md#bulkUpdateTeamMembers) | **POST** /v2/team-members/bulk-update | BulkUpdateTeamMembers
*SquareConnect.TeamApi* | [**createTeamMember**](docs/TeamApi.md#createTeamMember) | **POST** /v2/team-members | CreateTeamMember
*SquareConnect.TeamApi* | [**retrieveTeamMember**](docs/TeamApi.md#retrieveTeamMember) | **GET** /v2/team-members/{team_member_id} | RetrieveTeamMember
*SquareConnect.TeamApi* | [**retrieveWageSetting**](docs/TeamApi.md#retrieveWageSetting) | **GET** /v2/team-members/{team_member_id}/wage-setting | RetrieveWageSetting
*SquareConnect.TeamApi* | [**searchTeamMembers**](docs/TeamApi.md#searchTeamMembers) | **POST** /v2/team-members/search | SearchTeamMembers
*SquareConnect.TeamApi* | [**updateTeamMember**](docs/TeamApi.md#updateTeamMember) | **PUT** /v2/team-members/{team_member_id} | UpdateTeamMember
*SquareConnect.TeamApi* | [**updateWageSetting**](docs/TeamApi.md#updateWageSetting) | **PUT** /v2/team-members/{team_member_id}/wage-setting | UpdateWageSetting
*SquareConnect.TerminalApi* | [**cancelTerminalCheckout**](docs/TerminalApi.md#cancelTerminalCheckout) | **POST** /v2/terminals/checkouts/{checkout_id}/cancel | CancelTerminalCheckout
*SquareConnect.TerminalApi* | [**createTerminalCheckout**](docs/TerminalApi.md#createTerminalCheckout) | **POST** /v2/terminals/checkouts | CreateTerminalCheckout
*SquareConnect.TerminalApi* | [**getTerminalCheckout**](docs/TerminalApi.md#getTerminalCheckout) | **GET** /v2/terminals/checkouts/{checkout_id} | GetTerminalCheckout
*SquareConnect.TerminalApi* | [**searchTerminalCheckouts**](docs/TerminalApi.md#searchTerminalCheckouts) | **POST** /v2/terminals/checkouts/search | SearchTerminalCheckouts
*SquareConnect.TransactionsApi* | [**captureTransaction**](docs/TransactionsApi.md#captureTransaction) | **POST** /v2/locations/{location_id}/transactions/{transaction_id}/capture | CaptureTransaction
*SquareConnect.TransactionsApi* | [**charge**](docs/TransactionsApi.md#charge) | **POST** /v2/locations/{location_id}/transactions | Charge
*SquareConnect.TransactionsApi* | [**createRefund**](docs/TransactionsApi.md#createRefund) | **POST** /v2/locations/{location_id}/transactions/{transaction_id}/refund | CreateRefund
*SquareConnect.TransactionsApi* | [**listRefunds**](docs/TransactionsApi.md#listRefunds) | **GET** /v2/locations/{location_id}/refunds | ListRefunds
*SquareConnect.TransactionsApi* | [**listTransactions**](docs/TransactionsApi.md#listTransactions) | **GET** /v2/locations/{location_id}/transactions | ListTransactions
*SquareConnect.TransactionsApi* | [**retrieveTransaction**](docs/TransactionsApi.md#retrieveTransaction) | **GET** /v2/locations/{location_id}/transactions/{transaction_id} | RetrieveTransaction
*SquareConnect.TransactionsApi* | [**voidTransaction**](docs/TransactionsApi.md#voidTransaction) | **POST** /v2/locations/{location_id}/transactions/{transaction_id}/void | VoidTransaction
*SquareConnect.V1EmployeesApi* | [**createEmployee**](docs/V1EmployeesApi.md#createEmployee) | **POST** /v1/me/employees | CreateEmployee
*SquareConnect.V1EmployeesApi* | [**createEmployeeRole**](docs/V1EmployeesApi.md#createEmployeeRole) | **POST** /v1/me/roles | CreateEmployeeRole
*SquareConnect.V1EmployeesApi* | [**createTimecard**](docs/V1EmployeesApi.md#createTimecard) | **POST** /v1/me/timecards | CreateTimecard
*SquareConnect.V1EmployeesApi* | [**deleteTimecard**](docs/V1EmployeesApi.md#deleteTimecard) | **DELETE** /v1/me/timecards/{timecard_id} | DeleteTimecard
*SquareConnect.V1EmployeesApi* | [**listCashDrawerShifts**](docs/V1EmployeesApi.md#listCashDrawerShifts) | **GET** /v1/{location_id}/cash-drawer-shifts | ListCashDrawerShifts
*SquareConnect.V1EmployeesApi* | [**listEmployeeRoles**](docs/V1EmployeesApi.md#listEmployeeRoles) | **GET** /v1/me/roles | ListEmployeeRoles
*SquareConnect.V1EmployeesApi* | [**listEmployees**](docs/V1EmployeesApi.md#listEmployees) | **GET** /v1/me/employees | ListEmployees
*SquareConnect.V1EmployeesApi* | [**listTimecardEvents**](docs/V1EmployeesApi.md#listTimecardEvents) | **GET** /v1/me/timecards/{timecard_id}/events | ListTimecardEvents
*SquareConnect.V1EmployeesApi* | [**listTimecards**](docs/V1EmployeesApi.md#listTimecards) | **GET** /v1/me/timecards | ListTimecards
*SquareConnect.V1EmployeesApi* | [**retrieveCashDrawerShift**](docs/V1EmployeesApi.md#retrieveCashDrawerShift) | **GET** /v1/{location_id}/cash-drawer-shifts/{shift_id} | RetrieveCashDrawerShift
*SquareConnect.V1EmployeesApi* | [**retrieveEmployee**](docs/V1EmployeesApi.md#retrieveEmployee) | **GET** /v1/me/employees/{employee_id} | RetrieveEmployee
*SquareConnect.V1EmployeesApi* | [**retrieveEmployeeRole**](docs/V1EmployeesApi.md#retrieveEmployeeRole) | **GET** /v1/me/roles/{role_id} | RetrieveEmployeeRole
*SquareConnect.V1EmployeesApi* | [**retrieveTimecard**](docs/V1EmployeesApi.md#retrieveTimecard) | **GET** /v1/me/timecards/{timecard_id} | RetrieveTimecard
*SquareConnect.V1EmployeesApi* | [**updateEmployee**](docs/V1EmployeesApi.md#updateEmployee) | **PUT** /v1/me/employees/{employee_id} | UpdateEmployee
*SquareConnect.V1EmployeesApi* | [**updateEmployeeRole**](docs/V1EmployeesApi.md#updateEmployeeRole) | **PUT** /v1/me/roles/{role_id} | UpdateEmployeeRole
*SquareConnect.V1EmployeesApi* | [**updateTimecard**](docs/V1EmployeesApi.md#updateTimecard) | **PUT** /v1/me/timecards/{timecard_id} | UpdateTimecard
*SquareConnect.V1ItemsApi* | [**adjustInventory**](docs/V1ItemsApi.md#adjustInventory) | **POST** /v1/{location_id}/inventory/{variation_id} | AdjustInventory
*SquareConnect.V1ItemsApi* | [**applyFee**](docs/V1ItemsApi.md#applyFee) | **PUT** /v1/{location_id}/items/{item_id}/fees/{fee_id} | ApplyFee
*SquareConnect.V1ItemsApi* | [**applyModifierList**](docs/V1ItemsApi.md#applyModifierList) | **PUT** /v1/{location_id}/items/{item_id}/modifier-lists/{modifier_list_id} | ApplyModifierList
*SquareConnect.V1ItemsApi* | [**createCategory**](docs/V1ItemsApi.md#createCategory) | **POST** /v1/{location_id}/categories | CreateCategory
*SquareConnect.V1ItemsApi* | [**createDiscount**](docs/V1ItemsApi.md#createDiscount) | **POST** /v1/{location_id}/discounts | CreateDiscount
*SquareConnect.V1ItemsApi* | [**createFee**](docs/V1ItemsApi.md#createFee) | **POST** /v1/{location_id}/fees | CreateFee
*SquareConnect.V1ItemsApi* | [**createItem**](docs/V1ItemsApi.md#createItem) | **POST** /v1/{location_id}/items | CreateItem
*SquareConnect.V1ItemsApi* | [**createModifierList**](docs/V1ItemsApi.md#createModifierList) | **POST** /v1/{location_id}/modifier-lists | CreateModifierList
*SquareConnect.V1ItemsApi* | [**createModifierOption**](docs/V1ItemsApi.md#createModifierOption) | **POST** /v1/{location_id}/modifier-lists/{modifier_list_id}/modifier-options | CreateModifierOption
*SquareConnect.V1ItemsApi* | [**createPage**](docs/V1ItemsApi.md#createPage) | **POST** /v1/{location_id}/pages | CreatePage
*SquareConnect.V1ItemsApi* | [**createVariation**](docs/V1ItemsApi.md#createVariation) | **POST** /v1/{location_id}/items/{item_id}/variations | CreateVariation
*SquareConnect.V1ItemsApi* | [**deleteCategory**](docs/V1ItemsApi.md#deleteCategory) | **DELETE** /v1/{location_id}/categories/{category_id} | DeleteCategory
*SquareConnect.V1ItemsApi* | [**deleteDiscount**](docs/V1ItemsApi.md#deleteDiscount) | **DELETE** /v1/{location_id}/discounts/{discount_id} | DeleteDiscount
*SquareConnect.V1ItemsApi* | [**deleteFee**](docs/V1ItemsApi.md#deleteFee) | **DELETE** /v1/{location_id}/fees/{fee_id} | DeleteFee
*SquareConnect.V1ItemsApi* | [**deleteItem**](docs/V1ItemsApi.md#deleteItem) | **DELETE** /v1/{location_id}/items/{item_id} | DeleteItem
*SquareConnect.V1ItemsApi* | [**deleteModifierList**](docs/V1ItemsApi.md#deleteModifierList) | **DELETE** /v1/{location_id}/modifier-lists/{modifier_list_id} | DeleteModifierList
*SquareConnect.V1ItemsApi* | [**deleteModifierOption**](docs/V1ItemsApi.md#deleteModifierOption) | **DELETE** /v1/{location_id}/modifier-lists/{modifier_list_id}/modifier-options/{modifier_option_id} | DeleteModifierOption
*SquareConnect.V1ItemsApi* | [**deletePage**](docs/V1ItemsApi.md#deletePage) | **DELETE** /v1/{location_id}/pages/{page_id} | DeletePage
*SquareConnect.V1ItemsApi* | [**deletePageCell**](docs/V1ItemsApi.md#deletePageCell) | **DELETE** /v1/{location_id}/pages/{page_id}/cells | DeletePageCell
*SquareConnect.V1ItemsApi* | [**deleteVariation**](docs/V1ItemsApi.md#deleteVariation) | **DELETE** /v1/{location_id}/items/{item_id}/variations/{variation_id} | DeleteVariation
*SquareConnect.V1ItemsApi* | [**listCategories**](docs/V1ItemsApi.md#listCategories) | **GET** /v1/{location_id}/categories | ListCategories
*SquareConnect.V1ItemsApi* | [**listDiscounts**](docs/V1ItemsApi.md#listDiscounts) | **GET** /v1/{location_id}/discounts | ListDiscounts
*SquareConnect.V1ItemsApi* | [**listFees**](docs/V1ItemsApi.md#listFees) | **GET** /v1/{location_id}/fees | ListFees
*SquareConnect.V1ItemsApi* | [**listInventory**](docs/V1ItemsApi.md#listInventory) | **GET** /v1/{location_id}/inventory | ListInventory
*SquareConnect.V1ItemsApi* | [**listItems**](docs/V1ItemsApi.md#listItems) | **GET** /v1/{location_id}/items | ListItems
*SquareConnect.V1ItemsApi* | [**listModifierLists**](docs/V1ItemsApi.md#listModifierLists) | **GET** /v1/{location_id}/modifier-lists | ListModifierLists
*SquareConnect.V1ItemsApi* | [**listPages**](docs/V1ItemsApi.md#listPages) | **GET** /v1/{location_id}/pages | ListPages
*SquareConnect.V1ItemsApi* | [**removeFee**](docs/V1ItemsApi.md#removeFee) | **DELETE** /v1/{location_id}/items/{item_id}/fees/{fee_id} | RemoveFee
*SquareConnect.V1ItemsApi* | [**removeModifierList**](docs/V1ItemsApi.md#removeModifierList) | **DELETE** /v1/{location_id}/items/{item_id}/modifier-lists/{modifier_list_id} | RemoveModifierList
*SquareConnect.V1ItemsApi* | [**retrieveItem**](docs/V1ItemsApi.md#retrieveItem) | **GET** /v1/{location_id}/items/{item_id} | RetrieveItem
*SquareConnect.V1ItemsApi* | [**retrieveModifierList**](docs/V1ItemsApi.md#retrieveModifierList) | **GET** /v1/{location_id}/modifier-lists/{modifier_list_id} | RetrieveModifierList
*SquareConnect.V1ItemsApi* | [**updateCategory**](docs/V1ItemsApi.md#updateCategory) | **PUT** /v1/{location_id}/categories/{category_id} | UpdateCategory
*SquareConnect.V1ItemsApi* | [**updateDiscount**](docs/V1ItemsApi.md#updateDiscount) | **PUT** /v1/{location_id}/discounts/{discount_id} | UpdateDiscount
*SquareConnect.V1ItemsApi* | [**updateFee**](docs/V1ItemsApi.md#updateFee) | **PUT** /v1/{location_id}/fees/{fee_id} | UpdateFee
*SquareConnect.V1ItemsApi* | [**updateItem**](docs/V1ItemsApi.md#updateItem) | **PUT** /v1/{location_id}/items/{item_id} | UpdateItem
*SquareConnect.V1ItemsApi* | [**updateModifierList**](docs/V1ItemsApi.md#updateModifierList) | **PUT** /v1/{location_id}/modifier-lists/{modifier_list_id} | UpdateModifierList
*SquareConnect.V1ItemsApi* | [**updateModifierOption**](docs/V1ItemsApi.md#updateModifierOption) | **PUT** /v1/{location_id}/modifier-lists/{modifier_list_id}/modifier-options/{modifier_option_id} | UpdateModifierOption
*SquareConnect.V1ItemsApi* | [**updatePage**](docs/V1ItemsApi.md#updatePage) | **PUT** /v1/{location_id}/pages/{page_id} | UpdatePage
*SquareConnect.V1ItemsApi* | [**updatePageCell**](docs/V1ItemsApi.md#updatePageCell) | **PUT** /v1/{location_id}/pages/{page_id}/cells | UpdatePageCell
*SquareConnect.V1ItemsApi* | [**updateVariation**](docs/V1ItemsApi.md#updateVariation) | **PUT** /v1/{location_id}/items/{item_id}/variations/{variation_id} | UpdateVariation
*SquareConnect.V1LocationsApi* | [**listLocations**](docs/V1LocationsApi.md#listLocations) | **GET** /v1/me/locations | ListLocations
*SquareConnect.V1LocationsApi* | [**retrieveBusiness**](docs/V1LocationsApi.md#retrieveBusiness) | **GET** /v1/me | RetrieveBusiness
*SquareConnect.V1TransactionsApi* | [**createRefund**](docs/V1TransactionsApi.md#createRefund) | **POST** /v1/{location_id}/refunds | CreateRefund
*SquareConnect.V1TransactionsApi* | [**listBankAccounts**](docs/V1TransactionsApi.md#listBankAccounts) | **GET** /v1/{location_id}/bank-accounts | ListBankAccounts
*SquareConnect.V1TransactionsApi* | [**listOrders**](docs/V1TransactionsApi.md#listOrders) | **GET** /v1/{location_id}/orders | ListOrders
*SquareConnect.V1TransactionsApi* | [**listPayments**](docs/V1TransactionsApi.md#listPayments) | **GET** /v1/{location_id}/payments | ListPayments
*SquareConnect.V1TransactionsApi* | [**listRefunds**](docs/V1TransactionsApi.md#listRefunds) | **GET** /v1/{location_id}/refunds | ListRefunds
*SquareConnect.V1TransactionsApi* | [**listSettlements**](docs/V1TransactionsApi.md#listSettlements) | **GET** /v1/{location_id}/settlements | ListSettlements
*SquareConnect.V1TransactionsApi* | [**retrieveBankAccount**](docs/V1TransactionsApi.md#retrieveBankAccount) | **GET** /v1/{location_id}/bank-accounts/{bank_account_id} | RetrieveBankAccount
*SquareConnect.V1TransactionsApi* | [**retrieveOrder**](docs/V1TransactionsApi.md#retrieveOrder) | **GET** /v1/{location_id}/orders/{order_id} | RetrieveOrder
*SquareConnect.V1TransactionsApi* | [**retrievePayment**](docs/V1TransactionsApi.md#retrievePayment) | **GET** /v1/{location_id}/payments/{payment_id} | RetrievePayment
*SquareConnect.V1TransactionsApi* | [**retrieveSettlement**](docs/V1TransactionsApi.md#retrieveSettlement) | **GET** /v1/{location_id}/settlements/{settlement_id} | RetrieveSettlement
*SquareConnect.V1TransactionsApi* | [**updateOrder**](docs/V1TransactionsApi.md#updateOrder) | **PUT** /v1/{location_id}/orders/{order_id} | UpdateOrder


## Documentation for Models

 - [SquareConnect.AcceptDisputeRequest](docs/AcceptDisputeRequest.md)
 - [SquareConnect.AcceptDisputeResponse](docs/AcceptDisputeResponse.md)
 - [SquareConnect.AccumulateLoyaltyPointsRequest](docs/AccumulateLoyaltyPointsRequest.md)
 - [SquareConnect.AccumulateLoyaltyPointsResponse](docs/AccumulateLoyaltyPointsResponse.md)
 - [SquareConnect.AddGroupToCustomerRequest](docs/AddGroupToCustomerRequest.md)
 - [SquareConnect.AddGroupToCustomerResponse](docs/AddGroupToCustomerResponse.md)
 - [SquareConnect.AdditionalRecipient](docs/AdditionalRecipient.md)
 - [SquareConnect.AdditionalRecipientReceivable](docs/AdditionalRecipientReceivable.md)
 - [SquareConnect.AdditionalRecipientReceivableRefund](docs/AdditionalRecipientReceivableRefund.md)
 - [SquareConnect.Address](docs/Address.md)
 - [SquareConnect.AdjustLoyaltyPointsRequest](docs/AdjustLoyaltyPointsRequest.md)
 - [SquareConnect.AdjustLoyaltyPointsResponse](docs/AdjustLoyaltyPointsResponse.md)
 - [SquareConnect.BalancePaymentDetails](docs/BalancePaymentDetails.md)
 - [SquareConnect.BankAccount](docs/BankAccount.md)
 - [SquareConnect.BankAccountStatus](docs/BankAccountStatus.md)
 - [SquareConnect.BankAccountType](docs/BankAccountType.md)
 - [SquareConnect.BatchChangeInventoryRequest](docs/BatchChangeInventoryRequest.md)
 - [SquareConnect.BatchChangeInventoryResponse](docs/BatchChangeInventoryResponse.md)
 - [SquareConnect.BatchDeleteCatalogObjectsRequest](docs/BatchDeleteCatalogObjectsRequest.md)
 - [SquareConnect.BatchDeleteCatalogObjectsResponse](docs/BatchDeleteCatalogObjectsResponse.md)
 - [SquareConnect.BatchRetrieveCatalogObjectsRequest](docs/BatchRetrieveCatalogObjectsRequest.md)
 - [SquareConnect.BatchRetrieveCatalogObjectsResponse](docs/BatchRetrieveCatalogObjectsResponse.md)
 - [SquareConnect.BatchRetrieveInventoryChangesRequest](docs/BatchRetrieveInventoryChangesRequest.md)
 - [SquareConnect.BatchRetrieveInventoryChangesResponse](docs/BatchRetrieveInventoryChangesResponse.md)
 - [SquareConnect.BatchRetrieveInventoryCountsRequest](docs/BatchRetrieveInventoryCountsRequest.md)
 - [SquareConnect.BatchRetrieveInventoryCountsResponse](docs/BatchRetrieveInventoryCountsResponse.md)
 - [SquareConnect.BatchRetrieveOrdersRequest](docs/BatchRetrieveOrdersRequest.md)
 - [SquareConnect.BatchRetrieveOrdersResponse](docs/BatchRetrieveOrdersResponse.md)
 - [SquareConnect.BatchUpsertCatalogObjectsRequest](docs/BatchUpsertCatalogObjectsRequest.md)
 - [SquareConnect.BatchUpsertCatalogObjectsResponse](docs/BatchUpsertCatalogObjectsResponse.md)
 - [SquareConnect.BreakType](docs/BreakType.md)
 - [SquareConnect.BulkCreateTeamMembersRequest](docs/BulkCreateTeamMembersRequest.md)
 - [SquareConnect.BulkCreateTeamMembersResponse](docs/BulkCreateTeamMembersResponse.md)
 - [SquareConnect.BulkUpdateTeamMembersRequest](docs/BulkUpdateTeamMembersRequest.md)
 - [SquareConnect.BulkUpdateTeamMembersResponse](docs/BulkUpdateTeamMembersResponse.md)
 - [SquareConnect.BusinessHours](docs/BusinessHours.md)
 - [SquareConnect.BusinessHoursPeriod](docs/BusinessHoursPeriod.md)
 - [SquareConnect.CalculateLoyaltyPointsRequest](docs/CalculateLoyaltyPointsRequest.md)
 - [SquareConnect.CalculateLoyaltyPointsResponse](docs/CalculateLoyaltyPointsResponse.md)
 - [SquareConnect.CalculateOrderRequest](docs/CalculateOrderRequest.md)
 - [SquareConnect.CalculateOrderResponse](docs/CalculateOrderResponse.md)
 - [SquareConnect.CancelPaymentByIdempotencyKeyRequest](docs/CancelPaymentByIdempotencyKeyRequest.md)
 - [SquareConnect.CancelPaymentByIdempotencyKeyResponse](docs/CancelPaymentByIdempotencyKeyResponse.md)
 - [SquareConnect.CancelPaymentRequest](docs/CancelPaymentRequest.md)
 - [SquareConnect.CancelPaymentResponse](docs/CancelPaymentResponse.md)
 - [SquareConnect.CancelTerminalCheckoutRequest](docs/CancelTerminalCheckoutRequest.md)
 - [SquareConnect.CancelTerminalCheckoutResponse](docs/CancelTerminalCheckoutResponse.md)
 - [SquareConnect.CaptureTransactionRequest](docs/CaptureTransactionRequest.md)
 - [SquareConnect.CaptureTransactionResponse](docs/CaptureTransactionResponse.md)
 - [SquareConnect.Card](docs/Card.md)
 - [SquareConnect.CardBrand](docs/CardBrand.md)
 - [SquareConnect.CardPaymentDetails](docs/CardPaymentDetails.md)
 - [SquareConnect.CardPrepaidType](docs/CardPrepaidType.md)
 - [SquareConnect.CardType](docs/CardType.md)
 - [SquareConnect.CashDrawerDevice](docs/CashDrawerDevice.md)
 - [SquareConnect.CashDrawerEventType](docs/CashDrawerEventType.md)
 - [SquareConnect.CashDrawerShift](docs/CashDrawerShift.md)
 - [SquareConnect.CashDrawerShiftEvent](docs/CashDrawerShiftEvent.md)
 - [SquareConnect.CashDrawerShiftState](docs/CashDrawerShiftState.md)
 - [SquareConnect.CashDrawerShiftSummary](docs/CashDrawerShiftSummary.md)
 - [SquareConnect.CatalogCategory](docs/CatalogCategory.md)
 - [SquareConnect.CatalogCustomAttributeDefinition](docs/CatalogCustomAttributeDefinition.md)
 - [SquareConnect.CatalogCustomAttributeDefinitionAppVisibility](docs/CatalogCustomAttributeDefinitionAppVisibility.md)
 - [SquareConnect.CatalogCustomAttributeDefinitionNumberConfig](docs/CatalogCustomAttributeDefinitionNumberConfig.md)
 - [SquareConnect.CatalogCustomAttributeDefinitionSelectionConfig](docs/CatalogCustomAttributeDefinitionSelectionConfig.md)
 - [SquareConnect.CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection](docs/CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection.md)
 - [SquareConnect.CatalogCustomAttributeDefinitionSellerVisibility](docs/CatalogCustomAttributeDefinitionSellerVisibility.md)
 - [SquareConnect.CatalogCustomAttributeDefinitionStringConfig](docs/CatalogCustomAttributeDefinitionStringConfig.md)
 - [SquareConnect.CatalogCustomAttributeDefinitionType](docs/CatalogCustomAttributeDefinitionType.md)
 - [SquareConnect.CatalogCustomAttributeValue](docs/CatalogCustomAttributeValue.md)
 - [SquareConnect.CatalogDiscount](docs/CatalogDiscount.md)
 - [SquareConnect.CatalogDiscountModifyTaxBasis](docs/CatalogDiscountModifyTaxBasis.md)
 - [SquareConnect.CatalogDiscountType](docs/CatalogDiscountType.md)
 - [SquareConnect.CatalogIdMapping](docs/CatalogIdMapping.md)
 - [SquareConnect.CatalogImage](docs/CatalogImage.md)
 - [SquareConnect.CatalogInfoRequest](docs/CatalogInfoRequest.md)
 - [SquareConnect.CatalogInfoResponse](docs/CatalogInfoResponse.md)
 - [SquareConnect.CatalogInfoResponseLimits](docs/CatalogInfoResponseLimits.md)
 - [SquareConnect.CatalogItem](docs/CatalogItem.md)
 - [SquareConnect.CatalogItemModifierListInfo](docs/CatalogItemModifierListInfo.md)
 - [SquareConnect.CatalogItemOption](docs/CatalogItemOption.md)
 - [SquareConnect.CatalogItemOptionForItem](docs/CatalogItemOptionForItem.md)
 - [SquareConnect.CatalogItemOptionValue](docs/CatalogItemOptionValue.md)
 - [SquareConnect.CatalogItemOptionValueForItemVariation](docs/CatalogItemOptionValueForItemVariation.md)
 - [SquareConnect.CatalogItemProductType](docs/CatalogItemProductType.md)
 - [SquareConnect.CatalogItemVariation](docs/CatalogItemVariation.md)
 - [SquareConnect.CatalogMeasurementUnit](docs/CatalogMeasurementUnit.md)
 - [SquareConnect.CatalogModifier](docs/CatalogModifier.md)
 - [SquareConnect.CatalogModifierList](docs/CatalogModifierList.md)
 - [SquareConnect.CatalogModifierListSelectionType](docs/CatalogModifierListSelectionType.md)
 - [SquareConnect.CatalogModifierOverride](docs/CatalogModifierOverride.md)
 - [SquareConnect.CatalogObject](docs/CatalogObject.md)
 - [SquareConnect.CatalogObjectBatch](docs/CatalogObjectBatch.md)
 - [SquareConnect.CatalogObjectType](docs/CatalogObjectType.md)
 - [SquareConnect.CatalogPricingRule](docs/CatalogPricingRule.md)
 - [SquareConnect.CatalogPricingType](docs/CatalogPricingType.md)
 - [SquareConnect.CatalogProductSet](docs/CatalogProductSet.md)
 - [SquareConnect.CatalogQuery](docs/CatalogQuery.md)
 - [SquareConnect.CatalogQueryExact](docs/CatalogQueryExact.md)
 - [SquareConnect.CatalogQueryItemVariationsForItemOptionValues](docs/CatalogQueryItemVariationsForItemOptionValues.md)
 - [SquareConnect.CatalogQueryItemsForItemOptions](docs/CatalogQueryItemsForItemOptions.md)
 - [SquareConnect.CatalogQueryItemsForModifierList](docs/CatalogQueryItemsForModifierList.md)
 - [SquareConnect.CatalogQueryItemsForTax](docs/CatalogQueryItemsForTax.md)
 - [SquareConnect.CatalogQueryPrefix](docs/CatalogQueryPrefix.md)
 - [SquareConnect.CatalogQueryRange](docs/CatalogQueryRange.md)
 - [SquareConnect.CatalogQuerySortedAttribute](docs/CatalogQuerySortedAttribute.md)
 - [SquareConnect.CatalogQueryText](docs/CatalogQueryText.md)
 - [SquareConnect.CatalogQuickAmount](docs/CatalogQuickAmount.md)
 - [SquareConnect.CatalogQuickAmountType](docs/CatalogQuickAmountType.md)
 - [SquareConnect.CatalogQuickAmountsSettings](docs/CatalogQuickAmountsSettings.md)
 - [SquareConnect.CatalogQuickAmountsSettingsOption](docs/CatalogQuickAmountsSettingsOption.md)
 - [SquareConnect.CatalogTax](docs/CatalogTax.md)
 - [SquareConnect.CatalogTimePeriod](docs/CatalogTimePeriod.md)
 - [SquareConnect.CatalogV1Id](docs/CatalogV1Id.md)
 - [SquareConnect.ChargeRequest](docs/ChargeRequest.md)
 - [SquareConnect.ChargeRequestAdditionalRecipient](docs/ChargeRequestAdditionalRecipient.md)
 - [SquareConnect.ChargeResponse](docs/ChargeResponse.md)
 - [SquareConnect.Checkout](docs/Checkout.md)
 - [SquareConnect.CompletePaymentRequest](docs/CompletePaymentRequest.md)
 - [SquareConnect.CompletePaymentResponse](docs/CompletePaymentResponse.md)
 - [SquareConnect.Coordinates](docs/Coordinates.md)
 - [SquareConnect.Country](docs/Country.md)
 - [SquareConnect.CreateBreakTypeRequest](docs/CreateBreakTypeRequest.md)
 - [SquareConnect.CreateBreakTypeResponse](docs/CreateBreakTypeResponse.md)
 - [SquareConnect.CreateCatalogImageRequest](docs/CreateCatalogImageRequest.md)
 - [SquareConnect.CreateCatalogImageResponse](docs/CreateCatalogImageResponse.md)
 - [SquareConnect.CreateCheckoutRequest](docs/CreateCheckoutRequest.md)
 - [SquareConnect.CreateCheckoutResponse](docs/CreateCheckoutResponse.md)
 - [SquareConnect.CreateCustomerCardRequest](docs/CreateCustomerCardRequest.md)
 - [SquareConnect.CreateCustomerCardResponse](docs/CreateCustomerCardResponse.md)
 - [SquareConnect.CreateCustomerGroupRequest](docs/CreateCustomerGroupRequest.md)
 - [SquareConnect.CreateCustomerGroupResponse](docs/CreateCustomerGroupResponse.md)
 - [SquareConnect.CreateCustomerRequest](docs/CreateCustomerRequest.md)
 - [SquareConnect.CreateCustomerResponse](docs/CreateCustomerResponse.md)
 - [SquareConnect.CreateDeviceCodeRequest](docs/CreateDeviceCodeRequest.md)
 - [SquareConnect.CreateDeviceCodeResponse](docs/CreateDeviceCodeResponse.md)
 - [SquareConnect.CreateDisputeEvidenceFileRequest](docs/CreateDisputeEvidenceFileRequest.md)
 - [SquareConnect.CreateDisputeEvidenceFileResponse](docs/CreateDisputeEvidenceFileResponse.md)
 - [SquareConnect.CreateDisputeEvidenceTextRequest](docs/CreateDisputeEvidenceTextRequest.md)
 - [SquareConnect.CreateDisputeEvidenceTextResponse](docs/CreateDisputeEvidenceTextResponse.md)
 - [SquareConnect.CreateLocationRequest](docs/CreateLocationRequest.md)
 - [SquareConnect.CreateLocationResponse](docs/CreateLocationResponse.md)
 - [SquareConnect.CreateLoyaltyAccountRequest](docs/CreateLoyaltyAccountRequest.md)
 - [SquareConnect.CreateLoyaltyAccountResponse](docs/CreateLoyaltyAccountResponse.md)
 - [SquareConnect.CreateLoyaltyRewardRequest](docs/CreateLoyaltyRewardRequest.md)
 - [SquareConnect.CreateLoyaltyRewardResponse](docs/CreateLoyaltyRewardResponse.md)
 - [SquareConnect.CreateMobileAuthorizationCodeRequest](docs/CreateMobileAuthorizationCodeRequest.md)
 - [SquareConnect.CreateMobileAuthorizationCodeResponse](docs/CreateMobileAuthorizationCodeResponse.md)
 - [SquareConnect.CreateOrderRequest](docs/CreateOrderRequest.md)
 - [SquareConnect.CreateOrderResponse](docs/CreateOrderResponse.md)
 - [SquareConnect.CreatePaymentRequest](docs/CreatePaymentRequest.md)
 - [SquareConnect.CreatePaymentResponse](docs/CreatePaymentResponse.md)
 - [SquareConnect.CreateRefundRequest](docs/CreateRefundRequest.md)
 - [SquareConnect.CreateRefundResponse](docs/CreateRefundResponse.md)
 - [SquareConnect.CreateShiftRequest](docs/CreateShiftRequest.md)
 - [SquareConnect.CreateShiftResponse](docs/CreateShiftResponse.md)
 - [SquareConnect.CreateTeamMemberRequest](docs/CreateTeamMemberRequest.md)
 - [SquareConnect.CreateTeamMemberResponse](docs/CreateTeamMemberResponse.md)
 - [SquareConnect.CreateTerminalCheckoutRequest](docs/CreateTerminalCheckoutRequest.md)
 - [SquareConnect.CreateTerminalCheckoutResponse](docs/CreateTerminalCheckoutResponse.md)
 - [SquareConnect.Currency](docs/Currency.md)
 - [SquareConnect.Customer](docs/Customer.md)
 - [SquareConnect.CustomerCreationSource](docs/CustomerCreationSource.md)
 - [SquareConnect.CustomerCreationSourceFilter](docs/CustomerCreationSourceFilter.md)
 - [SquareConnect.CustomerFilter](docs/CustomerFilter.md)
 - [SquareConnect.CustomerGroup](docs/CustomerGroup.md)
 - [SquareConnect.CustomerGroupInfo](docs/CustomerGroupInfo.md)
 - [SquareConnect.CustomerInclusionExclusion](docs/CustomerInclusionExclusion.md)
 - [SquareConnect.CustomerPreferences](docs/CustomerPreferences.md)
 - [SquareConnect.CustomerQuery](docs/CustomerQuery.md)
 - [SquareConnect.CustomerSegment](docs/CustomerSegment.md)
 - [SquareConnect.CustomerSort](docs/CustomerSort.md)
 - [SquareConnect.CustomerSortField](docs/CustomerSortField.md)
 - [SquareConnect.CustomerTextFilter](docs/CustomerTextFilter.md)
 - [SquareConnect.DateRange](docs/DateRange.md)
 - [SquareConnect.DayOfWeek](docs/DayOfWeek.md)
 - [SquareConnect.DeleteBreakTypeRequest](docs/DeleteBreakTypeRequest.md)
 - [SquareConnect.DeleteBreakTypeResponse](docs/DeleteBreakTypeResponse.md)
 - [SquareConnect.DeleteCatalogObjectRequest](docs/DeleteCatalogObjectRequest.md)
 - [SquareConnect.DeleteCatalogObjectResponse](docs/DeleteCatalogObjectResponse.md)
 - [SquareConnect.DeleteCustomerCardRequest](docs/DeleteCustomerCardRequest.md)
 - [SquareConnect.DeleteCustomerCardResponse](docs/DeleteCustomerCardResponse.md)
 - [SquareConnect.DeleteCustomerGroupRequest](docs/DeleteCustomerGroupRequest.md)
 - [SquareConnect.DeleteCustomerGroupResponse](docs/DeleteCustomerGroupResponse.md)
 - [SquareConnect.DeleteCustomerRequest](docs/DeleteCustomerRequest.md)
 - [SquareConnect.DeleteCustomerResponse](docs/DeleteCustomerResponse.md)
 - [SquareConnect.DeleteLoyaltyRewardRequest](docs/DeleteLoyaltyRewardRequest.md)
 - [SquareConnect.DeleteLoyaltyRewardResponse](docs/DeleteLoyaltyRewardResponse.md)
 - [SquareConnect.DeleteShiftRequest](docs/DeleteShiftRequest.md)
 - [SquareConnect.DeleteShiftResponse](docs/DeleteShiftResponse.md)
 - [SquareConnect.Device](docs/Device.md)
 - [SquareConnect.DeviceCheckoutOptions](docs/DeviceCheckoutOptions.md)
 - [SquareConnect.DeviceCode](docs/DeviceCode.md)
 - [SquareConnect.DeviceCodeStatus](docs/DeviceCodeStatus.md)
 - [SquareConnect.DeviceDetails](docs/DeviceDetails.md)
 - [SquareConnect.Dispute](docs/Dispute.md)
 - [SquareConnect.DisputeEvidence](docs/DisputeEvidence.md)
 - [SquareConnect.DisputeEvidenceFile](docs/DisputeEvidenceFile.md)
 - [SquareConnect.DisputeEvidenceType](docs/DisputeEvidenceType.md)
 - [SquareConnect.DisputeReason](docs/DisputeReason.md)
 - [SquareConnect.DisputeState](docs/DisputeState.md)
 - [SquareConnect.DisputedPayment](docs/DisputedPayment.md)
 - [SquareConnect.EcomVisibility](docs/EcomVisibility.md)
 - [SquareConnect.Employee](docs/Employee.md)
 - [SquareConnect.EmployeeStatus](docs/EmployeeStatus.md)
 - [SquareConnect.EmployeeWage](docs/EmployeeWage.md)
 - [SquareConnect.Error](docs/Error.md)
 - [SquareConnect.ErrorCategory](docs/ErrorCategory.md)
 - [SquareConnect.ErrorCode](docs/ErrorCode.md)
 - [SquareConnect.ExcludeStrategy](docs/ExcludeStrategy.md)
 - [SquareConnect.FilterValue](docs/FilterValue.md)
 - [SquareConnect.GetBankAccountByV1IdRequest](docs/GetBankAccountByV1IdRequest.md)
 - [SquareConnect.GetBankAccountByV1IdResponse](docs/GetBankAccountByV1IdResponse.md)
 - [SquareConnect.GetBankAccountRequest](docs/GetBankAccountRequest.md)
 - [SquareConnect.GetBankAccountResponse](docs/GetBankAccountResponse.md)
 - [SquareConnect.GetBreakTypeRequest](docs/GetBreakTypeRequest.md)
 - [SquareConnect.GetBreakTypeResponse](docs/GetBreakTypeResponse.md)
 - [SquareConnect.GetDeviceCodeRequest](docs/GetDeviceCodeRequest.md)
 - [SquareConnect.GetDeviceCodeResponse](docs/GetDeviceCodeResponse.md)
 - [SquareConnect.GetEmployeeWageRequest](docs/GetEmployeeWageRequest.md)
 - [SquareConnect.GetEmployeeWageResponse](docs/GetEmployeeWageResponse.md)
 - [SquareConnect.GetPaymentRefundRequest](docs/GetPaymentRefundRequest.md)
 - [SquareConnect.GetPaymentRefundResponse](docs/GetPaymentRefundResponse.md)
 - [SquareConnect.GetPaymentRequest](docs/GetPaymentRequest.md)
 - [SquareConnect.GetPaymentResponse](docs/GetPaymentResponse.md)
 - [SquareConnect.GetShiftRequest](docs/GetShiftRequest.md)
 - [SquareConnect.GetShiftResponse](docs/GetShiftResponse.md)
 - [SquareConnect.GetTerminalCheckoutRequest](docs/GetTerminalCheckoutRequest.md)
 - [SquareConnect.GetTerminalCheckoutResponse](docs/GetTerminalCheckoutResponse.md)
 - [SquareConnect.InventoryAdjustment](docs/InventoryAdjustment.md)
 - [SquareConnect.InventoryAlertType](docs/InventoryAlertType.md)
 - [SquareConnect.InventoryChange](docs/InventoryChange.md)
 - [SquareConnect.InventoryChangeType](docs/InventoryChangeType.md)
 - [SquareConnect.InventoryCount](docs/InventoryCount.md)
 - [SquareConnect.InventoryPhysicalCount](docs/InventoryPhysicalCount.md)
 - [SquareConnect.InventoryState](docs/InventoryState.md)
 - [SquareConnect.InventoryTransfer](docs/InventoryTransfer.md)
 - [SquareConnect.ItemVariationLocationOverrides](docs/ItemVariationLocationOverrides.md)
 - [SquareConnect.JobAssignment](docs/JobAssignment.md)
 - [SquareConnect.JobAssignmentPayType](docs/JobAssignmentPayType.md)
 - [SquareConnect.ListAdditionalRecipientReceivableRefundsRequest](docs/ListAdditionalRecipientReceivableRefundsRequest.md)
 - [SquareConnect.ListAdditionalRecipientReceivableRefundsResponse](docs/ListAdditionalRecipientReceivableRefundsResponse.md)
 - [SquareConnect.ListAdditionalRecipientReceivablesRequest](docs/ListAdditionalRecipientReceivablesRequest.md)
 - [SquareConnect.ListAdditionalRecipientReceivablesResponse](docs/ListAdditionalRecipientReceivablesResponse.md)
 - [SquareConnect.ListBankAccountsRequest](docs/ListBankAccountsRequest.md)
 - [SquareConnect.ListBankAccountsResponse](docs/ListBankAccountsResponse.md)
 - [SquareConnect.ListBreakTypesRequest](docs/ListBreakTypesRequest.md)
 - [SquareConnect.ListBreakTypesResponse](docs/ListBreakTypesResponse.md)
 - [SquareConnect.ListCashDrawerShiftEventsRequest](docs/ListCashDrawerShiftEventsRequest.md)
 - [SquareConnect.ListCashDrawerShiftEventsResponse](docs/ListCashDrawerShiftEventsResponse.md)
 - [SquareConnect.ListCashDrawerShiftsRequest](docs/ListCashDrawerShiftsRequest.md)
 - [SquareConnect.ListCashDrawerShiftsResponse](docs/ListCashDrawerShiftsResponse.md)
 - [SquareConnect.ListCatalogRequest](docs/ListCatalogRequest.md)
 - [SquareConnect.ListCatalogResponse](docs/ListCatalogResponse.md)
 - [SquareConnect.ListCustomerGroupsRequest](docs/ListCustomerGroupsRequest.md)
 - [SquareConnect.ListCustomerGroupsResponse](docs/ListCustomerGroupsResponse.md)
 - [SquareConnect.ListCustomerSegmentsRequest](docs/ListCustomerSegmentsRequest.md)
 - [SquareConnect.ListCustomerSegmentsResponse](docs/ListCustomerSegmentsResponse.md)
 - [SquareConnect.ListCustomersRequest](docs/ListCustomersRequest.md)
 - [SquareConnect.ListCustomersResponse](docs/ListCustomersResponse.md)
 - [SquareConnect.ListDeviceCodesRequest](docs/ListDeviceCodesRequest.md)
 - [SquareConnect.ListDeviceCodesResponse](docs/ListDeviceCodesResponse.md)
 - [SquareConnect.ListDisputeEvidenceRequest](docs/ListDisputeEvidenceRequest.md)
 - [SquareConnect.ListDisputeEvidenceResponse](docs/ListDisputeEvidenceResponse.md)
 - [SquareConnect.ListDisputesRequest](docs/ListDisputesRequest.md)
 - [SquareConnect.ListDisputesResponse](docs/ListDisputesResponse.md)
 - [SquareConnect.ListEmployeeWagesRequest](docs/ListEmployeeWagesRequest.md)
 - [SquareConnect.ListEmployeeWagesResponse](docs/ListEmployeeWagesResponse.md)
 - [SquareConnect.ListEmployeesRequest](docs/ListEmployeesRequest.md)
 - [SquareConnect.ListEmployeesResponse](docs/ListEmployeesResponse.md)
 - [SquareConnect.ListLocationsRequest](docs/ListLocationsRequest.md)
 - [SquareConnect.ListLocationsResponse](docs/ListLocationsResponse.md)
 - [SquareConnect.ListLoyaltyProgramsRequest](docs/ListLoyaltyProgramsRequest.md)
 - [SquareConnect.ListLoyaltyProgramsResponse](docs/ListLoyaltyProgramsResponse.md)
 - [SquareConnect.ListMerchantsRequest](docs/ListMerchantsRequest.md)
 - [SquareConnect.ListMerchantsResponse](docs/ListMerchantsResponse.md)
 - [SquareConnect.ListPaymentRefundsRequest](docs/ListPaymentRefundsRequest.md)
 - [SquareConnect.ListPaymentRefundsResponse](docs/ListPaymentRefundsResponse.md)
 - [SquareConnect.ListPaymentsRequest](docs/ListPaymentsRequest.md)
 - [SquareConnect.ListPaymentsResponse](docs/ListPaymentsResponse.md)
 - [SquareConnect.ListRefundsRequest](docs/ListRefundsRequest.md)
 - [SquareConnect.ListRefundsResponse](docs/ListRefundsResponse.md)
 - [SquareConnect.ListTransactionsRequest](docs/ListTransactionsRequest.md)
 - [SquareConnect.ListTransactionsResponse](docs/ListTransactionsResponse.md)
 - [SquareConnect.ListWorkweekConfigsRequest](docs/ListWorkweekConfigsRequest.md)
 - [SquareConnect.ListWorkweekConfigsResponse](docs/ListWorkweekConfigsResponse.md)
 - [SquareConnect.Location](docs/Location.md)
 - [SquareConnect.LocationCapability](docs/LocationCapability.md)
 - [SquareConnect.LocationStatus](docs/LocationStatus.md)
 - [SquareConnect.LocationType](docs/LocationType.md)
 - [SquareConnect.LoyaltyAccount](docs/LoyaltyAccount.md)
 - [SquareConnect.LoyaltyAccountMapping](docs/LoyaltyAccountMapping.md)
 - [SquareConnect.LoyaltyAccountMappingType](docs/LoyaltyAccountMappingType.md)
 - [SquareConnect.LoyaltyEvent](docs/LoyaltyEvent.md)
 - [SquareConnect.LoyaltyEventAccumulatePoints](docs/LoyaltyEventAccumulatePoints.md)
 - [SquareConnect.LoyaltyEventAdjustPoints](docs/LoyaltyEventAdjustPoints.md)
 - [SquareConnect.LoyaltyEventCreateReward](docs/LoyaltyEventCreateReward.md)
 - [SquareConnect.LoyaltyEventDateTimeFilter](docs/LoyaltyEventDateTimeFilter.md)
 - [SquareConnect.LoyaltyEventDeleteReward](docs/LoyaltyEventDeleteReward.md)
 - [SquareConnect.LoyaltyEventExpirePoints](docs/LoyaltyEventExpirePoints.md)
 - [SquareConnect.LoyaltyEventFilter](docs/LoyaltyEventFilter.md)
 - [SquareConnect.LoyaltyEventLocationFilter](docs/LoyaltyEventLocationFilter.md)
 - [SquareConnect.LoyaltyEventLoyaltyAccountFilter](docs/LoyaltyEventLoyaltyAccountFilter.md)
 - [SquareConnect.LoyaltyEventOrderFilter](docs/LoyaltyEventOrderFilter.md)
 - [SquareConnect.LoyaltyEventOther](docs/LoyaltyEventOther.md)
 - [SquareConnect.LoyaltyEventQuery](docs/LoyaltyEventQuery.md)
 - [SquareConnect.LoyaltyEventRedeemReward](docs/LoyaltyEventRedeemReward.md)
 - [SquareConnect.LoyaltyEventSource](docs/LoyaltyEventSource.md)
 - [SquareConnect.LoyaltyEventType](docs/LoyaltyEventType.md)
 - [SquareConnect.LoyaltyEventTypeFilter](docs/LoyaltyEventTypeFilter.md)
 - [SquareConnect.LoyaltyProgram](docs/LoyaltyProgram.md)
 - [SquareConnect.LoyaltyProgramAccrualRule](docs/LoyaltyProgramAccrualRule.md)
 - [SquareConnect.LoyaltyProgramAccrualRuleType](docs/LoyaltyProgramAccrualRuleType.md)
 - [SquareConnect.LoyaltyProgramExpirationPolicy](docs/LoyaltyProgramExpirationPolicy.md)
 - [SquareConnect.LoyaltyProgramRewardDefinition](docs/LoyaltyProgramRewardDefinition.md)
 - [SquareConnect.LoyaltyProgramRewardDefinitionScope](docs/LoyaltyProgramRewardDefinitionScope.md)
 - [SquareConnect.LoyaltyProgramRewardDefinitionType](docs/LoyaltyProgramRewardDefinitionType.md)
 - [SquareConnect.LoyaltyProgramRewardTier](docs/LoyaltyProgramRewardTier.md)
 - [SquareConnect.LoyaltyProgramStatus](docs/LoyaltyProgramStatus.md)
 - [SquareConnect.LoyaltyProgramTerminology](docs/LoyaltyProgramTerminology.md)
 - [SquareConnect.LoyaltyReward](docs/LoyaltyReward.md)
 - [SquareConnect.LoyaltyRewardStatus](docs/LoyaltyRewardStatus.md)
 - [SquareConnect.MeasurementUnit](docs/MeasurementUnit.md)
 - [SquareConnect.MeasurementUnitArea](docs/MeasurementUnitArea.md)
 - [SquareConnect.MeasurementUnitCustom](docs/MeasurementUnitCustom.md)
 - [SquareConnect.MeasurementUnitGeneric](docs/MeasurementUnitGeneric.md)
 - [SquareConnect.MeasurementUnitLength](docs/MeasurementUnitLength.md)
 - [SquareConnect.MeasurementUnitTime](docs/MeasurementUnitTime.md)
 - [SquareConnect.MeasurementUnitUnitType](docs/MeasurementUnitUnitType.md)
 - [SquareConnect.MeasurementUnitVolume](docs/MeasurementUnitVolume.md)
 - [SquareConnect.MeasurementUnitWeight](docs/MeasurementUnitWeight.md)
 - [SquareConnect.Merchant](docs/Merchant.md)
 - [SquareConnect.MerchantStatus](docs/MerchantStatus.md)
 - [SquareConnect.MethodErrorCodes](docs/MethodErrorCodes.md)
 - [SquareConnect.ModelBreak](docs/ModelBreak.md)
 - [SquareConnect.Money](docs/Money.md)
 - [SquareConnect.ObtainTokenRequest](docs/ObtainTokenRequest.md)
 - [SquareConnect.ObtainTokenResponse](docs/ObtainTokenResponse.md)
 - [SquareConnect.Order](docs/Order.md)
 - [SquareConnect.OrderCreated](docs/OrderCreated.md)
 - [SquareConnect.OrderCreatedObject](docs/OrderCreatedObject.md)
 - [SquareConnect.OrderEntry](docs/OrderEntry.md)
 - [SquareConnect.OrderFulfillment](docs/OrderFulfillment.md)
 - [SquareConnect.OrderFulfillmentPickupDetails](docs/OrderFulfillmentPickupDetails.md)
 - [SquareConnect.OrderFulfillmentPickupDetailsCurbsidePickupDetails](docs/OrderFulfillmentPickupDetailsCurbsidePickupDetails.md)
 - [SquareConnect.OrderFulfillmentPickupDetailsScheduleType](docs/OrderFulfillmentPickupDetailsScheduleType.md)
 - [SquareConnect.OrderFulfillmentRecipient](docs/OrderFulfillmentRecipient.md)
 - [SquareConnect.OrderFulfillmentShipmentDetails](docs/OrderFulfillmentShipmentDetails.md)
 - [SquareConnect.OrderFulfillmentState](docs/OrderFulfillmentState.md)
 - [SquareConnect.OrderFulfillmentType](docs/OrderFulfillmentType.md)
 - [SquareConnect.OrderFulfillmentUpdated](docs/OrderFulfillmentUpdated.md)
 - [SquareConnect.OrderFulfillmentUpdatedObject](docs/OrderFulfillmentUpdatedObject.md)
 - [SquareConnect.OrderFulfillmentUpdatedUpdate](docs/OrderFulfillmentUpdatedUpdate.md)
 - [SquareConnect.OrderLineItem](docs/OrderLineItem.md)
 - [SquareConnect.OrderLineItemAppliedDiscount](docs/OrderLineItemAppliedDiscount.md)
 - [SquareConnect.OrderLineItemAppliedTax](docs/OrderLineItemAppliedTax.md)
 - [SquareConnect.OrderLineItemDiscount](docs/OrderLineItemDiscount.md)
 - [SquareConnect.OrderLineItemDiscountScope](docs/OrderLineItemDiscountScope.md)
 - [SquareConnect.OrderLineItemDiscountType](docs/OrderLineItemDiscountType.md)
 - [SquareConnect.OrderLineItemModifier](docs/OrderLineItemModifier.md)
 - [SquareConnect.OrderLineItemTax](docs/OrderLineItemTax.md)
 - [SquareConnect.OrderLineItemTaxScope](docs/OrderLineItemTaxScope.md)
 - [SquareConnect.OrderLineItemTaxType](docs/OrderLineItemTaxType.md)
 - [SquareConnect.OrderMoneyAmounts](docs/OrderMoneyAmounts.md)
 - [SquareConnect.OrderQuantityUnit](docs/OrderQuantityUnit.md)
 - [SquareConnect.OrderReturn](docs/OrderReturn.md)
 - [SquareConnect.OrderReturnDiscount](docs/OrderReturnDiscount.md)
 - [SquareConnect.OrderReturnLineItem](docs/OrderReturnLineItem.md)
 - [SquareConnect.OrderReturnLineItemModifier](docs/OrderReturnLineItemModifier.md)
 - [SquareConnect.OrderReturnServiceCharge](docs/OrderReturnServiceCharge.md)
 - [SquareConnect.OrderReturnTax](docs/OrderReturnTax.md)
 - [SquareConnect.OrderReward](docs/OrderReward.md)
 - [SquareConnect.OrderRoundingAdjustment](docs/OrderRoundingAdjustment.md)
 - [SquareConnect.OrderServiceCharge](docs/OrderServiceCharge.md)
 - [SquareConnect.OrderServiceChargeCalculationPhase](docs/OrderServiceChargeCalculationPhase.md)
 - [SquareConnect.OrderSource](docs/OrderSource.md)
 - [SquareConnect.OrderState](docs/OrderState.md)
 - [SquareConnect.OrderUpdated](docs/OrderUpdated.md)
 - [SquareConnect.OrderUpdatedObject](docs/OrderUpdatedObject.md)
 - [SquareConnect.PayOrderRequest](docs/PayOrderRequest.md)
 - [SquareConnect.PayOrderResponse](docs/PayOrderResponse.md)
 - [SquareConnect.Payment](docs/Payment.md)
 - [SquareConnect.PaymentOptions](docs/PaymentOptions.md)
 - [SquareConnect.PaymentRefund](docs/PaymentRefund.md)
 - [SquareConnect.ProcessingFee](docs/ProcessingFee.md)
 - [SquareConnect.Product](docs/Product.md)
 - [SquareConnect.ProductType](docs/ProductType.md)
 - [SquareConnect.RedeemLoyaltyRewardRequest](docs/RedeemLoyaltyRewardRequest.md)
 - [SquareConnect.RedeemLoyaltyRewardResponse](docs/RedeemLoyaltyRewardResponse.md)
 - [SquareConnect.Refund](docs/Refund.md)
 - [SquareConnect.RefundPaymentRequest](docs/RefundPaymentRequest.md)
 - [SquareConnect.RefundPaymentResponse](docs/RefundPaymentResponse.md)
 - [SquareConnect.RefundStatus](docs/RefundStatus.md)
 - [SquareConnect.RegisterDomainRequest](docs/RegisterDomainRequest.md)
 - [SquareConnect.RegisterDomainResponse](docs/RegisterDomainResponse.md)
 - [SquareConnect.RegisterDomainResponseStatus](docs/RegisterDomainResponseStatus.md)
 - [SquareConnect.RemoveDisputeEvidenceRequest](docs/RemoveDisputeEvidenceRequest.md)
 - [SquareConnect.RemoveDisputeEvidenceResponse](docs/RemoveDisputeEvidenceResponse.md)
 - [SquareConnect.RemoveGroupFromCustomerRequest](docs/RemoveGroupFromCustomerRequest.md)
 - [SquareConnect.RemoveGroupFromCustomerResponse](docs/RemoveGroupFromCustomerResponse.md)
 - [SquareConnect.RenewTokenRequest](docs/RenewTokenRequest.md)
 - [SquareConnect.RenewTokenResponse](docs/RenewTokenResponse.md)
 - [SquareConnect.RetrieveCashDrawerShiftRequest](docs/RetrieveCashDrawerShiftRequest.md)
 - [SquareConnect.RetrieveCashDrawerShiftResponse](docs/RetrieveCashDrawerShiftResponse.md)
 - [SquareConnect.RetrieveCatalogObjectRequest](docs/RetrieveCatalogObjectRequest.md)
 - [SquareConnect.RetrieveCatalogObjectResponse](docs/RetrieveCatalogObjectResponse.md)
 - [SquareConnect.RetrieveCustomerGroupRequest](docs/RetrieveCustomerGroupRequest.md)
 - [SquareConnect.RetrieveCustomerGroupResponse](docs/RetrieveCustomerGroupResponse.md)
 - [SquareConnect.RetrieveCustomerRequest](docs/RetrieveCustomerRequest.md)
 - [SquareConnect.RetrieveCustomerResponse](docs/RetrieveCustomerResponse.md)
 - [SquareConnect.RetrieveCustomerSegmentRequest](docs/RetrieveCustomerSegmentRequest.md)
 - [SquareConnect.RetrieveCustomerSegmentResponse](docs/RetrieveCustomerSegmentResponse.md)
 - [SquareConnect.RetrieveDisputeEvidenceRequest](docs/RetrieveDisputeEvidenceRequest.md)
 - [SquareConnect.RetrieveDisputeEvidenceResponse](docs/RetrieveDisputeEvidenceResponse.md)
 - [SquareConnect.RetrieveDisputeRequest](docs/RetrieveDisputeRequest.md)
 - [SquareConnect.RetrieveDisputeResponse](docs/RetrieveDisputeResponse.md)
 - [SquareConnect.RetrieveEmployeeRequest](docs/RetrieveEmployeeRequest.md)
 - [SquareConnect.RetrieveEmployeeResponse](docs/RetrieveEmployeeResponse.md)
 - [SquareConnect.RetrieveInventoryAdjustmentRequest](docs/RetrieveInventoryAdjustmentRequest.md)
 - [SquareConnect.RetrieveInventoryAdjustmentResponse](docs/RetrieveInventoryAdjustmentResponse.md)
 - [SquareConnect.RetrieveInventoryChangesRequest](docs/RetrieveInventoryChangesRequest.md)
 - [SquareConnect.RetrieveInventoryChangesResponse](docs/RetrieveInventoryChangesResponse.md)
 - [SquareConnect.RetrieveInventoryCountRequest](docs/RetrieveInventoryCountRequest.md)
 - [SquareConnect.RetrieveInventoryCountResponse](docs/RetrieveInventoryCountResponse.md)
 - [SquareConnect.RetrieveInventoryPhysicalCountRequest](docs/RetrieveInventoryPhysicalCountRequest.md)
 - [SquareConnect.RetrieveInventoryPhysicalCountResponse](docs/RetrieveInventoryPhysicalCountResponse.md)
 - [SquareConnect.RetrieveLocationRequest](docs/RetrieveLocationRequest.md)
 - [SquareConnect.RetrieveLocationResponse](docs/RetrieveLocationResponse.md)
 - [SquareConnect.RetrieveLoyaltyAccountRequest](docs/RetrieveLoyaltyAccountRequest.md)
 - [SquareConnect.RetrieveLoyaltyAccountResponse](docs/RetrieveLoyaltyAccountResponse.md)
 - [SquareConnect.RetrieveLoyaltyRewardRequest](docs/RetrieveLoyaltyRewardRequest.md)
 - [SquareConnect.RetrieveLoyaltyRewardResponse](docs/RetrieveLoyaltyRewardResponse.md)
 - [SquareConnect.RetrieveMerchantRequest](docs/RetrieveMerchantRequest.md)
 - [SquareConnect.RetrieveMerchantResponse](docs/RetrieveMerchantResponse.md)
 - [SquareConnect.RetrieveTeamMemberRequest](docs/RetrieveTeamMemberRequest.md)
 - [SquareConnect.RetrieveTeamMemberResponse](docs/RetrieveTeamMemberResponse.md)
 - [SquareConnect.RetrieveTransactionRequest](docs/RetrieveTransactionRequest.md)
 - [SquareConnect.RetrieveTransactionResponse](docs/RetrieveTransactionResponse.md)
 - [SquareConnect.RetrieveWageSettingRequest](docs/RetrieveWageSettingRequest.md)
 - [SquareConnect.RetrieveWageSettingResponse](docs/RetrieveWageSettingResponse.md)
 - [SquareConnect.RevokeTokenRequest](docs/RevokeTokenRequest.md)
 - [SquareConnect.RevokeTokenResponse](docs/RevokeTokenResponse.md)
 - [SquareConnect.SearchCatalogObjectsRequest](docs/SearchCatalogObjectsRequest.md)
 - [SquareConnect.SearchCatalogObjectsResponse](docs/SearchCatalogObjectsResponse.md)
 - [SquareConnect.SearchCustomersRequest](docs/SearchCustomersRequest.md)
 - [SquareConnect.SearchCustomersResponse](docs/SearchCustomersResponse.md)
 - [SquareConnect.SearchLoyaltyAccountsRequest](docs/SearchLoyaltyAccountsRequest.md)
 - [SquareConnect.SearchLoyaltyAccountsRequestLoyaltyAccountQuery](docs/SearchLoyaltyAccountsRequestLoyaltyAccountQuery.md)
 - [SquareConnect.SearchLoyaltyAccountsResponse](docs/SearchLoyaltyAccountsResponse.md)
 - [SquareConnect.SearchLoyaltyEventsRequest](docs/SearchLoyaltyEventsRequest.md)
 - [SquareConnect.SearchLoyaltyEventsResponse](docs/SearchLoyaltyEventsResponse.md)
 - [SquareConnect.SearchLoyaltyRewardsRequest](docs/SearchLoyaltyRewardsRequest.md)
 - [SquareConnect.SearchLoyaltyRewardsRequestLoyaltyRewardQuery](docs/SearchLoyaltyRewardsRequestLoyaltyRewardQuery.md)
 - [SquareConnect.SearchLoyaltyRewardsResponse](docs/SearchLoyaltyRewardsResponse.md)
 - [SquareConnect.SearchOrdersCustomerFilter](docs/SearchOrdersCustomerFilter.md)
 - [SquareConnect.SearchOrdersDateTimeFilter](docs/SearchOrdersDateTimeFilter.md)
 - [SquareConnect.SearchOrdersFilter](docs/SearchOrdersFilter.md)
 - [SquareConnect.SearchOrdersFulfillmentFilter](docs/SearchOrdersFulfillmentFilter.md)
 - [SquareConnect.SearchOrdersQuery](docs/SearchOrdersQuery.md)
 - [SquareConnect.SearchOrdersRequest](docs/SearchOrdersRequest.md)
 - [SquareConnect.SearchOrdersResponse](docs/SearchOrdersResponse.md)
 - [SquareConnect.SearchOrdersSort](docs/SearchOrdersSort.md)
 - [SquareConnect.SearchOrdersSortField](docs/SearchOrdersSortField.md)
 - [SquareConnect.SearchOrdersSourceFilter](docs/SearchOrdersSourceFilter.md)
 - [SquareConnect.SearchOrdersStateFilter](docs/SearchOrdersStateFilter.md)
 - [SquareConnect.SearchShiftsRequest](docs/SearchShiftsRequest.md)
 - [SquareConnect.SearchShiftsResponse](docs/SearchShiftsResponse.md)
 - [SquareConnect.SearchTeamMembersFilter](docs/SearchTeamMembersFilter.md)
 - [SquareConnect.SearchTeamMembersQuery](docs/SearchTeamMembersQuery.md)
 - [SquareConnect.SearchTeamMembersRequest](docs/SearchTeamMembersRequest.md)
 - [SquareConnect.SearchTeamMembersResponse](docs/SearchTeamMembersResponse.md)
 - [SquareConnect.SearchTerminalCheckoutsRequest](docs/SearchTerminalCheckoutsRequest.md)
 - [SquareConnect.SearchTerminalCheckoutsResponse](docs/SearchTerminalCheckoutsResponse.md)
 - [SquareConnect.Shift](docs/Shift.md)
 - [SquareConnect.ShiftFilter](docs/ShiftFilter.md)
 - [SquareConnect.ShiftFilterStatus](docs/ShiftFilterStatus.md)
 - [SquareConnect.ShiftQuery](docs/ShiftQuery.md)
 - [SquareConnect.ShiftSort](docs/ShiftSort.md)
 - [SquareConnect.ShiftSortField](docs/ShiftSortField.md)
 - [SquareConnect.ShiftStatus](docs/ShiftStatus.md)
 - [SquareConnect.ShiftWage](docs/ShiftWage.md)
 - [SquareConnect.ShiftWorkday](docs/ShiftWorkday.md)
 - [SquareConnect.ShiftWorkdayMatcher](docs/ShiftWorkdayMatcher.md)
 - [SquareConnect.SortOrder](docs/SortOrder.md)
 - [SquareConnect.SourceApplication](docs/SourceApplication.md)
 - [SquareConnect.StandardUnitDescription](docs/StandardUnitDescription.md)
 - [SquareConnect.StandardUnitDescriptionGroup](docs/StandardUnitDescriptionGroup.md)
 - [SquareConnect.SubmitEvidenceRequest](docs/SubmitEvidenceRequest.md)
 - [SquareConnect.SubmitEvidenceResponse](docs/SubmitEvidenceResponse.md)
 - [SquareConnect.TaxCalculationPhase](docs/TaxCalculationPhase.md)
 - [SquareConnect.TaxInclusionType](docs/TaxInclusionType.md)
 - [SquareConnect.TeamMember](docs/TeamMember.md)
 - [SquareConnect.TeamMemberAssignedLocations](docs/TeamMemberAssignedLocations.md)
 - [SquareConnect.TeamMemberAssignedLocationsAssignmentType](docs/TeamMemberAssignedLocationsAssignmentType.md)
 - [SquareConnect.TeamMemberStatus](docs/TeamMemberStatus.md)
 - [SquareConnect.Tender](docs/Tender.md)
 - [SquareConnect.TenderCardDetails](docs/TenderCardDetails.md)
 - [SquareConnect.TenderCardDetailsEntryMethod](docs/TenderCardDetailsEntryMethod.md)
 - [SquareConnect.TenderCardDetailsStatus](docs/TenderCardDetailsStatus.md)
 - [SquareConnect.TenderCashDetails](docs/TenderCashDetails.md)
 - [SquareConnect.TenderType](docs/TenderType.md)
 - [SquareConnect.TerminalCheckout](docs/TerminalCheckout.md)
 - [SquareConnect.TerminalCheckoutCancelReason](docs/TerminalCheckoutCancelReason.md)
 - [SquareConnect.TerminalCheckoutQuery](docs/TerminalCheckoutQuery.md)
 - [SquareConnect.TerminalCheckoutQueryFilter](docs/TerminalCheckoutQueryFilter.md)
 - [SquareConnect.TerminalCheckoutQuerySort](docs/TerminalCheckoutQuerySort.md)
 - [SquareConnect.TimeRange](docs/TimeRange.md)
 - [SquareConnect.TipSettings](docs/TipSettings.md)
 - [SquareConnect.Transaction](docs/Transaction.md)
 - [SquareConnect.TransactionProduct](docs/TransactionProduct.md)
 - [SquareConnect.TransactionType](docs/TransactionType.md)
 - [SquareConnect.UpdateBreakTypeRequest](docs/UpdateBreakTypeRequest.md)
 - [SquareConnect.UpdateBreakTypeResponse](docs/UpdateBreakTypeResponse.md)
 - [SquareConnect.UpdateCustomerGroupRequest](docs/UpdateCustomerGroupRequest.md)
 - [SquareConnect.UpdateCustomerGroupResponse](docs/UpdateCustomerGroupResponse.md)
 - [SquareConnect.UpdateCustomerRequest](docs/UpdateCustomerRequest.md)
 - [SquareConnect.UpdateCustomerResponse](docs/UpdateCustomerResponse.md)
 - [SquareConnect.UpdateItemModifierListsRequest](docs/UpdateItemModifierListsRequest.md)
 - [SquareConnect.UpdateItemModifierListsResponse](docs/UpdateItemModifierListsResponse.md)
 - [SquareConnect.UpdateItemTaxesRequest](docs/UpdateItemTaxesRequest.md)
 - [SquareConnect.UpdateItemTaxesResponse](docs/UpdateItemTaxesResponse.md)
 - [SquareConnect.UpdateLocationRequest](docs/UpdateLocationRequest.md)
 - [SquareConnect.UpdateLocationResponse](docs/UpdateLocationResponse.md)
 - [SquareConnect.UpdateOrderRequest](docs/UpdateOrderRequest.md)
 - [SquareConnect.UpdateOrderResponse](docs/UpdateOrderResponse.md)
 - [SquareConnect.UpdateShiftRequest](docs/UpdateShiftRequest.md)
 - [SquareConnect.UpdateShiftResponse](docs/UpdateShiftResponse.md)
 - [SquareConnect.UpdateTeamMemberRequest](docs/UpdateTeamMemberRequest.md)
 - [SquareConnect.UpdateTeamMemberResponse](docs/UpdateTeamMemberResponse.md)
 - [SquareConnect.UpdateWageSettingRequest](docs/UpdateWageSettingRequest.md)
 - [SquareConnect.UpdateWageSettingResponse](docs/UpdateWageSettingResponse.md)
 - [SquareConnect.UpdateWorkweekConfigRequest](docs/UpdateWorkweekConfigRequest.md)
 - [SquareConnect.UpdateWorkweekConfigResponse](docs/UpdateWorkweekConfigResponse.md)
 - [SquareConnect.UpsertCatalogObjectRequest](docs/UpsertCatalogObjectRequest.md)
 - [SquareConnect.UpsertCatalogObjectResponse](docs/UpsertCatalogObjectResponse.md)
 - [SquareConnect.V1AdjustInventoryRequest](docs/V1AdjustInventoryRequest.md)
 - [SquareConnect.V1AdjustInventoryRequestAdjustmentType](docs/V1AdjustInventoryRequestAdjustmentType.md)
 - [SquareConnect.V1ApplyFeeRequest](docs/V1ApplyFeeRequest.md)
 - [SquareConnect.V1ApplyModifierListRequest](docs/V1ApplyModifierListRequest.md)
 - [SquareConnect.V1BankAccount](docs/V1BankAccount.md)
 - [SquareConnect.V1BankAccountType](docs/V1BankAccountType.md)
 - [SquareConnect.V1CashDrawerEvent](docs/V1CashDrawerEvent.md)
 - [SquareConnect.V1CashDrawerEventEventType](docs/V1CashDrawerEventEventType.md)
 - [SquareConnect.V1CashDrawerShift](docs/V1CashDrawerShift.md)
 - [SquareConnect.V1CashDrawerShiftEventType](docs/V1CashDrawerShiftEventType.md)
 - [SquareConnect.V1Category](docs/V1Category.md)
 - [SquareConnect.V1CreateCategoryRequest](docs/V1CreateCategoryRequest.md)
 - [SquareConnect.V1CreateDiscountRequest](docs/V1CreateDiscountRequest.md)
 - [SquareConnect.V1CreateEmployeeRoleRequest](docs/V1CreateEmployeeRoleRequest.md)
 - [SquareConnect.V1CreateFeeRequest](docs/V1CreateFeeRequest.md)
 - [SquareConnect.V1CreateItemRequest](docs/V1CreateItemRequest.md)
 - [SquareConnect.V1CreateModifierListRequest](docs/V1CreateModifierListRequest.md)
 - [SquareConnect.V1CreateModifierOptionRequest](docs/V1CreateModifierOptionRequest.md)
 - [SquareConnect.V1CreatePageRequest](docs/V1CreatePageRequest.md)
 - [SquareConnect.V1CreateRefundRequest](docs/V1CreateRefundRequest.md)
 - [SquareConnect.V1CreateRefundRequestType](docs/V1CreateRefundRequestType.md)
 - [SquareConnect.V1CreateVariationRequest](docs/V1CreateVariationRequest.md)
 - [SquareConnect.V1DeleteCategoryRequest](docs/V1DeleteCategoryRequest.md)
 - [SquareConnect.V1DeleteDiscountRequest](docs/V1DeleteDiscountRequest.md)
 - [SquareConnect.V1DeleteFeeRequest](docs/V1DeleteFeeRequest.md)
 - [SquareConnect.V1DeleteItemRequest](docs/V1DeleteItemRequest.md)
 - [SquareConnect.V1DeleteModifierListRequest](docs/V1DeleteModifierListRequest.md)
 - [SquareConnect.V1DeleteModifierOptionRequest](docs/V1DeleteModifierOptionRequest.md)
 - [SquareConnect.V1DeletePageCellRequest](docs/V1DeletePageCellRequest.md)
 - [SquareConnect.V1DeletePageRequest](docs/V1DeletePageRequest.md)
 - [SquareConnect.V1DeleteTimecardRequest](docs/V1DeleteTimecardRequest.md)
 - [SquareConnect.V1DeleteTimecardResponse](docs/V1DeleteTimecardResponse.md)
 - [SquareConnect.V1DeleteVariationRequest](docs/V1DeleteVariationRequest.md)
 - [SquareConnect.V1Discount](docs/V1Discount.md)
 - [SquareConnect.V1DiscountColor](docs/V1DiscountColor.md)
 - [SquareConnect.V1DiscountDiscountType](docs/V1DiscountDiscountType.md)
 - [SquareConnect.V1Employee](docs/V1Employee.md)
 - [SquareConnect.V1EmployeeRole](docs/V1EmployeeRole.md)
 - [SquareConnect.V1EmployeeRolePermissions](docs/V1EmployeeRolePermissions.md)
 - [SquareConnect.V1EmployeeStatus](docs/V1EmployeeStatus.md)
 - [SquareConnect.V1Fee](docs/V1Fee.md)
 - [SquareConnect.V1FeeAdjustmentType](docs/V1FeeAdjustmentType.md)
 - [SquareConnect.V1FeeCalculationPhase](docs/V1FeeCalculationPhase.md)
 - [SquareConnect.V1FeeInclusionType](docs/V1FeeInclusionType.md)
 - [SquareConnect.V1FeeType](docs/V1FeeType.md)
 - [SquareConnect.V1InventoryEntry](docs/V1InventoryEntry.md)
 - [SquareConnect.V1Item](docs/V1Item.md)
 - [SquareConnect.V1ItemColor](docs/V1ItemColor.md)
 - [SquareConnect.V1ItemImage](docs/V1ItemImage.md)
 - [SquareConnect.V1ItemType](docs/V1ItemType.md)
 - [SquareConnect.V1ItemVisibility](docs/V1ItemVisibility.md)
 - [SquareConnect.V1ListBankAccountsRequest](docs/V1ListBankAccountsRequest.md)
 - [SquareConnect.V1ListBankAccountsResponse](docs/V1ListBankAccountsResponse.md)
 - [SquareConnect.V1ListCashDrawerShiftsRequest](docs/V1ListCashDrawerShiftsRequest.md)
 - [SquareConnect.V1ListCashDrawerShiftsResponse](docs/V1ListCashDrawerShiftsResponse.md)
 - [SquareConnect.V1ListCategoriesRequest](docs/V1ListCategoriesRequest.md)
 - [SquareConnect.V1ListCategoriesResponse](docs/V1ListCategoriesResponse.md)
 - [SquareConnect.V1ListDiscountsRequest](docs/V1ListDiscountsRequest.md)
 - [SquareConnect.V1ListDiscountsResponse](docs/V1ListDiscountsResponse.md)
 - [SquareConnect.V1ListEmployeeRolesRequest](docs/V1ListEmployeeRolesRequest.md)
 - [SquareConnect.V1ListEmployeeRolesResponse](docs/V1ListEmployeeRolesResponse.md)
 - [SquareConnect.V1ListEmployeesRequest](docs/V1ListEmployeesRequest.md)
 - [SquareConnect.V1ListEmployeesRequestStatus](docs/V1ListEmployeesRequestStatus.md)
 - [SquareConnect.V1ListEmployeesResponse](docs/V1ListEmployeesResponse.md)
 - [SquareConnect.V1ListFeesRequest](docs/V1ListFeesRequest.md)
 - [SquareConnect.V1ListFeesResponse](docs/V1ListFeesResponse.md)
 - [SquareConnect.V1ListInventoryRequest](docs/V1ListInventoryRequest.md)
 - [SquareConnect.V1ListInventoryResponse](docs/V1ListInventoryResponse.md)
 - [SquareConnect.V1ListItemsRequest](docs/V1ListItemsRequest.md)
 - [SquareConnect.V1ListItemsResponse](docs/V1ListItemsResponse.md)
 - [SquareConnect.V1ListLocationsRequest](docs/V1ListLocationsRequest.md)
 - [SquareConnect.V1ListLocationsResponse](docs/V1ListLocationsResponse.md)
 - [SquareConnect.V1ListModifierListsRequest](docs/V1ListModifierListsRequest.md)
 - [SquareConnect.V1ListModifierListsResponse](docs/V1ListModifierListsResponse.md)
 - [SquareConnect.V1ListOrdersRequest](docs/V1ListOrdersRequest.md)
 - [SquareConnect.V1ListOrdersResponse](docs/V1ListOrdersResponse.md)
 - [SquareConnect.V1ListPagesRequest](docs/V1ListPagesRequest.md)
 - [SquareConnect.V1ListPagesResponse](docs/V1ListPagesResponse.md)
 - [SquareConnect.V1ListPaymentsRequest](docs/V1ListPaymentsRequest.md)
 - [SquareConnect.V1ListPaymentsResponse](docs/V1ListPaymentsResponse.md)
 - [SquareConnect.V1ListRefundsRequest](docs/V1ListRefundsRequest.md)
 - [SquareConnect.V1ListRefundsResponse](docs/V1ListRefundsResponse.md)
 - [SquareConnect.V1ListSettlementsRequest](docs/V1ListSettlementsRequest.md)
 - [SquareConnect.V1ListSettlementsRequestStatus](docs/V1ListSettlementsRequestStatus.md)
 - [SquareConnect.V1ListSettlementsResponse](docs/V1ListSettlementsResponse.md)
 - [SquareConnect.V1ListTimecardEventsRequest](docs/V1ListTimecardEventsRequest.md)
 - [SquareConnect.V1ListTimecardEventsResponse](docs/V1ListTimecardEventsResponse.md)
 - [SquareConnect.V1ListTimecardsRequest](docs/V1ListTimecardsRequest.md)
 - [SquareConnect.V1ListTimecardsResponse](docs/V1ListTimecardsResponse.md)
 - [SquareConnect.V1Merchant](docs/V1Merchant.md)
 - [SquareConnect.V1MerchantAccountType](docs/V1MerchantAccountType.md)
 - [SquareConnect.V1MerchantBusinessType](docs/V1MerchantBusinessType.md)
 - [SquareConnect.V1MerchantLocationDetails](docs/V1MerchantLocationDetails.md)
 - [SquareConnect.V1ModifierList](docs/V1ModifierList.md)
 - [SquareConnect.V1ModifierListSelectionType](docs/V1ModifierListSelectionType.md)
 - [SquareConnect.V1ModifierOption](docs/V1ModifierOption.md)
 - [SquareConnect.V1Money](docs/V1Money.md)
 - [SquareConnect.V1Order](docs/V1Order.md)
 - [SquareConnect.V1OrderHistoryEntry](docs/V1OrderHistoryEntry.md)
 - [SquareConnect.V1OrderHistoryEntryAction](docs/V1OrderHistoryEntryAction.md)
 - [SquareConnect.V1OrderState](docs/V1OrderState.md)
 - [SquareConnect.V1Page](docs/V1Page.md)
 - [SquareConnect.V1PageCell](docs/V1PageCell.md)
 - [SquareConnect.V1PageCellObjectType](docs/V1PageCellObjectType.md)
 - [SquareConnect.V1PageCellPlaceholderType](docs/V1PageCellPlaceholderType.md)
 - [SquareConnect.V1Payment](docs/V1Payment.md)
 - [SquareConnect.V1PaymentDiscount](docs/V1PaymentDiscount.md)
 - [SquareConnect.V1PaymentItemDetail](docs/V1PaymentItemDetail.md)
 - [SquareConnect.V1PaymentItemization](docs/V1PaymentItemization.md)
 - [SquareConnect.V1PaymentItemizationItemizationType](docs/V1PaymentItemizationItemizationType.md)
 - [SquareConnect.V1PaymentModifier](docs/V1PaymentModifier.md)
 - [SquareConnect.V1PaymentSurcharge](docs/V1PaymentSurcharge.md)
 - [SquareConnect.V1PaymentSurchargeType](docs/V1PaymentSurchargeType.md)
 - [SquareConnect.V1PaymentTax](docs/V1PaymentTax.md)
 - [SquareConnect.V1PaymentTaxInclusionType](docs/V1PaymentTaxInclusionType.md)
 - [SquareConnect.V1PhoneNumber](docs/V1PhoneNumber.md)
 - [SquareConnect.V1Refund](docs/V1Refund.md)
 - [SquareConnect.V1RefundType](docs/V1RefundType.md)
 - [SquareConnect.V1RemoveFeeRequest](docs/V1RemoveFeeRequest.md)
 - [SquareConnect.V1RemoveModifierListRequest](docs/V1RemoveModifierListRequest.md)
 - [SquareConnect.V1RetrieveBankAccountRequest](docs/V1RetrieveBankAccountRequest.md)
 - [SquareConnect.V1RetrieveBusinessRequest](docs/V1RetrieveBusinessRequest.md)
 - [SquareConnect.V1RetrieveCashDrawerShiftRequest](docs/V1RetrieveCashDrawerShiftRequest.md)
 - [SquareConnect.V1RetrieveEmployeeRequest](docs/V1RetrieveEmployeeRequest.md)
 - [SquareConnect.V1RetrieveEmployeeRoleRequest](docs/V1RetrieveEmployeeRoleRequest.md)
 - [SquareConnect.V1RetrieveItemRequest](docs/V1RetrieveItemRequest.md)
 - [SquareConnect.V1RetrieveModifierListRequest](docs/V1RetrieveModifierListRequest.md)
 - [SquareConnect.V1RetrieveOrderRequest](docs/V1RetrieveOrderRequest.md)
 - [SquareConnect.V1RetrievePaymentRequest](docs/V1RetrievePaymentRequest.md)
 - [SquareConnect.V1RetrieveSettlementRequest](docs/V1RetrieveSettlementRequest.md)
 - [SquareConnect.V1RetrieveTimecardRequest](docs/V1RetrieveTimecardRequest.md)
 - [SquareConnect.V1Settlement](docs/V1Settlement.md)
 - [SquareConnect.V1SettlementEntry](docs/V1SettlementEntry.md)
 - [SquareConnect.V1SettlementEntryType](docs/V1SettlementEntryType.md)
 - [SquareConnect.V1SettlementStatus](docs/V1SettlementStatus.md)
 - [SquareConnect.V1Tender](docs/V1Tender.md)
 - [SquareConnect.V1TenderCardBrand](docs/V1TenderCardBrand.md)
 - [SquareConnect.V1TenderEntryMethod](docs/V1TenderEntryMethod.md)
 - [SquareConnect.V1TenderType](docs/V1TenderType.md)
 - [SquareConnect.V1Timecard](docs/V1Timecard.md)
 - [SquareConnect.V1TimecardEvent](docs/V1TimecardEvent.md)
 - [SquareConnect.V1TimecardEventEventType](docs/V1TimecardEventEventType.md)
 - [SquareConnect.V1UpdateCategoryRequest](docs/V1UpdateCategoryRequest.md)
 - [SquareConnect.V1UpdateDiscountRequest](docs/V1UpdateDiscountRequest.md)
 - [SquareConnect.V1UpdateEmployeeRequest](docs/V1UpdateEmployeeRequest.md)
 - [SquareConnect.V1UpdateEmployeeRoleRequest](docs/V1UpdateEmployeeRoleRequest.md)
 - [SquareConnect.V1UpdateFeeRequest](docs/V1UpdateFeeRequest.md)
 - [SquareConnect.V1UpdateItemRequest](docs/V1UpdateItemRequest.md)
 - [SquareConnect.V1UpdateModifierListRequest](docs/V1UpdateModifierListRequest.md)
 - [SquareConnect.V1UpdateModifierListRequestSelectionType](docs/V1UpdateModifierListRequestSelectionType.md)
 - [SquareConnect.V1UpdateModifierOptionRequest](docs/V1UpdateModifierOptionRequest.md)
 - [SquareConnect.V1UpdateOrderRequest](docs/V1UpdateOrderRequest.md)
 - [SquareConnect.V1UpdateOrderRequestAction](docs/V1UpdateOrderRequestAction.md)
 - [SquareConnect.V1UpdatePageCellRequest](docs/V1UpdatePageCellRequest.md)
 - [SquareConnect.V1UpdatePageRequest](docs/V1UpdatePageRequest.md)
 - [SquareConnect.V1UpdateTimecardRequest](docs/V1UpdateTimecardRequest.md)
 - [SquareConnect.V1UpdateVariationRequest](docs/V1UpdateVariationRequest.md)
 - [SquareConnect.V1Variation](docs/V1Variation.md)
 - [SquareConnect.V1VariationInventoryAlertType](docs/V1VariationInventoryAlertType.md)
 - [SquareConnect.V1VariationPricingType](docs/V1VariationPricingType.md)
 - [SquareConnect.VoidTransactionRequest](docs/VoidTransactionRequest.md)
 - [SquareConnect.VoidTransactionResponse](docs/VoidTransactionResponse.md)
 - [SquareConnect.WageSetting](docs/WageSetting.md)
 - [SquareConnect.Weekday](docs/Weekday.md)
 - [SquareConnect.WorkweekConfig](docs/WorkweekConfig.md)


## Documentation for Authorization


### oauth2

- **Type**: OAuth
- **Flow**: accessCode
- **Authorization URL**: https://connect.squareup.com/oauth2/authorize
- **Scopes**: 
  - BANK_ACCOUNTS_READ: __HTTP Method__: &#x60;GET&#x60;  Grants read access to bank account information associated with the targeted Square account. For example, to call the Connect v1 ListBankAccounts endpoint.
  - CASH_DRAWER_READ: __HTTP Method__: &#x60;GET&#x60;  Grants read access to cash drawer shift information. For example, to call the ListCashDrawerShifts endpoint.
  - CUSTOMERS_READ: __HTTP Method__: &#x60;GET&#x60;  Grants read access to customer information. For example, to call the ListCustomers endpoint.
  - CUSTOMERS_WRITE: __HTTP Method__: &#x60;POST&#x60;, &#x60;PUT&#x60;, &#x60;DELETE&#x60;  Grants write access to customer information. For example, to create and update customer profiles.
  - DEVICE_CREDENTIAL_MANAGEMENT: __HTTP Method__: &#x60;POST&#x60;, &#x60;GET&#x60;  Grants read/write access to device credentials information. For example, to call the CreateDeviceCode endpoint.
  - EMPLOYEES_READ: __HTTP Method__: &#x60;GET&#x60;  Grants read access to employee profile information. For example, to call the Connect v1 Employees API.
  - EMPLOYEES_WRITE: __HTTP Method__: &#x60;POST&#x60;, &#x60;PUT&#x60;, &#x60;DELETE&#x60;  Grants write access to employee profile information. For example, to create and modify employee profiles.
  - INVENTORY_READ: __HTTP Method__: &#x60;GET&#x60;  Grants read access to inventory information. For example, to call the RetrieveInventoryCount endpoint.
  - INVENTORY_WRITE: __HTTP Method__:  &#x60;POST&#x60;, &#x60;PUT&#x60;, &#x60;DELETE&#x60;  Grants write access to inventory information. For example, to call the BatchChangeInventory endpoint.
  - ITEMS_READ: __HTTP Method__: &#x60;GET&#x60;  Grants read access to business and location information. For example, to obtain a location ID for subsequent activity.
  - ITEMS_WRITE: __HTTP Method__: &#x60;POST&#x60;, &#x60;PUT&#x60;, &#x60;DELETE&#x60;  Grants write access to product catalog information. For example, to modify or add to a product catalog.
  - LOYALTY_READ: __HTTP Method__: &#x60;GET&#x60;  Grants read access to loyalty information. For example, to call the ListLoyaltyPrograms endpoint.
  - LOYALTY_WRITE: __HTTP Method__: &#x60;POST&#x60;, &#x60;PUT&#x60;, &#x60;DELETE&#x60;  Grants write access to loyalty information. For example, to call the CreateLoyaltyAccount endpoint.
  - MERCHANT_PROFILE_READ: __HTTP Method__: &#x60;GET&#x60;  Grants read access to business and location information. For example, to obtain a location ID for subsequent activity.
  - ORDERS_READ: __HTTP Method__: &#x60;GET&#x60;  Grants read access to order information. For example, to call the BatchRetrieveOrders endpoint.
  - ORDERS_WRITE: __HTTP Method__: &#x60;POST&#x60;, &#x60;PUT&#x60;, &#x60;DELETE&#x60;  Grants write access to order information. For example, to call the CreateCheckout endpoint.
  - PAYMENTS_READ: __HTTP Method__: &#x60;GET&#x60;  Grants read access to transaction and refund information. For example, to call the RetrieveTransaction endpoint.
  - PAYMENTS_WRITE: __HTTP Method__: &#x60;POST&#x60;, &#x60;PUT&#x60;, &#x60;DELETE&#x60;  Grants write access to transaction and refunds information. For example, to process payments with the Payments or Checkout API.
  - PAYMENTS_WRITE_ADDITIONAL_RECIPIENTS: __HTTP Method__: &#x60;POST&#x60;, &#x60;PUT&#x60;, &#x60;DELETE&#x60;  Allow third party applications to deduct a portion of each transaction amount. __Required__ to use multiparty transaction functionality with the Payments API.
  - PAYMENTS_WRITE_IN_PERSON: __HTTP Method__: &#x60;POST&#x60;, &#x60;PUT&#x60;, &#x60;DELETE&#x60;  Grants write access to payments and refunds information. For example, to process in-person payments.
  - SETTLEMENTS_READ: __HTTP Method__: &#x60;GET&#x60;  Grants read access to settlement (deposit) information. For example, to call the Connect v1 ListSettlements endpoint.
  - TIMECARDS_READ: __HTTP Method__: &#x60;GET&#x60;  Grants read access to employee timecard information. For example, to call the Connect v2 SearchShifts endpoint.
  - TIMECARDS_WRITE: __HTTP Method__: &#x60;POST&#x60;, &#x60;PUT&#x60;, &#x60;DELETE&#x60;  Grants write access to employee shift information. For example, to create and modify employee shifts.
  - TIMECARDS_SETTINGS_READ: __HTTP Method__: &#x60;GET&#x60;  Grants read access to employee timecard settings information. For example, to call the GetBreakType endpoint.
  - TIMECARDS_SETTINGS_WRITE: __HTTP Method__: &#x60;POST&#x60;, &#x60;PUT&#x60;, &#x60;DELETE&#x60;  Grants write access to employee timecard settings information. For example, to call the UpdateBreakType endpoint.

### oauth2ClientSecret

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header


## Pagination of V1 Endpoints

V1 Endpoints return pagination information via HTTP headers. In order to obtain
response headers and extract the `batch_token` parameter you will need to follow
the following steps:

1. Use the full information endpoint methods of each API to get the response HTTP
Headers. They are named as their simple counterpart with a `WithHttpInfo` suffix.
Hence `listEmployeeRoles` would be called `listEmployeeRolesWithHttpInfo`. This
method returns a `CompleteResponse` object with the response data deserialized along
with a helper to retrieve the token if present.

2. Use `var batchToken = completeResponse.batch_token;`
to extract the token and proceed to get the following page if a token is present.

### Example

```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = "YOUR ACCESS TOKEN";


var api = new SquareConnect.V1EmployeesApi();

var opts = {
  order: "order_example",
  limit: 56,
  batch_token: null
}

function getAllEmployeeRoles(batch_token){
  if (batch_token) {
    api.listEmployeeRolesWithHttpInfo(opts).then(function(resp) {
       var batch_token = resp.batch_token;
       opts['batch_token'] = batch_token;
       getAllEmployeeRoles(token);
    }, function(error) {
      console.error(error);
    });
  }
}

getAllEmployeeRoles(true);
```

## Contributing

Send bug reports, feature requests, and code contributions to the [API
specifications repository](https://github.com/square/connect-api-specification),
as this repository contains only the generated SDK code.

## License

```
Copyright 2017 Square, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```


[//]: # "Link anchor definitions"
[Square Logo]: https://docs.connect.squareup.com/images/github/github-square-logo.svg
