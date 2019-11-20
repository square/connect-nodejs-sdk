# SquareConnect.EmployeesApi

All URIs are relative to *https://connect.squareup.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listEmployees**](EmployeesApi.md#listEmployees) | **GET** /v2/employees | ListEmployees
[**retrieveEmployee**](EmployeesApi.md#retrieveEmployee) | **GET** /v2/employees/{id} | RetrieveEmployee


<a name="listEmployees"></a>
# **listEmployees**
> ListEmployeesResponse listEmployees(opts)

ListEmployees



### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.EmployeesApi();

var opts = { 
  'locationId': "locationId_example", // String | Filter employees returned to only those that are associated with the specified location.
  'status': "status_example", // String | Specifies the EmployeeStatus to filter the employee by.
  'limit': 56, // Number | The number of employees to be returned on each page.
  'cursor': "cursor_example" // String | The token required to retrieve the specified page of results.
};
apiInstance.listEmployees(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | **String**| Filter employees returned to only those that are associated with the specified location. | [optional] 
 **status** | **String**| Specifies the EmployeeStatus to filter the employee by. | [optional] 
 **limit** | **Number**| The number of employees to be returned on each page. | [optional] 
 **cursor** | **String**| The token required to retrieve the specified page of results. | [optional] 

### Return type

[**ListEmployeesResponse**](ListEmployeesResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="retrieveEmployee"></a>
# **retrieveEmployee**
> RetrieveEmployeeResponse retrieveEmployee(id)

RetrieveEmployee



### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.EmployeesApi();

var id = "id_example"; // String | UUID for the employee that was requested.

apiInstance.retrieveEmployee(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| UUID for the employee that was requested. | 

### Return type

[**RetrieveEmployeeResponse**](RetrieveEmployeeResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

