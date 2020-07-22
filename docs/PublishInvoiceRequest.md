# SquareConnect.PublishInvoiceRequest

### Description
**Note: This model is in beta.**

Describes a `PublishInvoice` request.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**version** | **Number** | The version of the &#x60;Invoice&#x60; to publish. This must match the current version of the invoice, otherwise the request is rejected. | 
**idempotency_key** | **String** | A unique string that identifies the &#x60;PublishInvoice&#x60; request. If you do not  provide &#x60;idempotency_key&#x60; (or provide an empty string as the value), the endpoint  treats each request as independent.  For more information, see [Idempotency](https://developer.squareup.com/docs/docs/working-with-apis/idempotency). | [optional] 


