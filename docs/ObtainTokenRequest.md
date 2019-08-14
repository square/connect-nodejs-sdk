# SquareConnect.ObtainTokenRequest

### Description



## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **String** | The Square-issued ID of your application, available from the [application dashboard](https://connect.squareup.com/apps). | [optional] 
**client_secret** | **String** | The Square-issued application secret for your application, available from the [application dashboard](https://connect.squareup.com/apps). | [optional] 
**code** | **String** | The authorization code to exchange. This is required if &#x60;grant_type&#x60; is set to &#x60;authorization_code&#x60;, to indicate that the application wants to exchange an authorization code for an OAuth access token. | [optional] 
**redirect_uri** | **String** | The redirect URL assigned in the [application dashboard](https://connect.squareup.com/apps). | [optional] 
**grant_type** | **String** | Specifies the method to request an OAuth access token. Valid values are: &#x60;authorization_code&#x60;, &#x60;refresh_token&#x60;, and &#x60;migration_token&#x60; | [optional] 
**refresh_token** | **String** | A valid refresh token for generating a new OAuth access token. A valid refresh token is required if &#x60;grant_type&#x60; is set to &#x60;refresh_token&#x60; , to indicate the application wants a replacement for an expired OAuth access token. | [optional] 
**migration_token** | **String** | Legacy OAuth access token obtained using a Connect API version prior to 2019-03-13. This parameter is required if &#x60;grant_type&#x60; is set to &#x60;migration_token&#x60; to indicate that the application wants to get a replacement OAuth access token. The response also returns a refresh token. For more information, see [Migrate to Using Refresh Tokens](/authz/oauth/migration). | [optional] 


