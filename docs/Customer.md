# SquareConnect.Customer

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The customer&#39;s unique ID. | 
**created_at** | **String** | The time when the customer was created, in RFC 3339 format. | 
**updated_at** | **String** | The time when the customer was last updated, in RFC 3339 format. | 
**cards** | [**[Card]**](Card.md) | The non-confidential details of the customer&#39;s cards on file. | [optional] 
**given_name** | **String** | The customer&#39;s given (i.e., first) name. | [optional] 
**family_name** | **String** | The customer&#39;s family (i.e., last) name. | [optional] 
**nickname** | **String** | The customer&#39;s nickname. | [optional] 
**company_name** | **String** | The name of the customer&#39;s company. | [optional] 
**email_address** | **String** | The customer&#39;s email address. | [optional] 
**address** | [**Address**](Address.md) | The customer&#39;s physical address. | [optional] 
**phone_number** | **String** | The customer&#39;s phone number. | [optional] 
**birthday** | **String** | The customer&#39;s birthday in RFC-3339 format. Year is optional, timezone and times are not allowed. Example: &#x60;0000-09-01T00:00:00-00:00&#x60; for a birthday on September 1st. &#x60;1998-09-01T00:00:00-00:00&#x60; for a birthday on September 1st 1998. | [optional] 
**reference_id** | **String** | A second ID you can set to associate the customer with an entity in another system. | [optional] 
**note** | **String** | A note to associate with the customer. | [optional] 
**preferences** | [**CustomerPreferences**](CustomerPreferences.md) | The customer&#39;s preferences. | [optional] 
**groups** | [**[CustomerGroupInfo]**](CustomerGroupInfo.md) | The groups the customer belongs to. | [optional] 
**creation_source** | **String** | A creation source represents the method used to create the customer profile. | [optional] 


<a name="CreationSourceEnum"></a>
## Enum: CreationSourceEnum


* `OTHER` (value: `"OTHER"`)

* `APPOINTMENTS` (value: `"APPOINTMENTS"`)

* `COUPON` (value: `"COUPON"`)

* `DELETION_RECOVERY` (value: `"DELETION_RECOVERY"`)

* `DIRECTORY` (value: `"DIRECTORY"`)

* `EGIFTING` (value: `"EGIFTING"`)

* `EMAIL_COLLECTION` (value: `"EMAIL_COLLECTION"`)

* `FEEDBACK` (value: `"FEEDBACK"`)

* `IMPORT` (value: `"IMPORT"`)

* `INVOICES` (value: `"INVOICES"`)

* `LOYALTY` (value: `"LOYALTY"`)

* `MARKETING` (value: `"MARKETING"`)

* `MERGE` (value: `"MERGE"`)

* `ONLINE_STORE` (value: `"ONLINE_STORE"`)

* `INSTANT_PROFILE` (value: `"INSTANT_PROFILE"`)

* `TERMINAL` (value: `"TERMINAL"`)

* `THIRD_PARTY` (value: `"THIRD_PARTY"`)

* `THIRD_PARTY_IMPORT` (value: `"THIRD_PARTY_IMPORT"`)

* `UNMERGE_RECOVERY` (value: `"UNMERGE_RECOVERY"`)




