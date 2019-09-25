# SquareConnect.CreateCustomerRequest

### Description

Defines the body parameters that can be provided in a request to the CreateCustomer endpoint.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**idempotency_key** | **String** | The idempotency key for the request. See the [Idempotency](https://developer.squareup.com/docs/basics/api101/idempotency) guide for more information. | [optional] 
**given_name** | **String** | The customer&#39;s given (i.e., first) name. | [optional] 
**family_name** | **String** | The customer&#39;s family (i.e., last) name. | [optional] 
**company_name** | **String** | The name of the customer&#39;s company. | [optional] 
**nickname** | **String** | A nickname for the customer. | [optional] 
**email_address** | **String** | The customer&#39;s email address. | [optional] 
**address** | [**Address**](Address.md) | The customer&#39;s physical address. | [optional] 
**phone_number** | **String** | The customer&#39;s phone number. | [optional] 
**reference_id** | **String** | An optional second ID you can set to associate the customer with an entity in another system. | [optional] 
**note** | **String** | An optional note to associate with the customer. | [optional] 
**birthday** | **String** | The customer birthday in RFC-3339 format. Year is optional, timezone and times are not allowed. Example: &#x60;0000-09-01T00:00:00-00:00&#x60; for a birthday on September 1st. &#x60;1998-09-01T00:00:00-00:00&#x60; for a birthday on September 1st 1998. | [optional] 


