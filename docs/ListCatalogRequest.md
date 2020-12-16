# SquareConnect.ListCatalogRequest

### Description



## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cursor** | **String** | The pagination cursor returned in the previous response. Leave unset for an initial request. See [Pagination](https://developer.squareup.com/docs/basics/api101/pagination) for more information. | [optional] 
**types** | **String** | An optional case-insensitive, comma-separated list of object types to retrieve, for example &#x60;ITEM,ITEM_VARIATION,CATEGORY,IMAGE&#x60;.  The legal values are taken from the CatalogObjectType enum: &#x60;ITEM&#x60;, &#x60;ITEM_VARIATION&#x60;, &#x60;CATEGORY&#x60;, &#x60;DISCOUNT&#x60;, &#x60;TAX&#x60;, &#x60;MODIFIER&#x60;, &#x60;MODIFIER_LIST&#x60;, or &#x60;IMAGE&#x60;. | [optional] 
**catalog_version** | **Number** | The specific version of the catalog objects to be included in the response.  This allows you to retrieve historical versions of objects. The specified version value is matched against the &#x60;CatalogObject&#x60;s&#39; &#x60;version&#x60; attribute. | [optional] [beta]


