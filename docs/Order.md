# SquareConnect.Order

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The order&#39;s unique ID.  This value is only present for Order objects created by the Orders API through the [CreateOrder](#endpoint-createorder) endpoint. | [optional] 
**locationId** | **String** | The ID of the merchant location this order is associated with. | 
**referenceId** | **String** | A client specified identifier to associate an entity in another system with this order. | [optional] 
**lineItems** | [**[OrderLineItem]**](OrderLineItem.md) | The line items included in the order. Every order has at least one line item. | 
**totalMoney** | [**Money**](Money.md) | The total amount of money to collect for the order. | [optional] 
**totalTaxMoney** | [**Money**](Money.md) | The total tax amount of money to collect for the order. | [optional] 
**totalDiscountMoney** | [**Money**](Money.md) | The total discount amount of money to collect for the order. | [optional] 


