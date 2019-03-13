# SquareConnect.ShiftWorkday

### Description

A `Shift` search query filter parameter that sets a range of days that  a `Shift` must start or end in before passing the filter condition.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date_range** | [**DateRange**](DateRange.md) | Dates for fetching the shifts | [optional] 
**match_shifts_by** | **String** | The strategy on which the dates are applied. | [optional] 
**default_timezone** | **String** | Location-specific timezones convert workdays to datetime filters. Every location included in the query must have a timezone, or this field must be provided as a fallback. Format: the IANA timezone database identifier for the relevant timezone. | [optional] 


<a name="MatchShiftsByEnum"></a>
## Enum: MatchShiftsByEnum


* `START_AT` (value: `"START_AT"`)

* `END_AT` (value: `"END_AT"`)

* `INTERSECTION` (value: `"INTERSECTION"`)




