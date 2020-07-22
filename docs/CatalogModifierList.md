# SquareConnect.CatalogModifierList

### Description

A list of modifiers applicable to items at the time of sale.  For example, a \"Condiments\" modifier list applicable to a \"Hot Dog\" item may contain \"Ketchup\", \"Mustard\", and \"Relish\" modifiers. Use the `selection_type` field to specify whether or not multiple selections from the modifier list are allowed.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name for the &#x60;CatalogModifierList&#x60; instance. This is a searchable attribute for use in applicable query filters, and its value length is of Unicode code points. | [optional] 
**ordinal** | **Number** | Determines where this modifier list appears in a list of &#x60;CatalogModifierList&#x60; values. | [optional] 
**selection_type** | **String** | Indicates whether multiple options from the modifier list can be applied to a single &#x60;CatalogItem&#x60;. See [CatalogModifierListSelectionType](#type-catalogmodifierlistselectiontype) for possible values | [optional] 
**modifiers** | [**[CatalogObject]**](CatalogObject.md) | The options included in the &#x60;CatalogModifierList&#x60;. You must include at least one &#x60;CatalogModifier&#x60;. Each CatalogObject must have type &#x60;MODIFIER&#x60; and contain &#x60;CatalogModifier&#x60; data. | [optional] 


