# SquareConnect.PaymentsApi

All URIs are relative to *https://connect.squareup.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelPayment**](PaymentsApi.md#cancelPayment) | **POST** /v2/payments/{payment_id}/cancel | CancelPayment
[**cancelPaymentByIdempotencyKey**](PaymentsApi.md#cancelPaymentByIdempotencyKey) | **POST** /v2/payments/cancel | CancelPaymentByIdempotencyKey
[**completePayment**](PaymentsApi.md#completePayment) | **POST** /v2/payments/{payment_id}/complete | CompletePayment
[**createPayment**](PaymentsApi.md#createPayment) | **POST** /v2/payments | CreatePayment
[**getPayment**](PaymentsApi.md#getPayment) | **GET** /v2/payments/{payment_id} | GetPayment
[**listPayments**](PaymentsApi.md#listPayments) | **GET** /v2/payments | ListPayments


<a name="cancelPayment"></a>
# **cancelPayment**
> CancelPaymentResponse cancelPayment(paymentId)

CancelPayment

Cancels (voids) a payment. If you set &#x60;autocomplete&#x60; to &#x60;false&#x60; when creating a payment,  you can cancel the payment using this endpoint.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.PaymentsApi();

var paymentId = SquareConnect.PaymentsApi.constructFromObject({}); // String | The `payment_id` identifying the payment to be canceled.

apiInstance.cancelPayment(paymentId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paymentId** | **String**| The &#x60;payment_id&#x60; identifying the payment to be canceled. | 

### Return type

[**CancelPaymentResponse**](CancelPaymentResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cancelPaymentByIdempotencyKey"></a>
# **cancelPaymentByIdempotencyKey**
> CancelPaymentByIdempotencyKeyResponse cancelPaymentByIdempotencyKey(body)

CancelPaymentByIdempotencyKey

Cancels (voids) a payment identified by the idempotency key that is specified in the request.  Use this method when the status of a &#x60;CreatePayment&#x60; request is unknown (for example, after you send a &#x60;CreatePayment&#x60; request, a network error occurs and you do not get a response). In this case, you can direct Square to cancel the payment using this endpoint. In the request, you provide the same idempotency key that you provided in your &#x60;CreatePayment&#x60; request that you want to cancel. After canceling the payment, you can submit your &#x60;CreatePayment&#x60; request again.  Note that if no payment with the specified idempotency key is found, no action is taken and the endpoint  returns successfully.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.PaymentsApi();

var body = SquareConnect.PaymentsApi.constructFromObject({}); // CancelPaymentByIdempotencyKeyRequest | An object containing the fields to POST for the request.  See the corresponding object definition for field details.

apiInstance.cancelPaymentByIdempotencyKey(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CancelPaymentByIdempotencyKeyRequest**](CancelPaymentByIdempotencyKeyRequest.md)| An object containing the fields to POST for the request.  See the corresponding object definition for field details. | 

### Return type

[**CancelPaymentByIdempotencyKeyResponse**](CancelPaymentByIdempotencyKeyResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="completePayment"></a>
# **completePayment**
> CompletePaymentResponse completePayment(paymentId)

CompletePayment

Completes (captures) a payment.  By default, payments are set to complete immediately after they are created.  If you set &#x60;autocomplete&#x60; to &#x60;false&#x60; when creating a payment, you can complete (capture)  the payment using this endpoint.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.PaymentsApi();

var paymentId = SquareConnect.PaymentsApi.constructFromObject({}); // String | The unique ID identifying the payment to be completed.

apiInstance.completePayment(paymentId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paymentId** | **String**| The unique ID identifying the payment to be completed. | 

### Return type

[**CompletePaymentResponse**](CompletePaymentResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createPayment"></a>
# **createPayment**
> CreatePaymentResponse createPayment(body)

CreatePayment

Charges a payment source (for example, a card  represented by customer&#39;s card on file or a card nonce). In addition  to the payment source, the request must include the  amount to accept for the payment.  There are several optional parameters that you can include in the request  (for example, tip money, whether to autocomplete the payment, or a reference ID  to correlate this payment with another system).   The &#x60;PAYMENTS_WRITE_ADDITIONAL_RECIPIENTS&#x60; OAuth permission is required to enable application fees.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.PaymentsApi();

var body = SquareConnect.PaymentsApi.constructFromObject({}); // CreatePaymentRequest | An object containing the fields to POST for the request.  See the corresponding object definition for field details.

apiInstance.createPayment(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreatePaymentRequest**](CreatePaymentRequest.md)| An object containing the fields to POST for the request.  See the corresponding object definition for field details. | 

### Return type

[**CreatePaymentResponse**](CreatePaymentResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPayment"></a>
# **getPayment**
> GetPaymentResponse getPayment(paymentId)

GetPayment

Retrieves details for a specific payment.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.PaymentsApi();

var paymentId = SquareConnect.PaymentsApi.constructFromObject({}); // String | A unique ID for the desired payment.

apiInstance.getPayment(paymentId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paymentId** | **String**| A unique ID for the desired payment. | 

### Return type

[**GetPaymentResponse**](GetPaymentResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listPayments"></a>
# **listPayments**
> ListPaymentsResponse listPayments(opts)

ListPayments

Retrieves a list of payments taken by the account making the request.  The maximum results per page is 100.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.PaymentsApi();

var opts = { 
  'beginTime': SquareConnect.PaymentsApi.constructFromObject({});, // String | The timestamp for the beginning of the reporting period, in RFC 3339 format. Inclusive. Default: The current time minus one year.
  'endTime': SquareConnect.PaymentsApi.constructFromObject({});, // String | The timestamp for the end of the reporting period, in RFC 3339 format.  Default: The current time.
  'sortOrder': SquareConnect.PaymentsApi.constructFromObject({});, // String | The order in which results are listed: - `ASC` - Oldest to newest. - `DESC` - Newest to oldest (default).
  'cursor': SquareConnect.PaymentsApi.constructFromObject({});, // String | A pagination cursor returned by a previous call to this endpoint. Provide this cursor to retrieve the next set of results for the original query.  For more information, see [Pagination](https://developer.squareup.com/docs/basics/api101/pagination).
  'locationId': SquareConnect.PaymentsApi.constructFromObject({});, // String | Limit results to the location supplied. By default, results are returned for the default (main) location associated with the seller.
  'total': SquareConnect.PaymentsApi.constructFromObject({});, // Number | The exact amount in the `total_money` for a payment.
  'last4': SquareConnect.PaymentsApi.constructFromObject({});, // String | The last four digits of a payment card.
  'cardBrand': SquareConnect.PaymentsApi.constructFromObject({});, // String | The brand of the payment card (for example, VISA).
  'limit': SquareConnect.PaymentsApi.constructFromObject({}); // Number | The maximum number of results to be returned in a single page. It is possible to receive fewer results than the specified limit on a given page.  The default value of 100 is also the maximum allowed value. If the provided value is  greater than 100, it is ignored and the default value is used instead.  Default: `100`
};
apiInstance.listPayments(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **beginTime** | **String**| The timestamp for the beginning of the reporting period, in RFC 3339 format. Inclusive. Default: The current time minus one year. | [optional] 
 **endTime** | **String**| The timestamp for the end of the reporting period, in RFC 3339 format.  Default: The current time. | [optional] 
 **sortOrder** | **String**| The order in which results are listed: - &#x60;ASC&#x60; - Oldest to newest. - &#x60;DESC&#x60; - Newest to oldest (default). | [optional] 
 **cursor** | **String**| A pagination cursor returned by a previous call to this endpoint. Provide this cursor to retrieve the next set of results for the original query.  For more information, see [Pagination](https://developer.squareup.com/docs/basics/api101/pagination). | [optional] 
 **locationId** | **String**| Limit results to the location supplied. By default, results are returned for the default (main) location associated with the seller. | [optional] 
 **total** | **Number**| The exact amount in the &#x60;total_money&#x60; for a payment. | [optional] 
 **last4** | **String**| The last four digits of a payment card. | [optional] 
 **cardBrand** | **String**| The brand of the payment card (for example, VISA). | [optional] 
 **limit** | **Number**| The maximum number of results to be returned in a single page. It is possible to receive fewer results than the specified limit on a given page.  The default value of 100 is also the maximum allowed value. If the provided value is  greater than 100, it is ignored and the default value is used instead.  Default: &#x60;100&#x60; | [optional] 

### Return type

[**ListPaymentsResponse**](ListPaymentsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

