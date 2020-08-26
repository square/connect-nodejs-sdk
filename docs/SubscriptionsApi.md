# SquareConnect.SubscriptionsApi

All URIs are relative to *https://connect.squareup.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelSubscription**](SubscriptionsApi.md#cancelSubscription) | **POST** /v2/subscriptions/{subscription_id}/cancel | CancelSubscription
[**createSubscription**](SubscriptionsApi.md#createSubscription) | **POST** /v2/subscriptions | CreateSubscription
[**listSubscriptionEvents**](SubscriptionsApi.md#listSubscriptionEvents) | **GET** /v2/subscriptions/{subscription_id}/events | ListSubscriptionEvents
[**retrieveSubscription**](SubscriptionsApi.md#retrieveSubscription) | **GET** /v2/subscriptions/{subscription_id} | RetrieveSubscription
[**searchSubscriptions**](SubscriptionsApi.md#searchSubscriptions) | **POST** /v2/subscriptions/search | SearchSubscriptions
[**updateSubscription**](SubscriptionsApi.md#updateSubscription) | **PUT** /v2/subscriptions/{subscription_id} | UpdateSubscription


<a name="cancelSubscription"></a>
# **cancelSubscription**
**Note: This endpoint is in beta.**
> CancelSubscriptionResponse cancelSubscription(subscriptionId)

CancelSubscription

Sets the &#x60;canceled_date&#x60; field to the end of the active billing period. After this date, the status changes from ACTIVE to CANCELED.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.SubscriptionsApi();

var subscriptionId = "subscriptionId_example"; // String | The ID of the subscription to cancel.

apiInstance.cancelSubscription(subscriptionId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionId** | **String**| The ID of the subscription to cancel. | 

### Return type

[**CancelSubscriptionResponse**](CancelSubscriptionResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createSubscription"></a>
# **createSubscription**
**Note: This endpoint is in beta.**
> CreateSubscriptionResponse createSubscription(body)

CreateSubscription

Creates a subscription for a customer to a subscription plan.  If you provide a card on file in the request, Square charges the card for  the subscription. Otherwise, Square bills an invoice to the customer&#39;s email  address. The subscription starts immediately, unless the request includes  the optional &#x60;start_date&#x60;. Each individual subscription is associated with a particular location.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.SubscriptionsApi();

var body = new SquareConnect.CreateSubscriptionRequest(); // CreateSubscriptionRequest | An object containing the fields to POST for the request.  See the corresponding object definition for field details.

apiInstance.createSubscription(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateSubscriptionRequest**](CreateSubscriptionRequest.md)| An object containing the fields to POST for the request.  See the corresponding object definition for field details. | 

### Return type

[**CreateSubscriptionResponse**](CreateSubscriptionResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listSubscriptionEvents"></a>
# **listSubscriptionEvents**
**Note: This endpoint is in beta.**
> ListSubscriptionEventsResponse listSubscriptionEvents(subscriptionId, opts)

ListSubscriptionEvents

Lists all events for a specific subscription. In the current implementation, only &#x60;START_SUBSCRIPTION&#x60; and &#x60;STOP_SUBSCRIPTION&#x60; (when the subscription was canceled) events are returned.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.SubscriptionsApi();

var subscriptionId = "subscriptionId_example"; // String | The ID of the subscription to retrieve the events for.

var opts = { 
  'cursor': "cursor_example", // String | A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for the original query.  For more information, see [Pagination](https://developer.squareup.com/docs/docs/working-with-apis/pagination).
  'limit': 56 // Number | The upper limit on the number of subscription events to return  in the response.   Default: `200`
};
apiInstance.listSubscriptionEvents(subscriptionId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionId** | **String**| The ID of the subscription to retrieve the events for. | 
 **cursor** | **String**| A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for the original query.  For more information, see [Pagination](https://developer.squareup.com/docs/docs/working-with-apis/pagination). | [optional] 
 **limit** | **Number**| The upper limit on the number of subscription events to return  in the response.   Default: &#x60;200&#x60; | [optional] 

### Return type

[**ListSubscriptionEventsResponse**](ListSubscriptionEventsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="retrieveSubscription"></a>
# **retrieveSubscription**
**Note: This endpoint is in beta.**
> RetrieveSubscriptionResponse retrieveSubscription(subscriptionId)

RetrieveSubscription

Retrieves a subscription.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.SubscriptionsApi();

var subscriptionId = "subscriptionId_example"; // String | The ID of the subscription to retrieve.

apiInstance.retrieveSubscription(subscriptionId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionId** | **String**| The ID of the subscription to retrieve. | 

### Return type

[**RetrieveSubscriptionResponse**](RetrieveSubscriptionResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchSubscriptions"></a>
# **searchSubscriptions**
**Note: This endpoint is in beta.**
> SearchSubscriptionsResponse searchSubscriptions(body)

SearchSubscriptions

Searches for subscriptions.  Results are ordered chronologically by subscription creation date. If the request specifies more than one location ID,  the endpoint orders the result  by location ID, and then by creation date within each location. If no locations are given in the query, all locations are searched.  You can also optionally specify &#x60;customer_ids&#x60; to search by customer.  If left unset, all customers  associated with the specified locations are returned.  If the request specifies customer IDs, the endpoint orders results  first by location, within location by customer ID, and within  customer by subscription creation date.  For more information, see  [Retrieve subscriptions](/docs/subscriptions-api/overview#retrieve-subscriptions).

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.SubscriptionsApi();

var body = new SquareConnect.SearchSubscriptionsRequest(); // SearchSubscriptionsRequest | An object containing the fields to POST for the request.  See the corresponding object definition for field details.

apiInstance.searchSubscriptions(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SearchSubscriptionsRequest**](SearchSubscriptionsRequest.md)| An object containing the fields to POST for the request.  See the corresponding object definition for field details. | 

### Return type

[**SearchSubscriptionsResponse**](SearchSubscriptionsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateSubscription"></a>
# **updateSubscription**
**Note: This endpoint is in beta.**
> UpdateSubscriptionResponse updateSubscription(subscriptionId, body)

UpdateSubscription

Updates a subscription. You can set, modify, and clear the  &#x60;subscription&#x60; field values.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.SubscriptionsApi();

var subscriptionId = "subscriptionId_example"; // String | The ID for the subscription to update.

var body = new SquareConnect.UpdateSubscriptionRequest(); // UpdateSubscriptionRequest | An object containing the fields to POST for the request.  See the corresponding object definition for field details.

apiInstance.updateSubscription(subscriptionId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionId** | **String**| The ID for the subscription to update. | 
 **body** | [**UpdateSubscriptionRequest**](UpdateSubscriptionRequest.md)| An object containing the fields to POST for the request.  See the corresponding object definition for field details. | 

### Return type

[**UpdateSubscriptionResponse**](UpdateSubscriptionResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

