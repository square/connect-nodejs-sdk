# SquareConnect.Location

### Description

Represents one of a business's locations.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The location&#39;s unique ID. | [optional] 
**name** | **String** | The location&#39;s name. Location names are set by the account owner and displayed in the dashboard as the location&#39;s nickname | [optional] 
**address** | [**Address**](Address.md) | The location&#39;s physical address. | [optional] 
**timezone** | **String** | The [IANA Timezone Database](https://www.iana.org/time-zones) identifier for the location&#39;s timezone. | [optional] 
**capabilities** | **[String]** | Indicates which Square features are enabled for the location. See [LocationCapability](#type-locationcapability) for possible values | [optional] 
**status** | **String** | The location&#39;s status See [LocationStatus](#type-locationstatus) for possible values | [optional] 
**created_at** | **String** | The time when the location was created, in RFC 3339 format. | [optional] 
**merchant_id** | **String** | The identifier of the merchant that owns the location. | [optional] 
**country** | **String** | The location&#39;s country, in ISO 3166-1-alpha-2 format. See [Country](#type-country) for possible values | [optional] 
**language_code** | **String** | The language associated with the location in [BCP 47 format](https://tools.ietf.org/html/bcp47#appendix-A). | [optional] 
**currency** | **String** | The currency used for all transactions at this location, specified in __ISO 4217 format__. For example, the currency for a location processing transactions in the United States is &#39;USD&#39;. See [Currency](#type-currency) for possible values | [optional] 
**phone_number** | **String** | The location&#39;s phone_number. | [optional] 
**business_name** | **String** | The location&#39;s business_name which is shown to its customers. For example, this is the name printed on its customer&#39;s receipts. | [optional] 
**type** | **String** | The location&#39;s type, as set by the account owner in the Square dashboard. Typically used to indicate whether or not the location object represents a physical space like a building or mall space. See [LocationType](#type-locationtype) for possible values | [optional] 
**website_url** | **String** | The location&#39;s website, as set by the account owner in the Square dashboard.  Default: none; only exists if explicitly set. | [optional] 
**business_hours** | [**BusinessHours**](BusinessHours.md) |   The hours of operation for a business location.  Default: none; only exists if explicitly set. | [optional] 
**business_email** | **String** | The email of the location. | [optional] 
**description** | **String** | The business description of the location. | [optional] 
**twitter_username** | **String** | The Twitter username of the location without the &#39; | [optional] 
**instagram_username** | **String** | The Instagram username of the location without the &#39; | [optional] 
**facebook_url** | **String** | The Facebook profile URL of the location. The URL should begin with &#39;facebook.com/&#39;. | [optional] 
**coordinates** | [**Coordinates**](Coordinates.md) | The physical coordinates (latitude and longitude) of the location. | [optional] 
**logo_url** | **String** | The logo image URL of the location. | [optional] 
**pos_background_url** | **String** | The Point of Sale background image URL of the location. | [optional] 


