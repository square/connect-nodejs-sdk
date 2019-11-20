# SquareConnect.ListCustomersResponse

### Description

Defines the fields that are included in the response body of a request to the ListCustomers endpoint.  One of `errors` or `customers` is present in a given response (never both).

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**[Error]**](Error.md) | Any errors that occurred during the request. | [optional] 
**customers** | [**[Customer]**](Customer.md) | An array of &#x60;Customer&#x60; objects that match the provided query. | [optional] 
**cursor** | **String** | A pagination cursor to retrieve the next set of results for the original query. Only present if the request succeeded and additional results are available.  See the [Pagination guide](https://developer.squareup.com/docs/working-with-apis/pagination) for more information. | [optional] 


