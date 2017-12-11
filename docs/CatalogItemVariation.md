# SquareConnect.CatalogItemVariation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**itemId** | **String** | The ID of the [CatalogItem](#type-catalogitem) associated with this item variation. Searchable. | [optional] 
**name** | **String** | The item variation&#39;s name. Searchable. | [optional] 
**sku** | **String** | The item variation&#39;s SKU, if any. Searchable. | [optional] 
**upc** | **String** | The item variation&#39;s UPC, if any. Searchable. | [optional] 
**ordinal** | **Number** | The order in which this item variation should be displayed. This value is read-only. On writes, the ordinal for each item variation within a parent [CatalogItem](#type-catalogitem) is set according to the item variations&#39;s position. On reads, the value is not guaranteed to be sequential or unique. | [optional] 
**pricingType** | **String** | Indicates whether the item variation&#39;s price is fixed or determined at the time of sale. See [CatalogPricingType](#type-catalogpricingtype) for all possible values. | [optional] 
**priceMoney** | [**Money**](Money.md) | The item variation&#39;s price, if fixed pricing is used. | [optional] 
**locationOverrides** | [**[ItemVariationLocationOverrides]**](ItemVariationLocationOverrides.md) | Per-[location](#type-location) price and inventory overrides. | [optional] 
**trackInventory** | **Boolean** | If &#x60;true&#x60;, inventory tracking is active for the variation. | [optional] 
**inventoryAlertType** | **String** | Indicates whether the item variation displays an alert when its inventory quantity is less than or equal to its &#x60;inventory_alert_threshold&#x60;. See [InventoryAlertType](#type-inventoryalerttype) for all possible values. | [optional] 
**inventoryAlertThreshold** | **Number** | If the inventory quantity for the variation is less than or equal to this value and &#x60;inventory_alert_type&#x60; is &#x60;LOW_QUANTITY&#x60;, the variation displays an alert in the merchant dashboard.  This value is always an integer. | [optional] 
**userData** | **String** | Arbitrary user metadata to associate with the item variation. Cannot exceed 255 characters. Searchable. | [optional] 
**serviceDuration** | **Number** | If the [CatalogItem](#type-catalogitem) that owns this item variation is of type &#x60;APPOINTMENTS_SERVICE&#x60;, then this is the duration of the service in milliseconds. For example, a 30 minute appointment would have the value &#x60;1800000&#x60;, which is equal to 30 (minutes) * 60 (seconds per minute) * 1000 (milliseconds per second). | [optional] 


<a name="PricingTypeEnum"></a>
## Enum: PricingTypeEnum


* `FIXED_PRICING` (value: `"FIXED_PRICING"`)

* `VARIABLE_PRICING` (value: `"VARIABLE_PRICING"`)




<a name="InventoryAlertTypeEnum"></a>
## Enum: InventoryAlertTypeEnum


* `NONE` (value: `"NONE"`)

* `LOW_QUANTITY` (value: `"LOW_QUANTITY"`)




