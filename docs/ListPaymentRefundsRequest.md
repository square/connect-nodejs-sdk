# SquareConnect.ListPaymentRefundsRequest

### Description

Retrieves a list of refunds for the account making the request.  The maximum results per page is 100.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**begin_time** | **String** | The timestamp for the beginning of the requested reporting period, in RFC 3339 format.  Default: The current time minus one year. | [optional] 
**end_time** | **String** | The timestamp for the end of the requested reporting period, in RFC 3339 format.  Default: The current time. | [optional] 
**sort_order** | **String** | The order in which results are listed: - &#x60;ASC&#x60; - Oldest to newest. - &#x60;DESC&#x60; - Newest to oldest (default). | [optional] 
**cursor** | **String** | A pagination cursor returned by a previous call to this endpoint. Provide this cursor to retrieve the next set of results for the original query.  For more information, see [Pagination](https://developer.squareup.com/docs/basics/api101/pagination). | [optional] 
**location_id** | **String** | Limit results to the location supplied. By default, results are returned for all locations associated with the seller. | [optional] 
**status** | **String** | If provided, only refunds with the given status are returned. For a list of refund status values, see &#x60;PaymentRefund&#x60;.  Default: If omitted, refunds are returned regardless of their status. | [optional] 
**source_type** | **String** | If provided, only refunds with the given source type are returned. - &#x60;CARD&#x60; - List refunds only for payments where &#x60;CARD&#x60; was specified as the payment source.  Default: If omitted, refunds are returned regardless of the source type. | [optional] 
**limit** | **Number** | The maximum number of results to be returned in a single page.  It is possible to receive fewer results than the specified limit on a given page.  If the supplied value is greater than 100, no more than 100 results are returned.  Default: 100 | [optional] 


