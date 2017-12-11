# SquareConnect.CatalogModifierList

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The [CatalogModifierList](#type-catalogmodifierlist)&#39;s name. Searchable. | 
**selectionType** | **String** | Indicates whether multiple options from the [CatalogModifierList](#type-catalogmodifierlist) can be applied to a single [CatalogItem](#type-catalogitem). See [CatalogModifierListSelectionType](#type-catalogmodifierlistselectiontype) for all possible values. | [optional] 
**modifiers** | [**[CatalogObject]**](CatalogObject.md) | The options included in the [CatalogModifierList](#type-catalogmodifierlist). You must include at least one [CatalogModifier](#type-catalogmodifier). Each [CatalogObject](#type-catalogobject) must have type &#x60;MODIFIER&#x60; and contain [CatalogModifier](#type-catalogmodifier) data. | [optional] 


<a name="SelectionTypeEnum"></a>
## Enum: SelectionTypeEnum


* `SINGLE` (value: `"SINGLE"`)

* `MULTIPLE` (value: `"MULTIPLE"`)




