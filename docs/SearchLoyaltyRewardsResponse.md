# SquareConnect.SearchLoyaltyRewardsResponse

### Description
**Note: This model is in beta.**

A response that includes the loyalty rewards satisfying the search criteria.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**[Error]**](Error.md) | Any errors that occurred during the request. | [optional] 
**rewards** | [**[LoyaltyReward]**](LoyaltyReward.md) | The loyalty rewards that satisfy the search criteria. These are returned in descending order by &#x60;updated_at&#x60;. | [optional] 
**cursor** | **String** | The pagination cursor to be used in a subsequent  request. If empty, this is the final response. | [optional] 


