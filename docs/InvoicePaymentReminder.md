# SquareConnect.InvoicePaymentReminder

### Description
**Note: This model is in beta.**

Describes a payment request reminder (automatic notification) that Square sends to the customer. You configure a reminder relative to the payment request `due_date`.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uid** | **String** | A Square-assigned ID that uniquely identifies the reminder within the &#x60;InvoicePaymentRequest&#x60;. | [optional] 
**relative_scheduled_days** | **Number** | The number of days before (a negative number) or after (a positive number) the payment request &#x60;due_date&#x60; when the reminder is sent. For example, -3 indicates that the reminder should be sent 3 days before the payment request &#x60;due_date&#x60;. | [optional] 
**message** | **String** | The reminder message. | [optional] 
**status** | **String** | The status of the reminder. See [InvoicePaymentReminderStatus](#type-invoicepaymentreminderstatus) for possible values | [optional] 
**sent_at** | **String** | If sent, the timestamp when the reminder was sent, in RFC 3339 format. | [optional] 


