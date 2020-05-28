# SquareConnect.SearchLoyaltyEventsResponse

### Description
**Note: This model is in beta.**

A response that contains loyalty events that satisfy the search  criteria, in order by the `created_at` date.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**[Error]**](Error.md) | Any errors that occurred during the request. | [optional] 
**events** | [**[LoyaltyEvent]**](LoyaltyEvent.md) | The loyalty events that satisfy the search criteria. | [optional] 
**cursor** | **String** | The pagination cursor to be used in a subsequent  request. If empty, this is the final response.  For more information,  see [Pagination](https://developer.squareup.com/docs/docs/basics/api101/pagination). | [optional] 


