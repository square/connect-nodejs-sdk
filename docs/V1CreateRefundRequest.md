# SquareConnect.V1CreateRefundRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payment_id** | **String** | The ID of the payment to refund. If you&#39;re creating a PARTIAL refund for a split tender payment, instead provide the id of the particular tender you want to refund. See Split Tender Payments for details. | 
**type** | **String** | TThe type of refund (FULL or PARTIAL). | 
**reason** | **String** | The reason for the refund. | 
**refunded_money** | [**V1Money**](V1Money.md) | The amount of money to refund. Required only for PARTIAL refunds. | [optional] 
**request_idempotence_key** | **String** | An optional key to ensure idempotence if you issue the same PARTIAL refund request more than once. | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `FULL` (value: `"FULL"`)

* `PARTIAL` (value: `"PARTIAL"`)




