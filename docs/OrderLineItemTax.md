# SquareConnect.OrderLineItemTax

### Description

Represents a tax that applies to one or more line items in an order.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**catalog_object_id** | **String** | The catalog object id referencing [CatalogTax](#type-catalogtax). | [optional] 
**name** | **String** | The tax&#39;s name. | [optional] 
**type** | **String** | Indicates the calculation method used to apply the tax.  See [OrderLineItemTaxType](#type-orderlineitemtaxtype) for possible values. | [optional] 
**percentage** | **String** | The percentage of the tax, as a string representation of a decimal number.  A value of &#x60;7.25&#x60; corresponds to a percentage of 7.25%. | [optional] 
**applied_money** | [**Money**](Money.md) | The amount of the money applied by the tax in an order. | [optional] 
**scope** | **String** | Indicates the level at which the tax applies. This field is set by the server. If set in a CreateOrder request, it will be ignored on write. See [OrderLineItemTaxScope](#type-orderlineitemtaxscope) for possible values. | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `UNKNOWN_TAX` (value: `"UNKNOWN_TAX"`)

* `ADDITIVE` (value: `"ADDITIVE"`)

* `INCLUSIVE` (value: `"INCLUSIVE"`)




<a name="ScopeEnum"></a>
## Enum: ScopeEnum


* `OTHER_TAX_SCOPE` (value: `"OTHER_TAX_SCOPE"`)

* `LINE_ITEM` (value: `"LINE_ITEM"`)

* `ORDER` (value: `"ORDER"`)




