# SquareConnect.SearchTeamMembersFilter

### Description

Represents a filter used in a search for `TeamMember` objects. `AND` logic is applied between the individual fields, and `OR` logic is applied within list-based fields. For example, setting this filter value, ``` filter = (locations_ids = [\"A\", \"B\"], status = ACTIVE) ``` returns only active team members assigned to either location \"A\" or \"B\".

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location_ids** | **[String]** | When present, filter by team members assigned to the specified locations. When empty, include team members assigned to any location. | [optional] 
**status** | **String** | When present, filter by team members who match the given status. When empty, include team members of all statuses. See [TeamMemberStatus](#type-teammemberstatus) for possible values | [optional] 


