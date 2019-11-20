# SquareConnect.Error

### Description

Represents an error encountered during a request to the Connect API.  See [Handling errors](#handlingerrors) for more information.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **String** | The high-level category for the error. See &#x60;ErrorCategory&#x60; for possible values. See [ErrorCategory](#type-errorcategory) for possible values | 
**code** | **String** | The specific code of the error. See &#x60;ErrorCode&#x60; for possible values See [ErrorCode](#type-errorcode) for possible values | 
**detail** | **String** | A human-readable description of the error for debugging purposes. | [optional] 
**field** | **String** | The name of the field provided in the original request (if any) that the error pertains to. | [optional] 


