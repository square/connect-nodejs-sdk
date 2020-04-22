# SquareConnect.RetrieveCustomerGroupResponse

### Description
**Note: This model is in beta.**

Defines the fields that are included in the response body of a request to the [RetrieveCustomerGroup](#endpoint-retrievecustomergroup) endpoint.  One of `errors` or `group` is present in a given response (never both).

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**[Error]**](Error.md) | Any errors that occurred during the request. | [optional] 
**group** | [**CustomerGroup**](CustomerGroup.md) | The retrieved customer group. | [optional] 


