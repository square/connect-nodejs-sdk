# SquareConnect.Employee

### Description
**Note: This model is deprecated.**

An employee object that is used by the external API.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | UUID for this object. | [optional] 
**first_name** | **String** | The employee&#39;s first name. | [optional] 
**last_name** | **String** | The employee&#39;s last name. | [optional] 
**email** | **String** | The employee&#39;s email address | [optional] 
**phone_number** | **String** | The employee&#39;s phone number in E.164 format, i.e. \&quot;+12125554250\&quot; | [optional] 
**location_ids** | **[String]** | A list of location IDs where this employee has access to. | [optional] 
**status** | **String** | Specifies the status of the employees being fetched. See [EmployeeStatus](#type-employeestatus) for possible values | [optional] 
**is_owner** | **Boolean** | Whether this employee is the owner of the merchant. Each merchant has one owner employee, and that employee has full authority over the account. | [optional] 
**created_at** | **String** | A read-only timestamp in RFC 3339 format. | [optional] 
**updated_at** | **String** | A read-only timestamp in RFC 3339 format. | [optional] 


