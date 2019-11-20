# SquareConnect.InventoryApi

All URIs are relative to *https://connect.squareup.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**batchChangeInventory**](InventoryApi.md#batchChangeInventory) | **POST** /v2/inventory/batch-change | BatchChangeInventory
[**batchRetrieveInventoryChanges**](InventoryApi.md#batchRetrieveInventoryChanges) | **POST** /v2/inventory/batch-retrieve-changes | BatchRetrieveInventoryChanges
[**batchRetrieveInventoryCounts**](InventoryApi.md#batchRetrieveInventoryCounts) | **POST** /v2/inventory/batch-retrieve-counts | BatchRetrieveInventoryCounts
[**retrieveInventoryAdjustment**](InventoryApi.md#retrieveInventoryAdjustment) | **GET** /v2/inventory/adjustment/{adjustment_id} | RetrieveInventoryAdjustment
[**retrieveInventoryChanges**](InventoryApi.md#retrieveInventoryChanges) | **GET** /v2/inventory/{catalog_object_id}/changes | RetrieveInventoryChanges
[**retrieveInventoryCount**](InventoryApi.md#retrieveInventoryCount) | **GET** /v2/inventory/{catalog_object_id} | RetrieveInventoryCount
[**retrieveInventoryPhysicalCount**](InventoryApi.md#retrieveInventoryPhysicalCount) | **GET** /v2/inventory/physical-count/{physical_count_id} | RetrieveInventoryPhysicalCount


<a name="batchChangeInventory"></a>
# **batchChangeInventory**
> BatchChangeInventoryResponse batchChangeInventory(body)

BatchChangeInventory

Applies adjustments and counts to the provided item quantities.  On success: returns the current calculated counts for all objects referenced in the request. On failure: returns a list of related errors.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.InventoryApi();

var body = new SquareConnect.BatchChangeInventoryRequest(); // BatchChangeInventoryRequest | An object containing the fields to POST for the request.  See the corresponding object definition for field details.

apiInstance.batchChangeInventory(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**BatchChangeInventoryRequest**](BatchChangeInventoryRequest.md)| An object containing the fields to POST for the request.  See the corresponding object definition for field details. | 

### Return type

[**BatchChangeInventoryResponse**](BatchChangeInventoryResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="batchRetrieveInventoryChanges"></a>
# **batchRetrieveInventoryChanges**
> BatchRetrieveInventoryChangesResponse batchRetrieveInventoryChanges(body)

BatchRetrieveInventoryChanges

Returns historical physical counts and adjustments based on the provided filter criteria.  Results are paginated and sorted in ascending order according their &#x60;occurred_at&#x60; timestamp (oldest first).  BatchRetrieveInventoryChanges is a catch-all query endpoint for queries that cannot be handled by other, simpler endpoints.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.InventoryApi();

var body = new SquareConnect.BatchRetrieveInventoryChangesRequest(); // BatchRetrieveInventoryChangesRequest | An object containing the fields to POST for the request.  See the corresponding object definition for field details.

apiInstance.batchRetrieveInventoryChanges(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**BatchRetrieveInventoryChangesRequest**](BatchRetrieveInventoryChangesRequest.md)| An object containing the fields to POST for the request.  See the corresponding object definition for field details. | 

### Return type

[**BatchRetrieveInventoryChangesResponse**](BatchRetrieveInventoryChangesResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="batchRetrieveInventoryCounts"></a>
# **batchRetrieveInventoryCounts**
> BatchRetrieveInventoryCountsResponse batchRetrieveInventoryCounts(body)

BatchRetrieveInventoryCounts

Returns current counts for the provided [CatalogObject](#type-catalogobject)s at the requested [Location](#type-location)s.  Results are paginated and sorted in descending order according to their &#x60;calculated_at&#x60; timestamp (newest first).  When &#x60;updated_after&#x60; is specified, only counts that have changed since that time (based on the server timestamp for the most recent change) are returned. This allows clients to perform a \&quot;sync\&quot; operation, for example in response to receiving a Webhook notification.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.InventoryApi();

var body = new SquareConnect.BatchRetrieveInventoryCountsRequest(); // BatchRetrieveInventoryCountsRequest | An object containing the fields to POST for the request.  See the corresponding object definition for field details.

apiInstance.batchRetrieveInventoryCounts(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**BatchRetrieveInventoryCountsRequest**](BatchRetrieveInventoryCountsRequest.md)| An object containing the fields to POST for the request.  See the corresponding object definition for field details. | 

### Return type

[**BatchRetrieveInventoryCountsResponse**](BatchRetrieveInventoryCountsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="retrieveInventoryAdjustment"></a>
# **retrieveInventoryAdjustment**
> RetrieveInventoryAdjustmentResponse retrieveInventoryAdjustment(adjustmentId)

RetrieveInventoryAdjustment

Returns the [InventoryAdjustment](#type-inventoryadjustment) object with the provided &#x60;adjustment_id&#x60;.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.InventoryApi();

var adjustmentId = "adjustmentId_example"; // String | ID of the `InventoryAdjustment` to retrieve.

apiInstance.retrieveInventoryAdjustment(adjustmentId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **adjustmentId** | **String**| ID of the &#x60;InventoryAdjustment&#x60; to retrieve. | 

### Return type

[**RetrieveInventoryAdjustmentResponse**](RetrieveInventoryAdjustmentResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="retrieveInventoryChanges"></a>
# **retrieveInventoryChanges**
> RetrieveInventoryChangesResponse retrieveInventoryChanges(catalogObjectId, opts)

RetrieveInventoryChanges

Returns a set of physical counts and inventory adjustments for the provided [CatalogObject](#type-catalogobject) at the requested [Location](#type-location)s.  Results are paginated and sorted in descending order according to their &#x60;occurred_at&#x60; timestamp (newest first).  There are no limits on how far back the caller can page. This endpoint is useful when displaying recent changes for a specific item. For more sophisticated queries, use a batch endpoint.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.InventoryApi();

var catalogObjectId = "catalogObjectId_example"; // String | ID of the `CatalogObject` to retrieve.

var opts = { 
  'locationIds': "locationIds_example", // String | The `Location` IDs to look up as a comma-separated list. An empty list queries all locations.
  'cursor': "cursor_example" // String | A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for the original query.  See the [Pagination](https://developer.squareup.com/docs/docs/working-with-apis/pagination) guide for more information.
};
apiInstance.retrieveInventoryChanges(catalogObjectId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogObjectId** | **String**| ID of the &#x60;CatalogObject&#x60; to retrieve. | 
 **locationIds** | **String**| The &#x60;Location&#x60; IDs to look up as a comma-separated list. An empty list queries all locations. | [optional] 
 **cursor** | **String**| A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for the original query.  See the [Pagination](https://developer.squareup.com/docs/docs/working-with-apis/pagination) guide for more information. | [optional] 

### Return type

[**RetrieveInventoryChangesResponse**](RetrieveInventoryChangesResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="retrieveInventoryCount"></a>
# **retrieveInventoryCount**
> RetrieveInventoryCountResponse retrieveInventoryCount(catalogObjectId, opts)

RetrieveInventoryCount

Retrieves the current calculated stock count for a given [CatalogObject](#type-catalogobject) at a given set of [Location](#type-location)s. Responses are paginated and unsorted. For more sophisticated queries, use a batch endpoint.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.InventoryApi();

var catalogObjectId = "catalogObjectId_example"; // String | ID of the `CatalogObject` to retrieve.

var opts = { 
  'locationIds': "locationIds_example", // String | The `Location` IDs to look up as a comma-separated list. An empty list queries all locations.
  'cursor': "cursor_example" // String | A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for the original query.  See the [Pagination](https://developer.squareup.com/docs/docs/working-with-apis/pagination) guide for more information.
};
apiInstance.retrieveInventoryCount(catalogObjectId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogObjectId** | **String**| ID of the &#x60;CatalogObject&#x60; to retrieve. | 
 **locationIds** | **String**| The &#x60;Location&#x60; IDs to look up as a comma-separated list. An empty list queries all locations. | [optional] 
 **cursor** | **String**| A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for the original query.  See the [Pagination](https://developer.squareup.com/docs/docs/working-with-apis/pagination) guide for more information. | [optional] 

### Return type

[**RetrieveInventoryCountResponse**](RetrieveInventoryCountResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="retrieveInventoryPhysicalCount"></a>
# **retrieveInventoryPhysicalCount**
> RetrieveInventoryPhysicalCountResponse retrieveInventoryPhysicalCount(physicalCountId)

RetrieveInventoryPhysicalCount

Returns the [InventoryPhysicalCount](#type-inventoryphysicalcount) object with the provided &#x60;physical_count_id&#x60;.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.InventoryApi();

var physicalCountId = "physicalCountId_example"; // String | ID of the `InventoryPhysicalCount` to retrieve.

apiInstance.retrieveInventoryPhysicalCount(physicalCountId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **physicalCountId** | **String**| ID of the &#x60;InventoryPhysicalCount&#x60; to retrieve. | 

### Return type

[**RetrieveInventoryPhysicalCountResponse**](RetrieveInventoryPhysicalCountResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

