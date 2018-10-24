# SquareConnect.V1PaymentSurcharge

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name of the surcharge. | [optional] 
**applied_money** | [**V1Money**](V1Money.md) | The amount of money applied to the order as a result of the surcharge. | [optional] 
**rate** | **String** | The amount of the surcharge as a percentage. The percentage is provided as a string representing the decimal equivalent of the percentage. For example, \&quot;0.7\&quot; corresponds to a 7% surcharge. Exactly one of rate or amount_money should be set. | [optional] 
**amount_money** | [**V1Money**](V1Money.md) | The amount of the surcharge as a Money object. Exactly one of rate or amount_money should be set. | [optional] 
**type** | **String** | Indicates the source of the surcharge. For example, if it was applied as an automatic gratuity for a large group. | [optional] 
**taxable** | **Boolean** | Indicates whether the surcharge is taxable. | [optional] 
**taxes** | [**[V1PaymentTax]**](V1PaymentTax.md) | The list of taxes that should be applied to the surcharge. | [optional] 
**surcharge_id** | **String** | A Square-issued unique identifier associated with the surcharge. | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `UNKNOWN` (value: `"UNKNOWN"`)

* `AUTO_GRATUITY` (value: `"AUTO_GRATUITY"`)

* `CUSTOM` (value: `"CUSTOM"`)




