# SquareConnect.RefundsApi

All URIs are relative to *https://connect.squareup.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPaymentRefund**](RefundsApi.md#getPaymentRefund) | **GET** /v2/refunds/{refund_id} | GetPaymentRefund
[**listPaymentRefunds**](RefundsApi.md#listPaymentRefunds) | **GET** /v2/refunds | ListPaymentRefunds
[**refundPayment**](RefundsApi.md#refundPayment) | **POST** /v2/refunds | RefundPayment


<a name="getPaymentRefund"></a>
# **getPaymentRefund**
> GetPaymentRefundResponse getPaymentRefund(refundId)

GetPaymentRefund

Retrieves a specific refund using the &#x60;refund_id&#x60;.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.RefundsApi();

var refundId = SquareConnect.RefundsApi.constructFromObject({}); // String | The unique ID for the desired `PaymentRefund`.

apiInstance.getPaymentRefund(refundId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **refundId** | **String**| The unique ID for the desired &#x60;PaymentRefund&#x60;. | 

### Return type

[**GetPaymentRefundResponse**](GetPaymentRefundResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listPaymentRefunds"></a>
# **listPaymentRefunds**
> ListPaymentRefundsResponse listPaymentRefunds(opts)

ListPaymentRefunds

Retrieves a list of refunds for the account making the request.  The maximum results per page is 100.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.RefundsApi();

var opts = { 
  'beginTime': SquareConnect.RefundsApi.constructFromObject({});, // String | The timestamp for the beginning of the requested reporting period, in RFC 3339 format.  Default: The current time minus one year.
  'endTime': SquareConnect.RefundsApi.constructFromObject({});, // String | The timestamp for the end of the requested reporting period, in RFC 3339 format.  Default: The current time.
  'sortOrder': SquareConnect.RefundsApi.constructFromObject({});, // String | The order in which results are listed: - `ASC` - Oldest to newest. - `DESC` - Newest to oldest (default).
  'cursor': SquareConnect.RefundsApi.constructFromObject({});, // String | A pagination cursor returned by a previous call to this endpoint. Provide this cursor to retrieve the next set of results for the original query.  For more information, see [Pagination](https://developer.squareup.com/docs/basics/api101/pagination).
  'locationId': SquareConnect.RefundsApi.constructFromObject({});, // String | Limit results to the location supplied. By default, results are returned for all locations associated with the seller.
  'status': SquareConnect.RefundsApi.constructFromObject({});, // String | If provided, only refunds with the given status are returned. For a list of refund status values, see `PaymentRefund`.  Default: If omitted, refunds are returned regardless of their status.
  'sourceType': SquareConnect.RefundsApi.constructFromObject({});, // String | If provided, only refunds with the given source type are returned. - `CARD` - List refunds only for payments where `CARD` was specified as the payment source.  Default: If omitted, refunds are returned regardless of the source type.
  'limit': SquareConnect.RefundsApi.constructFromObject({}); // Number | The maximum number of results to be returned in a single page.  It is possible to receive fewer results than the specified limit on a given page.  If the supplied value is greater than 100, no more than 100 results are returned.  Default: 100
};
apiInstance.listPaymentRefunds(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **beginTime** | **String**| The timestamp for the beginning of the requested reporting period, in RFC 3339 format.  Default: The current time minus one year. | [optional] 
 **endTime** | **String**| The timestamp for the end of the requested reporting period, in RFC 3339 format.  Default: The current time. | [optional] 
 **sortOrder** | **String**| The order in which results are listed: - &#x60;ASC&#x60; - Oldest to newest. - &#x60;DESC&#x60; - Newest to oldest (default). | [optional] 
 **cursor** | **String**| A pagination cursor returned by a previous call to this endpoint. Provide this cursor to retrieve the next set of results for the original query.  For more information, see [Pagination](https://developer.squareup.com/docs/basics/api101/pagination). | [optional] 
 **locationId** | **String**| Limit results to the location supplied. By default, results are returned for all locations associated with the seller. | [optional] 
 **status** | **String**| If provided, only refunds with the given status are returned. For a list of refund status values, see &#x60;PaymentRefund&#x60;.  Default: If omitted, refunds are returned regardless of their status. | [optional] 
 **sourceType** | **String**| If provided, only refunds with the given source type are returned. - &#x60;CARD&#x60; - List refunds only for payments where &#x60;CARD&#x60; was specified as the payment source.  Default: If omitted, refunds are returned regardless of the source type. | [optional] 
 **limit** | **Number**| The maximum number of results to be returned in a single page.  It is possible to receive fewer results than the specified limit on a given page.  If the supplied value is greater than 100, no more than 100 results are returned.  Default: 100 | [optional] 

### Return type

[**ListPaymentRefundsResponse**](ListPaymentRefundsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="refundPayment"></a>
# **refundPayment**
> RefundPaymentResponse refundPayment(body)

RefundPayment

Refunds a payment. You can refund the entire payment amount or a  portion of it.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.RefundsApi();

var body = SquareConnect.RefundsApi.constructFromObject({}); // RefundPaymentRequest | An object containing the fields to POST for the request.  See the corresponding object definition for field details.

apiInstance.refundPayment(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RefundPaymentRequest**](RefundPaymentRequest.md)| An object containing the fields to POST for the request.  See the corresponding object definition for field details. | 

### Return type

[**RefundPaymentResponse**](RefundPaymentResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

