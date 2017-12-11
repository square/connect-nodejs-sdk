# SquareConnect.CreateOrderRequestLineItem

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Only used for ad hoc line items. The name of the line item. This value cannot exceed 500 characters.  Do not provide a value for this field if you provide values in catalog_object_id. | [optional] 
**quantity** | **String** | The quantity to purchase, as a string representation of a number.  This string must have a positive integer value. | 
**basePriceMoney** | [**Money**](Money.md) | Only used for ad hoc line items. The base price for a single unit of the line item&#39;s associated variation.  Do not provide a value for this field if you provide a value for the &#x60;catalog_object_id&#x60;. | [optional] 
**variationName** | **String** | Only used for ad hoc line items. The variation name of the line item. This value cannot exceed 255 characters.  If this value is not set for an ad hoc line item, the default value of &#x60;Regular&#x60; is used.  Do not provide a value for this field if you provide a value for the &#x60;catalog_object_id&#x60;. | [optional] 
**note** | **String** | The note of the line item. This value cannot exceed 50 characters. | [optional] 
**catalogObjectId** | **String** | Only used for Catalog line items. The catalog object ID from existing [CatalogItemVariation](#type-catalogitemvariation).  Do not provide a value for this field if you provide a value for &#x60;name&#x60; and &#x60;base_price_money&#x60;. | [optional] 
**modifiers** | [**[CreateOrderRequestModifier]**](CreateOrderRequestModifier.md) | Only used for Catalog line items. The modifiers to include on the line item. | [optional] 
**taxes** | [**[CreateOrderRequestTax]**](CreateOrderRequestTax.md) | The taxes to include on the line item. | [optional] 
**discounts** | [**[CreateOrderRequestDiscount]**](CreateOrderRequestDiscount.md) | The discounts to include on the line item. | [optional] 


