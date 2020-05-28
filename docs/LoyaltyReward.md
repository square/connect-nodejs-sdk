# SquareConnect.LoyaltyReward

### Description
**Note: This model is in beta.**



## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The Square-assigned ID of the loyalty reward. | [optional] 
**status** | **String** | The status of a loyalty reward. See [LoyaltyRewardStatus](#type-loyaltyrewardstatus) for possible values | [optional] 
**loyalty_account_id** | **String** | The Square-assigned ID of the &#x60;loyalty account&#x60; to which the reward belongs. | 
**reward_tier_id** | **String** | The Square-assigned ID of the &#x60;reward tier&#x60; used to create the reward. | 
**points** | **Number** | The number of loyalty points used for the reward. | [optional] 
**order_id** | **String** | The Square-assigned ID of the &#x60;order&#x60; to which the reward is attached. | [optional] 
**created_at** | **String** | The timestamp when the reward was created, in RFC 3339 format. | [optional] 
**updated_at** | **String** | The timestamp when the reward was last updated, in RFC 3339 format. | [optional] 
**redeemed_at** | **String** | The timestamp when the reward was redeemed, in RFC 3339 format. | [optional] 


