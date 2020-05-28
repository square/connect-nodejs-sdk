# SquareConnect.LoyaltyProgram

### Description
**Note: This model is in beta.**



## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The Square-assigned ID of the loyalty program. Updates to  the loyalty program do not modify the identifier. | 
**status** | **String** | Whether the program is currently active. See [LoyaltyProgramStatus](#type-loyaltyprogramstatus) for possible values | 
**reward_tiers** | [**[LoyaltyProgramRewardTier]**](LoyaltyProgramRewardTier.md) | The list of rewards for buyers, sorted by ascending points. | 
**expiration_policy** | [**LoyaltyProgramExpirationPolicy**](LoyaltyProgramExpirationPolicy.md) | If present, details for how points expire. | [optional] 
**terminology** | [**LoyaltyProgramTerminology**](LoyaltyProgramTerminology.md) | A cosmetic name for the “points” currency. | 
**location_ids** | **[String]** | The &#x60;locations&#x60; at which the program is active. | 
**created_at** | **String** | The timestamp when the program was created, in RFC 3339 format. | 
**updated_at** | **String** | The timestamp when the reward was last updated, in RFC 3339 format. | 
**accrual_rules** | [**[LoyaltyProgramAccrualRule]**](LoyaltyProgramAccrualRule.md) | Defines how buyers can earn loyalty points. | 


