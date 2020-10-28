# SquareConnect.TerminalRefundQueryFilter

### Description
**Note: This model is in beta.**



## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_id** | **String** | &#x60;TerminalRefund&#x60;s associated with a specific device. If no device is specified then all &#x60;TerminalRefund&#x60;s for the signed in account will be displayed. | [optional] 
**created_at** | [**TimeRange**](TimeRange.md) | Timestamp for the beginning of the reporting period, in RFC 3339 format. Inclusive. Default: The current time minus one day. | [optional] 
**status** | **String** | Filtered results with the desired status of the &#x60;TerminalRefund&#x60; Options: &#x60;PENDING&#x60;, &#x60;IN\\_PROGRESS&#x60;, &#x60;CANCEL\\_REQUESTED&#x60;, &#x60;CANCELED&#x60;, &#x60;COMPLETED&#x60; | [optional] 


