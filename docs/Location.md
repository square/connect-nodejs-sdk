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


<a name="[CapabilitiesEnum]"></a>
## Enum: [CapabilitiesEnum]


* `PROCESSING` (value: `"CREDIT_CARD_PROCESSING"`)




<a name="StatusEnum"></a>
## Enum: StatusEnum


* `ACTIVE` (value: `"ACTIVE"`)

* `INACTIVE` (value: `"INACTIVE"`)




<a name="CountryEnum"></a>
## Enum: CountryEnum


* `ZZ` (value: `"ZZ"`)

* `AD` (value: `"AD"`)

* `AE` (value: `"AE"`)

* `AF` (value: `"AF"`)

* `AG` (value: `"AG"`)

* `AI` (value: `"AI"`)

* `AL` (value: `"AL"`)

* `AM` (value: `"AM"`)

* `AO` (value: `"AO"`)

* `AQ` (value: `"AQ"`)

* `AR` (value: `"AR"`)

* `AS` (value: `"AS"`)

* `AT` (value: `"AT"`)

* `AU` (value: `"AU"`)

* `AW` (value: `"AW"`)

* `AX` (value: `"AX"`)

* `AZ` (value: `"AZ"`)

* `BA` (value: `"BA"`)

* `BB` (value: `"BB"`)

* `BD` (value: `"BD"`)

* `BE` (value: `"BE"`)

* `BF` (value: `"BF"`)

* `BG` (value: `"BG"`)

* `BH` (value: `"BH"`)

* `BI` (value: `"BI"`)

* `BJ` (value: `"BJ"`)

* `BL` (value: `"BL"`)

* `BM` (value: `"BM"`)

* `BN` (value: `"BN"`)

* `BO` (value: `"BO"`)

* `BQ` (value: `"BQ"`)

* `BR` (value: `"BR"`)

* `BS` (value: `"BS"`)

* `BT` (value: `"BT"`)

* `BV` (value: `"BV"`)

* `BW` (value: `"BW"`)

* `BY` (value: `"BY"`)

* `BZ` (value: `"BZ"`)

* `CA` (value: `"CA"`)

* `CC` (value: `"CC"`)

* `CD` (value: `"CD"`)

* `CF` (value: `"CF"`)

* `CG` (value: `"CG"`)

* `CH` (value: `"CH"`)

* `CI` (value: `"CI"`)

* `CK` (value: `"CK"`)

* `CL` (value: `"CL"`)

* `CM` (value: `"CM"`)

* `CN` (value: `"CN"`)

* `CO` (value: `"CO"`)

* `CR` (value: `"CR"`)

* `CU` (value: `"CU"`)

* `CV` (value: `"CV"`)

* `CW` (value: `"CW"`)

* `CX` (value: `"CX"`)

* `CY` (value: `"CY"`)

* `CZ` (value: `"CZ"`)

* `DE` (value: `"DE"`)

* `DJ` (value: `"DJ"`)

* `DK` (value: `"DK"`)

* `DM` (value: `"DM"`)

* `DO` (value: `"DO"`)

* `DZ` (value: `"DZ"`)

* `EC` (value: `"EC"`)

* `EE` (value: `"EE"`)

* `EG` (value: `"EG"`)

* `EH` (value: `"EH"`)

* `ER` (value: `"ER"`)

* `ES` (value: `"ES"`)

* `ET` (value: `"ET"`)

* `FI` (value: `"FI"`)

* `FJ` (value: `"FJ"`)

* `FK` (value: `"FK"`)

* `FM` (value: `"FM"`)

* `FO` (value: `"FO"`)

* `FR` (value: `"FR"`)

* `GA` (value: `"GA"`)

* `GB` (value: `"GB"`)

* `GD` (value: `"GD"`)

* `GE` (value: `"GE"`)

* `GF` (value: `"GF"`)

* `GG` (value: `"GG"`)

* `GH` (value: `"GH"`)

* `GI` (value: `"GI"`)

* `GL` (value: `"GL"`)

* `GM` (value: `"GM"`)

* `GN` (value: `"GN"`)

* `GP` (value: `"GP"`)

* `GQ` (value: `"GQ"`)

* `GR` (value: `"GR"`)

* `GS` (value: `"GS"`)

* `GT` (value: `"GT"`)

* `GU` (value: `"GU"`)

* `GW` (value: `"GW"`)

* `GY` (value: `"GY"`)

* `HK` (value: `"HK"`)

* `HM` (value: `"HM"`)

* `HN` (value: `"HN"`)

* `HR` (value: `"HR"`)

* `HT` (value: `"HT"`)

* `HU` (value: `"HU"`)

* `ID` (value: `"ID"`)

* `IE` (value: `"IE"`)

* `IL` (value: `"IL"`)

* `IM` (value: `"IM"`)

