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
var CreateOrderRequestDiscount = require('./CreateOrderRequestDiscount');
var CreateOrderRequestLineItem = require('./CreateOrderRequestLineItem');
var CreateOrderRequestTax = require('./CreateOrderRequestTax');




/**
 * The CreateOrderRequest model module.
 * @module model/CreateOrderRequest
 * @version 2.6.0
 */

/**
 * Constructs a new <code>CreateOrderRequest</code>.
 * 
 * @alias module:model/CreateOrderRequest
 * @class
 * @param lineItems {Array.<module:model/CreateOrderRequestLineItem>} The line items to associate with this order.  Each line item represents a different product to include in a purchase.
 */
var exports = function(lineItems) {
  var _this = this;



  _this['line_items'] = lineItems;


};

/**
 * Constructs a <code>CreateOrderRequest</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/CreateOrderRequest} obj Optional instance to populate.
 * @return {module:model/CreateOrderRequest} The populated <code>CreateOrderRequest</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('idempotency_key')) {
      obj['idempotency_key'] = ApiClient.convertToType(data['idempotency_key'], 'String');
    }
      if (data.hasOwnProperty('reference_id')) {
      obj['reference_id'] = ApiClient.convertToType(data['reference_id'], 'String');
    }
      if (data.hasOwnProperty('line_items')) {
      obj['line_items'] = ApiClient.convertToType(data['line_items'], [CreateOrderRequestLineItem]);
    }
      if (data.hasOwnProperty('taxes')) {
      obj['taxes'] = ApiClient.convertToType(data['taxes'], [CreateOrderRequestTax]);
    }
      if (data.hasOwnProperty('discounts')) {
      obj['discounts'] = ApiClient.convertToType(data['discounts'], [CreateOrderRequestDiscount]);
    }
    }
  return obj;
}

/**
 * A value you specify that uniquely identifies this order among orders you've created.  If you're unsure whether a particular order was created successfully, you can reattempt it with the same idempotency key without worrying about creating duplicate orders.  See [Idempotency keys](#idempotencykeys) for more information.
 * @member {String} idempotency_key
 */
exports.prototype['idempotency_key'] = undefined;
/**
 * An optional ID you can associate with the order for your own purposes (such as to associate the order with an entity ID in your own database).  This value cannot exceed 40 characters.
 * @member {String} reference_id
 */
exports.prototype['reference_id'] = undefined;
/**
 * The line items to associate with this order.  Each line item represents a different product to include in a purchase.
 * @member {Array.<module:model/CreateOrderRequestLineItem>} line_items
 */
exports.prototype['line_items'] = undefined;
/**
 * The taxes to include on the order.
 * @member {Array.<module:model/CreateOrderRequestTax>} taxes
 */
exports.prototype['taxes'] = undefined;
/**
 * The discounts to include on the order.
 * @member {Array.<module:model/CreateOrderRequestDiscount>} discounts
 */
exports.prototype['discounts'] = undefined;



module.exports = exports;



