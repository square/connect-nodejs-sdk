# SquareConnect.LoyaltyApi

All URIs are relative to *https://connect.squareup.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accumulateLoyaltyPoints**](LoyaltyApi.md#accumulateLoyaltyPoints) | **POST** /v2/loyalty/accounts/{account_id}/accumulate | AccumulateLoyaltyPoints
[**adjustLoyaltyPoints**](LoyaltyApi.md#adjustLoyaltyPoints) | **POST** /v2/loyalty/accounts/{account_id}/adjust | AdjustLoyaltyPoints
[**calculateLoyaltyPoints**](LoyaltyApi.md#calculateLoyaltyPoints) | **POST** /v2/loyalty/programs/{program_id}/calculate | CalculateLoyaltyPoints
[**createLoyaltyAccount**](LoyaltyApi.md#createLoyaltyAccount) | **POST** /v2/loyalty/accounts | CreateLoyaltyAccount
[**createLoyaltyReward**](LoyaltyApi.md#createLoyaltyReward) | **POST** /v2/loyalty/rewards | CreateLoyaltyReward
[**deleteLoyaltyReward**](LoyaltyApi.md#deleteLoyaltyReward) | **DELETE** /v2/loyalty/rewards/{reward_id} | DeleteLoyaltyReward
[**listLoyaltyPrograms**](LoyaltyApi.md#listLoyaltyPrograms) | **GET** /v2/loyalty/programs | ListLoyaltyPrograms
[**redeemLoyaltyReward**](LoyaltyApi.md#redeemLoyaltyReward) | **POST** /v2/loyalty/rewards/{reward_id}/redeem | RedeemLoyaltyReward
[**retrieveLoyaltyAccount**](LoyaltyApi.md#retrieveLoyaltyAccount) | **GET** /v2/loyalty/accounts/{account_id} | RetrieveLoyaltyAccount
[**retrieveLoyaltyReward**](LoyaltyApi.md#retrieveLoyaltyReward) | **GET** /v2/loyalty/rewards/{reward_id} | RetrieveLoyaltyReward
[**searchLoyaltyAccounts**](LoyaltyApi.md#searchLoyaltyAccounts) | **POST** /v2/loyalty/accounts/search | SearchLoyaltyAccounts
[**searchLoyaltyEvents**](LoyaltyApi.md#searchLoyaltyEvents) | **POST** /v2/loyalty/events/search | SearchLoyaltyEvents
[**searchLoyaltyRewards**](LoyaltyApi.md#searchLoyaltyRewards) | **POST** /v2/loyalty/rewards/search | SearchLoyaltyRewards


<a name="accumulateLoyaltyPoints"></a>
# **accumulateLoyaltyPoints**
**Note: This endpoint is in beta.**
> AccumulateLoyaltyPointsResponse accumulateLoyaltyPoints(accountId, body)

AccumulateLoyaltyPoints

Adds points to a loyalty account.  - If you are using the Orders API to manage orders, you only provide the &#x60;order_id&#x60;.  The endpoint reads the order to compute points to add to the buyer&#39;s account. - If you are not using the Orders API to manage orders,  you first perform a client-side computation to compute the points.   For spend-based and visit-based programs, you can call  [CalculateLoyaltyPoints](#endpoint-Loyalty-CalculateLoyaltyPoints) to compute the points. For more information,  see [Loyalty Program Overview](/docs/loyalty/overview).  You then provide the points in a request to this endpoint.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.LoyaltyApi();

var accountId = SquareConnect.LoyaltyApi.constructFromObject({}); // String | The `loyalty account` ID to which to add the points.

var body = SquareConnect.LoyaltyApi.constructFromObject({}); // AccumulateLoyaltyPointsRequest | An object containing the fields to POST for the request.  See the corresponding object definition for field details.

apiInstance.accumulateLoyaltyPoints(accountId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The &#x60;loyalty account&#x60; ID to which to add the points. | 
 **body** | [**AccumulateLoyaltyPointsRequest**](AccumulateLoyaltyPointsRequest.md)| An object containing the fields to POST for the request.  See the corresponding object definition for field details. | 

### Return type

[**AccumulateLoyaltyPointsResponse**](AccumulateLoyaltyPointsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="adjustLoyaltyPoints"></a>
# **adjustLoyaltyPoints**
**Note: This endpoint is in beta.**
> AdjustLoyaltyPointsResponse adjustLoyaltyPoints(accountId, body)

AdjustLoyaltyPoints

Adds points to or subtracts points from a buyer&#39;s account.   Use this endpoint only when you need to manually adjust points. Otherwise, in your application flow, you call  [AccumulateLoyaltyPoints](#endpoint-Loyalty-AccumulateLoyaltyPoints)  to add points when a buyer pays for the purchase.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.LoyaltyApi();

var accountId = SquareConnect.LoyaltyApi.constructFromObject({}); // String | The ID of the `loyalty account` in which to adjust the points.

var body = SquareConnect.LoyaltyApi.constructFromObject({}); // AdjustLoyaltyPointsRequest | An object containing the fields to POST for the request.  See the corresponding object definition for field details.

apiInstance.adjustLoyaltyPoints(accountId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The ID of the &#x60;loyalty account&#x60; in which to adjust the points. | 
 **body** | [**AdjustLoyaltyPointsRequest**](AdjustLoyaltyPointsRequest.md)| An object containing the fields to POST for the request.  See the corresponding object definition for field details. | 

### Return type

[**AdjustLoyaltyPointsResponse**](AdjustLoyaltyPointsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="calculateLoyaltyPoints"></a>
# **calculateLoyaltyPoints**
**Note: This endpoint is in beta.**
> CalculateLoyaltyPointsResponse calculateLoyaltyPoints(programId, body)

CalculateLoyaltyPoints

Calculates the points a purchase earns.  - If you are using the Orders API to manage orders, you provide &#x60;order_id&#x60; in the request. The  endpoint calculates the points by reading the order. - If you are not using the Orders API to manage orders, you provide the purchase amount in  the request for the endpoint to calculate the points.  An application might call this endpoint to show the points that a buyer can earn with the  specific purchase.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.LoyaltyApi();

var programId = SquareConnect.LoyaltyApi.constructFromObject({}); // String | The `loyalty program` ID, which defines the rules for accruing points.

var body = SquareConnect.LoyaltyApi.constructFromObject({}); // CalculateLoyaltyPointsRequest | An object containing the fields to POST for the request.  See the corresponding object definition for field details.

apiInstance.calculateLoyaltyPoints(programId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **programId** | **String**| The &#x60;loyalty program&#x60; ID, which defines the rules for accruing points. | 
 **body** | [**CalculateLoyaltyPointsRequest**](CalculateLoyaltyPointsRequest.md)| An object containing the fields to POST for the request.  See the corresponding object definition for field details. | 

### Return type

[**CalculateLoyaltyPointsResponse**](CalculateLoyaltyPointsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createLoyaltyAccount"></a>
# **createLoyaltyAccount**
**Note: This endpoint is in beta.**
> CreateLoyaltyAccountResponse createLoyaltyAccount(body)

CreateLoyaltyAccount

Creates a loyalty account.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.LoyaltyApi();

var body = SquareConnect.LoyaltyApi.constructFromObject({}); // CreateLoyaltyAccountRequest | An object containing the fields to POST for the request.  See the corresponding object definition for field details.

apiInstance.createLoyaltyAccount(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateLoyaltyAccountRequest**](CreateLoyaltyAccountRequest.md)| An object containing the fields to POST for the request.  See the corresponding object definition for field details. | 

### Return type

[**CreateLoyaltyAccountResponse**](CreateLoyaltyAccountResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createLoyaltyReward"></a>
# **createLoyaltyReward**
**Note: This endpoint is in beta.**
> CreateLoyaltyRewardResponse createLoyaltyReward(body)

CreateLoyaltyReward

Creates a loyalty reward. In the process, the endpoint does following:  - Uses the &#x60;reward_tier_id&#x60; in the request to determine the number of points  to lock for this reward.  - If the request includes &#x60;order_id&#x60;, it adds the reward and related discount to the order.   After a reward is created, the points are locked and  not available for the buyer to redeem another reward.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.LoyaltyApi();

var body = SquareConnect.LoyaltyApi.constructFromObject({}); // CreateLoyaltyRewardRequest | An object containing the fields to POST for the request.  See the corresponding object definition for field details.

apiInstance.createLoyaltyReward(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateLoyaltyRewardRequest**](CreateLoyaltyRewardRequest.md)| An object containing the fields to POST for the request.  See the corresponding object definition for field details. | 

### Return type

[**CreateLoyaltyRewardResponse**](CreateLoyaltyRewardResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteLoyaltyReward"></a>
# **deleteLoyaltyReward**
**Note: This endpoint is in beta.**
> DeleteLoyaltyRewardResponse deleteLoyaltyReward(rewardId)

DeleteLoyaltyReward

Deletes a loyalty reward by doing the following:  - Returns the loyalty points back to the loyalty account. - If an order ID was specified when the reward was created  (see [CreateLoyaltyReward](#endpoint-Loyalty-CreateLoyaltyReward)),  it updates the order by removing the reward and related  discounts.  You cannot delete a reward that has reached the terminal state (REDEEMED).

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.LoyaltyApi();

var rewardId = SquareConnect.LoyaltyApi.constructFromObject({}); // String | The ID of the `loyalty reward` to delete.

apiInstance.deleteLoyaltyReward(rewardId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rewardId** | **String**| The ID of the &#x60;loyalty reward&#x60; to delete. | 

### Return type

[**DeleteLoyaltyRewardResponse**](DeleteLoyaltyRewardResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listLoyaltyPrograms"></a>
# **listLoyaltyPrograms**
**Note: This endpoint is in beta.**
> ListLoyaltyProgramsResponse listLoyaltyPrograms()

ListLoyaltyPrograms

Returns a list of loyalty programs in the seller&#39;s account. Currently, a seller can only have one loyalty program.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.LoyaltyApi();
apiInstance.listLoyaltyPrograms().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ListLoyaltyProgramsResponse**](ListLoyaltyProgramsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="redeemLoyaltyReward"></a>
# **redeemLoyaltyReward**
**Note: This endpoint is in beta.**
> RedeemLoyaltyRewardResponse redeemLoyaltyReward(rewardId, body)

RedeemLoyaltyReward

Redeems a loyalty reward.  The endpoint sets the reward to the &#x60;REDEEMED&#x60; terminal state.   If you are using your own order processing system (not using the  Orders API), you call this endpoint after the buyer paid for the  purchase.  After the reward reaches the terminal state, it cannot be deleted.  In other words, points used for the reward cannot be returned  to the account.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.LoyaltyApi();

var rewardId = SquareConnect.LoyaltyApi.constructFromObject({}); // String | The ID of the `loyalty reward` to redeem.

var body = SquareConnect.LoyaltyApi.constructFromObject({}); // RedeemLoyaltyRewardRequest | An object containing the fields to POST for the request.  See the corresponding object definition for field details.

apiInstance.redeemLoyaltyReward(rewardId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rewardId** | **String**| The ID of the &#x60;loyalty reward&#x60; to redeem. | 
 **body** | [**RedeemLoyaltyRewardRequest**](RedeemLoyaltyRewardRequest.md)| An object containing the fields to POST for the request.  See the corresponding object definition for field details. | 

### Return type

[**RedeemLoyaltyRewardResponse**](RedeemLoyaltyRewardResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="retrieveLoyaltyAccount"></a>
# **retrieveLoyaltyAccount**
**Note: This endpoint is in beta.**
> RetrieveLoyaltyAccountResponse retrieveLoyaltyAccount(accountId)

RetrieveLoyaltyAccount

Retrieves a loyalty account.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.LoyaltyApi();

var accountId = SquareConnect.LoyaltyApi.constructFromObject({}); // String | The ID of the `loyalty account` to retrieve.

apiInstance.retrieveLoyaltyAccount(accountId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| The ID of the &#x60;loyalty account&#x60; to retrieve. | 

### Return type

[**RetrieveLoyaltyAccountResponse**](RetrieveLoyaltyAccountResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="retrieveLoyaltyReward"></a>
# **retrieveLoyaltyReward**
**Note: This endpoint is in beta.**
> RetrieveLoyaltyRewardResponse retrieveLoyaltyReward(rewardId)

RetrieveLoyaltyReward

Retrieves a loyalty reward.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.LoyaltyApi();

var rewardId = SquareConnect.LoyaltyApi.constructFromObject({}); // String | The ID of the `loyalty reward` to retrieve.

apiInstance.retrieveLoyaltyReward(rewardId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rewardId** | **String**| The ID of the &#x60;loyalty reward&#x60; to retrieve. | 

### Return type

[**RetrieveLoyaltyRewardResponse**](RetrieveLoyaltyRewardResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchLoyaltyAccounts"></a>
# **searchLoyaltyAccounts**
**Note: This endpoint is in beta.**
> SearchLoyaltyAccountsResponse searchLoyaltyAccounts(body)

SearchLoyaltyAccounts

Searches for loyalty accounts in a loyalty program.    You can search for a loyalty account using the phone number or customer ID associated with the account. To return all loyalty accounts, specify an empty &#x60;query&#x60; object or omit it entirely.    Search results are sorted by &#x60;created_at&#x60; in ascending order.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.LoyaltyApi();

var body = SquareConnect.LoyaltyApi.constructFromObject({}); // SearchLoyaltyAccountsRequest | An object containing the fields to POST for the request.  See the corresponding object definition for field details.

apiInstance.searchLoyaltyAccounts(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SearchLoyaltyAccountsRequest**](SearchLoyaltyAccountsRequest.md)| An object containing the fields to POST for the request.  See the corresponding object definition for field details. | 

### Return type

[**SearchLoyaltyAccountsResponse**](SearchLoyaltyAccountsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchLoyaltyEvents"></a>
# **searchLoyaltyEvents**
**Note: This endpoint is in beta.**
> SearchLoyaltyEventsResponse searchLoyaltyEvents(body)

SearchLoyaltyEvents

Searches for loyalty events.  A Square loyalty program maintains a ledger of events that occur during the lifetime of a  buyer&#39;s loyalty account. Each change in the point balance  (for example, points earned, points redeemed, and points expired) is  recorded in the ledger. Using this endpoint, you can search the ledger for events.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.LoyaltyApi();

var body = SquareConnect.LoyaltyApi.constructFromObject({}); // SearchLoyaltyEventsRequest | An object containing the fields to POST for the request.  See the corresponding object definition for field details.

apiInstance.searchLoyaltyEvents(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SearchLoyaltyEventsRequest**](SearchLoyaltyEventsRequest.md)| An object containing the fields to POST for the request.  See the corresponding object definition for field details. | 

### Return type

[**SearchLoyaltyEventsResponse**](SearchLoyaltyEventsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchLoyaltyRewards"></a>
# **searchLoyaltyRewards**
**Note: This endpoint is in beta.**
> SearchLoyaltyRewardsResponse searchLoyaltyRewards(body)

SearchLoyaltyRewards

Searches for loyalty rewards in a loyalty account.   In the current implementation, the endpoint supports search by the reward &#x60;status&#x60;.  If you know a reward ID, use the  [RetrieveLoyaltyReward](#endpoint-Loyalty-RetrieveLoyaltyReward) endpoint.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.LoyaltyApi();

var body = SquareConnect.LoyaltyApi.constructFromObject({}); // SearchLoyaltyRewardsRequest | An object containing the fields to POST for the request.  See the corresponding object definition for field details.

apiInstance.searchLoyaltyRewards(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SearchLoyaltyRewardsRequest**](SearchLoyaltyRewardsRequest.md)| An object containing the fields to POST for the request.  See the corresponding object definition for field details. | 

### Return type

[**SearchLoyaltyRewardsResponse**](SearchLoyaltyRewardsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

