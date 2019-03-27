# SquareConnect.RegisterDomainResponse

### Description

Defines the fields that are included in the response body of a request to the [RegisterDomain](#endpoint-registerdomain) endpoint.  Either `errors` or `status` will be present in a given response (never both).

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**[Error]**](Error.md) | Any errors that occurred during the request. | [optional] 
**status** | **String** | Status of the domain registration. See [RegisterDomainResponseStatus](#type-registerdomainresponsestatus) for possible values | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `PENDING` (value: `"PENDING"`)

* `VERIFIED` (value: `"VERIFIED"`)




