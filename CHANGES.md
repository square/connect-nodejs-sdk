# Change Log

## Version 2.8.0 (2018-05-24)

We have added sorting functionality to the Connect v2 Customer API, updated
the Connect v1 Payments API to include information about surcharges and
improvements to the Item data type.

### New feature: Customer API (Connect v2)

* **ListCustomers** endpoint &mdash; now provides the ability to sort
  customers by their creation date using the `sort_field` and
  `sort_order` parameters.

### New features: Payments API (Connect v1)

The Payments API now returns information about surcharges applied to payments.
The new functionality introduces the following new data types:

* **SurchargeMoney** datatype &mdash; The total of all surcharges applied
  to the payment.
* **Surcharges** datatype &mdash; A list of all surcharges associated with
  the payment.
* **Surcharge** datatype &mdash; A surcharge that is applied to the payment.
  One example of a surcharge is auto-gratuity, which is a fixed-rate surcharge
  applied to every payment, often based on party size.

We are constantly evaluating new languages to add. In the meantime, if the
language you need is not supported, you can use our
[Swagger pipeline](<%= articles__client_libraries_path%>#generatingwithswagger)
to generate a custom SDK or continue sending JSON to the endpoint URLs directly.

### Improvement: Item (Connect v1)

**Item** will now provide two new properties:

* `category_id` &mdash; indicates if an item can be added to pickup orders
  from the merchant's online store
* `available_for_pickup` &mdash; indicates the item's category (if any).

## Version 2.7.0 (2018-04-26)

### New features: Transactions API and Payments API

The Transactions API in Connect v2 now includes payment and refund information from exchanges.

* `ListTransactions` now includes payment information from sales and exchanges and refund
information from returns and exchanges.
* `ListRefunds` now includes refunds that result from exchanges in addition to partial refunds and
itemized returns through Square's Point of Sale applications.

The Payments API in Connect v1 now includes payment and refund information from exchanges.

* `ListPayments` now includes refunds that are generated from exchanges to account for the
value of returned goods.
* `ListRefunds` now returns an approximate number of refunds (default: 100, max: 200).
The response may contain more results than the prescribed limit when refunds are made
simultaneously to multiple tenders in a payment or when refunds are generated from exchanges
to account for the value of returned goods.
* `is_exchange` is added to `V1Refund` and `V1Tender`. Refunds and tenders marked in this way
represent the value of returned goods in an exchange, rather than actual money movement.

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
