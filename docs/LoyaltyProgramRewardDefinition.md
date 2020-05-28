# SquareConnect.LoyaltyProgramRewardDefinition

### Description
**Note: This model is in beta.**

Provides details about the loyalty program reward tier definition.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scope** | **String** | Indicates the scope of the reward tier. See [LoyaltyProgramRewardDefinitionScope](#type-loyaltyprogramrewarddefinitionscope) for possible values | 
**discount_type** | **String** | The type of discount the reward tier offers. See [LoyaltyProgramRewardDefinitionType](#type-loyaltyprogramrewarddefinitiontype) for possible values | 
**percentage_discount** | **String** | Present if &#x60;discount_type&#x60; is &#x60;FIXED_PERCENTAGE&#x60;. For example, a 7.25% off discount will be represented as \&quot;7.25\&quot;. | [optional] 
**catalog_object_ids** | **[String]** | A list of &#x60;catalog object&#x60; ids to which this reward can be applied. They are either all item-variation ids or category ids, depending on the &#x60;type&#x60; field. | [optional] 
**fixed_discount_money** | [**Money**](Money.md) | Present if &#x60;discount_type&#x60; is &#x60;FIXED_AMOUNT&#x60;. For example, $5 off. | [optional] 
**max_discount_money** | [**Money**](Money.md) | When &#x60;discount_type&#x60; is &#x60;FIXED_PERCENTAGE&#x60;, the maximum discount amount that can be applied. | [optional] 


