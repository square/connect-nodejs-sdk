# SquareConnect.SearchTeamMembersResponse

### Description

Represents a response from a search request, containing a filtered list of `TeamMember` objects.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**team_members** | [**[TeamMember]**](TeamMember.md) | The filtered list of &#x60;TeamMember&#x60; objects. | [optional] 
**cursor** | **String** | The opaque cursor for fetching the next page. Read about [pagination](https://developer.squareup.com/docs/docs/working-with-apis/pagination) with Square APIs for more information. | [optional] 
**errors** | [**[Error]**](Error.md) | The errors that occurred during the request. | [optional] 


