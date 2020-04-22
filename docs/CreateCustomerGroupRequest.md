# SquareConnect.CreateCustomerGroupRequest

### Description
**Note: This model is in beta.**

Defines the body parameters that can be provided in a request to the [CreateCustomerGroup](#endpoint-createcustomegroup) endpoint.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**idempotency_key** | **String** | The idempotency key for the request. See the [Idempotency](https://developer.squareup.com/docs/basics/api101/idempotency) guide for more information. | [optional] 
**group** | [**CustomerGroup**](CustomerGroup.md) | The customer group to create. | 


