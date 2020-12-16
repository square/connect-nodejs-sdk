# SquareConnect.OrderLineItemPricingBlocklistsBlockedDiscount

### Description
**Note: This model is in beta.**

A discount to block from applying to a line item. The discount must be  identified by either `discount_uid` or `discount_catalog_object_id`, but not both.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uid** | **String** | Unique ID of the &#x60;BlockedDiscount&#x60; within the order. | [optional] 
**discount_uid** | **String** | The &#x60;uid&#x60; of the discount that should be blocked. Use this field to block  ad-hoc discounts. For catalog discounts use the &#x60;discount_catalog_object_id&#x60; field. | [optional] 
**discount_catalog_object_id** | **String** | The &#x60;catalog_object_id&#x60; of the discount that should be blocked.  Use this field to block catalog discounts. For ad-hoc discounts use the  &#x60;discount_uid&#x60; field. | [optional] 