* `IN` (value: `"IN"`)

* `IO` (value: `"IO"`)

* `IQ` (value: `"IQ"`)

* `IR` (value: `"IR"`)

* `IS` (value: `"IS"`)

* `IT` (value: `"IT"`)

* `JE` (value: `"JE"`)

* `JM` (value: `"JM"`)

* `JO` (value: `"JO"`)

* `JP` (value: `"JP"`)

* `KE` (value: `"KE"`)

* `KG` (value: `"KG"`)

* `KH` (value: `"KH"`)

* `KI` (value: `"KI"`)

* `KM` (value: `"KM"`)

* `KN` (value: `"KN"`)

* `KP` (value: `"KP"`)

* `KR` (value: `"KR"`)

* `KW` (value: `"KW"`)

* `KY` (value: `"KY"`)

* `KZ` (value: `"KZ"`)

* `LA` (value: `"LA"`)

* `LB` (value: `"LB"`)

* `LC` (value: `"LC"`)

* `LI` (value: `"LI"`)

* `LK` (value: `"LK"`)

* `LR` (value: `"LR"`)

* `LS` (value: `"LS"`)

* `LT` (value: `"LT"`)

* `LU` (value: `"LU"`)

* `LV` (value: `"LV"`)

* `LY` (value: `"LY"`)

* `MA` (value: `"MA"`)

* `MC` (value: `"MC"`)

* `MD` (value: `"MD"`)

* `ME` (value: `"ME"`)

* `MF` (value: `"MF"`)

* `MG` (value: `"MG"`)

* `MH` (value: `"MH"`)

* `MK` (value: `"MK"`)

* `ML` (value: `"ML"`)

* `MM` (value: `"MM"`)

* `MN` (value: `"MN"`)

* `MO` (value: `"MO"`)

* `MP` (value: `"MP"`)

* `MQ` (value: `"MQ"`)

* `MR` (value: `"MR"`)

* `MS` (value: `"MS"`)

* `MT` (value: `"MT"`)

* `MU` (value: `"MU"`)

* `MV` (value: `"MV"`)

* `MW` (value: `"MW"`)

* `MX` (value: `"MX"`)

* `MY` (value: `"MY"`)

* `MZ` (value: `"MZ"`)

* `NA` (value: `"NA"`)

* `NC` (value: `"NC"`)

* `NE` (value: `"NE"`)

* `NF` (value: `"NF"`)

* `NG` (value: `"NG"`)

* `NI` (value: `"NI"`)

* `NL` (value: `"NL"`)

* `NO` (value: `"NO"`)

* `NP` (value: `"NP"`)

* `NR` (value: `"NR"`)

* `NU` (value: `"NU"`)

* `NZ` (value: `"NZ"`)

* `OM` (value: `"OM"`)

* `PA` (value: `"PA"`)

* `PE` (value: `"PE"`)

* `PF` (value: `"PF"`)

* `PG` (value: `"PG"`)

* `PH` (value: `"PH"`)

* `PK` (value: `"PK"`)

* `PL` (value: `"PL"`)

* `PM` (value: `"PM"`)

* `PN` (value: `"PN"`)

* `PR` (value: `"PR"`)

* `PS` (value: `"PS"`)

* `PT` (value: `"PT"`)

* `PW` (value: `"PW"`)

* `PY` (value: `"PY"`)

* `QA` (value: `"QA"`)

* `RE` (value: `"RE"`)

* `RO` (value: `"RO"`)

* `RS` (value: `"RS"`)

* `RU` (value: `"RU"`)

* `RW` (value: `"RW"`)

* `SA` (value: `"SA"`)

* `SB` (value: `"SB"`)

* `SC` (value: `"SC"`)

* `SD` (value: `"SD"`)

* `SE` (value: `"SE"`)

* `SG` (value: `"SG"`)

* `SH` (value: `"SH"`)

* `SI` (value: `"SI"`)

* `SJ` (value: `"SJ"`)

* `SK` (value: `"SK"`)

* `SL` (value: `"SL"`)

* `SM` (value: `"SM"`)

* `SN` (value: `"SN"`)

* `SO` (value: `"SO"`)

* `SR` (value: `"SR"`)

* `SS` (value: `"SS"`)

* `ST` (value: `"ST"`)

* `SV` (value: `"SV"`)

* `SX` (value: `"SX"`)

* `SY` (value: `"SY"`)

* `SZ` (value: `"SZ"`)

* `TC` (value: `"TC"`)

* `TD` (value: `"TD"`)

* `TF` (value: `"TF"`)

* `TG` (value: `"TG"`)

* `TH` (value: `"TH"`)

* `TJ` (value: `"TJ"`)

* `TK` (value: `"TK"`)

* `TL` (value: `"TL"`)

* `TM` (value: `"TM"`)

