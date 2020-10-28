# SquareConnect.TransactionsApi

All URIs are relative to *https://connect.squareup.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**captureTransaction**](TransactionsApi.md#captureTransaction) | **POST** /v2/locations/{location_id}/transactions/{transaction_id}/capture | CaptureTransaction
[**charge**](TransactionsApi.md#charge) | **POST** /v2/locations/{location_id}/transactions | Charge
[**createRefund**](TransactionsApi.md#createRefund) | **POST** /v2/locations/{location_id}/transactions/{transaction_id}/refund | CreateRefund
[**listRefunds**](TransactionsApi.md#listRefunds) | **GET** /v2/locations/{location_id}/refunds | ListRefunds
[**listTransactions**](TransactionsApi.md#listTransactions) | **GET** /v2/locations/{location_id}/transactions | ListTransactions
[**retrieveTransaction**](TransactionsApi.md#retrieveTransaction) | **GET** /v2/locations/{location_id}/transactions/{transaction_id} | RetrieveTransaction
[**voidTransaction**](TransactionsApi.md#voidTransaction) | **POST** /v2/locations/{location_id}/transactions/{transaction_id}/void | VoidTransaction


<a name="captureTransaction"></a>
# **captureTransaction**
**Note: This endpoint is deprecated.**
> CaptureTransactionResponse captureTransaction(locationId, transactionId)

CaptureTransaction

Captures a transaction that was created with the [Charge](#endpoint-charge) endpoint with a &#x60;delay_capture&#x60; value of &#x60;true&#x60;.   See [Delayed capture transactions](/payments/transactions/overview#delayed-capture) for more information.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.TransactionsApi();

var locationId = SquareConnect.TransactionsApi.constructFromObject({}); // String | 

var transactionId = SquareConnect.TransactionsApi.constructFromObject({}); // String | 

apiInstance.captureTransaction(locationId, transactionId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | **String**|  | 
 **transactionId** | **String**|  | 

### Return type

[**CaptureTransactionResponse**](CaptureTransactionResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="charge"></a>
# **charge**
**Note: This endpoint is deprecated.**
> ChargeResponse charge(locationId, body)

Charge

Charges a card represented by a card nonce or a customer&#39;s card on file.  Your request to this endpoint must include _either_:  - A value for the &#x60;card_nonce&#x60; parameter (to charge a card nonce generated with the &#x60;SqPaymentForm&#x60;) - Values for the &#x60;customer_card_id&#x60; and &#x60;customer_id&#x60; parameters (to charge a customer&#39;s card on file)  In order for an eCommerce payment to potentially qualify for [Square chargeback protection](https://squareup.com/help/article/5394), you _must_ provide values for the following parameters in your request:  - &#x60;buyer_email_address&#x60; - At least one of &#x60;billing_address&#x60; or &#x60;shipping_address&#x60;  When this response is returned, the amount of Square&#39;s processing fee might not yet be calculated. To obtain the processing fee, wait about ten seconds and call [RetrieveTransaction](#endpoint-retrievetransaction). See the &#x60;processing_fee_money&#x60; field of each [Tender included](#type-tender) in the transaction.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.TransactionsApi();

var locationId = SquareConnect.TransactionsApi.constructFromObject({}); // String | The ID of the location to associate the created transaction with.

var body = SquareConnect.TransactionsApi.constructFromObject({}); // ChargeRequest | An object containing the fields to POST for the request.  See the corresponding object definition for field details.

apiInstance.charge(locationId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | **String**| The ID of the location to associate the created transaction with. | 
 **body** | [**ChargeRequest**](ChargeRequest.md)| An object containing the fields to POST for the request.  See the corresponding object definition for field details. | 

### Return type

[**ChargeResponse**](ChargeResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createRefund"></a>
# **createRefund**
**Note: This endpoint is deprecated.**
> CreateRefundResponse createRefund(locationId, transactionId, body)

CreateRefund

Initiates a refund for a previously charged tender.  You must issue a refund within 120 days of the associated payment. See [this article](https://squareup.com/help/us/en/article/5060) for more information on refund behavior.  NOTE: Card-present transactions with Interac credit cards **cannot be refunded using the Connect API**. Interac transactions must refunded in-person (e.g., dipping the card using POS app).

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.TransactionsApi();

var locationId = SquareConnect.TransactionsApi.constructFromObject({}); // String | The ID of the original transaction's associated location.

var transactionId = SquareConnect.TransactionsApi.constructFromObject({}); // String | The ID of the original transaction that includes the tender to refund.

var body = SquareConnect.TransactionsApi.constructFromObject({}); // CreateRefundRequest | An object containing the fields to POST for the request.  See the corresponding object definition for field details.

apiInstance.createRefund(locationId, transactionId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | **String**| The ID of the original transaction&#39;s associated location. | 
 **transactionId** | **String**| The ID of the original transaction that includes the tender to refund. | 
 **body** | [**CreateRefundRequest**](CreateRefundRequest.md)| An object containing the fields to POST for the request.  See the corresponding object definition for field details. | 

### Return type

[**CreateRefundResponse**](CreateRefundResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listRefunds"></a>
# **listRefunds**
**Note: This endpoint is deprecated.**
> ListRefundsResponse listRefunds(locationId, opts)

ListRefunds

Lists refunds for one of a business&#39;s locations.  In addition to full or partial tender refunds processed through Square APIs, refunds may result from itemized returns or exchanges through Square&#39;s Point of Sale applications.  Refunds with a &#x60;status&#x60; of &#x60;PENDING&#x60; are not currently included in this endpoint&#39;s response.  Max results per [page](#paginatingresults): 50

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.TransactionsApi();

var locationId = SquareConnect.TransactionsApi.constructFromObject({}); // String | The ID of the location to list refunds for.

var opts = { 
  'beginTime': SquareConnect.TransactionsApi.constructFromObject({});, // String | The beginning of the requested reporting period, in RFC 3339 format.  See [Date ranges](#dateranges) for details on date inclusivity/exclusivity.  Default value: The current time minus one year.
  'endTime': SquareConnect.TransactionsApi.constructFromObject({});, // String | The end of the requested reporting period, in RFC 3339 format.  See [Date ranges](#dateranges) for details on date inclusivity/exclusivity.  Default value: The current time.
  'sortOrder': SquareConnect.TransactionsApi.constructFromObject({});, // String | The order in which results are listed in the response (`ASC` for oldest first, `DESC` for newest first).  Default value: `DESC`
  'cursor': SquareConnect.TransactionsApi.constructFromObject({}); // String | A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for your original query.  See [Paginating results](#paginatingresults) for more information.
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
 **beginTime** | **String**| The beginning of the requested reporting period, in RFC 3339 format.  See [Date ranges](#dateranges) for details on date inclusivity/exclusivity.  Default value: The current time minus one year. | [optional] 
 **endTime** | **String**| The end of the requested reporting period, in RFC 3339 format.  See [Date ranges](#dateranges) for details on date inclusivity/exclusivity.  Default value: The current time. | [optional] 
 **sortOrder** | **String**| The order in which results are listed in the response (&#x60;ASC&#x60; for oldest first, &#x60;DESC&#x60; for newest first).  Default value: &#x60;DESC&#x60; | [optional] 
 **cursor** | **String**| A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for your original query.  See [Paginating results](#paginatingresults) for more information. | [optional] 

### Return type

[**ListRefundsResponse**](ListRefundsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listTransactions"></a>
# **listTransactions**
**Note: This endpoint is deprecated.**
> ListTransactionsResponse listTransactions(locationId, opts)

ListTransactions

Lists transactions for a particular location.  Transactions include payment information from sales and exchanges and refund information from returns and exchanges.  Max results per [page](#paginatingresults): 50

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.TransactionsApi();

var locationId = SquareConnect.TransactionsApi.constructFromObject({}); // String | The ID of the location to list transactions for.

var opts = { 
  'beginTime': SquareConnect.TransactionsApi.constructFromObject({});, // String | The beginning of the requested reporting period, in RFC 3339 format.  See [Date ranges](#dateranges) for details on date inclusivity/exclusivity.  Default value: The current time minus one year.
  'endTime': SquareConnect.TransactionsApi.constructFromObject({});, // String | The end of the requested reporting period, in RFC 3339 format.  See [Date ranges](#dateranges) for details on date inclusivity/exclusivity.  Default value: The current time.
  'sortOrder': SquareConnect.TransactionsApi.constructFromObject({});, // String | The order in which results are listed in the response (`ASC` for oldest first, `DESC` for newest first).  Default value: `DESC`
  'cursor': SquareConnect.TransactionsApi.constructFromObject({}); // String | A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for your original query.  See [Paginating results](#paginatingresults) for more information.
};
apiInstance.listTransactions(locationId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | **String**| The ID of the location to list transactions for. | 
 **beginTime** | **String**| The beginning of the requested reporting period, in RFC 3339 format.  See [Date ranges](#dateranges) for details on date inclusivity/exclusivity.  Default value: The current time minus one year. | [optional] 
 **endTime** | **String**| The end of the requested reporting period, in RFC 3339 format.  See [Date ranges](#dateranges) for details on date inclusivity/exclusivity.  Default value: The current time. | [optional] 
 **sortOrder** | **String**| The order in which results are listed in the response (&#x60;ASC&#x60; for oldest first, &#x60;DESC&#x60; for newest first).  Default value: &#x60;DESC&#x60; | [optional] 
 **cursor** | **String**| A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for your original query.  See [Paginating results](#paginatingresults) for more information. | [optional] 

### Return type

[**ListTransactionsResponse**](ListTransactionsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="retrieveTransaction"></a>
# **retrieveTransaction**
**Note: This endpoint is deprecated.**
> RetrieveTransactionResponse retrieveTransaction(locationId, transactionId)

RetrieveTransaction

Retrieves details for a single transaction.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.TransactionsApi();

var locationId = SquareConnect.TransactionsApi.constructFromObject({}); // String | The ID of the transaction's associated location.

var transactionId = SquareConnect.TransactionsApi.constructFromObject({}); // String | The ID of the transaction to retrieve.

apiInstance.retrieveTransaction(locationId, transactionId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | **String**| The ID of the transaction&#39;s associated location. | 
 **transactionId** | **String**| The ID of the transaction to retrieve. | 

### Return type

[**RetrieveTransactionResponse**](RetrieveTransactionResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="voidTransaction"></a>
# **voidTransaction**
**Note: This endpoint is deprecated.**
> VoidTransactionResponse voidTransaction(locationId, transactionId)

VoidTransaction

Cancels a transaction that was created with the [Charge](#endpoint-charge) endpoint with a &#x60;delay_capture&#x60; value of &#x60;true&#x60;.   See [Delayed capture transactions](/payments/transactions/overview#delayed-capture) for more information.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.TransactionsApi();

var locationId = SquareConnect.TransactionsApi.constructFromObject({}); // String | 

var transactionId = SquareConnect.TransactionsApi.constructFromObject({}); // String | 

apiInstance.voidTransaction(locationId, transactionId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | **String**|  | 
 **transactionId** | **String**|  | 

### Return type

[**VoidTransactionResponse**](VoidTransactionResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

