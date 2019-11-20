# SquareConnect.ListTransactionsResponse

### Description
**Note: This model is deprecated.**

Defines the fields that are included in the response body of a request to the [ListTransactions](#endpoint-listtransactions) endpoint.  One of `errors` or `transactions` is present in a given response (never both).

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**[Error]**](Error.md) | Any errors that occurred during the request. | [optional] 
**transactions** | [**[Transaction]**](Transaction.md) | An array of transactions that match your query. | [optional] 
**cursor** | **String** | A pagination cursor for retrieving the next set of results, if any remain. Provide this value as the &#x60;cursor&#x60; parameter in a subsequent request to this endpoint.  See [Paginating results](#paginatingresults) for more information. | [optional] 


