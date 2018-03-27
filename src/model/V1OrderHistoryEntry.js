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
 * The V1OrderHistoryEntry model module.
 * @module model/V1OrderHistoryEntry
 * @version 2.6.0
 */

/**
 * Constructs a new <code>V1OrderHistoryEntry</code>.
 * @alias module:model/V1OrderHistoryEntry
 * @class
 */
var exports = function() {
  var _this = this;



};

/**
 * Constructs a <code>V1OrderHistoryEntry</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/V1OrderHistoryEntry} obj Optional instance to populate.
 * @return {module:model/V1OrderHistoryEntry} The populated <code>V1OrderHistoryEntry</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('action')) {
      obj['action'] = ApiClient.convertToType(data['action'], 'String');
    }
      if (data.hasOwnProperty('created_at')) {
      obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
    }
    }
  return obj;
}

/**
 * The type of action performed on the order.
 * @member {module:model/V1OrderHistoryEntry.ActionEnum} action
 */
exports.prototype['action'] = undefined;
/**
 * The time when the action was performed, in ISO 8601 format.
 * @member {String} created_at
 */
exports.prototype['created_at'] = undefined;


  /**
   * Allowed values for the <code>action</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ActionEnum = {
    /**
     * value: "ORDER_PLACED"
     * @const
     */
    "ORDER_PLACED": "ORDER_PLACED",
    /**
     * value: "DECLINED"
     * @const
     */
    "DECLINED": "DECLINED",
    /**
     * value: "PAYMENT_RECEIVED"
     * @const
     */
    "PAYMENT_RECEIVED": "PAYMENT_RECEIVED",
    /**
     * value: "CANCELED"
     * @const
     */
    "CANCELED": "CANCELED",
    /**
     * value: "COMPLETED"
     * @const
     */
    "COMPLETED": "COMPLETED",
    /**
     * value: "REFUNDED"
     * @const
     */
    "REFUNDED": "REFUNDED",
    /**
     * value: "EXPIRED"
     * @const
     */
    "EXPIRED": "EXPIRED"  };


module.exports = exports;



