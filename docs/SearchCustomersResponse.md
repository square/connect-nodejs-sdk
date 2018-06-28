# SquareConnect.SearchCustomersResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**[Error]**](Error.md) | Any errors that occurred during the request. | [optional] 
**customers** | [**[Customer]**](Customer.md) | An array of &#x60;Customer&#x60; objects that match a query. | [optional] 
**cursor** | **String** | A pagination cursor that can be used during subsequent calls to SearchCustomers to retrieve the next set of results associated with the original query. Pagination cursors are only present when a request succeeds and additional results are available.  See [Paginating results](#paginatingresults) for more information. | [optional] 


