# SquareConnect.OrderLineItem

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name of the line item. | [optional] 
**quantity** | **String** | The quantity purchased, as a string representation of a number. | [optional] 
**note** | **String** | The note of the line item. | [optional] 
**catalogObjectId** | **String** | The [CatalogItemVariation](#type-catalogitemvariation) id applied to this line item. | [optional] 
**variationName** | **String** | The name of the variation applied to this line item. | [optional] 
**modifiers** | [**[OrderLineItemModifier]**](OrderLineItemModifier.md) | The [CatalogModifier](#type-catalogmodifier)s applied to this line item. | [optional] 
**taxes** | [**[OrderLineItemTax]**](OrderLineItemTax.md) | The taxes applied to this line item. | [optional] 
**discounts** | [**[OrderLineItemDiscount]**](OrderLineItemDiscount.md) | The discounts applied to this line item. | [optional] 
**basePriceMoney** | [**Money**](Money.md) | The base price for a single unit of the line item. | [optional] 
**grossSalesMoney** | [**Money**](Money.md) | The gross sales amount of money calculated as (item base price + modifiers price) * quantity. | [optional] 
**totalTaxMoney** | [**Money**](Money.md) | The total tax amount of money to collect for the line item. | [optional] 
**totalDiscountMoney** | [**Money**](Money.md) | The total discount amount of money to collect for the line item. | [optional] 
**totalMoney** | [**Money**](Money.md) | The total amount of money to collect for this line item. | [optional] 


