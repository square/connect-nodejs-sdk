# SquareConnect.SubscriptionPhase

### Description
**Note: This model is in beta.**

Describes a phase in a subscription plan. For more information, see [Set Up and Manage a Subscription Plan](/docs/subscriptions-api/setup-plan).

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uid** | **String** | The Square-assigned ID of the subscription phase. | [optional] 
**cadence** | **String** | The billing cadence of the phase. For example, weekly or monthly. See [SubscriptionCadence](#type-subscriptioncadence) for possible values | 
**periods** | **Number** | The number of &#x60;cadence&#x60;s the phase lasts. If not set, the phase never ends. Only the last phase can be indefinite. | [optional] 
**recurring_price_money** | [**Money**](Money.md) | The amount to bill for each &#x60;cadence&#x60;. | 
**ordinal** | **Number** | The position this phase appears in the sequence of phases defined for the plan, indexed from 0. | [optional] 


