# SquareConnect.CustomAttributeFilter

### Description
**Note: This model is in beta.**

Supported custom attribute query expressions for calling the [SearchCatalogItems](#endpoint-Catalog-SearchCatalogItems) endpoint to search for items or item variations.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_attribute_definition_id** | **String** | A query expression to filter items or item variations by matching their custom attributes&#39; &#x60;custom_attribute_definition_id&#x60; property value against the the specified id. | [optional] 
**key** | **String** | A query expression to filter items or item variations by matching their custom attributes&#39; &#x60;key&#x60; property value against the specified key. | [optional] 
**string_filter** | **String** | A query expression to filter items or item variations by matching their custom attributes&#39; &#x60;string_value&#x60;  property value against the specified text. | [optional] 
**number_filter** | [**Range**](Range.md) | A query expression to filter items or item variations with their custom attributes containing a number value within the specified range. | [optional] 
**selection_uids_filter** | **[String]** | A query expression to filter items or item variations by matching  their custom attributes&#39; &#x60;selection_uid_values&#x60; values against the specified selection uids. | [optional] 
**bool_filter** | **Boolean** | A query expression to filter items or item variations by matching their custom attributes&#39; &#x60;boolean_value&#x60; property values against the specified Boolean expression. | [optional] 


