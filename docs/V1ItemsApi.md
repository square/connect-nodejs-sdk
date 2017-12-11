# SquareConnect.V1ItemsApi

All URIs are relative to *https://connect.squareup.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**adjustInventory**](V1ItemsApi.md#adjustInventory) | **POST** /v1/{location_id}/inventory/{variation_id} | Adjusts an item variation&#39;s current available inventory.
[**applyFee**](V1ItemsApi.md#applyFee) | **PUT** /v1/{location_id}/items/{item_id}/fees/{fee_id} | Associates a fee with an item, meaning the fee is automatically applied to the item in Square Register.
[**applyModifierList**](V1ItemsApi.md#applyModifierList) | **PUT** /v1/{location_id}/items/{item_id}/modifier-lists/{modifier_list_id} | Associates a modifier list with an item, meaning modifier options from the list can be applied to the item.
[**createCategory**](V1ItemsApi.md#createCategory) | **POST** /v1/{location_id}/categories | Creates an item category.
[**createDiscount**](V1ItemsApi.md#createDiscount) | **POST** /v1/{location_id}/discounts | Creates a discount.
[**createFee**](V1ItemsApi.md#createFee) | **POST** /v1/{location_id}/fees | Creates a fee (tax).
[**createItem**](V1ItemsApi.md#createItem) | **POST** /v1/{location_id}/items | Creates an item and at least one variation for it.
[**createModifierList**](V1ItemsApi.md#createModifierList) | **POST** /v1/{location_id}/modifier-lists | Creates an item modifier list and at least one modifier option for it.
[**createModifierOption**](V1ItemsApi.md#createModifierOption) | **POST** /v1/{location_id}/modifier-lists/{modifier_list_id}/modifier-options | Creates an item modifier option and adds it to a modifier list.
[**createPage**](V1ItemsApi.md#createPage) | **POST** /v1/{location_id}/pages | Creates a Favorites page in Square Register.
[**createVariation**](V1ItemsApi.md#createVariation) | **POST** /v1/{location_id}/items/{item_id}/variations | Creates an item variation for an existing item.
[**deleteCategory**](V1ItemsApi.md#deleteCategory) | **DELETE** /v1/{location_id}/categories/{category_id} | Deletes an existing item category.
[**deleteDiscount**](V1ItemsApi.md#deleteDiscount) | **DELETE** /v1/{location_id}/discounts/{discount_id} | Deletes an existing discount.
[**deleteFee**](V1ItemsApi.md#deleteFee) | **DELETE** /v1/{location_id}/fees/{fee_id} | Deletes an existing fee (tax).
[**deleteItem**](V1ItemsApi.md#deleteItem) | **DELETE** /v1/{location_id}/items/{item_id} | Deletes an existing item and all item variations associated with it.
[**deleteModifierList**](V1ItemsApi.md#deleteModifierList) | **DELETE** /v1/{location_id}/modifier-lists/{modifier_list_id} | Deletes an existing item modifier list and all modifier options associated with it.
[**deleteModifierOption**](V1ItemsApi.md#deleteModifierOption) | **DELETE** /v1/{location_id}/modifier-lists/{modifier_list_id}/modifier-options/{modifier_option_id} | Deletes an existing item modifier option from a modifier list.
[**deletePage**](V1ItemsApi.md#deletePage) | **DELETE** /v1/{location_id}/pages/{page_id} | Deletes an existing Favorites page and all of its cells.
[**deletePageCell**](V1ItemsApi.md#deletePageCell) | **DELETE** /v1/{location_id}/pages/{page_id}/cells | Deletes a cell from a Favorites page in Square Register.
[**deleteVariation**](V1ItemsApi.md#deleteVariation) | **DELETE** /v1/{location_id}/items/{item_id}/variations/{variation_id} | Deletes an existing item variation from an item.
[**listCategories**](V1ItemsApi.md#listCategories) | **GET** /v1/{location_id}/categories | Lists all of a location&#39;s item categories.
[**listDiscounts**](V1ItemsApi.md#listDiscounts) | **GET** /v1/{location_id}/discounts | Lists all of a location&#39;s discounts.
[**listFees**](V1ItemsApi.md#listFees) | **GET** /v1/{location_id}/fees | Lists all of a location&#39;s fees (taxes).
[**listInventory**](V1ItemsApi.md#listInventory) | **GET** /v1/{location_id}/inventory | Provides inventory information for all of a merchant&#39;s inventory-enabled item variations.
[**listItems**](V1ItemsApi.md#listItems) | **GET** /v1/{location_id}/items | Provides summary information for all of a location&#39;s items.
[**listModifierLists**](V1ItemsApi.md#listModifierLists) | **GET** /v1/{location_id}/modifier-lists | Lists all of a location&#39;s modifier lists.
[**listPages**](V1ItemsApi.md#listPages) | **GET** /v1/{location_id}/pages | Lists all of a location&#39;s Favorites pages in Square Register.
[**removeFee**](V1ItemsApi.md#removeFee) | **DELETE** /v1/{location_id}/items/{item_id}/fees/{fee_id} | Removes a fee assocation from an item, meaning the fee is no longer automatically applied to the item in Square Register.
[**removeModifierList**](V1ItemsApi.md#removeModifierList) | **DELETE** /v1/{location_id}/items/{item_id}/modifier-lists/{modifier_list_id} | Removes a modifier list association from an item, meaning modifier options from the list can no longer be applied to the item.
[**retrieveItem**](V1ItemsApi.md#retrieveItem) | **GET** /v1/{location_id}/items/{item_id} | Provides the details for a single item, including associated modifier lists and fees.
[**retrieveModifierList**](V1ItemsApi.md#retrieveModifierList) | **GET** /v1/{location_id}/modifier-lists/{modifier_list_id} | Provides the details for a single modifier list.
[**updateCategory**](V1ItemsApi.md#updateCategory) | **PUT** /v1/{location_id}/categories/{category_id} | Modifies the details of an existing item category.
[**updateDiscount**](V1ItemsApi.md#updateDiscount) | **PUT** /v1/{location_id}/discounts/{discount_id} | Modifies the details of an existing discount.
[**updateFee**](V1ItemsApi.md#updateFee) | **PUT** /v1/{location_id}/fees/{fee_id} | Modifies the details of an existing fee (tax).
[**updateItem**](V1ItemsApi.md#updateItem) | **PUT** /v1/{location_id}/items/{item_id} | Modifies the core details of an existing item.
[**updateModifierList**](V1ItemsApi.md#updateModifierList) | **PUT** /v1/{location_id}/modifier-lists/{modifier_list_id} | Modifies the details of an existing item modifier list.
[**updateModifierOption**](V1ItemsApi.md#updateModifierOption) | **PUT** /v1/{location_id}/modifier-lists/{modifier_list_id}/modifier-options/{modifier_option_id} | Modifies the details of an existing item modifier option.
[**updatePage**](V1ItemsApi.md#updatePage) | **PUT** /v1/{location_id}/pages/{page_id} | Modifies the details of a Favorites page in Square Register.
[**updatePageCell**](V1ItemsApi.md#updatePageCell) | **PUT** /v1/{location_id}/pages/{page_id}/cells | Modifies a cell of a Favorites page in Square Register.
[**updateVariation**](V1ItemsApi.md#updateVariation) | **PUT** /v1/{location_id}/items/{item_id}/variations/{variation_id} | Modifies the details of an existing item variation.


<a name="adjustInventory"></a>
# **adjustInventory**
> V1InventoryEntry adjustInventory(locationId, variationId, body)

Adjusts an item variation&#39;s current available inventory.

Adjusts an item variation&#39;s current available inventory.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.V1ItemsApi();

var locationId = "locationId_example"; // String | The ID of the item's associated location.

var variationId = "variationId_example"; // String | The ID of the variation to adjust inventory information for.

var body = new SquareConnect.V1AdjustInventoryRequest(); // V1AdjustInventoryRequest | An object containing the fields to POST for the request.  See the corresponding object definition for field details.

apiInstance.adjustInventory(locationId, variationId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | **String**| The ID of the item&#39;s associated location. | 
 **variationId** | **String**| The ID of the variation to adjust inventory information for. | 
 **body** | [**V1AdjustInventoryRequest**](V1AdjustInventoryRequest.md)| An object containing the fields to POST for the request.  See the corresponding object definition for field details. | 

### Return type

[**V1InventoryEntry**](V1InventoryEntry.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="applyFee"></a>
# **applyFee**
> V1Item applyFee(locationId, itemId, feeId)

Associates a fee with an item, meaning the fee is automatically applied to the item in Square Register.

Associates a fee with an item, meaning the fee is automatically applied to the item in Square Register.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.V1ItemsApi();

var locationId = "locationId_example"; // String | The ID of the fee's associated location.

var itemId = "itemId_example"; // String | The ID of the item to add the fee to.

var feeId = "feeId_example"; // String | The ID of the fee to apply.

apiInstance.applyFee(locationId, itemId, feeId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | **String**| The ID of the fee&#39;s associated location. | 
 **itemId** | **String**| The ID of the item to add the fee to. | 
 **feeId** | **String**| The ID of the fee to apply. | 

### Return type

[**V1Item**](V1Item.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="applyModifierList"></a>
# **applyModifierList**
> V1Item applyModifierList(locationId, modifierListId, itemId)

Associates a modifier list with an item, meaning modifier options from the list can be applied to the item.

Associates a modifier list with an item, meaning modifier options from the list can be applied to the item.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.V1ItemsApi();

var locationId = "locationId_example"; // String | The ID of the item's associated location.

var modifierListId = "modifierListId_example"; // String | The ID of the modifier list to apply.

var itemId = "itemId_example"; // String | The ID of the item to add the modifier list to.

apiInstance.applyModifierList(locationId, modifierListId, itemId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | **String**| The ID of the item&#39;s associated location. | 
 **modifierListId** | **String**| The ID of the modifier list to apply. | 
 **itemId** | **String**| The ID of the item to add the modifier list to. | 

### Return type

[**V1Item**](V1Item.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createCategory"></a>
# **createCategory**
> V1Category createCategory(locationId, body)

Creates an item category.

Creates an item category.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.V1ItemsApi();

var locationId = "locationId_example"; // String | The ID of the location to create an item for.

var body = new SquareConnect.V1Category(); // V1Category | An object containing the fields to POST for the request.  See the corresponding object definition for field details.

apiInstance.createCategory(locationId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | **String**| The ID of the location to create an item for. | 
 **body** | [**V1Category**](V1Category.md)| An object containing the fields to POST for the request.  See the corresponding object definition for field details. | 

### Return type

[**V1Category**](V1Category.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createDiscount"></a>
# **createDiscount**
> V1Discount createDiscount(locationId, body)

Creates a discount.

Creates a discount.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.V1ItemsApi();

var locationId = "locationId_example"; // String | The ID of the location to create an item for.

var body = new SquareConnect.V1Discount(); // V1Discount | An object containing the fields to POST for the request.  See the corresponding object definition for field details.

apiInstance.createDiscount(locationId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | **String**| The ID of the location to create an item for. | 
 **body** | [**V1Discount**](V1Discount.md)| An object containing the fields to POST for the request.  See the corresponding object definition for field details. | 

### Return type

[**V1Discount**](V1Discount.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createFee"></a>
# **createFee**
> V1Fee createFee(locationId, body)

Creates a fee (tax).

Creates a fee (tax).

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.V1ItemsApi();

var locationId = "locationId_example"; // String | The ID of the location to create a fee for.

var body = new SquareConnect.V1Fee(); // V1Fee | An object containing the fields to POST for the request.  See the corresponding object definition for field details.

apiInstance.createFee(locationId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | **String**| The ID of the location to create a fee for. | 
 **body** | [**V1Fee**](V1Fee.md)| An object containing the fields to POST for the request.  See the corresponding object definition for field details. | 

### Return type

[**V1Fee**](V1Fee.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createItem"></a>
# **createItem**
> V1Item createItem(locationId, body)

Creates an item and at least one variation for it.

Creates an item and at least one variation for it.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.V1ItemsApi();

var locationId = "locationId_example"; // String | The ID of the location to create an item for.

var body = new SquareConnect.V1Item(); // V1Item | An object containing the fields to POST for the request.  See the corresponding object definition for field details.

apiInstance.createItem(locationId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | **String**| The ID of the location to create an item for. | 
 **body** | [**V1Item**](V1Item.md)| An object containing the fields to POST for the request.  See the corresponding object definition for field details. | 

### Return type

[**V1Item**](V1Item.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createModifierList"></a>
# **createModifierList**
> V1ModifierList createModifierList(locationId, body)

Creates an item modifier list and at least one modifier option for it.

Creates an item modifier list and at least one modifier option for it.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.V1ItemsApi();

var locationId = "locationId_example"; // String | The ID of the location to create a modifier list for.

var body = new SquareConnect.V1ModifierList(); // V1ModifierList | An object containing the fields to POST for the request.  See the corresponding object definition for field details.

apiInstance.createModifierList(locationId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | **String**| The ID of the location to create a modifier list for. | 
 **body** | [**V1ModifierList**](V1ModifierList.md)| An object containing the fields to POST for the request.  See the corresponding object definition for field details. | 

### Return type

[**V1ModifierList**](V1ModifierList.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createModifierOption"></a>
# **createModifierOption**
> V1ModifierOption createModifierOption(locationId, modifierListId, body)

Creates an item modifier option and adds it to a modifier list.

Creates an item modifier option and adds it to a modifier list.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.V1ItemsApi();

var locationId = "locationId_example"; // String | The ID of the item's associated location.

var modifierListId = "modifierListId_example"; // String | The ID of the modifier list to edit.

var body = new SquareConnect.V1ModifierOption(); // V1ModifierOption | An object containing the fields to POST for the request.  See the corresponding object definition for field details.

apiInstance.createModifierOption(locationId, modifierListId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | **String**| The ID of the item&#39;s associated location. | 
 **modifierListId** | **String**| The ID of the modifier list to edit. | 
 **body** | [**V1ModifierOption**](V1ModifierOption.md)| An object containing the fields to POST for the request.  See the corresponding object definition for field details. | 

### Return type

[**V1ModifierOption**](V1ModifierOption.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createPage"></a>
# **createPage**
> V1Page createPage(locationId, body)

Creates a Favorites page in Square Register.

Creates a Favorites page in Square Register.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.V1ItemsApi();

var locationId = "locationId_example"; // String | The ID of the location to create an item for.

var body = new SquareConnect.V1Page(); // V1Page | An object containing the fields to POST for the request.  See the corresponding object definition for field details.

apiInstance.createPage(locationId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | **String**| The ID of the location to create an item for. | 
 **body** | [**V1Page**](V1Page.md)| An object containing the fields to POST for the request.  See the corresponding object definition for field details. | 

### Return type

[**V1Page**](V1Page.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createVariation"></a>
# **createVariation**
> V1Variation createVariation(locationId, itemId, body)

Creates an item variation for an existing item.

Creates an item variation for an existing item.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.V1ItemsApi();

var locationId = "locationId_example"; // String | The ID of the item's associated location.

var itemId = "itemId_example"; // String | The item's ID.

var body = new SquareConnect.V1Variation(); // V1Variation | An object containing the fields to POST for the request.  See the corresponding object definition for field details.

apiInstance.createVariation(locationId, itemId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | **String**| The ID of the item&#39;s associated location. | 
 **itemId** | **String**| The item&#39;s ID. | 
 **body** | [**V1Variation**](V1Variation.md)| An object containing the fields to POST for the request.  See the corresponding object definition for field details. | 

### Return type

[**V1Variation**](V1Variation.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteCategory"></a>
# **deleteCategory**
> V1Category deleteCategory(locationId, categoryId)

Deletes an existing item category.

Deletes an existing item category.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.V1ItemsApi();

var locationId = "locationId_example"; // String | The ID of the item's associated location.

var categoryId = "categoryId_example"; // String | The ID of the category to delete.

apiInstance.deleteCategory(locationId, categoryId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | **String**| The ID of the item&#39;s associated location. | 
 **categoryId** | **String**| The ID of the category to delete. | 

### Return type

[**V1Category**](V1Category.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteDiscount"></a>
# **deleteDiscount**
> V1Discount deleteDiscount(locationId, discountId)

Deletes an existing discount.

Deletes an existing discount.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.V1ItemsApi();

var locationId = "locationId_example"; // String | The ID of the item's associated location.

var discountId = "discountId_example"; // String | The ID of the discount to delete.

apiInstance.deleteDiscount(locationId, discountId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | **String**| The ID of the item&#39;s associated location. | 
 **discountId** | **String**| The ID of the discount to delete. | 

### Return type

[**V1Discount**](V1Discount.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteFee"></a>
# **deleteFee**
> V1Fee deleteFee(locationId, feeId)

Deletes an existing fee (tax).

Deletes an existing fee (tax).

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.V1ItemsApi();

var locationId = "locationId_example"; // String | The ID of the fee's associated location.

var feeId = "feeId_example"; // String | The ID of the fee to delete.

apiInstance.deleteFee(locationId, feeId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | **String**| The ID of the fee&#39;s associated location. | 
 **feeId** | **String**| The ID of the fee to delete. | 

### Return type

[**V1Fee**](V1Fee.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteItem"></a>
# **deleteItem**
> V1Item deleteItem(locationId, itemId)

Deletes an existing item and all item variations associated with it.

Deletes an existing item and all item variations associated with it.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.V1ItemsApi();

var locationId = "locationId_example"; // String | The ID of the item's associated location.

var itemId = "itemId_example"; // String | The ID of the item to modify.

apiInstance.deleteItem(locationId, itemId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | **String**| The ID of the item&#39;s associated location. | 
 **itemId** | **String**| The ID of the item to modify. | 

### Return type

[**V1Item**](V1Item.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteModifierList"></a>
# **deleteModifierList**
> V1ModifierList deleteModifierList(locationId, modifierListId)

Deletes an existing item modifier list and all modifier options associated with it.

Deletes an existing item modifier list and all modifier options associated with it.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.V1ItemsApi();

var locationId = "locationId_example"; // String | The ID of the item's associated location.

var modifierListId = "modifierListId_example"; // String | The ID of the modifier list to delete.

apiInstance.deleteModifierList(locationId, modifierListId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | **String**| The ID of the item&#39;s associated location. | 
 **modifierListId** | **String**| The ID of the modifier list to delete. | 

### Return type

[**V1ModifierList**](V1ModifierList.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteModifierOption"></a>
# **deleteModifierOption**
> V1ModifierOption deleteModifierOption(locationId, modifierListId, modifierOptionId)

Deletes an existing item modifier option from a modifier list.

Deletes an existing item modifier option from a modifier list.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.V1ItemsApi();

var locationId = "locationId_example"; // String | The ID of the item's associated location.

var modifierListId = "modifierListId_example"; // String | The ID of the modifier list to delete.

var modifierOptionId = "modifierOptionId_example"; // String | The ID of the modifier list to edit.

apiInstance.deleteModifierOption(locationId, modifierListId, modifierOptionId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | **String**| The ID of the item&#39;s associated location. | 
 **modifierListId** | **String**| The ID of the modifier list to delete. | 
 **modifierOptionId** | **String**| The ID of the modifier list to edit. | 

### Return type

[**V1ModifierOption**](V1ModifierOption.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deletePage"></a>
# **deletePage**
> V1Page deletePage(locationId, pageId)

Deletes an existing Favorites page and all of its cells.

Deletes an existing Favorites page and all of its cells.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.V1ItemsApi();

var locationId = "locationId_example"; // String | The ID of the Favorites page's associated location.

var pageId = "pageId_example"; // String | The ID of the page to delete.

apiInstance.deletePage(locationId, pageId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | **String**| The ID of the Favorites page&#39;s associated location. | 
 **pageId** | **String**| The ID of the page to delete. | 

### Return type

[**V1Page**](V1Page.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deletePageCell"></a>
# **deletePageCell**
> V1Page deletePageCell(locationId, pageId, opts)

Deletes a cell from a Favorites page in Square Register.

Deletes a cell from a Favorites page in Square Register.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.V1ItemsApi();

var locationId = "locationId_example"; // String | The ID of the Favorites page's associated location.

var pageId = "pageId_example"; // String | The ID of the page to delete.

var opts = { 
  'row': "row_example", // String | The row of the cell to clear. Always an integer between 0 and 4, inclusive. Row 0 is the top row.
  'column': "column_example" // String | The column of the cell to clear. Always an integer between 0 and 4, inclusive. Column 0 is the leftmost column.
};
apiInstance.deletePageCell(locationId, pageId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | **String**| The ID of the Favorites page&#39;s associated location. | 
 **pageId** | **String**| The ID of the page to delete. | 
 **row** | **String**| The row of the cell to clear. Always an integer between 0 and 4, inclusive. Row 0 is the top row. | [optional] 
 **column** | **String**| The column of the cell to clear. Always an integer between 0 and 4, inclusive. Column 0 is the leftmost column. | [optional] 

### Return type

[**V1Page**](V1Page.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteVariation"></a>
# **deleteVariation**
> V1Variation deleteVariation(locationId, itemId, variationId)

Deletes an existing item variation from an item.

Deletes an existing item variation from an item.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.V1ItemsApi();

var locationId = "locationId_example"; // String | The ID of the item's associated location.

var itemId = "itemId_example"; // String | The ID of the item to delete.

var variationId = "variationId_example"; // String | The ID of the variation to delete.

apiInstance.deleteVariation(locationId, itemId, variationId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | **String**| The ID of the item&#39;s associated location. | 
 **itemId** | **String**| The ID of the item to delete. | 
 **variationId** | **String**| The ID of the variation to delete. | 

### Return type

[**V1Variation**](V1Variation.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listCategories"></a>
# **listCategories**
> [V1Category] listCategories(locationId)

Lists all of a location&#39;s item categories.

Lists all of a location&#39;s item categories.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.V1ItemsApi();

var locationId = "locationId_example"; // String | The ID of the location to list categories for.

apiInstance.listCategories(locationId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | **String**| The ID of the location to list categories for. | 

### Return type

[**[V1Category]**](V1Category.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listDiscounts"></a>
# **listDiscounts**
> [V1Discount] listDiscounts(locationId)

Lists all of a location&#39;s discounts.

Lists all of a location&#39;s discounts.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.V1ItemsApi();

var locationId = "locationId_example"; // String | The ID of the location to list categories for.

apiInstance.listDiscounts(locationId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | **String**| The ID of the location to list categories for. | 

### Return type

[**[V1Discount]**](V1Discount.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listFees"></a>
# **listFees**
> [V1Fee] listFees(locationId)

Lists all of a location&#39;s fees (taxes).

Lists all of a location&#39;s fees (taxes).

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.V1ItemsApi();

var locationId = "locationId_example"; // String | The ID of the location to list fees for.

apiInstance.listFees(locationId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | **String**| The ID of the location to list fees for. | 

### Return type

[**[V1Fee]**](V1Fee.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listInventory"></a>
# **listInventory**
> [V1InventoryEntry] listInventory(locationId, opts)

Provides inventory information for all of a merchant&#39;s inventory-enabled item variations.

Provides inventory information for all of a merchant&#39;s inventory-enabled item variations.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.V1ItemsApi();

var locationId = "locationId_example"; // String | The ID of the item's associated location.

var opts = { 
  'limit': 56, // Number | The maximum number of inventory entries to return in a single response. This value cannot exceed 1000.
  'batchToken': "batchToken_example" // String | A pagination cursor to retrieve the next set of results for your original query to the endpoint.
};
apiInstance.listInventory(locationId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | **String**| The ID of the item&#39;s associated location. | 
 **limit** | **Number**| The maximum number of inventory entries to return in a single response. This value cannot exceed 1000. | [optional] 
 **batchToken** | **String**| A pagination cursor to retrieve the next set of results for your original query to the endpoint. | [optional] 

### Return type

[**[V1InventoryEntry]**](V1InventoryEntry.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listItems"></a>
# **listItems**
> [V1Item] listItems(locationId, opts)

Provides summary information for all of a location&#39;s items.

Provides summary information for all of a location&#39;s items.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.V1ItemsApi();

var locationId = "locationId_example"; // String | The ID of the location to list items for.

var opts = { 
  'batchToken': "batchToken_example" // String | A pagination cursor to retrieve the next set of results for your original query to the endpoint.
};
apiInstance.listItems(locationId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | **String**| The ID of the location to list items for. | 
 **batchToken** | **String**| A pagination cursor to retrieve the next set of results for your original query to the endpoint. | [optional] 

### Return type

[**[V1Item]**](V1Item.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listModifierLists"></a>
# **listModifierLists**
> [V1ModifierList] listModifierLists(locationId)

Lists all of a location&#39;s modifier lists.

Lists all of a location&#39;s modifier lists.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.V1ItemsApi();

var locationId = "locationId_example"; // String | The ID of the location to list modifier lists for.

apiInstance.listModifierLists(locationId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | **String**| The ID of the location to list modifier lists for. | 

### Return type

[**[V1ModifierList]**](V1ModifierList.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listPages"></a>
# **listPages**
> [V1Page] listPages(locationId)

Lists all of a location&#39;s Favorites pages in Square Register.

Lists all of a location&#39;s Favorites pages in Square Register.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.V1ItemsApi();

var locationId = "locationId_example"; // String | The ID of the location to list Favorites pages for.

apiInstance.listPages(locationId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | **String**| The ID of the location to list Favorites pages for. | 

### Return type

[**[V1Page]**](V1Page.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeFee"></a>
# **removeFee**
> V1Item removeFee(locationId, itemId, feeId)

Removes a fee assocation from an item, meaning the fee is no longer automatically applied to the item in Square Register.

Removes a fee assocation from an item, meaning the fee is no longer automatically applied to the item in Square Register.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.V1ItemsApi();

var locationId = "locationId_example"; // String | The ID of the fee's associated location.

var itemId = "itemId_example"; // String | The ID of the item to add the fee to.

var feeId = "feeId_example"; // String | The ID of the fee to apply.

apiInstance.removeFee(locationId, itemId, feeId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | **String**| The ID of the fee&#39;s associated location. | 
 **itemId** | **String**| The ID of the item to add the fee to. | 
 **feeId** | **String**| The ID of the fee to apply. | 

### Return type

[**V1Item**](V1Item.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeModifierList"></a>
# **removeModifierList**
> V1Item removeModifierList(locationId, modifierListId, itemId)

Removes a modifier list association from an item, meaning modifier options from the list can no longer be applied to the item.

Removes a modifier list association from an item, meaning modifier options from the list can no longer be applied to the item.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.V1ItemsApi();

var locationId = "locationId_example"; // String | The ID of the item's associated location.

var modifierListId = "modifierListId_example"; // String | The ID of the modifier list to remove.

var itemId = "itemId_example"; // String | The ID of the item to remove the modifier list from.

apiInstance.removeModifierList(locationId, modifierListId, itemId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | **String**| The ID of the item&#39;s associated location. | 
 **modifierListId** | **String**| The ID of the modifier list to remove. | 
 **itemId** | **String**| The ID of the item to remove the modifier list from. | 

### Return type

[**V1Item**](V1Item.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="retrieveItem"></a>
# **retrieveItem**
> V1Item retrieveItem(locationId, itemId)

Provides the details for a single item, including associated modifier lists and fees.

Provides the details for a single item, including associated modifier lists and fees.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.V1ItemsApi();

var locationId = "locationId_example"; // String | The ID of the item's associated location.

var itemId = "itemId_example"; // String | The item's ID.

apiInstance.retrieveItem(locationId, itemId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | **String**| The ID of the item&#39;s associated location. | 
 **itemId** | **String**| The item&#39;s ID. | 

### Return type

[**V1Item**](V1Item.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="retrieveModifierList"></a>
# **retrieveModifierList**
> V1ModifierList retrieveModifierList(locationId, modifierListId)

Provides the details for a single modifier list.

Provides the details for a single modifier list.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.V1ItemsApi();

var locationId = "locationId_example"; // String | The ID of the item's associated location.

var modifierListId = "modifierListId_example"; // String | The modifier list's ID.

apiInstance.retrieveModifierList(locationId, modifierListId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | **String**| The ID of the item&#39;s associated location. | 
 **modifierListId** | **String**| The modifier list&#39;s ID. | 

### Return type

[**V1ModifierList**](V1ModifierList.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateCategory"></a>
# **updateCategory**
> V1Category updateCategory(locationId, categoryId, body)

Modifies the details of an existing item category.

Modifies the details of an existing item category.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.V1ItemsApi();

var locationId = "locationId_example"; // String | The ID of the category's associated location.

var categoryId = "categoryId_example"; // String | The ID of the category to edit.

var body = new SquareConnect.V1Category(); // V1Category | An object containing the fields to POST for the request.  See the corresponding object definition for field details.

apiInstance.updateCategory(locationId, categoryId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | **String**| The ID of the category&#39;s associated location. | 
 **categoryId** | **String**| The ID of the category to edit. | 
 **body** | [**V1Category**](V1Category.md)| An object containing the fields to POST for the request.  See the corresponding object definition for field details. | 

### Return type

[**V1Category**](V1Category.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateDiscount"></a>
# **updateDiscount**
> V1Discount updateDiscount(locationId, discountId, body)

Modifies the details of an existing discount.

Modifies the details of an existing discount.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.V1ItemsApi();

var locationId = "locationId_example"; // String | The ID of the category's associated location.

var discountId = "discountId_example"; // String | The ID of the discount to edit.

var body = new SquareConnect.V1Discount(); // V1Discount | An object containing the fields to POST for the request.  See the corresponding object definition for field details.

apiInstance.updateDiscount(locationId, discountId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | **String**| The ID of the category&#39;s associated location. | 
 **discountId** | **String**| The ID of the discount to edit. | 
 **body** | [**V1Discount**](V1Discount.md)| An object containing the fields to POST for the request.  See the corresponding object definition for field details. | 

### Return type

[**V1Discount**](V1Discount.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateFee"></a>
# **updateFee**
> V1Fee updateFee(locationId, feeId, body)

Modifies the details of an existing fee (tax).

Modifies the details of an existing fee (tax).

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.V1ItemsApi();

var locationId = "locationId_example"; // String | The ID of the fee's associated location.

var feeId = "feeId_example"; // String | The ID of the fee to edit.

var body = new SquareConnect.V1Fee(); // V1Fee | An object containing the fields to POST for the request.  See the corresponding object definition for field details.

apiInstance.updateFee(locationId, feeId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | **String**| The ID of the fee&#39;s associated location. | 
 **feeId** | **String**| The ID of the fee to edit. | 
 **body** | [**V1Fee**](V1Fee.md)| An object containing the fields to POST for the request.  See the corresponding object definition for field details. | 

### Return type

[**V1Fee**](V1Fee.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateItem"></a>
# **updateItem**
> V1Item updateItem(locationId, itemId, body)

Modifies the core details of an existing item.

Modifies the core details of an existing item.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.V1ItemsApi();

var locationId = "locationId_example"; // String | The ID of the item's associated location.

var itemId = "itemId_example"; // String | The ID of the item to modify.

var body = new SquareConnect.V1Item(); // V1Item | An object containing the fields to POST for the request.  See the corresponding object definition for field details.

apiInstance.updateItem(locationId, itemId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | **String**| The ID of the item&#39;s associated location. | 
 **itemId** | **String**| The ID of the item to modify. | 
 **body** | [**V1Item**](V1Item.md)| An object containing the fields to POST for the request.  See the corresponding object definition for field details. | 

### Return type

[**V1Item**](V1Item.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateModifierList"></a>
# **updateModifierList**
> V1ModifierList updateModifierList(locationId, modifierListId, body)

Modifies the details of an existing item modifier list.

Modifies the details of an existing item modifier list.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.V1ItemsApi();

var locationId = "locationId_example"; // String | The ID of the item's associated location.

var modifierListId = "modifierListId_example"; // String | The ID of the modifier list to edit.

var body = new SquareConnect.V1UpdateModifierListRequest(); // V1UpdateModifierListRequest | An object containing the fields to POST for the request.  See the corresponding object definition for field details.

apiInstance.updateModifierList(locationId, modifierListId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | **String**| The ID of the item&#39;s associated location. | 
 **modifierListId** | **String**| The ID of the modifier list to edit. | 
 **body** | [**V1UpdateModifierListRequest**](V1UpdateModifierListRequest.md)| An object containing the fields to POST for the request.  See the corresponding object definition for field details. | 

### Return type

[**V1ModifierList**](V1ModifierList.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateModifierOption"></a>
# **updateModifierOption**
> V1ModifierOption updateModifierOption(locationId, modifierListId, modifierOptionId, body)

Modifies the details of an existing item modifier option.

Modifies the details of an existing item modifier option.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.V1ItemsApi();

var locationId = "locationId_example"; // String | The ID of the item's associated location.

var modifierListId = "modifierListId_example"; // String | The ID of the modifier list to edit.

var modifierOptionId = "modifierOptionId_example"; // String | The ID of the modifier list to edit.

var body = new SquareConnect.V1ModifierOption(); // V1ModifierOption | An object containing the fields to POST for the request.  See the corresponding object definition for field details.

apiInstance.updateModifierOption(locationId, modifierListId, modifierOptionId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | **String**| The ID of the item&#39;s associated location. | 
 **modifierListId** | **String**| The ID of the modifier list to edit. | 
 **modifierOptionId** | **String**| The ID of the modifier list to edit. | 
 **body** | [**V1ModifierOption**](V1ModifierOption.md)| An object containing the fields to POST for the request.  See the corresponding object definition for field details. | 

### Return type

[**V1ModifierOption**](V1ModifierOption.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updatePage"></a>
# **updatePage**
> V1Page updatePage(locationId, pageId, body)

Modifies the details of a Favorites page in Square Register.

Modifies the details of a Favorites page in Square Register.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.V1ItemsApi();

var locationId = "locationId_example"; // String | The ID of the Favorites page's associated location

var pageId = "pageId_example"; // String | The ID of the page to modify.

var body = new SquareConnect.V1Page(); // V1Page | An object containing the fields to POST for the request.  See the corresponding object definition for field details.

apiInstance.updatePage(locationId, pageId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | **String**| The ID of the Favorites page&#39;s associated location | 
 **pageId** | **String**| The ID of the page to modify. | 
 **body** | [**V1Page**](V1Page.md)| An object containing the fields to POST for the request.  See the corresponding object definition for field details. | 

### Return type

[**V1Page**](V1Page.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updatePageCell"></a>
# **updatePageCell**
> V1Page updatePageCell(locationId, pageId, body)

Modifies a cell of a Favorites page in Square Register.

Modifies a cell of a Favorites page in Square Register.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.V1ItemsApi();

var locationId = "locationId_example"; // String | The ID of the Favorites page's associated location.

var pageId = "pageId_example"; // String | The ID of the page the cell belongs to.

var body = new SquareConnect.V1PageCell(); // V1PageCell | An object containing the fields to POST for the request.  See the corresponding object definition for field details.

apiInstance.updatePageCell(locationId, pageId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | **String**| The ID of the Favorites page&#39;s associated location. | 
 **pageId** | **String**| The ID of the page the cell belongs to. | 
 **body** | [**V1PageCell**](V1PageCell.md)| An object containing the fields to POST for the request.  See the corresponding object definition for field details. | 

### Return type

[**V1Page**](V1Page.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateVariation"></a>
# **updateVariation**
> V1Variation updateVariation(locationId, itemId, variationId, body)

Modifies the details of an existing item variation.

Modifies the details of an existing item variation.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.V1ItemsApi();

var locationId = "locationId_example"; // String | The ID of the item's associated location.

var itemId = "itemId_example"; // String | The ID of the item to modify.

var variationId = "variationId_example"; // String | The ID of the variation to modify.

var body = new SquareConnect.V1Variation(); // V1Variation | An object containing the fields to POST for the request.  See the corresponding object definition for field details.

apiInstance.updateVariation(locationId, itemId, variationId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | **String**| The ID of the item&#39;s associated location. | 
 **itemId** | **String**| The ID of the item to modify. | 
 **variationId** | **String**| The ID of the variation to modify. | 
 **body** | [**V1Variation**](V1Variation.md)| An object containing the fields to POST for the request.  See the corresponding object definition for field details. | 

### Return type

[**V1Variation**](V1Variation.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

