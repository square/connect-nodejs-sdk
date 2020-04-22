# SquareConnect.SearchTerminalCheckoutsResponse

### Description
**Note: This model is in beta.**



## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**[Error]**](Error.md) | Information on errors encountered during the request. | [optional] 
**checkouts** | [**[TerminalCheckout]**](TerminalCheckout.md) | The requested search result of &#x60;TerminalCheckout&#x60;s. | [optional] 
**cursor** | **String** | The pagination cursor to be used in a subsequent request. If empty, this is the final response.  See [Pagination](https://developer.squareup.com/docs/basics/api101/pagination) for more information. | [optional] 


