# SquareConnect.BusinessAppointmentSettings

### Description
**Note: This model is in beta.**

The service appointment settings, including where and how the service is provided.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location_types** | [**[BusinessAppointmentSettingsBookingLocationType]**](BusinessAppointmentSettingsBookingLocationType.md) | Types of the location allowed for bookings. | [optional] 
**alignment_time** | [**BusinessAppointmentSettingsAlignmentTime**](BusinessAppointmentSettingsAlignmentTime.md) | The time unit of the service duration for bookings. | [optional] 
**min_booking_lead_time_seconds** | **Number** | The minimum lead time in seconds before a service can be booked. Bookings must be created at least this far ahead of the booking&#39;s starting time. | [optional] 
**max_booking_lead_time_seconds** | **Number** | The maximum lead time in seconds before a service can be booked. Bookings must be created at most this far ahead of the booking&#39;s starting time. | [optional] 
**any_team_member_booking_enabled** | **Boolean** | Indicates whether a customer can choose from all available time slots and have a staff member assigned automatically (&#x60;true&#x60;) or not (&#x60;false&#x60;). | [optional] 
**multiple_service_booking_enabled** | **Boolean** | Indicates whether a customer can book multiple services in a single online booking. | [optional] 
**max_appointments_per_day_limit_type** | [**BusinessAppointmentSettingsMaxAppointmentsPerDayLimitType**](BusinessAppointmentSettingsMaxAppointmentsPerDayLimitType.md) | Indicates whether the daily appointment limit applies to team members or to business locations. | [optional] 
**max_appointments_per_day_limit** | **Number** | The maximum number of daily appointments per team member or per location. | [optional] 
**cancellation_window_seconds** | **Number** | The cut-off time in seconds for allowing clients to cancel or reschedule an appointment. | [optional] 
**cancellation_fee_money** | [**Money**](Money.md) | The flat-fee ammount charged for a no-show booking. | [optional] 
**cancellation_policy** | [**BusinessAppointmentSettingsCancellationPolicy**](BusinessAppointmentSettingsCancellationPolicy.md) | The cancellation policy adopted by the seller. | [optional] 
**cancellation_policy_text** | **String** | The free-form text of the seller&#39;s cancellation policy. | [optional] 
**skip_booking_flow_staff_selection** | **Boolean** | Indicates whether customers has an assigned staff member (&#x60;true&#x60;) or can select s staff member of their choice (&#x60;false&#x60;). | [optional] 


