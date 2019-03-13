# SquareConnect.ListEmployeesRequest

### Description

Retrieve a paged-list of employees for a Square account

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location_id** | **String** | Filter employees returned to only those that are associated with the specified location. | [optional] 
**status** | **String** | Specifies the EmployeeStatus to filter the employee by. | [optional] 
**limit** | **Number** | The number of employees to be returned on each page. | [optional] 
**cursor** | **String** | The token required to retrieve the specified page of results. | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `ACTIVE` (value: `"ACTIVE"`)

* `INACTIVE` (value: `"INACTIVE"`)




