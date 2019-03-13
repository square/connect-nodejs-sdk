# SquareConnect.CatalogDiscount

### Description

A discount in the Catalog object model.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The discount&#39;s name. Searchable. This field has max length of 255 Unicode code points. | [optional] 
**discount_type** | **String** | Indicates whether the discount is a fixed amount or percentage, or entered at the time of sale. See [CatalogDiscountType](#type-catalogdiscounttype) for all possible values. | [optional] 
**percentage** | **String** | The percentage of the discount as a string representation of a decimal number, using a &#x60;.&#x60; as the decimal separator and without a &#x60;%&#x60; sign. A value of &#x60;7.5&#x60; corresponds to &#x60;7.5%&#x60;. Specify a percentage of &#x60;0&#x60; if &#x60;discount_type&#x60; is &#x60;VARIABLE_PERCENTAGE&#x60;.  Do not include this field for amount-based or variable discounts. | [optional] 
**amount_money** | [**Money**](Money.md) | The amount of the discount. Specify an amount of &#x60;0&#x60; if &#x60;discount_type&#x60; is &#x60;VARIABLE_AMOUNT&#x60;.  Do not include this field for percentage-based or variable discounts. | [optional] 
**pin_required** | **Boolean** | Indicates whether a mobile staff member needs to enter their PIN to apply the discount to a payment in the Square Point of Sale app. | [optional] 
**label_color** | **String** | The color of the discount&#39;s display label in the Square Point of Sale app. This must be a valid hex color code. | [optional] 


<a name="DiscountTypeEnum"></a>
## Enum: DiscountTypeEnum


* `FIXED_PERCENTAGE` (value: `"FIXED_PERCENTAGE"`)

* `FIXED_AMOUNT` (value: `"FIXED_AMOUNT"`)

* `VARIABLE_PERCENTAGE` (value: `"VARIABLE_PERCENTAGE"`)

* `VARIABLE_AMOUNT` (value: `"VARIABLE_AMOUNT"`)




