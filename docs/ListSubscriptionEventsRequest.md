# SquareConnect.ListSubscriptionEventsRequest

### Description
**Note: This model is in beta.**

Defines parameters in a  [ListSubscriptionEvents](#endpoint-subscriptions-listsubscriptionevents) endpoint request.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cursor** | **String** | A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for the original query.  For more information, see [Pagination](https://developer.squareup.com/docs/docs/working-with-apis/pagination). | [optional] 
**limit** | **Number** | The upper limit on the number of subscription events to return  in the response.   Default: &#x60;200&#x60; | [optional] 


