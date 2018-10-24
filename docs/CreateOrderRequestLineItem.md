# SquareConnect.CreateOrderRequestLineItem

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Only used for ad hoc line items. The name of the line item. This value cannot exceed 500 characters.  Do not provide a value for this field if you provide a value for &#x60;catalog_object_id&#x60;. | [optional] 
**quantity** | **String** | The quantity to purchase, as a string representation of a number.  This string must have a positive integer value. | 
**base_price_money** | [**Money**](Money.md) | The base price for a single unit of the line item.  &#x60;base_price_money&#x60; is required for ad hoc line items and variable priced [CatalogItemVariation](#type-catalogitemvariation)s. If both &#x60;catalog_object_id&#x60; and &#x60;base_price_money&#x60; are set, &#x60;base_price_money&#x60; will override the CatalogItemVariation&#39;s price. | [optional] 
**variation_name** | **String** | Only used for ad hoc line items. The variation name of the line item. This value cannot exceed 255 characters.  If this value is not set for an ad hoc line item, the default value of &#x60;Regular&#x60; is used.  Do not provide a value for this field if you provide a value for the &#x60;catalog_object_id&#x60;. | [optional] 
**note** | **String** | The note of the line item. This value cannot exceed 500 characters. | [optional] 
**catalog_object_id** | **String** | Only used for Catalog line items. The catalog object ID for an existing [CatalogItemVariation](#type-catalogitemvariation).  Do not provide a value for this field if you provide a value for &#x60;name&#x60; and &#x60;base_price_money&#x60;. | [optional] 
**modifiers** | [**[CreateOrderRequestModifier]**](CreateOrderRequestModifier.md) | Only used for Catalog line items. The modifiers to include on the line item. | [optional] 
**taxes** | [**[CreateOrderRequestTax]**](CreateOrderRequestTax.md) | The taxes to include on the line item. | [optional] 
**discounts** | [**[CreateOrderRequestDiscount]**](CreateOrderRequestDiscount.md) | The discounts to include on the line item. | [optional] 


