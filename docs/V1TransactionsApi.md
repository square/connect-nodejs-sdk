# SquareConnect.V1TransactionsApi

All URIs are relative to *https://connect.squareup.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createRefund**](V1TransactionsApi.md#createRefund) | **POST** /v1/{location_id}/refunds | CreateRefund
[**listBankAccounts**](V1TransactionsApi.md#listBankAccounts) | **GET** /v1/{location_id}/bank-accounts | ListBankAccounts
[**listOrders**](V1TransactionsApi.md#listOrders) | **GET** /v1/{location_id}/orders | ListOrders
[**listPayments**](V1TransactionsApi.md#listPayments) | **GET** /v1/{location_id}/payments | ListPayments
[**listRefunds**](V1TransactionsApi.md#listRefunds) | **GET** /v1/{location_id}/refunds | ListRefunds
[**listSettlements**](V1TransactionsApi.md#listSettlements) | **GET** /v1/{location_id}/settlements | ListSettlements
[**retrieveBankAccount**](V1TransactionsApi.md#retrieveBankAccount) | **GET** /v1/{location_id}/bank-accounts/{bank_account_id} | RetrieveBankAccount
[**retrieveOrder**](V1TransactionsApi.md#retrieveOrder) | **GET** /v1/{location_id}/orders/{order_id} | RetrieveOrder
[**retrievePayment**](V1TransactionsApi.md#retrievePayment) | **GET** /v1/{location_id}/payments/{payment_id} | RetrievePayment
[**retrieveSettlement**](V1TransactionsApi.md#retrieveSettlement) | **GET** /v1/{location_id}/settlements/{settlement_id} | RetrieveSettlement
[**updateOrder**](V1TransactionsApi.md#updateOrder) | **PUT** /v1/{location_id}/orders/{order_id} | UpdateOrder


<a name="createRefund"></a>
# **createRefund**
> V1Refund createRefund(locationId, body)

CreateRefund

Issues a refund for a previously processed payment. You must issue a refund within 60 days of the associated payment.  You cannot issue a partial refund for a split tender payment. You must instead issue a full or partial refund for a particular tender, by providing the applicable tender id to the V1CreateRefund endpoint. Issuing a full refund for a split tender payment refunds all tenders associated with the payment.  Issuing a refund for a card payment is not reversible. For development purposes, you can create fake cash payments in Square Point of Sale and refund them.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.V1TransactionsApi();

var locationId = "locationId_example"; // String | The ID of the original payment's associated location.

var body = new SquareConnect.V1CreateRefundRequest(); // V1CreateRefundRequest | An object containing the fields to POST for the request.  See the corresponding object definition for field details.

apiInstance.createRefund(locationId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | **String**| The ID of the original payment&#39;s associated location. | 
 **body** | [**V1CreateRefundRequest**](V1CreateRefundRequest.md)| An object containing the fields to POST for the request.  See the corresponding object definition for field details. | 

### Return type

[**V1Refund**](V1Refund.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listBankAccounts"></a>
# **listBankAccounts**
> [V1BankAccount] listBankAccounts(locationId)

ListBankAccounts

Provides non-confidential details for all of a location&#39;s associated bank accounts. This endpoint does not provide full bank account numbers, and there is no way to obtain a full bank account number with the Connect API.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.V1TransactionsApi();

var locationId = "locationId_example"; // String | The ID of the location to list bank accounts for.

apiInstance.listBankAccounts(locationId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | **String**| The ID of the location to list bank accounts for. | 

### Return type

[**[V1BankAccount]**](V1BankAccount.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listOrders"></a>
# **listOrders**
> [V1Order] listOrders(locationId, opts)

ListOrders

Provides summary information for a merchant&#39;s online store orders.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.V1TransactionsApi();

var locationId = "locationId_example"; // String | The ID of the location to list online store orders for.

var opts = { 
  'order': "order_example", // String | TThe order in which payments are listed in the response.
  'limit': 56, // Number | The maximum number of payments to return in a single response. This value cannot exceed 200.
  'batchToken': "batchToken_example" // String | A pagination cursor to retrieve the next set of results for your original query to the endpoint.
};
apiInstance.listOrders(locationId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | **String**| The ID of the location to list online store orders for. | 
 **order** | **String**| TThe order in which payments are listed in the response. | [optional] 
 **limit** | **Number**| The maximum number of payments to return in a single response. This value cannot exceed 200. | [optional] 
 **batchToken** | **String**| A pagination cursor to retrieve the next set of results for your original query to the endpoint. | [optional] 

### Return type

[**[V1Order]**](V1Order.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listPayments"></a>
# **listPayments**
> [V1Payment] listPayments(locationId, opts)

ListPayments

Provides summary information for all payments taken for a given Square account during a date range. Date ranges cannot exceed 1 year in length. See Date ranges for details of inclusive and exclusive dates.  *Note**: Details for payments processed with Square Point of Sale while in offline mode may not be transmitted to Square for up to 72 hours. Offline payments have a &#x60;created_at&#x60; value that reflects the time the payment was originally processed, not the time it was subsequently transmitted to Square. Consequently, the ListPayments endpoint might list an offline payment chronologically between online payments that were seen in a previous request.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.V1TransactionsApi();

var locationId = "locationId_example"; // String | The ID of the location to list payments for. If you specify me, this endpoint returns payments aggregated from all of the business's locations.

var opts = { 
  'order': "order_example", // String | The order in which payments are listed in the response.
  'beginTime': "beginTime_example", // String | The beginning of the requested reporting period, in ISO 8601 format. If this value is before January 1, 2013 (2013-01-01T00:00:00Z), this endpoint returns an error. Default value: The current time minus one year.
  'endTime': "endTime_example", // String | The end of the requested reporting period, in ISO 8601 format. If this value is more than one year greater than begin_time, this endpoint returns an error. Default value: The current time.
  'limit': 56, // Number | The maximum number of payments to return in a single response. This value cannot exceed 200.
  'batchToken': "batchToken_example", // String | A pagination cursor to retrieve the next set of results for your original query to the endpoint.
  'includePartial': true // Boolean | Indicates whether or not to include partial payments in the response. Partial payments will have the tenders collected so far, but the itemizations will be empty until the payment is completed.
};
apiInstance.listPayments(locationId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | **String**| The ID of the location to list payments for. If you specify me, this endpoint returns payments aggregated from all of the business&#39;s locations. | 
 **order** | **String**| The order in which payments are listed in the response. | [optional] 
 **beginTime** | **String**| The beginning of the requested reporting period, in ISO 8601 format. If this value is before January 1, 2013 (2013-01-01T00:00:00Z), this endpoint returns an error. Default value: The current time minus one year. | [optional] 
 **endTime** | **String**| The end of the requested reporting period, in ISO 8601 format. If this value is more than one year greater than begin_time, this endpoint returns an error. Default value: The current time. | [optional] 
 **limit** | **Number**| The maximum number of payments to return in a single response. This value cannot exceed 200. | [optional] 
 **batchToken** | **String**| A pagination cursor to retrieve the next set of results for your original query to the endpoint. | [optional] 
 **includePartial** | **Boolean**| Indicates whether or not to include partial payments in the response. Partial payments will have the tenders collected so far, but the itemizations will be empty until the payment is completed. | [optional] 

### Return type

[**[V1Payment]**](V1Payment.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listRefunds"></a>
# **listRefunds**
> [V1Refund] listRefunds(locationId, opts)

ListRefunds

Provides the details for all refunds initiated by a merchant or any of the merchant&#39;s mobile staff during a date range. Date ranges cannot exceed one year in length.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.V1TransactionsApi();

var locationId = "locationId_example"; // String | The ID of the location to list refunds for.

var opts = { 
  'order': "order_example", // String | TThe order in which payments are listed in the response.
  'beginTime': "beginTime_example", // String | The beginning of the requested reporting period, in ISO 8601 format. If this value is before January 1, 2013 (2013-01-01T00:00:00Z), this endpoint returns an error. Default value: The current time minus one year.
  'endTime': "endTime_example", // String | The end of the requested reporting period, in ISO 8601 format. If this value is more than one year greater than begin_time, this endpoint returns an error. Default value: The current time.
  'limit': 56, // Number | The approximate number of refunds to return in a single response. Default: 100. Max: 200. Response may contain more results than the prescribed limit when refunds are made simultaneously to multiple tenders in a payment or when refunds are generated in an exchange to account for the value of returned goods.
  'batchToken': "batchToken_example" // String | A pagination cursor to retrieve the next set of results for your original query to the endpoint.
};
apiInstance.listRefunds(locationId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | **String**| The ID of the location to list refunds for. | 
 **order** | **String**| TThe order in which payments are listed in the response. | [optional] 
 **beginTime** | **String**| The beginning of the requested reporting period, in ISO 8601 format. If this value is before January 1, 2013 (2013-01-01T00:00:00Z), this endpoint returns an error. Default value: The current time minus one year. | [optional] 
 **endTime** | **String**| The end of the requested reporting period, in ISO 8601 format. If this value is more than one year greater than begin_time, this endpoint returns an error. Default value: The current time. | [optional] 
 **limit** | **Number**| The approximate number of refunds to return in a single response. Default: 100. Max: 200. Response may contain more results than the prescribed limit when refunds are made simultaneously to multiple tenders in a payment or when refunds are generated in an exchange to account for the value of returned goods. | [optional] 
 **batchToken** | **String**| A pagination cursor to retrieve the next set of results for your original query to the endpoint. | [optional] 

### Return type

[**[V1Refund]**](V1Refund.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listSettlements"></a>
# **listSettlements**
> [V1Settlement] listSettlements(locationId, opts)

ListSettlements

Provides summary information for all deposits and withdrawals initiated by Square to a linked bank account during a date range. Date ranges cannot exceed one year in length.  *Note**: the ListSettlements endpoint does not provide entry information.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.V1TransactionsApi();

var locationId = "locationId_example"; // String | The ID of the location to list settlements for.

var opts = { 
  'order': "order_example", // String | TThe order in which payments are listed in the response.
  'beginTime': "beginTime_example", // String | The beginning of the requested reporting period, in ISO 8601 format. If this value is before January 1, 2013 (2013-01-01T00:00:00Z), this endpoint returns an error. Default value: The current time minus one year.
  'endTime': "endTime_example", // String | The end of the requested reporting period, in ISO 8601 format. If this value is more than one year greater than begin_time, this endpoint returns an error. Default value: The current time.
  'limit': 56, // Number | The maximum number of payments to return in a single response. This value cannot exceed 200.
  'status': "status_example", // String | Provide this parameter to retrieve only settlements with a particular status (SENT or FAILED).
  'batchToken': "batchToken_example" // String | A pagination cursor to retrieve the next set of results for your original query to the endpoint.
};
apiInstance.listSettlements(locationId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | **String**| The ID of the location to list settlements for. | 
 **order** | **String**| TThe order in which payments are listed in the response. | [optional] 
 **beginTime** | **String**| The beginning of the requested reporting period, in ISO 8601 format. If this value is before January 1, 2013 (2013-01-01T00:00:00Z), this endpoint returns an error. Default value: The current time minus one year. | [optional] 
 **endTime** | **String**| The end of the requested reporting period, in ISO 8601 format. If this value is more than one year greater than begin_time, this endpoint returns an error. Default value: The current time. | [optional] 
 **limit** | **Number**| The maximum number of payments to return in a single response. This value cannot exceed 200. | [optional] 
 **status** | **String**| Provide this parameter to retrieve only settlements with a particular status (SENT or FAILED). | [optional] 
 **batchToken** | **String**| A pagination cursor to retrieve the next set of results for your original query to the endpoint. | [optional] 

### Return type

[**[V1Settlement]**](V1Settlement.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="retrieveBankAccount"></a>
# **retrieveBankAccount**
> V1BankAccount retrieveBankAccount(locationId, bankAccountId)

RetrieveBankAccount

Provides non-confidential details for a merchant&#39;s associated bank account. This endpoint does not provide full bank account numbers, and there is no way to obtain a full bank account number with the Connect API.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.V1TransactionsApi();

var locationId = "locationId_example"; // String | The ID of the bank account's associated location.

var bankAccountId = "bankAccountId_example"; // String | The bank account's Square-issued ID. You obtain this value from Settlement objects returned.

apiInstance.retrieveBankAccount(locationId, bankAccountId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | **String**| The ID of the bank account&#39;s associated location. | 
 **bankAccountId** | **String**| The bank account&#39;s Square-issued ID. You obtain this value from Settlement objects returned. | 

### Return type

[**V1BankAccount**](V1BankAccount.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="retrieveOrder"></a>
# **retrieveOrder**
> V1Order retrieveOrder(locationId, orderId)

RetrieveOrder

Provides comprehensive information for a single online store order, including the order&#39;s history.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.V1TransactionsApi();

var locationId = "locationId_example"; // String | The ID of the order's associated location.

var orderId = "orderId_example"; // String | The order's Square-issued ID. You obtain this value from Order objects returned by the List Orders endpoint

apiInstance.retrieveOrder(locationId, orderId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | **String**| The ID of the order&#39;s associated location. | 
 **orderId** | **String**| The order&#39;s Square-issued ID. You obtain this value from Order objects returned by the List Orders endpoint | 

### Return type

[**V1Order**](V1Order.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="retrievePayment"></a>
# **retrievePayment**
> V1Payment retrievePayment(locationId, paymentId)

RetrievePayment

Provides comprehensive information for a single payment.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.V1TransactionsApi();

var locationId = "locationId_example"; // String | The ID of the payment's associated location.

var paymentId = "paymentId_example"; // String | The Square-issued payment ID. payment_id comes from Payment objects returned by the List Payments endpoint, Settlement objects returned by the List Settlements endpoint, or Refund objects returned by the List Refunds endpoint.

apiInstance.retrievePayment(locationId, paymentId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | **String**| The ID of the payment&#39;s associated location. | 
 **paymentId** | **String**| The Square-issued payment ID. payment_id comes from Payment objects returned by the List Payments endpoint, Settlement objects returned by the List Settlements endpoint, or Refund objects returned by the List Refunds endpoint. | 

### Return type

[**V1Payment**](V1Payment.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="retrieveSettlement"></a>
# **retrieveSettlement**
> V1Settlement retrieveSettlement(locationId, settlementId)

RetrieveSettlement

Provides comprehensive information for a single settlement.  The returned &#x60;Settlement&#x60; objects include an &#x60;entries&#x60; field that lists the transactions that contribute to the settlement total. Most settlement entries correspond to a payment payout, but settlement entries are also generated for less common events, like refunds, manual adjustments, or chargeback holds.  Square initiates its regular deposits as indicated in the [Deposit Options with Square](https://squareup.com/help/us/en/article/3807) help article. Details for a regular deposit are usually not available from Connect API endpoints before 10 p.m. PST the same day.  Square does not know when an initiated settlement **completes**, only whether it has failed. A completed settlement is typically reflected in a bank account within 3 business days, but in exceptional cases it may take longer.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.V1TransactionsApi();

var locationId = "locationId_example"; // String | The ID of the settlements's associated location.

var settlementId = "settlementId_example"; // String | The settlement's Square-issued ID. You obtain this value from Settlement objects returned by the List Settlements endpoint.

apiInstance.retrieveSettlement(locationId, settlementId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | **String**| The ID of the settlements&#39;s associated location. | 
 **settlementId** | **String**| The settlement&#39;s Square-issued ID. You obtain this value from Settlement objects returned by the List Settlements endpoint. | 

### Return type

[**V1Settlement**](V1Settlement.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateOrder"></a>
# **updateOrder**
> V1Order updateOrder(locationId, orderId, body)

UpdateOrder

Updates the details of an online store order. Every update you perform on an order corresponds to one of three actions:

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.V1TransactionsApi();

var locationId = "locationId_example"; // String | The ID of the order's associated location.

var orderId = "orderId_example"; // String | The order's Square-issued ID. You obtain this value from Order objects returned by the List Orders endpoint

var body = new SquareConnect.V1UpdateOrderRequest(); // V1UpdateOrderRequest | An object containing the fields to POST for the request.  See the corresponding object definition for field details.

apiInstance.updateOrder(locationId, orderId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | **String**| The ID of the order&#39;s associated location. | 
 **orderId** | **String**| The order&#39;s Square-issued ID. You obtain this value from Order objects returned by the List Orders endpoint | 
 **body** | [**V1UpdateOrderRequest**](V1UpdateOrderRequest.md)| An object containing the fields to POST for the request.  See the corresponding object definition for field details. | 

### Return type

[**V1Order**](V1Order.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

