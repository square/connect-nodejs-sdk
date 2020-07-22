# SquareConnect.SearchInvoicesResponse

### Description
**Note: This model is in beta.**

Describes a `SearchInvoices` response.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**invoices** | [**[Invoice]**](Invoice.md) | The list of invoices returned by the search. | [optional] 
**cursor** | **String** | When a response is truncated, it includes a cursor that you can use in a  subsequent request to fetch the next set of invoices. If empty, this is the final  response.  For more information, see [Pagination](https://developer.squareup.com/docs/docs/working-with-apis/pagination). | [optional] 
**errors** | [**[Error]**](Error.md) | Information about errors encountered during the request. | [optional] 


