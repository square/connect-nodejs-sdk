# SquareConnect.ListPaymentsRequest

### Description

Retrieves a list of refunds taken by the account making the request.  Max results per page: 100

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**begin_time** | **String** | Timestamp for the beginning of the reporting period, in RFC 3339 format. Inclusive. Default: The current time minus one year. | [optional] 
**end_time** | **String** | Timestamp for the end of the requested reporting period, in RFC 3339 format.  Default: The current time. | [optional] 
**sort_order** | **String** | The order in which results are listed. - &#x60;ASC&#x60; - oldest to newest - &#x60;DESC&#x60; - newest to oldest (default). | [optional] 
**cursor** | **String** | A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for the original query.  See [Pagination](/basics/api101/pagination) for more information. | [optional] 
**location_id** | **String** | ID of location associated with payment | [optional] 
**total** | **Number** | The exact amount in the total_money for a &#x60;Payment&#x60;. | [optional] 
**last_4** | **String** | The last 4 digits of &#x60;Payment&#x60; card. | [optional] 
**card_brand** | **String** | The brand of &#x60;Payment&#x60; card. For example, &#x60;VISA&#x60; | [optional] 


