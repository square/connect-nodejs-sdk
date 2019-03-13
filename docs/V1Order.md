# SquareConnect.V1Order

### Description

V1Order

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**[Error]**](Error.md) | Any errors that occurred during the request. | [optional] 
**id** | **String** | The order&#39;s unique identifier. | [optional] 
**buyer_email** | **String** | The email address of the order&#39;s buyer. | [optional] 
**recipient_name** | **String** | The name of the order&#39;s buyer. | [optional] 
**recipient_phone_number** | **String** | The phone number to use for the order&#39;s delivery. | [optional] 
**state** | **String** | Whether the tax is an ADDITIVE tax or an INCLUSIVE tax. See [V1OrderState](#type-v1orderstate) for possible values | [optional] 
**shipping_address** | [**Address**](Address.md) | The address to ship the order to. | [optional] 
**subtotal_money** | [**V1Money**](V1Money.md) | The amount of all items purchased in the order, before taxes and shipping. | [optional] 
**total_shipping_money** | [**V1Money**](V1Money.md) | The shipping cost for the order. | [optional] 
**total_tax_money** | [**V1Money**](V1Money.md) | The total of all taxes applied to the order. | [optional] 
**total_price_money** | [**V1Money**](V1Money.md) | The total cost of the order. | [optional] 
**total_discount_money** | [**V1Money**](V1Money.md) | The total of all discounts applied to the order. | [optional] 
**created_at** | **String** | The time when the order was created, in ISO 8601 format. | [optional] 
**updated_at** | **String** | The time when the order was last modified, in ISO 8601 format. | [optional] 
**expires_at** | **String** | The time when the order expires if no action is taken, in ISO 8601 format. | [optional] 
**payment_id** | **String** | The unique identifier of the payment associated with the order. | [optional] 
**buyer_note** | **String** | A note provided by the buyer when the order was created, if any. | [optional] 
**completed_note** | **String** | A note provided by the merchant when the order&#39;s state was set to COMPLETED, if any | [optional] 
**refunded_note** | **String** | A note provided by the merchant when the order&#39;s state was set to REFUNDED, if any. | [optional] 
**canceled_note** | **String** | A note provided by the merchant when the order&#39;s state was set to CANCELED, if any. | [optional] 
**tender** | [**V1Tender**](V1Tender.md) | The tender used to pay for the order. | [optional] 
**order_history** | [**[V1OrderHistoryEntry]**](V1OrderHistoryEntry.md) | The history of actions associated with the order. | [optional] 
**promo_code** | **String** | The promo code provided by the buyer, if any. | [optional] 
**btc_receive_address** | **String** | For Bitcoin transactions, the address that the buyer sent Bitcoin to. | [optional] 
**btc_price_satoshi** | **Number** | For Bitcoin transactions, the price of the buyer&#39;s order in satoshi (100 million satoshi equals 1 BTC). | [optional] 


<a name="StateEnum"></a>
## Enum: StateEnum


* `PENDING` (value: `"PENDING"`)

* `OPEN` (value: `"OPEN"`)

* `COMPLETED` (value: `"COMPLETED"`)

* `CANCELED` (value: `"CANCELED"`)

* `REFUNDED` (value: `"REFUNDED"`)

* `REJECTED` (value: `"REJECTED"`)




