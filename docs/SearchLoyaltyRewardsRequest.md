# SquareConnect.SearchLoyaltyRewardsRequest

### Description
**Note: This model is in beta.**

A request to search for loyalty rewards.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**query** | [**SearchLoyaltyRewardsRequestLoyaltyRewardQuery**](SearchLoyaltyRewardsRequestLoyaltyRewardQuery.md) | The search criteria for the request.  If empty, the endpoint retrieves all loyalty rewards in the loyalty program. | [optional] 
**limit** | **Number** | The maximum number of results to return in the response. | [optional] 
**cursor** | **String** | A pagination cursor returned by a previous call to  this endpoint. Provide this to retrieve the next set of  results for the original query. For more information,  see [Pagination](https://developer.squareup.com/docs/docs/basics/api101/pagination). | [optional] 


