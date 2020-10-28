# SquareConnect.ListPaymentsResponse

### Description

Defines the fields that are included in the response body of a request to the [ListPayments](#endpoint-payments-listpayments) endpoint.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**[Error]**](Error.md) | Information about errors encountered during the request. | [optional] 
**payments** | [**[Payment]**](Payment.md) | The requested list of payments. | [optional] 
**cursor** | **String** | The pagination cursor to be used in a subsequent request. If empty, this is the final response.  For more information, see [Pagination](https://developer.squareup.com/docs/basics/api101/pagination). | [optional] 


