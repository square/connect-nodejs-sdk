# SquareConnect.Employee

### Description

An employee created in the **Square Dashboard** account of a business.  Used by the Labor API.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | UUID for this &#x60;Employee&#x60;. | [optional] 
**first_name** | **String** | Given (first) name of the employee. | [optional] 
**last_name** | **String** | Family (last) name of the employee | [optional] 
**location_ids** | **[String]** | A list of location IDs where this employee has access. | [optional] 
**status** | **String** | Specifies the status of the employee being fetched. | [optional] 
**created_at** | **String** | A read-only timestamp in RFC 3339 format. | [optional] 
**updated_at** | **String** | A read-only timestamp in RFC 3339 format. | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `ACTIVE` (value: `"ACTIVE"`)

* `INACTIVE` (value: `"INACTIVE"`)




