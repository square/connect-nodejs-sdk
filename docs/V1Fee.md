# SquareConnect.V1Fee

### Description

V1Fee

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The fee&#39;s unique ID. | [optional] 
**name** | **String** | The fee&#39;s name. | [optional] 
**rate** | **String** | The rate of the fee, as a string representation of a decimal number. A value of 0.07 corresponds to a rate of 7%. | [optional] 
**calculation_phase** | **String** | Forthcoming See [V1FeeCalculationPhase](#type-v1feecalculationphase) for possible values | [optional] 
**adjustment_type** | **String** | The type of adjustment the fee applies to a payment. Currently, this value is TAX for all fees. See [V1FeeAdjustmentType](#type-v1feeadjustmenttype) for possible values | [optional] 
**applies_to_custom_amounts** | **Boolean** | If true, the fee applies to custom amounts entered into Square Register that are not associated with a particular item. | [optional] 
**enabled** | **Boolean** | If true, the fee is applied to all appropriate items. If false, the fee is not applied at all. | [optional] 
**inclusion_type** | **String** | Whether the fee is ADDITIVE or INCLUSIVE. See [V1FeeInclusionType](#type-v1feeinclusiontype) for possible values | [optional] 
**type** | **String** | In countries with multiple classifications for sales taxes, indicates which classification the fee falls under. Currently relevant only to Canadian merchants. See [V1FeeType](#type-v1feetype) for possible values | [optional] 
**v2_id** | **String** | The ID of the CatalogObject in the Connect v2 API. Objects that are shared across multiple locations share the same v2 ID. | [optional] 


<a name="CalculationPhaseEnum"></a>
## Enum: CalculationPhaseEnum


* `FEE_SUBTOTAL_PHASE` (value: `"FEE_SUBTOTAL_PHASE"`)

* `OTHER` (value: `"OTHER"`)

* `FEE_TOTAL_PHASE` (value: `"FEE_TOTAL_PHASE"`)




<a name="AdjustmentTypeEnum"></a>
## Enum: AdjustmentTypeEnum


* `TAX` (value: `"TAX"`)




<a name="InclusionTypeEnum"></a>
## Enum: InclusionTypeEnum


* `ADDITIVE` (value: `"ADDITIVE"`)

* `INCLUSIVE` (value: `"INCLUSIVE"`)




<a name="TypeEnum"></a>
## Enum: TypeEnum


* `CA_GST` (value: `"CA_GST"`)

* `CA_HST` (value: `"CA_HST"`)

* `CA_PST` (value: `"CA_PST"`)

* `CA_QST` (value: `"CA_QST"`)

* `JP_CONSUMPTION_TAX` (value: `"JP_CONSUMPTION_TAX"`)

* `CA_PEI_PST` (value: `"CA_PEI_PST"`)

* `US_SALES_TAX` (value: `"US_SALES_TAX"`)

* `OTHER` (value: `"OTHER"`)




