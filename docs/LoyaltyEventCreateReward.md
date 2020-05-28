# SquareConnect.LoyaltyEventCreateReward

### Description
**Note: This model is in beta.**

Provides metadata when the event `type` is `CREATE_REWARD`.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**loyalty_program_id** | **String** | The ID of the &#x60;loyalty program&#x60;. | 
**reward_id** | **String** | The Square-assigned ID of the created &#x60;loyalty reward&#x60;. This field is returned only if the event source is &#x60;LOYALTY_API&#x60;. | [optional] 
**points** | **Number** | The loyalty points used to create the reward. | 


