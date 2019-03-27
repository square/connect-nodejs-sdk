# SquareConnect.WorkweekConfig

### Description

Sets the Day of the week and hour of the day that a business starts a  work week. Used for the calculation of overtime pay.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | UUID for this object | [optional] 
**start_of_week** | **String** | The day of the week on which a business week cuts over for compensation purposes. See [Weekday](#type-weekday) for possible values | 
**start_of_day_local_time** | **String** | The local time at which a business week cuts over. Represented as a string in &#x60;HH:MM&#x60; format (&#x60;HH:MM:SS&#x60; is also accepted, but seconds are truncated). | 
**version** | **Number** | Used for resolving concurrency issues; request will fail if version provided does not match server version at time of request. If not provided, Square executes a blind write; potentially overwriting data from another write. | [optional] 
**created_at** | **String** | A read-only timestamp in RFC 3339 format; presented in UTC | [optional] 
**updated_at** | **String** | A read-only timestamp in RFC 3339 format; presented in UTC | [optional] 


<a name="StartOfWeekEnum"></a>
## Enum: StartOfWeekEnum


* `MON` (value: `"MON"`)

* `TUE` (value: `"TUE"`)

* `WED` (value: `"WED"`)

* `THU` (value: `"THU"`)

* `FRI` (value: `"FRI"`)

* `SAT` (value: `"SAT"`)

* `SUN` (value: `"SUN"`)




