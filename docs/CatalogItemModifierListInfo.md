# SquareConnect.CatalogItemModifierListInfo

### Description

Options to control the properties of a `CatalogModifierList` applied to a `CatalogItem` instance.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**modifier_list_id** | **String** | The ID of the &#x60;CatalogModifierList&#x60; controlled by this &#x60;CatalogModifierListInfo&#x60;. | 
**modifier_overrides** | [**[CatalogModifierOverride]**](CatalogModifierOverride.md) | A set of &#x60;CatalogModifierOverride&#x60; objects that override whether a given &#x60;CatalogModifier&#x60; is enabled by default. | [optional] 
**min_selected_modifiers** | **Number** | If 0 or larger, the smallest number of &#x60;CatalogModifier&#x60;s that must be selected from this &#x60;CatalogModifierList&#x60;. | [optional] 
**max_selected_modifiers** | **Number** | If 0 or larger, the largest number of &#x60;CatalogModifier&#x60;s that can be selected from this &#x60;CatalogModifierList&#x60;. | [optional] 
**enabled** | **Boolean** | If &#x60;true&#x60;, enable this &#x60;CatalogModifierList&#x60;. The default value is &#x60;true&#x60;. | [optional] 


