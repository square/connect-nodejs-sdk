# SquareConnect.CreateOrderRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**order** | [**Order**](Order.md) | The order to create. If this field is set, then the only other top-level field that can be set is the idempotency_key. | [optional] 
**idempotency_key** | **String** | A value you specify that uniquely identifies this order among orders you&#39;ve created.  If you&#39;re unsure whether a particular order was created successfully, you can reattempt it with the same idempotency key without worrying about creating duplicate orders.  See [Idempotency keys](#idempotencykeys) for more information. | [optional] 
**reference_id** | **String** | __Deprecated__: Please set the reference_id on the nested [order](#type-order) field instead.  An optional ID you can associate with the order for your own purposes (such as to associate the order with an entity ID in your own database).  This value cannot exceed 40 characters. | [optional] 
**line_items** | [**[CreateOrderRequestLineItem]**](CreateOrderRequestLineItem.md) | __Deprecated__: Please set the line_items on the nested [order](#type-order) field instead.  The line items to associate with this order.  Each line item represents a different product to include in a purchase. | [optional] 
**taxes** | [**[CreateOrderRequestTax]**](CreateOrderRequestTax.md) | __Deprecated__: Please set the taxes on the nested [order](#type-order) field instead.  The taxes to include on the order. | [optional] 
**discounts** | [**[CreateOrderRequestDiscount]**](CreateOrderRequestDiscount.md) | __Deprecated__: Please set the discounts on the nested [order](#type-order) field instead.  The discounts to include on the order. | [optional] 