* `TN` (value: `"TN"`)

* `TO` (value: `"TO"`)

* `TR` (value: `"TR"`)

* `TT` (value: `"TT"`)

* `TV` (value: `"TV"`)

* `TW` (value: `"TW"`)

* `TZ` (value: `"TZ"`)

* `UA` (value: `"UA"`)

* `UG` (value: `"UG"`)

* `UM` (value: `"UM"`)

* `US` (value: `"US"`)

* `UY` (value: `"UY"`)

* `UZ` (value: `"UZ"`)

* `VA` (value: `"VA"`)

* `VC` (value: `"VC"`)

* `VE` (value: `"VE"`)

* `VG` (value: `"VG"`)

* `VI` (value: `"VI"`)

* `VN` (value: `"VN"`)

* `VU` (value: `"VU"`)

* `WF` (value: `"WF"`)

* `WS` (value: `"WS"`)

* `YE` (value: `"YE"`)

* `YT` (value: `"YT"`)

* `ZA` (value: `"ZA"`)

* `ZM` (value: `"ZM"`)

* `ZW` (value: `"ZW"`)




<a name="CurrencyEnum"></a>
## Enum: CurrencyEnum


* `UNKNOWN_CURRENCY` (value: `"UNKNOWN_CURRENCY"`)

* `AED` (value: `"AED"`)

* `AFN` (value: `"AFN"`)

* `ALL` (value: `"ALL"`)

* `AMD` (value: `"AMD"`)

* `ANG` (value: `"ANG"`)

* `AOA` (value: `"AOA"`)

* `ARS` (value: `"ARS"`)

* `AUD` (value: `"AUD"`)

* `AWG` (value: `"AWG"`)

* `AZN` (value: `"AZN"`)

* `BAM` (value: `"BAM"`)

* `BBD` (value: `"BBD"`)

* `BDT` (value: `"BDT"`)

* `BGN` (value: `"BGN"`)

* `BHD` (value: `"BHD"`)

* `BIF` (value: `"BIF"`)

* `BMD` (value: `"BMD"`)

* `BND` (value: `"BND"`)

* `BOB` (value: `"BOB"`)

* `BOV` (value: `"BOV"`)

* `BRL` (value: `"BRL"`)

* `BSD` (value: `"BSD"`)

* `BTN` (value: `"BTN"`)

* `BWP` (value: `"BWP"`)

* `BYR` (value: `"BYR"`)

* `BZD` (value: `"BZD"`)

* `CAD` (value: `"CAD"`)

* `CDF` (value: `"CDF"`)

* `CHE` (value: `"CHE"`)

* `CHF` (value: `"CHF"`)

* `CHW` (value: `"CHW"`)

* `CLF` (value: `"CLF"`)

* `CLP` (value: `"CLP"`)

* `CNY` (value: `"CNY"`)

* `COP` (value: `"COP"`)

* `COU` (value: `"COU"`)

* `CRC` (value: `"CRC"`)

* `CUC` (value: `"CUC"`)

* `CUP` (value: `"CUP"`)

* `CVE` (value: `"CVE"`)

* `CZK` (value: `"CZK"`)

* `DJF` (value: `"DJF"`)

* `DKK` (value: `"DKK"`)

* `DOP` (value: `"DOP"`)

* `DZD` (value: `"DZD"`)

* `EGP` (value: `"EGP"`)

* `ERN` (value: `"ERN"`)

* `ETB` (value: `"ETB"`)

* `EUR` (value: `"EUR"`)

* `FJD` (value: `"FJD"`)

* `FKP` (value: `"FKP"`)

* `GBP` (value: `"GBP"`)

* `GEL` (value: `"GEL"`)

* `GHS` (value: `"GHS"`)

* `GIP` (value: `"GIP"`)

* `GMD` (value: `"GMD"`)

* `GNF` (value: `"GNF"`)

* `GTQ` (value: `"GTQ"`)

* `GYD` (value: `"GYD"`)

* `HKD` (value: `"HKD"`)

* `HNL` (value: `"HNL"`)

* `HRK` (value: `"HRK"`)

* `HTG` (value: `"HTG"`)

* `HUF` (value: `"HUF"`)

* `IDR` (value: `"IDR"`)

* `ILS` (value: `"ILS"`)

* `INR` (value: `"INR"`)

* `IQD` (value: `"IQD"`)

* `IRR` (value: `"IRR"`)

* `ISK` (value: `"ISK"`)

* `JMD` (value: `"JMD"`)

* `JOD` (value: `"JOD"`)

* `JPY` (value: `"JPY"`)

* `KES` (value: `"KES"`)

* `KGS` (value: `"KGS"`)

* `KHR` (value: `"KHR"`)

* `KMF` (value: `"KMF"`)

* `KPW` (value: `"KPW"`)

