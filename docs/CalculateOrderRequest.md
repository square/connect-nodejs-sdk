# SquareConnect.CalculateOrderRequest

### Description
**Note: This model is in beta.**



## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**order** | [**Order**](Order.md) | The order to be calculated. Expects the entire order, not a sparse update. | 
**proposed_rewards** | [**[OrderReward]**](OrderReward.md) | Identifies one or more loyalty reward tiers to apply during order calculation. The discounts defined by the reward tiers are added to the order only to preview the effect of applying the specified reward(s). The reward(s) do not correspond to actual redemptions, that is, no &#x60;reward&#x60;s are created. Therefore, the reward &#x60;id&#x60;s are random strings used only to reference the reward tier. | [optional] 


