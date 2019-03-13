# SquareConnect.V1ListCashDrawerShiftsRequest

### Description



## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**order** | **String** | The order in which cash drawer shifts are listed in the response, based on their created_at field. Default value: ASC See [SortOrder](#type-sortorder) for possible values | [optional] 
**begin_time** | **String** | The beginning of the requested reporting period, in ISO 8601 format. Default value: The current time minus 90 days. | [optional] 
**end_time** | **String** | The beginning of the requested reporting period, in ISO 8601 format. Default value: The current time. | [optional] 


<a name="OrderEnum"></a>
## Enum: OrderEnum


* `DESC` (value: `"DESC"`)

* `ASC` (value: `"ASC"`)




