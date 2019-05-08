# SquareConnect.OrderReturnDiscount

### Description

The line item discount being returned.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uid** | **String** | The return discount&#39;s Unique identifier, unique only within this order. | [optional] 
**source_discount_uid** | **String** | &#x60;uid&#x60; of the Discount from the Order which contains the original application of this discount. | [optional] 
**catalog_object_id** | **String** | The catalog object id referencing [CatalogDiscount](#type-catalogdiscount). | [optional] 
**name** | **String** | The discount&#39;s name. | [optional] 
**type** | **String** | The type of the discount. If it is created by API, it would be either &#x60;FIXED_PERCENTAGE&#x60; or &#x60;FIXED_AMOUNT&#x60;.  VARIABLE_* is not supported in API because the order is created at the time of sale and either percentage or amount has to be specified. See [OrderLineItemDiscountType](#type-orderlineitemdiscounttype) for possible values | [optional] 
**percentage** | **String** | The percentage of the tax, as a string representation of a decimal number. A value of &#x60;7.25&#x60; corresponds to a percentage of 7.25%.  The percentage won&#39;t be set for an amount-based discount. | [optional] 
**amount_money** | [**Money**](Money.md) | The total monetary amount of the applicable discount. If it is at order level, it is the value of the order level discount. If it is at line item level, it is the value of the line item level discount.  The amount_money won&#39;t be set for a percentage-based discount. | [optional] 
**applied_money** | [**Money**](Money.md) | The amount of discount actually applied to this line item. When an amount-based discount is at order-level, this value is different from &#x60;amount_money&#x60; because the discount is distributed across the line items. | [optional] 
**scope** | **String** | Indicates the level at which the discount applies. This field is set by the server. If set in a CreateOrder request, it will be ignored on write. See [OrderLineItemDiscountScope](#type-orderlineitemdiscountscope) for possible values | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `UNKNOWN_DISCOUNT` (value: `"UNKNOWN_DISCOUNT"`)

* `FIXED_PERCENTAGE` (value: `"FIXED_PERCENTAGE"`)

* `FIXED_AMOUNT` (value: `"FIXED_AMOUNT"`)

* `VARIABLE_PERCENTAGE` (value: `"VARIABLE_PERCENTAGE"`)

* `VARIABLE_AMOUNT` (value: `"VARIABLE_AMOUNT"`)




<a name="ScopeEnum"></a>
## Enum: ScopeEnum


* `OTHER_DISCOUNT_SCOPE` (value: `"OTHER_DISCOUNT_SCOPE"`)

* `LINE_ITEM` (value: `"LINE_ITEM"`)

* `ORDER` (value: `"ORDER"`)




