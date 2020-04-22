# SquareConnect.PayOrderRequest

### Description
**Note: This model is in beta.**

Defines the fields that are included in requests to the [PayOrder](#endpoint-payorder) endpoint.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**idempotency_key** | **String** | A value you specify that uniquely identifies this request among requests you&#39;ve sent. If you&#39;re unsure whether a particular payment request was completed successfully, you can reattempt it with the same idempotency key without worrying about duplicate payments.  See [Idempotency](https://developer.squareup.com/docs/working-with-apis/idempotency) for more information. | 
**order_version** | **Number** | The version of the order being paid. If not supplied, the latest version will be paid. | [optional] 
**payment_ids** | **[String]** | The IDs of the &#x60;payments&#x60; to collect. The payment total must match the order total. | [optional] 


