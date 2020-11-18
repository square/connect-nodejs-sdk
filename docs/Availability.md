# SquareConnect.Availability

### Description
**Note: This model is in beta.**

Describes a slot available for booking, encapsulating appointment segments, the location and starting time.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**start_at** | **String** | The RFC-3339 timestamp specifying the beginning time of the slot available for booking. | [optional] 
**location_id** | **String** | The ID of the location available for booking. | [optional] 
**appointment_segments** | [**[AppointmentSegment]**](AppointmentSegment.md) | The list of appointment segments available for booking | [optional] 


