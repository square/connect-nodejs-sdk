# SquareConnect.LoyaltyAccount

### Description
**Note: This model is in beta.**

Describes a loyalty account. For more information, see  [Loyalty Overview](/docs/loyalty/overview).

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The Square-assigned ID of the loyalty account. | [optional] 
**mappings** | [**[LoyaltyAccountMapping]**](LoyaltyAccountMapping.md) | The list of mappings that the account is associated with.  Currently, a buyer can only be mapped to a loyalty account using  a phone number. Therefore, the list can only have one mapping. | 
**program_id** | **String** | The Square-assigned ID of the &#x60;loyalty program&#x60; to which the account belongs. | 
**balance** | **Number** | The available point balance in the loyalty account. | [optional] 
**lifetime_points** | **Number** | The total points accrued during the lifetime of the account. | [optional] 
**customer_id** | **String** | The Square-assigned ID of the &#x60;customer&#x60; that is associated with the account. | [optional] 
**enrolled_at** | **String** | The timestamp when enrollment occurred, in RFC 3339 format. | [optional] 
**created_at** | **String** | The timestamp when the loyalty account was created, in RFC 3339 format. | [optional] 
**updated_at** | **String** | The timestamp when the loyalty account was last updated, in RFC 3339 format. | [optional] 


