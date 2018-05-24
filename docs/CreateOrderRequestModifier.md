# SquareConnect.CreateOrderRequestModifier

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**catalogObjectId** | **String** | The catalog object ID of a [CatalogModifier](#type-catalogmodifier). | [optional] 
**name** | **String** | Only used for ad hoc modifiers. The name of the modifier. &#x60;name&#x60; cannot exceed 255 characters.  Do not provide a value for &#x60;name&#x60; if you provide a value for &#x60;catalog_object_id&#x60;. | [optional] 
**basePriceMoney** | [**Money**](Money.md) | The base price for the modifier.  &#x60;base_price_money&#x60; is required for ad hoc modifiers. If both &#x60;catalog_object_id&#x60; and &#x60;base_price_money&#x60; are set, &#x60;base_price_money&#x60; will override the predefined [CatalogModifier](#type-catalogmodifier) price. | [optional] 


