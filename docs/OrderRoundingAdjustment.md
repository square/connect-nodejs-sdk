# SquareConnect.OrderRoundingAdjustment

### Description

A rounding adjustment of the money being returned. Commonly used to apply Cash Rounding when the minimum unit of account is smaller than the lowest physical denomination of currency.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uid** | **String** | The rounding adjustment&#39;s Unique identifier, unique only within this order. This field is read-only. | [optional] 
**name** | **String** | The name of the rounding adjustment from the original sale Order. | [optional] 
**amount_money** | [**Money**](Money.md) | Actual rounding adjustment amount. | [optional] 


