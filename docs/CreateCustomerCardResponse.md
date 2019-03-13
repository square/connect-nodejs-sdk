# SquareConnect.CreateCustomerCardResponse

### Description

Defines the fields that are included in the response body of a request to the [CreateCustomerCard](#endpoint-createcustomercard) endpoint.  One of `errors` or `card` is present in a given response (never both).

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**[Error]**](Error.md) | Any errors that occurred during the request. | [optional] 
**card** | [**Card**](Card.md) | The created card on file. | [optional] 


