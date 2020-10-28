# SquareConnect.CatalogIdMapping

### Description

A mapping between a temporary client-supplied ID and a permanent server-generated ID.  When calling [UpsertCatalogObject](#endpoint-Catalog-UpsertCatalogObject) or [BatchUpsertCatalogObjects](#endpoint-Catalog-BatchUpsertCatalogObjects) to create a [CatalogObject](#type-CatalogObject) instance, you can supply a temporary ID for the to-be-created object, especially when the object is to be referenced elsewhere in the same request body. This temporary ID can be any string unique within the call, but must be prefixed by \"#\".  After the request is sumbitted and the object created, a permanent server-generated ID is assigned to the new object. The permanent ID is unique across the Square catalog.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_object_id** | **String** | The client-supplied temporary &#x60;#&#x60;-prefixed ID for a new &#x60;CatalogObject&#x60;. | [optional] 
**object_id** | **String** | The permanent ID for the CatalogObject created by the server. | [optional] 


