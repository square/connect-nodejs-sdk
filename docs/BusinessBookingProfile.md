# SquareConnect.BusinessBookingProfile

### Description
**Note: This model is in beta.**



## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**seller_id** | **String** | The ID of the seller, obtainable using the Merchants API. | [optional] 
**created_at** | **String** | The RFC-3339 timestamp specifying the booking&#39;s creation time. | [optional] 
**booking_enabled** | **Boolean** | Indicates whether the seller is open for booking. | [optional] 
**customer_timezone_choice** | [**BusinessBookingProfileCustomerTimezoneChoice**](BusinessBookingProfileCustomerTimezoneChoice.md) | The choice of customer&#39;s time zone information of a booking. The Square online booking site and all notifications to customers uses either the seller location’s time zone or the time zone the customer chooses at booking. | [optional] 
**booking_policy** | [**BusinessBookingProfileBookingPolicy**](BusinessBookingProfileBookingPolicy.md) | The policy for the seller to automatically accept booking requests (&#x60;ACCEPT_ALL&#x60;) or not (&#x60;REQUIRES_ACCEPTANCE&#x60;). | [optional] 
**allow_user_cancel** | **Boolean** | Indicates whether customers can cancel or reschedule their own bookings (&#x60;true&#x60;) or not (&#x60;false&#x60;). | [optional] 
**business_appointment_settings** | [**BusinessAppointmentSettings**](BusinessAppointmentSettings.md) | Settings for appointment-type bookings. | [optional] 


