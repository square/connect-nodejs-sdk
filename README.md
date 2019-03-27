# Square Connect Node SDK [![Build Status](https://travis-ci.org/square/connect-javascript-sdk.svg?branch=master)](https://travis-ci.org/square/connect-javascript-sdk)[![npm version](https://badge.fury.io/js/square-connect.svg)](https://badge.fury.io/js/square-connect)

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
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

## Documentation for API Endpoints

All URIs are relative to *https://connect.squareup.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*SquareConnect.ApplePayApi* | [**registerDomain**](docs/ApplePayApi.md#registerDomain) | **POST** /v2/apple-pay/domains | RegisterDomain
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
*SquareConnect.CustomersApi* | [**createCustomer**](docs/CustomersApi.md#createCustomer) | **POST** /v2/customers | CreateCustomer
*SquareConnect.CustomersApi* | [**createCustomerCard**](docs/CustomersApi.md#createCustomerCard) | **POST** /v2/customers/{customer_id}/cards | CreateCustomerCard
*SquareConnect.CustomersApi* | [**deleteCustomer**](docs/CustomersApi.md#deleteCustomer) | **DELETE** /v2/customers/{customer_id} | DeleteCustomer
*SquareConnect.CustomersApi* | [**deleteCustomerCard**](docs/CustomersApi.md#deleteCustomerCard) | **DELETE** /v2/customers/{customer_id}/cards/{card_id} | DeleteCustomerCard
*SquareConnect.CustomersApi* | [**listCustomers**](docs/CustomersApi.md#listCustomers) | **GET** /v2/customers | ListCustomers
*SquareConnect.CustomersApi* | [**retrieveCustomer**](docs/CustomersApi.md#retrieveCustomer) | **GET** /v2/customers/{customer_id} | RetrieveCustomer
*SquareConnect.CustomersApi* | [**searchCustomers**](docs/CustomersApi.md#searchCustomers) | **POST** /v2/customers/search | SearchCustomers
*SquareConnect.CustomersApi* | [**updateCustomer**](docs/CustomersApi.md#updateCustomer) | **PUT** /v2/customers/{customer_id} | UpdateCustomer
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
*SquareConnect.LocationsApi* | [**listLocations**](docs/LocationsApi.md#listLocations) | **GET** /v2/locations | ListLocations
*SquareConnect.MobileAuthorizationApi* | [**createMobileAuthorizationCode**](docs/MobileAuthorizationApi.md#createMobileAuthorizationCode) | **POST** /mobile/authorization-code | CreateMobileAuthorizationCode
*SquareConnect.OAuthApi* | [**obtainToken**](docs/OAuthApi.md#obtainToken) | **POST** /oauth2/token | ObtainToken
*SquareConnect.OAuthApi* | [**renewToken**](docs/OAuthApi.md#renewToken) | **POST** /oauth2/clients/{client_id}/access-token/renew | RenewToken
*SquareConnect.OAuthApi* | [**revokeToken**](docs/OAuthApi.md#revokeToken) | **POST** /oauth2/revoke | RevokeToken
*SquareConnect.OrdersApi* | [**batchRetrieveOrders**](docs/OrdersApi.md#batchRetrieveOrders) | **POST** /v2/locations/{location_id}/orders/batch-retrieve | BatchRetrieveOrders
*SquareConnect.OrdersApi* | [**createOrder**](docs/OrdersApi.md#createOrder) | **POST** /v2/locations/{location_id}/orders | CreateOrder
*SquareConnect.ReportingApi* | [**listAdditionalRecipientReceivableRefunds**](docs/ReportingApi.md#listAdditionalRecipientReceivableRefunds) | **GET** /v2/locations/{location_id}/additional-recipient-receivable-refunds | ListAdditionalRecipientReceivableRefunds
*SquareConnect.ReportingApi* | [**listAdditionalRecipientReceivables**](docs/ReportingApi.md#listAdditionalRecipientReceivables) | **GET** /v2/locations/{location_id}/additional-recipient-receivables | ListAdditionalRecipientReceivables
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

 - [SquareConnect.AdditionalRecipient](docs/AdditionalRecipient.md)
 - [SquareConnect.AdditionalRecipientReceivable](docs/AdditionalRecipientReceivable.md)
 - [SquareConnect.AdditionalRecipientReceivableRefund](docs/AdditionalRecipientReceivableRefund.md)
 - [SquareConnect.Address](docs/Address.md)
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
 - [SquareConnect.CaptureTransactionRequest](docs/CaptureTransactionRequest.md)
 - [SquareConnect.CaptureTransactionResponse](docs/CaptureTransactionResponse.md)
 - [SquareConnect.Card](docs/Card.md)
 - [SquareConnect.CardBrand](docs/CardBrand.md)
 - [SquareConnect.CatalogCategory](docs/CatalogCategory.md)
 - [SquareConnect.CatalogDiscount](docs/CatalogDiscount.md)
 - [SquareConnect.CatalogDiscountType](docs/CatalogDiscountType.md)
 - [SquareConnect.CatalogIdMapping](docs/CatalogIdMapping.md)
 - [SquareConnect.CatalogImage](docs/CatalogImage.md)
 - [SquareConnect.CatalogInfoRequest](docs/CatalogInfoRequest.md)
 - [SquareConnect.CatalogInfoResponse](docs/CatalogInfoResponse.md)
 - [SquareConnect.CatalogInfoResponseLimits](docs/CatalogInfoResponseLimits.md)
 - [SquareConnect.CatalogItem](docs/CatalogItem.md)
 - [SquareConnect.CatalogItemModifierListInfo](docs/CatalogItemModifierListInfo.md)
 - [SquareConnect.CatalogItemProductType](docs/CatalogItemProductType.md)
 - [SquareConnect.CatalogItemVariation](docs/CatalogItemVariation.md)
 - [SquareConnect.CatalogModifier](docs/CatalogModifier.md)
 - [SquareConnect.CatalogModifierList](docs/CatalogModifierList.md)
 - [SquareConnect.CatalogModifierListSelectionType](docs/CatalogModifierListSelectionType.md)
 - [SquareConnect.CatalogModifierOverride](docs/CatalogModifierOverride.md)
 - [SquareConnect.CatalogObject](docs/CatalogObject.md)
 - [SquareConnect.CatalogObjectBatch](docs/CatalogObjectBatch.md)
 - [SquareConnect.CatalogObjectType](docs/CatalogObjectType.md)
 - [SquareConnect.CatalogPricingType](docs/CatalogPricingType.md)
 - [SquareConnect.CatalogQuery](docs/CatalogQuery.md)
 - [SquareConnect.CatalogQueryExact](docs/CatalogQueryExact.md)
 - [SquareConnect.CatalogQueryItemsForModifierList](docs/CatalogQueryItemsForModifierList.md)
 - [SquareConnect.CatalogQueryItemsForTax](docs/CatalogQueryItemsForTax.md)
 - [SquareConnect.CatalogQueryPrefix](docs/CatalogQueryPrefix.md)
 - [SquareConnect.CatalogQueryRange](docs/CatalogQueryRange.md)
 - [SquareConnect.CatalogQuerySortedAttribute](docs/CatalogQuerySortedAttribute.md)
 - [SquareConnect.CatalogQueryText](docs/CatalogQueryText.md)
 - [SquareConnect.CatalogTax](docs/CatalogTax.md)
 - [SquareConnect.CatalogV1Id](docs/CatalogV1Id.md)
 - [SquareConnect.ChargeRequest](docs/ChargeRequest.md)
 - [SquareConnect.ChargeRequestAdditionalRecipient](docs/ChargeRequestAdditionalRecipient.md)
 - [SquareConnect.ChargeResponse](docs/ChargeResponse.md)
 - [SquareConnect.Checkout](docs/Checkout.md)
 - [SquareConnect.Country](docs/Country.md)
 - [SquareConnect.CreateBreakTypeRequest](docs/CreateBreakTypeRequest.md)
 - [SquareConnect.CreateBreakTypeResponse](docs/CreateBreakTypeResponse.md)
 - [SquareConnect.CreateCheckoutRequest](docs/CreateCheckoutRequest.md)
 - [SquareConnect.CreateCheckoutResponse](docs/CreateCheckoutResponse.md)
 - [SquareConnect.CreateCustomerCardRequest](docs/CreateCustomerCardRequest.md)
 - [SquareConnect.CreateCustomerCardResponse](docs/CreateCustomerCardResponse.md)
 - [SquareConnect.CreateCustomerRequest](docs/CreateCustomerRequest.md)
 - [SquareConnect.CreateCustomerResponse](docs/CreateCustomerResponse.md)
 - [SquareConnect.CreateMobileAuthorizationCodeRequest](docs/CreateMobileAuthorizationCodeRequest.md)
 - [SquareConnect.CreateMobileAuthorizationCodeResponse](docs/CreateMobileAuthorizationCodeResponse.md)
 - [SquareConnect.CreateOrderRequest](docs/CreateOrderRequest.md)
 - [SquareConnect.CreateOrderRequestDiscount](docs/CreateOrderRequestDiscount.md)
 - [SquareConnect.CreateOrderRequestLineItem](docs/CreateOrderRequestLineItem.md)
 - [SquareConnect.CreateOrderRequestModifier](docs/CreateOrderRequestModifier.md)
 - [SquareConnect.CreateOrderRequestTax](docs/CreateOrderRequestTax.md)
 - [SquareConnect.CreateOrderResponse](docs/CreateOrderResponse.md)
 - [SquareConnect.CreateRefundRequest](docs/CreateRefundRequest.md)
 - [SquareConnect.CreateRefundResponse](docs/CreateRefundResponse.md)
 - [SquareConnect.CreateShiftRequest](docs/CreateShiftRequest.md)
 - [SquareConnect.CreateShiftResponse](docs/CreateShiftResponse.md)
 - [SquareConnect.Currency](docs/Currency.md)
 - [SquareConnect.Customer](docs/Customer.md)
 - [SquareConnect.CustomerCreationSource](docs/CustomerCreationSource.md)
 - [SquareConnect.CustomerCreationSourceFilter](docs/CustomerCreationSourceFilter.md)
 - [SquareConnect.CustomerFilter](docs/CustomerFilter.md)
 - [SquareConnect.CustomerGroupInfo](docs/CustomerGroupInfo.md)
 - [SquareConnect.CustomerInclusionExclusion](docs/CustomerInclusionExclusion.md)
 - [SquareConnect.CustomerPreferences](docs/CustomerPreferences.md)
 - [SquareConnect.CustomerQuery](docs/CustomerQuery.md)
 - [SquareConnect.CustomerSort](docs/CustomerSort.md)
 - [SquareConnect.CustomerSortField](docs/CustomerSortField.md)
 - [SquareConnect.DateRange](docs/DateRange.md)
 - [SquareConnect.DeleteBreakTypeRequest](docs/DeleteBreakTypeRequest.md)
 - [SquareConnect.DeleteBreakTypeResponse](docs/DeleteBreakTypeResponse.md)
 - [SquareConnect.DeleteCatalogObjectRequest](docs/DeleteCatalogObjectRequest.md)
 - [SquareConnect.DeleteCatalogObjectResponse](docs/DeleteCatalogObjectResponse.md)
 - [SquareConnect.DeleteCustomerCardRequest](docs/DeleteCustomerCardRequest.md)
 - [SquareConnect.DeleteCustomerCardResponse](docs/DeleteCustomerCardResponse.md)
 - [SquareConnect.DeleteCustomerRequest](docs/DeleteCustomerRequest.md)
 - [SquareConnect.DeleteCustomerResponse](docs/DeleteCustomerResponse.md)
 - [SquareConnect.DeleteShiftRequest](docs/DeleteShiftRequest.md)
 - [SquareConnect.DeleteShiftResponse](docs/DeleteShiftResponse.md)
 - [SquareConnect.Device](docs/Device.md)
 - [SquareConnect.Employee](docs/Employee.md)
 - [SquareConnect.EmployeeStatus](docs/EmployeeStatus.md)
 - [SquareConnect.EmployeeWage](docs/EmployeeWage.md)
 - [SquareConnect.Error](docs/Error.md)
 - [SquareConnect.ErrorCategory](docs/ErrorCategory.md)
 - [SquareConnect.ErrorCode](docs/ErrorCode.md)
 - [SquareConnect.GetBreakTypeRequest](docs/GetBreakTypeRequest.md)
 - [SquareConnect.GetBreakTypeResponse](docs/GetBreakTypeResponse.md)
 - [SquareConnect.GetEmployeeWageRequest](docs/GetEmployeeWageRequest.md)
 - [SquareConnect.GetEmployeeWageResponse](docs/GetEmployeeWageResponse.md)
 - [SquareConnect.GetShiftRequest](docs/GetShiftRequest.md)
 - [SquareConnect.GetShiftResponse](docs/GetShiftResponse.md)
 - [SquareConnect.InventoryAdjustment](docs/InventoryAdjustment.md)
 - [SquareConnect.InventoryAlertType](docs/InventoryAlertType.md)
 - [SquareConnect.InventoryChange](docs/InventoryChange.md)
 - [SquareConnect.InventoryChangeType](docs/InventoryChangeType.md)
 - [SquareConnect.InventoryCount](docs/InventoryCount.md)
 - [SquareConnect.InventoryPhysicalCount](docs/InventoryPhysicalCount.md)
 - [SquareConnect.InventoryState](docs/InventoryState.md)
 - [SquareConnect.InventoryTransfer](docs/InventoryTransfer.md)
 - [SquareConnect.ItemVariationLocationOverrides](docs/ItemVariationLocationOverrides.md)
 - [SquareConnect.ListAdditionalRecipientReceivableRefundsRequest](docs/ListAdditionalRecipientReceivableRefundsRequest.md)
 - [SquareConnect.ListAdditionalRecipientReceivableRefundsResponse](docs/ListAdditionalRecipientReceivableRefundsResponse.md)
 - [SquareConnect.ListAdditionalRecipientReceivablesRequest](docs/ListAdditionalRecipientReceivablesRequest.md)
 - [SquareConnect.ListAdditionalRecipientReceivablesResponse](docs/ListAdditionalRecipientReceivablesResponse.md)
 - [SquareConnect.ListBreakTypesRequest](docs/ListBreakTypesRequest.md)
 - [SquareConnect.ListBreakTypesResponse](docs/ListBreakTypesResponse.md)
 - [SquareConnect.ListCatalogRequest](docs/ListCatalogRequest.md)
 - [SquareConnect.ListCatalogResponse](docs/ListCatalogResponse.md)
 - [SquareConnect.ListCustomersRequest](docs/ListCustomersRequest.md)
 - [SquareConnect.ListCustomersResponse](docs/ListCustomersResponse.md)
 - [SquareConnect.ListEmployeeWagesRequest](docs/ListEmployeeWagesRequest.md)
 - [SquareConnect.ListEmployeeWagesResponse](docs/ListEmployeeWagesResponse.md)
 - [SquareConnect.ListEmployeesRequest](docs/ListEmployeesRequest.md)
 - [SquareConnect.ListEmployeesResponse](docs/ListEmployeesResponse.md)
 - [SquareConnect.ListLocationsRequest](docs/ListLocationsRequest.md)
 - [SquareConnect.ListLocationsResponse](docs/ListLocationsResponse.md)
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
 - [SquareConnect.ModelBreak](docs/ModelBreak.md)
 - [SquareConnect.Money](docs/Money.md)
 - [SquareConnect.ObtainTokenRequest](docs/ObtainTokenRequest.md)
 - [SquareConnect.ObtainTokenResponse](docs/ObtainTokenResponse.md)
 - [SquareConnect.Order](docs/Order.md)
 - [SquareConnect.OrderFulfillment](docs/OrderFulfillment.md)
 - [SquareConnect.OrderFulfillmentPickupDetails](docs/OrderFulfillmentPickupDetails.md)
 - [SquareConnect.OrderFulfillmentPickupDetailsScheduleType](docs/OrderFulfillmentPickupDetailsScheduleType.md)
 - [SquareConnect.OrderFulfillmentRecipient](docs/OrderFulfillmentRecipient.md)
 - [SquareConnect.OrderFulfillmentState](docs/OrderFulfillmentState.md)
 - [SquareConnect.OrderFulfillmentType](docs/OrderFulfillmentType.md)
 - [SquareConnect.OrderLineItem](docs/OrderLineItem.md)
 - [SquareConnect.OrderLineItemDiscount](docs/OrderLineItemDiscount.md)
 - [SquareConnect.OrderLineItemDiscountScope](docs/OrderLineItemDiscountScope.md)
 - [SquareConnect.OrderLineItemDiscountType](docs/OrderLineItemDiscountType.md)
 - [SquareConnect.OrderLineItemModifier](docs/OrderLineItemModifier.md)
 - [SquareConnect.OrderLineItemTax](docs/OrderLineItemTax.md)
 - [SquareConnect.OrderLineItemTaxScope](docs/OrderLineItemTaxScope.md)
 - [SquareConnect.OrderLineItemTaxType](docs/OrderLineItemTaxType.md)
 - [SquareConnect.Product](docs/Product.md)
 - [SquareConnect.Refund](docs/Refund.md)
 - [SquareConnect.RefundStatus](docs/RefundStatus.md)
 - [SquareConnect.RegisterDomainRequest](docs/RegisterDomainRequest.md)
 - [SquareConnect.RegisterDomainResponse](docs/RegisterDomainResponse.md)
 - [SquareConnect.RegisterDomainResponseStatus](docs/RegisterDomainResponseStatus.md)
 - [SquareConnect.RenewTokenRequest](docs/RenewTokenRequest.md)
 - [SquareConnect.RenewTokenResponse](docs/RenewTokenResponse.md)
 - [SquareConnect.RetrieveCatalogObjectRequest](docs/RetrieveCatalogObjectRequest.md)
 - [SquareConnect.RetrieveCatalogObjectResponse](docs/RetrieveCatalogObjectResponse.md)
 - [SquareConnect.RetrieveCustomerRequest](docs/RetrieveCustomerRequest.md)
 - [SquareConnect.RetrieveCustomerResponse](docs/RetrieveCustomerResponse.md)
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
 - [SquareConnect.RetrieveTransactionRequest](docs/RetrieveTransactionRequest.md)
 - [SquareConnect.RetrieveTransactionResponse](docs/RetrieveTransactionResponse.md)
 - [SquareConnect.RevokeTokenRequest](docs/RevokeTokenRequest.md)
 - [SquareConnect.RevokeTokenResponse](docs/RevokeTokenResponse.md)
 - [SquareConnect.SearchCatalogObjectsRequest](docs/SearchCatalogObjectsRequest.md)
 - [SquareConnect.SearchCatalogObjectsResponse](docs/SearchCatalogObjectsResponse.md)
 - [SquareConnect.SearchCustomersRequest](docs/SearchCustomersRequest.md)
 - [SquareConnect.SearchCustomersResponse](docs/SearchCustomersResponse.md)
 - [SquareConnect.SearchShiftsRequest](docs/SearchShiftsRequest.md)
 - [SquareConnect.SearchShiftsResponse](docs/SearchShiftsResponse.md)
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
 - [SquareConnect.TaxCalculationPhase](docs/TaxCalculationPhase.md)
 - [SquareConnect.TaxInclusionType](docs/TaxInclusionType.md)
 - [SquareConnect.Tender](docs/Tender.md)
 - [SquareConnect.TenderCardDetails](docs/TenderCardDetails.md)
 - [SquareConnect.TenderCardDetailsEntryMethod](docs/TenderCardDetailsEntryMethod.md)
 - [SquareConnect.TenderCardDetailsStatus](docs/TenderCardDetailsStatus.md)
 - [SquareConnect.TenderCashDetails](docs/TenderCashDetails.md)
 - [SquareConnect.TenderType](docs/TenderType.md)
 - [SquareConnect.TimeRange](docs/TimeRange.md)
 - [SquareConnect.Transaction](docs/Transaction.md)
 - [SquareConnect.TransactionProduct](docs/TransactionProduct.md)
 - [SquareConnect.UpdateBreakTypeRequest](docs/UpdateBreakTypeRequest.md)
 - [SquareConnect.UpdateBreakTypeResponse](docs/UpdateBreakTypeResponse.md)
 - [SquareConnect.UpdateCustomerRequest](docs/UpdateCustomerRequest.md)
 - [SquareConnect.UpdateCustomerResponse](docs/UpdateCustomerResponse.md)
 - [SquareConnect.UpdateItemModifierListsRequest](docs/UpdateItemModifierListsRequest.md)
 - [SquareConnect.UpdateItemModifierListsResponse](docs/UpdateItemModifierListsResponse.md)
 - [SquareConnect.UpdateItemTaxesRequest](docs/UpdateItemTaxesRequest.md)
 - [SquareConnect.UpdateItemTaxesResponse](docs/UpdateItemTaxesResponse.md)
 - [SquareConnect.UpdateShiftRequest](docs/UpdateShiftRequest.md)
 - [SquareConnect.UpdateShiftResponse](docs/UpdateShiftResponse.md)
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
 - [SquareConnect.Weekday](docs/Weekday.md)
 - [SquareConnect.WorkweekConfig](docs/WorkweekConfig.md)


## Documentation for Authorization


### oauth2

- **Type**: OAuth
- **Flow**: accessCode
- **Authorization URL**: https://connect.squareup.com/oauth2/authorize
- **Scopes**: 
  - MERCHANT_PROFILE_READ: GET endpoints related to a merchant&#39;s business and location entities. Almost all Connect API applications need this permission in order to obtain a merchant&#39;s location IDs
  - PAYMENTS_READ: GET endpoints related to transactions and refunds
  - PAYMENTS_WRITE: POST, PUT, and DELETE endpoints related to transactions and refunds. E-commerce applications must request this permission
  - CUSTOMERS_READ:  GET endpoints related to customer management
  - CUSTOMERS_WRITE: POST, PUT, and DELETE endpoints related to customer management
  - SETTLEMENTS_READ: GET endpoints related to settlements (deposits)
  - BANK_ACCOUNTS_READ: GET endpoints related to a merchant&#39;s bank accounts
  - ITEMS_READ: GET endpoints related to a merchant&#39;s item library
  - ITEMS_WRITE: POST, PUT, and DELETE endpoints related to a merchant&#39;s item library
  - ORDERS_READ: GET endpoints related to a merchant&#39;s orders
  - ORDERS_WRITE: POST, PUT, and DELETE endpoints related to a merchant&#39;s orders
  - EMPLOYEES_READ: GET endpoints related to employee management
  - EMPLOYEES_WRITE: POST, PUT, and DELETE endpoints related to employee management
  - TIMECARDS_READ: GET endpoints related to employee timecards
  - TIMECARDS_WRITE: POST, PUT, and DELETE endpoints related to employee timecards
  - PAYMENTS_WRITE_ADDITIONAL_RECIPIENTS: Allow third party applications to deduct a portion of each transaction amount.
  - PAYMENTS_WRITE_IN_PERSON: POST, PUT, and DELETE endpoints. Grants write access to transaction and refunds information.
  - INVENTORY_READ: GET endpoints related to a merchant&#39;s inventory
  - INVENTORY_WRITE: POST, PUT, and DELETE endpoints related to a merchant&#39;s inventory

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
