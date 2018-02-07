# SquareConnect.V1SettlementEntry

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**paymentId** | **String** | The settlement&#39;s unique identifier. | [optional] 
**type** | **String** | The settlement&#39;s current status. | [optional] 
**amountMoney** | [**V1Money**](V1Money.md) | The total amount of money this entry contributes to the total settlement amount. | [optional] 
**feeMoney** | [**V1Money**](V1Money.md) | The amount of all Square fees associated with this settlement entry. This value is always negative or zero. | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `ADJUSTMENT` (value: `"ADJUSTMENT"`)

* `BALANCE_CHARGE` (value: `"BALANCE_CHARGE"`)

* `CHARGE` (value: `"CHARGE"`)

* `FREE_PROCESSING` (value: `"FREE_PROCESSING"`)

* `HOLD_ADJUSTMENT` (value: `"HOLD_ADJUSTMENT"`)

* `PAID_SERVICE_FEE` (value: `"PAID_SERVICE_FEE"`)

* `PAID_SERVICE_FEE_REFUND` (value: `"PAID_SERVICE_FEE_REFUND"`)

* `REDEMPTION_CODE` (value: `"REDEMPTION_CODE"`)

* `REFUND` (value: `"REFUND"`)

* `RETURNED_PAYOUT` (value: `"RETURNED_PAYOUT"`)

* `SQUARE_CAPITAL_ADVANCE` (value: `"SQUARE_CAPITAL_ADVANCE"`)

* `SQUARE_CAPITAL_PAYMENT` (value: `"SQUARE_CAPITAL_PAYMENT"`)

* `SQUARE_CAPITAL_REVERSED_PAYMENT` (value: `"SQUARE_CAPITAL_REVERSED_PAYMENT"`)

* `SUBSCRIPTION_FEE` (value: `"SUBSCRIPTION_FEE"`)

* `SUBSCRIPTION_FEE_REFUND` (value: `"SUBSCRIPTION_FEE_REFUND"`)

* `INCENTED_PAYMENT` (value: `"INCENTED_PAYMENT"`)

* `OTHER` (value: `"OTHER"`)

* `RETURNED_ACH_ENTRY` (value: `"RETURNED_ACH_ENTRY"`)

* `RETURNED_SQUARE_275` (value: `"RETURNED_SQUARE_275"`)

* `SQUARE_275` (value: `"SQUARE_275"`)




