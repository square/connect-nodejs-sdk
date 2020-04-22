# SquareConnect.ListCustomerGroupsResponse

### Description
**Note: This model is in beta.**

Defines the fields that are included in the response body of a request to the [ListCustomerGroups](#endpoint-listcustomergroups) endpoint.  One of `errors` or `groups` is present in a given response (never both).

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**[Error]**](Error.md) | Any errors that occurred during the request. | [optional] 
**groups** | [**[CustomerGroup]**](CustomerGroup.md) | A list of customer groups belonging to the current merchant. | [optional] 
**cursor** | **String** | A pagination cursor to retrieve the next set of results for your original query to the endpoint. This value is present only if the request succeeded and additional results are available.  See the [Pagination guide](https://developer.squareup.com/docs/working-with-apis/pagination) for more information. | [optional] 


