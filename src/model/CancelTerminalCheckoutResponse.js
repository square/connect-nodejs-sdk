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
var Error = require('./Error');
var TerminalCheckout = require('./TerminalCheckout');




/**
 * The CancelTerminalCheckoutResponse model module.
 * Note: This model is in beta.
 * @module model/CancelTerminalCheckoutResponse
 */

/**
 * Constructs a new <code>CancelTerminalCheckoutResponse</code>.
 * 
 * @alias module:model/CancelTerminalCheckoutResponse
 * @class
 */
var exports = function() {
  var _this = this;



};

/**
 * Constructs a <code>CancelTerminalCheckoutResponse</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/CancelTerminalCheckoutResponse} obj Optional instance to populate.
 * @return {module:model/CancelTerminalCheckoutResponse} The populated <code>CancelTerminalCheckoutResponse</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('errors')) {
      obj['errors'] = ApiClient.convertToType(data['errors'], [Error]);
    }
      if (data.hasOwnProperty('checkout')) {
      obj['checkout'] = TerminalCheckout.constructFromObject(data['checkout']);
    }
    }
  return obj;
}

/**
 * Information on errors encountered during the request.
 * @member {Array.<module:model/Error>} errors
 */
exports.prototype['errors'] = undefined;
/**
 * The updated `TerminalCheckout`
 * @member {module:model/TerminalCheckout} checkout
 */
exports.prototype['checkout'] = undefined;



module.exports = exports;


