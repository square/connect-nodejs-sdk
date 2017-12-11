# SquareConnect.V1CashDrawerShift

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The shift&#39;s unique ID. | [optional] 
**eventType** | **String** | The shift&#39;s current state. | [optional] 
**openedAt** | **String** | The time when the shift began, in ISO 8601 format. | [optional] 
**endedAt** | **Boolean** | The time when the shift ended, in ISO 8601 format. | [optional] 
**closedAt** | **String** | The time when the shift was closed, in ISO 8601 format. | [optional] 
**employeeIds** | **[String]** | The IDs of all employees that were logged into Square Register at some point during the cash drawer shift. | [optional] 
**openingEmployeeId** | **String** | The ID of the employee that started the cash drawer shift. | [optional] 
**endingEmployeeId** | **String** | The ID of the employee that ended the cash drawer shift. | [optional] 
**closingEmployeeId** | **String** | The ID of the employee that closed the cash drawer shift by auditing the cash drawer&#39;s contents. | [optional] 
**description** | **String** | The time when the timecard was created, in ISO 8601 format. | [optional] 
**startingCashMoney** | [**V1Money**](V1Money.md) | The amount of money in the cash drawer at the start of the shift. | [optional] 
**cashPaymentMoney** | [**V1Money**](V1Money.md) | The amount of money added to the cash drawer from cash payments. | [optional] 
**cashRefundsMoney** | [**V1Money**](V1Money.md) | The amount of money removed from the cash drawer from cash refunds. This value is always negative or zero. | [optional] 
**cashPaidInMoney** | [**V1Money**](V1Money.md) | The amount of money added to the cash drawer for reasons other than cash payments. | [optional] 
**cashPaidOutMoney** | [**V1Money**](V1Money.md) | The amount of money removed from the cash drawer for reasons other than cash refunds. | [optional] 
**expectedCashMoney** | [**V1Money**](V1Money.md) | The amount of money that should be in the cash drawer at the end of the shift, based on the shift&#39;s other money amounts. | [optional] 
**closedCashMoney** | [**V1Money**](V1Money.md) | The amount of money found in the cash drawer at the end of the shift by an auditing employee. | [optional] 
**device** | [**Device**](Device.md) | The device running Square Register that was connected to the cash drawer. | [optional] 
**events** | [**[V1CashDrawerEvent]**](V1CashDrawerEvent.md) | All of the events (payments, refunds, and so on) that involved the cash drawer during the shift. | [optional] 


<a name="EventTypeEnum"></a>
## Enum: EventTypeEnum


* `OPEN` (value: `"OPEN"`)

* `ENDED` (value: `"ENDED"`)

* `CLOSED` (value: `"CLOSED"`)




