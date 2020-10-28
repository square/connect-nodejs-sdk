# SquareConnect.TerminalApi

All URIs are relative to *https://connect.squareup.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelTerminalCheckout**](TerminalApi.md#cancelTerminalCheckout) | **POST** /v2/terminals/checkouts/{checkout_id}/cancel | CancelTerminalCheckout
[**cancelTerminalRefund**](TerminalApi.md#cancelTerminalRefund) | **POST** /v2/terminals/refunds/{terminal_refund_id}/cancel | CancelTerminalRefund
[**createTerminalCheckout**](TerminalApi.md#createTerminalCheckout) | **POST** /v2/terminals/checkouts | CreateTerminalCheckout
[**createTerminalRefund**](TerminalApi.md#createTerminalRefund) | **POST** /v2/terminals/refunds | CreateTerminalRefund
[**getTerminalCheckout**](TerminalApi.md#getTerminalCheckout) | **GET** /v2/terminals/checkouts/{checkout_id} | GetTerminalCheckout
[**getTerminalRefund**](TerminalApi.md#getTerminalRefund) | **GET** /v2/terminals/refunds/{terminal_refund_id} | GetTerminalRefund
[**searchTerminalCheckouts**](TerminalApi.md#searchTerminalCheckouts) | **POST** /v2/terminals/checkouts/search | SearchTerminalCheckouts
[**searchTerminalRefunds**](TerminalApi.md#searchTerminalRefunds) | **POST** /v2/terminals/refunds/search | SearchTerminalRefunds


<a name="cancelTerminalCheckout"></a>
# **cancelTerminalCheckout**
> CancelTerminalCheckoutResponse cancelTerminalCheckout(checkoutId)

CancelTerminalCheckout

Cancels a Terminal checkout request if the status of the request permits it.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.TerminalApi();

var checkoutId = SquareConnect.TerminalApi.constructFromObject({}); // String | Unique ID for the desired `TerminalCheckout`

apiInstance.cancelTerminalCheckout(checkoutId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkoutId** | **String**| Unique ID for the desired &#x60;TerminalCheckout&#x60; | 

### Return type

[**CancelTerminalCheckoutResponse**](CancelTerminalCheckoutResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cancelTerminalRefund"></a>
# **cancelTerminalRefund**
**Note: This endpoint is in beta.**
> CancelTerminalRefundResponse cancelTerminalRefund(terminalRefundId)

CancelTerminalRefund

Cancels an Interac terminal refund request by refund request ID if the status of the request permits it.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.TerminalApi();

var terminalRefundId = SquareConnect.TerminalApi.constructFromObject({}); // String | Unique ID for the desired `TerminalRefund`

apiInstance.cancelTerminalRefund(terminalRefundId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **terminalRefundId** | **String**| Unique ID for the desired &#x60;TerminalRefund&#x60; | 

### Return type

[**CancelTerminalRefundResponse**](CancelTerminalRefundResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createTerminalCheckout"></a>
# **createTerminalCheckout**
> CreateTerminalCheckoutResponse createTerminalCheckout(body)

CreateTerminalCheckout

Creates a new Terminal checkout request and sends it to the specified device to take a payment for the requested amount.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.TerminalApi();

var body = SquareConnect.TerminalApi.constructFromObject({}); // CreateTerminalCheckoutRequest | An object containing the fields to POST for the request.  See the corresponding object definition for field details.

apiInstance.createTerminalCheckout(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateTerminalCheckoutRequest**](CreateTerminalCheckoutRequest.md)| An object containing the fields to POST for the request.  See the corresponding object definition for field details. | 

### Return type

[**CreateTerminalCheckoutResponse**](CreateTerminalCheckoutResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createTerminalRefund"></a>
# **createTerminalRefund**
**Note: This endpoint is in beta.**
> CreateTerminalRefundResponse createTerminalRefund(body)

CreateTerminalRefund

Creates a request to refund an Interac payment completed on a Square Terminal.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.TerminalApi();

var body = SquareConnect.TerminalApi.constructFromObject({}); // CreateTerminalRefundRequest | An object containing the fields to POST for the request.  See the corresponding object definition for field details.

apiInstance.createTerminalRefund(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateTerminalRefundRequest**](CreateTerminalRefundRequest.md)| An object containing the fields to POST for the request.  See the corresponding object definition for field details. | 

### Return type

[**CreateTerminalRefundResponse**](CreateTerminalRefundResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTerminalCheckout"></a>
# **getTerminalCheckout**
> GetTerminalCheckoutResponse getTerminalCheckout(checkoutId)

GetTerminalCheckout

Retrieves a Terminal checkout request by checkout_id.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.TerminalApi();

var checkoutId = SquareConnect.TerminalApi.constructFromObject({}); // String | Unique ID for the desired `TerminalCheckout`

apiInstance.getTerminalCheckout(checkoutId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkoutId** | **String**| Unique ID for the desired &#x60;TerminalCheckout&#x60; | 

### Return type

[**GetTerminalCheckoutResponse**](GetTerminalCheckoutResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTerminalRefund"></a>
# **getTerminalRefund**
**Note: This endpoint is in beta.**
> GetTerminalRefundResponse getTerminalRefund(terminalRefundId)

GetTerminalRefund

Retrieves an Interac terminal refund object by ID.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.TerminalApi();

var terminalRefundId = SquareConnect.TerminalApi.constructFromObject({}); // String | Unique ID for the desired `TerminalRefund`

apiInstance.getTerminalRefund(terminalRefundId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **terminalRefundId** | **String**| Unique ID for the desired &#x60;TerminalRefund&#x60; | 

### Return type

[**GetTerminalRefundResponse**](GetTerminalRefundResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchTerminalCheckouts"></a>
# **searchTerminalCheckouts**
> SearchTerminalCheckoutsResponse searchTerminalCheckouts(body)

SearchTerminalCheckouts

Retrieves a filtered list of Terminal checkout requests created by the account making the request.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.TerminalApi();

var body = SquareConnect.TerminalApi.constructFromObject({}); // SearchTerminalCheckoutsRequest | An object containing the fields to POST for the request.  See the corresponding object definition for field details.

apiInstance.searchTerminalCheckouts(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SearchTerminalCheckoutsRequest**](SearchTerminalCheckoutsRequest.md)| An object containing the fields to POST for the request.  See the corresponding object definition for field details. | 

### Return type

[**SearchTerminalCheckoutsResponse**](SearchTerminalCheckoutsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchTerminalRefunds"></a>
# **searchTerminalRefunds**
**Note: This endpoint is in beta.**
> SearchTerminalRefundsResponse searchTerminalRefunds(body)

SearchTerminalRefunds

Retrieves a filtered list of Terminal Interac refund requests created by the seller making the request.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.TerminalApi();

var body = SquareConnect.TerminalApi.constructFromObject({}); // SearchTerminalRefundsRequest | An object containing the fields to POST for the request.  See the corresponding object definition for field details.

apiInstance.searchTerminalRefunds(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SearchTerminalRefundsRequest**](SearchTerminalRefundsRequest.md)| An object containing the fields to POST for the request.  See the corresponding object definition for field details. | 

### Return type

[**SearchTerminalRefundsResponse**](SearchTerminalRefundsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

