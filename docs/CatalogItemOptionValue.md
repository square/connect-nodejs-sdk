# SquareConnect.CatalogItemOptionValue

### Description

An enumerated value that can link a [CatalogItemVariation(#type-catalogitemvariation) to an item option as one of its item option values.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**item_option_id** | **String** | Unique ID of the associated item option. | [optional] 
**name** | **String** | Name of this item option value. Searchable. | [optional] 
**description** | **String** | The option value&#39;s human-readable description. | [optional] 
**color** | **String** | The HTML color for this value in the format #FFRRGGBB or #RRGGBB (e.g., \&quot;#ff8d4e85\&quot;). Only displayed if parent Item Option&#39;s &#x60;show_colors&#x60; flag is enabled. value. | [optional] 
**ordinal** | **Number** | Determines where this option value appears in a list of option values. | [optional] 
**item_variation_count** | **Number** | The number of [CatalogItemVariation(#type-catalogitemvariation)s that currently make use of this Item Option value. Present only if &#x60;retrieve_counts&#x60; was specified on the request used to retrieve the parent Item Option of this value.  Maximum: 100 counts. | [optional] 


