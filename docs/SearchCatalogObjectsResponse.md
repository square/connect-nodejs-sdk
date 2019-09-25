# SquareConnect.SearchCatalogObjectsResponse

### Description



## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**[Error]**](Error.md) | The set of &#x60;Error&#x60;s encountered. | [optional] 
**cursor** | **String** | The pagination cursor to be used in a subsequent request. If unset, this is the final response. See [Pagination](https://developer.squareup.com/docs/basics/api101/pagination) for more information. | [optional] 
**objects** | [**[CatalogObject]**](CatalogObject.md) | The &#x60;CatalogObject&#x60;s returned. | [optional] 
**related_objects** | [**[CatalogObject]**](CatalogObject.md) | A list of &#x60;CatalogObject&#x60;s referenced by the objects in the &#x60;objects&#x60; field. | [optional] 
**latest_time** | **String** |  When this merchant&#39;s catalog was last updated. Will match the value for &#x60;end_time&#x60; or &#x60;cursor&#x60; if either field is included in the &#x60;SearchCatalog&#x60; request. | [optional] 


