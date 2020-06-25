# SquareConnect.CreateTeamMemberRequest

### Description

Represents a create request for a `TeamMember` object.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**idempotency_key** | **String** | A unique string that identifies this CreateTeamMember request. Keys can be any valid string but must be unique for every request. See [Idempotency keys](https://developer.squareup.com/docs/basics/api101/idempotency) for more information. &lt;br&gt; &lt;b&gt;Min Length 1    Max Length 45&lt;/b&gt; | [optional] 
**team_member** | [**TeamMember**](TeamMember.md) | &lt;b&gt;Required&lt;/b&gt; The data which will be used to create the &#x60;TeamMember&#x60; object. | [optional] 


