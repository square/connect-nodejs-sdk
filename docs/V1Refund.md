# SquareConnect.V1Refund

### Description

V1Refund

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The type of refund See [V1RefundType](#type-v1refundtype) for possible values | [optional] 
**reason** | **String** | The merchant-specified reason for the refund. | [optional] 
**refunded_money** | [**V1Money**](V1Money.md) | The amount of money refunded. This amount is always negative. | [optional] 
**refunded_processing_fee_money** | [**V1Money**](V1Money.md) | The amount of processing fee money refunded. This amount is always positive. | [optional] 
**refunded_tax_money** | [**V1Money**](V1Money.md) | The total amount of tax money refunded. This amount is always negative. | [optional] 
**refunded_additive_tax_money** | [**V1Money**](V1Money.md) | The amount of additive tax money refunded. This amount is always negative. | [optional] 
**refunded_additive_tax** | [**[V1PaymentTax]**](V1PaymentTax.md) | All of the additive taxes associated with the refund. | [optional] 
**refunded_inclusive_tax_money** | [**V1Money**](V1Money.md) | The amount of inclusive tax money refunded. This amount is always negative. | [optional] 
**refunded_inclusive_tax** | [**[V1PaymentTax]**](V1PaymentTax.md) | All of the inclusive taxes associated with the refund. | [optional] 
**refunded_tip_money** | [**V1Money**](V1Money.md) | The amount of tip money refunded. This amount is always negative. | [optional] 
**refunded_discount_money** | [**V1Money**](V1Money.md) | The amount of discount money refunded. This amount is always positive. | [optional] 
**refunded_surcharge_money** | [**V1Money**](V1Money.md) | The amount of surcharge money refunded. This amount is always negative. | [optional] 
**refunded_surcharges** | [**[V1PaymentSurcharge]**](V1PaymentSurcharge.md) | A list of all surcharges associated with the refund. | [optional] 
**created_at** | **String** | The time when the merchant initiated the refund for Square to process, in ISO 8601 format. | [optional] 
**processed_at** | **String** | The time when Square processed the refund on behalf of the merchant, in ISO 8601 format. | [optional] 
**payment_id** | **String** | A Square-issued ID associated with the refund. For single-tender refunds, payment_id is the ID of the original payment ID. For split-tender refunds, payment_id is the ID of the original tender. For exchange-based refunds (is_exchange &#x3D;&#x3D; true), payment_id is the ID of the original payment ID even if the payment includes other tenders. | [optional] 
**merchant_id** | **String** |  | [optional] 
**is_exchange** | **Boolean** | Indicates whether or not the refund is associated with an exchange. If is_exchange is true, the refund reflects the value of goods returned in the exchange not the total money refunded. | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `FULL` (value: `"FULL"`)

* `PARTIAL` (value: `"PARTIAL"`)




