# SquareConnect.CatalogCustomAttributeDefinitionSelectionConfig

### Description
**Note: This model is in beta.**

Configuration associated with `SELECTION`-type custom attribute definitions.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_allowed_selections** | **Number** | The maximum number of selections that can be set. The maximum value for this attribute is 100. May be modified, but changing the value will not affect existing custom attribute values on objects. Clients need to handle Custom Attributes with more selected values than allowed by this limit. | [optional] 
**allowed_selections** | [**[CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection]**](CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection.md) | The set of valid &#x60;CatalogCustomAttributeSelections&#x60;. Up to a maximum of 100 selections can be defined. Can be modified. | [optional] 


