# SquareConnect.V1Merchant

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The merchant account&#39;s unique identifier. | [optional] 
**name** | **String** | The name associated with the merchant account. | [optional] 
**email** | **String** | The email address associated with the merchant account. | [optional] 
**account_type** | **String** | Indicates whether the merchant account corresponds to a single-location account (LOCATION) or a business account (BUSINESS). This value is almost always LOCATION. | [optional] 
**account_capabilities** | **[String]** | Capabilities that are enabled for the merchant&#39;s Square account. Capabilities that are not listed in this array are not enabled for the account. | [optional] 
**country_code** | **String** | The country associated with the merchant account, in ISO 3166-1-alpha-2 format. | [optional] 
**language_code** | **String** | The language associated with the merchant account, in BCP 47 format. | [optional] 
**currency_code** | **String** | The currency associated with the merchant account, in ISO 4217 format. For example, the currency code for US dollars is USD. | [optional] 
**business_name** | **String** | The name of the merchant&#39;s business. | [optional] 
**business_address** | [**Address**](Address.md) | The address of the merchant&#39;s business. | [optional] 
**business_phone** | [**V1PhoneNumber**](V1PhoneNumber.md) | The phone number of the merchant&#39;s business. | [optional] 
**business_type** | **String** | The type of business operated by the merchant. | [optional] 
**shipping_address ** | [**Address**](Address.md) | The merchant&#39;s shipping address. | [optional] 
**location_details** | [**V1MerchantLocationDetails**](V1MerchantLocationDetails.md) |  | [optional] 
**market_url** | **String** | The URL of the merchant&#39;s online store. | [optional] 


<a name="AccountTypeEnum"></a>
## Enum: AccountTypeEnum


* `LOCATION` (value: `"LOCATION"`)

* `BUSINESS` (value: `"BUSINESS"`)




<a name="BusinessTypeEnum"></a>
## Enum: BusinessTypeEnum


* `ACCOUNTING` (value: `"ACCOUNTING"`)

* `APPAREL_AND_ACCESSORY_SHOPS` (value: `"APPAREL_AND_ACCESSORY_SHOPS"`)

* `ART_DEALERS_GALLERIES` (value: `"ART_DEALERS_GALLERIES"`)

* `ART_DESIGN_AND_PHOTOGRAPHY` (value: `"ART_DESIGN_AND_PHOTOGRAPHY"`)

* `BAR_CLUB_LOUNGE` (value: `"BAR_CLUB_LOUNGE"`)

* `BEAUTY_AND_BARBER_SHOPS` (value: `"BEAUTY_AND_BARBER_SHOPS"`)

* `BOOK_STORES` (value: `"BOOK_STORES"`)

* `BUSINESS_SERVICES` (value: `"BUSINESS_SERVICES"`)

* `CATERING` (value: `"CATERING"`)

* `CHARITABLE_SOCIAL_SERVICE_ORGANIZATIONS` (value: `"CHARITABLE_SOCIAL_SERVICE_ORGANIZATIONS"`)

* `CHARITIBLE_ORGS` (value: `"CHARITIBLE_ORGS"`)

* `CLEANING_SERVICES` (value: `"CLEANING_SERVICES"`)

* `COMPUTER_EQUIPMENT_SOFTWARE_MAINTENANCE_REPAIR_SERVICES` (value: `"COMPUTER_EQUIPMENT_SOFTWARE_MAINTENANCE_REPAIR_SERVICES"`)

* `CONSULTANT` (value: `"CONSULTANT"`)

* `CONTRACTORS` (value: `"CONTRACTORS"`)

* `DELIVERY_SERVICES` (value: `"DELIVERY_SERVICES"`)

* `DENTISTRY` (value: `"DENTISTRY"`)

* `EDUCATION` (value: `"EDUCATION"`)

* `FOOD_STORES_CONVENIENCE_STORES_AND_SPECIALTY_MARKETS` (value: `"FOOD_STORES_CONVENIENCE_STORES_AND_SPECIALTY_MARKETS"`)

* `FOOD_TRUCK_CART` (value: `"FOOD_TRUCK_CART"`)

* `FURNITURE_HOME_AND_OFFICE_EQUIPMENT` (value: `"FURNITURE_HOME_AND_OFFICE_EQUIPMENT"`)

* `FURNITURE_HOME_GOODS` (value: `"FURNITURE_HOME_GOODS"`)

* `HOTELS_AND_LODGING` (value: `"HOTELS_AND_LODGING"`)

* `INDIVIDUAL_USE` (value: `"INDIVIDUAL_USE"`)

* `JEWELRY_AND_WATCHES` (value: `"JEWELRY_AND_WATCHES"`)

* `LANDSCAPING_AND_HORTICULTURAL_SERVICES` (value: `"LANDSCAPING_AND_HORTICULTURAL_SERVICES"`)

* `LANGUAGE_SCHOOLS` (value: `"LANGUAGE_SCHOOLS"`)

* `LEGAL_SERVICES` (value: `"LEGAL_SERVICES"`)

* `MEDICAL_PRACTITIONERS` (value: `"MEDICAL_PRACTITIONERS"`)

* `MEDICAL_SERVICES_AND_HEALTH_PRACTITIONERS` (value: `"MEDICAL_SERVICES_AND_HEALTH_PRACTITIONERS"`)

* `MEMBERSHIP_ORGANIZATIONS` (value: `"MEMBERSHIP_ORGANIZATIONS"`)

* `MUSIC_AND_ENTERTAINMENT` (value: `"MUSIC_AND_ENTERTAINMENT"`)

* `OTHER` (value: `"OTHER"`)

* `OUTDOOR_MARKETS` (value: `"OUTDOOR_MARKETS"`)

* `PERSONAL_SERVICES` (value: `"PERSONAL_SERVICES"`)

* `POLITICAL_ORGANIZATIONS` (value: `"POLITICAL_ORGANIZATIONS"`)

* `PROFESSIONAL_SERVICES` (value: `"PROFESSIONAL_SERVICES"`)

* `REAL_ESTATE` (value: `"REAL_ESTATE"`)

* `RECREATION_SERVICES` (value: `"RECREATION_SERVICES"`)

* `REPAIR_SHOPS_AND_RELATED_SERVICES` (value: `"REPAIR_SHOPS_AND_RELATED_SERVICES"`)

* `RESTAURANTS` (value: `"RESTAURANTS"`)

* `RETAIL_SHOPS` (value: `"RETAIL_SHOPS"`)

* `SCHOOLS_AND_EDUCATIONAL_SERVICES` (value: `"SCHOOLS_AND_EDUCATIONAL_SERVICES"`)

* `SPORTING_GOODS` (value: `"SPORTING_GOODS"`)

* `TAXICABS_AND_LIMOUSINES` (value: `"TAXICABS_AND_LIMOUSINES"`)

* `TICKET_SALES` (value: `"TICKET_SALES"`)

* `TOURISM` (value: `"TOURISM"`)

* `TRAVEL_TOURISM` (value: `"TRAVEL_TOURISM"`)

* `VETERINARY_SERVICES` (value: `"VETERINARY_SERVICES"`)

* `WEB_DEV_DESIGN` (value: `"WEB_DEV_DESIGN"`)




