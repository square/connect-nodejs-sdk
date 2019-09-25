# SquareConnect.DeleteCatalogObjectResponse

### Description



## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**[Error]**](Error.md) | The set of &#x60;Error&#x60;s encountered. | [optional] 
**deleted_object_ids** | **[String]** | The IDs of all &#x60;CatalogObject&#x60;s deleted by this request. Multiple IDs may be returned when associated objects are also deleted, for example a &#x60;CatalogItemVariation&#x60; when its parent &#x60;CatalogItem&#x60; is deleted. | [optional] 
**deleted_at** | **String** | The database [timestamp](#workingwithdates) of this deletion in RFC 3339 format, e.g., \&quot;2016-09-04T23:59:33.123Z\&quot;. | [optional] 


