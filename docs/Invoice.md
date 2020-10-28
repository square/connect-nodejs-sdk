# SquareConnect.Invoice

### Description
**Note: This model is in beta.**

Stores information about an invoice. You use the Invoices API to create and process invoices. For more information, see [Manage Invoices Using the Invoices API](/docs/invoices-api/overview).

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The Square-assigned ID of the invoice. | [optional] 
**version** | **Number** | The Square-assigned version number, which is incremented each time an update is committed to the invoice. | [optional] 
**location_id** | **String** | The ID of the location that this invoice is associated with. This field is required when creating an invoice. | [optional] 
**order_id** | **String** | The ID of the &#x60;order&#x60; for which the invoice is created.  This order must be in the &#x60;OPEN&#x60; state and must belong to the &#x60;location_id&#x60; specified for this invoice. This field is required when creating an invoice. | [optional] 
**primary_recipient** | [**InvoiceRecipient**](InvoiceRecipient.md) | The customer who gets the invoice. Square uses the contact information to deliver the invoice. This field is required to publish an invoice. | [optional] 
**payment_requests** | [**[InvoicePaymentRequest]**](InvoicePaymentRequest.md) | An array of &#x60;InvoicePaymentRequest&#x60; objects. Each object defines a payment request in an invoice payment schedule. It provides information such as when and how Square processes payments. You must specify at least one payment request. For invoices  with multiple payment requests, you can specify a maximum of 12 &#x60;INSTALLMENT&#x60; request types. All of the payment requests must specify the same &#x60;request_method&#x60;.  This field is required when creating an invoice. | [optional] 
**invoice_number** | **String** | A user-friendly invoice number. The value is unique within a location. If not provided when creating an invoice, Square assigns a value. It increments from 1 and padded with zeros making it 7 characters long for example, 0000001, 0000002. | [optional] 
**title** | **String** | The title of the invoice. | [optional] 
**description** | **String** | The description of the invoice. This is visible the customer receiving the invoice. | [optional] 
**scheduled_at** | **String** | The timestamp when the invoice is scheduled for processing, in RFC 3339 format. At the specified time, depending on the &#x60;request_method&#x60;, Square sends the invoice to the customer&#39;s email address or charge the customer&#39;s card on file.  If the field is not set, Square processes the invoice immediately after publication. | [optional] 
**public_url** | **String** | The URL of the Square-hosted invoice page. After you publish the invoice using the &#x60;PublishInvoice&#x60; endpoint, Square hosts the invoice page and returns the page URL in the response. | [optional] 
**next_payment_amount_money** | [**Money**](Money.md) | The current amount due for the invoice. In addition to the amount due on the next payment request, this also includes any overdue payment amounts. | [optional] 
**status** | **String** | The status of the invoice. See [InvoiceStatus](#type-invoicestatus) for possible values | [optional] 
**timezone** | **String** | The time zone of the date values (for example, &#x60;due_date&#x60;) specified in the invoice. | [optional] 
**created_at** | **String** | The timestamp when the invoice was created, in RFC 3339 format. | [optional] 
**updated_at** | **String** | The timestamp when the invoice was last updated, in RFC 3339 format. | [optional] 


