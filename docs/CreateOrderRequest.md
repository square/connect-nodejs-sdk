# SquareConnect.CreateOrderRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**idempotency_key** | **String** | A value you specify that uniquely identifies this order among orders you&#39;ve created.  If you&#39;re unsure whether a particular order was created successfully, you can reattempt it with the same idempotency key without worrying about creating duplicate orders.  See [Idempotency keys](#idempotencykeys) for more information. | [optional] 
**reference_id** | **String** | An optional ID you can associate with the order for your own purposes (such as to associate the order with an entity ID in your own database).  This value cannot exceed 40 characters. | [optional] 
**line_items** | [**[CreateOrderRequestLineItem]**](CreateOrderRequestLineItem.md) | The line items to associate with this order.  Each line item represents a different product to include in a purchase. | 
**taxes** | [**[CreateOrderRequestTax]**](CreateOrderRequestTax.md) | The taxes to include on the order. | [optional] 
**discounts** | [**[CreateOrderRequestDiscount]**](CreateOrderRequestDiscount.md) | The discounts to include on the order. | [optional] 


