# SquareConnect.BatchUpsertCatalogObjectsResponse

### Description



## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**[Error]**](Error.md) | Any errors that occurred during the request. | [optional] 
**objects** | [**[CatalogObject]**](CatalogObject.md) | The created successfully created CatalogObjects. | [optional] 
**updated_at** | **String** | The database [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates) of this update in RFC 3339 format, e.g., \&quot;2016-09-04T23:59:33.123Z\&quot;. | [optional] 
**id_mappings** | [**[CatalogIdMapping]**](CatalogIdMapping.md) | The mapping between client and server IDs for this upsert. | [optional] 


