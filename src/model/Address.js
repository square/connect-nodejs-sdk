/**
 * Square Connect API
 * Client library for accessing the Square Connect APIs
 *
 * OpenAPI spec version: 2.0
 * Contact: developers@squareup.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0-SNAPSHOT
 *
 */
var ApiClient = require('../ApiClient');




/**
 * The Address model module.
 * @module model/Address
 */

/**
 * Constructs a new <code>Address</code>.
 * Represents a physical address.
 * @alias module:model/Address
 * @class
 */
var exports = function() {
  var _this = this;
















};

/**
 * Constructs a <code>Address</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/Address} obj Optional instance to populate.
 * @return {module:model/Address} The populated <code>Address</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('address_line_1')) {
      obj['address_line_1'] = ApiClient.convertToType(data['address_line_1'], 'String');
    }
      if (data.hasOwnProperty('address_line_2')) {
      obj['address_line_2'] = ApiClient.convertToType(data['address_line_2'], 'String');
    }
      if (data.hasOwnProperty('address_line_3')) {
      obj['address_line_3'] = ApiClient.convertToType(data['address_line_3'], 'String');
    }
      if (data.hasOwnProperty('locality')) {
      obj['locality'] = ApiClient.convertToType(data['locality'], 'String');
    }
      if (data.hasOwnProperty('sublocality')) {
      obj['sublocality'] = ApiClient.convertToType(data['sublocality'], 'String');
    }
      if (data.hasOwnProperty('sublocality_2')) {
      obj['sublocality_2'] = ApiClient.convertToType(data['sublocality_2'], 'String');
    }
      if (data.hasOwnProperty('sublocality_3')) {
      obj['sublocality_3'] = ApiClient.convertToType(data['sublocality_3'], 'String');
    }
      if (data.hasOwnProperty('administrative_district_level_1')) {
      obj['administrative_district_level_1'] = ApiClient.convertToType(data['administrative_district_level_1'], 'String');
    }
      if (data.hasOwnProperty('administrative_district_level_2')) {
      obj['administrative_district_level_2'] = ApiClient.convertToType(data['administrative_district_level_2'], 'String');
    }
      if (data.hasOwnProperty('administrative_district_level_3')) {
      obj['administrative_district_level_3'] = ApiClient.convertToType(data['administrative_district_level_3'], 'String');
    }
      if (data.hasOwnProperty('postal_code')) {
      obj['postal_code'] = ApiClient.convertToType(data['postal_code'], 'String');
    }
      if (data.hasOwnProperty('country')) {
      obj['country'] = ApiClient.convertToType(data['country'], 'String');
    }
      if (data.hasOwnProperty('first_name')) {
      obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
    }
      if (data.hasOwnProperty('last_name')) {
      obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
    }
      if (data.hasOwnProperty('organization')) {
      obj['organization'] = ApiClient.convertToType(data['organization'], 'String');
    }
    }
  return obj;
}

/**
 * The first line of the address.  Fields that start with `address_line` provide the address's most specific details, like street number, street name, and building name. They do *not* provide less specific details like city, state/province, or country (these details are provided in other fields).
 * @member {String} address_line_1
 */
exports.prototype['address_line_1'] = undefined;
/**
 * The second line of the address, if any.
 * @member {String} address_line_2
 */
exports.prototype['address_line_2'] = undefined;
/**
 * The third line of the address, if any.
 * @member {String} address_line_3
 */
exports.prototype['address_line_3'] = undefined;
/**
 * The city or town of the address.
 * @member {String} locality
 */
exports.prototype['locality'] = undefined;
/**
 * A civil region within the address's `locality`, if any.
 * @member {String} sublocality
 */
exports.prototype['sublocality'] = undefined;
/**
 * A civil region within the address's `sublocality`, if any.
 * @member {String} sublocality_2
 */
exports.prototype['sublocality_2'] = undefined;
/**
 * A civil region within the address's `sublocality_2`, if any.
 * @member {String} sublocality_3
 */
exports.prototype['sublocality_3'] = undefined;
/**
 * A civil entity within the address's country. In the US, this is the state.
 * @member {String} administrative_district_level_1
 */
