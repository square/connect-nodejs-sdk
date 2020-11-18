# SquareConnect.Booking

### Description
**Note: This model is in beta.**

Represents a booking as a time-bound service contract for a seller's staff member to provide a specified service at a given location to a requesting customer in one or more appointment segments.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique ID of this object representing a booking. | [optional] 
**version** | **Number** | The revision number for the booking used for optimistic concurrency. | [optional] 
**status** | **String** | The status of the booking, describing where the booking stands with respect to the booking state machine. See [BookingStatus](#type-bookingstatus) for possible values | [optional] 
**created_at** | **String** | The timestamp specifying the creation time of this booking. | [optional] 
**updated_at** | **String** | The timestamp specifying the most recent update time of this booking. | [optional] 
**start_at** | **String** | The timestamp specifying the starting time of this booking. | [optional] 
**location_id** | **String** | The ID of the &#x60;Location&#x60; object representing the location where the booked service is provided. | [optional] 
**customer_id** | **String** | The ID of the &#x60;Customer&#x60; object representing the customer attending this booking | [optional] 
**customer_note** | **String** | The free-text field for the customer to supply notes about the booking. For example, the note can be preferences that cannot be expressed by supported attributes of a relevant &#x60;CatalogObject&#x60; instance. | [optional] 
**seller_note** | **String** | The free-text field for the seller to supply notes about the booking. For example, the note can be preferences that cannot be expressed by supported attributes of a specific &#x60;CatalogObject&#x60; instance. This field should not be visible to customers. | [optional] 
**appointment_segments** | [**[AppointmentSegment]**](AppointmentSegment.md) | A list of appointment segments for this booking. | [optional] 


