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
 * Enum class BusinessBookingProfileCustomerTimezoneChoice.
 * @enum {}
 * @readonly
 */
var exports = {
  /**
   * value: "BUSINESS_LOCATION_TIMEZONE"
   * @const
   */
  "BUSINESS_LOCATION_TIMEZONE": "BUSINESS_LOCATION_TIMEZONE",
  /**
   * value: "CUSTOMER_CHOICE"
   * @const
   */
  "CUSTOMER_CHOICE": "CUSTOMER_CHOICE"};

/**
 * Returns a <code>BusinessBookingProfileCustomerTimezoneChoice</code> enum value from a Javascript object name.
 * @param {Object} data The plain JavaScript object containing the name of the enum value.
 * @return {module:model/BusinessBookingProfileCustomerTimezoneChoice} The enum <code>BusinessBookingProfileCustomerTimezoneChoice</code> value.
 */
exports.constructFromObject = function(object) {
  return object;
}

module.exports = exports;


