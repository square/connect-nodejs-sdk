# Change Log

## Version 2.20180712.0 (2018-07-12)

We introduce Square API versions. `Square-Version` is 2018-07-12 for this SDK.

### How versioning works

Square API versions (`Square-Version`) track changes in the evolution of Connect
v2 APIs. The `Square-Version` naming scheme is `YYYY-MM-DD`, which indicates
the date the version was released. Connect v1 APIs are not versioned. Square
continues to support Connect v1, but future releases will focus on improving
Connect v2 functionality.

By default, new Square applications are pinned to the version current at the
time the application was created in the Square Application Dashboard. Pinning an
application sets the default `Square-Version` for the application. The default
`Square-Version` of an application can be reviewed and updated at any time on
the settings pages for the application.


### Versioning and SDKs

When a new `Square-Version` is released, new Connect SDKs are publish on GitHub
and various package management systems. SDK updates follow the version
convention of the associated language and manager but include the related
`Square-Version` in the SDK version. For example, Connect SDKs tied to version
`2018-01-04` might look like `{SDK_VERSION}.20180104.{VERSION_INCREMENT}`.

While SDK versions can be mapped to a related Square-version, SDK versions
follow an independent, incremental versioning scheme to allow updates and
improvements to the SDKs outside of `Square-Version` updates.


### Migrating to new versions

In most cases, Square-version migration should be straightforward, with known
differences listed in the related Change Log.

To test migrations, developers can override the default `Square-Version` of an
application by explicitly setting the preferred `Square-Version` in the HTTP
header of the Connect v2 API request for REST calls. Requesting an API version
that does not exist returns an error. Successful API responses include the
`Square-Version` header to indicate the API version used to process request.

Connect SDK versions are locked to specific API versions and cannot be
overwritten. Instead, the SDK must be upgraded to work with new API versions.

## Version 2.9.0 (2018-06-28)

We have added search functionality to the Connect v2 Customer API.

### New features and Improvements: Customer API (Connect v2)

* `SearchCustomers` endpoint &mdash; retrieves groups of customer profiles
  based on a related characteristic. For example, retrieving all customers
  created in the past 24 hours.
* `creation_source` field is now available on `Customer` entities. The creation
  source exposes the process that created a customer profile. For example, if
  a customer is created using the API, the creation source will be
  `THIRD_PARTY`.
* **Instant Profiles** are now exposed in the following endpoints:
  `RetrieveCustomer`, `SearchCustomers`, `UpdateCustomer`, `DeleteCustomer`.

### Fixes: Inventory SDK (Connect v1)

* Fix SDK request property `adjustment_type` in V1 Adjust Inventory.

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
