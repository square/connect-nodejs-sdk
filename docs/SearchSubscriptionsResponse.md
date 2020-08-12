# SquareConnect.SearchSubscriptionsResponse

### Description
**Note: This model is in beta.**

Defines the fields that are included in the response from the [SearchSubscriptions](#endpoint-subscriptions-searchsubscriptions) endpoint.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**[Error]**](Error.md) | Information about errors encountered during the request. | [optional] 
**subscriptions** | [**[Subscription]**](Subscription.md) | The search result. | [optional] 
**cursor** | **String** | When a response is truncated, it includes a cursor that you can  use in a subsequent request to fetch the next set of subscriptions.  If empty, this is the final response.  For more information, see [Pagination](https://developer.squareup.com/docs/docs/working-with-apis/pagination). | [optional] 


