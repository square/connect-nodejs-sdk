# SquareConnect.BatchRetrieveInventoryCountsRequest

### Description



## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**catalog_object_ids** | **[String]** | Filters results by &#x60;CatalogObject&#x60; ID. Only applied when set. Default: unset. | [optional] 
**location_ids** | **[String]** | Filters results by &#x60;Location&#x60; ID. Only applied when set. Default: unset. | [optional] 
**updated_after** | **String** | Provided as an RFC 3339 timestamp. Returns results whose &#x60;calculated_at&#x60; value is after the given time. Default: UNIX epoch (&#x60;1970-01-01T00:00:00Z&#x60;). | [optional] 
**cursor** | **String** | A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for the original query.  See the [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination) guide for more information. | [optional] 


