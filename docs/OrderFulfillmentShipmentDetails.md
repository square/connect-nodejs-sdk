# SquareConnect.OrderFulfillmentShipmentDetails

### Description
**Note: This model is in beta.**

Contains details necessary to fulfill a shipment order.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recipient** | [**OrderFulfillmentRecipient**](OrderFulfillmentRecipient.md) | Information on the person meant to receive this shipment fulfillment. | [optional] 
**carrier** | **String** | The shipping carrier being used to ship this fulfillment e.g. UPS, FedEx, USPS, etc. | [optional] 
**shipping_note** | **String** | A note with additional information for the shipping carrier. | [optional] 
**shipping_type** | **String** | A description of the type of shipping product purchased from the carrier. e.g. First Class, Priority, Express | [optional] 
**tracking_number** | **String** | The reference number provided by the carrier to track the shipment&#39;s progress. | [optional] 
**tracking_url** | **String** | A link to the tracking webpage on the carrier&#39;s website. | [optional] 
**placed_at** | **String** | The [timestamp](#workingwithdates) indicating when the shipment was requested. Must be in RFC3339 timestamp format, e.g., \&quot;2016-09-04T23:59:33.123Z\&quot;. | [optional] 
**in_progress_at** | **String** | The [timestamp](#workingwithdates) indicating when this fulfillment was moved to the &#x60;RESERVED&#x60; state. Indicates that preparation of this shipment has begun. Must be in RFC3339 timestamp format, e.g., \&quot;2016-09-04T23:59:33.123Z\&quot;. | [optional] 
**packaged_at** | **String** | The [timestamp](#workingwithdates) indicating when this fulfillment was moved to the &#x60;PREPARED&#x60; state. Indicates that the fulfillment is packaged. Must be in RFC3339 timestamp format, e.g., \&quot;2016-09-04T23:59:33.123Z\&quot;. | [optional] 
**expected_shipped_at** | **String** | The [timestamp](#workingwithdates) indicating when the shipment is expected to be delivered to the shipping carrier. Must be in RFC3339 timestamp format, e.g., \&quot;2016-09-04T23:59:33.123Z\&quot;. | [optional] 
**shipped_at** | **String** | The [timestamp](#workingwithdates) indicating when this fulfillment was moved to the &#x60;COMPLETED&#x60;state. Indicates that the fulfillment has been given to the shipping carrier. Must be in RFC3339 timestamp format, e.g., \&quot;2016-09-04T23:59:33.123Z\&quot;. | [optional] 
**canceled_at** | **String** | The [timestamp](#workingwithdates) indicating the shipment was canceled. Must be in RFC3339 timestamp format, e.g., \&quot;2016-09-04T23:59:33.123Z\&quot;. | [optional] 
**cancel_reason** | **String** | A description of why the shipment was canceled. | [optional] 
**failed_at** | **String** | The [timestamp](#workingwithdates) indicating when the shipment failed to be completed. Must be in RFC3339 timestamp format, e.g., \&quot;2016-09-04T23:59:33.123Z\&quot;. | [optional] 
**failure_reason** | **String** | A description of why the shipment failed to be completed. | [optional] 


