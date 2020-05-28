# SquareConnect.LoyaltyEventRedeemReward

### Description
**Note: This model is in beta.**

Provides metadata when the event `type` is `REDEEM_REWARD`.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**loyalty_program_id** | **String** | The ID of the &#x60;loyalty program&#x60;. | 
**reward_id** | **String** | The ID of the redeemed &#x60;loyalty reward&#x60;. This field is returned only if the event source is &#x60;LOYALTY_API&#x60;. | [optional] 
**order_id** | **String** | The ID of the &#x60;order&#x60; that redeemed the reward. This field is returned only if the Orders API is used to process orders. | [optional] 


