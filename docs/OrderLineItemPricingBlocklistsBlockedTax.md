# SquareConnect.OrderLineItemPricingBlocklistsBlockedTax

### Description
**Note: This model is in beta.**

A tax to block from applying to a line item. The tax must be  identified by either `tax_uid` or `tax_catalog_object_id`, but not both.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uid** | **String** | Unique ID of the &#x60;BlockedTax&#x60; within the order. | [optional] 
**tax_uid** | **String** | The &#x60;uid&#x60; of the tax that should be blocked. Use this field to block  ad-hoc taxes. For catalog taxes use the &#x60;tax_catalog_object_id&#x60; field. | [optional] 
**tax_catalog_object_id** | **String** | The &#x60;catalog_object_id&#x60; of the tax that should be blocked.  Use this field to block catalog taxes. For ad-hoc taxes use the  &#x60;tax_uid&#x60; field. | [optional] 


