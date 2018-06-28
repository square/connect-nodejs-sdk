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
*SquareConnect.LocationsApi* | [**listLocations**](docs/LocationsApi.md#listLocations) | **GET** /v2/locations | ListLocations
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
*SquareConnect.V1EmployeesApi* | [**createEmployee**](docs/V1EmployeesApi.md#createEmployee) | **POST** /v1/me/employees | Creates an employee for a business.
*SquareConnect.V1EmployeesApi* | [**createEmployeeRole**](docs/V1EmployeesApi.md#createEmployeeRole) | **POST** /v1/me/roles | Creates an employee role you can then assign to employees.
*SquareConnect.V1EmployeesApi* | [**createTimecard**](docs/V1EmployeesApi.md#createTimecard) | **POST** /v1/me/timecards | Creates a timecard for an employee. Each timecard corresponds to a single shift.
*SquareConnect.V1EmployeesApi* | [**deleteTimecard**](docs/V1EmployeesApi.md#deleteTimecard) | **DELETE** /v1/me/timecards/{timecard_id} | Deletes a timecard. Deleted timecards are still accessible from Connect API endpoints, but the value of their deleted field is set to true. See Handling deleted timecards for more information.
*SquareConnect.V1EmployeesApi* | [**listCashDrawerShifts**](docs/V1EmployeesApi.md#listCashDrawerShifts) | **GET** /v1/{location_id}/cash-drawer-shifts | Provides the details for all of a location&#39;s cash drawer shifts during a date range. The date range you specify cannot exceed 90 days.
*SquareConnect.V1EmployeesApi* | [**listEmployeeRoles**](docs/V1EmployeesApi.md#listEmployeeRoles) | **GET** /v1/me/roles | Provides summary information for all of a business&#39;s employee roles.
*SquareConnect.V1EmployeesApi* | [**listEmployees**](docs/V1EmployeesApi.md#listEmployees) | **GET** /v1/me/employees | Provides summary information for all of a business&#39;s employees.
*SquareConnect.V1EmployeesApi* | [**listTimecardEvents**](docs/V1EmployeesApi.md#listTimecardEvents) | **GET** /v1/me/timecards/{timecard_id}/events | Provides summary information for all events associated with a particular timecard.
*SquareConnect.V1EmployeesApi* | [**listTimecards**](docs/V1EmployeesApi.md#listTimecards) | **GET** /v1/me/timecards | Provides summary information for all of a business&#39;s employee timecards.
*SquareConnect.V1EmployeesApi* | [**retrieveCashDrawerShift**](docs/V1EmployeesApi.md#retrieveCashDrawerShift) | **GET** /v1/{location_id}/cash-drawer-shifts/{shift_id} | Provides the details for a single cash drawer shift, including all events that occurred during the shift.
*SquareConnect.V1EmployeesApi* | [**retrieveEmployee**](docs/V1EmployeesApi.md#retrieveEmployee) | **GET** /v1/me/employees/{employee_id} | Provides the details for a single employee.
*SquareConnect.V1EmployeesApi* | [**retrieveEmployeeRole**](docs/V1EmployeesApi.md#retrieveEmployeeRole) | **GET** /v1/me/roles/{role_id} | Provides the details for a single employee role.
*SquareConnect.V1EmployeesApi* | [**retrieveTimecard**](docs/V1EmployeesApi.md#retrieveTimecard) | **GET** /v1/me/timecards/{timecard_id} | Provides the details for a single timecard.
*SquareConnect.V1EmployeesApi* | [**updateEmployee**](docs/V1EmployeesApi.md#updateEmployee) | **PUT** /v1/me/employees/{employee_id} | V1 UpdateEmployee
*SquareConnect.V1EmployeesApi* | [**updateEmployeeRole**](docs/V1EmployeesApi.md#updateEmployeeRole) | **PUT** /v1/me/roles/{role_id} | Modifies the details of an employee role.
*SquareConnect.V1EmployeesApi* | [**updateTimecard**](docs/V1EmployeesApi.md#updateTimecard) | **PUT** /v1/me/timecards/{timecard_id} | Modifies a timecard&#39;s details. This creates an API_EDIT event for the timecard. You can view a timecard&#39;s event history with the List Timecard Events endpoint.
*SquareConnect.V1ItemsApi* | [**adjustInventory**](docs/V1ItemsApi.md#adjustInventory) | **POST** /v1/{location_id}/inventory/{variation_id} | Adjusts an item variation&#39;s current available inventory.
*SquareConnect.V1ItemsApi* | [**applyFee**](docs/V1ItemsApi.md#applyFee) | **PUT** /v1/{location_id}/items/{item_id}/fees/{fee_id} | Associates a fee with an item, meaning the fee is automatically applied to the item in Square Register.
*SquareConnect.V1ItemsApi* | [**applyModifierList**](docs/V1ItemsApi.md#applyModifierList) | **PUT** /v1/{location_id}/items/{item_id}/modifier-lists/{modifier_list_id} | Associates a modifier list with an item, meaning modifier options from the list can be applied to the item.
*SquareConnect.V1ItemsApi* | [**createCategory**](docs/V1ItemsApi.md#createCategory) | **POST** /v1/{location_id}/categories | Creates an item category.
*SquareConnect.V1ItemsApi* | [**createDiscount**](docs/V1ItemsApi.md#createDiscount) | **POST** /v1/{location_id}/discounts | Creates a discount.
*SquareConnect.V1ItemsApi* | [**createFee**](docs/V1ItemsApi.md#createFee) | **POST** /v1/{location_id}/fees | Creates a fee (tax).
*SquareConnect.V1ItemsApi* | [**createItem**](docs/V1ItemsApi.md#createItem) | **POST** /v1/{location_id}/items | Creates an item and at least one variation for it.
*SquareConnect.V1ItemsApi* | [**createModifierList**](docs/V1ItemsApi.md#createModifierList) | **POST** /v1/{location_id}/modifier-lists | Creates an item modifier list and at least one modifier option for it.
*SquareConnect.V1ItemsApi* | [**createModifierOption**](docs/V1ItemsApi.md#createModifierOption) | **POST** /v1/{location_id}/modifier-lists/{modifier_list_id}/modifier-options | Creates an item modifier option and adds it to a modifier list.
*SquareConnect.V1ItemsApi* | [**createPage**](docs/V1ItemsApi.md#createPage) | **POST** /v1/{location_id}/pages | Creates a Favorites page in Square Register.
*SquareConnect.V1ItemsApi* | [**createVariation**](docs/V1ItemsApi.md#createVariation) | **POST** /v1/{location_id}/items/{item_id}/variations | Creates an item variation for an existing item.
*SquareConnect.V1ItemsApi* | [**deleteCategory**](docs/V1ItemsApi.md#deleteCategory) | **DELETE** /v1/{location_id}/categories/{category_id} | Deletes an existing item category.
*SquareConnect.V1ItemsApi* | [**deleteDiscount**](docs/V1ItemsApi.md#deleteDiscount) | **DELETE** /v1/{location_id}/discounts/{discount_id} | Deletes an existing discount.
*SquareConnect.V1ItemsApi* | [**deleteFee**](docs/V1ItemsApi.md#deleteFee) | **DELETE** /v1/{location_id}/fees/{fee_id} | Deletes an existing fee (tax).
*SquareConnect.V1ItemsApi* | [**deleteItem**](docs/V1ItemsApi.md#deleteItem) | **DELETE** /v1/{location_id}/items/{item_id} | Deletes an existing item and all item variations associated with it.
*SquareConnect.V1ItemsApi* | [**deleteModifierList**](docs/V1ItemsApi.md#deleteModifierList) | **DELETE** /v1/{location_id}/modifier-lists/{modifier_list_id} | Deletes an existing item modifier list and all modifier options associated with it.
*SquareConnect.V1ItemsApi* | [**deleteModifierOption**](docs/V1ItemsApi.md#deleteModifierOption) | **DELETE** /v1/{location_id}/modifier-lists/{modifier_list_id}/modifier-options/{modifier_option_id} | Deletes an existing item modifier option from a modifier list.
*SquareConnect.V1ItemsApi* | [**deletePage**](docs/V1ItemsApi.md#deletePage) | **DELETE** /v1/{location_id}/pages/{page_id} | Deletes an existing Favorites page and all of its cells.
*SquareConnect.V1ItemsApi* | [**deletePageCell**](docs/V1ItemsApi.md#deletePageCell) | **DELETE** /v1/{location_id}/pages/{page_id}/cells | Deletes a cell from a Favorites page in Square Register.
*SquareConnect.V1ItemsApi* | [**deleteVariation**](docs/V1ItemsApi.md#deleteVariation) | **DELETE** /v1/{location_id}/items/{item_id}/variations/{variation_id} | Deletes an existing item variation from an item.
*SquareConnect.V1ItemsApi* | [**listCategories**](docs/V1ItemsApi.md#listCategories) | **GET** /v1/{location_id}/categories | Lists all of a location&#39;s item categories.
*SquareConnect.V1ItemsApi* | [**listDiscounts**](docs/V1ItemsApi.md#listDiscounts) | **GET** /v1/{location_id}/discounts | Lists all of a location&#39;s discounts.
*SquareConnect.V1ItemsApi* | [**listFees**](docs/V1ItemsApi.md#listFees) | **GET** /v1/{location_id}/fees | Lists all of a location&#39;s fees (taxes).
*SquareConnect.V1ItemsApi* | [**listInventory**](docs/V1ItemsApi.md#listInventory) | **GET** /v1/{location_id}/inventory | Provides inventory information for all of a merchant&#39;s inventory-enabled item variations.
*SquareConnect.V1ItemsApi* | [**listItems**](docs/V1ItemsApi.md#listItems) | **GET** /v1/{location_id}/items | Provides summary information for all of a location&#39;s items.
*SquareConnect.V1ItemsApi* | [**listModifierLists**](docs/V1ItemsApi.md#listModifierLists) | **GET** /v1/{location_id}/modifier-lists | Lists all of a location&#39;s modifier lists.
*SquareConnect.V1ItemsApi* | [**listPages**](docs/V1ItemsApi.md#listPages) | **GET** /v1/{location_id}/pages | Lists all of a location&#39;s Favorites pages in Square Register.
*SquareConnect.V1ItemsApi* | [**removeFee**](docs/V1ItemsApi.md#removeFee) | **DELETE** /v1/{location_id}/items/{item_id}/fees/{fee_id} | Removes a fee assocation from an item, meaning the fee is no longer automatically applied to the item in Square Register.
*SquareConnect.V1ItemsApi* | [**removeModifierList**](docs/V1ItemsApi.md#removeModifierList) | **DELETE** /v1/{location_id}/items/{item_id}/modifier-lists/{modifier_list_id} | Removes a modifier list association from an item, meaning modifier options from the list can no longer be applied to the item.
*SquareConnect.V1ItemsApi* | [**retrieveItem**](docs/V1ItemsApi.md#retrieveItem) | **GET** /v1/{location_id}/items/{item_id} | Provides the details for a single item, including associated modifier lists and fees.
*SquareConnect.V1ItemsApi* | [**retrieveModifierList**](docs/V1ItemsApi.md#retrieveModifierList) | **GET** /v1/{location_id}/modifier-lists/{modifier_list_id} | Provides the details for a single modifier list.
*SquareConnect.V1ItemsApi* | [**updateCategory**](docs/V1ItemsApi.md#updateCategory) | **PUT** /v1/{location_id}/categories/{category_id} | Modifies the details of an existing item category.
*SquareConnect.V1ItemsApi* | [**updateDiscount**](docs/V1ItemsApi.md#updateDiscount) | **PUT** /v1/{location_id}/discounts/{discount_id} | Modifies the details of an existing discount.
*SquareConnect.V1ItemsApi* | [**updateFee**](docs/V1ItemsApi.md#updateFee) | **PUT** /v1/{location_id}/fees/{fee_id} | Modifies the details of an existing fee (tax).
*SquareConnect.V1ItemsApi* | [**updateItem**](docs/V1ItemsApi.md#updateItem) | **PUT** /v1/{location_id}/items/{item_id} | Modifies the core details of an existing item.
*SquareConnect.V1ItemsApi* | [**updateModifierList**](docs/V1ItemsApi.md#updateModifierList) | **PUT** /v1/{location_id}/modifier-lists/{modifier_list_id} | Modifies the details of an existing item modifier list.
*SquareConnect.V1ItemsApi* | [**updateModifierOption**](docs/V1ItemsApi.md#updateModifierOption) | **PUT** /v1/{location_id}/modifier-lists/{modifier_list_id}/modifier-options/{modifier_option_id} | Modifies the details of an existing item modifier option.
*SquareConnect.V1ItemsApi* | [**updatePage**](docs/V1ItemsApi.md#updatePage) | **PUT** /v1/{location_id}/pages/{page_id} | Modifies the details of a Favorites page in Square Register.
*SquareConnect.V1ItemsApi* | [**updatePageCell**](docs/V1ItemsApi.md#updatePageCell) | **PUT** /v1/{location_id}/pages/{page_id}/cells | Modifies a cell of a Favorites page in Square Register.
*SquareConnect.V1ItemsApi* | [**updateVariation**](docs/V1ItemsApi.md#updateVariation) | **PUT** /v1/{location_id}/items/{item_id}/variations/{variation_id} | Modifies the details of an existing item variation.
*SquareConnect.V1LocationsApi* | [**listLocations**](docs/V1LocationsApi.md#listLocations) | **GET** /v1/me/locations | Provides details for a business&#39;s locations, including their IDs.
*SquareConnect.V1LocationsApi* | [**retrieveBusiness**](docs/V1LocationsApi.md#retrieveBusiness) | **GET** /v1/me | Get a business&#39;s information.
*SquareConnect.V1TransactionsApi* | [**createRefund**](docs/V1TransactionsApi.md#createRefund) | **POST** /v1/{location_id}/refunds | Issues a refund for a previously processed payment. You must issue a refund within 60 days of the associated payment.
*SquareConnect.V1TransactionsApi* | [**listBankAccounts**](docs/V1TransactionsApi.md#listBankAccounts) | **GET** /v1/{location_id}/bank-accounts | Provides non-confidential details for all of a location&#39;s associated bank accounts. This endpoint does not provide full bank account numbers, and there is no way to obtain a full bank account number with the Connect API.
*SquareConnect.V1TransactionsApi* | [**listOrders**](docs/V1TransactionsApi.md#listOrders) | **GET** /v1/{location_id}/orders | Provides summary information for a merchant&#39;s online store orders.
*SquareConnect.V1TransactionsApi* | [**listPayments**](docs/V1TransactionsApi.md#listPayments) | **GET** /v1/{location_id}/payments | Provides summary information for all payments taken by a merchant or any of the merchant&#39;s mobile staff during a date range. Date ranges cannot exceed one year in length. See Date ranges for details of inclusive and exclusive dates.
*SquareConnect.V1TransactionsApi* | [**listRefunds**](docs/V1TransactionsApi.md#listRefunds) | **GET** /v1/{location_id}/refunds | Provides the details for all refunds initiated by a merchant or any of the merchant&#39;s mobile staff during a date range. Date ranges cannot exceed one year in length.
*SquareConnect.V1TransactionsApi* | [**listSettlements**](docs/V1TransactionsApi.md#listSettlements) | **GET** /v1/{location_id}/settlements | Provides summary information for all deposits and withdrawals initiated by Square to a merchant&#39;s bank account during a date range. Date ranges cannot exceed one year in length.
*SquareConnect.V1TransactionsApi* | [**retrieveBankAccount**](docs/V1TransactionsApi.md#retrieveBankAccount) | **GET** /v1/{location_id}/bank-accounts/{bank_account_id} | Provides non-confidential details for a merchant&#39;s associated bank account. This endpoint does not provide full bank account numbers, and there is no way to obtain a full bank account number with the Connect API.
*SquareConnect.V1TransactionsApi* | [**retrieveOrder**](docs/V1TransactionsApi.md#retrieveOrder) | **GET** /v1/{location_id}/orders/{order_id} | Provides comprehensive information for a single online store order, including the order&#39;s history.
*SquareConnect.V1TransactionsApi* | [**retrievePayment**](docs/V1TransactionsApi.md#retrievePayment) | **GET** /v1/{location_id}/payments/{payment_id} | Provides comprehensive information for a single payment.
*SquareConnect.V1TransactionsApi* | [**retrieveSettlement**](docs/V1TransactionsApi.md#retrieveSettlement) | **GET** /v1/{location_id}/settlements/{settlement_id} | Provides comprehensive information for a single settlement, including the entries that contribute to the settlement&#39;s total.
*SquareConnect.V1TransactionsApi* | [**updateOrder**](docs/V1TransactionsApi.md#updateOrder) | **PUT** /v1/{location_id}/orders/{order_id} | Updates the details of an online store order. Every update you perform on an order corresponds to one of three actions:


## Documentation for Models

 - [SquareConnect.AdditionalRecipient](docs/AdditionalRecipient.md)
 - [SquareConnect.AdditionalRecipientReceivable](docs/AdditionalRecipientReceivable.md)
 - [SquareConnect.AdditionalRecipientReceivableRefund](docs/AdditionalRecipientReceivableRefund.md)
 - [SquareConnect.Address](docs/Address.md)
 - [SquareConnect.BatchDeleteCatalogObjectsRequest](docs/BatchDeleteCatalogObjectsRequest.md)
 - [SquareConnect.BatchDeleteCatalogObjectsResponse](docs/BatchDeleteCatalogObjectsResponse.md)
 - [SquareConnect.BatchRetrieveCatalogObjectsRequest](docs/BatchRetrieveCatalogObjectsRequest.md)
 - [SquareConnect.BatchRetrieveCatalogObjectsResponse](docs/BatchRetrieveCatalogObjectsResponse.md)
 - [SquareConnect.BatchRetrieveOrdersRequest](docs/BatchRetrieveOrdersRequest.md)
 - [SquareConnect.BatchRetrieveOrdersResponse](docs/BatchRetrieveOrdersResponse.md)
 - [SquareConnect.BatchUpsertCatalogObjectsRequest](docs/BatchUpsertCatalogObjectsRequest.md)
 - [SquareConnect.BatchUpsertCatalogObjectsResponse](docs/BatchUpsertCatalogObjectsResponse.md)
 - [SquareConnect.CaptureTransactionRequest](docs/CaptureTransactionRequest.md)
 - [SquareConnect.CaptureTransactionResponse](docs/CaptureTransactionResponse.md)
 - [SquareConnect.Card](docs/Card.md)
 - [SquareConnect.CardBrand](docs/CardBrand.md)
 - [SquareConnect.CatalogCategory](docs/CatalogCategory.md)
 - [SquareConnect.CatalogDiscount](docs/CatalogDiscount.md)
 - [SquareConnect.CatalogDiscountType](docs/CatalogDiscountType.md)
 - [SquareConnect.CatalogIdMapping](docs/CatalogIdMapping.md)
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
 - [SquareConnect.CreateCheckoutRequest](docs/CreateCheckoutRequest.md)
 - [SquareConnect.CreateCheckoutResponse](docs/CreateCheckoutResponse.md)
 - [SquareConnect.CreateCustomerCardRequest](docs/CreateCustomerCardRequest.md)
 - [SquareConnect.CreateCustomerCardResponse](docs/CreateCustomerCardResponse.md)
 - [SquareConnect.CreateCustomerRequest](docs/CreateCustomerRequest.md)
 - [SquareConnect.CreateCustomerResponse](docs/CreateCustomerResponse.md)
 - [SquareConnect.CreateOrderRequest](docs/CreateOrderRequest.md)
 - [SquareConnect.CreateOrderRequestDiscount](docs/CreateOrderRequestDiscount.md)
 - [SquareConnect.CreateOrderRequestLineItem](docs/CreateOrderRequestLineItem.md)
 - [SquareConnect.CreateOrderRequestModifier](docs/CreateOrderRequestModifier.md)
 - [SquareConnect.CreateOrderRequestTax](docs/CreateOrderRequestTax.md)
 - [SquareConnect.CreateOrderResponse](docs/CreateOrderResponse.md)
 - [SquareConnect.CreateRefundRequest](docs/CreateRefundRequest.md)
 - [SquareConnect.CreateRefundResponse](docs/CreateRefundResponse.md)
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
 - [SquareConnect.DeleteCatalogObjectRequest](docs/DeleteCatalogObjectRequest.md)
 - [SquareConnect.DeleteCatalogObjectResponse](docs/DeleteCatalogObjectResponse.md)
 - [SquareConnect.DeleteCustomerCardRequest](docs/DeleteCustomerCardRequest.md)
 - [SquareConnect.DeleteCustomerCardResponse](docs/DeleteCustomerCardResponse.md)
 - [SquareConnect.DeleteCustomerRequest](docs/DeleteCustomerRequest.md)
 - [SquareConnect.DeleteCustomerResponse](docs/DeleteCustomerResponse.md)
 - [SquareConnect.Device](docs/Device.md)
 - [SquareConnect.Error](docs/Error.md)
 - [SquareConnect.ErrorCategory](docs/ErrorCategory.md)
 - [SquareConnect.ErrorCode](docs/ErrorCode.md)
 - [SquareConnect.InventoryAlertType](docs/InventoryAlertType.md)
 - [SquareConnect.ItemVariationLocationOverrides](docs/ItemVariationLocationOverrides.md)
 - [SquareConnect.ListAdditionalRecipientReceivableRefundsRequest](docs/ListAdditionalRecipientReceivableRefundsRequest.md)
 - [SquareConnect.ListAdditionalRecipientReceivableRefundsResponse](docs/ListAdditionalRecipientReceivableRefundsResponse.md)
 - [SquareConnect.ListAdditionalRecipientReceivablesRequest](docs/ListAdditionalRecipientReceivablesRequest.md)
 - [SquareConnect.ListAdditionalRecipientReceivablesResponse](docs/ListAdditionalRecipientReceivablesResponse.md)
 - [SquareConnect.ListCatalogRequest](docs/ListCatalogRequest.md)
 - [SquareConnect.ListCatalogResponse](docs/ListCatalogResponse.md)
 - [SquareConnect.ListCustomersRequest](docs/ListCustomersRequest.md)
 - [SquareConnect.ListCustomersResponse](docs/ListCustomersResponse.md)
 - [SquareConnect.ListLocationsRequest](docs/ListLocationsRequest.md)
 - [SquareConnect.ListLocationsResponse](docs/ListLocationsResponse.md)
 - [SquareConnect.ListRefundsRequest](docs/ListRefundsRequest.md)
 - [SquareConnect.ListRefundsResponse](docs/ListRefundsResponse.md)
 - [SquareConnect.ListTransactionsRequest](docs/ListTransactionsRequest.md)
 - [SquareConnect.ListTransactionsResponse](docs/ListTransactionsResponse.md)
 - [SquareConnect.Location](docs/Location.md)
 - [SquareConnect.LocationCapability](docs/LocationCapability.md)
 - [SquareConnect.LocationStatus](docs/LocationStatus.md)
 - [SquareConnect.LocationType](docs/LocationType.md)
 - [SquareConnect.Money](docs/Money.md)
 - [SquareConnect.Order](docs/Order.md)
 - [SquareConnect.OrderLineItem](docs/OrderLineItem.md)
 - [SquareConnect.OrderLineItemDiscount](docs/OrderLineItemDiscount.md)
 - [SquareConnect.OrderLineItemDiscountScope](docs/OrderLineItemDiscountScope.md)
 - [SquareConnect.OrderLineItemDiscountType](docs/OrderLineItemDiscountType.md)
 - [SquareConnect.OrderLineItemModifier](docs/OrderLineItemModifier.md)
 - [SquareConnect.OrderLineItemTax](docs/OrderLineItemTax.md)
 - [SquareConnect.OrderLineItemTaxType](docs/OrderLineItemTaxType.md)
 - [SquareConnect.Refund](docs/Refund.md)
 - [SquareConnect.RefundStatus](docs/RefundStatus.md)
 - [SquareConnect.RegisterDomainRequest](docs/RegisterDomainRequest.md)
 - [SquareConnect.RegisterDomainResponse](docs/RegisterDomainResponse.md)
 - [SquareConnect.RegisterDomainResponseStatus](docs/RegisterDomainResponseStatus.md)
 - [SquareConnect.RetrieveCatalogObjectRequest](docs/RetrieveCatalogObjectRequest.md)
 - [SquareConnect.RetrieveCatalogObjectResponse](docs/RetrieveCatalogObjectResponse.md)
 - [SquareConnect.RetrieveCustomerRequest](docs/RetrieveCustomerRequest.md)
 - [SquareConnect.RetrieveCustomerResponse](docs/RetrieveCustomerResponse.md)
 - [SquareConnect.RetrieveTransactionRequest](docs/RetrieveTransactionRequest.md)
 - [SquareConnect.RetrieveTransactionResponse](docs/RetrieveTransactionResponse.md)
 - [SquareConnect.SearchCatalogObjectsRequest](docs/SearchCatalogObjectsRequest.md)
 - [SquareConnect.SearchCatalogObjectsResponse](docs/SearchCatalogObjectsResponse.md)
 - [SquareConnect.SearchCustomersRequest](docs/SearchCustomersRequest.md)
 - [SquareConnect.SearchCustomersResponse](docs/SearchCustomersResponse.md)
 - [SquareConnect.SortOrder](docs/SortOrder.md)
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
 - [SquareConnect.UpdateCustomerRequest](docs/UpdateCustomerRequest.md)
 - [SquareConnect.UpdateCustomerResponse](docs/UpdateCustomerResponse.md)
 - [SquareConnect.UpdateItemModifierListsRequest](docs/UpdateItemModifierListsRequest.md)
 - [SquareConnect.UpdateItemModifierListsResponse](docs/UpdateItemModifierListsResponse.md)
 - [SquareConnect.UpdateItemTaxesRequest](docs/UpdateItemTaxesRequest.md)
 - [SquareConnect.UpdateItemTaxesResponse](docs/UpdateItemTaxesResponse.md)
 - [SquareConnect.UpsertCatalogObjectRequest](docs/UpsertCatalogObjectRequest.md)
 - [SquareConnect.UpsertCatalogObjectResponse](docs/UpsertCatalogObjectResponse.md)
 - [SquareConnect.V1AdjustInventoryRequest](docs/V1AdjustInventoryRequest.md)
 - [SquareConnect.V1BankAccount](docs/V1BankAccount.md)
 - [SquareConnect.V1CashDrawerEvent](docs/V1CashDrawerEvent.md)
 - [SquareConnect.V1CashDrawerShift](docs/V1CashDrawerShift.md)
 - [SquareConnect.V1Category](docs/V1Category.md)
 - [SquareConnect.V1CreateRefundRequest](docs/V1CreateRefundRequest.md)
 - [SquareConnect.V1Discount](docs/V1Discount.md)
 - [SquareConnect.V1Employee](docs/V1Employee.md)
 - [SquareConnect.V1EmployeeRole](docs/V1EmployeeRole.md)
 - [SquareConnect.V1Fee](docs/V1Fee.md)
 - [SquareConnect.V1InventoryEntry](docs/V1InventoryEntry.md)
 - [SquareConnect.V1Item](docs/V1Item.md)
 - [SquareConnect.V1ItemImage](docs/V1ItemImage.md)
 - [SquareConnect.V1Merchant](docs/V1Merchant.md)
 - [SquareConnect.V1MerchantLocationDetails](docs/V1MerchantLocationDetails.md)
 - [SquareConnect.V1ModifierList](docs/V1ModifierList.md)
 - [SquareConnect.V1ModifierOption](docs/V1ModifierOption.md)
 - [SquareConnect.V1Money](docs/V1Money.md)
 - [SquareConnect.V1Order](docs/V1Order.md)
 - [SquareConnect.V1OrderHistoryEntry](docs/V1OrderHistoryEntry.md)
 - [SquareConnect.V1Page](docs/V1Page.md)
 - [SquareConnect.V1PageCell](docs/V1PageCell.md)
 - [SquareConnect.V1Payment](docs/V1Payment.md)
 - [SquareConnect.V1PaymentDiscount](docs/V1PaymentDiscount.md)
 - [SquareConnect.V1PaymentItemDetail](docs/V1PaymentItemDetail.md)
 - [SquareConnect.V1PaymentItemization](docs/V1PaymentItemization.md)
 - [SquareConnect.V1PaymentModifier](docs/V1PaymentModifier.md)
 - [SquareConnect.V1PaymentSurcharge](docs/V1PaymentSurcharge.md)
 - [SquareConnect.V1PaymentTax](docs/V1PaymentTax.md)
 - [SquareConnect.V1PhoneNumber](docs/V1PhoneNumber.md)
 - [SquareConnect.V1Refund](docs/V1Refund.md)
 - [SquareConnect.V1Settlement](docs/V1Settlement.md)
 - [SquareConnect.V1SettlementEntry](docs/V1SettlementEntry.md)
 - [SquareConnect.V1Tender](docs/V1Tender.md)
 - [SquareConnect.V1Timecard](docs/V1Timecard.md)
 - [SquareConnect.V1TimecardEvent](docs/V1TimecardEvent.md)
 - [SquareConnect.V1UpdateModifierListRequest](docs/V1UpdateModifierListRequest.md)
 - [SquareConnect.V1UpdateOrderRequest](docs/V1UpdateOrderRequest.md)
 - [SquareConnect.V1Variation](docs/V1Variation.md)
 - [SquareConnect.VoidTransactionRequest](docs/VoidTransactionRequest.md)
 - [SquareConnect.VoidTransactionResponse](docs/VoidTransactionResponse.md)


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
