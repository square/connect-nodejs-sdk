# SquareConnect.CatalogTax

### Description

A tax applicable to an item.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The tax&#39;s name. This is a searchable attribute for use in applicable query filters, and its value length is of Unicode code points. | [optional] 
**calculation_phase** | **String** | Whether the tax is calculated based on a payment&#39;s subtotal or total. See [TaxCalculationPhase](#type-taxcalculationphase) for possible values | [optional] 
**inclusion_type** | **String** | Whether the tax is &#x60;ADDITIVE&#x60; or &#x60;INCLUSIVE&#x60;. See [TaxInclusionType](#type-taxinclusiontype) for possible values | [optional] 
**percentage** | **String** | The percentage of the tax in decimal form, using a &#x60;&#39;.&#39;&#x60; as the decimal separator and without a &#x60;&#39;%&#39;&#x60; sign. A value of &#x60;7.5&#x60; corresponds to 7.5%. | [optional] 
**applies_to_custom_amounts** | **Boolean** | If &#x60;true&#x60;, the fee applies to custom amounts entered into the Square Point of Sale app that are not associated with a particular &#x60;CatalogItem&#x60;. | [optional] 
**enabled** | **Boolean** | If &#x60;true&#x60;, the tax will be shown as enabled in the Square Point of Sale app. | [optional] 


