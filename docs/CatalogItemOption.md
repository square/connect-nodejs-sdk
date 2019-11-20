# SquareConnect.CatalogItemOption

### Description
**Note: This model is in beta.**

A group of variations for a `CatalogItem`.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The item option&#39;s display name for the seller. Must be unique across all item options. Searchable. | [optional] 
**display_name** | **String** | The item option&#39;s display name for the customer. Searchable. | [optional] 
**description** | **String** | The item option&#39;s human-readable description. Displayed in the Square Point of Sale app for the seller and in the Online Store or on receipts for the buyer. | [optional] 
**show_colors** | **Boolean** | If true, display colors for entries in &#x60;values&#x60; when present. | [optional] 
**values** | [**[CatalogObject]**](CatalogObject.md) | A list of CatalogObjects containing the &#x60;CatalogItemOptionValue&#x60;s for this item. | [optional] 
**item_count** | **Number** | The number of &#x60;CatalogItem&#x60;s currently associated with this item option. Present only if the &#x60;include_counts&#x60; was specified in the request. Any count over 100 will be returned as &#x60;100&#x60;. | [optional] 


