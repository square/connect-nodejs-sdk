# SquareConnect.CreateOrderRequestModifier

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**catalogObjectId** | **String** | The catalog object ID of a [CatalogModifier](#type-catalogmodifier). | [optional] 
**name** | **String** | Only used for ad hoc modifiers. The name of the modifier. &#x60;name&#x60; cannot exceed 255 characters.  Do not provide a value for &#x60;name&#x60; if you provide a value for &#x60;catalog_object_id&#x60;. | [optional] 
**basePriceMoney** | [**Money**](Money.md) | Only used for ad hoc modifiers. The base price for the modifier.  Do not provide a value for &#x60;base_price_money&#x60; if you provide a value for &#x60;catalog_object_id&#x60;. | [optional] 


