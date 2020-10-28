# SquareConnect.BankAccountsApi

All URIs are relative to *https://connect.squareup.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBankAccount**](BankAccountsApi.md#getBankAccount) | **GET** /v2/bank-accounts/{bank_account_id} | GetBankAccount
[**getBankAccountByV1Id**](BankAccountsApi.md#getBankAccountByV1Id) | **GET** /v2/bank-accounts/by-v1-id/{v1_bank_account_id} | GetBankAccountByV1Id
[**listBankAccounts**](BankAccountsApi.md#listBankAccounts) | **GET** /v2/bank-accounts | ListBankAccounts


<a name="getBankAccount"></a>
# **getBankAccount**
> GetBankAccountResponse getBankAccount(bankAccountId)

GetBankAccount

Returns details of a [BankAccount](#type-bankaccount)  linked to a Square account.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.BankAccountsApi();

var bankAccountId = SquareConnect.BankAccountsApi.constructFromObject({}); // String | Square-issued ID of the desired `BankAccount`.

apiInstance.getBankAccount(bankAccountId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bankAccountId** | **String**| Square-issued ID of the desired &#x60;BankAccount&#x60;. | 

### Return type

[**GetBankAccountResponse**](GetBankAccountResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getBankAccountByV1Id"></a>
# **getBankAccountByV1Id**
> GetBankAccountByV1IdResponse getBankAccountByV1Id(v1BankAccountId)

GetBankAccountByV1Id

Returns details of a [BankAccount](#type-bankaccount) identified by V1 bank account ID.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.BankAccountsApi();

var v1BankAccountId = SquareConnect.BankAccountsApi.constructFromObject({}); // String | Connect V1 ID of the desired `BankAccount`. For more information, see  [Retrieve a bank account by using an ID issued by V1 Bank Accounts API](https://developer.squareup.com/docs/docs/bank-accounts-api#retrieve-a-bank-account-by-using-an-id-issued-by-v1-bank-accounts-api).

apiInstance.getBankAccountByV1Id(v1BankAccountId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **v1BankAccountId** | **String**| Connect V1 ID of the desired &#x60;BankAccount&#x60;. For more information, see  [Retrieve a bank account by using an ID issued by V1 Bank Accounts API](https://developer.squareup.com/docs/docs/bank-accounts-api#retrieve-a-bank-account-by-using-an-id-issued-by-v1-bank-accounts-api). | 

### Return type

[**GetBankAccountByV1IdResponse**](GetBankAccountByV1IdResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listBankAccounts"></a>
# **listBankAccounts**
> ListBankAccountsResponse listBankAccounts(opts)

ListBankAccounts

Returns a list of [BankAccount](#type-bankaccount) objects linked to a Square account.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.BankAccountsApi();

var opts = { 
  'cursor': SquareConnect.BankAccountsApi.constructFromObject({});, // String | The pagination cursor returned by a previous call to this endpoint. Use it in the next `ListBankAccounts` request to retrieve the next set  of results.  See the [Pagination](https://developer.squareup.com/docs/docs/working-with-apis/pagination) guide for more information.
  'limit': SquareConnect.BankAccountsApi.constructFromObject({});, // Number | Upper limit on the number of bank accounts to return in the response.  Currently, 1000 is the largest supported limit. You can specify a limit  of up to 1000 bank accounts. This is also the default limit.
  'locationId': SquareConnect.BankAccountsApi.constructFromObject({}); // String | Location ID. You can specify this optional filter  to retrieve only the linked bank accounts belonging to a specific location.
};
apiInstance.listBankAccounts(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cursor** | **String**| The pagination cursor returned by a previous call to this endpoint. Use it in the next &#x60;ListBankAccounts&#x60; request to retrieve the next set  of results.  See the [Pagination](https://developer.squareup.com/docs/docs/working-with-apis/pagination) guide for more information. | [optional] 
 **limit** | **Number**| Upper limit on the number of bank accounts to return in the response.  Currently, 1000 is the largest supported limit. You can specify a limit  of up to 1000 bank accounts. This is also the default limit. | [optional] 
 **locationId** | **String**| Location ID. You can specify this optional filter  to retrieve only the linked bank accounts belonging to a specific location. | [optional] 

### Return type

[**ListBankAccountsResponse**](ListBankAccountsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

