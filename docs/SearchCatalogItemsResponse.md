# SquareConnect.SearchCatalogItemsResponse

### Description
**Note: This model is in beta.**

Defines the response body returned from the [SearchCatalogItems](#endpoint-Catalog-SearchCatalogItems) endpoint.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**[Error]**](Error.md) | Errors detected when the call to &#x60;SearchCatalogItems&#x60; endpoint fails. | [optional] 
**items** | [**[CatalogObject]**](CatalogObject.md) | Returned items matching the specified query expressions. | [optional] 
**cursor** | **String** | Pagination token used in the next request to return more of the search result. | [optional] 
**matched_variation_ids** | **[String]** | Ids of returned item variations matching the specified query expression. | [optional] 


