# SquareConnect.RetrieveCustomerSegmentResponse

### Description

Defines the fields included in the response body for requests to __RetrieveCustomerSegment__.  One of `errors` or `segment` is present in a given response (never both).

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**[Error]**](Error.md) | Any errors that occurred during the request. | [optional] 
**segment** | [**CustomerSegment**](CustomerSegment.md) | The retrieved customer segment. | [optional] 


