# SquareConnect.CatalogQuery

### Description

A query composed of one or more different types of filters to narrow the scope of targeted objects when calling the `SearchCatalogObjects` endpoint.  Although a query can have multiple filters, only one query is allowed per call to [SearchCatalogObjects](#endpoint-Catalog-SearchCatalogObjects).  When a query filter is based on an attribute, the attribute must be searchable. Searchable attributes are listed as follows, along their parent types that can be searched for with applicable query filters.  * Searchable attribute and objects queryable by searchable attributes ** - `name`:  `CatalogItem`, `CatalogItemVariation`, `CatelogCatogry`, `CatalogTax`, `CatalogDiscount`, `CatalogModifier`, 'CatalogModifierList`, `CatalogItemOption`, `CatalogItemOptionValue` - `description`: `CatalogItem`, `CatalogItemOptionValue` - `abbreviation`: `CatalogItem` - `upc`: `CatalogItemVariation` - `sku`: `CatalogItemVariation` - `caption`: `CatalogImage` - `display_name`: `CatalogItemOption`  For example, to search for [CatalogItem](#type-CatalogItem) objects by searchable attributes, you can use the `\"name\"`, `\"description\"`, or `\"abbreviation\"` attribute in an applicable query filter.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sorted_attribute_query** | [**CatalogQuerySortedAttribute**](CatalogQuerySortedAttribute.md) | A query expression to sort returned query result by the given attribute. | [optional] 
**exact_query** | [**CatalogQueryExact**](CatalogQueryExact.md) | An exact query expression to return objects with attribute name and value matching the specified attribute name and value exactly. Value matching is case insensitive. | [optional] 
**set_query** | [**CatalogQuerySet**](CatalogQuerySet.md) | A set query expression to return objects with attribute name and value matching the specified attribute name and any of the specified attribute values exactly. Value matching is case insensitive. | [optional] 
**prefix_query** | [**CatalogQueryPrefix**](CatalogQueryPrefix.md) | A prefix query expression to return objects with attribute values that have a prefix matching the specified string value. Value maching is case insensitive. | [optional] 
**range_query** | [**CatalogQueryRange**](CatalogQueryRange.md) | A range query expression to return objects with numberic values that lie in the specified range. | [optional] 
**text_query** | [**CatalogQueryText**](CatalogQueryText.md) | A text query expression to return objectd whose searchable attributes contain all of the given keywords, irrespective of their order. For example, if a &#x60;CatalogItem&#x60; contains custom attribute values of &#x60;{\&quot;name\&quot;: \&quot;t-shirt\&quot;}&#x60; and &#x60;{\&quot;description\&quot;: \&quot;Small, Purple\&quot;}&#x60;, the query filter of &#x60;{\&quot;keywords\&quot;: [\&quot;shirt\&quot;, \&quot;sma\&quot;, \&quot;purp\&quot;]}&#x60; returns this item. | [optional] 
**items_for_tax_query** | [**CatalogQueryItemsForTax**](CatalogQueryItemsForTax.md) | A query expression to return items that have any of the specified taxes (as identified by the corresponding &#x60;CatalogTax&#x60; object IDs) enabled. | [optional] 
**items_for_modifier_list_query** | [**CatalogQueryItemsForModifierList**](CatalogQueryItemsForModifierList.md) | A query expression to return items that have any of the given modifier list (as identifieid by the coresponding &#x60;CatalogModifierList&#x60;s IDs) enabled. | [optional] 
**items_for_item_options_query** | [**CatalogQueryItemsForItemOptions**](CatalogQueryItemsForItemOptions.md) | A query expression to return items that contains the specified item options (as identified the corresponding &#x60;CatalogItemOption&#x60; IDs). | [optional] 
**item_variations_for_item_option_values_query** | [**CatalogQueryItemVariationsForItemOptionValues**](CatalogQueryItemVariationsForItemOptionValues.md) | A query expression to return item variations (of the &#x60;CatalogItemVariation&#x60; that contain all of the specified &#x60;CatalogItemOption&#x60; IDs. | [optional] 


