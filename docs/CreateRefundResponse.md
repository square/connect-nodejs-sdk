# SquareConnect.CreateRefundResponse

### Description
**Note: This model is deprecated.**

Defines the fields that are included in the response body of a request to the [CreateRefund](#endpoint-createrefund) endpoint.  One of `errors` or `refund` is present in a given response (never both).

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**[Error]**](Error.md) | Any errors that occurred during the request. | [optional] 
**refund** | [**Refund**](Refund.md) | The created refund. | [optional] 


