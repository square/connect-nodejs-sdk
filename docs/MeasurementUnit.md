# SquareConnect.MeasurementUnit

### Description

Represents a unit of measurement to use with a quantity, such as ounces or inches. Exactly one of the following fields are required: `custom_unit`, `area_unit`, `length_unit`, `volume_unit`, and `weight_unit`.  The `family` field describes the type of measurement. For example, ounces are in the weight family.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_unit** | [**MeasurementUnitCustom**](MeasurementUnitCustom.md) | A custom unit of measurement defined by the seller using the Point of Sale app or ad-hoc as an order line item. | [optional] 
**area_unit** | **String** | Represents a standard area unit. See [MeasurementUnitArea](#type-measurementunitarea) for possible values | [optional] 
**length_unit** | **String** | Represents a standard length unit. See [MeasurementUnitLength](#type-measurementunitlength) for possible values | [optional] 
**volume_unit** | **String** | Represents a standard volume unit. See [MeasurementUnitVolume](#type-measurementunitvolume) for possible values | [optional] 
**weight_unit** | **String** | Represents a standard unit of weight or mass. See [MeasurementUnitWeight](#type-measurementunitweight) for possible values | [optional] 


<a name="AreaUnitEnum"></a>
## Enum: AreaUnitEnum


* `IMPERIAL_ACRE` (value: `"IMPERIAL_ACRE"`)

* `IMPERIAL_SQUARE_INCH` (value: `"IMPERIAL_SQUARE_INCH"`)

* `IMPERIAL_SQUARE_FOOT` (value: `"IMPERIAL_SQUARE_FOOT"`)

* `IMPERIAL_SQUARE_YARD` (value: `"IMPERIAL_SQUARE_YARD"`)

* `IMPERIAL_SQUARE_MILE` (value: `"IMPERIAL_SQUARE_MILE"`)

* `METRIC_SQUARE_CENTIMETER` (value: `"METRIC_SQUARE_CENTIMETER"`)

* `METRIC_SQUARE_METER` (value: `"METRIC_SQUARE_METER"`)

* `METRIC_SQUARE_KILOMETER` (value: `"METRIC_SQUARE_KILOMETER"`)




<a name="LengthUnitEnum"></a>
## Enum: LengthUnitEnum


* `IMPERIAL_INCH` (value: `"IMPERIAL_INCH"`)

* `IMPERIAL_FOOT` (value: `"IMPERIAL_FOOT"`)

* `IMPERIAL_YARD` (value: `"IMPERIAL_YARD"`)

* `IMPERIAL_MILE` (value: `"IMPERIAL_MILE"`)

* `METRIC_MILLIMETER` (value: `"METRIC_MILLIMETER"`)

* `METRIC_CENTIMETER` (value: `"METRIC_CENTIMETER"`)

* `METRIC_METER` (value: `"METRIC_METER"`)

* `METRIC_KILOMETER` (value: `"METRIC_KILOMETER"`)




<a name="VolumeUnitEnum"></a>
## Enum: VolumeUnitEnum


* `GENERIC_FLUID_OUNCE` (value: `"GENERIC_FLUID_OUNCE"`)

* `GENERIC_SHOT` (value: `"GENERIC_SHOT"`)

* `GENERIC_CUP` (value: `"GENERIC_CUP"`)

* `GENERIC_PINT` (value: `"GENERIC_PINT"`)

* `GENERIC_QUART` (value: `"GENERIC_QUART"`)

* `GENERIC_GALLON` (value: `"GENERIC_GALLON"`)

* `IMPERIAL_CUBIC_INCH` (value: `"IMPERIAL_CUBIC_INCH"`)

* `IMPERIAL_CUBIC_FOOT` (value: `"IMPERIAL_CUBIC_FOOT"`)

* `IMPERIAL_CUBIC_YARD` (value: `"IMPERIAL_CUBIC_YARD"`)

* `METRIC_MILLILITER` (value: `"METRIC_MILLILITER"`)

* `METRIC_LITER` (value: `"METRIC_LITER"`)




<a name="WeightUnitEnum"></a>
## Enum: WeightUnitEnum


* `IMPERIAL_WEIGHT_OUNCE` (value: `"IMPERIAL_WEIGHT_OUNCE"`)

* `IMPERIAL_POUND` (value: `"IMPERIAL_POUND"`)

* `IMPERIAL_STONE` (value: `"IMPERIAL_STONE"`)

* `METRIC_MILLIGRAM` (value: `"METRIC_MILLIGRAM"`)

* `METRIC_GRAM` (value: `"METRIC_GRAM"`)

* `METRIC_KILOGRAM` (value: `"METRIC_KILOGRAM"`)




