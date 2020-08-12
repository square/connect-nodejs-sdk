# SquareConnect.Subscription

### Description
**Note: This model is in beta.**

Represents a customer subscription to a subscription plan. For an overview of the `Subscription` type, see  [Subscription object](/docs/subscriptions-api/overview#subscription-object-overview).

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The Square-assigned ID of the subscription. | [optional] 
**location_id** | **String** | The ID of the location associated with the subscription. | [optional] 
**plan_id** | **String** | The ID of the associated &#x60;subscription plan&#x60;. | [optional] 
**customer_id** | **String** | The ID of the associated &#x60;customer&#x60; profile. | [optional] 
**start_date** | **String** | The start date of the subscription, in YYYY-MM-DD format (for example, 2013-01-15). | [optional] 
**canceled_date** | **String** | The subscription cancellation date, in YYYY-MM-DD format (for example, 2013-01-15). On this date, the subscription status changes  to &#x60;CANCELED&#x60; and the subscription billing stops.  If you don&#39;t set this field, the subscription plan dictates if and  when subscription ends.   You cannot update this field, you can only clear it. | [optional] 
**status** | **String** | The current status of the subscription. See [SubscriptionStatus](#type-subscriptionstatus) for possible values | [optional] 
**tax_percentage** | **String** | The tax amount applied when billing the subscription. The percentage is expressed in decimal form, using a &#x60;&#39;.&#39;&#x60; as the decimal separator and without a &#x60;&#39;%&#39;&#x60; sign. For example, a value of &#x60;7.5&#x60; corresponds to 7.5%. | [optional] 
**invoice_ids** | **[String]** | The IDs of the &#x60;invoices&#x60; created for the  subscription, listed in order when the invoices were created  (oldest invoices appear first). | [optional] 
**price_override_money** | [**Money**](Money.md) | A custom price to apply for the subscription. If specified,  it overrides the price configured by the subscription plan. | [optional] 
**version** | **Number** | The version of the object. When updating an object, the version supplied must match the version in the database, otherwise the write will be rejected as conflicting. | [optional] 
**created_at** | **String** | The timestamp when the subscription was created, in RFC 3339 format. | [optional] 
**card_id** | **String** | The ID of the &#x60;customer](#type-customer) [card&#x60; that is charged for the subscription. | [optional] 
**paid_until_date** | **String** | The date up to which the customer is invoiced for the subscription, in YYYY-MM-DD format (for example, 2013-01-15).  After the invoice is paid for a given billing period, this date will be the last day of the billing period. For example, suppose for the month of May a customer gets an invoice (or charged the card) on May 1. For the monthly billing scenario, this date is then set to May 31. | [optional] 
**timezone** | **String** | Timezone that will be used in date calculations for the subscription. Defaults to the timezone of the location based on &#x60;location_id&#x60;. Format: the IANA Timezone Database identifier for the location timezone (for example, &#x60;America/Los_Angeles&#x60;). | [optional] 


