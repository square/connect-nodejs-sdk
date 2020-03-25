# SquareConnect.CatalogCustomAttributeValue

### Description
**Note: This model is in beta.**

An instance of a custom attribute. Custom attributes can be defined and added to `ITEM` and `ITEM_VARIATION` type catalog objects. [Read more about custom attributes](/catalog-api/add-custom-attributes).

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name of the custom attribute. | [optional] 
**string_value** | **String** | The string value of the custom attribute.  Populated if &#x60;type&#x60; &#x3D; &#x60;STRING&#x60;. | [optional] 
**custom_attribute_definition_id** | **String** | __Read-only.__ The custom attribute definition this value belongs to. | [optional] 
**type** | **String** | __Read-only.__ A copy of type from the associated custom attribute definition. See [CatalogCustomAttributeDefinitionType](#type-catalogcustomattributedefinitiontype) for possible values | [optional] 
**number_value** | **String** | Populated if &#x60;type&#x60; &#x3D; &#x60;NUMBER&#x60;. Contains a string representation of a decimal number, using a &#x60;.&#x60; as the decimal separator. | [optional] 
**boolean_value** | **Boolean** | A &#x60;true&#x60; or &#x60;false&#x60; value. Populated if &#x60;type&#x60; &#x3D; &#x60;BOOLEAN&#x60;. | [optional] 
**selection_uid_values** | **[String]** | One or more choices from &#x60;allowed_selections&#x60;. Populated if &#x60;type&#x60; &#x3D; &#x60;SELECTION&#x60;. | [optional] 
**key** | **String** | __Read-only.__ A copy of key from the associated custom attribute definition. | [optional] 


