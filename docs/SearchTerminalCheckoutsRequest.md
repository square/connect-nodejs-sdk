# SquareConnect.SearchTerminalCheckoutsRequest

### Description
**Note: This model is in beta.**



## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**query** | [**TerminalCheckoutQuery**](TerminalCheckoutQuery.md) | Query the terminal checkouts based on given conditions and sort order. Calling SearchTerminalCheckouts without an explicitly query parameter will return all available checkouts with the default sort order. | [optional] 
**cursor** | **String** | A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for the original query. | [optional] 
**limit** | **Number** | Limit the number of results returned for a single request. | [optional] 


