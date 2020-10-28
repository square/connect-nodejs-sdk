# SquareConnect.ApplePayApi

All URIs are relative to *https://connect.squareup.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**registerDomain**](ApplePayApi.md#registerDomain) | **POST** /v2/apple-pay/domains | RegisterDomain


<a name="registerDomain"></a>
# **registerDomain**
> RegisterDomainResponse registerDomain(body)

RegisterDomain

Activates a domain for use with Web Apple Pay and Square. A validation will be performed on this domain by Apple to ensure is it properly set up as an Apple Pay enabled domain.  This endpoint provides an easy way for platform developers to bulk activate Web Apple Pay with Square for merchants using their platform.  To learn more about Apple Pay on Web see the Apple Pay section in the [Square Payment Form Walkthrough](/docs/payment-form/payment-form-walkthrough).

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.ApplePayApi();

var body = SquareConnect.ApplePayApi.constructFromObject({}); // RegisterDomainRequest | An object containing the fields to POST for the request.  See the corresponding object definition for field details.

apiInstance.registerDomain(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RegisterDomainRequest**](RegisterDomainRequest.md)| An object containing the fields to POST for the request.  See the corresponding object definition for field details. | 

### Return type

[**RegisterDomainResponse**](RegisterDomainResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

