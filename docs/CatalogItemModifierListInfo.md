# SquareConnect.CatalogItemModifierListInfo

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**modifierListId** | **String** | The ID of the [CatalogModifierList](#type-catalogmodifierlist) controlled by this [CatalogModifierListInfo](#type-catalogmodifierlistinfo). | 
**modifierOverrides** | [**[CatalogModifierOverride]**](CatalogModifierOverride.md) | A set of [CatalogModifierOverride](#type-catalogmodifieroverride) objects that override whether a given [CatalogModifier](#type-catalogmodifier) is enabled by default. | [optional] 
**minSelectedModifiers** | **Number** | If zero or larger, the smallest number of [CatalogModifier](#type-catalogmodifier)s that must be selected from this [CatalogModifierList](#type-catalogmodifierlist). | [optional] 
**maxSelectedModifiers** | **Number** | If zero or larger, the largest number of [CatalogModifier](#type-catalogmodifier)s that can be selected from this [CatalogModifierList](#type-catalogmodifierlist). | [optional] 
**enabled** | **Boolean** | If &#x60;true&#x60;, enable this [CatalogModifierList](#type-catalogmodifierlist). | [optional] 


