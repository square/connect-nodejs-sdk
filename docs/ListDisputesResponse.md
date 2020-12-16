# SquareConnect.ListDisputesResponse

### Description
**Note: This model is in beta.**

Defines fields in a `ListDisputes` response.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**[Error]**](Error.md) | Information about errors encountered during the request. | [optional] 
**disputes** | [**[Dispute]**](Dispute.md) | The list of disputes. | [optional] 
**cursor** | **String** | The pagination cursor to be used in a subsequent request. If unset, this is the final response. For more information, see [Pagination](https://developer.squareup.com/docs/basics/api101/pagination). | [optional] 


