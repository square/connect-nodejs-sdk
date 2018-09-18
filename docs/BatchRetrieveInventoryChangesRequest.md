# SquareConnect.BatchRetrieveInventoryChangesRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**catalogObjectIds** | **[String]** | Filters results by [CatalogObject](#type-catalogobject) ID. Only applied when set. Default: unset. | [optional] 
**locationIds** | **[String]** | Filters results by [Location](#type-location) ID. Only applied when set. Default: unset. | [optional] 
**types** | **[String]** | Filters results by [InventoryChangeType](#type-inventorychangetype). Default: [&#x60;PHYSICAL_COUNT&#x60;, &#x60;ADJUSTMENT&#x60;]. &#x60;TRANSFER&#x60; is not supported as a filter. | [optional] 
**states** | **[String]** | Filters &#x60;ADJUSTMENT&#x60; query results by [InventoryState](#type-inventorystate). Only applied when set. Default: unset. | [optional] 
**updatedAfter** | **String** | Provided as an RFC 3339 timestamp. Returns results whose &#x60;created_at&#x60; or &#x60;calculated_at&#x60; value is after the given time. Default: UNIX epoch (&#x60;1970-01-01T00:00:00Z&#x60;). | [optional] 
**updatedBefore** | **String** | Provided as an RFC 3339 timestamp. Returns results whose &#x60;created_at&#x60; or &#x60;calculated_at&#x60; value is strictly before the given time. Default: UNIX epoch (&#x60;1970-01-01T00:00:00Z&#x60;). | [optional] 
**cursor** | **String** | A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for the original query.  See [Paginating results](#paginatingresults) for more information. | [optional] 


<a name="[TypesEnum]"></a>
## Enum: [TypesEnum]


* `PHYSICAL_COUNT` (value: `"PHYSICAL_COUNT"`)

* `ADJUSTMENT` (value: `"ADJUSTMENT"`)

* `TRANSFER` (value: `"TRANSFER"`)




<a name="[StatesEnum]"></a>
## Enum: [StatesEnum]


* `CUSTOM` (value: `"CUSTOM"`)

* `IN_STOCK` (value: `"IN_STOCK"`)

* `SOLD` (value: `"SOLD"`)

* `RETURNED_BY_CUSTOMER` (value: `"RETURNED_BY_CUSTOMER"`)

* `RESERVED_FOR_SALE` (value: `"RESERVED_FOR_SALE"`)

* `SOLD_ONLINE` (value: `"SOLD_ONLINE"`)

* `ORDERED_FROM_VENDOR` (value: `"ORDERED_FROM_VENDOR"`)

* `RECEIVED_FROM_VENDOR` (value: `"RECEIVED_FROM_VENDOR"`)

* `IN_TRANSIT_TO` (value: `"IN_TRANSIT_TO"`)

* `NONE` (value: `"NONE"`)

* `WASTE` (value: `"WASTE"`)

* `UNLINKED_RETURN` (value: `"UNLINKED_RETURN"`)




