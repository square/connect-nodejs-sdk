# SquareConnect.BatchUpsertCatalogObjectsResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**[Error]**](Error.md) | The set of [Error](#type-error)s encountered. | [optional] 
**objects** | [**[CatalogObject]**](CatalogObject.md) | The created [CatalogObject](#type-catalogobject)s | [optional] 
**updated_at** | **String** | The database [timestamp](#workingwithdates) of this update in RFC 3339 format, e.g., \&quot;2016-09-04T23:59:33.123Z\&quot;. | [optional] 
**id_mappings** | [**[CatalogIdMapping]**](CatalogIdMapping.md) | The mapping between client and server IDs for this Upsert. | [optional] 


