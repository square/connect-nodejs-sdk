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

Cancels (voids) a payment. If you set &#x60;autocomplete&#x60; to false when creating a payment, you can cancel the payment using this endpoint. For more information, see [Delayed Payments](/payments-api/take-payments#delayed-payments).

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.PaymentsApi();

var paymentId = "paymentId_example"; // String | `payment_id` identifying the payment to be canceled.

apiInstance.cancelPayment(paymentId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paymentId** | **String**| &#x60;payment_id&#x60; identifying the payment to be canceled. | 

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

Cancels (voids) a payment identified by the idempotency key that is specified in the request.   Use this method when status of a CreatePayment request is unknown. For example, after you send a CreatePayment request a network error occurs and you don&#39;t get a response. In this case, you can direct Square to cancel the payment using this endpoint. In the request, you provide the same idempotency key that you provided in your CreatePayment request you want  to cancel. After cancelling the payment, you can submit your CreatePayment request again. Note that if no payment with the specified idempotency key is found, no action is taken, the end  point returns successfully.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.PaymentsApi();

var body = new SquareConnect.CancelPaymentByIdempotencyKeyRequest(); // CancelPaymentByIdempotencyKeyRequest | An object containing the fields to POST for the request.  See the corresponding object definition for field details.

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

Completes (captures) a payment.  By default, payments are set to complete immediately after they are created.  If you set autocomplete to false when creating a payment, you can complete (capture)  the payment using this endpoint. For more information, see [Delayed Payments](/payments-api/take-payments#delayed-payments).

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.PaymentsApi();

var paymentId = "paymentId_example"; // String | Unique ID identifying the payment to be completed.

apiInstance.completePayment(paymentId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paymentId** | **String**| Unique ID identifying the payment to be completed. | 

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

Charges a payment source, for example, a card  represented by customer&#39;s card on file or a card nonce. In addition  to the payment source, the request must also include the  amount to accept for the payment.  There are several optional parameters that you can include in the request.  For example, tip money, whether to autocomplete the payment, or a reference ID to correlate this payment with another system.  For more information about these  payment options, see [Take Payments](/payments-api/take-payments).  The &#x60;PAYMENTS_WRITE_ADDITIONAL_RECIPIENTS&#x60; OAuth permission is required to enable application fees.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.PaymentsApi();

var body = new SquareConnect.CreatePaymentRequest(); // CreatePaymentRequest | An object containing the fields to POST for the request.  See the corresponding object definition for field details.

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

Retrieves details for a specific Payment.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.PaymentsApi();

var paymentId = "paymentId_example"; // String | Unique ID for the desired `Payment`.

apiInstance.getPayment(paymentId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paymentId** | **String**| Unique ID for the desired &#x60;Payment&#x60;. | 

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

Retrieves a list of payments taken by the account making the request.  Max results per page: 100

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.PaymentsApi();

var opts = { 
  'beginTime': "beginTime_example", // String | Timestamp for the beginning of the reporting period, in RFC 3339 format. Inclusive. Default: The current time minus one year.
  'endTime': "endTime_example", // String | Timestamp for the end of the requested reporting period, in RFC 3339 format.  Default: The current time.
  'sortOrder': "sortOrder_example", // String | The order in which results are listed. - `ASC` - oldest to newest - `DESC` - newest to oldest (default).
  'cursor': "cursor_example", // String | A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for the original query.  See [Pagination](https://developer.squareup.com/docs/basics/api101/pagination) for more information.
  'locationId': "locationId_example", // String | ID of location associated with payment
  'total': 789, // Number | The exact amount in the total_money for a `Payment`.
  'last4': "last4_example", // String | The last 4 digits of `Payment` card.
  'cardBrand': "cardBrand_example" // String | The brand of `Payment` card. For example, `VISA`
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
 **beginTime** | **String**| Timestamp for the beginning of the reporting period, in RFC 3339 format. Inclusive. Default: The current time minus one year. | [optional] 
 **endTime** | **String**| Timestamp for the end of the requested reporting period, in RFC 3339 format.  Default: The current time. | [optional] 
 **sortOrder** | **String**| The order in which results are listed. - &#x60;ASC&#x60; - oldest to newest - &#x60;DESC&#x60; - newest to oldest (default). | [optional] 
 **cursor** | **String**| A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for the original query.  See [Pagination](https://developer.squareup.com/docs/basics/api101/pagination) for more information. | [optional] 
 **locationId** | **String**| ID of location associated with payment | [optional] 
 **total** | **Number**| The exact amount in the total_money for a &#x60;Payment&#x60;. | [optional] 
 **last4** | **String**| The last 4 digits of &#x60;Payment&#x60; card. | [optional] 
 **cardBrand** | **String**| The brand of &#x60;Payment&#x60; card. For example, &#x60;VISA&#x60; | [optional] 

### Return type

[**ListPaymentsResponse**](ListPaymentsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

