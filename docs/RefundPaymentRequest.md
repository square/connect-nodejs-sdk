# SquareConnect.RefundPaymentRequest

### Description

Refunds a payment.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**idempotency_key** | **String** |  A unique string that identifies this &#x60;RefundPayment&#x60; request. The key can be any valid string but must be unique for every &#x60;RefundPayment&#x60; request.  For more information, see [Idempotency](https://developer.squareup.com/docs/working-with-apis/idempotency). | 
**amount_money** | [**Money**](Money.md) | The amount of money to refund.  This amount cannot be more than the &#x60;total_money&#x60; value of the payment minus the total amount of all previously completed refunds for this payment.  This amount must be specified in the smallest denomination of the applicable currency (for example, US dollar amounts are specified in cents). For more information, see [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts).  The currency code must match the currency associated with the business that is charging the card. | 
**app_fee_money** | [**Money**](Money.md) | The amount of money the developer contributes to help cover the refunded amount. This amount is specified in the smallest denomination of the applicable currency (for example,  US dollar amounts are specified in cents).  The value cannot be more than the &#x60;amount_money&#x60;.  You can specify this parameter in a refund request only if the same parameter was also included  when taking the payment. This is part of the application fee scenario the API supports. For more  information, see [Take Payments and Collect Fees](https://developer.squareup.com/docs/payments-api/take-payments-and-collect-fees). | [optional] 
**payment_id** | **String** | The unique ID of the payment being refunded. | 
**reason** | **String** | A description of the reason for the refund. | [optional] 


