# SquareConnect.SearchOrdersFilter

### Description

Filter options to use for a query. Multiple filters will be ANDed together.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**state_filter** | [**SearchOrdersStateFilter**](SearchOrdersStateFilter.md) | Filter by [&#x60;OrderState&#x60;](#type-orderstate). | [optional] 
**date_time_filter** | [**SearchOrdersDateTimeFilter**](SearchOrdersDateTimeFilter.md) | Filter for results within a time range. | [optional] 
**fulfillment_filter** | [**SearchOrdersFulfillmentFilter**](SearchOrdersFulfillmentFilter.md) | Filter by fulfillment type or state. | [optional] 
**source_filter** | [**SearchOrdersSourceFilter**](SearchOrdersSourceFilter.md) | Filter by source of order. | [optional] 
**customer_filter** | [**SearchOrdersCustomerFilter**](SearchOrdersCustomerFilter.md) | Filter by customers associated with the order. | [optional] 


