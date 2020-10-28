# SquareConnect.SearchLoyaltyAccountsRequestLoyaltyAccountQuery

### Description
**Note: This model is in beta.**

The search criteria for the loyalty accounts.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mappings** | [**[LoyaltyAccountMapping]**](LoyaltyAccountMapping.md) | The set of mappings to use in the loyalty account search.    This cannot be combined with &#x60;customer_ids&#x60;.    Max: 30 mappings | [optional] 
**customer_ids** | **[String]** | The set of customer IDs to use in the loyalty account search.    This cannot be combined with &#x60;mappings&#x60;.    Max: 30 customer IDs | [optional] 


