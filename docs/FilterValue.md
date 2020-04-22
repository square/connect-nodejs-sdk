# SquareConnect.FilterValue

### Description
**Note: This model is in beta.**

A filter to select resources based on an exact field value. For any given value, the value can only be in one property. Depending on the field, either all properties can be set or only a subset will be available.  Refer to the documentation of the field.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**all** | **[String]** | A list of terms that must be present on the field of the resource. | [optional] 
**any** | **[String]** | A list of terms where at least one of them must be present on the field of the resource. | [optional] 
**none** | **[String]** | A list of terms that must not be present on the field the resource | [optional] 


