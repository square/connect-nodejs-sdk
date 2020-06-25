# SquareConnect.TeamMember

### Description

A record representing an individual team member for a business.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The unique ID for the team member. | [optional] 
**reference_id** | **String** | A second ID used to associate the team member with an entity in another system. | [optional] 
**is_owner** | **Boolean** | Whether the team member is the owner of the Square account. | [optional] 
**status** | **String** | Describes the status of the team member. See [TeamMemberStatus](#type-teammemberstatus) for possible values | [optional] 
**given_name** | **String** | The given (i.e., first) name associated with the team member. | [optional] 
**family_name** | **String** | The family (i.e., last) name associated with the team member. | [optional] 
**email_address** | **String** | The email address associated with the team member. | [optional] 
**phone_number** | **String** | The team member&#39;s phone number in E.164 format. Examples: +14155552671 - the country code is 1 for US +551155256325 - the country code is 55 for BR | [optional] 
**created_at** | **String** | The timestamp in RFC 3339 format describing when the team member was created. Ex: \&quot;2018-10-04T04:00:00-07:00\&quot; or \&quot;2019-02-05T12:00:00Z\&quot; | [optional] 
**updated_at** | **String** | The timestamp in RFC 3339 format describing when the team member was last updated. Ex: \&quot;2018-10-04T04:00:00-07:00\&quot; or \&quot;2019-02-05T12:00:00Z\&quot; | [optional] 
**assigned_locations** | [**TeamMemberAssignedLocations**](TeamMemberAssignedLocations.md) | Describes the team member&#39;s assigned locations. | [optional] 


