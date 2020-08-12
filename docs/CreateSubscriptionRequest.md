# SquareConnect.CreateSubscriptionRequest

### Description
**Note: This model is in beta.**

Defines parameters in a  [CreateSubscription](#endpoint-subscriptions-createsubscription) endpoint request.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**idempotency_key** | **String** | A unique string that identifies this &#x60;CreateSubscription&#x60; request. If you do not provide a unique string (or provide an empty string as the value), the endpoint treats each request as independent.  For more information, see [Idempotency keys](https://developer.squareup.com/docs/docs/working-with-apis/idempotency). | 
**location_id** | **String** | The ID of the location the subscription is associated with. | 
**plan_id** | **String** | The ID of the subscription plan. For more information, see  [Subscription Plan Overview](https://developer.squareup.com/docs/docs/subscriptions/overview). | 
**customer_id** | **String** | The ID of the &#x60;customer&#x60; profile. | 
**start_date** | **String** | The start date of the subscription, in YYYY-MM-DD format. For example, 2013-01-15. If the start date is left empty, the subscription begins  immediately. | [optional] 
**canceled_date** | **String** | The date when the subscription should be canceled, in  YYYY-MM-DD format (for example, 2025-02-29). This overrides the plan configuration  if it comes before the date the subscription would otherwise end. | [optional] 
**tax_percentage** | **String** | The tax to add when billing the subscription. The percentage is expressed in decimal form, using a &#x60;&#39;.&#39;&#x60; as the decimal separator and without a &#x60;&#39;%&#39;&#x60; sign. For example, a value of 7.5 corresponds to 7.5%. | [optional] 
**price_override_money** | [**Money**](Money.md) | A custom price to apply for the subscription. If specified,  it overrides the price configured by the subscription plan. | [optional] 
**card_id** | **String** | The ID of the &#x60;customer](#type-customer) [card&#x60; to charge. If not specified, Square sends an invoice via email. For an example to create a customer and add a card on file, see [Subscriptions Walkthrough](https://developer.squareup.com/docs/docs/subscriptions-api/walkthrough). | [optional] 
**timezone** | **String** | The timezone that is used in date calculations for the subscription. If unset, defaults to the location timezone. If a timezone is not configured for the location, defaults to \&quot;America/New_York\&quot;. Format: the IANA Timezone Database identifier for the location timezone. For a list of time zones, see [List of tz database time zones](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). | [optional] 


