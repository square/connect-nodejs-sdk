# SquareConnect.UpdateInvoiceRequest

### Description
**Note: This model is in beta.**

Describes a `UpdateInvoice` request.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**invoice** | [**Invoice**](Invoice.md) | The invoice fields to update. You need to only specify the fields you want to change. The current invoice version must be specified in the version field. For more information, see [Update an invoice](invoices-api/overview#update-an-invoice). | 
**idempotency_key** | **String** | A unique string that identifies the &#x60;UpdateInvoice&#x60; request. If you do not provide &#x60;idempotency_key&#x60; (or provide an empty string as the value), the endpoint treats each request as independent.  For more information, see [Idempotency](https://developer.squareup.com/docs/docs/working-with-apis/idempotency). | [optional] 
**fields_to_clear** | **[String]** | List of fields to clear. For examples, see [Update an invoice](https://developer.squareup.com/docs/docs/invoices-api/overview#update-an-invoice). | [optional] 


