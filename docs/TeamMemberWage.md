# SquareConnect.TeamMemberWage

### Description

The hourly wage rate that a team member will earn on a `Shift` for doing the job specified by the `title` property of this object.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | UUID for this object. | [optional] 
**team_member_id** | **String** | The &#x60;Team Member&#x60; that this wage is assigned to. | [optional] 
**title** | **String** | The job title that this wage relates to. | [optional] 
**hourly_rate** | [**Money**](Money.md) | Can be a custom-set hourly wage or the calculated effective hourly wage based on annual wage and hours worked per week. | [optional] 


