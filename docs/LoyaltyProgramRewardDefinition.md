# SquareConnect.LoyaltyProgramRewardDefinition

### Description
**Note: This model is in beta.**

Provides details about the reward tier discount. DEPRECATED at version 2020-12-16. Discount details are now defined using a catalog pricing rule and other catalog objects. For more information, see [Get discount details for the reward](/docs/loyalty-api/overview#get-discount-details).

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scope** | **String** | Indicates the scope of the reward tier. DEPRECATED at version 2020-12-16. You can find this information in the &#x60;discount_target_scope&#x60; field of the &#x60;PRICING_RULE&#x60; catalog object and the &#x60;product_set_data&#x60; field of the &#x60;PRODUCT_SET&#x60; catalog object referenced by the pricing rule. For &#x60;ORDER&#x60; scopes, the target scope is &#x60;WHOLE_PURCHASE&#x60; and &#x60;all_products&#x60; is true. For &#x60;ITEM_VARIATION&#x60; and &#x60;CATEGORY&#x60; scopes, the target scope is &#x60;LINE_ITEM&#x60; and &#x60;product_ids_any&#x60; is a list of catalog object IDs of the given type. See [LoyaltyProgramRewardDefinitionScope](#type-loyaltyprogramrewarddefinitionscope) for possible values | 
**discount_type** | **String** | The type of discount the reward tier offers. DEPRECATED at version 2020-12-16. You can find this information in the &#x60;discount_data.discount_type&#x60; field of the &#x60;DISCOUNT&#x60; catalog object referenced by the pricing rule. See [LoyaltyProgramRewardDefinitionType](#type-loyaltyprogramrewarddefinitiontype) for possible values | 
**percentage_discount** | **String** | The fixed percentage of the discount. Present if &#x60;discount_type&#x60; is &#x60;FIXED_PERCENTAGE&#x60;. For example, a 7.25% off discount will be represented as \&quot;7.25\&quot;. DEPRECATED at version 2020-12-16. You can find this information in the &#x60;discount_data.percentage&#x60; field of the &#x60;DISCOUNT&#x60; catalog object referenced by the pricing rule. | [optional] 
**catalog_object_ids** | **[String]** | The list of catalog objects to which this reward can be applied. They are either all item-variation ids or category ids, depending on the &#x60;type&#x60; field. DEPRECATED at version 2020-12-16. You can find this information in the &#x60;product_set_data.product_ids_any&#x60; field of the &#x60;PRODUCT_SET&#x60; catalog object referenced by the pricing rule. | [optional] 
**fixed_discount_money** | [**Money**](Money.md) | The amount of the discount. Present if &#x60;discount_type&#x60; is &#x60;FIXED_AMOUNT&#x60;. For example, $5 off. DEPRECATED at version 2020-12-16. You can find this information in the &#x60;discount_data.amount_money&#x60; field of the  &#x60;DISCOUNT&#x60; catalog object referenced by the pricing rule. | [optional] 
**max_discount_money** | [**Money**](Money.md) | When &#x60;discount_type&#x60; is &#x60;FIXED_PERCENTAGE&#x60;, the maximum discount amount that can be applied. DEPRECATED at version 2020-12-16. You can find this information in the &#x60;discount_data.maximum_amount_money&#x60; field of the &#x60;DISCOUNT&#x60; catalog object referenced by the the pricing rule. | [optional] 


