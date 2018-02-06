# SquareConnect.CatalogItem

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The item&#39;s name. Searchable. | [optional] 
**description** | **String** | The item&#39;s description. Searchable. | [optional] 
**abbreviation** | **String** | The text of the item&#39;s display label in the Square Point of Sale app. Only up to the first five characters of the string are used.  Searchable. | [optional] 
**labelColor** | **String** | The color of the item&#39;s display label in the Square Point of Sale app. | [optional] 
**availableOnline** | **Boolean** | If &#x60;true&#x60;, the item can be added to shipping orders from the merchant&#39;s online store. | [optional] 
**availableForPickup** | **Boolean** | If &#x60;true&#x60;, the item can be added to pickup orders from the merchant&#39;s online store. | [optional] 
**availableElectronically** | **Boolean** | If &#x60;true&#x60;, the item can be added to electronically fulfilled orders from the merchant&#39;s online store. | [optional] 
**categoryId** | **String** | The ID of the item&#39;s category, if any. | [optional] 
**taxIds** | **[String]** | A set of IDs indicating the [CatalogTax](#type-catalogtax)es that are enabled for this item. When updating an item, any taxes listed here will be added to the item. [CatalogTax](#type-catalogtax)es may also be added to or deleted from an item using &#x60;UpdateItemTaxes&#x60;. | [optional] 
**modifierListInfo** | [**[CatalogItemModifierListInfo]**](CatalogItemModifierListInfo.md) | A set of [CatalogItemModifierListInfo](#type-catalogitemmodifierlistinfo) objects representing the modifier lists that apply to this item, along with the overrides and min and max limits that are specific to this item. [CatalogModifierList](#type-catalogmodifierlist)s may also be added to or deleted from an item using &#x60;UpdateItemModifierLists&#x60;. | [optional] 
**imageUrl** | **String** | The URL of an image representing this item. | [optional] 
**variations** | [**[CatalogObject]**](CatalogObject.md) | A list of [CatalogObject](#type-catalogobject)s containing the [CatalogItemVariation](#type-catalogitemvariation)s for this item. | [optional] 
**productType** | **String** | The product type of the item. May not be changed once an item has been created.  Only items of product type &#x60;REGULAR&#x60; may be created by this API; items with other product types are read-only. See [CatalogItemProductType](#type-catalogitemproducttype) for all possible values. | [optional] 
**skipModifierScreen** | **Boolean** | If &#x60;false&#x60;, the Square Point of Sale app will present the [CatalogItem](#type-catalogitem)&#39;s details screen immediately, allowing the merchant to choose [CatalogModifier](#type-catalogmodifier)s before adding the item to the cart.  This is the default behavior.  If &#x60;true&#x60;, the Square Point of Sale app will immediately add the item to the cart with the pre-selected modifiers, and merchants can edit modifiers by drilling down onto the item&#39;s details.  Third-party clients are encouraged to implement similar behaviors. | [optional] 


<a name="ProductTypeEnum"></a>
## Enum: ProductTypeEnum


* `REGULAR` (value: `"REGULAR"`)

* `GIFT_CARD` (value: `"GIFT_CARD"`)

* `APPOINTMENTS_SERVICE` (value: `"APPOINTMENTS_SERVICE"`)

* `RETAIL_ITEM` (value: `"RETAIL_ITEM"`)

* `RESTAURANT_ITEM` (value: `"RESTAURANT_ITEM"`)




