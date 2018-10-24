# SquareConnect.CreateOrderRequestTax

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**catalog_object_id** | **String** | Only used for catalog taxes. The catalog object ID of an existing [CatalogTax](#type-catalogtax).  Do not provide a value for this field if you provide values in other fields for an ad hoc tax. | [optional] 
**name** | **String** | Only used for ad hoc taxes. The tax&#39;s name.  Do not provide a value for this field if you set &#x60;catalog_object_id&#x60;. | [optional] 
**type** | **String** | Only used for ad hoc taxes. Indicates the calculation method used to apply the line item tax.  Default: &#x60;ADDITIVE&#x60;; See [OrderLineItemTaxType](#type-orderlineitemtaxtype) for possible values. | [optional] 
**percentage** | **String** | Only used for ad hoc taxes. The percentage of the tax, as a string representation of a decimal number.  A value of &#x60;7.25&#x60; corresponds to a percentage of 7.25%. This value range between 0.0 up to 100.0 | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `UNKNOWN_TAX` (value: `"UNKNOWN_TAX"`)

* `ADDITIVE` (value: `"ADDITIVE"`)

* `INCLUSIVE` (value: `"INCLUSIVE"`)




