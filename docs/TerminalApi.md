# SquareConnect.TerminalApi

All URIs are relative to *https://connect.squareup.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelTerminalCheckout**](TerminalApi.md#cancelTerminalCheckout) | **POST** /v2/terminals/checkouts/{checkout_id}/cancel | CancelTerminalCheckout
[**createTerminalCheckout**](TerminalApi.md#createTerminalCheckout) | **POST** /v2/terminals/checkouts | CreateTerminalCheckout
[**getTerminalCheckout**](TerminalApi.md#getTerminalCheckout) | **GET** /v2/terminals/checkouts/{checkout_id} | GetTerminalCheckout
[**searchTerminalCheckouts**](TerminalApi.md#searchTerminalCheckouts) | **POST** /v2/terminals/checkouts/search | SearchTerminalCheckouts


<a name="cancelTerminalCheckout"></a>
# **cancelTerminalCheckout**
**Note: This endpoint is in beta.**
> CancelTerminalCheckoutResponse cancelTerminalCheckout(checkoutId)

CancelTerminalCheckout

Cancels a Terminal checkout request, if the status of the request permits it.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.TerminalApi();

var checkoutId = "checkoutId_example"; // String | Unique ID for the desired `TerminalCheckout`

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

<a name="createTerminalCheckout"></a>
# **createTerminalCheckout**
**Note: This endpoint is in beta.**
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

var body = new SquareConnect.CreateTerminalCheckoutRequest(); // CreateTerminalCheckoutRequest | An object containing the fields to POST for the request.  See the corresponding object definition for field details.

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

<a name="getTerminalCheckout"></a>
# **getTerminalCheckout**
**Note: This endpoint is in beta.**
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

var checkoutId = "checkoutId_example"; // String | Unique ID for the desired `TerminalCheckout`

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

<a name="searchTerminalCheckouts"></a>
# **searchTerminalCheckouts**
**Note: This endpoint is in beta.**
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

var body = new SquareConnect.SearchTerminalCheckoutsRequest(); // SearchTerminalCheckoutsRequest | An object containing the fields to POST for the request.  See the corresponding object definition for field details.

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

