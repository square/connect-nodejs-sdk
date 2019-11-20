# SquareConnect.Money

### Description

Represents an amount of money. `Money` fields can be signed or unsigned. Fields that do not explicitly define whether they are signed or unsigned are considered unsigned and can only hold positive amounts. For signed fields, the sign of the value indicates the purpose of the money transfer. See [Working with Monetary Amounts](/build-basics/working-with-monetary-amounts) for more information.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **Number** | The amount of money, in the smallest denomination of the currency indicated by &#x60;currency&#x60;. For example, when &#x60;currency&#x60; is &#x60;USD&#x60;, &#x60;amount&#x60; is in cents. Monetary amounts can be positive or negative. See the specific field description to determine the meaning of the sign in a particular case. | [optional] 
**currency** | **String** | The type of currency, in __ISO 4217 format__. For example, the currency code for US dollars is &#x60;USD&#x60;.  See &#x60;Currency&#x60; for possible values. See [Currency](#type-currency) for possible values | [optional] 


