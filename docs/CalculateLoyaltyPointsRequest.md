# SquareConnect.CalculateLoyaltyPointsRequest

### Description
**Note: This model is in beta.**

A request to calculate the points that a buyer can earn from  a specified purchase.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**order_id** | **String** | The &#x60;order&#x60; ID for which to calculate the points. Specify this field if your application uses the Orders API to process orders. Otherwise, specify the &#x60;transaction_amount&#x60;. | [optional] 
**transaction_amount_money** | [**Money**](Money.md) | The purchase amount for which to calculate the points.  Specify this field if your application does not use the Orders API to process orders. Otherwise, specify the &#x60;order_id&#x60;. | [optional] 


