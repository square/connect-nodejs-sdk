# SquareConnect.ListDeviceCodesRequest

### Description
**Note: This model is in beta.**



## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cursor** | **String** | A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for your original query.  See [Paginating results](#paginatingresults) for more information. | [optional] 
**location_id** | **String** | If specified, only returns DeviceCodes of the specified location. Returns DeviceCodes of all locations if empty. | [optional] 
**product_type** | **String** | If specified, only returns DeviceCodes targeting the specified product type. Returns DeviceCodes of all product types if empty. See [ProductType](#type-producttype) for possible values | [optional] 


