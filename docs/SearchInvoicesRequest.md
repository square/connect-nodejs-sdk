# SquareConnect.SearchInvoicesRequest

### Description
**Note: This model is in beta.**

Describes a `SearchInvoices` request.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**query** | [**InvoiceQuery**](InvoiceQuery.md) | Describes the query criteria for searching invoices. | 
**limit** | **Number** | The maximum number of invoices to return (200 is the maximum &#x60;limit&#x60;).  If not provided, the server  uses a default limit of 100 invoices. | [optional] 
**cursor** | **String** | A pagination cursor returned by a previous call to this endpoint.  Provide this cursor to retrieve the next set of results for your original query.  For more information, see [Pagination](https://developer.squareup.com/docs/docs/working-with-apis/pagination). | [optional] 


