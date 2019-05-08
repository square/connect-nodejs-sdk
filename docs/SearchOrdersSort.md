# SquareConnect.SearchOrdersSort

### Description

Sorting options for a query. Returned Orders will always be sorted on a timestamp.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sort_field** | **String** | The field to sort by.  __Important:__ When using a [DateTimeFilter](#type-searchordersfilter), &#x60;sort_field&#x60; must match the set time range field. If this field does not match the time range field in &#x60;DateTimeFilter&#x60;, SearchOrder will return an error.  Default: &#x60;CREATED_AT&#x60;. See [SearchOrdersSortField](#type-searchorderssortfield) for possible values | 
**sort_order** | **String** | The order in which results are returned. Defaults to &#x60;DESC&#x60;. See [SortOrder](#type-sortorder) for possible values | [optional] 


<a name="SortFieldEnum"></a>
## Enum: SortFieldEnum


* `CREATED_AT` (value: `"CREATED_AT"`)

* `UPDATED_AT` (value: `"UPDATED_AT"`)

* `CLOSED_AT` (value: `"CLOSED_AT"`)




<a name="SortOrderEnum"></a>
## Enum: SortOrderEnum


* `DESC` (value: `"DESC"`)

* `ASC` (value: `"ASC"`)




