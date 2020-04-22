# SquareConnect.OrderFulfillmentUpdatedUpdate

### Description
**Note: This model is in beta.**

Information about fulfillment updates.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fulfillment_uid** | **String** | Unique ID that identifies the fulfillment only within this order. | [optional] 
**old_state** | **String** | The state of the fulfillment before the change. Will not be populated if the fulfillment is created with this new Order version. See [OrderFulfillmentState](#type-orderfulfillmentstate) for possible values | [optional] 
**new_state** | **String** | The state of the fulfillment after the change. May be equal to old_state if a non-state field was changed on the fulfillment (e.g. tracking number). See [OrderFulfillmentState](#type-orderfulfillmentstate) for possible values | [optional] 


