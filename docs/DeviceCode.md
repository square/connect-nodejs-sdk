# SquareConnect.DeviceCode

### Description
**Note: This model is in beta.**



## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The unique id for this device code. | [optional] 
**name** | **String** | An optional user-defined name for the device code. | [optional] 
**code** | **String** | The unique code that can be used to login. | [optional] 
**device_id** | **String** | The unique id of the device that used this code. Populated when the device is paired up. | [optional] 
**product_type** | **String** | The targeting product type of the device code. See [ProductType](#type-producttype) for possible values | 
**location_id** | **String** | The location assigned to this code. | [optional] 
**status** | **String** | The pairing status of the device code. See [DeviceCodeStatus](#type-devicecodestatus) for possible values | [optional] 
**pair_by** | **String** | When this DeviceCode will expire and no longer login. Timestamp in RFC 3339 format. | [optional] 
**created_at** | **String** | When this DeviceCode was created. Timestamp in RFC 3339 format. | [optional] 
**status_changed_at** | **String** | When this DeviceCode&#39;s status was last changed. Timestamp in RFC 3339 format. | [optional] 
**paired_at** | **String** | When this DeviceCode was paired. Timestamp in RFC 3339 format. | [optional] 


