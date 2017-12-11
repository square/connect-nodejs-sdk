# SquareConnect.V1BankAccount

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The bank account&#39;s Square-issued ID. | [optional] 
**merchantId** | **String** | The Square-issued ID of the merchant associated with the bank account. | [optional] 
**bankName** | **String** | The name of the bank that manages the account. | [optional] 
**name** | **String** | The name associated with the bank account. | [optional] 
**routingNumber** | **String** | The bank account&#39;s routing number. | [optional] 
**accountNumberSuffix** | **String** | The last few digits of the bank account number. | [optional] 
**currencyCode** | **String** | The currency code of the currency associated with the bank account, in ISO 4217 format. For example, the currency code for US dollars is USD. | [optional] 
**type** | **String** | The bank account&#39;s type (for example, savings or checking). | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `BUSINESS_CHECKING` (value: `"BUSINESS_CHECKING"`)

* `CHECKING` (value: `"CHECKING"`)

* `INVESTMENT` (value: `"INVESTMENT"`)

* `LOAN` (value: `"LOAN"`)

* `SAVINGS` (value: `"SAVINGS"`)

* `OTHER` (value: `"OTHER"`)




