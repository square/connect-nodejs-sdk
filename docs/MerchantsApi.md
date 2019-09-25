# SquareConnect.MerchantsApi

All URIs are relative to *https://connect.squareup.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**retrieveMerchant**](MerchantsApi.md#retrieveMerchant) | **GET** /v2/merchants/{merchant_id} | RetrieveMerchant


<a name="retrieveMerchant"></a>
# **retrieveMerchant**
> RetrieveMerchantResponse retrieveMerchant(merchantId)

RetrieveMerchant

Retrieve a &#x60;Merchant&#x60; object for the given &#x60;merchant_id&#x60;.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.MerchantsApi();

var merchantId = "merchantId_example"; // String | The ID of the merchant to retrieve

apiInstance.retrieveMerchant(merchantId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **merchantId** | **String**| The ID of the merchant to retrieve | 

### Return type

[**RetrieveMerchantResponse**](RetrieveMerchantResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

