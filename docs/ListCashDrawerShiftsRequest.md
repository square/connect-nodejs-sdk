# SquareConnect.ListCashDrawerShiftsRequest

### Description
**Note: This model is in beta.**



## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location_id** | **String** | The ID of the location to query for a list of cash drawer shifts. | 
**sort_order** | **String** | The order in which cash drawer shifts are listed in the response, based on their opened_at field. Default value: ASC See [SortOrder](#type-sortorder) for possible values | [optional] 
**begin_time** | **String** | The inclusive start time of the query on opened_at, in ISO 8601 format. | [optional] 
**end_time** | **String** | The exclusive end date of the query on opened_at, in ISO 8601 format. | [optional] 
**limit** | **Number** | Number of cash drawer shift events in a page of results (200 by default, 1000 max). | [optional] 
**cursor** | **String** | Opaque cursor for fetching the next page of results. | [optional] 


