# SquareConnect.SearchOrdersFilter

### Description

Filtering criteria to use for a SearchOrders request. Multiple filters will be ANDed together.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**state_filter** | [**SearchOrdersStateFilter**](SearchOrdersStateFilter.md) | Filter by &#x60;&#x60;OrderState&#x60;&#x60;. | [optional] 
**date_time_filter** | [**SearchOrdersDateTimeFilter**](SearchOrdersDateTimeFilter.md) | Filter for results within a time range.  __Important:__ If you filter for orders by time range, you must set SearchOrdersSort to sort by the same field. [Learn more about filtering orders by time range](https://developer.squareup.com/docs/orders-api/manage-orders#important-note-on-filtering-orders-by-time-range) | [optional] 
**fulfillment_filter** | [**SearchOrdersFulfillmentFilter**](SearchOrdersFulfillmentFilter.md) | Filter by fulfillment type or state. | [optional] 
**source_filter** | [**SearchOrdersSourceFilter**](SearchOrdersSourceFilter.md) | Filter by source of order. | [optional] 
**customer_filter** | [**SearchOrdersCustomerFilter**](SearchOrdersCustomerFilter.md) | Filter by customers associated with the order. | [optional] 


