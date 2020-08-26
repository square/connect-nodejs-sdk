# SquareConnect.BatchRetrieveInventoryChangesRequest

### Description



## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**catalog_object_ids** | **[String]** | The filter to return results by &#x60;CatalogObject&#x60; ID. The filter is only applicable when set. The default value is null. | [optional] 
**location_ids** | **[String]** | The filter to return results by &#x60;Location&#x60; ID.  The filter is only applicable when set. The default value is null. | [optional] 
**types** | **[String]** | The filter to return results by &#x60;InventoryChangeType&#x60; values other than &#x60;TRANSFER&#x60;. The default value is &#x60;[PHYSICAL_COUNT, ADJUSTMENT]&#x60;. See [InventoryChangeType](#type-inventorychangetype) for possible values | [optional] 
**states** | **[String]** | The filter to return &#x60;ADJUSTMENT&#x60; query results by &#x60;InventoryState&#x60;. This filter is only applied when set. The default value is null. See [InventoryState](#type-inventorystate) for possible values | [optional] 
**updated_after** | **String** | The filter to return results with their &#x60;calculated_at&#x60; value   after the given time as specified in an RFC 3339 timestamp.  The default value is the UNIX epoch of (&#x60;1970-01-01T00:00:00Z&#x60;). | [optional] 
**updated_before** | **String** | The filter to return results with their &#x60;created_at&#x60; or &#x60;calculated_at&#x60; value   strictly before the given time as specified in an RFC 3339 timestamp.  The default value is the UNIX epoch of (&#x60;1970-01-01T00:00:00Z&#x60;). | [optional] 
**cursor** | **String** | A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for the original query.  See the [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination) guide for more information. | [optional] 


