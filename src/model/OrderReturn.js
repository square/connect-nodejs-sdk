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
var OrderMoneyAmounts = require('./OrderMoneyAmounts');
var OrderReturnDiscount = require('./OrderReturnDiscount');
var OrderReturnLineItem = require('./OrderReturnLineItem');
var OrderReturnServiceCharge = require('./OrderReturnServiceCharge');
var OrderReturnTax = require('./OrderReturnTax');
var OrderRoundingAdjustment = require('./OrderRoundingAdjustment');




/**
 * The OrderReturn model module.
 * @module model/OrderReturn
 */

/**
 * Constructs a new <code>OrderReturn</code>.
 * The set of line items, service charges, taxes, discounts, tips, etc. being returned in an Order.
 * @alias module:model/OrderReturn
 * @class
 */
var exports = function() {
  var _this = this;









};

/**
 * Constructs a <code>OrderReturn</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/OrderReturn} obj Optional instance to populate.
 * @return {module:model/OrderReturn} The populated <code>OrderReturn</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('uid')) {
      obj['uid'] = ApiClient.convertToType(data['uid'], 'String');
    }
      if (data.hasOwnProperty('source_order_id')) {
      obj['source_order_id'] = ApiClient.convertToType(data['source_order_id'], 'String');
    }
      if (data.hasOwnProperty('return_line_items')) {
      obj['return_line_items'] = ApiClient.convertToType(data['return_line_items'], [OrderReturnLineItem]);
    }
      if (data.hasOwnProperty('return_service_charges')) {
      obj['return_service_charges'] = ApiClient.convertToType(data['return_service_charges'], [OrderReturnServiceCharge]);
    }
      if (data.hasOwnProperty('return_taxes')) {
      obj['return_taxes'] = ApiClient.convertToType(data['return_taxes'], [OrderReturnTax]);
    }
      if (data.hasOwnProperty('return_discounts')) {
      obj['return_discounts'] = ApiClient.convertToType(data['return_discounts'], [OrderReturnDiscount]);
    }
      if (data.hasOwnProperty('rounding_adjustment')) {
      obj['rounding_adjustment'] = OrderRoundingAdjustment.constructFromObject(data['rounding_adjustment']);
    }
      if (data.hasOwnProperty('return_amounts')) {
      obj['return_amounts'] = OrderMoneyAmounts.constructFromObject(data['return_amounts']);
    }
    }
  return obj;
}

/**
 * Unique ID that identifies the return only within this order.
 * @member {String} uid
 */
exports.prototype['uid'] = undefined;
/**
 * Order which contains the original sale of these returned line items. This will be unset for unlinked returns.
 * @member {String} source_order_id
 */
exports.prototype['source_order_id'] = undefined;
/**
 * Collection of line items which are being returned.
 * @member {Array.<module:model/OrderReturnLineItem>} return_line_items
 */
exports.prototype['return_line_items'] = undefined;
/**
 * Collection of service charges which are being returned.
 * @member {Array.<module:model/OrderReturnServiceCharge>} return_service_charges
 */
exports.prototype['return_service_charges'] = undefined;
/**
 * Collection of references to taxes being returned for an order, including the total applied tax amount to be returned. The taxes must reference a top-level tax ID from the source order.
 * @member {Array.<module:model/OrderReturnTax>} return_taxes
 */
exports.prototype['return_taxes'] = undefined;
/**
 * Collection of references to discounts being returned for an order, including the total applied discount amount to be returned. The discounts must reference a top-level discount ID from the source order.
 * @member {Array.<module:model/OrderReturnDiscount>} return_discounts
 */
exports.prototype['return_discounts'] = undefined;
/**
 * A positive or negative rounding adjustment to the total value being returned. Commonly used to apply Cash Rounding when the minimum unit of account is smaller than the lowest physical denomination of currency.
 * @member {module:model/OrderRoundingAdjustment} rounding_adjustment
 */
exports.prototype['rounding_adjustment'] = undefined;
/**
 * Aggregate monetary value being returned by this Return entry.
 * @member {module:model/OrderMoneyAmounts} return_amounts
 */
exports.prototype['return_amounts'] = undefined;



module.exports = exports;



