# SquareConnect.OrderCreated

### Description
**Note: This model is in beta.**



## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**order_id** | **String** | The order&#39;s unique ID. | [optional] 
**version** | **Number** | Version number which is incremented each time an update is committed to the order. Orders that were not created through the API will not include a version and thus cannot be updated.  [Read more about working with versions](https://developer.squareup.com/docs/docs/orders-api/manage-orders#update-orders) | [optional] 
**location_id** | **String** | The ID of the merchant location this order is associated with. | [optional] 
**state** | **String** | The state of the order. See [OrderState](#type-orderstate) for possible values | [optional] 
**created_at** | **String** | Timestamp for when the order was created in RFC 3339 format. | [optional] 


