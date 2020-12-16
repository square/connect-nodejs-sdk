# SquareConnect.CustomerGroupsApi

All URIs are relative to *https://connect.squareup.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCustomerGroup**](CustomerGroupsApi.md#createCustomerGroup) | **POST** /v2/customers/groups | CreateCustomerGroup
[**deleteCustomerGroup**](CustomerGroupsApi.md#deleteCustomerGroup) | **DELETE** /v2/customers/groups/{group_id} | DeleteCustomerGroup
[**listCustomerGroups**](CustomerGroupsApi.md#listCustomerGroups) | **GET** /v2/customers/groups | ListCustomerGroups
[**retrieveCustomerGroup**](CustomerGroupsApi.md#retrieveCustomerGroup) | **GET** /v2/customers/groups/{group_id} | RetrieveCustomerGroup
[**updateCustomerGroup**](CustomerGroupsApi.md#updateCustomerGroup) | **PUT** /v2/customers/groups/{group_id} | UpdateCustomerGroup


<a name="createCustomerGroup"></a>
# **createCustomerGroup**
> CreateCustomerGroupResponse createCustomerGroup(body)

CreateCustomerGroup

Creates a new customer group for a business.   The request must include the &#x60;name&#x60; value of the group.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.CustomerGroupsApi();

var body = SquareConnect.CustomerGroupsApi.constructFromObject({}); // CreateCustomerGroupRequest | An object containing the fields to POST for the request.  See the corresponding object definition for field details.

apiInstance.createCustomerGroup(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateCustomerGroupRequest**](CreateCustomerGroupRequest.md)| An object containing the fields to POST for the request.  See the corresponding object definition for field details. | 

### Return type

[**CreateCustomerGroupResponse**](CreateCustomerGroupResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteCustomerGroup"></a>
# **deleteCustomerGroup**
> DeleteCustomerGroupResponse deleteCustomerGroup(groupId)

DeleteCustomerGroup

Deletes a customer group as identified by the &#x60;group_id&#x60; value.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.CustomerGroupsApi();

var groupId = SquareConnect.CustomerGroupsApi.constructFromObject({}); // String | The ID of the customer group to delete.

apiInstance.deleteCustomerGroup(groupId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **String**| The ID of the customer group to delete. | 

### Return type

[**DeleteCustomerGroupResponse**](DeleteCustomerGroupResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listCustomerGroups"></a>
# **listCustomerGroups**
> ListCustomerGroupsResponse listCustomerGroups(opts)

ListCustomerGroups

Retrieves the list of customer groups of a business.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.CustomerGroupsApi();

var opts = { 
  'cursor': SquareConnect.CustomerGroupsApi.constructFromObject({}); // String | A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for your original query.  See the [Pagination guide](https://developer.squareup.com/docs/working-with-apis/pagination) for more information.
};
apiInstance.listCustomerGroups(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cursor** | **String**| A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for your original query.  See the [Pagination guide](https://developer.squareup.com/docs/working-with-apis/pagination) for more information. | [optional] 

### Return type

[**ListCustomerGroupsResponse**](ListCustomerGroupsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="retrieveCustomerGroup"></a>
# **retrieveCustomerGroup**
> RetrieveCustomerGroupResponse retrieveCustomerGroup(groupId)

RetrieveCustomerGroup

Retrieves a specific customer group as identified by the &#x60;group_id&#x60; value.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.CustomerGroupsApi();

var groupId = SquareConnect.CustomerGroupsApi.constructFromObject({}); // String | The ID of the customer group to retrieve.

apiInstance.retrieveCustomerGroup(groupId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **String**| The ID of the customer group to retrieve. | 

### Return type

[**RetrieveCustomerGroupResponse**](RetrieveCustomerGroupResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateCustomerGroup"></a>
# **updateCustomerGroup**
> UpdateCustomerGroupResponse updateCustomerGroup(groupId, body)

UpdateCustomerGroup

Updates a customer group as identified by the &#x60;group_id&#x60; value.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.CustomerGroupsApi();

var groupId = SquareConnect.CustomerGroupsApi.constructFromObject({}); // String | The ID of the customer group to update.

var body = SquareConnect.CustomerGroupsApi.constructFromObject({}); // UpdateCustomerGroupRequest | An object containing the fields to POST for the request.  See the corresponding object definition for field details.

apiInstance.updateCustomerGroup(groupId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **String**| The ID of the customer group to update. | 
 **body** | [**UpdateCustomerGroupRequest**](UpdateCustomerGroupRequest.md)| An object containing the fields to POST for the request.  See the corresponding object definition for field details. | 

### Return type

[**UpdateCustomerGroupResponse**](UpdateCustomerGroupResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

