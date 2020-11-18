# SquareConnect.CardPaymentDetails

### Description

Reflects the current status of a card payment.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **String** | The card payment&#39;s current state. The state can be AUTHORIZED, CAPTURED, VOIDED, or FAILED. | [optional] 
**card** | [**Card**](Card.md) | The credit card&#39;s non-confidential details. | [optional] 
**entry_method** | **String** | The method used to enter the card&#39;s details for the payment. The method can be &#x60;KEYED&#x60;, &#x60;SWIPED&#x60;, &#x60;EMV&#x60;, &#x60;ON_FILE&#x60;, or &#x60;CONTACTLESS&#x60;. | [optional] 
**cvv_status** | **String** | The status code returned from the Card Verification Value (CVV) check. The code can be &#x60;CVV_ACCEPTED&#x60;, &#x60;CVV_REJECTED&#x60;, or &#x60;CVV_NOT_CHECKED&#x60;. | [optional] 
**avs_status** | **String** | The status code returned from the Address Verification System (AVS) check. The code can be &#x60;AVS_ACCEPTED&#x60;, &#x60;AVS_REJECTED&#x60;, or &#x60;AVS_NOT_CHECKED&#x60;. | [optional] 
**auth_result_code** | **String** | The status code returned by the card issuer that describes the payment&#39;s authorization status. | [optional] 
**application_identifier** | **String** | For EMV payments, the application ID identifies the EMV application used for the payment. | [optional] 
**application_name** | **String** | For EMV payments, the human-readable name of the EMV application used for the payment. | [optional] 
**application_cryptogram** | **String** | For EMV payments, the cryptogram generated for the payment. | [optional] 
**verification_method** | **String** | For EMV payments, the method used to verify the cardholder&#39;s identity. The method can be &#x60;PIN&#x60;, &#x60;SIGNATURE&#x60;, &#x60;PIN_AND_SIGNATURE&#x60;, &#x60;ON_DEVICE&#x60;, or &#x60;NONE&#x60;. | [optional] 
**verification_results** | **String** | For EMV payments, the results of the cardholder verification. The result can be &#x60;SUCCESS&#x60;, &#x60;FAILURE&#x60;, or &#x60;UNKNOWN&#x60;. | [optional] 
**statement_description** | **String** | The statement description sent to the card networks.  Note: The actual statement description varies and is likely to be truncated and appended with additional information on a per issuer basis. | [optional] 
**device_details** | [**DeviceDetails**](DeviceDetails.md) | Details about the device that took the payment. | [optional] 
**refund_requires_card_presence** | **Boolean** | Whether the card must be physically present for the payment to be refunded.  If set to &#x60;true&#x60;, the card must be present. | [optional] [beta]
**errors** | [**[Error]**](Error.md) | Information about errors encountered during the request. | [optional] 


