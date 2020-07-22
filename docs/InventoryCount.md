# SquareConnect.InventoryCount

### Description

Represents Square's estimated quantity of items in a particular state at a particular location based on the known history of physical counts and inventory adjustments.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**catalog_object_id** | **String** | The Square generated ID of the &#x60;CatalogObject&#x60; being tracked. | [optional] 
**catalog_object_type** | **String** | The &#x60;CatalogObjectType&#x60; of the &#x60;CatalogObject&#x60; being tracked. Tracking is only supported for the &#x60;ITEM_VARIATION&#x60; type. | [optional] 
**state** | **String** | The current &#x60;InventoryState&#x60; for the related quantity of items. See [InventoryState](#type-inventorystate) for possible values | [optional] 
**location_id** | **String** | The Square ID of the &#x60;Location&#x60; where the related quantity of items are being tracked. | [optional] 
**quantity** | **String** | The number of items affected by the estimated count as a decimal string. Can support up to 5 digits after the decimal point. | [optional] 
**calculated_at** | **String** | A read-only timestamp in RFC 3339 format that indicates when Square received the most recent physical count or adjustment that had an affect on the estimated count. | [optional] 


