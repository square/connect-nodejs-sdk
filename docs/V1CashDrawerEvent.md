# SquareConnect.V1CashDrawerEvent

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The event&#39;s unique ID. | [optional] 
**employeeId** | **String** | The ID of the employee that created the event. | [optional] 
**eventType** | **String** | The type of event that occurred. | [optional] 
**eventMoney** | [**V1Money**](V1Money.md) | The amount of money that was added to or removed from the cash drawer because of the event. This value can be positive (for added money) or negative (for removed money). | [optional] 
**createdAt** | **String** | The time when the event occurred, in ISO 8601 format. | [optional] 
**description** | **String** | An optional description of the event, entered by the employee that created it. | [optional] 


<a name="EventTypeEnum"></a>
## Enum: EventTypeEnum


* `NO_SALE` (value: `"NO_SALE"`)

* `CASH_TENDER_PAYMENT` (value: `"CASH_TENDER_PAYMENT"`)

* `OTHER_TENDER_PAYMENT` (value: `"OTHER_TENDER_PAYMENT"`)

* `CASH_TENDER_CANCELED_PAYMENT` (value: `"CASH_TENDER_CANCELED_PAYMENT"`)

* `OTHER_TENDER_CANCELED_PAYMENT` (value: `"OTHER_TENDER_CANCELED_PAYMENT"`)

* `CASH_TENDER_REFUND` (value: `"CASH_TENDER_REFUND"`)

* `OTHER_TENDER_REFUND` (value: `"OTHER_TENDER_REFUND"`)

* `PAID_IN` (value: `"PAID_IN"`)

* `PAID_OUT` (value: `"PAID_OUT"`)




