# SquareConnect.ListCustomersResponse

### Description

Defines the fields that are included in the response body of a request to the ListCustomers endpoint.  One of `errors` or `customers` is present in a given response (never both).

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**[Error]**](Error.md) | Any errors that occurred during the request. | [optional] 
**customers** | [**[Customer]**](Customer.md) | An array of &#x60;Customer&#x60; objects that match your query. | [optional] 
**cursor** | **String** | A pagination cursor to retrieve the next set of results for your original query to the endpoint. This value is present only if the request succeeded and additional results are available.  See [Pagination](https://developer.squareup.com/docs/basics/api101/pagination) for more information. | [optional] 


