# SquareConnect.ListPaymentsResponse

### Description

Defines the fields that are included in the response body of a request to the [ListPayments](#endpoint-payments-listpayments) endpoint.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**[Error]**](Error.md) | Information on errors encountered during the request. | [optional] 
**payments** | [**[Payment]**](Payment.md) | The requested list of &#x60;Payment&#x60;s. | [optional] 
**cursor** | **String** | The pagination cursor to be used in a subsequent request. If empty, this is the final response.  See [Pagination](/basics/api101/pagination) for more information. | [optional] 


