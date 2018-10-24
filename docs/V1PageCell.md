# SquareConnect.V1PageCell

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page_id** | **String** | The unique identifier of the page the cell is included on. | [optional] 
**row** | **Number** | The row of the cell. Always an integer between 0 and 4, inclusive. | [optional] 
**column** | **Number** | The column of the cell. Always an integer between 0 and 4, inclusive. | [optional] 
**object_type** | **String** | The type of entity represented in the cell (ITEM, DISCOUNT, CATEGORY, or PLACEHOLDER). | [optional] 
**object_id** | **String** | The unique identifier of the entity represented in the cell. Not present for cells with an object_type of PLACEHOLDER. | [optional] 
**placeholder_type** | **String** | For a cell with an object_type of PLACEHOLDER, this value indicates the cell&#39;s special behavior. | [optional] 


<a name="ObjectTypeEnum"></a>
## Enum: ObjectTypeEnum


* `ITEM` (value: `"ITEM"`)

* `DISCOUNT` (value: `"DISCOUNT"`)

* `CATEGORY` (value: `"CATEGORY"`)

* `PLACEHOLDER` (value: `"PLACEHOLDER"`)




<a name="PlaceholderTypeEnum"></a>
## Enum: PlaceholderTypeEnum


* `ALL_ITEMS` (value: `"ALL_ITEMS"`)

* `DISCOUNTS_CATEGORY` (value: `"DISCOUNTS_CATEGORY"`)

* `REWARDS_FINDER` (value: `"REWARDS_FINDER"`)




