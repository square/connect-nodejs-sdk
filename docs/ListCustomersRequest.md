# SquareConnect.ListCustomersRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cursor** | **String** | A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for your original query.  See [Paginating results](#paginatingresults) for more information. | [optional] 
**sort_field** | **String** | Indicates how Customers should be sorted. Default: &#x60;DEFAULT&#x60;. See [CustomerSortField](#type-customersortfield) for possible values. | [optional] 
**sort_order** | **String** | Indicates whether Customers should be sorted in ascending (&#x60;ASC&#x60;) or descending (&#x60;DESC&#x60;) order. Default: &#x60;ASC&#x60;. See [SortOrder](#type-sortorder) for possible values. | [optional] 


<a name="SortFieldEnum"></a>
## Enum: SortFieldEnum


* `DEFAULT` (value: `"DEFAULT"`)

* `CREATED_AT` (value: `"CREATED_AT"`)




<a name="SortOrderEnum"></a>
## Enum: SortOrderEnum


* `DESC` (value: `"DESC"`)

* `ASC` (value: `"ASC"`)




