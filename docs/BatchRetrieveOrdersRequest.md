# SquareConnect.BatchRetrieveOrdersRequest

### Description

Defines the fields that are included in requests to the BatchRetrieveOrders endpoint.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location_id** | **String** | The ID of the location for these orders. This field is optional: omit it to retrieve orders within the scope of the current authorization&#39;s merchant ID. | [optional] 
**order_ids** | **[String]** | The IDs of the orders to retrieve. A maximum of 100 orders can be retrieved per request. | 


