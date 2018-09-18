# SquareConnect.InventoryChange

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Indicates how the inventory change was applied. See [InventoryChangeType](#type-inventorychangetype) for all possible values. | [optional] 
**physicalCount** | [**InventoryPhysicalCount**](InventoryPhysicalCount.md) | Contains details about the physical count when &#x60;type&#x60; is &#x60;PHYSICAL_COUNT&#x60; and unset for all other types. | [optional] 
**adjustment** | [**InventoryAdjustment**](InventoryAdjustment.md) | Contains details about the inventory adjustment when &#x60;type&#x60; is &#x60;ADJUSTMENT&#x60; and unset for all other types. | [optional] 
**transfer** | [**InventoryTransfer**](InventoryTransfer.md) | Contains details about the inventory transfer when &#x60;type&#x60; is &#x60;TRANSFER&#x60; and unset for all other types. | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `PHYSICAL_COUNT` (value: `"PHYSICAL_COUNT"`)

* `ADJUSTMENT` (value: `"ADJUSTMENT"`)

* `TRANSFER` (value: `"TRANSFER"`)




