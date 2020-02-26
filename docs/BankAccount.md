# SquareConnect.BankAccount

### Description

Represents a bank account. For more information about  linking a bank account to a Square account, see  [Bank Accounts API](/docs/bank-accounts-api).

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The unique, Square-issued identifier for the bank account. | 
**account_number_suffix** | **String** | The last few digits of the account number. | 
**country** | **String** | The ISO 3166 Alpha-2 country code where the bank account is based. See [Country](#type-country) for possible values | 
**currency** | **String** | The 3-character ISO 4217 currency code indicating the operating currency of the bank account. For example, the currency code for US dollars is &#x60;USD&#x60;. See [Currency](#type-currency) for possible values | 
**account_type** | **String** | The financial purpose of the associated bank account. See [BankAccountType](#type-bankaccounttype) for possible values | 
**holder_name** | **String** | Name of the account holder. This name must match the name  on the targeted bank account record. | 
**primary_bank_identification_number** | **String** | Primary identifier for the bank. For more information, see  [Bank Accounts API](https://developer.squareup.com/docs/docs/bank-accounts-api). | 
**secondary_bank_identification_number** | **String** | Secondary identifier for the bank. For more information, see  [Bank Accounts API](https://developer.squareup.com/docs/docs/bank-accounts-api). | [optional] 
**debit_mandate_reference_id** | **String** | Reference identifier that will be displayed to UK bank account owners when collecting direct debit authorization. Only required for UK bank accounts. | [optional] 
**reference_id** | **String** | Client-provided identifier for linking the banking account to an entity in a third-party system (for example, a bank account number or a user identifier). | [optional] 
**location_id** | **String** | The location to which the bank account belongs. | [optional] 
**status** | **String** | Read-only. The current verification status of this BankAccount object. See [BankAccountStatus](#type-bankaccountstatus) for possible values | 
**creditable** | **Boolean** | Indicates whether it is possible for Square to send money to this bank account. | 
**debitable** | **Boolean** | Indicates whether it is possible for Square to take money from this  bank account. | 
**fingerprint** | **String** | A Square-assigned, unique identifier for the bank account based on the account information. The account fingerprint can be used to compare account entries and determine if the they represent the same real-world bank account. | [optional] 
**version** | **Number** | The current version of the &#x60;BankAccount&#x60;. | [optional] 
**bank_name** | **String** | Read only. Name of actual financial institution.  For example \&quot;Bank of America\&quot;. | [optional] 


