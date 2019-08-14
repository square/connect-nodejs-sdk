# SquareConnect.GetPaymentRefundResponse

### Description

Defines the fields that are included in the response body of a request to the [GetRefund](#endpoint-refunds-getpaymentrefund) endpoint.  Note: if there are errors processing the request, the refund field may not be present, or it may be present in a FAILED state.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**[Error]**](Error.md) | Information on errors encountered during the request. | [optional] 
**refund** | [**PaymentRefund**](PaymentRefund.md) | The requested &#x60;PaymentRefund&#x60;. | [optional] 


