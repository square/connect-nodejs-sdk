# SquareConnect.AdjustLoyaltyPointsRequest

### Description
**Note: This model is in beta.**

A request to adjust (add or subtract) points manually.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**idempotency_key** | **String** | A unique string that identifies this &#x60;AdjustLoyaltyPoints&#x60; request.  Keys can be any valid string, but must be unique for every request. | 
**adjust_points** | [**LoyaltyEventAdjustPoints**](LoyaltyEventAdjustPoints.md) | The points to adjust (add or subtract) and the reason for the adjustment. | 


