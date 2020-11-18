# SquareConnect.ListPaymentRefundsResponse

### Description

Defines the fields that are included in the response body of a request to the [ListPaymentRefunds](#endpoint-refunds-listpaymentrefunds) endpoint.  Either `errors` or `refunds` is present in a given response (never both).

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**[Error]**](Error.md) | Information about errors encountered during the request. | [optional] 
**refunds** | [**[PaymentRefund]**](PaymentRefund.md) | The list of requested refunds. | [optional] 
**cursor** | **String** | The pagination cursor to be used in a subsequent request. If empty, this is the final response.  For more information, see [Pagination](https://developer.squareup.com/docs/basics/api101/pagination). | [optional] 


