# SquareConnect.LoyaltyEventFilter

### Description
**Note: This model is in beta.**

The filtering criteria. If the request specifies multiple filters,  the endpoint uses a logical AND to evaluate them.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**loyalty_account_filter** | [**LoyaltyEventLoyaltyAccountFilter**](LoyaltyEventLoyaltyAccountFilter.md) | Filter events by loyalty account. | [optional] 
**type_filter** | [**LoyaltyEventTypeFilter**](LoyaltyEventTypeFilter.md) | Filter events by event type. | [optional] 
**date_time_filter** | [**LoyaltyEventDateTimeFilter**](LoyaltyEventDateTimeFilter.md) | Filter events by date time range.  For each range, the start time is inclusive and the end time  is exclusive. | [optional] 
**location_filter** | [**LoyaltyEventLocationFilter**](LoyaltyEventLocationFilter.md) | Filter events by location. | [optional] 
**order_filter** | [**LoyaltyEventOrderFilter**](LoyaltyEventOrderFilter.md) | Filter events by the order associated with the event. | [optional] 


