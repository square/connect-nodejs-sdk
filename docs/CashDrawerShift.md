# SquareConnect.CashDrawerShift

### Description

This model gives the details of a cash drawer shift. The cash_payment_money, cash_refund_money, cash_paid_in_money, and cash_paid_out_money fields are all computed by summing their respective event types.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The shift unique ID. | [optional] 
**state** | **String** | The shift current state. See [CashDrawerShiftState](#type-cashdrawershiftstate) for possible values | [optional] 
**opened_at** | **String** | The time when the shift began, in ISO 8601 format. | [optional] 
**ended_at** | **String** | The time when the shift ended, in ISO 8601 format. | [optional] 
**closed_at** | **String** | The time when the shift was closed, in ISO 8601 format. | [optional] 
**employee_ids** | **[String]** | The IDs of all employees that were logged into Square Point of Sale at any point while the cash drawer shift was open. | [optional] 
**opening_employee_id** | **String** | The ID of the employee that started the cash drawer shift. | [optional] 
**ending_employee_id** | **String** | The ID of the employee that ended the cash drawer shift. | [optional] 
**closing_employee_id** | **String** | The ID of the employee that closed the cash drawer shift by auditing the cash drawer contents. | [optional] 
**description** | **String** | The free-form text description of a cash drawer by an employee. | [optional] 
**opened_cash_money** | [**Money**](Money.md) | The amount of money in the cash drawer at the start of the shift. The amount must be greater than or equal to zero. | [optional] 
**cash_payment_money** | [**Money**](Money.md) | The amount of money added to the cash drawer from cash payments. This is computed by summing all events with the types CASH_TENDER_PAYMENT and CASH_TENDER_CANCELED_PAYMENT. The amount is always greater than or equal to zero. | [optional] 
**cash_refunds_money** | [**Money**](Money.md) | The amount of money removed from the cash drawer from cash refunds. It is computed by summing the events of type CASH_TENDER_REFUND. The amount is always greater than or equal to zero. | [optional] 
**cash_paid_in_money** | [**Money**](Money.md) | The amount of money added to the cash drawer for reasons other than cash payments. It is computed by summing the events of type PAID_IN. The amount is always greater than or equal to zero. | [optional] 
**cash_paid_out_money** | [**Money**](Money.md) | The amount of money removed from the cash drawer for reasons other than cash refunds. It is computed by summing the events of type PAID_OUT. The amount is always greater than or equal to zero. | [optional] 
**expected_cash_money** | [**Money**](Money.md) | The amount of money that should be in the cash drawer at the end of the shift, based on the shift&#39;s other money amounts. This can be negative if employees have not correctly recorded all the events on the cash drawer. cash_paid_out_money is a summation of amounts from cash_payment_money (zero or positive), cash_refunds_money (zero or negative), cash_paid_in_money (zero or positive), and cash_paid_out_money (zero or negative) event types. | [optional] 
**closed_cash_money** | [**Money**](Money.md) | The amount of money found in the cash drawer at the end of the shift by an auditing employee. The amount should be positive. | [optional] 
**device** | [**CashDrawerDevice**](CashDrawerDevice.md) | The device running Square Point of Sale that was connected to the cash drawer. | [optional] 


