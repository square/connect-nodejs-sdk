# SquareConnect.Money

### Description

Represents an amount of money.  __Important:__ Unlike version 1 of the Connect API, __all monetary amounts returned by v2 endpoints are positive.__ (In v1, monetary amounts are negative if they represent money being paid _by_ a merchant, instead of money being paid _to_ a merchant.)

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **Number** | The amount of money, in the smallest denomination of the currency indicated by &#x60;currency&#x60;. For example, when &#x60;currency&#x60; is &#x60;USD&#x60;, &#x60;amount&#x60; is in cents. | [optional] 
**currency** | **String** | The type of currency, in __ISO 4217 format__. For example, the currency code for US dollars is &#x60;USD&#x60;. See [Currency](#type-currency) for possible values | [optional] 


