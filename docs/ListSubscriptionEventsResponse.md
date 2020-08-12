# SquareConnect.ListSubscriptionEventsResponse

### Description
**Note: This model is in beta.**

Defines the fields that are included in the response from the [ListSubscriptionEvents](#endpoint-subscriptions-listsubscriptionevents) endpoint.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**[Error]**](Error.md) | Information about errors encountered during the request. | [optional] 
**subscription_events** | [**[SubscriptionEvent]**](SubscriptionEvent.md) | The &#x60;SubscriptionEvents&#x60; retrieved. | [optional] 
**cursor** | **String** | When a response is truncated, it includes a cursor that you can  use in a subsequent request to fetch the next set of events.  If empty, this is the final response.  For more information, see [Pagination](https://developer.squareup.com/docs/docs/working-with-apis/pagination). | [optional] 


