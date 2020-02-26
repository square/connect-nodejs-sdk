# SquareConnect.V1CashDrawerEvent

### Description
**Note: This model is deprecated.**

V1CashDrawerEvent

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The event&#39;s unique ID. | [optional] 
**employee_id** | **String** | The ID of the employee that created the event. | [optional] 
**event_type** | **String** | The type of event that occurred. See [V1CashDrawerEventEventType](#type-v1cashdrawereventeventtype) for possible values | [optional] 
**event_money** | [**V1Money**](V1Money.md) | The amount of money that was added to or removed from the cash drawer because of the event. This value can be positive (for added money) or negative (for removed money). | [optional] 
**created_at** | **String** | The time when the event occurred, in ISO 8601 format. | [optional] 
**description** | **String** | An optional description of the event, entered by the employee that created it. | [optional] 


