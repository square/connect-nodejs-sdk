# SquareConnect.ProcessingFee

### Description

Represents the Square processing fee.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**effective_at** | **String** | The timestamp of when the fee takes effect, in RFC 3339 format. | [optional] 
**type** | **String** | The type of fee assessed or adjusted. The fee type can be &#x60;INITIAL&#x60; or &#x60;ADJUSTMENT&#x60;. | [optional] 
**amount_money** | [**Money**](Money.md) | The fee amount, which might be negative, that is assessed or adjusted by Square.  Positive values represent funds being assessed, while negative values represent funds being returned. | [optional] 


