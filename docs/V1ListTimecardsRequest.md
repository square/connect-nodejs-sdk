# SquareConnect.V1ListTimecardsRequest

### Description



## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**order** | **String** | The order in which timecards are listed in the response, based on their created_at field. See [SortOrder](#type-sortorder) for possible values | [optional] 
**employee_id** | **String** | If provided, the endpoint returns only timecards for the employee with the specified ID. | [optional] 
**begin_clockin_time** | **String** | If filtering results by their clockin_time field, the beginning of the requested reporting period, in ISO 8601 format. | [optional] 
**end_clockin_time** | **String** | If filtering results by their clockin_time field, the end of the requested reporting period, in ISO 8601 format. | [optional] 
**begin_clockout_time** | **String** | If filtering results by their clockout_time field, the beginning of the requested reporting period, in ISO 8601 format. | [optional] 
**end_clockout_time** | **String** | If filtering results by their clockout_time field, the end of the requested reporting period, in ISO 8601 format. | [optional] 
**begin_updated_at** | **String** | If filtering results by their updated_at field, the beginning of the requested reporting period, in ISO 8601 format. | [optional] 
**end_updated_at** | **String** | If filtering results by their updated_at field, the end of the requested reporting period, in ISO 8601 format. | [optional] 
**deleted** | **Boolean** | If true, only deleted timecards are returned. If false, only valid timecards are returned.If you don&#39;t provide this parameter, both valid and deleted timecards are returned. | [optional] 
**limit** | **Number** | The maximum integer number of employee entities to return in a single response. Default 100, maximum 200. | [optional] 
**batch_token** | **String** | A pagination cursor to retrieve the next set of results for your original query to the endpoint. | [optional] 


