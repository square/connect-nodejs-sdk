# SquareConnect.ListAdditionalRecipientReceivablesResponse

### Description
**Note: This model is deprecated.**

Defines the fields that are included in the response body of a request to the ListAdditionalRecipientReceivables endpoint.  One of `errors` or `additional_recipient_receivables` is present in a given response (never both).

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**[Error]**](Error.md) | Any errors that occurred during the request. | [optional] 
**receivables** | [**[AdditionalRecipientReceivable]**](AdditionalRecipientReceivable.md) | An array of AdditionalRecipientReceivables that match your query. | [optional] 
**cursor** | **String** | A pagination cursor for retrieving the next set of results, if any remain. Provide this value as the &#x60;cursor&#x60; parameter in a subsequent request to this endpoint.  See [Pagination](https://developer.squareup.com/docs/basics/api101/pagination) for more information. | [optional] 


