# SquareConnect.DeviceCheckoutOptions

### Description



## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_id** | **String** | The unique ID of the device intended for this &#x60;TerminalCheckout&#x60;. A list of &#x60;DeviceCode&#x60; objects can be retrieved from the /v2/devices/codes endpoint. Match a &#x60;DeviceCode.device_id&#x60; value with &#x60;device_id&#x60; to get the associated device code. | 
**skip_receipt_screen** | **Boolean** | Instruct the device to skip the receipt screen. Defaults to false. | [optional] 
**tip_settings** | [**TipSettings**](TipSettings.md) | Tip specific settings | [optional] 


