# SquareConnect.SearchTerminalRefundsRequest

### Description
**Note: This model is in beta.**



## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**query** | [**TerminalRefundQuery**](TerminalRefundQuery.md) | Query the terminal refunds based on given conditions and sort order. Calling &#x60;SearchTerminalRefunds&#x60; without an explicitly query parameter will return all available refunds with the default sort order. | [optional] 
**cursor** | **String** | A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for the original query. | [optional] 
**limit** | **Number** | Limit the number of results returned for a single request. | [optional] 


