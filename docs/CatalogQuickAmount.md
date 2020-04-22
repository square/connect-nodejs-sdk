# SquareConnect.CatalogQuickAmount

### Description
**Note: This model is in beta.**

Represents a Quick Amount in the Catalog.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Represents the type of the Quick Amount. See [CatalogQuickAmountType](#type-catalogquickamounttype) for possible values | 
**amount** | [**Money**](Money.md) | Represents the actual amount of the Quick Amount with Money type. | 
**score** | **Number** | Describes the ranking of the Quick Amount provided by machine learning model, in the range [0, 100]. MANUAL type amount will always have score &#x3D; 100. | [optional] 
**ordinal** | **Number** | The order in which this Quick Amount should be displayed. | [optional] 


