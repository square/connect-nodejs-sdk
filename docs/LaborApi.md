# SquareConnect.LaborApi

All URIs are relative to *https://connect.squareup.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createBreakType**](LaborApi.md#createBreakType) | **POST** /v2/labor/break-types | CreateBreakType
[**createShift**](LaborApi.md#createShift) | **POST** /v2/labor/shifts | CreateShift
[**deleteBreakType**](LaborApi.md#deleteBreakType) | **DELETE** /v2/labor/break-types/{id} | DeleteBreakType
[**deleteShift**](LaborApi.md#deleteShift) | **DELETE** /v2/labor/shifts/{id} | DeleteShift
[**getBreakType**](LaborApi.md#getBreakType) | **GET** /v2/labor/break-types/{id} | GetBreakType
[**getEmployeeWage**](LaborApi.md#getEmployeeWage) | **GET** /v2/labor/employee-wages/{id} | GetEmployeeWage
[**getShift**](LaborApi.md#getShift) | **GET** /v2/labor/shifts/{id} | GetShift
[**getTeamMemberWage**](LaborApi.md#getTeamMemberWage) | **GET** /v2/labor/team-member-wages/{id} | GetTeamMemberWage
[**listBreakTypes**](LaborApi.md#listBreakTypes) | **GET** /v2/labor/break-types | ListBreakTypes
[**listEmployeeWages**](LaborApi.md#listEmployeeWages) | **GET** /v2/labor/employee-wages | ListEmployeeWages
[**listTeamMemberWages**](LaborApi.md#listTeamMemberWages) | **GET** /v2/labor/team-member-wages | ListTeamMemberWages
[**listWorkweekConfigs**](LaborApi.md#listWorkweekConfigs) | **GET** /v2/labor/workweek-configs | ListWorkweekConfigs
[**searchShifts**](LaborApi.md#searchShifts) | **POST** /v2/labor/shifts/search | SearchShifts
[**updateBreakType**](LaborApi.md#updateBreakType) | **PUT** /v2/labor/break-types/{id} | UpdateBreakType
[**updateShift**](LaborApi.md#updateShift) | **PUT** /v2/labor/shifts/{id} | UpdateShift
[**updateWorkweekConfig**](LaborApi.md#updateWorkweekConfig) | **PUT** /v2/labor/workweek-configs/{id} | UpdateWorkweekConfig


<a name="createBreakType"></a>
# **createBreakType**
> CreateBreakTypeResponse createBreakType(body)

CreateBreakType

Creates a new &#x60;BreakType&#x60;.  A &#x60;BreakType&#x60; is a template for creating &#x60;Break&#x60; objects. You must provide the following values in your request to this endpoint:  - &#x60;location_id&#x60; - &#x60;break_name&#x60; - &#x60;expected_duration&#x60; - &#x60;is_paid&#x60;  You can only have 3 &#x60;BreakType&#x60; instances per location. If you attempt to add a 4th &#x60;BreakType&#x60; for a location, an &#x60;INVALID_REQUEST_ERROR&#x60; \&quot;Exceeded limit of 3 breaks per location.\&quot; is returned.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.LaborApi();

var body = SquareConnect.LaborApi.constructFromObject({}); // CreateBreakTypeRequest | An object containing the fields to POST for the request.  See the corresponding object definition for field details.

apiInstance.createBreakType(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateBreakTypeRequest**](CreateBreakTypeRequest.md)| An object containing the fields to POST for the request.  See the corresponding object definition for field details. | 

### Return type

[**CreateBreakTypeResponse**](CreateBreakTypeResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createShift"></a>
# **createShift**
> CreateShiftResponse createShift(body)

CreateShift

Creates a new &#x60;Shift&#x60;.  A &#x60;Shift&#x60; represents a complete work day for a single employee. You must provide the following values in your request to this endpoint:  - &#x60;location_id&#x60; - &#x60;employee_id&#x60; - &#x60;start_at&#x60;  An attempt to create a new &#x60;Shift&#x60; can result in a &#x60;BAD_REQUEST&#x60; error when: - The &#x60;status&#x60; of the new &#x60;Shift&#x60; is &#x60;OPEN&#x60; and the employee has another shift with an &#x60;OPEN&#x60; status. - The &#x60;start_at&#x60; date is in the future - the &#x60;start_at&#x60; or &#x60;end_at&#x60; overlaps another shift for the same employee - If &#x60;Break&#x60;s are set in the request, a break &#x60;start_at&#x60; must not be before the &#x60;Shift.start_at&#x60;. A break &#x60;end_at&#x60; must not be after the &#x60;Shift.end_at&#x60;

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.LaborApi();

var body = SquareConnect.LaborApi.constructFromObject({}); // CreateShiftRequest | An object containing the fields to POST for the request.  See the corresponding object definition for field details.

apiInstance.createShift(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateShiftRequest**](CreateShiftRequest.md)| An object containing the fields to POST for the request.  See the corresponding object definition for field details. | 

### Return type

[**CreateShiftResponse**](CreateShiftResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteBreakType"></a>
# **deleteBreakType**
> DeleteBreakTypeResponse deleteBreakType(id)

DeleteBreakType

Deletes an existing &#x60;BreakType&#x60;.  A &#x60;BreakType&#x60; can be deleted even if it is referenced from a &#x60;Shift&#x60;.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.LaborApi();

var id = SquareConnect.LaborApi.constructFromObject({}); // String | UUID for the `BreakType` being deleted.

apiInstance.deleteBreakType(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| UUID for the &#x60;BreakType&#x60; being deleted. | 

### Return type

[**DeleteBreakTypeResponse**](DeleteBreakTypeResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteShift"></a>
# **deleteShift**
> DeleteShiftResponse deleteShift(id)

DeleteShift

Deletes a &#x60;Shift&#x60;.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.LaborApi();

var id = SquareConnect.LaborApi.constructFromObject({}); // String | UUID for the `Shift` being deleted.

apiInstance.deleteShift(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| UUID for the &#x60;Shift&#x60; being deleted. | 

### Return type

[**DeleteShiftResponse**](DeleteShiftResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getBreakType"></a>
# **getBreakType**
> GetBreakTypeResponse getBreakType(id)

GetBreakType

Returns a single &#x60;BreakType&#x60; specified by id.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.LaborApi();

var id = SquareConnect.LaborApi.constructFromObject({}); // String | UUID for the `BreakType` being retrieved.

apiInstance.getBreakType(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| UUID for the &#x60;BreakType&#x60; being retrieved. | 

### Return type

[**GetBreakTypeResponse**](GetBreakTypeResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getEmployeeWage"></a>
# **getEmployeeWage**
**Note: This endpoint is deprecated.**
> GetEmployeeWageResponse getEmployeeWage(id)

GetEmployeeWage

Returns a single &#x60;EmployeeWage&#x60; specified by id.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.LaborApi();

var id = SquareConnect.LaborApi.constructFromObject({}); // String | UUID for the `EmployeeWage` being retrieved.

apiInstance.getEmployeeWage(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| UUID for the &#x60;EmployeeWage&#x60; being retrieved. | 

### Return type

[**GetEmployeeWageResponse**](GetEmployeeWageResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getShift"></a>
# **getShift**
> GetShiftResponse getShift(id)

GetShift

Returns a single &#x60;Shift&#x60; specified by id.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.LaborApi();

var id = SquareConnect.LaborApi.constructFromObject({}); // String | UUID for the `Shift` being retrieved.

apiInstance.getShift(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| UUID for the &#x60;Shift&#x60; being retrieved. | 

### Return type

[**GetShiftResponse**](GetShiftResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTeamMemberWage"></a>
# **getTeamMemberWage**
> GetTeamMemberWageResponse getTeamMemberWage(id)

GetTeamMemberWage

Returns a single &#x60;TeamMemberWage&#x60; specified by id.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.LaborApi();

var id = SquareConnect.LaborApi.constructFromObject({}); // String | UUID for the `TeamMemberWage` being retrieved.

apiInstance.getTeamMemberWage(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| UUID for the &#x60;TeamMemberWage&#x60; being retrieved. | 

### Return type

[**GetTeamMemberWageResponse**](GetTeamMemberWageResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listBreakTypes"></a>
# **listBreakTypes**
> ListBreakTypesResponse listBreakTypes(opts)

ListBreakTypes

Returns a paginated list of &#x60;BreakType&#x60; instances for a business.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.LaborApi();

var opts = { 
  'locationId': SquareConnect.LaborApi.constructFromObject({});, // String | Filter Break Types returned to only those that are associated with the specified location.
  'limit': SquareConnect.LaborApi.constructFromObject({});, // Number | Maximum number of Break Types to return per page. Can range between 1 and 200. The default is the maximum at 200.
  'cursor': SquareConnect.LaborApi.constructFromObject({}); // String | Pointer to the next page of Break Type results to fetch.
};
apiInstance.listBreakTypes(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | **String**| Filter Break Types returned to only those that are associated with the specified location. | [optional] 
 **limit** | **Number**| Maximum number of Break Types to return per page. Can range between 1 and 200. The default is the maximum at 200. | [optional] 
 **cursor** | **String**| Pointer to the next page of Break Type results to fetch. | [optional] 

### Return type

[**ListBreakTypesResponse**](ListBreakTypesResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listEmployeeWages"></a>
# **listEmployeeWages**
**Note: This endpoint is deprecated.**
> ListEmployeeWagesResponse listEmployeeWages(opts)

ListEmployeeWages

Returns a paginated list of &#x60;EmployeeWage&#x60; instances for a business.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.LaborApi();

var opts = { 
  'employeeId': SquareConnect.LaborApi.constructFromObject({});, // String | Filter wages returned to only those that are associated with the specified employee.
  'limit': SquareConnect.LaborApi.constructFromObject({});, // Number | Maximum number of Employee Wages to return per page. Can range between 1 and 200. The default is the maximum at 200.
  'cursor': SquareConnect.LaborApi.constructFromObject({}); // String | Pointer to the next page of Employee Wage results to fetch.
};
apiInstance.listEmployeeWages(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employeeId** | **String**| Filter wages returned to only those that are associated with the specified employee. | [optional] 
 **limit** | **Number**| Maximum number of Employee Wages to return per page. Can range between 1 and 200. The default is the maximum at 200. | [optional] 
 **cursor** | **String**| Pointer to the next page of Employee Wage results to fetch. | [optional] 

### Return type

[**ListEmployeeWagesResponse**](ListEmployeeWagesResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listTeamMemberWages"></a>
# **listTeamMemberWages**
> ListTeamMemberWagesResponse listTeamMemberWages(opts)

ListTeamMemberWages

Returns a paginated list of &#x60;TeamMemberWage&#x60; instances for a business.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.LaborApi();

var opts = { 
  'teamMemberId': SquareConnect.LaborApi.constructFromObject({});, // String | Filter wages returned to only those that are associated with the specified team member.
  'limit': SquareConnect.LaborApi.constructFromObject({});, // Number | Maximum number of Team Member Wages to return per page. Can range between 1 and 200. The default is the maximum at 200.
  'cursor': SquareConnect.LaborApi.constructFromObject({}); // String | Pointer to the next page of Employee Wage results to fetch.
};
apiInstance.listTeamMemberWages(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamMemberId** | **String**| Filter wages returned to only those that are associated with the specified team member. | [optional] 
 **limit** | **Number**| Maximum number of Team Member Wages to return per page. Can range between 1 and 200. The default is the maximum at 200. | [optional] 
 **cursor** | **String**| Pointer to the next page of Employee Wage results to fetch. | [optional] 

### Return type

[**ListTeamMemberWagesResponse**](ListTeamMemberWagesResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listWorkweekConfigs"></a>
# **listWorkweekConfigs**
> ListWorkweekConfigsResponse listWorkweekConfigs(opts)

ListWorkweekConfigs

Returns a list of &#x60;WorkweekConfig&#x60; instances for a business.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.LaborApi();

var opts = { 
  'limit': SquareConnect.LaborApi.constructFromObject({});, // Number | Maximum number of Workweek Configs to return per page.
  'cursor': SquareConnect.LaborApi.constructFromObject({}); // String | Pointer to the next page of Workweek Config results to fetch.
};
apiInstance.listWorkweekConfigs(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| Maximum number of Workweek Configs to return per page. | [optional] 
 **cursor** | **String**| Pointer to the next page of Workweek Config results to fetch. | [optional] 

### Return type

[**ListWorkweekConfigsResponse**](ListWorkweekConfigsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchShifts"></a>
# **searchShifts**
> SearchShiftsResponse searchShifts(body)

SearchShifts

Returns a paginated list of &#x60;Shift&#x60; records for a business. The list to be returned can be filtered by: - Location IDs **and** - employee IDs **and** - shift status (&#x60;OPEN&#x60;, &#x60;CLOSED&#x60;) **and** - shift start **and** - shift end **and** - work day details  The list can be sorted by: - &#x60;start_at&#x60; - &#x60;end_at&#x60; - &#x60;created_at&#x60; - &#x60;updated_at&#x60;

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.LaborApi();

var body = SquareConnect.LaborApi.constructFromObject({}); // SearchShiftsRequest | An object containing the fields to POST for the request.  See the corresponding object definition for field details.

apiInstance.searchShifts(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SearchShiftsRequest**](SearchShiftsRequest.md)| An object containing the fields to POST for the request.  See the corresponding object definition for field details. | 

### Return type

[**SearchShiftsResponse**](SearchShiftsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateBreakType"></a>
# **updateBreakType**
> UpdateBreakTypeResponse updateBreakType(id, body)

UpdateBreakType

Updates an existing &#x60;BreakType&#x60;.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.LaborApi();

var id = SquareConnect.LaborApi.constructFromObject({}); // String | UUID for the `BreakType` being updated.

var body = SquareConnect.LaborApi.constructFromObject({}); // UpdateBreakTypeRequest | An object containing the fields to POST for the request.  See the corresponding object definition for field details.

apiInstance.updateBreakType(id, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| UUID for the &#x60;BreakType&#x60; being updated. | 
 **body** | [**UpdateBreakTypeRequest**](UpdateBreakTypeRequest.md)| An object containing the fields to POST for the request.  See the corresponding object definition for field details. | 

### Return type

[**UpdateBreakTypeResponse**](UpdateBreakTypeResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateShift"></a>
# **updateShift**
> UpdateShiftResponse updateShift(id, body)

UpdateShift

Updates an existing &#x60;Shift&#x60;.  When adding a &#x60;Break&#x60; to a &#x60;Shift&#x60;, any earlier &#x60;Breaks&#x60; in the &#x60;Shift&#x60; have the &#x60;end_at&#x60; property set to a valid RFC-3339 datetime string.  When closing a &#x60;Shift&#x60;, all &#x60;Break&#x60; instances in the shift must be complete with &#x60;end_at&#x60; set on each &#x60;Break&#x60;.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.LaborApi();

var id = SquareConnect.LaborApi.constructFromObject({}); // String | ID of the object being updated.

var body = SquareConnect.LaborApi.constructFromObject({}); // UpdateShiftRequest | An object containing the fields to POST for the request.  See the corresponding object definition for field details.

apiInstance.updateShift(id, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the object being updated. | 
 **body** | [**UpdateShiftRequest**](UpdateShiftRequest.md)| An object containing the fields to POST for the request.  See the corresponding object definition for field details. | 

### Return type

[**UpdateShiftResponse**](UpdateShiftResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateWorkweekConfig"></a>
# **updateWorkweekConfig**
> UpdateWorkweekConfigResponse updateWorkweekConfig(id, body)

UpdateWorkweekConfig

Updates a &#x60;WorkweekConfig&#x60;.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.LaborApi();

var id = SquareConnect.LaborApi.constructFromObject({}); // String | UUID for the `WorkweekConfig` object being updated.

var body = SquareConnect.LaborApi.constructFromObject({}); // UpdateWorkweekConfigRequest | An object containing the fields to POST for the request.  See the corresponding object definition for field details.

apiInstance.updateWorkweekConfig(id, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| UUID for the &#x60;WorkweekConfig&#x60; object being updated. | 
 **body** | [**UpdateWorkweekConfigRequest**](UpdateWorkweekConfigRequest.md)| An object containing the fields to POST for the request.  See the corresponding object definition for field details. | 

### Return type

[**UpdateWorkweekConfigResponse**](UpdateWorkweekConfigResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

