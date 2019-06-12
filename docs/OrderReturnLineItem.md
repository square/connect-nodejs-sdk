# SquareConnect.OrderReturnLineItem

### Description

The line item being returned in an Order.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uid** | **String** | Unique identifier for this return line item entry. This is a read-only field. | [optional] 
**source_line_item_uid** | **String** | &#x60;uid&#x60; of the LineItem in the original sale Order. | [optional] 
**name** | **String** | The name of the line item. | [optional] 
**quantity** | **String** | The quantity returned, formatted as a decimal number. For example: &#x60;\&quot;3\&quot;&#x60;.  Line items with a &#x60;quantity_unit&#x60; can have non-integer quantities. For example: &#x60;\&quot;1.70000\&quot;&#x60;. | 
**quantity_unit** | [**OrderQuantityUnit**](OrderQuantityUnit.md) | The unit and precision that this return line item&#39;s quantity is measured in. | [optional] 
**note** | **String** | The note of the returned line item. | [optional] 
**catalog_object_id** | **String** | The [CatalogItemVariation](#type-catalogitemvariation) id applied to this returned line item. | [optional] 
**variation_name** | **String** | The name of the variation applied to this returned line item. | [optional] 
**return_modifiers** | [**[OrderReturnLineItemModifier]**](OrderReturnLineItemModifier.md) | The [CatalogModifier](#type-catalogmodifier)s applied to this line item. | [optional] 
**return_taxes** | [**[OrderReturnTax]**](OrderReturnTax.md) | A list of taxes applied to this line item. On read or retrieve, this list includes both item-level taxes and any return-level taxes apportioned to this item. | [optional] 
**return_discounts** | [**[OrderReturnDiscount]**](OrderReturnDiscount.md) | A list of discounts applied to this line item. On read or retrieve, this list includes both item-level discounts and any return-level discounts apportioned to this item. | [optional] 
**base_price_money** | [**Money**](Money.md) | The base price for a single unit of the line item. | [optional] 
**variation_total_price_money** | [**Money**](Money.md) | The total price of all item variations returned in this line item. Calculated as &#x60;base_price_money&#x60; multiplied by &#x60;quantity&#x60;. Does not include modifiers. | [optional] 
**gross_return_money** | [**Money**](Money.md) | The gross return amount of money calculated as (item base price + modifiers price) * quantity.  This field is read-only. | [optional] 
**total_tax_money** | [**Money**](Money.md) | The total tax amount of money to return for the line item.  This field is read-only. | [optional] 
**total_discount_money** | [**Money**](Money.md) | The total discount amount of money to return for the line item.  This field is read-only. | [optional] 
**total_money** | [**Money**](Money.md) | The total amount of money to return for this line item.  This field is read-only. | [optional] 


