# SquareConnect.RegisterDomainResponse

### Description

Defines the fields that are included in the response body of a request to the __RegisterDomain__ endpoint.  Either `errors` or `status` will be present in a given response (never both).

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**[Error]**](Error.md) | Any errors that occurred during the request. | [optional] 
**status** | **String** | Status of the domain registration.  See &#x60;RegisterDomainResponseStatus&#x60; for possible values. See [RegisterDomainResponseStatus](#type-registerdomainresponsestatus) for possible values | [optional] 


