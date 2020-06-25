# SquareConnect.WageSetting

### Description

An object representing a team member's wage information.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**team_member_id** | **String** | The unique ID of the &#x60;TeamMember&#x60; whom this wage setting describes. | [optional] 
**job_assignments** | [**[JobAssignment]**](JobAssignment.md) | &lt;b&gt;Required&lt;/b&gt; The ordered list of jobs that the team member is assigned to. The first job assignment is considered the team member&#39;s \&quot;Primary Job\&quot;. &lt;br&gt; &lt;b&gt;Min Length 1    Max Length 12&lt;/b&gt; | [optional] 
**is_overtime_exempt** | **Boolean** | Whether the team member is exempt from the overtime rules of the seller country. | [optional] 
**version** | **Number** | Used for resolving concurrency issues; request will fail if version provided does not match server version at time of request. If not provided, Square executes a blind write, potentially overwriting data from another write. Read about [optimistic concurrency](https://developer.squareup.com/docs/docs/working-with-apis/optimistic-concurrency) in Square APIs for more information. | [optional] 
**created_at** | **String** | The timestamp in RFC 3339 format describing when the wage setting object was created. Ex: \&quot;2018-10-04T04:00:00-07:00\&quot; or \&quot;2019-02-05T12:00:00Z\&quot; | [optional] 
**updated_at** | **String** | The timestamp in RFC 3339 format describing when the wage setting object was last updated. Ex: \&quot;2018-10-04T04:00:00-07:00\&quot; or \&quot;2019-02-05T12:00:00Z\&quot; | [optional] 


