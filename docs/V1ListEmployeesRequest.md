# SquareConnect.V1ListEmployeesRequest

### Description



## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**order** | **String** | The order in which employees are listed in the response, based on their created_at field.      Default value: ASC See [SortOrder](#type-sortorder) for possible values | [optional] 
**begin_updated_at** | **String** | If filtering results by their updated_at field, the beginning of the requested reporting period, in ISO 8601 format | [optional] 
**end_updated_at** | **String** | If filtering results by there updated_at field, the end of the requested reporting period, in ISO 8601 format. | [optional] 
**begin_created_at** | **String** | If filtering results by their created_at field, the beginning of the requested reporting period, in ISO 8601 format. | [optional] 
**end_created_at** | **String** | If filtering results by their created_at field, the end of the requested reporting period, in ISO 8601 format. | [optional] 
**status** | **String** | If provided, the endpoint returns only employee entities with the specified status (ACTIVE or INACTIVE). See [V1ListEmployeesRequestStatus](#type-v1listemployeesrequeststatus) for possible values | [optional] 
**external_id** | **String** | If provided, the endpoint returns only employee entities with the specified external_id. | [optional] 
**limit** | **Number** | The maximum integer number of employee entities to return in a single response. Default 100, maximum 200. | [optional] 
**batch_token** | **String** | A pagination cursor to retrieve the next set of results for your original query to the endpoint. | [optional] 


<a name="OrderEnum"></a>
## Enum: OrderEnum


* `DESC` (value: `"DESC"`)

* `ASC` (value: `"ASC"`)




<a name="StatusEnum"></a>
## Enum: StatusEnum


* `ACTIVE` (value: `"ACTIVE"`)

* `INACTIVE` (value: `"INACTIVE"`)




