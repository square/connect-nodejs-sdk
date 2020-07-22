# SquareConnect.ListInvoicesRequest

### Description
**Note: This model is in beta.**

Describes a `ListInvoice` request.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location_id** | **String** | The ID of the location for which to list invoices. | 
**cursor** | **String** | A pagination cursor returned by a previous call to this endpoint.  Provide this cursor to retrieve the next set of results for your original query.  For more information, see [Pagination](https://developer.squareup.com/docs/docs/working-with-apis/pagination). | [optional] 
**limit** | **Number** | The maximum number of invoices to return (200 is the maximum &#x60;limit&#x60;).  If not provided, the server  uses a default limit of 100 invoices. | [optional] 


