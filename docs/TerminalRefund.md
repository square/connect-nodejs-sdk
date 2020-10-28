# SquareConnect.TerminalRefund

### Description
**Note: This model is in beta.**



## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique ID for this &#x60;TerminalRefund&#x60; | [optional] 
**refund_id** | **String** | The reference to the payment refund created by completing this &#x60;TerminalRefund&#x60;. | [optional] 
**payment_id** | **String** | Unique ID of the payment being refunded. | 
**order_id** | **String** | The reference to the Square order id for the payment identified by the &#x60;payment_id&#x60;. | [optional] 
**amount_money** | [**Money**](Money.md) | The amount of money, inclusive of &#x60;tax_money&#x60;, that the &#x60;TerminalRefund&#x60; should return. This value is limited to the amount taken in the original payment minus any completed or pending refunds. | 
**reason** | **String** | A description of the reason for the refund. Note: maximum 192 characters | [optional] 
**device_id** | **String** | The unique Id of the device intended for this &#x60;TerminalRefund&#x60;. The Id can be retrieved from /v2/devices api. | [optional] 
**deadline_duration** | **String** | The duration as an RFC 3339 duration, after which the refund will be automatically canceled. TerminalRefunds that are &#x60;PENDING&#x60; will be automatically &#x60;CANCELED&#x60; and have a cancellation reason of &#x60;TIMED_OUT&#x60;  Default: 5 minutes from creation  Maximum: 5 minutes | [optional] 
**status** | **String** | The status of the &#x60;TerminalRefund&#x60;. Options: &#x60;PENDING&#x60;, &#x60;IN\\_PROGRESS&#x60;, &#x60;CANCELED&#x60;, &#x60;COMPLETED&#x60; | [optional] 
**cancel_reason** | **String** | Present if the status is &#x60;CANCELED&#x60;. See [ActionCancelReason](#type-actioncancelreason) for possible values | [optional] 
**created_at** | **String** | The time when the &#x60;TerminalRefund&#x60; was created as an RFC 3339 timestamp. | [optional] 
**updated_at** | **String** | The time when the &#x60;TerminalRefund&#x60; was last updated as an RFC 3339 timestamp. | [optional] 