* `KRW` (value: `"KRW"`)

* `KWD` (value: `"KWD"`)

* `KYD` (value: `"KYD"`)

* `KZT` (value: `"KZT"`)

* `LAK` (value: `"LAK"`)

* `LBP` (value: `"LBP"`)

* `LKR` (value: `"LKR"`)

* `LRD` (value: `"LRD"`)

* `LSL` (value: `"LSL"`)

* `LTL` (value: `"LTL"`)

* `LVL` (value: `"LVL"`)

* `LYD` (value: `"LYD"`)

* `MAD` (value: `"MAD"`)

* `MDL` (value: `"MDL"`)

* `MGA` (value: `"MGA"`)

* `MKD` (value: `"MKD"`)

* `MMK` (value: `"MMK"`)

* `MNT` (value: `"MNT"`)

* `MOP` (value: `"MOP"`)

* `MRO` (value: `"MRO"`)

* `MUR` (value: `"MUR"`)

* `MVR` (value: `"MVR"`)

* `MWK` (value: `"MWK"`)

* `MXN` (value: `"MXN"`)

* `MXV` (value: `"MXV"`)

* `MYR` (value: `"MYR"`)

* `MZN` (value: `"MZN"`)

* `NAD` (value: `"NAD"`)

* `NGN` (value: `"NGN"`)

* `NIO` (value: `"NIO"`)

* `NOK` (value: `"NOK"`)

* `NPR` (value: `"NPR"`)

* `NZD` (value: `"NZD"`)

* `OMR` (value: `"OMR"`)

* `PAB` (value: `"PAB"`)

* `PEN` (value: `"PEN"`)

* `PGK` (value: `"PGK"`)

* `PHP` (value: `"PHP"`)

* `PKR` (value: `"PKR"`)

* `PLN` (value: `"PLN"`)

* `PYG` (value: `"PYG"`)

* `QAR` (value: `"QAR"`)

* `RON` (value: `"RON"`)

* `RSD` (value: `"RSD"`)

* `RUB` (value: `"RUB"`)

* `RWF` (value: `"RWF"`)

* `SAR` (value: `"SAR"`)

* `SBD` (value: `"SBD"`)

* `SCR` (value: `"SCR"`)

* `SDG` (value: `"SDG"`)

* `SEK` (value: `"SEK"`)

* `SGD` (value: `"SGD"`)

* `SHP` (value: `"SHP"`)

* `SLL` (value: `"SLL"`)

* `SOS` (value: `"SOS"`)

* `SRD` (value: `"SRD"`)

* `SSP` (value: `"SSP"`)

* `STD` (value: `"STD"`)

* `SVC` (value: `"SVC"`)

* `SYP` (value: `"SYP"`)

* `SZL` (value: `"SZL"`)

* `THB` (value: `"THB"`)

* `TJS` (value: `"TJS"`)

* `TMT` (value: `"TMT"`)

* `TND` (value: `"TND"`)

* `TOP` (value: `"TOP"`)

* `TRY` (value: `"TRY"`)

* `TTD` (value: `"TTD"`)

* `TWD` (value: `"TWD"`)

* `TZS` (value: `"TZS"`)

* `UAH` (value: `"UAH"`)

* `UGX` (value: `"UGX"`)

* `USD` (value: `"USD"`)

* `USN` (value: `"USN"`)

* `USS` (value: `"USS"`)

* `UYI` (value: `"UYI"`)

* `UYU` (value: `"UYU"`)

* `UZS` (value: `"UZS"`)

* `VEF` (value: `"VEF"`)

* `VND` (value: `"VND"`)

* `VUV` (value: `"VUV"`)

* `WST` (value: `"WST"`)

* `XAF` (value: `"XAF"`)

* `XAG` (value: `"XAG"`)

* `XAU` (value: `"XAU"`)

* `XBA` (value: `"XBA"`)

* `XBB` (value: `"XBB"`)

* `XBC` (value: `"XBC"`)

* `XBD` (value: `"XBD"`)

* `XCD` (value: `"XCD"`)

* `XDR` (value: `"XDR"`)

* `XOF` (value: `"XOF"`)

* `XPD` (value: `"XPD"`)

* `XPF` (value: `"XPF"`)

* `XPT` (value: `"XPT"`)

* `XTS` (value: `"XTS"`)

* `XXX` (value: `"XXX"`)

* `YER` (value: `"YER"`)

* `ZAR` (value: `"ZAR"`)

* `ZMK` (value: `"ZMK"`)

* `ZMW` (value: `"ZMW"`)

* `BTC` (value: `"BTC"`)




<a name="TypeEnum"></a>
## Enum: TypeEnum


* `PHYSICAL` (value: `"PHYSICAL"`)

* `MOBILE` (value: `"MOBILE"`)




