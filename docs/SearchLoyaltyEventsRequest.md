# SquareConnect.SearchLoyaltyEventsRequest

### Description
**Note: This model is in beta.**

A request to search for loyalty events.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**query** | [**LoyaltyEventQuery**](LoyaltyEventQuery.md) | A set of one or more predefined query filters to apply when  searching for loyalty events. The endpoint performs a logical AND to  evaluate multiple filters and performs a logical OR on arrays   that specifies multiple field values. | [optional] 
**limit** | **Number** | The maximum number of results to include in the response.  The last page might contain fewer events.  The default is 30 events. | [optional] 
**cursor** | **String** | A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for your original query. For more information, see [Pagination](https://developer.squareup.com/docs/docs/basics/api101/pagination). | [optional] 


