# SquareConnect.CatalogQuickAmountsSettings

### Description
**Note: This model is in beta.**

A parent Catalog Object model represents a set of Quick Amounts and the settings control the amounts.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**option** | **String** | Represents the option seller currently uses on Quick Amounts. See [CatalogQuickAmountsSettingsOption](#type-catalogquickamountssettingsoption) for possible values | 
**eligible_for_auto_amounts** | **Boolean** | Represents location&#39;s eligibility for auto amounts The boolean should be consistent with whether there are AUTO amounts in the &#x60;amounts&#x60;. | [optional] 
**amounts** | [**[CatalogQuickAmount]**](CatalogQuickAmount.md) | Represents a set of Quick Amounts at this location. | [optional] 


