# SquareConnect.RetrieveCatalogObjectRequest

### Description



## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**include_related_objects** | **Boolean** | If &#x60;true&#x60;, the response will include additional objects that are related to the requested object, as follows:  If the &#x60;object&#x60; field of the response contains a &#x60;CatalogItem&#x60;, its associated &#x60;CatalogCategory&#x60;, &#x60;CatalogTax&#x60;, &#x60;CatalogImage&#x60; and &#x60;CatalogModifierList&#x60; objects will be returned in the &#x60;related_objects&#x60; field of the response. If the &#x60;object&#x60; field of the response contains a &#x60;CatalogItemVariation&#x60;, its parent &#x60;CatalogItem&#x60; will be returned in the &#x60;related_objects&#x60; field of the response.  Default value: &#x60;false&#x60; | [optional] 
**catalog_version** | **Number** | Requests objects as of a specific version of the catalog. This allows you to retrieve historical versions of objects. The value to retrieve a specific version of an object can be found in the version field of &#x60;CatalogObject&#x60;s. | [optional] [beta]


