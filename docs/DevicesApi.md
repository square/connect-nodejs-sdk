# SquareConnect.DevicesApi

All URIs are relative to *https://connect.squareup.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDeviceCode**](DevicesApi.md#createDeviceCode) | **POST** /v2/devices/codes | CreateDeviceCode
[**getDeviceCode**](DevicesApi.md#getDeviceCode) | **GET** /v2/devices/codes/{id} | GetDeviceCode
[**listDeviceCodes**](DevicesApi.md#listDeviceCodes) | **GET** /v2/devices/codes | ListDeviceCodes


<a name="createDeviceCode"></a>
# **createDeviceCode**
**Note: This endpoint is in beta.**
> CreateDeviceCodeResponse createDeviceCode(body)

CreateDeviceCode

Creates a DeviceCode that can be used to login to a Square Terminal device to enter the connected terminal mode.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.DevicesApi();

var body = new SquareConnect.CreateDeviceCodeRequest(); // CreateDeviceCodeRequest | An object containing the fields to POST for the request.  See the corresponding object definition for field details.

apiInstance.createDeviceCode(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateDeviceCodeRequest**](CreateDeviceCodeRequest.md)| An object containing the fields to POST for the request.  See the corresponding object definition for field details. | 

### Return type

[**CreateDeviceCodeResponse**](CreateDeviceCodeResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDeviceCode"></a>
# **getDeviceCode**
**Note: This endpoint is in beta.**
> GetDeviceCodeResponse getDeviceCode(id)

GetDeviceCode

Retrieves DeviceCode with the associated ID.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.DevicesApi();

var id = "id_example"; // String | The unique identifier for the device code.

apiInstance.getDeviceCode(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The unique identifier for the device code. | 

### Return type

[**GetDeviceCodeResponse**](GetDeviceCodeResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listDeviceCodes"></a>
# **listDeviceCodes**
**Note: This endpoint is in beta.**
> ListDeviceCodesResponse listDeviceCodes(opts)

ListDeviceCodes

Lists all DeviceCodes associated with the merchant.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.DevicesApi();

var opts = { 
  'cursor': "cursor_example", // String | A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for your original query.  See [Paginating results](#paginatingresults) for more information.
  'locationId': "locationId_example", // String | If specified, only returns DeviceCodes of the specified location. Returns DeviceCodes of all locations if empty.
  'productType': "productType_example" // String | If specified, only returns DeviceCodes targeting the specified product type. Returns DeviceCodes of all product types if empty.
};
apiInstance.listDeviceCodes(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cursor** | **String**| A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for your original query.  See [Paginating results](#paginatingresults) for more information. | [optional] 
 **locationId** | **String**| If specified, only returns DeviceCodes of the specified location. Returns DeviceCodes of all locations if empty. | [optional] 
 **productType** | **String**| If specified, only returns DeviceCodes targeting the specified product type. Returns DeviceCodes of all product types if empty. | [optional] 

### Return type

[**ListDeviceCodesResponse**](ListDeviceCodesResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

