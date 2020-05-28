# SquareConnect.CustomerSort

### Description

Specifies how searched customers profiles are sorted, including the sort key and sort order.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**field** | **String** |  Use one or more customer attributes as the sort key to sort searched customer profiles.  For example, use creation date (&#x60;created_at&#x60;) of customers or default attributes as the sort key.   Default: &#x60;DEFAULT&#x60;. See [CustomerSortField](#type-customersortfield) for possible values | [optional] 
**order** | **String** | Indicates the order in which results should be sorted based on the sort field value. Strings use standard alphabetic comparison to determine order. Strings representing numbers are sorted as strings.  Default: &#x60;ASC&#x60;. See [SortOrder](#type-sortorder) for possible values | [optional] 


