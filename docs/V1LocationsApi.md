# SquareConnect.V1LocationsApi

All URIs are relative to *https://connect.squareup.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listLocations**](V1LocationsApi.md#listLocations) | **GET** /v1/me/locations | ListLocations
[**retrieveBusiness**](V1LocationsApi.md#retrieveBusiness) | **GET** /v1/me | RetrieveBusiness


<a name="listLocations"></a>
# **listLocations**
**Note: This endpoint is deprecated.**
> [V1Merchant] listLocations()

ListLocations

Provides details for all business locations associated with a Square account, including the Square-assigned object ID for the location.

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
**Note: This endpoint is deprecated.**
> V1Merchant retrieveBusiness()

RetrieveBusiness

Get the general information for a business.

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

