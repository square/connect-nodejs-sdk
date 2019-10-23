# SquareConnect.CatalogItemOptionValue

### Description
**Note: This model is in beta.**

An enumerated value that can link a [CatalogItemVariation(#type-catalogitemvariation) to an item option as one of its item option values.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**item_option_id** | **String** | Unique ID of the associated item option. | [optional] 
**name** | **String** | Name of this item option value. Searchable. | [optional] 
**description** | **String** | The option value&#39;s human-readable description. | [optional] 
**color** | **String** | The HTML-supported hex color for the item option (e.g., \&quot;#ff8d4e85\&quot;). Only displayed if &#x60;show_colors&#x60; is enabled on the parent &#x60;ItemOption&#x60;. When left unset, &#x60;color&#x60; defaults to white (\&quot;#ffffff\&quot;) when &#x60;show_colors&#x60; is enabled on the parent &#x60;ItemOption&#x60;. | [optional] 
**ordinal** | **Number** | Determines where this option value appears in a list of option values. | [optional] 
**item_variation_count** | **Number** | The number of [CatalogItemVariation(#type-catalogitemvariation)s that currently make use of this Item Option value. Present only if &#x60;retrieve_counts&#x60; was specified on the request used to retrieve the parent Item Option of this value.  Maximum: 100 counts. | [optional] 


