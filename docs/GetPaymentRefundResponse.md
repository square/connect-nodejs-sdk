# SquareConnect.GetPaymentRefundResponse

### Description

Defines the fields that are included in the response body of a request to the [GetRefund](#endpoint-refunds-getpaymentrefund) endpoint.  Note: If there are errors processing the request, the refund field might not be present or it might be present in a FAILED state.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**[Error]**](Error.md) | Information about errors encountered during the request. | [optional] 
**refund** | [**PaymentRefund**](PaymentRefund.md) | The requested &#x60;PaymentRefund&#x60;. | [optional] 


