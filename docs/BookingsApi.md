# SquareConnect.BookingsApi

All URIs are relative to *https://connect.squareup.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelBooking**](BookingsApi.md#cancelBooking) | **POST** /v2/bookings/{booking_id}/cancel | CancelBooking
[**createBooking**](BookingsApi.md#createBooking) | **POST** /v2/bookings | CreateBooking
[**listTeamMemberBookingProfiles**](BookingsApi.md#listTeamMemberBookingProfiles) | **GET** /v2/bookings/team-member-booking-profiles | ListTeamMemberBookingProfiles
[**retrieveBooking**](BookingsApi.md#retrieveBooking) | **GET** /v2/bookings/{booking_id} | RetrieveBooking
[**retrieveBusinessBookingProfile**](BookingsApi.md#retrieveBusinessBookingProfile) | **GET** /v2/bookings/business-booking-profile | RetrieveBusinessBookingProfile
[**retrieveTeamMemberBookingProfile**](BookingsApi.md#retrieveTeamMemberBookingProfile) | **GET** /v2/bookings/team-member-booking-profiles/{team_member_id} | RetrieveTeamMemberBookingProfile
[**searchAvailability**](BookingsApi.md#searchAvailability) | **POST** /v2/bookings/availability/search | SearchAvailability
[**updateBooking**](BookingsApi.md#updateBooking) | **PUT** /v2/bookings/{booking_id} | UpdateBooking


<a name="cancelBooking"></a>
# **cancelBooking**
**Note: This endpoint is in beta.**
> CancelBookingResponse cancelBooking(bookingId, body)

CancelBooking

Cancels an existing booking.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.BookingsApi();

var bookingId = SquareConnect.BookingsApi.constructFromObject({}); // String | The ID of the `Booking` object representing the to-be-cancelled booking.

var body = SquareConnect.BookingsApi.constructFromObject({}); // CancelBookingRequest | An object containing the fields to POST for the request.  See the corresponding object definition for field details.

apiInstance.cancelBooking(bookingId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bookingId** | **String**| The ID of the &#x60;Booking&#x60; object representing the to-be-cancelled booking. | 
 **body** | [**CancelBookingRequest**](CancelBookingRequest.md)| An object containing the fields to POST for the request.  See the corresponding object definition for field details. | 

### Return type

[**CancelBookingResponse**](CancelBookingResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createBooking"></a>
# **createBooking**
**Note: This endpoint is in beta.**
> CreateBookingResponse createBooking(body)

CreateBooking

Creates a booking.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.BookingsApi();

var body = SquareConnect.BookingsApi.constructFromObject({}); // CreateBookingRequest | An object containing the fields to POST for the request.  See the corresponding object definition for field details.

apiInstance.createBooking(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateBookingRequest**](CreateBookingRequest.md)| An object containing the fields to POST for the request.  See the corresponding object definition for field details. | 

### Return type

[**CreateBookingResponse**](CreateBookingResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listTeamMemberBookingProfiles"></a>
# **listTeamMemberBookingProfiles**
**Note: This endpoint is in beta.**
> ListTeamMemberBookingProfilesResponse listTeamMemberBookingProfiles(opts)

ListTeamMemberBookingProfiles

Lists booking profiles for team members.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.BookingsApi();

var opts = { 
  'bookableOnly': SquareConnect.BookingsApi.constructFromObject({});, // Boolean | Indicates whether to include only bookable team members in the returned result (`true`) or not (`false`).
  'limit': SquareConnect.BookingsApi.constructFromObject({});, // Number | The maximum number of results to return.
  'cursor': SquareConnect.BookingsApi.constructFromObject({});, // String | The cursor for paginating through the results.
  'locationId': SquareConnect.BookingsApi.constructFromObject({}); // String | Indicates whether to include only team members enabled at the given location in the returned result.
};
apiInstance.listTeamMemberBookingProfiles(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bookableOnly** | **Boolean**| Indicates whether to include only bookable team members in the returned result (&#x60;true&#x60;) or not (&#x60;false&#x60;). | [optional] 
 **limit** | **Number**| The maximum number of results to return. | [optional] 
 **cursor** | **String**| The cursor for paginating through the results. | [optional] 
 **locationId** | **String**| Indicates whether to include only team members enabled at the given location in the returned result. | [optional] 

### Return type

[**ListTeamMemberBookingProfilesResponse**](ListTeamMemberBookingProfilesResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="retrieveBooking"></a>
# **retrieveBooking**
**Note: This endpoint is in beta.**
> RetrieveBookingResponse retrieveBooking(bookingId)

RetrieveBooking

Retrieves a booking.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.BookingsApi();

var bookingId = SquareConnect.BookingsApi.constructFromObject({}); // String | The ID of the `Booking` object representing the to-be-retrieved booking.

apiInstance.retrieveBooking(bookingId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bookingId** | **String**| The ID of the &#x60;Booking&#x60; object representing the to-be-retrieved booking. | 

### Return type

[**RetrieveBookingResponse**](RetrieveBookingResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="retrieveBusinessBookingProfile"></a>
# **retrieveBusinessBookingProfile**
**Note: This endpoint is in beta.**
> RetrieveBusinessBookingProfileResponse retrieveBusinessBookingProfile()

RetrieveBusinessBookingProfile

Retrieves a seller&#39;s booking profile.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.BookingsApi();
apiInstance.retrieveBusinessBookingProfile().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**RetrieveBusinessBookingProfileResponse**](RetrieveBusinessBookingProfileResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="retrieveTeamMemberBookingProfile"></a>
# **retrieveTeamMemberBookingProfile**
**Note: This endpoint is in beta.**
> RetrieveTeamMemberBookingProfileResponse retrieveTeamMemberBookingProfile(teamMemberId)

RetrieveTeamMemberBookingProfile

Retrieves a team member&#39;s booking profile.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.BookingsApi();

var teamMemberId = SquareConnect.BookingsApi.constructFromObject({}); // String | The ID of the team member to retrieve.

apiInstance.retrieveTeamMemberBookingProfile(teamMemberId).then(function(data) {
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

[**RetrieveTeamMemberBookingProfileResponse**](RetrieveTeamMemberBookingProfileResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchAvailability"></a>
# **searchAvailability**
**Note: This endpoint is in beta.**
> SearchAvailabilityResponse searchAvailability(body)

SearchAvailability

Searches for availabilities for booking.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.BookingsApi();

var body = SquareConnect.BookingsApi.constructFromObject({}); // SearchAvailabilityRequest | An object containing the fields to POST for the request.  See the corresponding object definition for field details.

apiInstance.searchAvailability(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SearchAvailabilityRequest**](SearchAvailabilityRequest.md)| An object containing the fields to POST for the request.  See the corresponding object definition for field details. | 

### Return type

[**SearchAvailabilityResponse**](SearchAvailabilityResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateBooking"></a>
# **updateBooking**
**Note: This endpoint is in beta.**
> UpdateBookingResponse updateBooking(bookingId, body)

UpdateBooking

Updates a booking.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.BookingsApi();

var bookingId = SquareConnect.BookingsApi.constructFromObject({}); // String | The ID of the `Booking` object representing the to-be-updated booking.

var body = SquareConnect.BookingsApi.constructFromObject({}); // UpdateBookingRequest | An object containing the fields to POST for the request.  See the corresponding object definition for field details.

apiInstance.updateBooking(bookingId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bookingId** | **String**| The ID of the &#x60;Booking&#x60; object representing the to-be-updated booking. | 
 **body** | [**UpdateBookingRequest**](UpdateBookingRequest.md)| An object containing the fields to POST for the request.  See the corresponding object definition for field details. | 

### Return type

[**UpdateBookingResponse**](UpdateBookingResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

