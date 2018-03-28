# Change Log

## Version 2.6.1 (2018-03-28)

* Updates user-agent header

## Version 2.6.0 (2018-03-27)

### Improvements: Orders API

* `BatchRetrieveOrders` will now return uncharged orders.

### New features: Orders API

* For Catalog-backed line items, setting `CreateOrderRequestLineItem.base_price_money` will now override 
  the catalog item variation's price.  
* `CreateOrderRequestModifier`s may now be created ad hoc using the new `name` and `base_price_money` fields.

## Version 2.5.5 (2018-01-06)

* `OTHER` enum value is added to `Type` on `V1SettlementEntry`

## Version 2.5.2 (2017-11-12)

* Initial release
