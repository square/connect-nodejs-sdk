# SquareConnect.AccumulateLoyaltyPointsRequest

### Description
**Note: This model is in beta.**

A request to accumulate points for a purchase.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accumulate_points** | [**LoyaltyEventAccumulatePoints**](LoyaltyEventAccumulatePoints.md) | The points to add to the account.  If you are using the Orders API to manage orders, you   specify the order ID. Otherwise, specify the  points to add. | 
**idempotency_key** | **String** | A unique string that identifies the &#x60;AccumulateLoyaltyPoints&#x60; request.  Keys can be any valid string but must be unique for every request. | 
**location_id** | **String** | The &#x60;location&#x60; where the purchase was made. | 


