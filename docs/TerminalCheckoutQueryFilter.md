# SquareConnect.TerminalCheckoutQueryFilter

### Description



## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_id** | **String** | &#x60;TerminalCheckout&#x60;s associated with a specific device. If no device is specified then all &#x60;TerminalCheckout&#x60;s for the merchant will be displayed. | [optional] 
**created_at** | [**TimeRange**](TimeRange.md) | Time range for the beginning of the reporting period. Inclusive. Default: The current time minus one day. | [optional] 
**status** | **String** | Filtered results with the desired status of the &#x60;TerminalCheckout&#x60; Options: PENDING, IN\\_PROGRESS, CANCELED, COMPLETED | [optional] 


