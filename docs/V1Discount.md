# SquareConnect.V1Discount

### Description

V1Discount

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The discount&#39;s unique ID. | [optional] 
**name** | **String** | The discount&#39;s name. | [optional] 
**rate** | **String** | The rate of the discount, as a string representation of a decimal number. A value of 0.07 corresponds to a rate of 7%. This rate is 0 if discount_type is VARIABLE_PERCENTAGE. | [optional] 
**amount_money** | [**V1Money**](V1Money.md) | The amount of the discount. This amount is 0 if discount_type is VARIABLE_AMOUNT. This field is not included for rate-based discounts. | [optional] 
**discount_type** | **String** | Indicates whether the discount is a FIXED value or entered at the time of sale. See [V1DiscountDiscountType](#type-v1discountdiscounttype) for possible values | [optional] 
**pin_required** | **Boolean** | Indicates whether a mobile staff member needs to enter their PIN to apply the discount to a payment. | [optional] 
**color** | **String** | The color of the discount&#39;s display label in Square Register, if not the default color. The default color is 9da2a6. See [V1DiscountColor](#type-v1discountcolor) for possible values | [optional] 


<a name="DiscountTypeEnum"></a>
## Enum: DiscountTypeEnum


* `FIXED` (value: `"FIXED"`)

* `VARIABLE_PERCENTAGE` (value: `"VARIABLE_PERCENTAGE"`)

* `VARIABLE_AMOUNT` (value: `"VARIABLE_AMOUNT"`)




<a name="ColorEnum"></a>
## Enum: ColorEnum


* `9da2a6` (value: `"9da2a6"`)

* `4ab200` (value: `"4ab200"`)

* `0b8000` (value: `"0b8000"`)

* `2952cc` (value: `"2952cc"`)

* `a82ee5` (value: `"a82ee5"`)

* `e5457a` (value: `"e5457a"`)

* `b21212` (value: `"b21212"`)

* `593c00` (value: `"593c00"`)

* `e5BF00` (value: `"e5BF00"`)




