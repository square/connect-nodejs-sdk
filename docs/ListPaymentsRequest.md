# SquareConnect.ListPaymentsRequest

### Description

Retrieves a list of payments taken by the account making the request.  The maximum results per page is 100.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**begin_time** | **String** | The timestamp for the beginning of the reporting period, in RFC 3339 format. Inclusive. Default: The current time minus one year. | [optional] 
**end_time** | **String** | The timestamp for the end of the reporting period, in RFC 3339 format.  Default: The current time. | [optional] 
**sort_order** | **String** | The order in which results are listed: - &#x60;ASC&#x60; - Oldest to newest. - &#x60;DESC&#x60; - Newest to oldest (default). | [optional] 
**cursor** | **String** | A pagination cursor returned by a previous call to this endpoint. Provide this cursor to retrieve the next set of results for the original query.  For more information, see [Pagination](https://developer.squareup.com/docs/basics/api101/pagination). | [optional] 
**location_id** | **String** | Limit results to the location supplied. By default, results are returned for the default (main) location associated with the seller. | [optional] 
**total** | **Number** | The exact amount in the &#x60;total_money&#x60; for a payment. | [optional] 
**last_4** | **String** | The last four digits of a payment card. | [optional] 
**card_brand** | **String** | The brand of the payment card (for example, VISA). | [optional] 
**limit** | **Number** | The maximum number of results to be returned in a single page. It is possible to receive fewer results than the specified limit on a given page.  The default value of 100 is also the maximum allowed value. If the provided value is  greater than 100, it is ignored and the default value is used instead.  Default: &#x60;100&#x60; | [optional] 


