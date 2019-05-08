# SquareConnect.SearchOrdersDateTimeFilter

### Description

Filter for `Order` objects based on whether their `CREATED_AT`, `CLOSED_AT` or `UPDATED_AT` timestamps fall within a specified time range. You can specify the time range and which timestamp to filter for. You can filter for only one time range at a time.  For each time range, the start time and end time are inclusive. If the end time is absent, it defaults to the time of the first request for the cursor.  __Important:__ If you use the DateTimeFilter to filter for `CLOSED_AT` or `UPDATED_AT`, you must also set the [OrdersSort](#type-searchorderordersort). The TimeRange used in DateTimeFilter must correspond to the `sort_field` in the [OrdersSort](#type-searchorderordersort) object.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | [**TimeRange**](TimeRange.md) | Time range for filtering on the &#x60;created_at&#x60; timestamp. | [optional] 
**updated_at** | [**TimeRange**](TimeRange.md) | Time range for filtering on the &#x60;updated_at&#x60; timestamp. | [optional] 
**closed_at** | [**TimeRange**](TimeRange.md) | Time range for filtering on the &#x60;closed_at&#x60; timestamp. | [optional] 


