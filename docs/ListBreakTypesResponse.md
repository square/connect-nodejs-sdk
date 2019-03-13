# SquareConnect.ListBreakTypesResponse

### Description

The response to a request for a set of `BreakTypes`. Contains the requested `BreakType` objects. May contain a set of `Error` objects if the request resulted in errors.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**break_types** | [**[BreakType]**](BreakType.md) |  A page of &#x60;BreakType&#x60; results. | [optional] 
**cursor** | **String** | Value supplied in the subsequent request to fetch the next next page of Break Type results. | [optional] 
**errors** | [**[Error]**](Error.md) | Any errors that occurred during the request. | [optional] 


