# SquareConnect.SearchOrdersCustomerFilter

### Description

Filter based on Order `customer_id` and any Tender `customer_id` associated with the Order. Does not filter based on the [FulfillmentRecipient](#type-orderfulfillmentrecipient) `customer_id`.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer_ids** | **[String]** | Filter by orders with any of the listed &#x60;customer_id&#x60;s.  Max: 10 &#x60;customer_id&#x60;s. | [optional] 


