# SquareConnect.OrderFulfillment

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The type of the fulfillment. | [optional] 
**state** | **String** | The state of the fulfillment. | [optional] 
**pickup_details** | [**OrderFulfillmentPickupDetails**](OrderFulfillmentPickupDetails.md) | Contains pickup-specific details. Required when fulfillment type is &#x60;PICKUP&#x60;. | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `PICKUP` (value: `"PICKUP"`)




<a name="StateEnum"></a>
## Enum: StateEnum


* `PROPOSED` (value: `"PROPOSED"`)

* `RESERVED` (value: `"RESERVED"`)

* `PREPARED` (value: `"PREPARED"`)

* `COMPLETED` (value: `"COMPLETED"`)

* `CANCELED` (value: `"CANCELED"`)

* `FAILED` (value: `"FAILED"`)




