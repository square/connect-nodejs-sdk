# SquareConnect.InventoryChange

### Description

Represents a single physical count, inventory, adjustment, or transfer that is part of the history of inventory changes for a particular `CatalogObject`.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Indicates how the inventory change was applied. See &#x60;InventoryChangeType&#x60; for all possible values. See [InventoryChangeType](#type-inventorychangetype) for possible values | [optional] 
**physical_count** | [**InventoryPhysicalCount**](InventoryPhysicalCount.md) | Contains details about the physical count when &#x60;type&#x60; is &#x60;PHYSICAL_COUNT&#x60; and unset for all other types. | [optional] 
**adjustment** | [**InventoryAdjustment**](InventoryAdjustment.md) | Contains details about the inventory adjustment when &#x60;type&#x60; is &#x60;ADJUSTMENT&#x60; and unset for all other types. | [optional] 
**transfer** | [**InventoryTransfer**](InventoryTransfer.md) | Contains details about the inventory transfer when &#x60;type&#x60; is &#x60;TRANSFER&#x60; and unset for all other types.  _Note:_ An &#x60;InventoryTransfer&#x60; object is read-only and can only be present in a &#x60;RetrieveInventoryChangesResponse&#x60; and &#x60;BatchRetrieveInventoryChangesResponse&#x60; object. | [optional] 


