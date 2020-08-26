# SquareConnect.ShiftFilter

### Description

Defines a filter used in a search for `Shift` records. `AND` logic is used by Square's servers to apply each filter property specified.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location_ids** | **[String]** | Fetch shifts for the specified location. | 
**employee_ids** | **[String]** | Fetch shifts for the specified employees. DEPRECATED at version 2020-08-26. Use &#x60;team_member_ids&#x60; instead | [optional] [deprecated]
**status** | **String** | Fetch a &#x60;Shift&#x60; instance by &#x60;Shift.status&#x60;. See [ShiftFilterStatus](#type-shiftfilterstatus) for possible values | [optional] 
**start** | [**TimeRange**](TimeRange.md) | Fetch &#x60;Shift&#x60;s that start in the time range - Inclusive. | [optional] 
**end** | [**TimeRange**](TimeRange.md) | Fetch the &#x60;Shift&#x60;s that end in the time range - Inclusive. | [optional] 
**workday** | [**ShiftWorkday**](ShiftWorkday.md) | Fetch the &#x60;Shift&#x60;s based on workday date range. | [optional] 
**team_member_ids** | **[String]** | Fetch shifts for the specified team members. Replaced &#x60;employee_ids&#x60; at version \&quot;2020-08-26\&quot; | 


