# SquareConnect.ListLocationsResponse

### Description

Defines the fields that are included in the response body of a request to the [ListLocations](#endpoint-listlocations) endpoint.  One of `errors` or `locations` is present in a given response (never both).

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**[Error]**](Error.md) | Any errors that occurred during the request. | [optional] 
**locations** | [**[Location]**](Location.md) | The business&#39;s locations. | [optional] 


