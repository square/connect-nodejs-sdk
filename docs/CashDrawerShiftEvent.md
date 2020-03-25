# SquareConnect.CashDrawerShiftEvent

### Description



## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The unique ID of the event. | [optional] 
**employee_id** | **String** | The ID of the employee that created the event. | [optional] 
**event_type** | **String** | The type of cash drawer shift event. See [CashDrawerEventType](#type-cashdrawereventtype) for possible values | [optional] 
**event_money** | [**Money**](Money.md) | The amount of money that was added to or removed from the cash drawer in the event. The amount can be positive (for added money), negative (for removed money), or zero (for other tender type payments). | [optional] 
**created_at** | **String** | The event time in ISO 8601 format. | [optional] 
**description** | **String** | An optional description of the event, entered by the employee that created the event. | [optional] 


