# SquareConnect.V1Refund

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The type of refund  | [optional] 
**reason** | **String** | The merchant-specified reason for the refund. | [optional] 
**refundedMoney** | [**V1Money**](V1Money.md) | The amount of money refunded. This amount is always negative. | [optional] 
**createdAt** | **String** | The time when the merchant initiated the refund for Square to process, in ISO 8601 format.. | [optional] 
**processedAt** | **String** | The time when Square processed the refund on behalf of the merchant, in ISO 8601 format. | [optional] 
**paymentId** | **String** | The Square-issued ID of the payment the refund is applied to. | [optional] 
**merchantId** | **String** |  | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `FULL` (value: `"FULL"`)

* `PARTIAL` (value: `"PARTIAL"`)




