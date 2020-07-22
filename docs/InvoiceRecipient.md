# SquareConnect.InvoiceRecipient

### Description
**Note: This model is in beta.**

Provides customer data that Square uses to deliver an invoice.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer_id** | **String** | The ID of the customer. This is the customer profile ID that  you provide when creating a draft invoice. | [optional] 
**given_name** | **String** | The recipient&#39;s given (that is, first) name. | [optional] 
**family_name** | **String** | The recipient&#39;s family (that is, last) name. | [optional] 
**email_address** | **String** | The recipient&#39;s email address. | [optional] 
**address** | [**Address**](Address.md) | The recipient&#39;s physical address. | [optional] 
**phone_number** | **String** | The recipient&#39;s phone number. | [optional] 
**company_name** | **String** | The name of the recipient&#39;s company. | [optional] 


