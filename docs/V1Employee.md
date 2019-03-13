# SquareConnect.V1Employee

### Description

Represents one of a business's employees.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The employee&#39;s unique ID. | [optional] 
**first_name** | **String** | The employee&#39;s first name. | 
**last_name** | **String** | The employee&#39;s last name. | 
**role_ids** | **[String]** | The ids of the employee&#39;s associated roles. Currently, you can specify only one or zero roles per employee. | [optional] 
**authorized_location_ids** | **[String]** | The IDs of the locations the employee is allowed to clock in at. | [optional] 
**email** | **String** | The employee&#39;s email address. | [optional] 
**status** | **String** | CWhether the employee is ACTIVE or INACTIVE. Inactive employees cannot sign in to Square Register.Merchants update this field from the Square Dashboard. See [V1EmployeeStatus](#type-v1employeestatus) for possible values | [optional] 
**external_id** | **String** | An ID the merchant can set to associate the employee with an entity in another system. | [optional] 
**created_at** | **String** | The time when the employee entity was created, in ISO 8601 format. | [optional] 
**updated_at** | **String** | The time when the employee entity was most recently updated, in ISO 8601 format. | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `ACTIVE` (value: `"ACTIVE"`)

* `INACTIVE` (value: `"INACTIVE"`)




