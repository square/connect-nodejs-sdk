# SquareConnect.V1Timecard

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The timecard&#39;s unique ID. | [optional] 
**employee_id** | **String** | The ID of the employee the timecard is associated with. | 
**deleted** | **Boolean** | If true, the timecard was deleted by the merchant, and it is no longer valid. | [optional] 
**clockin_time** | **String** | The clock-in time for the timecard, in ISO 8601 format. | [optional] 
**clockout_time** | **String** | The clock-out time for the timecard, in ISO 8601 format. Provide this value only if importing timecard information from another system. | [optional] 
**clockin_location_id** | **String** | The ID of the location the employee clocked in from. We strongly reccomend providing a clockin_location_id. Square uses the clockin_location_id to determine a timecard���s timezone and overtime rules. | [optional] 
**clockout_location_id** | **String** | The ID of the location the employee clocked out from. Provide this value only if importing timecard information from another system. | [optional] 
**created_at** | **String** | The time when the timecard was created, in ISO 8601 format. | [optional] 
**updated_at** | **String** | The time when the timecard was most recently updated, in ISO 8601 format. | [optional] 
**regular_seconds_worked** | **Number** | The total number of regular (non-overtime) seconds worked in the timecard. | [optional] 
**overtime_seconds_worked** | **Number** | The total number of overtime seconds worked in the timecard. | [optional] 
**doubletime_seconds_worked** | **Number** | The total number of doubletime seconds worked in the timecard. | [optional] 


