# SquareConnect.InventoryCount

### Description

Represents the estimated quantity of items in a particular state at a particular location based on the known history of physical counts and inventory adjustments.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**catalog_object_id** | **String** | The Square generated ID of the [CatalogObject](#type-catalogobject) being tracked. | [optional] 
**catalog_object_type** | **String** | The [CatalogObjectType](#type-catalogobjecttype) of the [CatalogObject](#type-catalogobject) being tracked. Tracking is only supported for the &#x60;ITEM_VARIATION&#x60; type. | [optional] 
**state** | **String** | The current [InventoryState](#type-inventorystate) for the related quantity of items. See [InventoryState](#type-inventorystate) for possible values | [optional] 
**location_id** | **String** | The Square ID of the [Location](#type-location) where the related quantity of items are being tracked. | [optional] 
**quantity** | **String** | The number of items in the count as a decimal string. Fractional quantities are not supported. | [optional] 
**calculated_at** | **String** | A read-only timestamp in RFC 3339 format that indicates when Square received the most recent physical count or adjustment that had an affect on the estimated count. | [optional] 


<a name="StateEnum"></a>
## Enum: StateEnum


* `CUSTOM` (value: `"CUSTOM"`)

* `IN_STOCK` (value: `"IN_STOCK"`)

* `SOLD` (value: `"SOLD"`)

* `RETURNED_BY_CUSTOMER` (value: `"RETURNED_BY_CUSTOMER"`)

* `RESERVED_FOR_SALE` (value: `"RESERVED_FOR_SALE"`)

* `SOLD_ONLINE` (value: `"SOLD_ONLINE"`)

* `ORDERED_FROM_VENDOR` (value: `"ORDERED_FROM_VENDOR"`)

* `RECEIVED_FROM_VENDOR` (value: `"RECEIVED_FROM_VENDOR"`)

* `IN_TRANSIT_TO` (value: `"IN_TRANSIT_TO"`)

* `NONE` (value: `"NONE"`)

* `WASTE` (value: `"WASTE"`)

* `UNLINKED_RETURN` (value: `"UNLINKED_RETURN"`)




