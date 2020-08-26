# SquareConnect.BatchRetrieveInventoryCountsRequest

### Description



## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**catalog_object_ids** | **[String]** | The filter to return results by &#x60;CatalogObject&#x60; ID. The filter is applicable only when set.  The default is null. | [optional] 
**location_ids** | **[String]** | The filter to return results by &#x60;Location&#x60; ID.  This filter is applicable only when set. The default is null. | [optional] 
**updated_after** | **String** | The filter to return results with their &#x60;calculated_at&#x60; value  after the given time as specified in an RFC 3339 timestamp.  The default value is the UNIX epoch of (&#x60;1970-01-01T00:00:00Z&#x60;). | [optional] 
**cursor** | **String** | A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for the original query.  See the [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination) guide for more information. | [optional] 
**states** | **[String]** | The filter to return results by &#x60;InventoryState&#x60;. The filter is only applicable when set. Ignored are untracked states of &#x60;NONE&#x60;, &#x60;SOLD&#x60;, and &#x60;UNLINKED_RETURN&#x60;. The default is null. See [InventoryState](#type-inventorystate) for possible values | [optional] 


