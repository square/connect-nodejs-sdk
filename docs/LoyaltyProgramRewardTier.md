# SquareConnect.LoyaltyProgramRewardTier

### Description
**Note: This model is in beta.**

Describes a loyalty program reward tier.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The Square-assigned ID of the reward tier. | 
**points** | **Number** | The points exchanged for the reward tier. | 
**name** | **String** | The name of the reward tier. | 
**definition** | [**LoyaltyProgramRewardDefinition**](LoyaltyProgramRewardDefinition.md) | Provides details about the reward tier definition. DEPRECATED at version 2020-12-16. Replaced by the &#x60;pricing_rule_reference&#x60; field. | 
**created_at** | **String** | The timestamp when the reward tier was created, in RFC 3339 format. | 
**pricing_rule_reference** | [**CatalogObjectReference**](CatalogObjectReference.md) | A reference to the specific version of a &#x60;PRICING_RULE&#x60; catalog object that contains information about the reward tier discount.  Use &#x60;object_id&#x60; and &#x60;catalog_version&#x60; with the &#x60;RetrieveCatalogObject&#x60; endpoint to get discount details. Make sure to set &#x60;include_related_objects&#x60; to true in the request to retrieve all catalog objects that define the discount. For more information, see [Get discount details for the reward](https://developer.squareup.com/docs/docs/loyalty-api/overview#get-discount-details). | [optional] 


