# SquareConnect.OrderLineItem

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name of the line item. | [optional] 
**quantity** | **String** | The quantity purchased, as a string representation of a number.  This string must have a positive integer value. | 
**note** | **String** | The note of the line item. | [optional] 
**catalog_object_id** | **String** | The [CatalogItemVariation](#type-catalogitemvariation) id applied to this line item. | [optional] 
**variation_name** | **String** | The name of the variation applied to this line item. | [optional] 
**modifiers** | [**[OrderLineItemModifier]**](OrderLineItemModifier.md) | The [CatalogModifier](#type-catalogmodifier)s applied to this line item. | [optional] 
**taxes** | [**[OrderLineItemTax]**](OrderLineItemTax.md) | A list of taxes applied to this line item. On read or retrieve, this list includes both item-level taxes and any order-level taxes apportioned to this item. When creating an Order, set your item-level taxes in this list. | [optional] 
**discounts** | [**[OrderLineItemDiscount]**](OrderLineItemDiscount.md) | A list of discounts applied to this line item. On read or retrieve, this list includes both item-level discounts and any order-level discounts apportioned to this item. When creating an Order, set your item-level discounts in this list. | [optional] 
**base_price_money** | [**Money**](Money.md) | The base price for a single unit of the line item. | [optional] 
**gross_sales_money** | [**Money**](Money.md) | The gross sales amount of money calculated as (item base price + modifiers price) * quantity. | [optional] 
**total_tax_money** | [**Money**](Money.md) | The total tax amount of money to collect for the line item. | [optional] 
**total_discount_money** | [**Money**](Money.md) | The total discount amount of money to collect for the line item. | [optional] 
**total_money** | [**Money**](Money.md) | The total amount of money to collect for this line item. | [optional] 


