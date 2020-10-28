# SquareConnect.InvoicePaymentRequest

### Description
**Note: This model is in beta.**

Describes a specific payment request in an invoice. Invoices that contain multiple payment requests can  specify a maximum of 12 `INSTALLMENT` request types. All of the payment requests must specify the same `request_method`.  For more information,  see [Payment requests](/docs/invoices-api/overview#payment-requests).

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uid** | **String** | The Square-generated ID of the payment request in an &#x60;invoice&#x60;. | [optional] 
**request_method** | **String** | Indicates how Square processes the payment request. See [InvoiceRequestMethod](#type-invoicerequestmethod) for possible values | [optional] 
**request_type** | **String** | Identifies the payment request type. This type defines how the payment request amount is determined. See [InvoiceRequestType](#type-invoicerequesttype) for possible values | [optional] 
**due_date** | **String** | The due date (in the invoice location&#39;s time zone) for the payment request.  After this date, the invoice becomes overdue. | [optional] 
**fixed_amount_requested_money** | [**Money**](Money.md) | If the payment request specifies &#x60;DEPOSIT&#x60; or &#x60;INSTALLMENT&#x60; as the  &#x60;request_type&#x60;,  this indicates the request amount. You cannot specify this when &#x60;request_type&#x60; is &#x60;BALANCE&#x60; or when the  payment request includes the &#x60;percentage_requested&#x60; field. | [optional] 
**percentage_requested** | **String** | Specifies the amount for the payment request in percentage:  - When the payment &#x60;request_type&#x60; is &#x60;DEPOSIT&#x60;, it is the percentage of the order total amount. - When the payment &#x60;request_type&#x60; is &#x60;INSTALLMENT&#x60;, it is the percentage of the order total less  the deposit, if requested. The sum of the &#x60;percentage_requested&#x60; in all installment  payment requests must be equal to 100.  You cannot specify this when the payment &#x60;request_type&#x60; is &#x60;BALANCE&#x60; or when the  payment request specifies the &#x60;fixed_amount_requested_money&#x60; field. | [optional] 
**tipping_enabled** | **Boolean** | If set to true, the Square-hosted invoice page (the &#x60;public_url&#x60; field of the invoice)  provides a place for the customer to pay a tip.   This field is allowed only on the final payment request   and the payment &#x60;request_type&#x60; must be &#x60;BALANCE&#x60; or &#x60;INSTALLMENT&#x60;. | [optional] 
**card_id** | **String** | If the request method is &#x60;CHARGE_CARD_ON_FILE&#x60;, this field provides the  card to charge. | [optional] 
**reminders** | [**[InvoicePaymentReminder]**](InvoicePaymentReminder.md) | A list of one or more reminders to send for the payment request. | [optional] 
**computed_amount_money** | [**Money**](Money.md) | The payment request amount, computed using the order amount and information from the various payment request fields (&#x60;invoice_request_type&#x60;,  &#x60;fixed_amount_requested_money&#x60;, and &#x60;percentage_requested&#x60;). | [optional] 
**total_completed_amount_money** | [**Money**](Money.md) | The amount of money already paid for the specific payment request.  This amount might include a rounding adjustment if the most recent invoice payment  was in cash in a currency that rounds cash payments (such as, &#x60;CAD&#x60; or &#x60;AUD&#x60;). | [optional] 
**rounding_adjustment_included_money** | [**Money**](Money.md) | If the most recent payment was a cash payment  in a currency that rounds cash payments (such as, &#x60;CAD&#x60; or &#x60;AUD&#x60;) and the payment  is rounded from &#x60;computed_amount_money&#x60; in the payment request, then this  field specifies the rounding adjustment applied. This amount  might be negative. | [optional] 


