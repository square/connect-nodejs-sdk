# SquareConnect.SearchCatalogItemsRequest

### Description
**Note: This model is in beta.**

Defines the request body for the [SearchCatalogItems](#endpoint-Catalog-SearchCatalogItems) endpoint.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**text_filter** | **String** | The text filter expression to return items or item variations containing specified text in the &#x60;name&#x60;, &#x60;description&#x60;, or &#x60;abbreviation&#x60; attribute value of an item, or in the &#x60;name&#x60;, &#x60;sku&#x60;, or &#x60;upc&#x60; attribute value of an item variation. | [optional] 
**category_ids** | **[String]** | The category id query expression to return items containing the specified category IDs. | [optional] 
**stock_levels** | **[String]** | The stock-level query expression to return item variations with the specified stock levels. See [SearchCatalogItemsRequestStockLevel](#type-searchcatalogitemsrequeststocklevel) for possible values | [optional] 
**enabled_location_ids** | **[String]** | The enabled-location query expression to return items and item variations having specified enabled locations. | [optional] 
**cursor** | **String** | The pagination token, returned in the previous response, used to fetch the next batch of pending results. | [optional] 
**limit** | **Number** | The maximum number of results to return per page. The default value is 100. | [optional] 
**sort_order** | **String** | The order to sort the results by item names. The default sort order is ascending (&#x60;ASC&#x60;). See [SortOrder](#type-sortorder) for possible values | [optional] 
**product_types** | **[String]** | The product types query expression to return items or item variations having the specified product types. See [CatalogItemProductType](#type-catalogitemproducttype) for possible values | [optional] 
**custom_attribute_filters** | [**[CustomAttributeFilter]**](CustomAttributeFilter.md) | The customer-attribute filter to return items or item variations matching the specified custom attribute expressions. A maximum number of 10 custom attribute expressions are supported in a single call to the &#x60;SearchCatalogItems&#x60; endpoint. | [optional] 


