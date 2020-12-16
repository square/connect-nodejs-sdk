# SquareConnect.UpdateCustomerGroupResponse

### Description

Defines the fields that are included in the response body of a request to the [UpdateCustomerGroup](#endpoint-updatecustomergroup) endpoint.  One of `errors` or `group` is present in a given response (never both).

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**[Error]**](Error.md) | Any errors that occurred during the request. | [optional] 
**group** | [**CustomerGroup**](CustomerGroup.md) | The successfully updated customer group. | [optional] 


