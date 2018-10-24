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
var V1Money = require('./V1Money');
var V1PaymentTax = require('./V1PaymentTax');




/**
 * The V1PaymentSurcharge model module.
 * @module model/V1PaymentSurcharge
 */

/**
 * Constructs a new <code>V1PaymentSurcharge</code>.
 * @alias module:model/V1PaymentSurcharge
 * @class
 */
var exports = function() {
  var _this = this;









};

/**
 * Constructs a <code>V1PaymentSurcharge</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/V1PaymentSurcharge} obj Optional instance to populate.
 * @return {module:model/V1PaymentSurcharge} The populated <code>V1PaymentSurcharge</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
      obj['name'] = ApiClient.convertToType(data['name'], 'String');
    }
      if (data.hasOwnProperty('applied_money')) {
      obj['applied_money'] = V1Money.constructFromObject(data['applied_money']);
    }
      if (data.hasOwnProperty('rate')) {
      obj['rate'] = ApiClient.convertToType(data['rate'], 'String');
    }
      if (data.hasOwnProperty('amount_money')) {
      obj['amount_money'] = V1Money.constructFromObject(data['amount_money']);
    }
      if (data.hasOwnProperty('type')) {
      obj['type'] = ApiClient.convertToType(data['type'], 'String');
    }
      if (data.hasOwnProperty('taxable')) {
      obj['taxable'] = ApiClient.convertToType(data['taxable'], 'Boolean');
    }
      if (data.hasOwnProperty('taxes')) {
      obj['taxes'] = ApiClient.convertToType(data['taxes'], [V1PaymentTax]);
    }
      if (data.hasOwnProperty('surcharge_id')) {
      obj['surcharge_id'] = ApiClient.convertToType(data['surcharge_id'], 'String');
    }
    }
  return obj;
}

/**
 * The name of the surcharge.
 * @member {String} name
 */
exports.prototype['name'] = undefined;
/**
 * The amount of money applied to the order as a result of the surcharge.
 * @member {module:model/V1Money} applied_money
 */
exports.prototype['applied_money'] = undefined;
/**
 * The amount of the surcharge as a percentage. The percentage is provided as a string representing the decimal equivalent of the percentage. For example, \"0.7\" corresponds to a 7% surcharge. Exactly one of rate or amount_money should be set.
 * @member {String} rate
 */
exports.prototype['rate'] = undefined;
/**
 * The amount of the surcharge as a Money object. Exactly one of rate or amount_money should be set.
 * @member {module:model/V1Money} amount_money
 */
exports.prototype['amount_money'] = undefined;
/**
 * Indicates the source of the surcharge. For example, if it was applied as an automatic gratuity for a large group.
 * @member {module:model/V1PaymentSurcharge.TypeEnum} type
 */
exports.prototype['type'] = undefined;
/**
 * Indicates whether the surcharge is taxable.
 * @member {Boolean} taxable
 */
exports.prototype['taxable'] = undefined;
/**
 * The list of taxes that should be applied to the surcharge.
 * @member {Array.<module:model/V1PaymentTax>} taxes
 */
exports.prototype['taxes'] = undefined;
/**
 * A Square-issued unique identifier associated with the surcharge.
 * @member {String} surcharge_id
 */
exports.prototype['surcharge_id'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "UNKNOWN"
     * @const
     */
    "UNKNOWN": "UNKNOWN",
    /**
     * value: "AUTO_GRATUITY"
     * @const
     */
    "AUTO_GRATUITY": "AUTO_GRATUITY",
    /**
     * value: "CUSTOM"
     * @const
     */
    "CUSTOM": "CUSTOM"  };


module.exports = exports;



