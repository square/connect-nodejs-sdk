# SquareConnect.CatalogQuery

### Description

A query to be applied to a SearchCatalogObjects request. Only one query field may be present.  Where an attribute name is required, it should be specified as the name of any field marked \"searchable\" from the structured data types for the desired result object type(s) ([CatalogItem](#type-catalogitem), [CatalogItemVariation](#type-catalogitemvariation), [CatalogCategory](#type-catalogcategory), [CatalogTax](#type-catalogtax), [CatalogDiscount](#type-catalogdiscount), [CatalogModifierList](#type-catalogmodifierlist), [CatalogModifier](#type-catalogmodifier)).  For example, a query that should return Items may specify attribute names from any of the searchable fields of the [CatalogItem](#type-catalogitem) data type, namely `\"name\"`, `\"description\"`, and `\"abbreviation\"`.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sorted_attribute_query** | [**CatalogQuerySortedAttribute**](CatalogQuerySortedAttribute.md) | A query that returns all objects, sorted by the given attribute. | [optional] 
**exact_query** | [**CatalogQueryExact**](CatalogQueryExact.md) | A query that returns only objects for which the given (string-valued) attribute has the given case-insensitive value. | [optional] 
**prefix_query** | [**CatalogQueryPrefix**](CatalogQueryPrefix.md) | A query that returns only objects for which the given (string-valued) attribute has the given case-insensitive prefix. | [optional] 
**range_query** | [**CatalogQueryRange**](CatalogQueryRange.md) | A query that returns only objects for which the given (integer-valued) attribute lies in the given range. | [optional] 
**text_query** | [**CatalogQueryText**](CatalogQueryText.md) | A query that returns only objects whose searchable attributes contain all of the given keywords as prefixes. For example, if a [CatalogItem](#type-catalogitem) contains attributes &#x60;{\&quot;name\&quot;: \&quot;t-shirt\&quot;}&#x60; and &#x60;{\&quot;description\&quot;: \&quot;Small, Purple\&quot;}&#x60;, it will be matched by the query &#x60;{\&quot;keywords\&quot;: [\&quot;shirt\&quot;, \&quot;sma\&quot;, \&quot;purp\&quot;]}&#x60;. | [optional] 
**items_for_tax_query** | [**CatalogQueryItemsForTax**](CatalogQueryItemsForTax.md) | A query that returns all [CatalogItem](#type-catalogitem)s that have any of the given [CatalogTax](#type-catalogtax)es enabled. | [optional] 
**items_for_modifier_list_query** | [**CatalogQueryItemsForModifierList**](CatalogQueryItemsForModifierList.md) | A query that returns all [CatalogItem](#type-catalogitem)s that have any of the given [CatalogModifierList](#type-catalogmodifierlist)s enabled. | [optional] 


