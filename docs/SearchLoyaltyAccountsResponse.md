# SquareConnect.SearchLoyaltyAccountsResponse

### Description
**Note: This model is in beta.**

A response that includes loyalty accounts that satisfy the search criteria.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**[Error]**](Error.md) | Any errors that occurred during the request. | [optional] 
**loyalty_accounts** | [**[LoyaltyAccount]**](LoyaltyAccount.md) | The loyalty accounts that met the search criteria,   in order of creation date. | [optional] 
**cursor** | **String** | The pagination cursor to use in a subsequent  request. If empty, this is the final response. For more information,  see [Pagination](https://developer.squareup.com/docs/docs/basics/api101/pagination). | [optional] 


