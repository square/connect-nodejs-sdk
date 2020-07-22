# SquareConnect.RetrieveInventoryChangesResponse

### Description



## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**[Error]**](Error.md) | Any errors that occurred during the request. | [optional] 
**changes** | [**[InventoryChange]**](InventoryChange.md) | The set of inventory changes for the requested object and locations. | [optional] 
**cursor** | **String** | The pagination cursor to be used in a subsequent request. If unset, this is the final response.  See the [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination) guide for more information. | [optional] 


