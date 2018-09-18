# SquareConnect.BatchRetrieveInventoryCountsResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**[Error]**](Error.md) | Any errors that occurred during the request. | [optional] 
**counts** | [**[InventoryCount]**](InventoryCount.md) | The current calculated inventory counts for the requested objects and locations. | [optional] 
**cursor** | **String** | The pagination cursor to be used in a subsequent request. If unset, this is the final response.  See [Paginating results](#paginatingresults) for more information. | [optional] 


