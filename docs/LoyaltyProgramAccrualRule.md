# SquareConnect.LoyaltyProgramAccrualRule

### Description
**Note: This model is in beta.**

Defines an accrual rule, which is how buyers can earn points.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accrual_type** | **String** | The type of the accrual rule that defines how buyers can earn points. See [LoyaltyProgramAccrualRuleType](#type-loyaltyprogramaccrualruletype) for possible values | 
**points** | **Number** | The number of points that  buyers earn based on the &#x60;accrual_type&#x60;. | [optional] 
**visit_minimum_amount_money** | [**Money**](Money.md) | When the accrual rule is visit-based (&#x60;accrual_type&#x60; is &#x60;VISIT&#x60;), this field indicates the minimum purchase required during the visit to  quality for the reward. | [optional] 
**spend_amount_money** | [**Money**](Money.md) | When the accrual rule is spend-based (&#x60;accrual_type&#x60; is &#x60;SPEND&#x60;), this field indicates the amount that a buyer must spend  to earn the points. For example, suppose the accrual rule is \&quot;earn 1 point for every $10 you spend\&quot;.  Then, buyer earns a point for every $10 they spend. If  buyer spends $105, the buyer earns 10 points. | [optional] 
**catalog_object_id** | **String** | The ID of the &#x60;catalog object&#x60; to purchase to earn the number of points defined by the rule. This is either an item variation or a category, depending on the type. This is defined on &#x60;ITEM_VARIATION&#x60; rules and &#x60;CATEGORY&#x60; rules. | [optional] 


