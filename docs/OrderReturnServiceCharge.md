# SquareConnect.OrderReturnServiceCharge

### Description

Represents the service charge applied to the original order.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uid** | **String** | Unique ID that identifies the return service charge only within this order. | [optional] [beta]
**source_service_charge_uid** | **String** | &#x60;uid&#x60; of the Service Charge from the Order containing the original charge of the service charge. &#x60;source_service_charge_uid&#x60; is &#x60;null&#x60; for unlinked returns. | [optional] 
**name** | **String** | The name of the service charge. | [optional] 
**catalog_object_id** | **String** | The catalog object ID of the associated &#x60;CatalogServiceCharge&#x60;. | [optional] 
**percentage** | **String** | The percentage of the service charge, as a string representation of a decimal number. For example, a value of &#x60;\&quot;7.25\&quot;&#x60; corresponds to a percentage of 7.25%.  Exactly one of &#x60;percentage&#x60; or &#x60;amount_money&#x60; should be set. | [optional] 
**amount_money** | [**Money**](Money.md) | The amount of a non-percentage based service charge.  Exactly one of &#x60;percentage&#x60; or &#x60;amount_money&#x60; should be set. | [optional] 
**applied_money** | [**Money**](Money.md) | The amount of money applied to the order by the service charge, including any inclusive tax amounts, as calculated by Square.  - For fixed-amount service charges, &#x60;applied_money&#x60; is equal to &#x60;amount_money&#x60;. - For percentage-based service charges, &#x60;applied_money&#x60; is the money calculated using the percentage. | [optional] 
**total_money** | [**Money**](Money.md) | The total amount of money to collect for the service charge.  __NOTE__: if an inclusive tax is applied to the service charge, &#x60;total_money&#x60; does not equal &#x60;applied_money&#x60; plus &#x60;total_tax_money&#x60; since the inclusive tax amount will already be included in both &#x60;applied_money&#x60; and &#x60;total_tax_money&#x60;. | [optional] 
**total_tax_money** | [**Money**](Money.md) | The total amount of tax money to collect for the service charge. | [optional] 
**calculation_phase** | **String** | The calculation phase after which to apply the service charge. See [OrderServiceChargeCalculationPhase](#type-orderservicechargecalculationphase) for possible values | [optional] 
**taxable** | **Boolean** | Indicates whether the surcharge can be taxed. Service charges calculated in the &#x60;TOTAL_PHASE&#x60; cannot be marked as taxable. | [optional] 
**applied_taxes** | [**[OrderLineItemAppliedTax]**](OrderLineItemAppliedTax.md) | The list of references to &#x60;OrderReturnTax&#x60; entities applied to the &#x60;OrderReturnServiceCharge&#x60;. Each &#x60;OrderLineItemAppliedTax&#x60; has a &#x60;tax_uid&#x60; that references the &#x60;uid&#x60; of a top-level &#x60;OrderReturnTax&#x60; that is being applied to the &#x60;OrderReturnServiceCharge&#x60;. On reads, the amount applied is populated. | [optional] [beta]


