# SquareConnect.InvoicesApi

All URIs are relative to *https://connect.squareup.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelInvoice**](InvoicesApi.md#cancelInvoice) | **POST** /v2/invoices/{invoice_id}/cancel | CancelInvoice
[**createInvoice**](InvoicesApi.md#createInvoice) | **POST** /v2/invoices | CreateInvoice
[**deleteInvoice**](InvoicesApi.md#deleteInvoice) | **DELETE** /v2/invoices/{invoice_id} | DeleteInvoice
[**getInvoice**](InvoicesApi.md#getInvoice) | **GET** /v2/invoices/{invoice_id} | GetInvoice
[**listInvoices**](InvoicesApi.md#listInvoices) | **GET** /v2/invoices | ListInvoices
[**publishInvoice**](InvoicesApi.md#publishInvoice) | **POST** /v2/invoices/{invoice_id}/publish | PublishInvoice
[**searchInvoices**](InvoicesApi.md#searchInvoices) | **POST** /v2/invoices/search | SearchInvoices
[**updateInvoice**](InvoicesApi.md#updateInvoice) | **PUT** /v2/invoices/{invoice_id} | UpdateInvoice


<a name="cancelInvoice"></a>
# **cancelInvoice**
**Note: This endpoint is in beta.**
> CancelInvoiceResponse cancelInvoice(invoiceId, body)

CancelInvoice

Cancels an invoice. The seller cannot collect payments for  the canceled invoice.  You cannot cancel an invoice in a terminal state: &#x60;PAID&#x60;, &#x60;REFUNDED&#x60;, &#x60;CANCELED&#x60;, or &#x60;FAILED&#x60;.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.InvoicesApi();

var invoiceId = "invoiceId_example"; // String | The ID of the `invoice` to cancel.

var body = new SquareConnect.CancelInvoiceRequest(); // CancelInvoiceRequest | An object containing the fields to POST for the request.  See the corresponding object definition for field details.

apiInstance.cancelInvoice(invoiceId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invoiceId** | **String**| The ID of the &#x60;invoice&#x60; to cancel. | 
 **body** | [**CancelInvoiceRequest**](CancelInvoiceRequest.md)| An object containing the fields to POST for the request.  See the corresponding object definition for field details. | 

### Return type

[**CancelInvoiceResponse**](CancelInvoiceResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createInvoice"></a>
# **createInvoice**
**Note: This endpoint is in beta.**
> CreateInvoiceResponse createInvoice(body)

CreateInvoice

Creates a draft [invoice](#type-invoice)  for an order created using the Orders API.  A draft invoice remains in your account and no action is taken.  You must publish the invoice before Square can process it (send it to the customer&#39;s email address or charge the customer’s card on file).

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.InvoicesApi();

var body = new SquareConnect.CreateInvoiceRequest(); // CreateInvoiceRequest | An object containing the fields to POST for the request.  See the corresponding object definition for field details.

apiInstance.createInvoice(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateInvoiceRequest**](CreateInvoiceRequest.md)| An object containing the fields to POST for the request.  See the corresponding object definition for field details. | 

### Return type

[**CreateInvoiceResponse**](CreateInvoiceResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteInvoice"></a>
# **deleteInvoice**
**Note: This endpoint is in beta.**
> DeleteInvoiceResponse deleteInvoice(invoiceId, opts)

DeleteInvoice

Deletes the specified invoice. When an invoice is deleted, the  associated Order status changes to CANCELED. You can only delete a draft  invoice (you cannot delete an invoice scheduled for publication, or a  published invoice).

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.InvoicesApi();

var invoiceId = "invoiceId_example"; // String | The ID of the invoice to delete.

var opts = { 
  'version': 56 // Number | The version of the `invoice` to delete. If you do not know the version, you can call `GetInvoice` or  `ListInvoices`.
};
apiInstance.deleteInvoice(invoiceId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invoiceId** | **String**| The ID of the invoice to delete. | 
 **version** | **Number**| The version of the &#x60;invoice&#x60; to delete. If you do not know the version, you can call &#x60;GetInvoice&#x60; or  &#x60;ListInvoices&#x60;. | [optional] 

### Return type

[**DeleteInvoiceResponse**](DeleteInvoiceResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getInvoice"></a>
# **getInvoice**
**Note: This endpoint is in beta.**
> GetInvoiceResponse getInvoice(invoiceId)

GetInvoice

Retrieves an invoice by invoice ID.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.InvoicesApi();

var invoiceId = "invoiceId_example"; // String | The id of the invoice to retrieve.

apiInstance.getInvoice(invoiceId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invoiceId** | **String**| The id of the invoice to retrieve. | 

### Return type

[**GetInvoiceResponse**](GetInvoiceResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listInvoices"></a>
# **listInvoices**
**Note: This endpoint is in beta.**
> ListInvoicesResponse listInvoices(locationId, opts)

ListInvoices

Returns a list of invoices for a given location. The response  is paginated. If truncated, the response includes a &#x60;cursor&#x60; that you     use in a subsequent request to fetch the next set of invoices.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.InvoicesApi();

var locationId = "locationId_example"; // String | The ID of the location for which to list invoices.

var opts = { 
  'cursor': "cursor_example", // String | A pagination cursor returned by a previous call to this endpoint.  Provide this cursor to retrieve the next set of results for your original query.  For more information, see [Pagination](https://developer.squareup.com/docs/docs/working-with-apis/pagination).
  'limit': 56 // Number | The maximum number of invoices to return (200 is the maximum `limit`).  If not provided, the server  uses a default limit of 100 invoices.
};
apiInstance.listInvoices(locationId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | **String**| The ID of the location for which to list invoices. | 
 **cursor** | **String**| A pagination cursor returned by a previous call to this endpoint.  Provide this cursor to retrieve the next set of results for your original query.  For more information, see [Pagination](https://developer.squareup.com/docs/docs/working-with-apis/pagination). | [optional] 
 **limit** | **Number**| The maximum number of invoices to return (200 is the maximum &#x60;limit&#x60;).  If not provided, the server  uses a default limit of 100 invoices. | [optional] 

### Return type

[**ListInvoicesResponse**](ListInvoicesResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="publishInvoice"></a>
# **publishInvoice**
**Note: This endpoint is in beta.**
> PublishInvoiceResponse publishInvoice(invoiceId, body)

PublishInvoice

Publishes the specified draft invoice.   After an invoice is published, Square  follows up based on the invoice configuration. For example, Square  sends the invoice to the customer&#39;s email address, charges the customer&#39;s card on file, or does  nothing. Square also makes the invoice available on a Square-hosted invoice page.   The invoice &#x60;status&#x60; also changes from &#x60;DRAFT&#x60; to a status  based on the invoice configuration. For example, the status changes to &#x60;UNPAID&#x60; if  Square emails the invoice or &#x60;PARTIALLY_PAID&#x60; if Square charge a card on file for a portion of the  invoice amount).

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.InvoicesApi();

var invoiceId = "invoiceId_example"; // String | The id of the invoice to publish.

var body = new SquareConnect.PublishInvoiceRequest(); // PublishInvoiceRequest | An object containing the fields to POST for the request.  See the corresponding object definition for field details.

apiInstance.publishInvoice(invoiceId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invoiceId** | **String**| The id of the invoice to publish. | 
 **body** | [**PublishInvoiceRequest**](PublishInvoiceRequest.md)| An object containing the fields to POST for the request.  See the corresponding object definition for field details. | 

### Return type

[**PublishInvoiceResponse**](PublishInvoiceResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchInvoices"></a>
# **searchInvoices**
**Note: This endpoint is in beta.**
> SearchInvoicesResponse searchInvoices(body)

SearchInvoices

Searches for invoices from a location specified in  the filter. You can optionally specify customers in the filter for whom to  retrieve invoices. In the current implementation, you can only specify one location and  optionally one customer.  The response is paginated. If truncated, the response includes a &#x60;cursor&#x60;  that you use in a subsequent request to fetch the next set of invoices.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.InvoicesApi();

var body = new SquareConnect.SearchInvoicesRequest(); // SearchInvoicesRequest | An object containing the fields to POST for the request.  See the corresponding object definition for field details.

apiInstance.searchInvoices(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SearchInvoicesRequest**](SearchInvoicesRequest.md)| An object containing the fields to POST for the request.  See the corresponding object definition for field details. | 

### Return type

[**SearchInvoicesResponse**](SearchInvoicesResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateInvoice"></a>
# **updateInvoice**
**Note: This endpoint is in beta.**
> UpdateInvoiceResponse updateInvoice(invoiceId, body)

UpdateInvoice

Updates an invoice by modifying field values, clearing field values, or both  as specified in the request.  There are no restrictions to updating an invoice in a draft state.  However, there are guidelines for updating a published invoice.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.InvoicesApi();

var invoiceId = "invoiceId_example"; // String | The id of the invoice to update.

var body = new SquareConnect.UpdateInvoiceRequest(); // UpdateInvoiceRequest | An object containing the fields to POST for the request.  See the corresponding object definition for field details.

apiInstance.updateInvoice(invoiceId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invoiceId** | **String**| The id of the invoice to update. | 
 **body** | [**UpdateInvoiceRequest**](UpdateInvoiceRequest.md)| An object containing the fields to POST for the request.  See the corresponding object definition for field details. | 

### Return type

[**UpdateInvoiceResponse**](UpdateInvoiceResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

