# SquareConnect.CustomerSegmentsApi

All URIs are relative to *https://connect.squareup.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listCustomerSegments**](CustomerSegmentsApi.md#listCustomerSegments) | **GET** /v2/customers/segments | ListCustomerSegments
[**retrieveCustomerSegment**](CustomerSegmentsApi.md#retrieveCustomerSegment) | **GET** /v2/customers/segments/{segment_id} | RetrieveCustomerSegment


<a name="listCustomerSegments"></a>
# **listCustomerSegments**
**Note: This endpoint is in beta.**
> ListCustomerSegmentsResponse listCustomerSegments(opts)

ListCustomerSegments

Retrieves the list of customer segments of a business.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.CustomerSegmentsApi();

var opts = { 
  'cursor': SquareConnect.CustomerSegmentsApi.constructFromObject({}); // String | A pagination cursor returned by previous calls to __ListCustomerSegments__. Used to retrieve the next set of query results.  See the [Pagination guide](https://developer.squareup.com/docs/docs/working-with-apis/pagination) for more information.
};
apiInstance.listCustomerSegments(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cursor** | **String**| A pagination cursor returned by previous calls to __ListCustomerSegments__. Used to retrieve the next set of query results.  See the [Pagination guide](https://developer.squareup.com/docs/docs/working-with-apis/pagination) for more information. | [optional] 

### Return type

[**ListCustomerSegmentsResponse**](ListCustomerSegmentsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="retrieveCustomerSegment"></a>
# **retrieveCustomerSegment**
**Note: This endpoint is in beta.**
> RetrieveCustomerSegmentResponse retrieveCustomerSegment(segmentId)

RetrieveCustomerSegment

Retrieves a specific customer segment as identified by the &#x60;segment_id&#x60; value.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.CustomerSegmentsApi();

var segmentId = SquareConnect.CustomerSegmentsApi.constructFromObject({}); // String | The Square-issued ID of the customer segment.

apiInstance.retrieveCustomerSegment(segmentId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **segmentId** | **String**| The Square-issued ID of the customer segment. | 

### Return type

[**RetrieveCustomerSegmentResponse**](RetrieveCustomerSegmentResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

