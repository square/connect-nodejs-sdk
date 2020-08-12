# SquareConnect.UpdateSubscriptionRequest

### Description
**Note: This model is in beta.**

Defines parameters in a [UpdateSubscription](#endpoint-subscriptions-updatesubscription) endpoint  request.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subscription** | [**Subscription**](Subscription.md) | The subscription object containing the current version, and fields to update. Unset fields will be left at their current server values, and JSON &#x60;null&#x60; values will be treated as a request to clear the relevant data. | [optional] 


