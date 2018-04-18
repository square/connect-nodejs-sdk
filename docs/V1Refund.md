# SquareConnect.V1Refund

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The type of refund  | [optional] 
**reason** | **String** | The merchant-specified reason for the refund. | [optional] 
**refundedMoney** | [**V1Money**](V1Money.md) | The amount of money refunded. This amount is always negative. | [optional] 
**createdAt** | **String** | The time when the merchant initiated the refund for Square to process, in ISO 8601 format. | [optional] 
**processedAt** | **String** | The time when Square processed the refund on behalf of the merchant, in ISO 8601 format. | [optional] 
**paymentId** | **String** | A Square-issued ID associated with the refund. For single-tender refunds, payment_id is the ID of the original payment ID. For split-tender refunds, payment_id is the ID of the original tender. For exchange-based refunds (is_exchange &#x3D;&#x3D; true), payment_id is the ID of the original payment ID even if the payment includes other tenders. | [optional] 
**merchantId** | **String** |  | [optional] 
**isExchange** | **Boolean** | Indicates whether or not the refund is associated with an exchange. If is_exchange is true, the refund reflects the value of goods returned in the exchange not the total money refunded. | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `FULL` (value: `"FULL"`)

* `PARTIAL` (value: `"PARTIAL"`)




