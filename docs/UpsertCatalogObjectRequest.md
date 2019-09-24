# SquareConnect.UpsertCatalogObjectRequest

### Description



## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**idempotency_key** | **String** | A value you specify that uniquely identifies this request among all your requests. A common way to create a valid idempotency key is to use a Universally unique identifier (UUID).  If you&#39;re unsure whether a particular request was successful, you can reattempt it with the same idempotency key without worrying about creating duplicate objects.  See [Idempotency](https://developer.squareup.com/docs/basics/api101/idempotency) for more information. | 
**object** | [**CatalogObject**](CatalogObject.md) | A &#x60;CatalogObject&#x60; to be created or updated. - For updates, the object must be active (the &#x60;is_deleted&#x60; field is not &#x60;true&#x60;). - For creates, the object ID must start with &#x60;#&#x60;. The provided ID is replaced with a server-generated ID. | 


