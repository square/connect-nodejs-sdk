# SquareConnect.SearchTerminalCheckoutsRequest

### Description



## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**query** | [**TerminalCheckoutQuery**](TerminalCheckoutQuery.md) | Queries terminal checkouts based on given conditions and sort order. Leaving this unset will return all checkouts with the default sort order. | [optional] 
**cursor** | **String** | A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for the original query. See [Pagination](https://developer.squareup.com/docs/basics/api101/pagination) for more information. | [optional] 
**limit** | **Number** | Limit the number of results returned for a single request. | [optional] 


