# SquareConnect.ListCustomerSegmentsResponse

### Description

Defines the fields included in the response body for requests to __ListCustomerSegments__.  One of `errors` or `segments` is present in a given response (never both).

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**[Error]**](Error.md) | Any errors that occurred during the request. | [optional] 
**segments** | [**[CustomerSegment]**](CustomerSegment.md) | The list of customer segments belonging to the associated Square account. | [optional] 
**cursor** | **String** | A pagination cursor to be used in subsequent calls to __ListCustomerSegments__ to retrieve the next set of query results. Only present only if the request succeeded and additional results are available.  See the [Pagination guide](https://developer.squareup.com/docs/docs/working-with-apis/pagination) for more information. | [optional] 


