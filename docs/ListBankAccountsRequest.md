# SquareConnect.ListBankAccountsRequest

### Description

Request object for fetching all `BankAccount` objects linked to a account.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cursor** | **String** | The pagination cursor returned by a previous call to this endpoint. Use it in the next &#x60;ListBankAccounts&#x60; request to retrieve the next set  of results.  See the [Pagination](https://developer.squareup.com/docs/docs/working-with-apis/pagination) guide for more information. | [optional] 
**limit** | **Number** | Upper limit on the number of bank accounts to return in the response.  Currently, 1000 is the largest supported limit. You can specify a limit  of up to 1000 bank accounts. This is also the default limit. | [optional] 
**location_id** | **String** | Location ID. You can specify this optional filter  to retrieve only the linked bank accounts belonging to a specific location. | [optional] 


