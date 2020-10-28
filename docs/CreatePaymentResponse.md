# SquareConnect.CreatePaymentResponse

### Description

Defines the fields that are included in the response body of a request to the [CreatePayment](#endpoint-payments-createpayment) endpoint.  Note: If there are errors processing the request, the payment field might not be present, or it might be present with a status of `FAILED`.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**[Error]**](Error.md) | Information about errors encountered during the request. | [optional] 
**payment** | [**Payment**](Payment.md) | The newly created payment. | [optional] 


