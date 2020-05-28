# SquareConnect.LoyaltyEventAccumulatePoints

### Description
**Note: This model is in beta.**

Provides metadata when the event `type` is `ACCUMULATE_POINTS`.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**loyalty_program_id** | **String** | The ID of the &#x60;loyalty program&#x60;. | [optional] 
**points** | **Number** | The number of points accumulated by the event. | [optional] 
**order_id** | **String** | The ID of the &#x60;order&#x60; for which the buyer accumulated the points. This field is returned only if the Orders API is used to process orders. | [optional] 


