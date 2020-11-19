![Square logo]

# Square Connect Node SDK

---

[![Build Status](https://travis-ci.org/square/connect-nodejs-sdk.svg?branch=master)](https://travis-ci.org/square/connect-nodejs-sdk)
[![npm version](https://badge.fury.io/js/square-connect.svg)](https://badge.fury.io/js/square-connect)
[![Apache-2 license](https://img.shields.io/badge/license-Apache2-brightgreen.svg)](https://www.apache.org/licenses/LICENSE-2.0)
==================
## NOTICE: Square Connect Node.js SDK deprecated
This Square Connect SDK will enter a security maintenance phase in Q4 2020 and will be RETIRED (EOL) in Q2 2021. In the security
maintenance phase, this SDK will continue to receive support and security patches but will no longer receive bug fixes or product
updates. Once it is retired, support and security patches will no longer be available.  A new SDK, more bespoke to the language, will be available once this SDK enters its security maintenance phase.
The SDK itself will continue to work indefinitely until such time that the underlying APIs are retired at which point portions of the SDK may stop functioning.  For a full list of API retirement dates, please see our [Square API Lifecycle documentation](https://developer.squareup.com/docs/build-basics/api-lifecycle#deprecated-apis).

| Security Maintenance | New SDK Release | Retired (EOL)  |
| ------------- |-------------| -----|
| Q4, 2020      | Q4, 2020 | Q2, 2021 |

**If you have feedback about the new SDKs, or just want to talk to other Square Developers, request an invite to the new [slack community for Square Developers](https://squ.re/2Hks3YE)**


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
*SquareConnect.ApplePayApi* | [**registerDomain**](ApplePayApi.md#registerDomain) | **POST** /v2/apple-pay/domains | RegisterDomain
*SquareConnect.BankAccountsApi* | [**getBankAccount**](BankAccountsApi.md#getBankAccount) | **GET** /v2/bank-accounts/{bank_account_id} | GetBankAccount
*SquareConnect.BankAccountsApi* | [**getBankAccountByV1Id**](BankAccountsApi.md#getBankAccountByV1Id) | **GET** /v2/bank-accounts/by-v1-id/{v1_bank_account_id} | GetBankAccountByV1Id
*SquareConnect.BankAccountsApi* | [**listBankAccounts**](BankAccountsApi.md#listBankAccounts) | **GET** /v2/bank-accounts | ListBankAccounts
*SquareConnect.BookingsApi* | [**createBooking**](BookingsApi.md#createBooking) | **POST** /v2/bookings | CreateBooking
*SquareConnect.BookingsApi* | [**listTeamMemberBookingProfiles**](BookingsApi.md#listTeamMemberBookingProfiles) | **GET** /v2/bookings/team-member-booking-profiles | ListTeamMemberBookingProfiles
*SquareConnect.BookingsApi* | [**retrieveBooking**](BookingsApi.md#retrieveBooking) | **GET** /v2/bookings/{booking_id} | RetrieveBooking
*SquareConnect.BookingsApi* | [**retrieveBusinessBookingProfile**](BookingsApi.md#retrieveBusinessBookingProfile) | **GET** /v2/bookings/business-booking-profile | RetrieveBusinessBookingProfile
*SquareConnect.BookingsApi* | [**retrieveTeamMemberBookingProfile**](BookingsApi.md#retrieveTeamMemberBookingProfile) | **GET** /v2/bookings/team-member-booking-profiles/{team_member_id} | RetrieveTeamMemberBookingProfile
*SquareConnect.BookingsApi* | [**searchAvailability**](BookingsApi.md#searchAvailability) | **POST** /v2/bookings/availability/search | SearchAvailability
*SquareConnect.BookingsApi* | [**updateBooking**](BookingsApi.md#updateBooking) | **PUT** /v2/bookings/{booking_id} | UpdateBooking
*SquareConnect.CashDrawersApi* | [**listCashDrawerShiftEvents**](CashDrawersApi.md#listCashDrawerShiftEvents) | **GET** /v2/cash-drawers/shifts/{shift_id}/events | ListCashDrawerShiftEvents
*SquareConnect.CashDrawersApi* | [**listCashDrawerShifts**](CashDrawersApi.md#listCashDrawerShifts) | **GET** /v2/cash-drawers/shifts | ListCashDrawerShifts
*SquareConnect.CashDrawersApi* | [**retrieveCashDrawerShift**](CashDrawersApi.md#retrieveCashDrawerShift) | **GET** /v2/cash-drawers/shifts/{shift_id} | RetrieveCashDrawerShift
*SquareConnect.CatalogApi* | [**batchDeleteCatalogObjects**](CatalogApi.md#batchDeleteCatalogObjects) | **POST** /v2/catalog/batch-delete | BatchDeleteCatalogObjects
*SquareConnect.CatalogApi* | [**batchRetrieveCatalogObjects**](CatalogApi.md#batchRetrieveCatalogObjects) | **POST** /v2/catalog/batch-retrieve | BatchRetrieveCatalogObjects
*SquareConnect.CatalogApi* | [**batchUpsertCatalogObjects**](CatalogApi.md#batchUpsertCatalogObjects) | **POST** /v2/catalog/batch-upsert | BatchUpsertCatalogObjects
*SquareConnect.CatalogApi* | [**catalogInfo**](CatalogApi.md#catalogInfo) | **GET** /v2/catalog/info | CatalogInfo
*SquareConnect.CatalogApi* | [**deleteCatalogObject**](CatalogApi.md#deleteCatalogObject) | **DELETE** /v2/catalog/object/{object_id} | DeleteCatalogObject
*SquareConnect.CatalogApi* | [**listCatalog**](CatalogApi.md#listCatalog) | **GET** /v2/catalog/list | ListCatalog
*SquareConnect.CatalogApi* | [**retrieveCatalogObject**](CatalogApi.md#retrieveCatalogObject) | **GET** /v2/catalog/object/{object_id} | RetrieveCatalogObject
*SquareConnect.CatalogApi* | [**searchCatalogItems**](CatalogApi.md#searchCatalogItems) | **POST** /v2/catalog/search-catalog-items | SearchCatalogItems
*SquareConnect.CatalogApi* | [**searchCatalogObjects**](CatalogApi.md#searchCatalogObjects) | **POST** /v2/catalog/search | SearchCatalogObjects
*SquareConnect.CatalogApi* | [**updateItemModifierLists**](CatalogApi.md#updateItemModifierLists) | **POST** /v2/catalog/update-item-modifier-lists | UpdateItemModifierLists
*SquareConnect.CatalogApi* | [**updateItemTaxes**](CatalogApi.md#updateItemTaxes) | **POST** /v2/catalog/update-item-taxes | UpdateItemTaxes
*SquareConnect.CatalogApi* | [**upsertCatalogObject**](CatalogApi.md#upsertCatalogObject) | **POST** /v2/catalog/object | UpsertCatalogObject
*SquareConnect.CheckoutApi* | [**createCheckout**](CheckoutApi.md#createCheckout) | **POST** /v2/locations/{location_id}/checkouts | CreateCheckout
*SquareConnect.CustomerGroupsApi* | [**createCustomerGroup**](CustomerGroupsApi.md#createCustomerGroup) | **POST** /v2/customers/groups | CreateCustomerGroup
*SquareConnect.CustomerGroupsApi* | [**deleteCustomerGroup**](CustomerGroupsApi.md#deleteCustomerGroup) | **DELETE** /v2/customers/groups/{group_id} | DeleteCustomerGroup
*SquareConnect.CustomerGroupsApi* | [**listCustomerGroups**](CustomerGroupsApi.md#listCustomerGroups) | **GET** /v2/customers/groups | ListCustomerGroups
*SquareConnect.CustomerGroupsApi* | [**retrieveCustomerGroup**](CustomerGroupsApi.md#retrieveCustomerGroup) | **GET** /v2/customers/groups/{group_id} | RetrieveCustomerGroup
*SquareConnect.CustomerGroupsApi* | [**updateCustomerGroup**](CustomerGroupsApi.md#updateCustomerGroup) | **PUT** /v2/customers/groups/{group_id} | UpdateCustomerGroup
*SquareConnect.CustomerSegmentsApi* | [**listCustomerSegments**](CustomerSegmentsApi.md#listCustomerSegments) | **GET** /v2/customers/segments | ListCustomerSegments
*SquareConnect.CustomerSegmentsApi* | [**retrieveCustomerSegment**](CustomerSegmentsApi.md#retrieveCustomerSegment) | **GET** /v2/customers/segments/{segment_id} | RetrieveCustomerSegment
*SquareConnect.CustomersApi* | [**addGroupToCustomer**](CustomersApi.md#addGroupToCustomer) | **PUT** /v2/customers/{customer_id}/groups/{group_id} | AddGroupToCustomer
*SquareConnect.CustomersApi* | [**createCustomer**](CustomersApi.md#createCustomer) | **POST** /v2/customers | CreateCustomer
*SquareConnect.CustomersApi* | [**createCustomerCard**](CustomersApi.md#createCustomerCard) | **POST** /v2/customers/{customer_id}/cards | CreateCustomerCard
*SquareConnect.CustomersApi* | [**deleteCustomer**](CustomersApi.md#deleteCustomer) | **DELETE** /v2/customers/{customer_id} | DeleteCustomer
*SquareConnect.CustomersApi* | [**deleteCustomerCard**](CustomersApi.md#deleteCustomerCard) | **DELETE** /v2/customers/{customer_id}/cards/{card_id} | DeleteCustomerCard
*SquareConnect.CustomersApi* | [**listCustomers**](CustomersApi.md#listCustomers) | **GET** /v2/customers | ListCustomers
*SquareConnect.CustomersApi* | [**removeGroupFromCustomer**](CustomersApi.md#removeGroupFromCustomer) | **DELETE** /v2/customers/{customer_id}/groups/{group_id} | RemoveGroupFromCustomer
*SquareConnect.CustomersApi* | [**retrieveCustomer**](CustomersApi.md#retrieveCustomer) | **GET** /v2/customers/{customer_id} | RetrieveCustomer
*SquareConnect.CustomersApi* | [**searchCustomers**](CustomersApi.md#searchCustomers) | **POST** /v2/customers/search | SearchCustomers
*SquareConnect.CustomersApi* | [**updateCustomer**](CustomersApi.md#updateCustomer) | **PUT** /v2/customers/{customer_id} | UpdateCustomer
*SquareConnect.DevicesApi* | [**createDeviceCode**](DevicesApi.md#createDeviceCode) | **POST** /v2/devices/codes | CreateDeviceCode
*SquareConnect.DevicesApi* | [**getDeviceCode**](DevicesApi.md#getDeviceCode) | **GET** /v2/devices/codes/{id} | GetDeviceCode
*SquareConnect.DevicesApi* | [**listDeviceCodes**](DevicesApi.md#listDeviceCodes) | **GET** /v2/devices/codes | ListDeviceCodes
*SquareConnect.DisputesApi* | [**acceptDispute**](DisputesApi.md#acceptDispute) | **POST** /v2/disputes/{dispute_id}/accept | AcceptDispute
*SquareConnect.DisputesApi* | [**createDisputeEvidenceText**](DisputesApi.md#createDisputeEvidenceText) | **POST** /v2/disputes/{dispute_id}/evidence_text | CreateDisputeEvidenceText
*SquareConnect.DisputesApi* | [**listDisputeEvidence**](DisputesApi.md#listDisputeEvidence) | **GET** /v2/disputes/{dispute_id}/evidence | ListDisputeEvidence
*SquareConnect.DisputesApi* | [**listDisputes**](DisputesApi.md#listDisputes) | **GET** /v2/disputes | ListDisputes
*SquareConnect.DisputesApi* | [**removeDisputeEvidence**](DisputesApi.md#removeDisputeEvidence) | **DELETE** /v2/disputes/{dispute_id}/evidence/{evidence_id} | RemoveDisputeEvidence
*SquareConnect.DisputesApi* | [**retrieveDispute**](DisputesApi.md#retrieveDispute) | **GET** /v2/disputes/{dispute_id} | RetrieveDispute
*SquareConnect.DisputesApi* | [**retrieveDisputeEvidence**](DisputesApi.md#retrieveDisputeEvidence) | **GET** /v2/disputes/{dispute_id}/evidence/{evidence_id} | RetrieveDisputeEvidence
*SquareConnect.DisputesApi* | [**submitEvidence**](DisputesApi.md#submitEvidence) | **POST** /v2/disputes/{dispute_id}/submit-evidence | SubmitEvidence
*SquareConnect.EmployeesApi* | [**listEmployees**](EmployeesApi.md#listEmployees) | **GET** /v2/employees | ListEmployees
*SquareConnect.EmployeesApi* | [**retrieveEmployee**](EmployeesApi.md#retrieveEmployee) | **GET** /v2/employees/{id} | RetrieveEmployee
*SquareConnect.InventoryApi* | [**batchChangeInventory**](InventoryApi.md#batchChangeInventory) | **POST** /v2/inventory/batch-change | BatchChangeInventory
*SquareConnect.InventoryApi* | [**batchRetrieveInventoryChanges**](InventoryApi.md#batchRetrieveInventoryChanges) | **POST** /v2/inventory/batch-retrieve-changes | BatchRetrieveInventoryChanges
*SquareConnect.InventoryApi* | [**batchRetrieveInventoryCounts**](InventoryApi.md#batchRetrieveInventoryCounts) | **POST** /v2/inventory/batch-retrieve-counts | BatchRetrieveInventoryCounts
*SquareConnect.InventoryApi* | [**retrieveInventoryAdjustment**](InventoryApi.md#retrieveInventoryAdjustment) | **GET** /v2/inventory/adjustment/{adjustment_id} | RetrieveInventoryAdjustment
*SquareConnect.InventoryApi* | [**retrieveInventoryChanges**](InventoryApi.md#retrieveInventoryChanges) | **GET** /v2/inventory/{catalog_object_id}/changes | RetrieveInventoryChanges
*SquareConnect.InventoryApi* | [**retrieveInventoryCount**](InventoryApi.md#retrieveInventoryCount) | **GET** /v2/inventory/{catalog_object_id} | RetrieveInventoryCount
*SquareConnect.InventoryApi* | [**retrieveInventoryPhysicalCount**](InventoryApi.md#retrieveInventoryPhysicalCount) | **GET** /v2/inventory/physical-count/{physical_count_id} | RetrieveInventoryPhysicalCount
*SquareConnect.InvoicesApi* | [**cancelInvoice**](InvoicesApi.md#cancelInvoice) | **POST** /v2/invoices/{invoice_id}/cancel | CancelInvoice
*SquareConnect.InvoicesApi* | [**createInvoice**](InvoicesApi.md#createInvoice) | **POST** /v2/invoices | CreateInvoice
*SquareConnect.InvoicesApi* | [**deleteInvoice**](InvoicesApi.md#deleteInvoice) | **DELETE** /v2/invoices/{invoice_id} | DeleteInvoice
*SquareConnect.InvoicesApi* | [**getInvoice**](InvoicesApi.md#getInvoice) | **GET** /v2/invoices/{invoice_id} | GetInvoice
*SquareConnect.InvoicesApi* | [**listInvoices**](InvoicesApi.md#listInvoices) | **GET** /v2/invoices | ListInvoices
*SquareConnect.InvoicesApi* | [**publishInvoice**](InvoicesApi.md#publishInvoice) | **POST** /v2/invoices/{invoice_id}/publish | PublishInvoice
*SquareConnect.InvoicesApi* | [**searchInvoices**](InvoicesApi.md#searchInvoices) | **POST** /v2/invoices/search | SearchInvoices
*SquareConnect.InvoicesApi* | [**updateInvoice**](InvoicesApi.md#updateInvoice) | **PUT** /v2/invoices/{invoice_id} | UpdateInvoice
*SquareConnect.LaborApi* | [**createBreakType**](LaborApi.md#createBreakType) | **POST** /v2/labor/break-types | CreateBreakType
*SquareConnect.LaborApi* | [**createShift**](LaborApi.md#createShift) | **POST** /v2/labor/shifts | CreateShift
*SquareConnect.LaborApi* | [**deleteBreakType**](LaborApi.md#deleteBreakType) | **DELETE** /v2/labor/break-types/{id} | DeleteBreakType
*SquareConnect.LaborApi* | [**deleteShift**](LaborApi.md#deleteShift) | **DELETE** /v2/labor/shifts/{id} | DeleteShift
*SquareConnect.LaborApi* | [**getBreakType**](LaborApi.md#getBreakType) | **GET** /v2/labor/break-types/{id} | GetBreakType
*SquareConnect.LaborApi* | [**getEmployeeWage**](LaborApi.md#getEmployeeWage) | **GET** /v2/labor/employee-wages/{id} | GetEmployeeWage
*SquareConnect.LaborApi* | [**getShift**](LaborApi.md#getShift) | **GET** /v2/labor/shifts/{id} | GetShift
*SquareConnect.LaborApi* | [**getTeamMemberWage**](LaborApi.md#getTeamMemberWage) | **GET** /v2/labor/team-member-wages/{id} | GetTeamMemberWage
*SquareConnect.LaborApi* | [**listBreakTypes**](LaborApi.md#listBreakTypes) | **GET** /v2/labor/break-types | ListBreakTypes
*SquareConnect.LaborApi* | [**listEmployeeWages**](LaborApi.md#listEmployeeWages) | **GET** /v2/labor/employee-wages | ListEmployeeWages
*SquareConnect.LaborApi* | [**listTeamMemberWages**](LaborApi.md#listTeamMemberWages) | **GET** /v2/labor/team-member-wages | ListTeamMemberWages
*SquareConnect.LaborApi* | [**listWorkweekConfigs**](LaborApi.md#listWorkweekConfigs) | **GET** /v2/labor/workweek-configs | ListWorkweekConfigs
*SquareConnect.LaborApi* | [**searchShifts**](LaborApi.md#searchShifts) | **POST** /v2/labor/shifts/search | SearchShifts
*SquareConnect.LaborApi* | [**updateBreakType**](LaborApi.md#updateBreakType) | **PUT** /v2/labor/break-types/{id} | UpdateBreakType
*SquareConnect.LaborApi* | [**updateShift**](LaborApi.md#updateShift) | **PUT** /v2/labor/shifts/{id} | UpdateShift
*SquareConnect.LaborApi* | [**updateWorkweekConfig**](LaborApi.md#updateWorkweekConfig) | **PUT** /v2/labor/workweek-configs/{id} | UpdateWorkweekConfig
*SquareConnect.LocationsApi* | [**createLocation**](LocationsApi.md#createLocation) | **POST** /v2/locations | CreateLocation
*SquareConnect.LocationsApi* | [**listLocations**](LocationsApi.md#listLocations) | **GET** /v2/locations | ListLocations
*SquareConnect.LocationsApi* | [**retrieveLocation**](LocationsApi.md#retrieveLocation) | **GET** /v2/locations/{location_id} | RetrieveLocation
*SquareConnect.LocationsApi* | [**updateLocation**](LocationsApi.md#updateLocation) | **PUT** /v2/locations/{location_id} | UpdateLocation
*SquareConnect.LoyaltyApi* | [**accumulateLoyaltyPoints**](LoyaltyApi.md#accumulateLoyaltyPoints) | **POST** /v2/loyalty/accounts/{account_id}/accumulate | AccumulateLoyaltyPoints
*SquareConnect.LoyaltyApi* | [**adjustLoyaltyPoints**](LoyaltyApi.md#adjustLoyaltyPoints) | **POST** /v2/loyalty/accounts/{account_id}/adjust | AdjustLoyaltyPoints
*SquareConnect.LoyaltyApi* | [**calculateLoyaltyPoints**](LoyaltyApi.md#calculateLoyaltyPoints) | **POST** /v2/loyalty/programs/{program_id}/calculate | CalculateLoyaltyPoints
*SquareConnect.LoyaltyApi* | [**createLoyaltyAccount**](LoyaltyApi.md#createLoyaltyAccount) | **POST** /v2/loyalty/accounts | CreateLoyaltyAccount
*SquareConnect.LoyaltyApi* | [**createLoyaltyReward**](LoyaltyApi.md#createLoyaltyReward) | **POST** /v2/loyalty/rewards | CreateLoyaltyReward
*SquareConnect.LoyaltyApi* | [**deleteLoyaltyReward**](LoyaltyApi.md#deleteLoyaltyReward) | **DELETE** /v2/loyalty/rewards/{reward_id} | DeleteLoyaltyReward
*SquareConnect.LoyaltyApi* | [**listLoyaltyPrograms**](LoyaltyApi.md#listLoyaltyPrograms) | **GET** /v2/loyalty/programs | ListLoyaltyPrograms
*SquareConnect.LoyaltyApi* | [**redeemLoyaltyReward**](LoyaltyApi.md#redeemLoyaltyReward) | **POST** /v2/loyalty/rewards/{reward_id}/redeem | RedeemLoyaltyReward
*SquareConnect.LoyaltyApi* | [**retrieveLoyaltyAccount**](LoyaltyApi.md#retrieveLoyaltyAccount) | **GET** /v2/loyalty/accounts/{account_id} | RetrieveLoyaltyAccount
*SquareConnect.LoyaltyApi* | [**retrieveLoyaltyReward**](LoyaltyApi.md#retrieveLoyaltyReward) | **GET** /v2/loyalty/rewards/{reward_id} | RetrieveLoyaltyReward
*SquareConnect.LoyaltyApi* | [**searchLoyaltyAccounts**](LoyaltyApi.md#searchLoyaltyAccounts) | **POST** /v2/loyalty/accounts/search | SearchLoyaltyAccounts
*SquareConnect.LoyaltyApi* | [**searchLoyaltyEvents**](LoyaltyApi.md#searchLoyaltyEvents) | **POST** /v2/loyalty/events/search | SearchLoyaltyEvents
*SquareConnect.LoyaltyApi* | [**searchLoyaltyRewards**](LoyaltyApi.md#searchLoyaltyRewards) | **POST** /v2/loyalty/rewards/search | SearchLoyaltyRewards
*SquareConnect.MerchantsApi* | [**listMerchants**](MerchantsApi.md#listMerchants) | **GET** /v2/merchants | ListMerchants
*SquareConnect.MerchantsApi* | [**retrieveMerchant**](MerchantsApi.md#retrieveMerchant) | **GET** /v2/merchants/{merchant_id} | RetrieveMerchant
*SquareConnect.MobileAuthorizationApi* | [**createMobileAuthorizationCode**](MobileAuthorizationApi.md#createMobileAuthorizationCode) | **POST** /mobile/authorization-code | CreateMobileAuthorizationCode
*SquareConnect.OAuthApi* | [**obtainToken**](OAuthApi.md#obtainToken) | **POST** /oauth2/token | ObtainToken
*SquareConnect.OAuthApi* | [**renewToken**](OAuthApi.md#renewToken) | **POST** /oauth2/clients/{client_id}/access-token/renew | RenewToken
*SquareConnect.OAuthApi* | [**revokeToken**](OAuthApi.md#revokeToken) | **POST** /oauth2/revoke | RevokeToken
*SquareConnect.OrdersApi* | [**batchRetrieveOrders**](OrdersApi.md#batchRetrieveOrders) | **POST** /v2/orders/batch-retrieve | BatchRetrieveOrders
*SquareConnect.OrdersApi* | [**calculateOrder**](OrdersApi.md#calculateOrder) | **POST** /v2/orders/calculate | CalculateOrder
*SquareConnect.OrdersApi* | [**createOrder**](OrdersApi.md#createOrder) | **POST** /v2/orders | CreateOrder
*SquareConnect.OrdersApi* | [**payOrder**](OrdersApi.md#payOrder) | **POST** /v2/orders/{order_id}/pay | PayOrder
*SquareConnect.OrdersApi* | [**retrieveOrder**](OrdersApi.md#retrieveOrder) | **GET** /v2/orders/{order_id} | RetrieveOrder
*SquareConnect.OrdersApi* | [**searchOrders**](OrdersApi.md#searchOrders) | **POST** /v2/orders/search | SearchOrders
*SquareConnect.OrdersApi* | [**updateOrder**](OrdersApi.md#updateOrder) | **PUT** /v2/orders/{order_id} | UpdateOrder
*SquareConnect.PaymentsApi* | [**cancelPayment**](PaymentsApi.md#cancelPayment) | **POST** /v2/payments/{payment_id}/cancel | CancelPayment
*SquareConnect.PaymentsApi* | [**cancelPaymentByIdempotencyKey**](PaymentsApi.md#cancelPaymentByIdempotencyKey) | **POST** /v2/payments/cancel | CancelPaymentByIdempotencyKey
*SquareConnect.PaymentsApi* | [**completePayment**](PaymentsApi.md#completePayment) | **POST** /v2/payments/{payment_id}/complete | CompletePayment
*SquareConnect.PaymentsApi* | [**createPayment**](PaymentsApi.md#createPayment) | **POST** /v2/payments | CreatePayment
*SquareConnect.PaymentsApi* | [**getPayment**](PaymentsApi.md#getPayment) | **GET** /v2/payments/{payment_id} | GetPayment
*SquareConnect.PaymentsApi* | [**listPayments**](PaymentsApi.md#listPayments) | **GET** /v2/payments | ListPayments
*SquareConnect.RefundsApi* | [**getPaymentRefund**](RefundsApi.md#getPaymentRefund) | **GET** /v2/refunds/{refund_id} | GetPaymentRefund
*SquareConnect.RefundsApi* | [**listPaymentRefunds**](RefundsApi.md#listPaymentRefunds) | **GET** /v2/refunds | ListPaymentRefunds
*SquareConnect.RefundsApi* | [**refundPayment**](RefundsApi.md#refundPayment) | **POST** /v2/refunds | RefundPayment
*SquareConnect.SubscriptionsApi* | [**cancelSubscription**](SubscriptionsApi.md#cancelSubscription) | **POST** /v2/subscriptions/{subscription_id}/cancel | CancelSubscription
*SquareConnect.SubscriptionsApi* | [**createSubscription**](SubscriptionsApi.md#createSubscription) | **POST** /v2/subscriptions | CreateSubscription
*SquareConnect.SubscriptionsApi* | [**listSubscriptionEvents**](SubscriptionsApi.md#listSubscriptionEvents) | **GET** /v2/subscriptions/{subscription_id}/events | ListSubscriptionEvents
*SquareConnect.SubscriptionsApi* | [**retrieveSubscription**](SubscriptionsApi.md#retrieveSubscription) | **GET** /v2/subscriptions/{subscription_id} | RetrieveSubscription
*SquareConnect.SubscriptionsApi* | [**searchSubscriptions**](SubscriptionsApi.md#searchSubscriptions) | **POST** /v2/subscriptions/search | SearchSubscriptions
*SquareConnect.SubscriptionsApi* | [**updateSubscription**](SubscriptionsApi.md#updateSubscription) | **PUT** /v2/subscriptions/{subscription_id} | UpdateSubscription
*SquareConnect.TeamApi* | [**bulkCreateTeamMembers**](TeamApi.md#bulkCreateTeamMembers) | **POST** /v2/team-members/bulk-create | BulkCreateTeamMembers
*SquareConnect.TeamApi* | [**bulkUpdateTeamMembers**](TeamApi.md#bulkUpdateTeamMembers) | **POST** /v2/team-members/bulk-update | BulkUpdateTeamMembers
*SquareConnect.TeamApi* | [**createTeamMember**](TeamApi.md#createTeamMember) | **POST** /v2/team-members | CreateTeamMember
*SquareConnect.TeamApi* | [**retrieveTeamMember**](TeamApi.md#retrieveTeamMember) | **GET** /v2/team-members/{team_member_id} | RetrieveTeamMember
*SquareConnect.TeamApi* | [**retrieveWageSetting**](TeamApi.md#retrieveWageSetting) | **GET** /v2/team-members/{team_member_id}/wage-setting | RetrieveWageSetting
*SquareConnect.TeamApi* | [**searchTeamMembers**](TeamApi.md#searchTeamMembers) | **POST** /v2/team-members/search | SearchTeamMembers
*SquareConnect.TeamApi* | [**updateTeamMember**](TeamApi.md#updateTeamMember) | **PUT** /v2/team-members/{team_member_id} | UpdateTeamMember
*SquareConnect.TeamApi* | [**updateWageSetting**](TeamApi.md#updateWageSetting) | **PUT** /v2/team-members/{team_member_id}/wage-setting | UpdateWageSetting
*SquareConnect.TerminalApi* | [**cancelTerminalCheckout**](TerminalApi.md#cancelTerminalCheckout) | **POST** /v2/terminals/checkouts/{checkout_id}/cancel | CancelTerminalCheckout
*SquareConnect.TerminalApi* | [**cancelTerminalRefund**](TerminalApi.md#cancelTerminalRefund) | **POST** /v2/terminals/refunds/{terminal_refund_id}/cancel | CancelTerminalRefund
*SquareConnect.TerminalApi* | [**createTerminalCheckout**](TerminalApi.md#createTerminalCheckout) | **POST** /v2/terminals/checkouts | CreateTerminalCheckout
*SquareConnect.TerminalApi* | [**createTerminalRefund**](TerminalApi.md#createTerminalRefund) | **POST** /v2/terminals/refunds | CreateTerminalRefund
*SquareConnect.TerminalApi* | [**getTerminalCheckout**](TerminalApi.md#getTerminalCheckout) | **GET** /v2/terminals/checkouts/{checkout_id} | GetTerminalCheckout
*SquareConnect.TerminalApi* | [**getTerminalRefund**](TerminalApi.md#getTerminalRefund) | **GET** /v2/terminals/refunds/{terminal_refund_id} | GetTerminalRefund
*SquareConnect.TerminalApi* | [**searchTerminalCheckouts**](TerminalApi.md#searchTerminalCheckouts) | **POST** /v2/terminals/checkouts/search | SearchTerminalCheckouts
*SquareConnect.TerminalApi* | [**searchTerminalRefunds**](TerminalApi.md#searchTerminalRefunds) | **POST** /v2/terminals/refunds/search | SearchTerminalRefunds
*SquareConnect.TransactionsApi* | [**captureTransaction**](TransactionsApi.md#captureTransaction) | **POST** /v2/locations/{location_id}/transactions/{transaction_id}/capture | CaptureTransaction
*SquareConnect.TransactionsApi* | [**charge**](TransactionsApi.md#charge) | **POST** /v2/locations/{location_id}/transactions | Charge
*SquareConnect.TransactionsApi* | [**createRefund**](TransactionsApi.md#createRefund) | **POST** /v2/locations/{location_id}/transactions/{transaction_id}/refund | CreateRefund
*SquareConnect.TransactionsApi* | [**listRefunds**](TransactionsApi.md#listRefunds) | **GET** /v2/locations/{location_id}/refunds | ListRefunds
*SquareConnect.TransactionsApi* | [**listTransactions**](TransactionsApi.md#listTransactions) | **GET** /v2/locations/{location_id}/transactions | ListTransactions
*SquareConnect.TransactionsApi* | [**retrieveTransaction**](TransactionsApi.md#retrieveTransaction) | **GET** /v2/locations/{location_id}/transactions/{transaction_id} | RetrieveTransaction
*SquareConnect.TransactionsApi* | [**voidTransaction**](TransactionsApi.md#voidTransaction) | **POST** /v2/locations/{location_id}/transactions/{transaction_id}/void | VoidTransaction
*SquareConnect.V1EmployeesApi* | [**createEmployee**](V1EmployeesApi.md#createEmployee) | **POST** /v1/me/employees | CreateEmployee
*SquareConnect.V1EmployeesApi* | [**createEmployeeRole**](V1EmployeesApi.md#createEmployeeRole) | **POST** /v1/me/roles | CreateEmployeeRole
*SquareConnect.V1EmployeesApi* | [**createTimecard**](V1EmployeesApi.md#createTimecard) | **POST** /v1/me/timecards | CreateTimecard
*SquareConnect.V1EmployeesApi* | [**deleteTimecard**](V1EmployeesApi.md#deleteTimecard) | **DELETE** /v1/me/timecards/{timecard_id} | DeleteTimecard
*SquareConnect.V1EmployeesApi* | [**listCashDrawerShifts**](V1EmployeesApi.md#listCashDrawerShifts) | **GET** /v1/{location_id}/cash-drawer-shifts | ListCashDrawerShifts
*SquareConnect.V1EmployeesApi* | [**listEmployeeRoles**](V1EmployeesApi.md#listEmployeeRoles) | **GET** /v1/me/roles | ListEmployeeRoles
*SquareConnect.V1EmployeesApi* | [**listEmployees**](V1EmployeesApi.md#listEmployees) | **GET** /v1/me/employees | ListEmployees
*SquareConnect.V1EmployeesApi* | [**listTimecardEvents**](V1EmployeesApi.md#listTimecardEvents) | **GET** /v1/me/timecards/{timecard_id}/events | ListTimecardEvents
*SquareConnect.V1EmployeesApi* | [**listTimecards**](V1EmployeesApi.md#listTimecards) | **GET** /v1/me/timecards | ListTimecards
*SquareConnect.V1EmployeesApi* | [**retrieveCashDrawerShift**](V1EmployeesApi.md#retrieveCashDrawerShift) | **GET** /v1/{location_id}/cash-drawer-shifts/{shift_id} | RetrieveCashDrawerShift
*SquareConnect.V1EmployeesApi* | [**retrieveEmployee**](V1EmployeesApi.md#retrieveEmployee) | **GET** /v1/me/employees/{employee_id} | RetrieveEmployee
*SquareConnect.V1EmployeesApi* | [**retrieveEmployeeRole**](V1EmployeesApi.md#retrieveEmployeeRole) | **GET** /v1/me/roles/{role_id} | RetrieveEmployeeRole
*SquareConnect.V1EmployeesApi* | [**retrieveTimecard**](V1EmployeesApi.md#retrieveTimecard) | **GET** /v1/me/timecards/{timecard_id} | RetrieveTimecard
*SquareConnect.V1EmployeesApi* | [**updateEmployee**](V1EmployeesApi.md#updateEmployee) | **PUT** /v1/me/employees/{employee_id} | UpdateEmployee
*SquareConnect.V1EmployeesApi* | [**updateEmployeeRole**](V1EmployeesApi.md#updateEmployeeRole) | **PUT** /v1/me/roles/{role_id} | UpdateEmployeeRole
*SquareConnect.V1EmployeesApi* | [**updateTimecard**](V1EmployeesApi.md#updateTimecard) | **PUT** /v1/me/timecards/{timecard_id} | UpdateTimecard
*SquareConnect.V1ItemsApi* | [**adjustInventory**](V1ItemsApi.md#adjustInventory) | **POST** /v1/{location_id}/inventory/{variation_id} | AdjustInventory
*SquareConnect.V1ItemsApi* | [**applyFee**](V1ItemsApi.md#applyFee) | **PUT** /v1/{location_id}/items/{item_id}/fees/{fee_id} | ApplyFee
*SquareConnect.V1ItemsApi* | [**applyModifierList**](V1ItemsApi.md#applyModifierList) | **PUT** /v1/{location_id}/items/{item_id}/modifier-lists/{modifier_list_id} | ApplyModifierList
*SquareConnect.V1ItemsApi* | [**createCategory**](V1ItemsApi.md#createCategory) | **POST** /v1/{location_id}/categories | CreateCategory
*SquareConnect.V1ItemsApi* | [**createDiscount**](V1ItemsApi.md#createDiscount) | **POST** /v1/{location_id}/discounts | CreateDiscount
*SquareConnect.V1ItemsApi* | [**createFee**](V1ItemsApi.md#createFee) | **POST** /v1/{location_id}/fees | CreateFee
*SquareConnect.V1ItemsApi* | [**createItem**](V1ItemsApi.md#createItem) | **POST** /v1/{location_id}/items | CreateItem
*SquareConnect.V1ItemsApi* | [**createModifierList**](V1ItemsApi.md#createModifierList) | **POST** /v1/{location_id}/modifier-lists | CreateModifierList
*SquareConnect.V1ItemsApi* | [**createModifierOption**](V1ItemsApi.md#createModifierOption) | **POST** /v1/{location_id}/modifier-lists/{modifier_list_id}/modifier-options | CreateModifierOption
*SquareConnect.V1ItemsApi* | [**createPage**](V1ItemsApi.md#createPage) | **POST** /v1/{location_id}/pages | CreatePage
*SquareConnect.V1ItemsApi* | [**createVariation**](V1ItemsApi.md#createVariation) | **POST** /v1/{location_id}/items/{item_id}/variations | CreateVariation
*SquareConnect.V1ItemsApi* | [**deleteCategory**](V1ItemsApi.md#deleteCategory) | **DELETE** /v1/{location_id}/categories/{category_id} | DeleteCategory
*SquareConnect.V1ItemsApi* | [**deleteDiscount**](V1ItemsApi.md#deleteDiscount) | **DELETE** /v1/{location_id}/discounts/{discount_id} | DeleteDiscount
*SquareConnect.V1ItemsApi* | [**deleteFee**](V1ItemsApi.md#deleteFee) | **DELETE** /v1/{location_id}/fees/{fee_id} | DeleteFee
*SquareConnect.V1ItemsApi* | [**deleteItem**](V1ItemsApi.md#deleteItem) | **DELETE** /v1/{location_id}/items/{item_id} | DeleteItem
*SquareConnect.V1ItemsApi* | [**deleteModifierList**](V1ItemsApi.md#deleteModifierList) | **DELETE** /v1/{location_id}/modifier-lists/{modifier_list_id} | DeleteModifierList
*SquareConnect.V1ItemsApi* | [**deleteModifierOption**](V1ItemsApi.md#deleteModifierOption) | **DELETE** /v1/{location_id}/modifier-lists/{modifier_list_id}/modifier-options/{modifier_option_id} | DeleteModifierOption
*SquareConnect.V1ItemsApi* | [**deletePage**](V1ItemsApi.md#deletePage) | **DELETE** /v1/{location_id}/pages/{page_id} | DeletePage
*SquareConnect.V1ItemsApi* | [**deletePageCell**](V1ItemsApi.md#deletePageCell) | **DELETE** /v1/{location_id}/pages/{page_id}/cells | DeletePageCell
*SquareConnect.V1ItemsApi* | [**deleteVariation**](V1ItemsApi.md#deleteVariation) | **DELETE** /v1/{location_id}/items/{item_id}/variations/{variation_id} | DeleteVariation
*SquareConnect.V1ItemsApi* | [**listCategories**](V1ItemsApi.md#listCategories) | **GET** /v1/{location_id}/categories | ListCategories
*SquareConnect.V1ItemsApi* | [**listDiscounts**](V1ItemsApi.md#listDiscounts) | **GET** /v1/{location_id}/discounts | ListDiscounts
*SquareConnect.V1ItemsApi* | [**listFees**](V1ItemsApi.md#listFees) | **GET** /v1/{location_id}/fees | ListFees
*SquareConnect.V1ItemsApi* | [**listInventory**](V1ItemsApi.md#listInventory) | **GET** /v1/{location_id}/inventory | ListInventory
*SquareConnect.V1ItemsApi* | [**listItems**](V1ItemsApi.md#listItems) | **GET** /v1/{location_id}/items | ListItems
*SquareConnect.V1ItemsApi* | [**listModifierLists**](V1ItemsApi.md#listModifierLists) | **GET** /v1/{location_id}/modifier-lists | ListModifierLists
*SquareConnect.V1ItemsApi* | [**listPages**](V1ItemsApi.md#listPages) | **GET** /v1/{location_id}/pages | ListPages
*SquareConnect.V1ItemsApi* | [**removeFee**](V1ItemsApi.md#removeFee) | **DELETE** /v1/{location_id}/items/{item_id}/fees/{fee_id} | RemoveFee
*SquareConnect.V1ItemsApi* | [**removeModifierList**](V1ItemsApi.md#removeModifierList) | **DELETE** /v1/{location_id}/items/{item_id}/modifier-lists/{modifier_list_id} | RemoveModifierList
*SquareConnect.V1ItemsApi* | [**retrieveItem**](V1ItemsApi.md#retrieveItem) | **GET** /v1/{location_id}/items/{item_id} | RetrieveItem
*SquareConnect.V1ItemsApi* | [**retrieveModifierList**](V1ItemsApi.md#retrieveModifierList) | **GET** /v1/{location_id}/modifier-lists/{modifier_list_id} | RetrieveModifierList
*SquareConnect.V1ItemsApi* | [**updateCategory**](V1ItemsApi.md#updateCategory) | **PUT** /v1/{location_id}/categories/{category_id} | UpdateCategory
*SquareConnect.V1ItemsApi* | [**updateDiscount**](V1ItemsApi.md#updateDiscount) | **PUT** /v1/{location_id}/discounts/{discount_id} | UpdateDiscount
*SquareConnect.V1ItemsApi* | [**updateFee**](V1ItemsApi.md#updateFee) | **PUT** /v1/{location_id}/fees/{fee_id} | UpdateFee
*SquareConnect.V1ItemsApi* | [**updateItem**](V1ItemsApi.md#updateItem) | **PUT** /v1/{location_id}/items/{item_id} | UpdateItem
*SquareConnect.V1ItemsApi* | [**updateModifierList**](V1ItemsApi.md#updateModifierList) | **PUT** /v1/{location_id}/modifier-lists/{modifier_list_id} | UpdateModifierList
*SquareConnect.V1ItemsApi* | [**updateModifierOption**](V1ItemsApi.md#updateModifierOption) | **PUT** /v1/{location_id}/modifier-lists/{modifier_list_id}/modifier-options/{modifier_option_id} | UpdateModifierOption
*SquareConnect.V1ItemsApi* | [**updatePage**](V1ItemsApi.md#updatePage) | **PUT** /v1/{location_id}/pages/{page_id} | UpdatePage
*SquareConnect.V1ItemsApi* | [**updatePageCell**](V1ItemsApi.md#updatePageCell) | **PUT** /v1/{location_id}/pages/{page_id}/cells | UpdatePageCell
*SquareConnect.V1ItemsApi* | [**updateVariation**](V1ItemsApi.md#updateVariation) | **PUT** /v1/{location_id}/items/{item_id}/variations/{variation_id} | UpdateVariation
*SquareConnect.V1LocationsApi* | [**listLocations**](V1LocationsApi.md#listLocations) | **GET** /v1/me/locations | ListLocations
*SquareConnect.V1LocationsApi* | [**retrieveBusiness**](V1LocationsApi.md#retrieveBusiness) | **GET** /v1/me | RetrieveBusiness
*SquareConnect.V1TransactionsApi* | [**createRefund**](V1TransactionsApi.md#createRefund) | **POST** /v1/{location_id}/refunds | CreateRefund
*SquareConnect.V1TransactionsApi* | [**listBankAccounts**](V1TransactionsApi.md#listBankAccounts) | **GET** /v1/{location_id}/bank-accounts | ListBankAccounts
*SquareConnect.V1TransactionsApi* | [**listOrders**](V1TransactionsApi.md#listOrders) | **GET** /v1/{location_id}/orders | ListOrders
*SquareConnect.V1TransactionsApi* | [**listPayments**](V1TransactionsApi.md#listPayments) | **GET** /v1/{location_id}/payments | ListPayments
*SquareConnect.V1TransactionsApi* | [**listRefunds**](V1TransactionsApi.md#listRefunds) | **GET** /v1/{location_id}/refunds | ListRefunds
*SquareConnect.V1TransactionsApi* | [**listSettlements**](V1TransactionsApi.md#listSettlements) | **GET** /v1/{location_id}/settlements | ListSettlements
*SquareConnect.V1TransactionsApi* | [**retrieveBankAccount**](V1TransactionsApi.md#retrieveBankAccount) | **GET** /v1/{location_id}/bank-accounts/{bank_account_id} | RetrieveBankAccount
*SquareConnect.V1TransactionsApi* | [**retrieveOrder**](V1TransactionsApi.md#retrieveOrder) | **GET** /v1/{location_id}/orders/{order_id} | RetrieveOrder
*SquareConnect.V1TransactionsApi* | [**retrievePayment**](V1TransactionsApi.md#retrievePayment) | **GET** /v1/{location_id}/payments/{payment_id} | RetrievePayment
*SquareConnect.V1TransactionsApi* | [**retrieveSettlement**](V1TransactionsApi.md#retrieveSettlement) | **GET** /v1/{location_id}/settlements/{settlement_id} | RetrieveSettlement
*SquareConnect.V1TransactionsApi* | [**updateOrder**](V1TransactionsApi.md#updateOrder) | **PUT** /v1/{location_id}/orders/{order_id} | UpdateOrder


## Documentation for Models

 - [SquareConnect.AcceptDisputeRequest](AcceptDisputeRequest.md)
 - [SquareConnect.AcceptDisputeResponse](AcceptDisputeResponse.md)
 - [SquareConnect.AccumulateLoyaltyPointsRequest](AccumulateLoyaltyPointsRequest.md)
 - [SquareConnect.AccumulateLoyaltyPointsResponse](AccumulateLoyaltyPointsResponse.md)
 - [SquareConnect.ActionCancelReason](ActionCancelReason.md)
 - [SquareConnect.AddGroupToCustomerRequest](AddGroupToCustomerRequest.md)
 - [SquareConnect.AddGroupToCustomerResponse](AddGroupToCustomerResponse.md)
 - [SquareConnect.AdditionalRecipient](AdditionalRecipient.md)
 - [SquareConnect.Address](Address.md)
 - [SquareConnect.AdjustLoyaltyPointsRequest](AdjustLoyaltyPointsRequest.md)
 - [SquareConnect.AdjustLoyaltyPointsResponse](AdjustLoyaltyPointsResponse.md)
 - [SquareConnect.AppointmentSegment](AppointmentSegment.md)
 - [SquareConnect.Availability](Availability.md)
 - [SquareConnect.BalancePaymentDetails](BalancePaymentDetails.md)
 - [SquareConnect.BankAccount](BankAccount.md)
 - [SquareConnect.BankAccountStatus](BankAccountStatus.md)
 - [SquareConnect.BankAccountType](BankAccountType.md)
 - [SquareConnect.BatchChangeInventoryRequest](BatchChangeInventoryRequest.md)
 - [SquareConnect.BatchChangeInventoryResponse](BatchChangeInventoryResponse.md)
 - [SquareConnect.BatchDeleteCatalogObjectsRequest](BatchDeleteCatalogObjectsRequest.md)
 - [SquareConnect.BatchDeleteCatalogObjectsResponse](BatchDeleteCatalogObjectsResponse.md)
 - [SquareConnect.BatchRetrieveCatalogObjectsRequest](BatchRetrieveCatalogObjectsRequest.md)
 - [SquareConnect.BatchRetrieveCatalogObjectsResponse](BatchRetrieveCatalogObjectsResponse.md)
 - [SquareConnect.BatchRetrieveInventoryChangesRequest](BatchRetrieveInventoryChangesRequest.md)
 - [SquareConnect.BatchRetrieveInventoryChangesResponse](BatchRetrieveInventoryChangesResponse.md)
 - [SquareConnect.BatchRetrieveInventoryCountsRequest](BatchRetrieveInventoryCountsRequest.md)
 - [SquareConnect.BatchRetrieveInventoryCountsResponse](BatchRetrieveInventoryCountsResponse.md)
 - [SquareConnect.BatchRetrieveOrdersRequest](BatchRetrieveOrdersRequest.md)
 - [SquareConnect.BatchRetrieveOrdersResponse](BatchRetrieveOrdersResponse.md)
 - [SquareConnect.BatchUpsertCatalogObjectsRequest](BatchUpsertCatalogObjectsRequest.md)
 - [SquareConnect.BatchUpsertCatalogObjectsResponse](BatchUpsertCatalogObjectsResponse.md)
 - [SquareConnect.Booking](Booking.md)
 - [SquareConnect.BookingStatus](BookingStatus.md)
 - [SquareConnect.BreakType](BreakType.md)
 - [SquareConnect.BulkCreateTeamMembersRequest](BulkCreateTeamMembersRequest.md)
 - [SquareConnect.BulkCreateTeamMembersResponse](BulkCreateTeamMembersResponse.md)
 - [SquareConnect.BulkUpdateTeamMembersRequest](BulkUpdateTeamMembersRequest.md)
 - [SquareConnect.BulkUpdateTeamMembersResponse](BulkUpdateTeamMembersResponse.md)
 - [SquareConnect.BusinessAppointmentSettings](BusinessAppointmentSettings.md)
 - [SquareConnect.BusinessAppointmentSettingsAlignmentTime](BusinessAppointmentSettingsAlignmentTime.md)
 - [SquareConnect.BusinessAppointmentSettingsBookingLocationType](BusinessAppointmentSettingsBookingLocationType.md)
 - [SquareConnect.BusinessAppointmentSettingsCancellationPolicy](BusinessAppointmentSettingsCancellationPolicy.md)
 - [SquareConnect.BusinessAppointmentSettingsMaxAppointmentsPerDayLimitType](BusinessAppointmentSettingsMaxAppointmentsPerDayLimitType.md)
 - [SquareConnect.BusinessBookingProfile](BusinessBookingProfile.md)
 - [SquareConnect.BusinessBookingProfileBookingPolicy](BusinessBookingProfileBookingPolicy.md)
 - [SquareConnect.BusinessBookingProfileCustomerTimezoneChoice](BusinessBookingProfileCustomerTimezoneChoice.md)
 - [SquareConnect.BusinessHours](BusinessHours.md)
 - [SquareConnect.BusinessHoursPeriod](BusinessHoursPeriod.md)
 - [SquareConnect.CalculateLoyaltyPointsRequest](CalculateLoyaltyPointsRequest.md)
 - [SquareConnect.CalculateLoyaltyPointsResponse](CalculateLoyaltyPointsResponse.md)
 - [SquareConnect.CalculateOrderRequest](CalculateOrderRequest.md)
 - [SquareConnect.CalculateOrderResponse](CalculateOrderResponse.md)
 - [SquareConnect.CancelInvoiceRequest](CancelInvoiceRequest.md)
 - [SquareConnect.CancelInvoiceResponse](CancelInvoiceResponse.md)
 - [SquareConnect.CancelPaymentByIdempotencyKeyRequest](CancelPaymentByIdempotencyKeyRequest.md)
 - [SquareConnect.CancelPaymentByIdempotencyKeyResponse](CancelPaymentByIdempotencyKeyResponse.md)
 - [SquareConnect.CancelPaymentRequest](CancelPaymentRequest.md)
 - [SquareConnect.CancelPaymentResponse](CancelPaymentResponse.md)
 - [SquareConnect.CancelSubscriptionRequest](CancelSubscriptionRequest.md)
 - [SquareConnect.CancelSubscriptionResponse](CancelSubscriptionResponse.md)
 - [SquareConnect.CancelTerminalCheckoutRequest](CancelTerminalCheckoutRequest.md)
 - [SquareConnect.CancelTerminalCheckoutResponse](CancelTerminalCheckoutResponse.md)
 - [SquareConnect.CancelTerminalRefundRequest](CancelTerminalRefundRequest.md)
 - [SquareConnect.CancelTerminalRefundResponse](CancelTerminalRefundResponse.md)
 - [SquareConnect.CaptureTransactionRequest](CaptureTransactionRequest.md)
 - [SquareConnect.CaptureTransactionResponse](CaptureTransactionResponse.md)
 - [SquareConnect.Card](Card.md)
 - [SquareConnect.CardBrand](CardBrand.md)
 - [SquareConnect.CardPaymentDetails](CardPaymentDetails.md)
 - [SquareConnect.CardPrepaidType](CardPrepaidType.md)
 - [SquareConnect.CardSquareProduct](CardSquareProduct.md)
 - [SquareConnect.CardType](CardType.md)
 - [SquareConnect.CashDrawerDevice](CashDrawerDevice.md)
 - [SquareConnect.CashDrawerEventType](CashDrawerEventType.md)
 - [SquareConnect.CashDrawerShift](CashDrawerShift.md)
 - [SquareConnect.CashDrawerShiftEvent](CashDrawerShiftEvent.md)
 - [SquareConnect.CashDrawerShiftState](CashDrawerShiftState.md)
 - [SquareConnect.CashDrawerShiftSummary](CashDrawerShiftSummary.md)
 - [SquareConnect.CatalogCategory](CatalogCategory.md)
 - [SquareConnect.CatalogCustomAttributeDefinition](CatalogCustomAttributeDefinition.md)
 - [SquareConnect.CatalogCustomAttributeDefinitionAppVisibility](CatalogCustomAttributeDefinitionAppVisibility.md)
 - [SquareConnect.CatalogCustomAttributeDefinitionNumberConfig](CatalogCustomAttributeDefinitionNumberConfig.md)
 - [SquareConnect.CatalogCustomAttributeDefinitionSelectionConfig](CatalogCustomAttributeDefinitionSelectionConfig.md)
 - [SquareConnect.CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection](CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection.md)
 - [SquareConnect.CatalogCustomAttributeDefinitionSellerVisibility](CatalogCustomAttributeDefinitionSellerVisibility.md)
 - [SquareConnect.CatalogCustomAttributeDefinitionStringConfig](CatalogCustomAttributeDefinitionStringConfig.md)
 - [SquareConnect.CatalogCustomAttributeDefinitionType](CatalogCustomAttributeDefinitionType.md)
 - [SquareConnect.CatalogCustomAttributeValue](CatalogCustomAttributeValue.md)
 - [SquareConnect.CatalogDiscount](CatalogDiscount.md)
 - [SquareConnect.CatalogDiscountModifyTaxBasis](CatalogDiscountModifyTaxBasis.md)
 - [SquareConnect.CatalogDiscountType](CatalogDiscountType.md)
 - [SquareConnect.CatalogIdMapping](CatalogIdMapping.md)
 - [SquareConnect.CatalogImage](CatalogImage.md)
 - [SquareConnect.CatalogInfoRequest](CatalogInfoRequest.md)
 - [SquareConnect.CatalogInfoResponse](CatalogInfoResponse.md)
 - [SquareConnect.CatalogInfoResponseLimits](CatalogInfoResponseLimits.md)
 - [SquareConnect.CatalogItem](CatalogItem.md)
 - [SquareConnect.CatalogItemModifierListInfo](CatalogItemModifierListInfo.md)
 - [SquareConnect.CatalogItemOption](CatalogItemOption.md)
 - [SquareConnect.CatalogItemOptionForItem](CatalogItemOptionForItem.md)
 - [SquareConnect.CatalogItemOptionValue](CatalogItemOptionValue.md)
 - [SquareConnect.CatalogItemOptionValueForItemVariation](CatalogItemOptionValueForItemVariation.md)
 - [SquareConnect.CatalogItemProductType](CatalogItemProductType.md)
 - [SquareConnect.CatalogItemVariation](CatalogItemVariation.md)
 - [SquareConnect.CatalogMeasurementUnit](CatalogMeasurementUnit.md)
 - [SquareConnect.CatalogModifier](CatalogModifier.md)
 - [SquareConnect.CatalogModifierList](CatalogModifierList.md)
 - [SquareConnect.CatalogModifierListSelectionType](CatalogModifierListSelectionType.md)
 - [SquareConnect.CatalogModifierOverride](CatalogModifierOverride.md)
 - [SquareConnect.CatalogObject](CatalogObject.md)
 - [SquareConnect.CatalogObjectBatch](CatalogObjectBatch.md)
 - [SquareConnect.CatalogObjectType](CatalogObjectType.md)
 - [SquareConnect.CatalogPricingRule](CatalogPricingRule.md)
 - [SquareConnect.CatalogPricingType](CatalogPricingType.md)
 - [SquareConnect.CatalogProductSet](CatalogProductSet.md)
 - [SquareConnect.CatalogQuery](CatalogQuery.md)
 - [SquareConnect.CatalogQueryExact](CatalogQueryExact.md)
 - [SquareConnect.CatalogQueryItemVariationsForItemOptionValues](CatalogQueryItemVariationsForItemOptionValues.md)
 - [SquareConnect.CatalogQueryItemsForItemOptions](CatalogQueryItemsForItemOptions.md)
 - [SquareConnect.CatalogQueryItemsForModifierList](CatalogQueryItemsForModifierList.md)
 - [SquareConnect.CatalogQueryItemsForTax](CatalogQueryItemsForTax.md)
 - [SquareConnect.CatalogQueryPrefix](CatalogQueryPrefix.md)
 - [SquareConnect.CatalogQueryRange](CatalogQueryRange.md)
 - [SquareConnect.CatalogQuerySet](CatalogQuerySet.md)
 - [SquareConnect.CatalogQuerySortedAttribute](CatalogQuerySortedAttribute.md)
 - [SquareConnect.CatalogQueryText](CatalogQueryText.md)
 - [SquareConnect.CatalogQuickAmount](CatalogQuickAmount.md)
 - [SquareConnect.CatalogQuickAmountType](CatalogQuickAmountType.md)
 - [SquareConnect.CatalogQuickAmountsSettings](CatalogQuickAmountsSettings.md)
 - [SquareConnect.CatalogQuickAmountsSettingsOption](CatalogQuickAmountsSettingsOption.md)
 - [SquareConnect.CatalogSubscriptionPlan](CatalogSubscriptionPlan.md)
 - [SquareConnect.CatalogTax](CatalogTax.md)
 - [SquareConnect.CatalogTimePeriod](CatalogTimePeriod.md)
 - [SquareConnect.CatalogV1Id](CatalogV1Id.md)
 - [SquareConnect.ChargeRequest](ChargeRequest.md)
 - [SquareConnect.ChargeRequestAdditionalRecipient](ChargeRequestAdditionalRecipient.md)
 - [SquareConnect.ChargeResponse](ChargeResponse.md)
 - [SquareConnect.CheckAppointmentsOnboardedRequest](CheckAppointmentsOnboardedRequest.md)
 - [SquareConnect.CheckAppointmentsOnboardedResponse](CheckAppointmentsOnboardedResponse.md)
 - [SquareConnect.Checkout](Checkout.md)
 - [SquareConnect.CompletePaymentRequest](CompletePaymentRequest.md)
 - [SquareConnect.CompletePaymentResponse](CompletePaymentResponse.md)
 - [SquareConnect.Coordinates](Coordinates.md)
 - [SquareConnect.Country](Country.md)
 - [SquareConnect.CreateBookingRequest](CreateBookingRequest.md)
 - [SquareConnect.CreateBookingResponse](CreateBookingResponse.md)
 - [SquareConnect.CreateBreakTypeRequest](CreateBreakTypeRequest.md)
 - [SquareConnect.CreateBreakTypeResponse](CreateBreakTypeResponse.md)
 - [SquareConnect.CreateCheckoutRequest](CreateCheckoutRequest.md)
 - [SquareConnect.CreateCheckoutResponse](CreateCheckoutResponse.md)
 - [SquareConnect.CreateCustomerCardRequest](CreateCustomerCardRequest.md)
 - [SquareConnect.CreateCustomerCardResponse](CreateCustomerCardResponse.md)
 - [SquareConnect.CreateCustomerGroupRequest](CreateCustomerGroupRequest.md)
 - [SquareConnect.CreateCustomerGroupResponse](CreateCustomerGroupResponse.md)
 - [SquareConnect.CreateCustomerRequest](CreateCustomerRequest.md)
 - [SquareConnect.CreateCustomerResponse](CreateCustomerResponse.md)
 - [SquareConnect.CreateDeviceCodeRequest](CreateDeviceCodeRequest.md)
 - [SquareConnect.CreateDeviceCodeResponse](CreateDeviceCodeResponse.md)
 - [SquareConnect.CreateDisputeEvidenceTextRequest](CreateDisputeEvidenceTextRequest.md)
 - [SquareConnect.CreateDisputeEvidenceTextResponse](CreateDisputeEvidenceTextResponse.md)
 - [SquareConnect.CreateInvoiceRequest](CreateInvoiceRequest.md)
 - [SquareConnect.CreateInvoiceResponse](CreateInvoiceResponse.md)
 - [SquareConnect.CreateLocationRequest](CreateLocationRequest.md)
 - [SquareConnect.CreateLocationResponse](CreateLocationResponse.md)
 - [SquareConnect.CreateLoyaltyAccountRequest](CreateLoyaltyAccountRequest.md)
 - [SquareConnect.CreateLoyaltyAccountResponse](CreateLoyaltyAccountResponse.md)
 - [SquareConnect.CreateLoyaltyRewardRequest](CreateLoyaltyRewardRequest.md)
 - [SquareConnect.CreateLoyaltyRewardResponse](CreateLoyaltyRewardResponse.md)
 - [SquareConnect.CreateMobileAuthorizationCodeRequest](CreateMobileAuthorizationCodeRequest.md)
 - [SquareConnect.CreateMobileAuthorizationCodeResponse](CreateMobileAuthorizationCodeResponse.md)
 - [SquareConnect.CreateOrderRequest](CreateOrderRequest.md)
 - [SquareConnect.CreateOrderResponse](CreateOrderResponse.md)
 - [SquareConnect.CreatePaymentRequest](CreatePaymentRequest.md)
 - [SquareConnect.CreatePaymentResponse](CreatePaymentResponse.md)
 - [SquareConnect.CreateRefundRequest](CreateRefundRequest.md)
 - [SquareConnect.CreateRefundResponse](CreateRefundResponse.md)
 - [SquareConnect.CreateShiftRequest](CreateShiftRequest.md)
 - [SquareConnect.CreateShiftResponse](CreateShiftResponse.md)
 - [SquareConnect.CreateSubscriptionRequest](CreateSubscriptionRequest.md)
 - [SquareConnect.CreateSubscriptionResponse](CreateSubscriptionResponse.md)
 - [SquareConnect.CreateTeamMemberRequest](CreateTeamMemberRequest.md)
 - [SquareConnect.CreateTeamMemberResponse](CreateTeamMemberResponse.md)
 - [SquareConnect.CreateTerminalCheckoutRequest](CreateTerminalCheckoutRequest.md)
 - [SquareConnect.CreateTerminalCheckoutResponse](CreateTerminalCheckoutResponse.md)
 - [SquareConnect.CreateTerminalRefundRequest](CreateTerminalRefundRequest.md)
 - [SquareConnect.CreateTerminalRefundResponse](CreateTerminalRefundResponse.md)
 - [SquareConnect.Currency](Currency.md)
 - [SquareConnect.CustomAttributeFilter](CustomAttributeFilter.md)
 - [SquareConnect.Customer](Customer.md)
 - [SquareConnect.CustomerCreationSource](CustomerCreationSource.md)
 - [SquareConnect.CustomerCreationSourceFilter](CustomerCreationSourceFilter.md)
 - [SquareConnect.CustomerFilter](CustomerFilter.md)
 - [SquareConnect.CustomerGroup](CustomerGroup.md)
 - [SquareConnect.CustomerGroupInfo](CustomerGroupInfo.md)
 - [SquareConnect.CustomerInclusionExclusion](CustomerInclusionExclusion.md)
 - [SquareConnect.CustomerPreferences](CustomerPreferences.md)
 - [SquareConnect.CustomerQuery](CustomerQuery.md)
 - [SquareConnect.CustomerSegment](CustomerSegment.md)
 - [SquareConnect.CustomerSort](CustomerSort.md)
 - [SquareConnect.CustomerSortField](CustomerSortField.md)
 - [SquareConnect.CustomerTextFilter](CustomerTextFilter.md)
 - [SquareConnect.DateRange](DateRange.md)
 - [SquareConnect.DayOfWeek](DayOfWeek.md)
 - [SquareConnect.DeleteBreakTypeRequest](DeleteBreakTypeRequest.md)
 - [SquareConnect.DeleteBreakTypeResponse](DeleteBreakTypeResponse.md)
 - [SquareConnect.DeleteCatalogObjectRequest](DeleteCatalogObjectRequest.md)
 - [SquareConnect.DeleteCatalogObjectResponse](DeleteCatalogObjectResponse.md)
 - [SquareConnect.DeleteCustomerCardRequest](DeleteCustomerCardRequest.md)
 - [SquareConnect.DeleteCustomerCardResponse](DeleteCustomerCardResponse.md)
 - [SquareConnect.DeleteCustomerGroupRequest](DeleteCustomerGroupRequest.md)
 - [SquareConnect.DeleteCustomerGroupResponse](DeleteCustomerGroupResponse.md)
 - [SquareConnect.DeleteCustomerRequest](DeleteCustomerRequest.md)
 - [SquareConnect.DeleteCustomerResponse](DeleteCustomerResponse.md)
 - [SquareConnect.DeleteInvoiceRequest](DeleteInvoiceRequest.md)
 - [SquareConnect.DeleteInvoiceResponse](DeleteInvoiceResponse.md)
 - [SquareConnect.DeleteLoyaltyRewardRequest](DeleteLoyaltyRewardRequest.md)
 - [SquareConnect.DeleteLoyaltyRewardResponse](DeleteLoyaltyRewardResponse.md)
 - [SquareConnect.DeleteShiftRequest](DeleteShiftRequest.md)
 - [SquareConnect.DeleteShiftResponse](DeleteShiftResponse.md)
 - [SquareConnect.Device](Device.md)
 - [SquareConnect.DeviceCheckoutOptions](DeviceCheckoutOptions.md)
 - [SquareConnect.DeviceCode](DeviceCode.md)
 - [SquareConnect.DeviceCodeStatus](DeviceCodeStatus.md)
 - [SquareConnect.DeviceDetails](DeviceDetails.md)
 - [SquareConnect.Dispute](Dispute.md)
 - [SquareConnect.DisputeEvidence](DisputeEvidence.md)
 - [SquareConnect.DisputeEvidenceFile](DisputeEvidenceFile.md)
 - [SquareConnect.DisputeEvidenceType](DisputeEvidenceType.md)
 - [SquareConnect.DisputeReason](DisputeReason.md)
 - [SquareConnect.DisputeState](DisputeState.md)
 - [SquareConnect.DisputedPayment](DisputedPayment.md)
 - [SquareConnect.EcomVisibility](EcomVisibility.md)
 - [SquareConnect.Employee](Employee.md)
 - [SquareConnect.EmployeeStatus](EmployeeStatus.md)
 - [SquareConnect.EmployeeWage](EmployeeWage.md)
 - [SquareConnect.Error](Error.md)
 - [SquareConnect.ErrorCategory](ErrorCategory.md)
 - [SquareConnect.ErrorCode](ErrorCode.md)
 - [SquareConnect.ExcludeStrategy](ExcludeStrategy.md)
 - [SquareConnect.FilterValue](FilterValue.md)
 - [SquareConnect.GetBankAccountByV1IdRequest](GetBankAccountByV1IdRequest.md)
 - [SquareConnect.GetBankAccountByV1IdResponse](GetBankAccountByV1IdResponse.md)
 - [SquareConnect.GetBankAccountRequest](GetBankAccountRequest.md)
 - [SquareConnect.GetBankAccountResponse](GetBankAccountResponse.md)
 - [SquareConnect.GetBreakTypeRequest](GetBreakTypeRequest.md)
 - [SquareConnect.GetBreakTypeResponse](GetBreakTypeResponse.md)
 - [SquareConnect.GetDeviceCodeRequest](GetDeviceCodeRequest.md)
 - [SquareConnect.GetDeviceCodeResponse](GetDeviceCodeResponse.md)
 - [SquareConnect.GetEmployeeWageRequest](GetEmployeeWageRequest.md)
 - [SquareConnect.GetEmployeeWageResponse](GetEmployeeWageResponse.md)
 - [SquareConnect.GetInvoiceRequest](GetInvoiceRequest.md)
 - [SquareConnect.GetInvoiceResponse](GetInvoiceResponse.md)
 - [SquareConnect.GetPaymentRefundRequest](GetPaymentRefundRequest.md)
 - [SquareConnect.GetPaymentRefundResponse](GetPaymentRefundResponse.md)
 - [SquareConnect.GetPaymentRequest](GetPaymentRequest.md)
 - [SquareConnect.GetPaymentResponse](GetPaymentResponse.md)
 - [SquareConnect.GetShiftRequest](GetShiftRequest.md)
 - [SquareConnect.GetShiftResponse](GetShiftResponse.md)
 - [SquareConnect.GetTeamMemberWageRequest](GetTeamMemberWageRequest.md)
 - [SquareConnect.GetTeamMemberWageResponse](GetTeamMemberWageResponse.md)
 - [SquareConnect.GetTerminalCheckoutRequest](GetTerminalCheckoutRequest.md)
 - [SquareConnect.GetTerminalCheckoutResponse](GetTerminalCheckoutResponse.md)
 - [SquareConnect.GetTerminalRefundRequest](GetTerminalRefundRequest.md)
 - [SquareConnect.GetTerminalRefundResponse](GetTerminalRefundResponse.md)
 - [SquareConnect.InlineTypes](InlineTypes.md)
 - [SquareConnect.InventoryAdjustment](InventoryAdjustment.md)
 - [SquareConnect.InventoryAlertType](InventoryAlertType.md)
 - [SquareConnect.InventoryChange](InventoryChange.md)
 - [SquareConnect.InventoryChangeType](InventoryChangeType.md)
 - [SquareConnect.InventoryCount](InventoryCount.md)
 - [SquareConnect.InventoryPhysicalCount](InventoryPhysicalCount.md)
 - [SquareConnect.InventoryState](InventoryState.md)
 - [SquareConnect.InventoryTransfer](InventoryTransfer.md)
 - [SquareConnect.Invoice](Invoice.md)
 - [SquareConnect.InvoiceFilter](InvoiceFilter.md)
 - [SquareConnect.InvoicePaymentReminder](InvoicePaymentReminder.md)
 - [SquareConnect.InvoicePaymentReminderStatus](InvoicePaymentReminderStatus.md)
 - [SquareConnect.InvoicePaymentRequest](InvoicePaymentRequest.md)
 - [SquareConnect.InvoiceQuery](InvoiceQuery.md)
 - [SquareConnect.InvoiceRecipient](InvoiceRecipient.md)
 - [SquareConnect.InvoiceRequestMethod](InvoiceRequestMethod.md)
 - [SquareConnect.InvoiceRequestType](InvoiceRequestType.md)
 - [SquareConnect.InvoiceSort](InvoiceSort.md)
 - [SquareConnect.InvoiceSortField](InvoiceSortField.md)
 - [SquareConnect.InvoiceStatus](InvoiceStatus.md)
 - [SquareConnect.ItemVariationLocationOverrides](ItemVariationLocationOverrides.md)
 - [SquareConnect.JobAssignment](JobAssignment.md)
 - [SquareConnect.JobAssignmentPayType](JobAssignmentPayType.md)
 - [SquareConnect.ListBankAccountsRequest](ListBankAccountsRequest.md)
 - [SquareConnect.ListBankAccountsResponse](ListBankAccountsResponse.md)
 - [SquareConnect.ListBreakTypesRequest](ListBreakTypesRequest.md)
 - [SquareConnect.ListBreakTypesResponse](ListBreakTypesResponse.md)
 - [SquareConnect.ListCashDrawerShiftEventsRequest](ListCashDrawerShiftEventsRequest.md)
 - [SquareConnect.ListCashDrawerShiftEventsResponse](ListCashDrawerShiftEventsResponse.md)
 - [SquareConnect.ListCashDrawerShiftsRequest](ListCashDrawerShiftsRequest.md)
 - [SquareConnect.ListCashDrawerShiftsResponse](ListCashDrawerShiftsResponse.md)
 - [SquareConnect.ListCatalogRequest](ListCatalogRequest.md)
 - [SquareConnect.ListCatalogResponse](ListCatalogResponse.md)
 - [SquareConnect.ListCustomerGroupsRequest](ListCustomerGroupsRequest.md)
 - [SquareConnect.ListCustomerGroupsResponse](ListCustomerGroupsResponse.md)
 - [SquareConnect.ListCustomerSegmentsRequest](ListCustomerSegmentsRequest.md)
 - [SquareConnect.ListCustomerSegmentsResponse](ListCustomerSegmentsResponse.md)
 - [SquareConnect.ListCustomersRequest](ListCustomersRequest.md)
 - [SquareConnect.ListCustomersResponse](ListCustomersResponse.md)
 - [SquareConnect.ListDeviceCodesRequest](ListDeviceCodesRequest.md)
 - [SquareConnect.ListDeviceCodesResponse](ListDeviceCodesResponse.md)
 - [SquareConnect.ListDisputeEvidenceRequest](ListDisputeEvidenceRequest.md)
 - [SquareConnect.ListDisputeEvidenceResponse](ListDisputeEvidenceResponse.md)
 - [SquareConnect.ListDisputesRequest](ListDisputesRequest.md)
 - [SquareConnect.ListDisputesResponse](ListDisputesResponse.md)
 - [SquareConnect.ListEmployeeWagesRequest](ListEmployeeWagesRequest.md)
 - [SquareConnect.ListEmployeeWagesResponse](ListEmployeeWagesResponse.md)
 - [SquareConnect.ListEmployeesRequest](ListEmployeesRequest.md)
 - [SquareConnect.ListEmployeesResponse](ListEmployeesResponse.md)
 - [SquareConnect.ListInvoicesRequest](ListInvoicesRequest.md)
 - [SquareConnect.ListInvoicesResponse](ListInvoicesResponse.md)
 - [SquareConnect.ListLocationsRequest](ListLocationsRequest.md)
 - [SquareConnect.ListLocationsResponse](ListLocationsResponse.md)
 - [SquareConnect.ListLoyaltyProgramsRequest](ListLoyaltyProgramsRequest.md)
 - [SquareConnect.ListLoyaltyProgramsResponse](ListLoyaltyProgramsResponse.md)
 - [SquareConnect.ListMerchantsRequest](ListMerchantsRequest.md)
 - [SquareConnect.ListMerchantsResponse](ListMerchantsResponse.md)
 - [SquareConnect.ListPaymentRefundsRequest](ListPaymentRefundsRequest.md)
 - [SquareConnect.ListPaymentRefundsResponse](ListPaymentRefundsResponse.md)
 - [SquareConnect.ListPaymentsRequest](ListPaymentsRequest.md)
 - [SquareConnect.ListPaymentsResponse](ListPaymentsResponse.md)
 - [SquareConnect.ListRefundsRequest](ListRefundsRequest.md)
 - [SquareConnect.ListRefundsResponse](ListRefundsResponse.md)
 - [SquareConnect.ListSubscriptionEventsRequest](ListSubscriptionEventsRequest.md)
 - [SquareConnect.ListSubscriptionEventsResponse](ListSubscriptionEventsResponse.md)
 - [SquareConnect.ListTeamMemberBookingProfilesRequest](ListTeamMemberBookingProfilesRequest.md)
 - [SquareConnect.ListTeamMemberBookingProfilesResponse](ListTeamMemberBookingProfilesResponse.md)
 - [SquareConnect.ListTeamMemberWagesRequest](ListTeamMemberWagesRequest.md)
 - [SquareConnect.ListTeamMemberWagesResponse](ListTeamMemberWagesResponse.md)
 - [SquareConnect.ListTransactionsRequest](ListTransactionsRequest.md)
 - [SquareConnect.ListTransactionsResponse](ListTransactionsResponse.md)
 - [SquareConnect.ListWorkweekConfigsRequest](ListWorkweekConfigsRequest.md)
 - [SquareConnect.ListWorkweekConfigsResponse](ListWorkweekConfigsResponse.md)
 - [SquareConnect.Location](Location.md)
 - [SquareConnect.LocationCapability](LocationCapability.md)
 - [SquareConnect.LocationStatus](LocationStatus.md)
 - [SquareConnect.LocationType](LocationType.md)
 - [SquareConnect.LoyaltyAccount](LoyaltyAccount.md)
 - [SquareConnect.LoyaltyAccountMapping](LoyaltyAccountMapping.md)
 - [SquareConnect.LoyaltyAccountMappingType](LoyaltyAccountMappingType.md)
 - [SquareConnect.LoyaltyEvent](LoyaltyEvent.md)
 - [SquareConnect.LoyaltyEventAccumulatePoints](LoyaltyEventAccumulatePoints.md)
 - [SquareConnect.LoyaltyEventAdjustPoints](LoyaltyEventAdjustPoints.md)
 - [SquareConnect.LoyaltyEventCreateReward](LoyaltyEventCreateReward.md)
 - [SquareConnect.LoyaltyEventDateTimeFilter](LoyaltyEventDateTimeFilter.md)
 - [SquareConnect.LoyaltyEventDeleteReward](LoyaltyEventDeleteReward.md)
 - [SquareConnect.LoyaltyEventExpirePoints](LoyaltyEventExpirePoints.md)
 - [SquareConnect.LoyaltyEventFilter](LoyaltyEventFilter.md)
 - [SquareConnect.LoyaltyEventLocationFilter](LoyaltyEventLocationFilter.md)
 - [SquareConnect.LoyaltyEventLoyaltyAccountFilter](LoyaltyEventLoyaltyAccountFilter.md)
 - [SquareConnect.LoyaltyEventOrderFilter](LoyaltyEventOrderFilter.md)
 - [SquareConnect.LoyaltyEventOther](LoyaltyEventOther.md)
 - [SquareConnect.LoyaltyEventQuery](LoyaltyEventQuery.md)
 - [SquareConnect.LoyaltyEventRedeemReward](LoyaltyEventRedeemReward.md)
 - [SquareConnect.LoyaltyEventSource](LoyaltyEventSource.md)
 - [SquareConnect.LoyaltyEventType](LoyaltyEventType.md)
 - [SquareConnect.LoyaltyEventTypeFilter](LoyaltyEventTypeFilter.md)
 - [SquareConnect.LoyaltyProgram](LoyaltyProgram.md)
 - [SquareConnect.LoyaltyProgramAccrualRule](LoyaltyProgramAccrualRule.md)
 - [SquareConnect.LoyaltyProgramAccrualRuleType](LoyaltyProgramAccrualRuleType.md)
 - [SquareConnect.LoyaltyProgramExpirationPolicy](LoyaltyProgramExpirationPolicy.md)
 - [SquareConnect.LoyaltyProgramRewardDefinition](LoyaltyProgramRewardDefinition.md)
 - [SquareConnect.LoyaltyProgramRewardDefinitionScope](LoyaltyProgramRewardDefinitionScope.md)
 - [SquareConnect.LoyaltyProgramRewardDefinitionType](LoyaltyProgramRewardDefinitionType.md)
 - [SquareConnect.LoyaltyProgramRewardTier](LoyaltyProgramRewardTier.md)
 - [SquareConnect.LoyaltyProgramStatus](LoyaltyProgramStatus.md)
 - [SquareConnect.LoyaltyProgramTerminology](LoyaltyProgramTerminology.md)
 - [SquareConnect.LoyaltyReward](LoyaltyReward.md)
 - [SquareConnect.LoyaltyRewardStatus](LoyaltyRewardStatus.md)
 - [SquareConnect.MeasurementUnit](MeasurementUnit.md)
 - [SquareConnect.MeasurementUnitArea](MeasurementUnitArea.md)
 - [SquareConnect.MeasurementUnitCustom](MeasurementUnitCustom.md)
 - [SquareConnect.MeasurementUnitGeneric](MeasurementUnitGeneric.md)
 - [SquareConnect.MeasurementUnitLength](MeasurementUnitLength.md)
 - [SquareConnect.MeasurementUnitTime](MeasurementUnitTime.md)
 - [SquareConnect.MeasurementUnitUnitType](MeasurementUnitUnitType.md)
 - [SquareConnect.MeasurementUnitVolume](MeasurementUnitVolume.md)
 - [SquareConnect.MeasurementUnitWeight](MeasurementUnitWeight.md)
 - [SquareConnect.Merchant](Merchant.md)
 - [SquareConnect.MerchantStatus](MerchantStatus.md)
 - [SquareConnect.ModelBreak](ModelBreak.md)
 - [SquareConnect.Money](Money.md)
 - [SquareConnect.ObtainTokenRequest](ObtainTokenRequest.md)
 - [SquareConnect.ObtainTokenResponse](ObtainTokenResponse.md)
 - [SquareConnect.OnboardAppointmentsRequest](OnboardAppointmentsRequest.md)
 - [SquareConnect.OnboardAppointmentsResponse](OnboardAppointmentsResponse.md)
 - [SquareConnect.Order](Order.md)
 - [SquareConnect.OrderCreated](OrderCreated.md)
 - [SquareConnect.OrderCreatedObject](OrderCreatedObject.md)
 - [SquareConnect.OrderEntry](OrderEntry.md)
 - [SquareConnect.OrderFulfillment](OrderFulfillment.md)
 - [SquareConnect.OrderFulfillmentPickupDetails](OrderFulfillmentPickupDetails.md)
 - [SquareConnect.OrderFulfillmentPickupDetailsCurbsidePickupDetails](OrderFulfillmentPickupDetailsCurbsidePickupDetails.md)
 - [SquareConnect.OrderFulfillmentPickupDetailsScheduleType](OrderFulfillmentPickupDetailsScheduleType.md)
 - [SquareConnect.OrderFulfillmentRecipient](OrderFulfillmentRecipient.md)
 - [SquareConnect.OrderFulfillmentShipmentDetails](OrderFulfillmentShipmentDetails.md)
 - [SquareConnect.OrderFulfillmentState](OrderFulfillmentState.md)
 - [SquareConnect.OrderFulfillmentType](OrderFulfillmentType.md)
 - [SquareConnect.OrderFulfillmentUpdated](OrderFulfillmentUpdated.md)
 - [SquareConnect.OrderFulfillmentUpdatedObject](OrderFulfillmentUpdatedObject.md)
 - [SquareConnect.OrderFulfillmentUpdatedUpdate](OrderFulfillmentUpdatedUpdate.md)
 - [SquareConnect.OrderLineItem](OrderLineItem.md)
 - [SquareConnect.OrderLineItemAppliedDiscount](OrderLineItemAppliedDiscount.md)
 - [SquareConnect.OrderLineItemAppliedTax](OrderLineItemAppliedTax.md)
 - [SquareConnect.OrderLineItemDiscount](OrderLineItemDiscount.md)
 - [SquareConnect.OrderLineItemDiscountScope](OrderLineItemDiscountScope.md)
 - [SquareConnect.OrderLineItemDiscountType](OrderLineItemDiscountType.md)
 - [SquareConnect.OrderLineItemModifier](OrderLineItemModifier.md)
 - [SquareConnect.OrderLineItemTax](OrderLineItemTax.md)
 - [SquareConnect.OrderLineItemTaxScope](OrderLineItemTaxScope.md)
 - [SquareConnect.OrderLineItemTaxType](OrderLineItemTaxType.md)
 - [SquareConnect.OrderMoneyAmounts](OrderMoneyAmounts.md)
 - [SquareConnect.OrderPricingOptions](OrderPricingOptions.md)
 - [SquareConnect.OrderQuantityUnit](OrderQuantityUnit.md)
 - [SquareConnect.OrderReturn](OrderReturn.md)
 - [SquareConnect.OrderReturnDiscount](OrderReturnDiscount.md)
 - [SquareConnect.OrderReturnLineItem](OrderReturnLineItem.md)
 - [SquareConnect.OrderReturnLineItemModifier](OrderReturnLineItemModifier.md)
 - [SquareConnect.OrderReturnServiceCharge](OrderReturnServiceCharge.md)
 - [SquareConnect.OrderReturnTax](OrderReturnTax.md)
 - [SquareConnect.OrderReward](OrderReward.md)
 - [SquareConnect.OrderRoundingAdjustment](OrderRoundingAdjustment.md)
 - [SquareConnect.OrderServiceCharge](OrderServiceCharge.md)
 - [SquareConnect.OrderServiceChargeCalculationPhase](OrderServiceChargeCalculationPhase.md)
 - [SquareConnect.OrderSource](OrderSource.md)
 - [SquareConnect.OrderState](OrderState.md)
 - [SquareConnect.OrderUpdated](OrderUpdated.md)
 - [SquareConnect.OrderUpdatedObject](OrderUpdatedObject.md)
 - [SquareConnect.PayOrderRequest](PayOrderRequest.md)
 - [SquareConnect.PayOrderResponse](PayOrderResponse.md)
 - [SquareConnect.Payment](Payment.md)
 - [SquareConnect.PaymentOptions](PaymentOptions.md)
 - [SquareConnect.PaymentRefund](PaymentRefund.md)
 - [SquareConnect.ProcessingFee](ProcessingFee.md)
 - [SquareConnect.Product](Product.md)
 - [SquareConnect.ProductType](ProductType.md)
 - [SquareConnect.PublishInvoiceRequest](PublishInvoiceRequest.md)
 - [SquareConnect.PublishInvoiceResponse](PublishInvoiceResponse.md)
 - [SquareConnect.Range](Range.md)
 - [SquareConnect.RedeemLoyaltyRewardRequest](RedeemLoyaltyRewardRequest.md)
 - [SquareConnect.RedeemLoyaltyRewardResponse](RedeemLoyaltyRewardResponse.md)
 - [SquareConnect.Refund](Refund.md)
 - [SquareConnect.RefundPaymentRequest](RefundPaymentRequest.md)
 - [SquareConnect.RefundPaymentResponse](RefundPaymentResponse.md)
 - [SquareConnect.RefundStatus](RefundStatus.md)
 - [SquareConnect.RegisterDomainRequest](RegisterDomainRequest.md)
 - [SquareConnect.RegisterDomainResponse](RegisterDomainResponse.md)
 - [SquareConnect.RegisterDomainResponseStatus](RegisterDomainResponseStatus.md)
 - [SquareConnect.RemoveDisputeEvidenceRequest](RemoveDisputeEvidenceRequest.md)
 - [SquareConnect.RemoveDisputeEvidenceResponse](RemoveDisputeEvidenceResponse.md)
 - [SquareConnect.RemoveGroupFromCustomerRequest](RemoveGroupFromCustomerRequest.md)
 - [SquareConnect.RemoveGroupFromCustomerResponse](RemoveGroupFromCustomerResponse.md)
 - [SquareConnect.RenewTokenRequest](RenewTokenRequest.md)
 - [SquareConnect.RenewTokenResponse](RenewTokenResponse.md)
 - [SquareConnect.RetrieveBookingRequest](RetrieveBookingRequest.md)
 - [SquareConnect.RetrieveBookingResponse](RetrieveBookingResponse.md)
 - [SquareConnect.RetrieveBusinessBookingProfileRequest](RetrieveBusinessBookingProfileRequest.md)
 - [SquareConnect.RetrieveBusinessBookingProfileResponse](RetrieveBusinessBookingProfileResponse.md)
 - [SquareConnect.RetrieveCashDrawerShiftRequest](RetrieveCashDrawerShiftRequest.md)
 - [SquareConnect.RetrieveCashDrawerShiftResponse](RetrieveCashDrawerShiftResponse.md)
 - [SquareConnect.RetrieveCatalogObjectRequest](RetrieveCatalogObjectRequest.md)
 - [SquareConnect.RetrieveCatalogObjectResponse](RetrieveCatalogObjectResponse.md)
 - [SquareConnect.RetrieveCustomerGroupRequest](RetrieveCustomerGroupRequest.md)
 - [SquareConnect.RetrieveCustomerGroupResponse](RetrieveCustomerGroupResponse.md)
 - [SquareConnect.RetrieveCustomerRequest](RetrieveCustomerRequest.md)
 - [SquareConnect.RetrieveCustomerResponse](RetrieveCustomerResponse.md)
 - [SquareConnect.RetrieveCustomerSegmentRequest](RetrieveCustomerSegmentRequest.md)
 - [SquareConnect.RetrieveCustomerSegmentResponse](RetrieveCustomerSegmentResponse.md)
 - [SquareConnect.RetrieveDisputeEvidenceRequest](RetrieveDisputeEvidenceRequest.md)
 - [SquareConnect.RetrieveDisputeEvidenceResponse](RetrieveDisputeEvidenceResponse.md)
 - [SquareConnect.RetrieveDisputeRequest](RetrieveDisputeRequest.md)
 - [SquareConnect.RetrieveDisputeResponse](RetrieveDisputeResponse.md)
 - [SquareConnect.RetrieveEmployeeRequest](RetrieveEmployeeRequest.md)
 - [SquareConnect.RetrieveEmployeeResponse](RetrieveEmployeeResponse.md)
 - [SquareConnect.RetrieveInventoryAdjustmentRequest](RetrieveInventoryAdjustmentRequest.md)
 - [SquareConnect.RetrieveInventoryAdjustmentResponse](RetrieveInventoryAdjustmentResponse.md)
 - [SquareConnect.RetrieveInventoryChangesRequest](RetrieveInventoryChangesRequest.md)
 - [SquareConnect.RetrieveInventoryChangesResponse](RetrieveInventoryChangesResponse.md)
 - [SquareConnect.RetrieveInventoryCountRequest](RetrieveInventoryCountRequest.md)
 - [SquareConnect.RetrieveInventoryCountResponse](RetrieveInventoryCountResponse.md)
 - [SquareConnect.RetrieveInventoryPhysicalCountRequest](RetrieveInventoryPhysicalCountRequest.md)
 - [SquareConnect.RetrieveInventoryPhysicalCountResponse](RetrieveInventoryPhysicalCountResponse.md)
 - [SquareConnect.RetrieveLocationRequest](RetrieveLocationRequest.md)
 - [SquareConnect.RetrieveLocationResponse](RetrieveLocationResponse.md)
 - [SquareConnect.RetrieveLoyaltyAccountRequest](RetrieveLoyaltyAccountRequest.md)
 - [SquareConnect.RetrieveLoyaltyAccountResponse](RetrieveLoyaltyAccountResponse.md)
 - [SquareConnect.RetrieveLoyaltyRewardRequest](RetrieveLoyaltyRewardRequest.md)
 - [SquareConnect.RetrieveLoyaltyRewardResponse](RetrieveLoyaltyRewardResponse.md)
 - [SquareConnect.RetrieveMerchantRequest](RetrieveMerchantRequest.md)
 - [SquareConnect.RetrieveMerchantResponse](RetrieveMerchantResponse.md)
 - [SquareConnect.RetrieveObsMigrationProfileRequest](RetrieveObsMigrationProfileRequest.md)
 - [SquareConnect.RetrieveObsMigrationProfileResponse](RetrieveObsMigrationProfileResponse.md)
 - [SquareConnect.RetrieveOrderRequest](RetrieveOrderRequest.md)
 - [SquareConnect.RetrieveOrderResponse](RetrieveOrderResponse.md)
 - [SquareConnect.RetrieveSubscriptionRequest](RetrieveSubscriptionRequest.md)
 - [SquareConnect.RetrieveSubscriptionResponse](RetrieveSubscriptionResponse.md)
 - [SquareConnect.RetrieveTeamMemberBookingProfileRequest](RetrieveTeamMemberBookingProfileRequest.md)
 - [SquareConnect.RetrieveTeamMemberBookingProfileResponse](RetrieveTeamMemberBookingProfileResponse.md)
 - [SquareConnect.RetrieveTeamMemberRequest](RetrieveTeamMemberRequest.md)
 - [SquareConnect.RetrieveTeamMemberResponse](RetrieveTeamMemberResponse.md)
 - [SquareConnect.RetrieveTransactionRequest](RetrieveTransactionRequest.md)
 - [SquareConnect.RetrieveTransactionResponse](RetrieveTransactionResponse.md)
 - [SquareConnect.RetrieveWageSettingRequest](RetrieveWageSettingRequest.md)
 - [SquareConnect.RetrieveWageSettingResponse](RetrieveWageSettingResponse.md)
 - [SquareConnect.RevokeTokenRequest](RevokeTokenRequest.md)
 - [SquareConnect.RevokeTokenResponse](RevokeTokenResponse.md)
 - [SquareConnect.RiskEvaluation](RiskEvaluation.md)
 - [SquareConnect.RiskEvaluationRiskLevel](RiskEvaluationRiskLevel.md)
 - [SquareConnect.SearchAvailabilityFilter](SearchAvailabilityFilter.md)
 - [SquareConnect.SearchAvailabilityQuery](SearchAvailabilityQuery.md)
 - [SquareConnect.SearchAvailabilityRequest](SearchAvailabilityRequest.md)
 - [SquareConnect.SearchAvailabilityResponse](SearchAvailabilityResponse.md)
 - [SquareConnect.SearchCatalogItemsRequest](SearchCatalogItemsRequest.md)
 - [SquareConnect.SearchCatalogItemsRequestStockLevel](SearchCatalogItemsRequestStockLevel.md)
 - [SquareConnect.SearchCatalogItemsResponse](SearchCatalogItemsResponse.md)
 - [SquareConnect.SearchCatalogObjectsRequest](SearchCatalogObjectsRequest.md)
 - [SquareConnect.SearchCatalogObjectsResponse](SearchCatalogObjectsResponse.md)
 - [SquareConnect.SearchCustomersRequest](SearchCustomersRequest.md)
 - [SquareConnect.SearchCustomersResponse](SearchCustomersResponse.md)
 - [SquareConnect.SearchInvoicesRequest](SearchInvoicesRequest.md)
 - [SquareConnect.SearchInvoicesResponse](SearchInvoicesResponse.md)
 - [SquareConnect.SearchLoyaltyAccountsRequest](SearchLoyaltyAccountsRequest.md)
 - [SquareConnect.SearchLoyaltyAccountsRequestLoyaltyAccountQuery](SearchLoyaltyAccountsRequestLoyaltyAccountQuery.md)
 - [SquareConnect.SearchLoyaltyAccountsResponse](SearchLoyaltyAccountsResponse.md)
 - [SquareConnect.SearchLoyaltyEventsRequest](SearchLoyaltyEventsRequest.md)
 - [SquareConnect.SearchLoyaltyEventsResponse](SearchLoyaltyEventsResponse.md)
 - [SquareConnect.SearchLoyaltyRewardsRequest](SearchLoyaltyRewardsRequest.md)
 - [SquareConnect.SearchLoyaltyRewardsRequestLoyaltyRewardQuery](SearchLoyaltyRewardsRequestLoyaltyRewardQuery.md)
 - [SquareConnect.SearchLoyaltyRewardsResponse](SearchLoyaltyRewardsResponse.md)
 - [SquareConnect.SearchOrdersCustomerFilter](SearchOrdersCustomerFilter.md)
 - [SquareConnect.SearchOrdersDateTimeFilter](SearchOrdersDateTimeFilter.md)
 - [SquareConnect.SearchOrdersFilter](SearchOrdersFilter.md)
 - [SquareConnect.SearchOrdersFulfillmentFilter](SearchOrdersFulfillmentFilter.md)
 - [SquareConnect.SearchOrdersQuery](SearchOrdersQuery.md)
 - [SquareConnect.SearchOrdersRequest](SearchOrdersRequest.md)
 - [SquareConnect.SearchOrdersResponse](SearchOrdersResponse.md)
 - [SquareConnect.SearchOrdersSort](SearchOrdersSort.md)
 - [SquareConnect.SearchOrdersSortField](SearchOrdersSortField.md)
 - [SquareConnect.SearchOrdersSourceFilter](SearchOrdersSourceFilter.md)
 - [SquareConnect.SearchOrdersStateFilter](SearchOrdersStateFilter.md)
 - [SquareConnect.SearchShiftsRequest](SearchShiftsRequest.md)
 - [SquareConnect.SearchShiftsResponse](SearchShiftsResponse.md)
 - [SquareConnect.SearchSubscriptionsFilter](SearchSubscriptionsFilter.md)
 - [SquareConnect.SearchSubscriptionsQuery](SearchSubscriptionsQuery.md)
 - [SquareConnect.SearchSubscriptionsRequest](SearchSubscriptionsRequest.md)
 - [SquareConnect.SearchSubscriptionsResponse](SearchSubscriptionsResponse.md)
 - [SquareConnect.SearchTeamMembersFilter](SearchTeamMembersFilter.md)
 - [SquareConnect.SearchTeamMembersQuery](SearchTeamMembersQuery.md)
 - [SquareConnect.SearchTeamMembersRequest](SearchTeamMembersRequest.md)
 - [SquareConnect.SearchTeamMembersResponse](SearchTeamMembersResponse.md)
 - [SquareConnect.SearchTerminalCheckoutsRequest](SearchTerminalCheckoutsRequest.md)
 - [SquareConnect.SearchTerminalCheckoutsResponse](SearchTerminalCheckoutsResponse.md)
 - [SquareConnect.SearchTerminalRefundsRequest](SearchTerminalRefundsRequest.md)
 - [SquareConnect.SearchTerminalRefundsResponse](SearchTerminalRefundsResponse.md)
 - [SquareConnect.SegmentFilter](SegmentFilter.md)
 - [SquareConnect.Shift](Shift.md)
 - [SquareConnect.ShiftFilter](ShiftFilter.md)
 - [SquareConnect.ShiftFilterStatus](ShiftFilterStatus.md)
 - [SquareConnect.ShiftQuery](ShiftQuery.md)
 - [SquareConnect.ShiftSort](ShiftSort.md)
 - [SquareConnect.ShiftSortField](ShiftSortField.md)
 - [SquareConnect.ShiftStatus](ShiftStatus.md)
 - [SquareConnect.ShiftWage](ShiftWage.md)
 - [SquareConnect.ShiftWorkday](ShiftWorkday.md)
 - [SquareConnect.ShiftWorkdayMatcher](ShiftWorkdayMatcher.md)
 - [SquareConnect.SortOrder](SortOrder.md)
 - [SquareConnect.SourceApplication](SourceApplication.md)
 - [SquareConnect.StandardUnitDescription](StandardUnitDescription.md)
 - [SquareConnect.StandardUnitDescriptionGroup](StandardUnitDescriptionGroup.md)
 - [SquareConnect.SubmitEvidenceRequest](SubmitEvidenceRequest.md)
 - [SquareConnect.SubmitEvidenceResponse](SubmitEvidenceResponse.md)
 - [SquareConnect.Subscription](Subscription.md)
 - [SquareConnect.SubscriptionCadence](SubscriptionCadence.md)
 - [SquareConnect.SubscriptionEvent](SubscriptionEvent.md)
 - [SquareConnect.SubscriptionEventSubscriptionEventType](SubscriptionEventSubscriptionEventType.md)
 - [SquareConnect.SubscriptionPhase](SubscriptionPhase.md)
 - [SquareConnect.SubscriptionStatus](SubscriptionStatus.md)
 - [SquareConnect.TaxCalculationPhase](TaxCalculationPhase.md)
 - [SquareConnect.TaxInclusionType](TaxInclusionType.md)
 - [SquareConnect.TeamMember](TeamMember.md)
 - [SquareConnect.TeamMemberAssignedLocations](TeamMemberAssignedLocations.md)
 - [SquareConnect.TeamMemberAssignedLocationsAssignmentType](TeamMemberAssignedLocationsAssignmentType.md)
 - [SquareConnect.TeamMemberBookingProfile](TeamMemberBookingProfile.md)
 - [SquareConnect.TeamMemberStatus](TeamMemberStatus.md)
 - [SquareConnect.TeamMemberWage](TeamMemberWage.md)
 - [SquareConnect.Tender](Tender.md)
 - [SquareConnect.TenderCardDetails](TenderCardDetails.md)
 - [SquareConnect.TenderCardDetailsEntryMethod](TenderCardDetailsEntryMethod.md)
 - [SquareConnect.TenderCardDetailsStatus](TenderCardDetailsStatus.md)
 - [SquareConnect.TenderCashDetails](TenderCashDetails.md)
 - [SquareConnect.TenderType](TenderType.md)
 - [SquareConnect.TerminalCheckout](TerminalCheckout.md)
 - [SquareConnect.TerminalCheckoutQuery](TerminalCheckoutQuery.md)
 - [SquareConnect.TerminalCheckoutQueryFilter](TerminalCheckoutQueryFilter.md)
 - [SquareConnect.TerminalCheckoutQuerySort](TerminalCheckoutQuerySort.md)
 - [SquareConnect.TerminalRefund](TerminalRefund.md)
 - [SquareConnect.TerminalRefundQuery](TerminalRefundQuery.md)
 - [SquareConnect.TerminalRefundQueryFilter](TerminalRefundQueryFilter.md)
 - [SquareConnect.TerminalRefundQuerySort](TerminalRefundQuerySort.md)
 - [SquareConnect.TimeRange](TimeRange.md)
 - [SquareConnect.TipSettings](TipSettings.md)
 - [SquareConnect.Transaction](Transaction.md)
 - [SquareConnect.TransactionProduct](TransactionProduct.md)
 - [SquareConnect.TransactionType](TransactionType.md)
 - [SquareConnect.UpdateBookingRequest](UpdateBookingRequest.md)
 - [SquareConnect.UpdateBookingResponse](UpdateBookingResponse.md)
 - [SquareConnect.UpdateBreakTypeRequest](UpdateBreakTypeRequest.md)
 - [SquareConnect.UpdateBreakTypeResponse](UpdateBreakTypeResponse.md)
 - [SquareConnect.UpdateCustomerGroupRequest](UpdateCustomerGroupRequest.md)
 - [SquareConnect.UpdateCustomerGroupResponse](UpdateCustomerGroupResponse.md)
 - [SquareConnect.UpdateCustomerRequest](UpdateCustomerRequest.md)
 - [SquareConnect.UpdateCustomerResponse](UpdateCustomerResponse.md)
 - [SquareConnect.UpdateInvoiceRequest](UpdateInvoiceRequest.md)
 - [SquareConnect.UpdateInvoiceResponse](UpdateInvoiceResponse.md)
 - [SquareConnect.UpdateItemModifierListsRequest](UpdateItemModifierListsRequest.md)
 - [SquareConnect.UpdateItemModifierListsResponse](UpdateItemModifierListsResponse.md)
 - [SquareConnect.UpdateItemTaxesRequest](UpdateItemTaxesRequest.md)
 - [SquareConnect.UpdateItemTaxesResponse](UpdateItemTaxesResponse.md)
 - [SquareConnect.UpdateLocationRequest](UpdateLocationRequest.md)
 - [SquareConnect.UpdateLocationResponse](UpdateLocationResponse.md)
 - [SquareConnect.UpdateOrderRequest](UpdateOrderRequest.md)
 - [SquareConnect.UpdateOrderResponse](UpdateOrderResponse.md)
 - [SquareConnect.UpdateShiftRequest](UpdateShiftRequest.md)
 - [SquareConnect.UpdateShiftResponse](UpdateShiftResponse.md)
 - [SquareConnect.UpdateSubscriptionRequest](UpdateSubscriptionRequest.md)
 - [SquareConnect.UpdateSubscriptionResponse](UpdateSubscriptionResponse.md)
 - [SquareConnect.UpdateTeamMemberRequest](UpdateTeamMemberRequest.md)
 - [SquareConnect.UpdateTeamMemberResponse](UpdateTeamMemberResponse.md)
 - [SquareConnect.UpdateWageSettingRequest](UpdateWageSettingRequest.md)
 - [SquareConnect.UpdateWageSettingResponse](UpdateWageSettingResponse.md)
 - [SquareConnect.UpdateWorkweekConfigRequest](UpdateWorkweekConfigRequest.md)
 - [SquareConnect.UpdateWorkweekConfigResponse](UpdateWorkweekConfigResponse.md)
 - [SquareConnect.UpsertCatalogObjectRequest](UpsertCatalogObjectRequest.md)
 - [SquareConnect.UpsertCatalogObjectResponse](UpsertCatalogObjectResponse.md)
 - [SquareConnect.V1AdjustInventoryRequest](V1AdjustInventoryRequest.md)
 - [SquareConnect.V1AdjustInventoryRequestAdjustmentType](V1AdjustInventoryRequestAdjustmentType.md)
 - [SquareConnect.V1ApplyFeeRequest](V1ApplyFeeRequest.md)
 - [SquareConnect.V1ApplyModifierListRequest](V1ApplyModifierListRequest.md)
 - [SquareConnect.V1BankAccount](V1BankAccount.md)
 - [SquareConnect.V1BankAccountType](V1BankAccountType.md)
 - [SquareConnect.V1CashDrawerEvent](V1CashDrawerEvent.md)
 - [SquareConnect.V1CashDrawerEventEventType](V1CashDrawerEventEventType.md)
 - [SquareConnect.V1CashDrawerShift](V1CashDrawerShift.md)
 - [SquareConnect.V1CashDrawerShiftEventType](V1CashDrawerShiftEventType.md)
 - [SquareConnect.V1Category](V1Category.md)
 - [SquareConnect.V1CreateCategoryRequest](V1CreateCategoryRequest.md)
 - [SquareConnect.V1CreateDiscountRequest](V1CreateDiscountRequest.md)
 - [SquareConnect.V1CreateEmployeeRoleRequest](V1CreateEmployeeRoleRequest.md)
 - [SquareConnect.V1CreateFeeRequest](V1CreateFeeRequest.md)
 - [SquareConnect.V1CreateItemRequest](V1CreateItemRequest.md)
 - [SquareConnect.V1CreateModifierListRequest](V1CreateModifierListRequest.md)
 - [SquareConnect.V1CreateModifierOptionRequest](V1CreateModifierOptionRequest.md)
 - [SquareConnect.V1CreatePageRequest](V1CreatePageRequest.md)
 - [SquareConnect.V1CreateRefundRequest](V1CreateRefundRequest.md)
 - [SquareConnect.V1CreateRefundRequestType](V1CreateRefundRequestType.md)
 - [SquareConnect.V1CreateVariationRequest](V1CreateVariationRequest.md)
 - [SquareConnect.V1DeleteCategoryRequest](V1DeleteCategoryRequest.md)
 - [SquareConnect.V1DeleteDiscountRequest](V1DeleteDiscountRequest.md)
 - [SquareConnect.V1DeleteFeeRequest](V1DeleteFeeRequest.md)
 - [SquareConnect.V1DeleteItemRequest](V1DeleteItemRequest.md)
 - [SquareConnect.V1DeleteModifierListRequest](V1DeleteModifierListRequest.md)
 - [SquareConnect.V1DeleteModifierOptionRequest](V1DeleteModifierOptionRequest.md)
 - [SquareConnect.V1DeletePageCellRequest](V1DeletePageCellRequest.md)
 - [SquareConnect.V1DeletePageRequest](V1DeletePageRequest.md)
 - [SquareConnect.V1DeleteTimecardRequest](V1DeleteTimecardRequest.md)
 - [SquareConnect.V1DeleteTimecardResponse](V1DeleteTimecardResponse.md)
 - [SquareConnect.V1DeleteVariationRequest](V1DeleteVariationRequest.md)
 - [SquareConnect.V1Discount](V1Discount.md)
 - [SquareConnect.V1DiscountColor](V1DiscountColor.md)
 - [SquareConnect.V1DiscountDiscountType](V1DiscountDiscountType.md)
 - [SquareConnect.V1Employee](V1Employee.md)
 - [SquareConnect.V1EmployeeRole](V1EmployeeRole.md)
 - [SquareConnect.V1EmployeeRolePermissions](V1EmployeeRolePermissions.md)
 - [SquareConnect.V1EmployeeStatus](V1EmployeeStatus.md)
 - [SquareConnect.V1Fee](V1Fee.md)
 - [SquareConnect.V1FeeAdjustmentType](V1FeeAdjustmentType.md)
 - [SquareConnect.V1FeeCalculationPhase](V1FeeCalculationPhase.md)
 - [SquareConnect.V1FeeInclusionType](V1FeeInclusionType.md)
 - [SquareConnect.V1FeeType](V1FeeType.md)
 - [SquareConnect.V1InventoryEntry](V1InventoryEntry.md)
 - [SquareConnect.V1Item](V1Item.md)
 - [SquareConnect.V1ItemColor](V1ItemColor.md)
 - [SquareConnect.V1ItemImage](V1ItemImage.md)
 - [SquareConnect.V1ItemType](V1ItemType.md)
 - [SquareConnect.V1ItemVisibility](V1ItemVisibility.md)
 - [SquareConnect.V1ListBankAccountsRequest](V1ListBankAccountsRequest.md)
 - [SquareConnect.V1ListBankAccountsResponse](V1ListBankAccountsResponse.md)
 - [SquareConnect.V1ListCashDrawerShiftsRequest](V1ListCashDrawerShiftsRequest.md)
 - [SquareConnect.V1ListCashDrawerShiftsResponse](V1ListCashDrawerShiftsResponse.md)
 - [SquareConnect.V1ListCategoriesRequest](V1ListCategoriesRequest.md)
 - [SquareConnect.V1ListCategoriesResponse](V1ListCategoriesResponse.md)
 - [SquareConnect.V1ListDiscountsRequest](V1ListDiscountsRequest.md)
 - [SquareConnect.V1ListDiscountsResponse](V1ListDiscountsResponse.md)
 - [SquareConnect.V1ListEmployeeRolesRequest](V1ListEmployeeRolesRequest.md)
 - [SquareConnect.V1ListEmployeeRolesResponse](V1ListEmployeeRolesResponse.md)
 - [SquareConnect.V1ListEmployeesRequest](V1ListEmployeesRequest.md)
 - [SquareConnect.V1ListEmployeesRequestStatus](V1ListEmployeesRequestStatus.md)
 - [SquareConnect.V1ListEmployeesResponse](V1ListEmployeesResponse.md)
 - [SquareConnect.V1ListFeesRequest](V1ListFeesRequest.md)
 - [SquareConnect.V1ListFeesResponse](V1ListFeesResponse.md)
 - [SquareConnect.V1ListInventoryRequest](V1ListInventoryRequest.md)
 - [SquareConnect.V1ListInventoryResponse](V1ListInventoryResponse.md)
 - [SquareConnect.V1ListItemsRequest](V1ListItemsRequest.md)
 - [SquareConnect.V1ListItemsResponse](V1ListItemsResponse.md)
 - [SquareConnect.V1ListLocationsRequest](V1ListLocationsRequest.md)
 - [SquareConnect.V1ListLocationsResponse](V1ListLocationsResponse.md)
 - [SquareConnect.V1ListModifierListsRequest](V1ListModifierListsRequest.md)
 - [SquareConnect.V1ListModifierListsResponse](V1ListModifierListsResponse.md)
 - [SquareConnect.V1ListOrdersRequest](V1ListOrdersRequest.md)
 - [SquareConnect.V1ListOrdersResponse](V1ListOrdersResponse.md)
 - [SquareConnect.V1ListPagesRequest](V1ListPagesRequest.md)
 - [SquareConnect.V1ListPagesResponse](V1ListPagesResponse.md)
 - [SquareConnect.V1ListPaymentsRequest](V1ListPaymentsRequest.md)
 - [SquareConnect.V1ListPaymentsResponse](V1ListPaymentsResponse.md)
 - [SquareConnect.V1ListRefundsRequest](V1ListRefundsRequest.md)
 - [SquareConnect.V1ListRefundsResponse](V1ListRefundsResponse.md)
 - [SquareConnect.V1ListSettlementsRequest](V1ListSettlementsRequest.md)
 - [SquareConnect.V1ListSettlementsRequestStatus](V1ListSettlementsRequestStatus.md)
 - [SquareConnect.V1ListSettlementsResponse](V1ListSettlementsResponse.md)
 - [SquareConnect.V1ListTimecardEventsRequest](V1ListTimecardEventsRequest.md)
 - [SquareConnect.V1ListTimecardEventsResponse](V1ListTimecardEventsResponse.md)
 - [SquareConnect.V1ListTimecardsRequest](V1ListTimecardsRequest.md)
 - [SquareConnect.V1ListTimecardsResponse](V1ListTimecardsResponse.md)
 - [SquareConnect.V1Merchant](V1Merchant.md)
 - [SquareConnect.V1MerchantAccountType](V1MerchantAccountType.md)
 - [SquareConnect.V1MerchantBusinessType](V1MerchantBusinessType.md)
 - [SquareConnect.V1MerchantLocationDetails](V1MerchantLocationDetails.md)
 - [SquareConnect.V1ModifierList](V1ModifierList.md)
 - [SquareConnect.V1ModifierListSelectionType](V1ModifierListSelectionType.md)
 - [SquareConnect.V1ModifierOption](V1ModifierOption.md)
 - [SquareConnect.V1Money](V1Money.md)
 - [SquareConnect.V1Order](V1Order.md)
 - [SquareConnect.V1OrderHistoryEntry](V1OrderHistoryEntry.md)
 - [SquareConnect.V1OrderHistoryEntryAction](V1OrderHistoryEntryAction.md)
 - [SquareConnect.V1OrderState](V1OrderState.md)
 - [SquareConnect.V1Page](V1Page.md)
 - [SquareConnect.V1PageCell](V1PageCell.md)
 - [SquareConnect.V1PageCellObjectType](V1PageCellObjectType.md)
 - [SquareConnect.V1PageCellPlaceholderType](V1PageCellPlaceholderType.md)
 - [SquareConnect.V1Payment](V1Payment.md)
 - [SquareConnect.V1PaymentDiscount](V1PaymentDiscount.md)
 - [SquareConnect.V1PaymentItemDetail](V1PaymentItemDetail.md)
 - [SquareConnect.V1PaymentItemization](V1PaymentItemization.md)
 - [SquareConnect.V1PaymentItemizationItemizationType](V1PaymentItemizationItemizationType.md)
 - [SquareConnect.V1PaymentModifier](V1PaymentModifier.md)
 - [SquareConnect.V1PaymentSurcharge](V1PaymentSurcharge.md)
 - [SquareConnect.V1PaymentSurchargeType](V1PaymentSurchargeType.md)
 - [SquareConnect.V1PaymentTax](V1PaymentTax.md)
 - [SquareConnect.V1PaymentTaxInclusionType](V1PaymentTaxInclusionType.md)
 - [SquareConnect.V1PhoneNumber](V1PhoneNumber.md)
 - [SquareConnect.V1Refund](V1Refund.md)
 - [SquareConnect.V1RefundType](V1RefundType.md)
 - [SquareConnect.V1RemoveFeeRequest](V1RemoveFeeRequest.md)
 - [SquareConnect.V1RemoveModifierListRequest](V1RemoveModifierListRequest.md)
 - [SquareConnect.V1RetrieveBankAccountRequest](V1RetrieveBankAccountRequest.md)
 - [SquareConnect.V1RetrieveBusinessRequest](V1RetrieveBusinessRequest.md)
 - [SquareConnect.V1RetrieveCashDrawerShiftRequest](V1RetrieveCashDrawerShiftRequest.md)
 - [SquareConnect.V1RetrieveEmployeeRequest](V1RetrieveEmployeeRequest.md)
 - [SquareConnect.V1RetrieveEmployeeRoleRequest](V1RetrieveEmployeeRoleRequest.md)
 - [SquareConnect.V1RetrieveItemRequest](V1RetrieveItemRequest.md)
 - [SquareConnect.V1RetrieveModifierListRequest](V1RetrieveModifierListRequest.md)
 - [SquareConnect.V1RetrieveOrderRequest](V1RetrieveOrderRequest.md)
 - [SquareConnect.V1RetrievePaymentRequest](V1RetrievePaymentRequest.md)
 - [SquareConnect.V1RetrieveSettlementRequest](V1RetrieveSettlementRequest.md)
 - [SquareConnect.V1RetrieveTimecardRequest](V1RetrieveTimecardRequest.md)
 - [SquareConnect.V1Settlement](V1Settlement.md)
 - [SquareConnect.V1SettlementEntry](V1SettlementEntry.md)
 - [SquareConnect.V1SettlementEntryType](V1SettlementEntryType.md)
 - [SquareConnect.V1SettlementStatus](V1SettlementStatus.md)
 - [SquareConnect.V1Tender](V1Tender.md)
 - [SquareConnect.V1TenderCardBrand](V1TenderCardBrand.md)
 - [SquareConnect.V1TenderEntryMethod](V1TenderEntryMethod.md)
 - [SquareConnect.V1TenderType](V1TenderType.md)
 - [SquareConnect.V1Timecard](V1Timecard.md)
 - [SquareConnect.V1TimecardEvent](V1TimecardEvent.md)
 - [SquareConnect.V1TimecardEventEventType](V1TimecardEventEventType.md)
 - [SquareConnect.V1UpdateCategoryRequest](V1UpdateCategoryRequest.md)
 - [SquareConnect.V1UpdateDiscountRequest](V1UpdateDiscountRequest.md)
 - [SquareConnect.V1UpdateEmployeeRequest](V1UpdateEmployeeRequest.md)
 - [SquareConnect.V1UpdateEmployeeRoleRequest](V1UpdateEmployeeRoleRequest.md)
 - [SquareConnect.V1UpdateFeeRequest](V1UpdateFeeRequest.md)
 - [SquareConnect.V1UpdateItemRequest](V1UpdateItemRequest.md)
 - [SquareConnect.V1UpdateModifierListRequest](V1UpdateModifierListRequest.md)
 - [SquareConnect.V1UpdateModifierListRequestSelectionType](V1UpdateModifierListRequestSelectionType.md)
 - [SquareConnect.V1UpdateModifierOptionRequest](V1UpdateModifierOptionRequest.md)
 - [SquareConnect.V1UpdateOrderRequest](V1UpdateOrderRequest.md)
 - [SquareConnect.V1UpdateOrderRequestAction](V1UpdateOrderRequestAction.md)
 - [SquareConnect.V1UpdatePageCellRequest](V1UpdatePageCellRequest.md)
 - [SquareConnect.V1UpdatePageRequest](V1UpdatePageRequest.md)
 - [SquareConnect.V1UpdateTimecardRequest](V1UpdateTimecardRequest.md)
 - [SquareConnect.V1UpdateVariationRequest](V1UpdateVariationRequest.md)
 - [SquareConnect.V1Variation](V1Variation.md)
 - [SquareConnect.V1VariationInventoryAlertType](V1VariationInventoryAlertType.md)
 - [SquareConnect.V1VariationPricingType](V1VariationPricingType.md)
 - [SquareConnect.VoidTransactionRequest](VoidTransactionRequest.md)
 - [SquareConnect.VoidTransactionResponse](VoidTransactionResponse.md)
 - [SquareConnect.WageSetting](WageSetting.md)
 - [SquareConnect.Weekday](Weekday.md)
 - [SquareConnect.WorkweekConfig](WorkweekConfig.md)


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
