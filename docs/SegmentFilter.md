# SquareConnect.SegmentFilter

### Description
**Note: This model is in beta.**

A query filter to search for appointment segments by.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**service_variation_id** | **String** | The ID of the &#x60;CatalogItemVariation&#x60; representing the service booked in this segment. | 
**team_member_id_filter** | [**FilterValue**](FilterValue.md) | A query expression specifying which team members satisfy the condition. Supported expressions are - &#x60;ANY&#x60;: include team members whose IDs match any member of the specified list. - &#x60;NONE&#x60;: exclude team members whose IDs match members of the specified list.  The &#x60;ALL&#x60; expression is not supported in the Bookings API. When no expression is specified, any service-providing team member is eligible to fulfill the Booking. | [optional] 


