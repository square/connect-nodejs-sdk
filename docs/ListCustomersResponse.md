# SquareConnect.ListCustomersResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**[Error]**](Error.md) | Any errors that occurred during the request. | [optional] 
**customers** | [**[Customer]**](Customer.md) | An array of &#x60;Customer&#x60; objects that match your query. | [optional] 
**cursor** | **String** | A pagination cursor to retrieve the next set of results for your original query to the endpoint. This value is present only if the request succeeded and additional results are available.  See [Paginating results](#paginatingresults) for more information. | [optional] 


