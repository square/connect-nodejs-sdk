# SquareConnect.JobAssignment

### Description

An object describing a job that a team member is assigned to.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job_title** | **String** | The title of the job. | 
**pay_type** | **String** | The current pay type for the job assignment used to calculate the pay amount in a pay period. See [JobAssignmentPayType](#type-jobassignmentpaytype) for possible values | 
**hourly_rate** | [**Money**](Money.md) | The hourly pay rate of the job. | [optional] 
**annual_rate** | [**Money**](Money.md) | The total pay amount for a 12 month period on the job. Set if the job &#x60;PayType&#x60; is &#x60;SALARY&#x60;. | [optional] 
**weekly_hours** | **Number** | The planned hours per week for the job. Set if the job &#x60;PayType&#x60; is &#x60;SALARY&#x60;. | [optional] 


