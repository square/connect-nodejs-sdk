# SquareConnect.CreateInvoiceRequest

### Description
**Note: This model is in beta.**

Describes a `CreateInvoice` request.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**invoice** | [**Invoice**](Invoice.md) | The invoice to create. | 
**idempotency_key** | **String** | A unique string that identifies the &#x60;CreateInvoice&#x60; request. If you do not  provide &#x60;idempotency_key&#x60; (or provide an empty string as the value), the endpoint  treats each request as independent.  For more information, see [Idempotency](https://developer.squareup.com/docs/docs/working-with-apis/idempotency). | [optional] 


