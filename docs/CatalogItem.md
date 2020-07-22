# SquareConnect.CatalogItem

### Description

An [CatalogObject](#type-CatalogObject) instance of the `ITEM` type, also referred to as an item, in the catalog.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The item&#39;s name. This is a searchable attribute for use in applicable query filters, its value must not be empty, and the length is of Unicode code points. | [optional] 
**description** | **String** | The item&#39;s description. This is a searchable attribute for use in applicable query filters, and its value length is of Unicode code points. | [optional] 
**abbreviation** | **String** | The text of the item&#39;s display label in the Square Point of Sale app. Only up to the first five characters of the string are used. This attribute is searchable, and its value length is of Unicode code points. | [optional] 
**label_color** | **String** | The color of the item&#39;s display label in the Square Point of Sale app. This must be a valid hex color code. | [optional] 
**available_online** | **Boolean** | If &#x60;true&#x60;, the item can be added to shipping orders from the merchant&#39;s online store. | [optional] 
**available_for_pickup** | **Boolean** | If &#x60;true&#x60;, the item can be added to pickup orders from the merchant&#39;s online store. | [optional] 
**available_electronically** | **Boolean** | If &#x60;true&#x60;, the item can be added to electronically fulfilled orders from the merchant&#39;s online store. | [optional] 
**category_id** | **String** | The ID of the item&#39;s category, if any. | [optional] 
**tax_ids** | **[String]** | A set of IDs indicating the taxes enabled for this item. When updating an item, any taxes listed here will be added to the item. Taxes may also be added to or deleted from an item using &#x60;UpdateItemTaxes&#x60;. | [optional] 
**modifier_list_info** | [**[CatalogItemModifierListInfo]**](CatalogItemModifierListInfo.md) | A set of &#x60;CatalogItemModifierListInfo&#x60; objects representing the modifier lists that apply to this item, along with the overrides and min and max limits that are specific to this item. Modifier lists may also be added to or deleted from an item using &#x60;UpdateItemModifierLists&#x60;. | [optional] 
**variations** | [**[CatalogObject]**](CatalogObject.md) | A list of CatalogObjects containing the &#x60;CatalogItemVariation&#x60;s for this item. | [optional] 
**product_type** | **String** | The product type of the item. May not be changed once an item has been created.  Only items of product type &#x60;REGULAR&#x60; or &#x60;APPOINTMENTS_SERVICE&#x60; may be created by this API; items with other product types are read-only. See [CatalogItemProductType](#type-catalogitemproducttype) for possible values | [optional] 
**skip_modifier_screen** | **Boolean** | If &#x60;false&#x60;, the Square Point of Sale app will present the &#x60;CatalogItem&#x60;&#39;s details screen immediately, allowing the merchant to choose &#x60;CatalogModifier&#x60;s before adding the item to the cart.  This is the default behavior.  If &#x60;true&#x60;, the Square Point of Sale app will immediately add the item to the cart with the pre-selected modifiers, and merchants can edit modifiers by drilling down onto the item&#39;s details.  Third-party clients are encouraged to implement similar behaviors. | [optional] 
**item_options** | [**[CatalogItemOptionForItem]**](CatalogItemOptionForItem.md) | List of item options IDs for this item. Used to manage and group item variations in a specified order.  Maximum: 6 item options. | [optional] [beta]


