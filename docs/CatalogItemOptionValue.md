# SquareConnect.CatalogItemOptionValue

### Description
**Note: This model is in beta.**

An enumerated value that can link a `CatalogItemVariation` to an item option as one of its item option values.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**item_option_id** | **String** | Unique ID of the associated item option. | [optional] 
**name** | **String** | Name of this item option value. This is a searchable attribute for use in applicable query filters. | [optional] 
**description** | **String** | A human-readable description for the option value. This is a searchable attribute for use in applicable query filters. | [optional] 
**color** | **String** | The HTML-supported hex color for the item option (e.g., \&quot;#ff8d4e85\&quot;). Only displayed if &#x60;show_colors&#x60; is enabled on the parent &#x60;ItemOption&#x60;. When left unset, &#x60;color&#x60; defaults to white (\&quot;#ffffff\&quot;) when &#x60;show_colors&#x60; is enabled on the parent &#x60;ItemOption&#x60;. | [optional] 
**ordinal** | **Number** | Determines where this option value appears in a list of option values. | [optional] 
**item_variation_count** | **Number** | The number of &#x60;CatalogItemVariation&#x60;s that currently use this item option value. Present only if &#x60;retrieve_counts&#x60; was specified on the request used to retrieve the parent item option of this value. | [optional] 


