# SquareConnect.ListDisputesRequest

### Description
**Note: This model is in beta.**

Defines request parameters for the ListDisputes endpoint.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cursor** | **String** | A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for the original query. For more information, see [Paginating](https://developer.squareup.com/docs/basics/api101/pagination). | [optional] 
**states** | **[String]** | The dispute states to filter the result. If not specified, the endpoint returns all open disputes (dispute status is not &#x60;INQUIRY_CLOSED&#x60;, &#x60;WON&#x60;, or &#x60;LOST&#x60;). See [DisputeState](#type-disputestate) for possible values | [optional] 
**location_id** | **String** | The ID of the location for which to return  a list of disputes. If not specified, the endpoint returns all open disputes (dispute status is not &#x60;INQUIRY_CLOSED&#x60;, &#x60;WON&#x60;, or  &#x60;LOST&#x60;) associated with all locations. | [optional] 


