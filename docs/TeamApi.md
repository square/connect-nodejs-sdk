# SquareConnect.TeamApi

All URIs are relative to *https://connect.squareup.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bulkCreateTeamMembers**](TeamApi.md#bulkCreateTeamMembers) | **POST** /v2/team-members/bulk-create | BulkCreateTeamMembers
[**bulkUpdateTeamMembers**](TeamApi.md#bulkUpdateTeamMembers) | **POST** /v2/team-members/bulk-update | BulkUpdateTeamMembers
[**createTeamMember**](TeamApi.md#createTeamMember) | **POST** /v2/team-members | CreateTeamMember
[**retrieveTeamMember**](TeamApi.md#retrieveTeamMember) | **GET** /v2/team-members/{team_member_id} | RetrieveTeamMember
[**retrieveWageSetting**](TeamApi.md#retrieveWageSetting) | **GET** /v2/team-members/{team_member_id}/wage-setting | RetrieveWageSetting
[**searchTeamMembers**](TeamApi.md#searchTeamMembers) | **POST** /v2/team-members/search | SearchTeamMembers
[**updateTeamMember**](TeamApi.md#updateTeamMember) | **PUT** /v2/team-members/{team_member_id} | UpdateTeamMember
[**updateWageSetting**](TeamApi.md#updateWageSetting) | **PUT** /v2/team-members/{team_member_id}/wage-setting | UpdateWageSetting


<a name="bulkCreateTeamMembers"></a>
# **bulkCreateTeamMembers**
> BulkCreateTeamMembersResponse bulkCreateTeamMembers(body)

BulkCreateTeamMembers

Creates multiple &#x60;TeamMember&#x60; objects. The created &#x60;TeamMember&#x60; objects will be returned on successful creates. This process is non-transactional and will process as much of the request as is possible. If one of the creates in the request cannot be successfully processed, the request will NOT be marked as failed, but the body of the response will contain explicit error information for this particular create.  Learn about [Troubleshooting the Teams API](/docs/team/troubleshooting#bulkcreateteammembers).

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.TeamApi();

var body = SquareConnect.TeamApi.constructFromObject({}); // BulkCreateTeamMembersRequest | An object containing the fields to POST for the request.  See the corresponding object definition for field details.

apiInstance.bulkCreateTeamMembers(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**BulkCreateTeamMembersRequest**](BulkCreateTeamMembersRequest.md)| An object containing the fields to POST for the request.  See the corresponding object definition for field details. | 

### Return type

[**BulkCreateTeamMembersResponse**](BulkCreateTeamMembersResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bulkUpdateTeamMembers"></a>
# **bulkUpdateTeamMembers**
> BulkUpdateTeamMembersResponse bulkUpdateTeamMembers(body)

BulkUpdateTeamMembers

Updates multiple &#x60;TeamMember&#x60; objects. The updated &#x60;TeamMember&#x60; objects will be returned on successful updates. This process is non-transactional and will process as much of the request as is possible. If one of the updates in the request cannot be successfully processed, the request will NOT be marked as failed, but the body of the response will contain explicit error information for this particular update. Learn about [Troubleshooting the Teams API](/docs/team/troubleshooting#bulkupdateteammembers).

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.TeamApi();

var body = SquareConnect.TeamApi.constructFromObject({}); // BulkUpdateTeamMembersRequest | An object containing the fields to POST for the request.  See the corresponding object definition for field details.

apiInstance.bulkUpdateTeamMembers(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**BulkUpdateTeamMembersRequest**](BulkUpdateTeamMembersRequest.md)| An object containing the fields to POST for the request.  See the corresponding object definition for field details. | 

### Return type

[**BulkUpdateTeamMembersResponse**](BulkUpdateTeamMembersResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createTeamMember"></a>
# **createTeamMember**
> CreateTeamMemberResponse createTeamMember(body)

CreateTeamMember

Creates a single &#x60;TeamMember&#x60; object. The &#x60;TeamMember&#x60; will be returned on successful creates. You must provide the following values in your request to this endpoint: - &#x60;given_name&#x60; - &#x60;family_name&#x60;  Learn about [Troubleshooting the Teams API](/docs/team/troubleshooting#createteammember).

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.TeamApi();

var body = SquareConnect.TeamApi.constructFromObject({}); // CreateTeamMemberRequest | An object containing the fields to POST for the request.  See the corresponding object definition for field details.

apiInstance.createTeamMember(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateTeamMemberRequest**](CreateTeamMemberRequest.md)| An object containing the fields to POST for the request.  See the corresponding object definition for field details. | 

### Return type

[**CreateTeamMemberResponse**](CreateTeamMemberResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="retrieveTeamMember"></a>
# **retrieveTeamMember**
> RetrieveTeamMemberResponse retrieveTeamMember(teamMemberId)

RetrieveTeamMember

Retrieve a &#x60;TeamMember&#x60; object for the given &#x60;TeamMember.id&#x60;. Learn about [Troubleshooting the Teams API](/docs/team/troubleshooting#retrieveteammember).

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.TeamApi();

var teamMemberId = SquareConnect.TeamApi.constructFromObject({}); // String | The ID of the team member to retrieve.

apiInstance.retrieveTeamMember(teamMemberId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamMemberId** | **String**| The ID of the team member to retrieve. | 

### Return type

[**RetrieveTeamMemberResponse**](RetrieveTeamMemberResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="retrieveWageSetting"></a>
# **retrieveWageSetting**
> RetrieveWageSettingResponse retrieveWageSetting(teamMemberId)

RetrieveWageSetting

Retrieve a &#x60;WageSetting&#x60; object for a team member specified by &#x60;TeamMember.id&#x60;. Learn about [Troubleshooting the Teams API](/docs/team/troubleshooting#retrievewagesetting).

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.TeamApi();

var teamMemberId = SquareConnect.TeamApi.constructFromObject({}); // String | The ID of the team member to retrieve wage setting for

apiInstance.retrieveWageSetting(teamMemberId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamMemberId** | **String**| The ID of the team member to retrieve wage setting for | 

### Return type

[**RetrieveWageSettingResponse**](RetrieveWageSettingResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchTeamMembers"></a>
# **searchTeamMembers**
> SearchTeamMembersResponse searchTeamMembers(body)

SearchTeamMembers

Returns a paginated list of &#x60;TeamMember&#x60; objects for a business. The list to be returned can be filtered by: - location IDs **and** - &#x60;status&#x60;

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.TeamApi();

var body = SquareConnect.TeamApi.constructFromObject({}); // SearchTeamMembersRequest | An object containing the fields to POST for the request.  See the corresponding object definition for field details.

apiInstance.searchTeamMembers(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SearchTeamMembersRequest**](SearchTeamMembersRequest.md)| An object containing the fields to POST for the request.  See the corresponding object definition for field details. | 

### Return type

[**SearchTeamMembersResponse**](SearchTeamMembersResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateTeamMember"></a>
# **updateTeamMember**
> UpdateTeamMemberResponse updateTeamMember(teamMemberId, body)

UpdateTeamMember

Updates a single &#x60;TeamMember&#x60; object. The &#x60;TeamMember&#x60; will be returned on successful updates. Learn about [Troubleshooting the Teams API](/docs/team/troubleshooting#updateteammember).

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.TeamApi();

var teamMemberId = SquareConnect.TeamApi.constructFromObject({}); // String | The ID of the team member to update.

var body = SquareConnect.TeamApi.constructFromObject({}); // UpdateTeamMemberRequest | An object containing the fields to POST for the request.  See the corresponding object definition for field details.

apiInstance.updateTeamMember(teamMemberId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamMemberId** | **String**| The ID of the team member to update. | 
 **body** | [**UpdateTeamMemberRequest**](UpdateTeamMemberRequest.md)| An object containing the fields to POST for the request.  See the corresponding object definition for field details. | 

### Return type

[**UpdateTeamMemberResponse**](UpdateTeamMemberResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateWageSetting"></a>
# **updateWageSetting**
> UpdateWageSettingResponse updateWageSetting(teamMemberId, body)

UpdateWageSetting

Creates or updates a &#x60;WageSetting&#x60; object. The object is created if a &#x60;WageSetting&#x60; with the specified &#x60;team_member_id&#x60; does not exist. Otherwise, it fully replaces the &#x60;WageSetting&#x60; object for the team member. The &#x60;WageSetting&#x60; will be returned upon successful update. Learn about [Troubleshooting the Teams API](/docs/team/troubleshooting#updatewagesetting).

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.TeamApi();

var teamMemberId = SquareConnect.TeamApi.constructFromObject({}); // String | The ID of the team member to update the `WageSetting` object for.

var body = SquareConnect.TeamApi.constructFromObject({}); // UpdateWageSettingRequest | An object containing the fields to POST for the request.  See the corresponding object definition for field details.

apiInstance.updateWageSetting(teamMemberId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamMemberId** | **String**| The ID of the team member to update the &#x60;WageSetting&#x60; object for. | 
 **body** | [**UpdateWageSettingRequest**](UpdateWageSettingRequest.md)| An object containing the fields to POST for the request.  See the corresponding object definition for field details. | 

### Return type

[**UpdateWageSettingResponse**](UpdateWageSettingResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

