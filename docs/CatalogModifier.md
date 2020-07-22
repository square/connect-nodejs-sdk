# SquareConnect.CatalogModifier

### Description

A modifier applicable to items at the time of sale.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The modifier name.  This is a searchable attribute for use in applicable query filters, and its value length is of Unicode code points. | [optional] 
**price_money** | [**Money**](Money.md) | The modifier price. | [optional] 
**ordinal** | **Number** | Determines where this &#x60;CatalogModifier&#x60; appears in the &#x60;CatalogModifierList&#x60;. | [optional] 
**modifier_list_id** | **String** | The ID of the &#x60;CatalogModifierList&#x60; associated with this modifier. | [optional] 