exports.prototype['administrative_district_level_1'] = undefined;
/**
 * A civil entity within the address's `administrative_district_level_1`. In the US, this is the county.
 * @member {String} administrative_district_level_2
 */
exports.prototype['administrative_district_level_2'] = undefined;
/**
 * A civil entity within the address's `administrative_district_level_2`, if any.
 * @member {String} administrative_district_level_3
 */
exports.prototype['administrative_district_level_3'] = undefined;
/**
 * The address's postal code.
 * @member {String} postal_code
 */
exports.prototype['postal_code'] = undefined;
/**
 * The address's country, in ISO 3166-1-alpha-2 format. See [Country](#type-country) for possible values
 * @member {module:model/Address.CountryEnum} country
 */
exports.prototype['country'] = undefined;
/**
 * Optional first name when it's representing recipient.
 * @member {String} first_name
 */
exports.prototype['first_name'] = undefined;
/**
 * Optional last name when it's representing recipient.
 * @member {String} last_name
 */
exports.prototype['last_name'] = undefined;
/**
 * Optional organization name when it's representing recipient.
 * @member {String} organization
 */
exports.prototype['organization'] = undefined;


  /**
   * Allowed values for the <code>country</code> property.
   * @enum {String}
   * @readonly
   */
  exports.CountryEnum = {
    /**
     * value: "ZZ"
     * @const
     */
    "ZZ": "ZZ",
    /**
     * value: "AD"
     * @const
     */
    "AD": "AD",
    /**
     * value: "AE"
     * @const
     */
    "AE": "AE",
    /**
     * value: "AF"
     * @const
     */
    "AF": "AF",
    /**
     * value: "AG"
     * @const
     */
    "AG": "AG",
    /**
     * value: "AI"
     * @const
     */
    "AI": "AI",
    /**
     * value: "AL"
     * @const
     */
    "AL": "AL",
    /**
     * value: "AM"
     * @const
     */
    "AM": "AM",
    /**
     * value: "AO"
     * @const
     */
    "AO": "AO",
    /**
     * value: "AQ"
     * @const
     */
    "AQ": "AQ",
    /**
     * value: "AR"
     * @const
     */
    "AR": "AR",
    /**
     * value: "AS"
     * @const
     */
    "AS": "AS",
    /**
     * value: "AT"
     * @const
     */
    "AT": "AT",
    /**
     * value: "AU"
     * @const
     */
    "AU": "AU",
    /**
     * value: "AW"
     * @const
     */
    "AW": "AW",
    /**
     * value: "AX"
     * @const
     */
    "AX": "AX",
    /**
     * value: "AZ"
     * @const
     */
    "AZ": "AZ",
    /**
     * value: "BA"
     * @const
     */
    "BA": "BA",
    /**
     * value: "BB"
     * @const
     */
    "BB": "BB",
    /**
     * value: "BD"
     * @const
     */
    "BD": "BD",
    /**
     * value: "BE"
     * @const
     */
    "BE": "BE",
    /**
     * value: "BF"
     * @const
     */
    "BF": "BF",
    /**
     * value: "BG"
     * @const
     */
    "BG": "BG",
    /**
     * value: "BH"
     * @const
     */
    "BH": "BH",
    /**
     * value: "BI"
     * @const
     */
    "BI": "BI",
    /**
     * value: "BJ"
     * @const
     */
    "BJ": "BJ",
    /**
     * value: "BL"
     * @const
     */
    "BL": "BL",
    /**
     * value: "BM"
     * @const
     */
    "BM": "BM",
    /**
     * value: "BN"
     * @const
     */
    "BN": "BN",
    /**
     * value: "BO"
     * @const
     */
    "BO": "BO",
    /**
     * value: "BQ"
     * @const
     */
    "BQ": "BQ",
    /**
     * value: "BR"
     * @const
     */
    "BR": "BR",
    /**
     * value: "BS"
     * @const
     */
    "BS": "BS",
    /**
     * value: "BT"
     * @const
     */
    "BT": "BT",
    /**
     * value: "BV"
     * @const
     */
    "BV": "BV",
    /**
     * value: "BW"
     * @const
     */
    "BW": "BW",
    /**
     * value: "BY"
     * @const
     */
    "BY": "BY",
    /**
     * value: "BZ"
     * @const
     */
    "BZ": "BZ",
    /**
     * value: "CA"
     * @const
     */
    "CA": "CA",
    /**
     * value: "CC"
     * @const
     */
    "CC": "CC",
    /**
     * value: "CD"
     * @const
     */
    "CD": "CD",
    /**
     * value: "CF"
     * @const
     */
    "CF": "CF",
    /**
     * value: "CG"
     * @const
     */
    "CG": "CG",
    /**
     * value: "CH"
     * @const
     */
    "CH": "CH",
    /**
     * value: "CI"
     * @const
     */
    "CI": "CI",
    /**
     * value: "CK"
     * @const
     */
    "CK": "CK",
    /**
     * value: "CL"
     * @const
     */
    "CL": "CL",
    /**
     * value: "CM"
     * @const
     */
    "CM": "CM",
    /**
     * value: "CN"
     * @const
     */
    "CN": "CN",
    /**
     * value: "CO"
     * @const
     */
    "CO": "CO",
    /**
     * value: "CR"
     * @const
     */
    "CR": "CR",
    /**
     * value: "CU"
     * @const
     */
    "CU": "CU",
    /**
     * value: "CV"
     * @const
     */
    "CV": "CV",
    /**
     * value: "CW"
     * @const
     */
    "CW": "CW",
    /**
     * value: "CX"
     * @const
     */
    "CX": "CX",
    /**
     * value: "CY"
     * @const
     */
    "CY": "CY",
    /**
     * value: "CZ"
     * @const
     */
    "CZ": "CZ",
    /**
     * value: "DE"
     * @const
     */
    "DE": "DE",
    /**
     * value: "DJ"
     * @const
     */
    "DJ": "DJ",
    /**
     * value: "DK"
     * @const
     */
    "DK": "DK",
    /**
     * value: "DM"
     * @const
     */
    "DM": "DM",
    /**
     * value: "DO"
     * @const
     */
    "DO": "DO",
    /**
     * value: "DZ"
     * @const
     */
    "DZ": "DZ",
    /**
     * value: "EC"
     * @const
     */
    "EC": "EC",
    /**
     * value: "EE"
     * @const
     */
    "EE": "EE",
    /**
     * value: "EG"
     * @const
     */
    "EG": "EG",
    /**
     * value: "EH"
     * @const
     */
    "EH": "EH",
    /**
     * value: "ER"
     * @const
     */
    "ER": "ER",
    /**
     * value: "ES"
     * @const
     */
    "ES": "ES",
    /**
     * value: "ET"
     * @const
     */
    "ET": "ET",
    /**
     * value: "FI"
     * @const
     */
    "FI": "FI",
    /**
     * value: "FJ"
     * @const
     */
    "FJ": "FJ",
    /**
     * value: "FK"
     * @const
     */
    "FK": "FK",
    /**
     * value: "FM"
     * @const
     */
    "FM": "FM",
    /**
     * value: "FO"
     * @const
     */
    "FO": "FO",
    /**
     * value: "FR"
     * @const
     */
    "FR": "FR",
    /**
     * value: "GA"
     * @const
     */
    "GA": "GA",
    /**
     * value: "GB"
     * @const
     */
    "GB": "GB",
    /**
     * value: "GD"
     * @const
     */
    "GD": "GD",
    /**
     * value: "GE"
     * @const
     */
    "GE": "GE",
    /**
     * value: "GF"
     * @const
     */
    "GF": "GF",
    /**
     * value: "GG"
     * @const
     */
    "GG": "GG",
    /**
     * value: "GH"
     * @const
     */
    "GH": "GH",
    /**
     * value: "GI"
     * @const
     */
    "GI": "GI",
    /**
     * value: "GL"
     * @const
     */
    "GL": "GL",
    /**
     * value: "GM"
     * @const
     */
    "GM": "GM",
    /**
     * value: "GN"
     * @const
     */
    "GN": "GN",
    /**
     * value: "GP"
     * @const
     */
    "GP": "GP",
    /**
     * value: "GQ"
     * @const
     */
    "GQ": "GQ",
    /**
     * value: "GR"
     * @const
     */
    "GR": "GR",
    /**
     * value: "GS"
     * @const
     */
    "GS": "GS",
    /**
     * value: "GT"
     * @const
     */
    "GT": "GT",
    /**
     * value: "GU"
     * @const
     */
    "GU": "GU",
    /**
     * value: "GW"
     * @const
     */
    "GW": "GW",
    /**
     * value: "GY"
     * @const
     */
    "GY": "GY",
    /**
     * value: "HK"
     * @const
     */
    "HK": "HK",
    /**
     * value: "HM"
     * @const
     */
    "HM": "HM",
    /**
     * value: "HN"
     * @const
     */
    "HN": "HN",
    /**
     * value: "HR"
     * @const
     */
    "HR": "HR",
    /**
     * value: "HT"
     * @const
     */
    "HT": "HT",
    /**
     * value: "HU"
     * @const
     */
    "HU": "HU",
    /**
     * value: "ID"
     * @const
     */
    "ID": "ID",
    /**
     * value: "IE"
     * @const
     */
    "IE": "IE",
    /**
     * value: "IL"
     * @const
     */
    "IL": "IL",
    /**
     * value: "IM"
     * @const
     */
    "IM": "IM",
    /**
     * value: "IN"
     * @const
     */
    "IN": "IN",
    /**
     * value: "IO"
     * @const
     */
    "IO": "IO",
    /**
     * value: "IQ"
     * @const
     */
    "IQ": "IQ",
    /**
     * value: "IR"
     * @const
     */
    "IR": "IR",
    /**
     * value: "IS"
     * @const
     */
    "IS": "IS",
    /**
     * value: "IT"
     * @const
     */
    "IT": "IT",
    /**
     * value: "JE"
     * @const
     */
    "JE": "JE",
    /**
     * value: "JM"
     * @const
     */
    "JM": "JM",
    /**
     * value: "JO"
     * @const
     */
    "JO": "JO",
    /**
     * value: "JP"
     * @const
     */
    "JP": "JP",
    /**
     * value: "KE"
     * @const
     */
    "KE": "KE",
    /**
     * value: "KG"
     * @const
     */
    "KG": "KG",
    /**
     * value: "KH"
     * @const
     */
    "KH": "KH",
    /**
     * value: "KI"
     * @const
     */
    "KI": "KI",
    /**
     * value: "KM"
     * @const
     */
    "KM": "KM",
    /**
     * value: "KN"
     * @const
     */
    "KN": "KN",
    /**
     * value: "KP"
     * @const
     */
    "KP": "KP",
    /**
     * value: "KR"
     * @const
     */
    "KR": "KR",
    /**
     * value: "KW"
     * @const
     */
    "KW": "KW",
    /**
     * value: "KY"
     * @const
     */
    "KY": "KY",
    /**
     * value: "KZ"
     * @const
     */
    "KZ": "KZ",
    /**
     * value: "LA"
     * @const
     */
    "LA": "LA",
    /**
     * value: "LB"
     * @const
     */
    "LB": "LB",
    /**
     * value: "LC"
     * @const
     */
    "LC": "LC",
    /**
     * value: "LI"
     * @const
     */
    "LI": "LI",
    /**
     * value: "LK"
     * @const
     */
    "LK": "LK",
    /**
     * value: "LR"
     * @const
     */
    "LR": "LR",
    /**
     * value: "LS"
     * @const
     */
    "LS": "LS",
    /**
     * value: "LT"
     * @const
     */
    "LT": "LT",
    /**
     * value: "LU"
     * @const
     */
    "LU": "LU",
    /**
     * value: "LV"
     * @const
     */
    "LV": "LV",
    /**
     * value: "LY"
     * @const
     */
    "LY": "LY",
    /**
     * value: "MA"
     * @const
     */
    "MA": "MA",
    /**
     * value: "MC"
     * @const
     */
    "MC": "MC",
    /**
     * value: "MD"
     * @const
     */
    "MD": "MD",
    /**
     * value: "ME"
     * @const
     */
    "ME": "ME",
    /**
     * value: "MF"
     * @const
     */
    "MF": "MF",
    /**
     * value: "MG"
     * @const
     */
    "MG": "MG",
    /**
     * value: "MH"
     * @const
     */
    "MH": "MH",
    /**
     * value: "MK"
     * @const
     */
    "MK": "MK",
    /**
     * value: "ML"
     * @const
     */
    "ML": "ML",
    /**
     * value: "MM"
     * @const
     */
    "MM": "MM",
    /**
     * value: "MN"
     * @const
     */
    "MN": "MN",
    /**
     * value: "MO"
     * @const
     */
    "MO": "MO",
    /**
     * value: "MP"
     * @const
     */
    "MP": "MP",
    /**
     * value: "MQ"
     * @const
     */
    "MQ": "MQ",
    /**
     * value: "MR"
     * @const
     */
    "MR": "MR",
    /**
     * value: "MS"
     * @const
     */
    "MS": "MS",
    /**
     * value: "MT"
     * @const
     */
    "MT": "MT",
    /**
     * value: "MU"
     * @const
     */
    "MU": "MU",
    /**
     * value: "MV"
     * @const
     */
    "MV": "MV",
    /**
     * value: "MW"
     * @const
     */
    "MW": "MW",
    /**
     * value: "MX"
     * @const
     */
    "MX": "MX",
    /**
     * value: "MY"
     * @const
     */
    "MY": "MY",
    /**
     * value: "MZ"
     * @const
     */
    "MZ": "MZ",
    /**
     * value: "NA"
     * @const
     */
    "NA": "NA",
    /**
     * value: "NC"
     * @const
     */
    "NC": "NC",
    /**
     * value: "NE"
     * @const
     */
    "NE": "NE",
    /**
     * value: "NF"
     * @const
     */
    "NF": "NF",
    /**
     * value: "NG"
     * @const
     */
    "NG": "NG",
    /**
     * value: "NI"
     * @const
     */
    "NI": "NI",
    /**
     * value: "NL"
     * @const
     */
    "NL": "NL",
    /**
     * value: "NO"
     * @const
     */
    "NO": "NO",
    /**
     * value: "NP"
     * @const
     */
    "NP": "NP",
    /**
     * value: "NR"
     * @const
     */
    "NR": "NR",
    /**
     * value: "NU"
     * @const
     */
    "NU": "NU",
    /**
     * value: "NZ"
     * @const
     */
    "NZ": "NZ",
    /**
     * value: "OM"
     * @const
     */
    "OM": "OM",
    /**
     * value: "PA"
     * @const
     */
    "PA": "PA",
    /**
     * value: "PE"
     * @const
     */
    "PE": "PE",
    /**
     * value: "PF"
     * @const
     */
    "PF": "PF",
    /**
     * value: "PG"
     * @const
     */
    "PG": "PG",
    /**
     * value: "PH"
     * @const
     */
    "PH": "PH",
    /**
     * value: "PK"
     * @const
     */
    "PK": "PK",
    /**
     * value: "PL"
     * @const
     */
    "PL": "PL",
    /**
     * value: "PM"
     * @const
     */
    "PM": "PM",
    /**
     * value: "PN"
     * @const
     */
    "PN": "PN",
    /**
     * value: "PR"
     * @const
     */
    "PR": "PR",
    /**
     * value: "PS"
     * @const
     */
    "PS": "PS",
    /**
     * value: "PT"
     * @const
     */
    "PT": "PT",
    /**
     * value: "PW"
     * @const
     */
    "PW": "PW",
    /**
     * value: "PY"
     * @const
     */
    "PY": "PY",
    /**
     * value: "QA"
     * @const
     */
    "QA": "QA",
    /**
     * value: "RE"
     * @const
     */
    "RE": "RE",
    /**
     * value: "RO"
     * @const
     */
    "RO": "RO",
    /**
     * value: "RS"
     * @const
     */
    "RS": "RS",
    /**
     * value: "RU"
     * @const
     */
    "RU": "RU",
    /**
     * value: "RW"
     * @const
     */
    "RW": "RW",
    /**
     * value: "SA"
     * @const
     */
    "SA": "SA",
    /**
     * value: "SB"
     * @const
     */
    "SB": "SB",
    /**
     * value: "SC"
     * @const
     */
    "SC": "SC",
    /**
     * value: "SD"
     * @const
     */
    "SD": "SD",
    /**
     * value: "SE"
     * @const
     */
    "SE": "SE",
    /**
     * value: "SG"
     * @const
     */
    "SG": "SG",
    /**
     * value: "SH"
     * @const
     */
    "SH": "SH",
    /**
     * value: "SI"
     * @const
     */
    "SI": "SI",
    /**
     * value: "SJ"
     * @const
     */
    "SJ": "SJ",
    /**
     * value: "SK"
     * @const
     */
    "SK": "SK",
    /**
     * value: "SL"
     * @const
     */
    "SL": "SL",
    /**
     * value: "SM"
     * @const
     */
    "SM": "SM",
    /**
     * value: "SN"
     * @const
     */
    "SN": "SN",
    /**
     * value: "SO"
     * @const
     */
    "SO": "SO",
    /**
     * value: "SR"
     * @const
     */
    "SR": "SR",
    /**
     * value: "SS"
     * @const
     */
    "SS": "SS",
    /**
     * value: "ST"
     * @const
     */
    "ST": "ST",
    /**
     * value: "SV"
     * @const
     */
    "SV": "SV",
    /**
     * value: "SX"
     * @const
     */
    "SX": "SX",
    /**
     * value: "SY"
     * @const
     */
    "SY": "SY",
    /**
     * value: "SZ"
     * @const
     */
    "SZ": "SZ",
    /**
     * value: "TC"
     * @const
     */
    "TC": "TC",
    /**
     * value: "TD"
     * @const
     */
    "TD": "TD",
    /**
     * value: "TF"
     * @const
     */
    "TF": "TF",
    /**
     * value: "TG"
     * @const
     */
    "TG": "TG",
    /**
     * value: "TH"
     * @const
     */
    "TH": "TH",
    /**
     * value: "TJ"
     * @const
     */
    "TJ": "TJ",
    /**
     * value: "TK"
     * @const
     */
    "TK": "TK",
    /**
     * value: "TL"
     * @const
     */
    "TL": "TL",
    /**
     * value: "TM"
     * @const
     */
    "TM": "TM",
    /**
     * value: "TN"
     * @const
     */
    "TN": "TN",
    /**
     * value: "TO"
     * @const
     */
    "TO": "TO",
    /**
     * value: "TR"
     * @const
     */
    "TR": "TR",
    /**
     * value: "TT"
     * @const
     */
    "TT": "TT",
    /**
     * value: "TV"
     * @const
     */
    "TV": "TV",
    /**
     * value: "TW"
     * @const
     */
    "TW": "TW",
    /**
     * value: "TZ"
     * @const
     */
    "TZ": "TZ",
    /**
     * value: "UA"
     * @const
     */
    "UA": "UA",
    /**
     * value: "UG"
     * @const
     */
    "UG": "UG",
    /**
     * value: "UM"
     * @const
     */
    "UM": "UM",
    /**
     * value: "US"
     * @const
     */
    "US": "US",
    /**
     * value: "UY"
     * @const
     */
    "UY": "UY",
    /**
     * value: "UZ"
     * @const
     */
    "UZ": "UZ",
    /**
     * value: "VA"
     * @const
     */
    "VA": "VA",
    /**
     * value: "VC"
     * @const
     */
    "VC": "VC",
    /**
     * value: "VE"
     * @const
     */
    "VE": "VE",
    /**
     * value: "VG"
     * @const
     */
    "VG": "VG",
    /**
     * value: "VI"
     * @const
     */
    "VI": "VI",
    /**
     * value: "VN"
     * @const
     */
    "VN": "VN",
    /**
     * value: "VU"
     * @const
     */
    "VU": "VU",
    /**
     * value: "WF"
     * @const
     */
    "WF": "WF",
    /**
     * value: "WS"
     * @const
     */
    "WS": "WS",
    /**
     * value: "YE"
     * @const
     */
    "YE": "YE",
    /**
     * value: "YT"
     * @const
     */
    "YT": "YT",
    /**
     * value: "ZA"
     * @const
     */
    "ZA": "ZA",
    /**
     * value: "ZM"
     * @const
     */
    "ZM": "ZM",
    /**
     * value: "ZW"
     * @const
     */
    "ZW": "ZW"  };


module.exports = exports;



