# SquareConnect.ObtainTokenResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessToken** | **String** | Your application&#39;s access token. You provide this token in a header with every request to Connect API endpoints. See [Request and response headers](https://docs.connect.squareup.com/api/connect/v2/#requestandresponseheaders) for the format of this header. | [optional] 
**tokenType** | **String** | This value is always _bearer_. | [optional] 
**expiresAt** | **String** | The date when access_token expires, in [ISO 8601](http://www.iso.org/iso/home/standards/iso8601.htm) format. | [optional] 
**merchantId** | **String** | The ID of the authorizing merchant&#39;s business. | [optional] 
**subscriptionId** | **String** | The ID of the merchant [subscription](https://docs.connect.squareup.com/api/connect/v1/#navsection-subscriptionmanagement) associated with the authorization. Only present if the merchant signed up for a subscription during authorization. | [optional] 
**planId** | **String** | The ID of the [subscription](https://docs.connect.squareup.com/api/connect/v1/#navsection-subscriptionmanagement) plan the merchant signed up for. Only present if the merchant signed up for a subscription during authorization. | [optional] 
**idToken** | **String** | Then OpenID token belonging to this this person. Only present if the OPENID scope is included in the authorize request. | [optional] 


