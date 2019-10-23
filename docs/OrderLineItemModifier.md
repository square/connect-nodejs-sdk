# SquareConnect.OrderLineItemModifier

### Description

A [CatalogModifier](#type-catalogmodifier).

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uid** | **String** | Unique ID that identifies the modifier only within this order. | [optional] [beta]
**catalog_object_id** | **String** | The catalog object id referencing &#x60;CatalogModifier&#x60;. | [optional] 
**name** | **String** | The name of the item modifier. | [optional] 
**base_price_money** | [**Money**](Money.md) | The base price for the modifier.  &#x60;base_price_money&#x60; is required for ad hoc modifiers. If both &#x60;catalog_object_id&#x60; and &#x60;base_price_money&#x60; are set, &#x60;base_price_money&#x60; will override the predefined &#x60;CatalogModifier&#x60; price. | [optional] 
**total_price_money** | [**Money**](Money.md) | The total price of the item modifier for its line item. This is the modifier&#39;s &#x60;base_price_money&#x60; multiplied by the line item&#39;s quantity. | [optional] 


