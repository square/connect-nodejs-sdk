# SquareConnect.LoyaltyEventDeleteReward

### Description
**Note: This model is in beta.**

Provides metadata when the event `type` is `DELETE_REWARD`.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**loyalty_program_id** | **String** | The ID of the &#x60;loyalty program&#x60;. | 
**reward_id** | **String** | The ID of the deleted &#x60;loyalty reward&#x60;. This field is returned only if the event source is &#x60;LOYALTY_API&#x60;. | [optional] 
**points** | **Number** | The number of points returned to the loyalty account. | 


