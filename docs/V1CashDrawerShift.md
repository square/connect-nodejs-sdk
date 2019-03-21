# SquareConnect.V1CashDrawerShift

### Description

V1CashDrawerShift

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The shift&#39;s unique ID. | [optional] 
**event_type** | **String** | The shift&#39;s current state. See [V1CashDrawerShiftEventType](#type-v1cashdrawershifteventtype) for possible values | [optional] 
**opened_at** | **String** | The time when the shift began, in ISO 8601 format. | [optional] 
**ended_at** | **String** | The time when the shift ended, in ISO 8601 format. | [optional] 
**closed_at** | **String** | The time when the shift was closed, in ISO 8601 format. | [optional] 
**employee_ids** | **[String]** | The IDs of all employees that were logged into Square Register at some point during the cash drawer shift. | [optional] 
**opening_employee_id** | **String** | The ID of the employee that started the cash drawer shift. | [optional] 
**ending_employee_id** | **String** | The ID of the employee that ended the cash drawer shift. | [optional] 
**closing_employee_id** | **String** | The ID of the employee that closed the cash drawer shift by auditing the cash drawer&#39;s contents. | [optional] 
**description** | **String** | The time when the timecard was created, in ISO 8601 format. | [optional] 
**starting_cash_money** | [**V1Money**](V1Money.md) | The amount of money in the cash drawer at the start of the shift. | [optional] 
**cash_payment_money** | [**V1Money**](V1Money.md) | The amount of money added to the cash drawer from cash payments. | [optional] 
**cash_refunds_money** | [**V1Money**](V1Money.md) | The amount of money removed from the cash drawer from cash refunds. This value is always negative or zero. | [optional] 
**cash_paid_in_money** | [**V1Money**](V1Money.md) | The amount of money added to the cash drawer for reasons other than cash payments. | [optional] 
**cash_paid_out_money** | [**V1Money**](V1Money.md) | The amount of money removed from the cash drawer for reasons other than cash refunds. | [optional] 
**expected_cash_money** | [**V1Money**](V1Money.md) | The amount of money that should be in the cash drawer at the end of the shift, based on the shift&#39;s other money amounts. | [optional] 
**closed_cash_money** | [**V1Money**](V1Money.md) | The amount of money found in the cash drawer at the end of the shift by an auditing employee. | [optional] 
**device** | [**Device**](Device.md) | The device running Square Register that was connected to the cash drawer. | [optional] 
**events** | [**[V1CashDrawerEvent]**](V1CashDrawerEvent.md) | All of the events (payments, refunds, and so on) that involved the cash drawer during the shift. | [optional] 


<a name="EventTypeEnum"></a>
## Enum: EventTypeEnum


* `OPEN` (value: `"OPEN"`)

* `ENDED` (value: `"ENDED"`)

* `CLOSED` (value: `"CLOSED"`)




