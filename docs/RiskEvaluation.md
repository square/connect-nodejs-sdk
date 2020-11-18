# SquareConnect.RiskEvaluation

### Description
**Note: This model is in beta.**

Represents fraud risk information for the associated payment.  When you take a payment through Square's Payments API (using the `CreatePayment` endpoint), Square evaluates it and assigns a risk level to the payment. Sellers can use this information to determine the course of action (for example, provide the goods/services or refund the payment).

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **String** | The timestamp when payment risk was evaluated, in RFC3339 format. | [optional] 
**risk_level** | [**RiskEvaluationRiskLevel**](RiskEvaluationRiskLevel.md) | The risk level associated with the payment | [optional] 


