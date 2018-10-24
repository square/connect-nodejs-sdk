# SquareConnect.BatchChangeInventoryRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**idempotency_key** | **String** | A client-supplied, universally unique identifier (UUID) for the request.  See [Idempotency](/basics/api101/idempotency) in the [API Development 101](/basics/api101/overview) section for more information. | [optional] 
**changes** | [**[InventoryChange]**](InventoryChange.md) | The set of physical counts and inventory adjustments to be made. Changes are applied based on the client-supplied timestamp and may be sent out of order. Max size is 100 changes. | [optional] 
**ignore_unchanged_counts** | **Boolean** | Indicates whether the current physical count should be ignored if the quantity is unchanged since the last physical count. Default: &#x60;true&#x60;. | [optional] 


