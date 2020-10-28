# SquareConnect.Customer

### Description

Represents a Square customer profile, which can have one or more cards on file associated with it.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique Square-assigned ID for the customer profile. | [optional] 
**created_at** | **String** | The timestamp when the customer profile was created, in RFC 3339 format. | [optional] 
**updated_at** | **String** | The timestamp when the customer profile was last updated, in RFC 3339 format. | [optional] 
**cards** | [**[Card]**](Card.md) | Payment details of cards stored on file for the customer profile. | [optional] 
**given_name** | **String** | The given (i.e., first) name associated with the customer profile. | [optional] 
**family_name** | **String** | The family (i.e., last) name associated with the customer profile. | [optional] 
**nickname** | **String** | A nickname for the customer profile. | [optional] 
**company_name** | **String** | A business name associated with the customer profile. | [optional] 
**email_address** | **String** | The email address associated with the customer profile. | [optional] 
**address** | [**Address**](Address.md) | The physical address associated with the customer profile. | [optional] 
**phone_number** | **String** | The 11-digit phone number associated with the customer profile. | [optional] 
**birthday** | **String** | The birthday associated with the customer profile, in RFC 3339 format. Year is optional, timezone and times are not allowed. For example: &#x60;0000-09-01T00:00:00-00:00&#x60; indicates a birthday on September 1st. &#x60;1998-09-01T00:00:00-00:00&#x60; indications a birthday on September 1st __1998__. | [optional] 
**reference_id** | **String** | An optional, second ID used to associate the customer profile with an entity in another system. | [optional] 
**note** | **String** | A custom note associated with the customer profile. | [optional] 
**preferences** | [**CustomerPreferences**](CustomerPreferences.md) | Represents general customer preferences. | [optional] 
**groups** | [**[CustomerGroupInfo]**](CustomerGroupInfo.md) | The customer groups and segments the customer belongs to. This deprecated field has been replaced with  the dedicated &#x60;group_ids&#x60; for customer groups and the dedicated &#x60;segment_ids&#x60; field for customer segments. You can retrieve information about a given customer group and segment respectively using the Customer Groups API and Customer Segments API. | [optional] [deprecated]
**creation_source** | **String** | A creation source represents the method used to create the customer profile. See [CustomerCreationSource](#type-customercreationsource) for possible values | [optional] 
**group_ids** | **[String]** | The IDs of customer groups the customer belongs to. | [optional] [beta]
**segment_ids** | **[String]** | The IDs of segments the customer belongs to. | [optional] [beta]


