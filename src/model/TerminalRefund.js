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
var Money = require('./Money');




/**
 * The TerminalRefund model module.
 * Note: This model is in beta.
 * @module model/TerminalRefund
 */

/**
 * Constructs a new <code>TerminalRefund</code>.
 * 
 * @alias module:model/TerminalRefund
 * @class
 * @param paymentId {String} Unique ID of the payment being refunded.
 * @param amountMoney {module:model/Money} The amount of money, inclusive of `tax_money`, that the `TerminalRefund` should return. This value is limited to the amount taken in the original payment minus any completed or pending refunds.
 */
var exports = function(paymentId, amountMoney) {
  var _this = this;



  _this['payment_id'] = paymentId;

  _this['amount_money'] = amountMoney;







};

/**
 * Constructs a <code>TerminalRefund</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/TerminalRefund} obj Optional instance to populate.
 * @return {module:model/TerminalRefund} The populated <code>TerminalRefund</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
      obj['id'] = ApiClient.convertToType(data['id'], 'String');
    }
      if (data.hasOwnProperty('refund_id')) {
      obj['refund_id'] = ApiClient.convertToType(data['refund_id'], 'String');
    }
      if (data.hasOwnProperty('payment_id')) {
      obj['payment_id'] = ApiClient.convertToType(data['payment_id'], 'String');
    }
      if (data.hasOwnProperty('order_id')) {
      obj['order_id'] = ApiClient.convertToType(data['order_id'], 'String');
    }
      if (data.hasOwnProperty('amount_money')) {
      obj['amount_money'] = Money.constructFromObject(data['amount_money']);
    }
      if (data.hasOwnProperty('reason')) {
      obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
    }
      if (data.hasOwnProperty('device_id')) {
      obj['device_id'] = ApiClient.convertToType(data['device_id'], 'String');
    }
      if (data.hasOwnProperty('deadline_duration')) {
      obj['deadline_duration'] = ApiClient.convertToType(data['deadline_duration'], 'String');
    }
      if (data.hasOwnProperty('status')) {
      obj['status'] = ApiClient.convertToType(data['status'], 'String');
    }
      if (data.hasOwnProperty('cancel_reason')) {
      obj['cancel_reason'] = ApiClient.convertToType(data['cancel_reason'], 'String');
    }
      if (data.hasOwnProperty('created_at')) {
      obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
    }
      if (data.hasOwnProperty('updated_at')) {
      obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
    }
    }
  return obj;
}

/**
 * A unique ID for this `TerminalRefund`
 * @member {String} id
 */
exports.prototype['id'] = undefined;
/**
 * The reference to the payment refund created by completing this `TerminalRefund`.
 * @member {String} refund_id
 */
exports.prototype['refund_id'] = undefined;
/**
 * Unique ID of the payment being refunded.
 * @member {String} payment_id
 */
exports.prototype['payment_id'] = undefined;
/**
 * The reference to the Square order id for the payment identified by the `payment_id`.
 * @member {String} order_id
 */
exports.prototype['order_id'] = undefined;
/**
 * The amount of money, inclusive of `tax_money`, that the `TerminalRefund` should return. This value is limited to the amount taken in the original payment minus any completed or pending refunds.
 * @member {module:model/Money} amount_money
 */
exports.prototype['amount_money'] = undefined;
/**
 * A description of the reason for the refund. Note: maximum 192 characters
 * @member {String} reason
 */
exports.prototype['reason'] = undefined;
/**
 * The unique Id of the device intended for this `TerminalRefund`. The Id can be retrieved from /v2/devices api.
 * @member {String} device_id
 */
exports.prototype['device_id'] = undefined;
/**
 * The duration as an RFC 3339 duration, after which the refund will be automatically canceled. TerminalRefunds that are `PENDING` will be automatically `CANCELED` and have a cancellation reason of `TIMED_OUT`  Default: 5 minutes from creation  Maximum: 5 minutes
 * @member {String} deadline_duration
 */
exports.prototype['deadline_duration'] = undefined;
/**
 * The status of the `TerminalRefund`. Options: `PENDING`, `IN_PROGRESS`, `CANCELED`, `COMPLETED`
 * @member {String} status
 */
exports.prototype['status'] = undefined;
/**
 * Present if the status is `CANCELED`. See [ActionCancelReason](#type-actioncancelreason) for possible values
 * @member {String} cancel_reason
 */
exports.prototype['cancel_reason'] = undefined;
/**
 * The time when the `TerminalRefund` was created as an RFC 3339 timestamp.
 * @member {String} created_at
 */
exports.prototype['created_at'] = undefined;
/**
 * The time when the `TerminalRefund` was last updated as an RFC 3339 timestamp.
 * @member {String} updated_at
 */
exports.prototype['updated_at'] = undefined;



module.exports = exports;



