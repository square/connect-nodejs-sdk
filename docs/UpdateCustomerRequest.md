# SquareConnect.UpdateCustomerRequest

### Description

Defines the body parameters that can be provided in a request to the UpdateCustomer endpoint.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**given_name** | **String** | The given (i.e., first) name associated with the customer profile. | [optional] 
**family_name** | **String** | The family (i.e., last) name associated with the customer profile. | [optional] 
**company_name** | **String** | A business name associated with the customer profile. | [optional] 
**nickname** | **String** | A nickname for the customer profile. | [optional] 
**email_address** | **String** | The email address associated with the customer profile. | [optional] 
**address** | [**Address**](Address.md) | The physical address associated with the customer profile. | [optional] 
**phone_number** | **String** | The 11-digit phone number associated with the customer profile. | [optional] 
**reference_id** | **String** | An optional, second ID used to associate the customer profile with an entity in another system. | [optional] 
**note** | **String** | A custom note associated with the customer profile. | [optional] 
**birthday** | **String** | The birthday associated with the customer profile, in RFC-3339 format. Year is optional, timezone and times are not allowed. For example: &#x60;0000-09-01T00:00:00-00:00&#x60; indicates a birthday on September 1st. &#x60;1998-09-01T00:00:00-00:00&#x60; indications a birthday on September 1st __1998__. | [optional] 


