# SquareConnect.Address

### Description

Represents a physical address.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_line_1** | **String** | The first line of the address.  Fields that start with &#x60;address_line&#x60; provide the address&#39;s most specific details, like street number, street name, and building name. They do *not* provide less specific details like city, state/province, or country (these details are provided in other fields). | [optional] 
**address_line_2** | **String** | The second line of the address, if any. | [optional] 
**address_line_3** | **String** | The third line of the address, if any. | [optional] 
**locality** | **String** | The city or town of the address. | [optional] 
**sublocality** | **String** | A civil region within the address&#39;s &#x60;locality&#x60;, if any. | [optional] 
**sublocality_2** | **String** | A civil region within the address&#39;s &#x60;sublocality&#x60;, if any. | [optional] 
**sublocality_3** | **String** | A civil region within the address&#39;s &#x60;sublocality_2&#x60;, if any. | [optional] 
**administrative_district_level_1** | **String** | A civil entity within the address&#39;s country. In the US, this is the state. | [optional] 
**administrative_district_level_2** | **String** | A civil entity within the address&#39;s &#x60;administrative_district_level_1&#x60;. In the US, this is the county. | [optional] 
**administrative_district_level_3** | **String** | A civil entity within the address&#39;s &#x60;administrative_district_level_2&#x60;, if any. | [optional] 
**postal_code** | **String** | The address&#39;s postal code. | [optional] 
**country** | **String** | The address&#39;s country, in ISO 3166-1-alpha-2 format. See [Country](#type-country) for possible values | [optional] 
**first_name** | **String** | Optional first name when it&#39;s representing recipient. | [optional] 
**last_name** | **String** | Optional last name when it&#39;s representing recipient. | [optional] 
**organization** | **String** | Optional organization name when it&#39;s representing recipient. | [optional] 


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




