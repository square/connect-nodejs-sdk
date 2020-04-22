# SquareConnect.CustomersApi

All URIs are relative to *https://connect.squareup.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addGroupToCustomer**](CustomersApi.md#addGroupToCustomer) | **PUT** /v2/customers/{customer_id}/groups/{group_id} | AddGroupToCustomer
[**createCustomer**](CustomersApi.md#createCustomer) | **POST** /v2/customers | CreateCustomer
[**createCustomerCard**](CustomersApi.md#createCustomerCard) | **POST** /v2/customers/{customer_id}/cards | CreateCustomerCard
[**deleteCustomer**](CustomersApi.md#deleteCustomer) | **DELETE** /v2/customers/{customer_id} | DeleteCustomer
[**deleteCustomerCard**](CustomersApi.md#deleteCustomerCard) | **DELETE** /v2/customers/{customer_id}/cards/{card_id} | DeleteCustomerCard
[**listCustomers**](CustomersApi.md#listCustomers) | **GET** /v2/customers | ListCustomers
[**removeGroupFromCustomer**](CustomersApi.md#removeGroupFromCustomer) | **DELETE** /v2/customers/{customer_id}/groups/{group_id} | RemoveGroupFromCustomer
[**retrieveCustomer**](CustomersApi.md#retrieveCustomer) | **GET** /v2/customers/{customer_id} | RetrieveCustomer
[**searchCustomers**](CustomersApi.md#searchCustomers) | **POST** /v2/customers/search | SearchCustomers
[**updateCustomer**](CustomersApi.md#updateCustomer) | **PUT** /v2/customers/{customer_id} | UpdateCustomer


<a name="addGroupToCustomer"></a>
# **addGroupToCustomer**
**Note: This endpoint is in beta.**
> AddGroupToCustomerResponse addGroupToCustomer(customerId, groupId)

AddGroupToCustomer

Adds a customer membership to a customer group.   The customer is identified by the &#x60;customer_id&#x60; value  and the customer group is identified by the &#x60;group_id&#x60; value.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.CustomersApi();

var customerId = "customerId_example"; // String | The ID of the customer to add to a group.

var groupId = "groupId_example"; // String | The ID of the customer group to add the customer to.

apiInstance.addGroupToCustomer(customerId, groupId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| The ID of the customer to add to a group. | 
 **groupId** | **String**| The ID of the customer group to add the customer to. | 

### Return type

[**AddGroupToCustomerResponse**](AddGroupToCustomerResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createCustomer"></a>
# **createCustomer**
> CreateCustomerResponse createCustomer(body)

CreateCustomer

Creates a new customer for a business, which can have associated cards on file.  You must provide __at least one__ of the following values in your request to this endpoint:  - &#x60;given_name&#x60; - &#x60;family_name&#x60; - &#x60;company_name&#x60; - &#x60;email_address&#x60; - &#x60;phone_number&#x60;

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.CustomersApi();

var body = new SquareConnect.CreateCustomerRequest(); // CreateCustomerRequest | An object containing the fields to POST for the request.  See the corresponding object definition for field details.

apiInstance.createCustomer(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateCustomerRequest**](CreateCustomerRequest.md)| An object containing the fields to POST for the request.  See the corresponding object definition for field details. | 

### Return type

[**CreateCustomerResponse**](CreateCustomerResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createCustomerCard"></a>
# **createCustomerCard**
> CreateCustomerCardResponse createCustomerCard(customerId, body)

CreateCustomerCard

Adds a card on file to an existing customer.  As with charges, calls to &#x60;CreateCustomerCard&#x60; are idempotent. Multiple calls with the same card nonce return the same card record that was created with the provided nonce during the _first_ call.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.CustomersApi();

var customerId = "customerId_example"; // String | The Square ID of the customer profile the card is linked to.

var body = new SquareConnect.CreateCustomerCardRequest(); // CreateCustomerCardRequest | An object containing the fields to POST for the request.  See the corresponding object definition for field details.

apiInstance.createCustomerCard(customerId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| The Square ID of the customer profile the card is linked to. | 
 **body** | [**CreateCustomerCardRequest**](CreateCustomerCardRequest.md)| An object containing the fields to POST for the request.  See the corresponding object definition for field details. | 

### Return type

[**CreateCustomerCardResponse**](CreateCustomerCardResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteCustomer"></a>
# **deleteCustomer**
> DeleteCustomerResponse deleteCustomer(customerId)

DeleteCustomer

Deletes a customer from a business, along with any linked cards on file. When two profiles are merged into a single profile, that profile is assigned a new &#x60;customer_id&#x60;. You must use the new &#x60;customer_id&#x60; to delete merged profiles.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.CustomersApi();

var customerId = "customerId_example"; // String | The ID of the customer to delete.

apiInstance.deleteCustomer(customerId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| The ID of the customer to delete. | 

### Return type

[**DeleteCustomerResponse**](DeleteCustomerResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteCustomerCard"></a>
# **deleteCustomerCard**
> DeleteCustomerCardResponse deleteCustomerCard(customerId, cardId)

DeleteCustomerCard

Removes a card on file from a customer.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.CustomersApi();

var customerId = "customerId_example"; // String | The ID of the customer that the card on file belongs to.

var cardId = "cardId_example"; // String | The ID of the card on file to delete.

apiInstance.deleteCustomerCard(customerId, cardId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| The ID of the customer that the card on file belongs to. | 
 **cardId** | **String**| The ID of the card on file to delete. | 

### Return type

[**DeleteCustomerCardResponse**](DeleteCustomerCardResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listCustomers"></a>
# **listCustomers**
> ListCustomersResponse listCustomers(opts)

ListCustomers

Lists a business&#39;s customers.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.CustomersApi();

var opts = { 
  'cursor': "cursor_example", // String | A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for your original query.  See the [Pagination guide](https://developer.squareup.com/docs/working-with-apis/pagination) for more information.
  'sortField': "sortField_example", // String | Indicates how Customers should be sorted.  Default: `DEFAULT`.
  'sortOrder': "sortOrder_example" // String | Indicates whether Customers should be sorted in ascending (`ASC`) or descending (`DESC`) order.  Default: `ASC`.
};
apiInstance.listCustomers(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cursor** | **String**| A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for your original query.  See the [Pagination guide](https://developer.squareup.com/docs/working-with-apis/pagination) for more information. | [optional] 
 **sortField** | **String**| Indicates how Customers should be sorted.  Default: &#x60;DEFAULT&#x60;. | [optional] 
 **sortOrder** | **String**| Indicates whether Customers should be sorted in ascending (&#x60;ASC&#x60;) or descending (&#x60;DESC&#x60;) order.  Default: &#x60;ASC&#x60;. | [optional] 

### Return type

[**ListCustomersResponse**](ListCustomersResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeGroupFromCustomer"></a>
# **removeGroupFromCustomer**
**Note: This endpoint is in beta.**
> RemoveGroupFromCustomerResponse removeGroupFromCustomer(customerId, groupId)

RemoveGroupFromCustomer

Removes a customer membership from a customer group.   The customer is identified by the &#x60;customer_id&#x60; value  and the customer group is identified by the &#x60;group_id&#x60; value.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.CustomersApi();

var customerId = "customerId_example"; // String | The ID of the customer to remove from the group.

var groupId = "groupId_example"; // String | The ID of the customer group to remove the customer from.

apiInstance.removeGroupFromCustomer(customerId, groupId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| The ID of the customer to remove from the group. | 
 **groupId** | **String**| The ID of the customer group to remove the customer from. | 

### Return type

[**RemoveGroupFromCustomerResponse**](RemoveGroupFromCustomerResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="retrieveCustomer"></a>
# **retrieveCustomer**
> RetrieveCustomerResponse retrieveCustomer(customerId)

RetrieveCustomer

Returns details for a single customer.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.CustomersApi();

var customerId = "customerId_example"; // String | The ID of the customer to retrieve.

apiInstance.retrieveCustomer(customerId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| The ID of the customer to retrieve. | 

### Return type

[**RetrieveCustomerResponse**](RetrieveCustomerResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchCustomers"></a>
# **searchCustomers**
> SearchCustomersResponse searchCustomers(body)

SearchCustomers

Searches the customer profiles associated with a Square account. Calling SearchCustomers without an explicit query parameter returns all customer profiles ordered alphabetically based on &#x60;given_name&#x60; and &#x60;family_name&#x60;.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.CustomersApi();

var body = new SquareConnect.SearchCustomersRequest(); // SearchCustomersRequest | An object containing the fields to POST for the request.  See the corresponding object definition for field details.

apiInstance.searchCustomers(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SearchCustomersRequest**](SearchCustomersRequest.md)| An object containing the fields to POST for the request.  See the corresponding object definition for field details. | 

### Return type

[**SearchCustomersResponse**](SearchCustomersResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateCustomer"></a>
# **updateCustomer**
> UpdateCustomerResponse updateCustomer(customerId, body)

UpdateCustomer

Updates the details of an existing customer. When two profiles are merged into a single profile, that profile is assigned a new &#x60;customer_id&#x60;. You must use the new &#x60;customer_id&#x60; to update merged profiles.  You cannot edit a customer&#39;s cards on file with this endpoint. To make changes to a card on file, you must delete the existing card on file with the [DeleteCustomerCard](#endpoint-deletecustomercard) endpoint, then create a new one with the [CreateCustomerCard](#endpoint-createcustomercard) endpoint.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.CustomersApi();

var customerId = "customerId_example"; // String | The ID of the customer to update.

var body = new SquareConnect.UpdateCustomerRequest(); // UpdateCustomerRequest | An object containing the fields to POST for the request.  See the corresponding object definition for field details.

apiInstance.updateCustomer(customerId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| The ID of the customer to update. | 
 **body** | [**UpdateCustomerRequest**](UpdateCustomerRequest.md)| An object containing the fields to POST for the request.  See the corresponding object definition for field details. | 

### Return type

[**UpdateCustomerResponse**](UpdateCustomerResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

