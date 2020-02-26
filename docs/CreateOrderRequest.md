# SquareConnect.CreateOrderRequest

### Description



## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**order** | [**Order**](Order.md) | The order to create. If this field is set, then the only other top-level field that can be set is the idempotency_key. | [optional] 
**idempotency_key** | **String** | A value you specify that uniquely identifies this order among orders you&#39;ve created.  If you&#39;re unsure whether a particular order was created successfully, you can reattempt it with the same idempotency key without worrying about creating duplicate orders.  See [Idempotency](https://developer.squareup.com/docs/basics/api101/idempotency) for more information. | [optional] 


