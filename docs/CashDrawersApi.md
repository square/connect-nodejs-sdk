# SquareConnect.CashDrawersApi

All URIs are relative to *https://connect.squareup.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listCashDrawerShiftEvents**](CashDrawersApi.md#listCashDrawerShiftEvents) | **GET** /v2/cash-drawers/shifts/{shift_id}/events | ListCashDrawerShiftEvents
[**listCashDrawerShifts**](CashDrawersApi.md#listCashDrawerShifts) | **GET** /v2/cash-drawers/shifts | ListCashDrawerShifts
[**retrieveCashDrawerShift**](CashDrawersApi.md#retrieveCashDrawerShift) | **GET** /v2/cash-drawers/shifts/{shift_id} | RetrieveCashDrawerShift


<a name="listCashDrawerShiftEvents"></a>
# **listCashDrawerShiftEvents**
> ListCashDrawerShiftEventsResponse listCashDrawerShiftEvents(locationId, shiftId, opts)

ListCashDrawerShiftEvents

Provides a paginated list of events for a single cash drawer shift.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.CashDrawersApi();

var locationId = SquareConnect.CashDrawersApi.constructFromObject({}); // String | The ID of the location to list cash drawer shifts for.

var shiftId = SquareConnect.CashDrawersApi.constructFromObject({}); // String | The shift ID.

var opts = { 
  'limit': SquareConnect.CashDrawersApi.constructFromObject({});, // Number | Number of resources to be returned in a page of results (200 by default, 1000 max).
  'cursor': SquareConnect.CashDrawersApi.constructFromObject({}); // String | Opaque cursor for fetching the next page of results.
};
apiInstance.listCashDrawerShiftEvents(locationId, shiftId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | **String**| The ID of the location to list cash drawer shifts for. | 
 **shiftId** | **String**| The shift ID. | 
 **limit** | **Number**| Number of resources to be returned in a page of results (200 by default, 1000 max). | [optional] 
 **cursor** | **String**| Opaque cursor for fetching the next page of results. | [optional] 

### Return type

[**ListCashDrawerShiftEventsResponse**](ListCashDrawerShiftEventsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listCashDrawerShifts"></a>
# **listCashDrawerShifts**
> ListCashDrawerShiftsResponse listCashDrawerShifts(locationId, opts)

ListCashDrawerShifts

Provides the details for all of the cash drawer shifts for a location in a date range.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.CashDrawersApi();

var locationId = SquareConnect.CashDrawersApi.constructFromObject({}); // String | The ID of the location to query for a list of cash drawer shifts.

var opts = { 
  'sortOrder': SquareConnect.CashDrawersApi.constructFromObject({});, // String | The order in which cash drawer shifts are listed in the response, based on their opened_at field. Default value: ASC
  'beginTime': SquareConnect.CashDrawersApi.constructFromObject({});, // String | The inclusive start time of the query on opened_at, in ISO 8601 format.
  'endTime': SquareConnect.CashDrawersApi.constructFromObject({});, // String | The exclusive end date of the query on opened_at, in ISO 8601 format.
  'limit': SquareConnect.CashDrawersApi.constructFromObject({});, // Number | Number of cash drawer shift events in a page of results (200 by default, 1000 max).
  'cursor': SquareConnect.CashDrawersApi.constructFromObject({}); // String | Opaque cursor for fetching the next page of results.
};
apiInstance.listCashDrawerShifts(locationId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | **String**| The ID of the location to query for a list of cash drawer shifts. | 
 **sortOrder** | **String**| The order in which cash drawer shifts are listed in the response, based on their opened_at field. Default value: ASC | [optional] 
 **beginTime** | **String**| The inclusive start time of the query on opened_at, in ISO 8601 format. | [optional] 
 **endTime** | **String**| The exclusive end date of the query on opened_at, in ISO 8601 format. | [optional] 
 **limit** | **Number**| Number of cash drawer shift events in a page of results (200 by default, 1000 max). | [optional] 
 **cursor** | **String**| Opaque cursor for fetching the next page of results. | [optional] 

### Return type

[**ListCashDrawerShiftsResponse**](ListCashDrawerShiftsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="retrieveCashDrawerShift"></a>
# **retrieveCashDrawerShift**
> RetrieveCashDrawerShiftResponse retrieveCashDrawerShift(locationId, shiftId)

RetrieveCashDrawerShift

Provides the summary details for a single cash drawer shift. See RetrieveCashDrawerShiftEvents for a list of cash drawer shift events.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.CashDrawersApi();

var locationId = SquareConnect.CashDrawersApi.constructFromObject({}); // String | The ID of the location to retrieve cash drawer shifts from.

var shiftId = SquareConnect.CashDrawersApi.constructFromObject({}); // String | The shift ID.

apiInstance.retrieveCashDrawerShift(locationId, shiftId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | **String**| The ID of the location to retrieve cash drawer shifts from. | 
 **shiftId** | **String**| The shift ID. | 

### Return type

[**RetrieveCashDrawerShiftResponse**](RetrieveCashDrawerShiftResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

