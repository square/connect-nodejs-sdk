# SquareConnect.CatalogModifierList

### Description

A modifier list in the Catalog object model. A [CatalogModifierList](#type-catalogmodifierlist) contains [Modifier](#type-catalogmodifier)s that can be applied to a [CatalogItem](#type-catalogitem) at the time of sale.  For example, a modifier list \"Condiments\" that would apply to a \"Hot Dog\" [CatalogItem](#type-catalogitem) might contain [CatalogModifier](#type-catalogmodifier)s \"Ketchup\", \"Mustard\", and \"Relish\". The `selection_type` field specifies whether or not multiple selections from the modifier list are allowed.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The &#x60;CatalogModifierList&#x60;&#39;s name. Searchable. This field has max length of 255 Unicode code points. | [optional] 
**selection_type** | **String** | Indicates whether multiple options from the &#x60;CatalogModifierList&#x60; can be applied to a single &#x60;CatalogItem&#x60;. See [CatalogModifierListSelectionType](#type-catalogmodifierlistselectiontype) for possible values | [optional] 
**modifiers** | [**[CatalogObject]**](CatalogObject.md) | The options included in the &#x60;CatalogModifierList&#x60;. You must include at least one &#x60;CatalogModifier&#x60;. Each &#x60;CatalogObject&#x60; must have type &#x60;MODIFIER&#x60; and contain &#x60;CatalogModifier&#x60; data. | [optional] 


