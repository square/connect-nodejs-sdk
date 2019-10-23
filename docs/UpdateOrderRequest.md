# SquareConnect.UpdateOrderRequest

### Description
**Note: This model is in beta.**

Defines the fields that are included in requests to the [UpdateOrder](#endpoint-orders-updateorder) endpoint.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**order** | [**Order**](Order.md) | The [sparse order](https://developer.squareup.com/docs/orders-api/manage-orders#sparse-order-objects) containing only the fields to update and the version the update is being applied to. | [optional] 
**fields_to_clear** | **[String]** | The [dot notation paths](https://developer.squareup.com/docs/orders-api/manage-orders#on-dot-notation) fields to clear. For example, &#x60;line_items[uid].note&#x60; [Read more about Deleting fields](https://developer.squareup.com/docs/orders-api/manage-orders#delete-fields). | [optional] 
**idempotency_key** | **String** | A value you specify that uniquely identifies this update request  If you&#39;re unsure whether a particular update was applied to an order successfully, you can reattempt it with the same idempotency key without worrying about creating duplicate updates to the order. The latest order version will be returned.  See [Idempotency](https://developer.squareup.com/docs/basics/api101/idempotency) for more information. | [optional] 


