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
**payment_requests** | [**[InvoicePaymentRequest]**](InvoicePaymentRequest.md) | The payment schedule for the invoice, represented by one or more payment requests that define payment settings, such as amount due and due date. You can specify a maximum of 13 payment requests, with up to 12 &#x60;INSTALLMENT&#x60; request types. For more information, see [Payment requests](https://developer.squareup.com/docs/docs/invoices-api/overview#payment-requests).  This field is required when creating an invoice. It must contain at least one payment request. | [optional] 
**invoice_number** | **String** | A user-friendly invoice number. The value is unique within a location. If not provided when creating an invoice, Square assigns a value. It increments from 1 and padded with zeros making it 7 characters long for example, 0000001, 0000002. | [optional] 
**title** | **String** | The title of the invoice. | [optional] 
**description** | **String** | The description of the invoice. This is visible to the customer receiving the invoice. | [optional] 
**scheduled_at** | **String** | The timestamp when the invoice is scheduled for processing, in RFC 3339 format. After the invoice is published, Square processes the invoice on the specified date, based on the settings for the invoice payment requests.  If the field is not set, Square processes the invoice immediately after it is published. | [optional] 
**public_url** | **String** | The URL of the Square-hosted invoice page. After you publish the invoice using the &#x60;PublishInvoice&#x60; endpoint, Square hosts the invoice page and returns the page URL in the response. | [optional] 
**next_payment_amount_money** | [**Money**](Money.md) | The current amount due for the invoice. In addition to the amount due on the next payment request, this also includes any overdue payment amounts. | [optional] 
**status** | **String** | The status of the invoice. See [InvoiceStatus](#type-invoicestatus) for possible values | [optional] 
**timezone** | **String** | The time zone of the date values (for example, &#x60;due_date&#x60;) specified in the invoice. | [optional] 
**created_at** | **String** | The timestamp when the invoice was created, in RFC 3339 format. | [optional] 
**updated_at** | **String** | The timestamp when the invoice was last updated, in RFC 3339 format. | [optional] 
**custom_fields** | [**[InvoiceCustomField]**](InvoiceCustomField.md) | Additional seller-defined fields to render on the invoice. These fields are visible to sellers and buyers on the Square-hosted invoice page and in emailed or PDF copies of invoices. For more information, see [Custom fields](https://developer.squareup.com/docs/docs/invoices-api/overview#custom-fields).  Max: 2 custom fields | [optional] 


