# SquareConnect.V1LocationsApi

All URIs are relative to *https://connect.squareup.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listLocations**](V1LocationsApi.md#listLocations) | **GET** /v1/me/locations | Provides details for a business&#39;s locations, including their IDs.
[**retrieveBusiness**](V1LocationsApi.md#retrieveBusiness) | **GET** /v1/me | Get a business&#39;s information.


<a name="listLocations"></a>
# **listLocations**
> [V1Merchant] listLocations()

Provides details for a business&#39;s locations, including their IDs.

Provides details for a business&#39;s locations, including their IDs.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.V1LocationsApi();
apiInstance.listLocations().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[V1Merchant]**](V1Merchant.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="retrieveBusiness"></a>
# **retrieveBusiness**
> V1Merchant retrieveBusiness()

Get a business&#39;s information.

Get a business&#39;s information.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.V1LocationsApi();
apiInstance.retrieveBusiness().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**V1Merchant**](V1Merchant.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

