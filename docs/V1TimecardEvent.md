# SquareConnect.V1TimecardEvent

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The event&#39;s unique ID. | [optional] 
**event_type** | **String** | The ID of the timecard to list events for. | [optional] 
**clockin_time** | **String** | The time the employee clocked in, in ISO 8601 format. | [optional] 
**clockout_time** | **String** | The time the employee clocked out, in ISO 8601 format. | [optional] 
**created_at** | **String** | The time when the event was created, in ISO 8601 format. | [optional] 


<a name="EventTypeEnum"></a>
## Enum: EventTypeEnum


* `API_CREATE` (value: `"API_CREATE"`)

* `API_EDIT` (value: `"API_EDIT"`)

* `API_DELETE` (value: `"API_DELETE"`)

* `REGISTER_CLOCKIN` (value: `"REGISTER_CLOCKIN"`)

* `REGISTER_CLOCKOUT` (value: `"REGISTER_CLOCKOUT"`)

* `DASHBOARD_SUPERVISOR_CLOSE` (value: `"DASHBOARD_SUPERVISOR_CLOSE"`)

* `DASHBOARD_EDIT` (value: `"DASHBOARD_EDIT"`)

* `DASHBOARD_DELETE` (value: `"DASHBOARD_DELETE"`)




