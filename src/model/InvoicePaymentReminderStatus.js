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
 * Enum class InvoicePaymentReminderStatus.
 * @enum {}
 * @readonly
 */
var exports = {
  /**
   * value: "PENDING"
   * @const
   */
  "PENDING": "PENDING",
  /**
   * value: "NOT_APPLICABLE"
   * @const
   */
  "NOT_APPLICABLE": "NOT_APPLICABLE",
  /**
   * value: "SENT"
   * @const
   */
  "SENT": "SENT"};

/**
 * Returns a <code>InvoicePaymentReminderStatus</code> enum value from a Javascript object name.
 * @param {Object} data The plain JavaScript object containing the name of the enum value.
 * @return {module:model/InvoicePaymentReminderStatus} The enum <code>InvoicePaymentReminderStatus</code> value.
 */
exports.constructFromObject = function(object) {
  return object;
}

module.exports = exports;


