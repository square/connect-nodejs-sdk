# SquareConnect.DisputesApi

All URIs are relative to *https://connect.squareup.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**acceptDispute**](DisputesApi.md#acceptDispute) | **POST** /v2/disputes/{dispute_id}/accept | AcceptDispute
[**createDisputeEvidenceText**](DisputesApi.md#createDisputeEvidenceText) | **POST** /v2/disputes/{dispute_id}/evidence_text | CreateDisputeEvidenceText
[**listDisputeEvidence**](DisputesApi.md#listDisputeEvidence) | **GET** /v2/disputes/{dispute_id}/evidence | ListDisputeEvidence
[**listDisputes**](DisputesApi.md#listDisputes) | **GET** /v2/disputes | ListDisputes
[**removeDisputeEvidence**](DisputesApi.md#removeDisputeEvidence) | **DELETE** /v2/disputes/{dispute_id}/evidence/{evidence_id} | RemoveDisputeEvidence
[**retrieveDispute**](DisputesApi.md#retrieveDispute) | **GET** /v2/disputes/{dispute_id} | RetrieveDispute
[**retrieveDisputeEvidence**](DisputesApi.md#retrieveDisputeEvidence) | **GET** /v2/disputes/{dispute_id}/evidence/{evidence_id} | RetrieveDisputeEvidence
[**submitEvidence**](DisputesApi.md#submitEvidence) | **POST** /v2/disputes/{dispute_id}/submit-evidence | SubmitEvidence


<a name="acceptDispute"></a>
# **acceptDispute**
**Note: This endpoint is in beta.**
> AcceptDisputeResponse acceptDispute(disputeId)

AcceptDispute

Accepts loss on a dispute. Square returns the disputed amount to the cardholder and updates the dispute state to ACCEPTED.  Square debits the disputed amount from the seller’s Square account. If the Square account balance does not have sufficient funds, Square debits the associated bank account.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.DisputesApi();

var disputeId = SquareConnect.DisputesApi.constructFromObject({}); // String | ID of the dispute you want to accept.

apiInstance.acceptDispute(disputeId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **disputeId** | **String**| ID of the dispute you want to accept. | 

### Return type

[**AcceptDisputeResponse**](AcceptDisputeResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createDisputeEvidenceText"></a>
# **createDisputeEvidenceText**
**Note: This endpoint is in beta.**
> CreateDisputeEvidenceTextResponse createDisputeEvidenceText(disputeId, body)

CreateDisputeEvidenceText

Uploads text to use as evidence for a dispute challenge.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.DisputesApi();

var disputeId = SquareConnect.DisputesApi.constructFromObject({}); // String | The ID of the dispute you want to upload evidence for.

var body = SquareConnect.DisputesApi.constructFromObject({}); // CreateDisputeEvidenceTextRequest | An object containing the fields to POST for the request.  See the corresponding object definition for field details.

apiInstance.createDisputeEvidenceText(disputeId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **disputeId** | **String**| The ID of the dispute you want to upload evidence for. | 
 **body** | [**CreateDisputeEvidenceTextRequest**](CreateDisputeEvidenceTextRequest.md)| An object containing the fields to POST for the request.  See the corresponding object definition for field details. | 

### Return type

[**CreateDisputeEvidenceTextResponse**](CreateDisputeEvidenceTextResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listDisputeEvidence"></a>
# **listDisputeEvidence**
**Note: This endpoint is in beta.**
> ListDisputeEvidenceResponse listDisputeEvidence(disputeId)

ListDisputeEvidence

Returns a list of evidence associated with a dispute.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.DisputesApi();

var disputeId = SquareConnect.DisputesApi.constructFromObject({}); // String | The ID of the dispute.

apiInstance.listDisputeEvidence(disputeId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **disputeId** | **String**| The ID of the dispute. | 

### Return type

[**ListDisputeEvidenceResponse**](ListDisputeEvidenceResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listDisputes"></a>
# **listDisputes**
**Note: This endpoint is in beta.**
> ListDisputesResponse listDisputes(opts)

ListDisputes

Returns a list of disputes associated with a particular account.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.DisputesApi();

var opts = { 
  'cursor': SquareConnect.DisputesApi.constructFromObject({});, // String | A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for the original query. For more information, see [Paginating](https://developer.squareup.com/docs/basics/api101/pagination).
  'states': SquareConnect.DisputesApi.constructFromObject({});, // String | The dispute states to filter the result. If not specified, the endpoint returns all open disputes (dispute status is not `INQUIRY_CLOSED`, `WON`, or `LOST`).
  'locationId': SquareConnect.DisputesApi.constructFromObject({}); // String | The ID of the location for which to return  a list of disputes. If not specified, the endpoint returns all open disputes (dispute status is not `INQUIRY_CLOSED`, `WON`, or  `LOST`) associated with all locations.
};
apiInstance.listDisputes(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cursor** | **String**| A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for the original query. For more information, see [Paginating](https://developer.squareup.com/docs/basics/api101/pagination). | [optional] 
 **states** | **String**| The dispute states to filter the result. If not specified, the endpoint returns all open disputes (dispute status is not &#x60;INQUIRY_CLOSED&#x60;, &#x60;WON&#x60;, or &#x60;LOST&#x60;). | [optional] 
 **locationId** | **String**| The ID of the location for which to return  a list of disputes. If not specified, the endpoint returns all open disputes (dispute status is not &#x60;INQUIRY_CLOSED&#x60;, &#x60;WON&#x60;, or  &#x60;LOST&#x60;) associated with all locations. | [optional] 

### Return type

[**ListDisputesResponse**](ListDisputesResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeDisputeEvidence"></a>
# **removeDisputeEvidence**
**Note: This endpoint is in beta.**
> RemoveDisputeEvidenceResponse removeDisputeEvidence(disputeId, evidenceId)

RemoveDisputeEvidence

Removes specified evidence from a dispute.  Square does not send the bank any evidence that is removed. Also, you cannot remove evidence after submitting it to the bank using [SubmitEvidence](/reference/square/disputes-api/submit-evidence).

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.DisputesApi();

var disputeId = SquareConnect.DisputesApi.constructFromObject({}); // String | The ID of the dispute you want to remove evidence from.

var evidenceId = SquareConnect.DisputesApi.constructFromObject({}); // String | The ID of the evidence you want to remove.

apiInstance.removeDisputeEvidence(disputeId, evidenceId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **disputeId** | **String**| The ID of the dispute you want to remove evidence from. | 
 **evidenceId** | **String**| The ID of the evidence you want to remove. | 

### Return type

[**RemoveDisputeEvidenceResponse**](RemoveDisputeEvidenceResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="retrieveDispute"></a>
# **retrieveDispute**
**Note: This endpoint is in beta.**
> RetrieveDisputeResponse retrieveDispute(disputeId)

RetrieveDispute

Returns details of a specific dispute.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.DisputesApi();

var disputeId = SquareConnect.DisputesApi.constructFromObject({}); // String | The ID of the dispute you want more details about.

apiInstance.retrieveDispute(disputeId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **disputeId** | **String**| The ID of the dispute you want more details about. | 

### Return type

[**RetrieveDisputeResponse**](RetrieveDisputeResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="retrieveDisputeEvidence"></a>
# **retrieveDisputeEvidence**
**Note: This endpoint is in beta.**
> RetrieveDisputeEvidenceResponse retrieveDisputeEvidence(disputeId, evidenceId)

RetrieveDisputeEvidence

Returns the specific evidence metadata associated with a specific dispute.  You must maintain a copy of the evidence you upload if you want to reference it later. You cannot download the evidence after you upload it.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.DisputesApi();

var disputeId = SquareConnect.DisputesApi.constructFromObject({}); // String | The ID of the dispute that you want to retrieve evidence from.

var evidenceId = SquareConnect.DisputesApi.constructFromObject({}); // String | The ID of the evidence to retrieve.

apiInstance.retrieveDisputeEvidence(disputeId, evidenceId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **disputeId** | **String**| The ID of the dispute that you want to retrieve evidence from. | 
 **evidenceId** | **String**| The ID of the evidence to retrieve. | 

### Return type

[**RetrieveDisputeEvidenceResponse**](RetrieveDisputeEvidenceResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="submitEvidence"></a>
# **submitEvidence**
**Note: This endpoint is in beta.**
> SubmitEvidenceResponse submitEvidence(disputeId)

SubmitEvidence

Submits evidence to the cardholder&#39;s bank.  Before submitting evidence, Square compiles all available evidence. This includes evidence uploaded using the [CreateDisputeEvidenceFile](/reference/square/disputes-api/create-dispute-evidence-file) and [CreateDisputeEvidenceText](/reference/square/disputes-api/create-dispute-evidence-text) endpoints, and evidence automatically provided by Square, when available.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.DisputesApi();

var disputeId = SquareConnect.DisputesApi.constructFromObject({}); // String | The ID of the dispute you want to submit evidence for.

apiInstance.submitEvidence(disputeId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **disputeId** | **String**| The ID of the dispute you want to submit evidence for. | 

### Return type

[**SubmitEvidenceResponse**](SubmitEvidenceResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

