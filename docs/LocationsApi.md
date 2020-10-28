# SquareConnect.LocationsApi

All URIs are relative to *https://connect.squareup.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createLocation**](LocationsApi.md#createLocation) | **POST** /v2/locations | CreateLocation
[**listLocations**](LocationsApi.md#listLocations) | **GET** /v2/locations | ListLocations
[**retrieveLocation**](LocationsApi.md#retrieveLocation) | **GET** /v2/locations/{location_id} | RetrieveLocation
[**updateLocation**](LocationsApi.md#updateLocation) | **PUT** /v2/locations/{location_id} | UpdateLocation


<a name="createLocation"></a>
# **createLocation**
**Note: This endpoint is in beta.**
> CreateLocationResponse createLocation(body)

CreateLocation

Creates a location.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.LocationsApi();

var body = SquareConnect.LocationsApi.constructFromObject({}); // CreateLocationRequest | An object containing the fields to POST for the request.  See the corresponding object definition for field details.

apiInstance.createLocation(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateLocationRequest**](CreateLocationRequest.md)| An object containing the fields to POST for the request.  See the corresponding object definition for field details. | 

### Return type

[**CreateLocationResponse**](CreateLocationResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listLocations"></a>
# **listLocations**
> ListLocationsResponse listLocations()

ListLocations

Provides information of all locations of a business.  Many Square API endpoints require a &#x60;location_id&#x60; parameter. The &#x60;id&#x60; field of the [&#x60;Location&#x60;](#type-location) objects returned by this endpoint correspond to that &#x60;location_id&#x60; parameter.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.LocationsApi();
apiInstance.listLocations().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ListLocationsResponse**](ListLocationsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="retrieveLocation"></a>
# **retrieveLocation**
> RetrieveLocationResponse retrieveLocation(locationId)

RetrieveLocation

Retrieves details of a location. You can specify \&quot;main\&quot;  as the location ID to retrieve details of the  main location.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.LocationsApi();

var locationId = SquareConnect.LocationsApi.constructFromObject({}); // String | The ID of the location to retrieve. If you specify the string \"main\", then the endpoint returns the main location.

apiInstance.retrieveLocation(locationId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | **String**| The ID of the location to retrieve. If you specify the string \&quot;main\&quot;, then the endpoint returns the main location. | 

### Return type

[**RetrieveLocationResponse**](RetrieveLocationResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateLocation"></a>
# **updateLocation**
**Note: This endpoint is in beta.**
> UpdateLocationResponse updateLocation(locationId, body)

UpdateLocation

Updates a location.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.LocationsApi();

var locationId = SquareConnect.LocationsApi.constructFromObject({}); // String | The ID of the location to update.

var body = SquareConnect.LocationsApi.constructFromObject({}); // UpdateLocationRequest | An object containing the fields to POST for the request.  See the corresponding object definition for field details.

apiInstance.updateLocation(locationId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | **String**| The ID of the location to update. | 
 **body** | [**UpdateLocationRequest**](UpdateLocationRequest.md)| An object containing the fields to POST for the request.  See the corresponding object definition for field details. | 

### Return type

[**UpdateLocationResponse**](UpdateLocationResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

