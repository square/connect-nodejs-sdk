# SquareConnect.V1Merchant

### Description

Defines the fields that are included in the response body of a request to the **RetrieveBusiness** endpoint.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The merchant account&#39;s unique identifier. | [optional] 
**name** | **String** | The name associated with the merchant account. | [optional] 
**email** | **String** | The email address associated with the merchant account. | [optional] 
**account_type** | **String** | Indicates whether the merchant account corresponds to a single-location account (LOCATION) or a business account (BUSINESS). This value is almost always LOCATION. See [V1MerchantAccountType](#type-v1merchantaccounttype) for possible values | [optional] 
**account_capabilities** | **[String]** | Capabilities that are enabled for the merchant&#39;s Square account. Capabilities that are not listed in this array are not enabled for the account. | [optional] 
**country_code** | **String** | The country associated with the merchant account, in ISO 3166-1-alpha-2 format. | [optional] 
**language_code** | **String** | The language associated with the merchant account, in BCP 47 format. | [optional] 
**currency_code** | **String** | The currency associated with the merchant account, in ISO 4217 format. For example, the currency code for US dollars is USD. | [optional] 
**business_name** | **String** | The name of the merchant&#39;s business. | [optional] 
**business_address** | [**Address**](Address.md) | The address of the merchant&#39;s business. | [optional] 
**business_phone** | [**V1PhoneNumber**](V1PhoneNumber.md) | The phone number of the merchant&#39;s business. | [optional] 
**business_type** | **String** | The type of business operated by the merchant. See [V1MerchantBusinessType](#type-v1merchantbusinesstype) for possible values | [optional] 
**shipping_address** | [**Address**](Address.md) | The merchant&#39;s shipping address. | [optional] 
**location_details** | [**V1MerchantLocationDetails**](V1MerchantLocationDetails.md) | Additional information for a single-location account specified by its associated business account, if it has one. | [optional] 
**market_url** | **String** | The URL of the merchant&#39;s online store. | [optional] 


