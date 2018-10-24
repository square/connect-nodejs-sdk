# SquareConnect.ItemVariationLocationOverrides

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location_id** | **String** | The ID of the [location](#type-location). | [optional] 
**price_money** | [**Money**](Money.md) | The price of the [CatalogItemVariation](#type-catalogitemvariation) at the given [location](#type-location), or blank for variable pricing. | [optional] 
**pricing_type** | **String** | The pricing type (fixed or variable) for the [CatalogItemVariation](#type-catalogitemvariation) at the given [location](#type-location). See [CatalogPricingType](#type-catalogpricingtype) for all possible values. | [optional] 
**track_inventory** | **Boolean** | If &#x60;true&#x60;, inventory tracking is active for the [CatalogItemVariation](#type-catalogitemvariation) at this [location](#type-location). | [optional] 
**inventory_alert_type** | **String** | Indicates whether the [CatalogItemVariation](#type-catalogitemvariation) displays an alert when its inventory quantity is less than or equal to its &#x60;inventory_alert_threshold&#x60;. See [InventoryAlertType](#type-inventoryalerttype) for all possible values. | [optional] 
**inventory_alert_threshold** | **Number** | If the inventory quantity for the variation is less than or equal to this value and &#x60;inventory_alert_type&#x60; is &#x60;LOW_QUANTITY&#x60;, the variation displays an alert in the merchant dashboard.  This value is always an integer. | [optional] 


<a name="PricingTypeEnum"></a>
## Enum: PricingTypeEnum


* `FIXED_PRICING` (value: `"FIXED_PRICING"`)

* `VARIABLE_PRICING` (value: `"VARIABLE_PRICING"`)




<a name="InventoryAlertTypeEnum"></a>
## Enum: InventoryAlertTypeEnum


* `NONE` (value: `"NONE"`)

* `LOW_QUANTITY` (value: `"LOW_QUANTITY"`)




