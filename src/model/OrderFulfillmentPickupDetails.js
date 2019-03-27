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
var OrderFulfillmentRecipient = require('./OrderFulfillmentRecipient');




/**
 * The OrderFulfillmentPickupDetails model module.
 * @module model/OrderFulfillmentPickupDetails
 */

/**
 * Constructs a new <code>OrderFulfillmentPickupDetails</code>.
 * Contains details necessary to fulfill a pickup order.
 * @alias module:model/OrderFulfillmentPickupDetails
 * @class
 */
var exports = function() {
  var _this = this;

















};

/**
 * Constructs a <code>OrderFulfillmentPickupDetails</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/OrderFulfillmentPickupDetails} obj Optional instance to populate.
 * @return {module:model/OrderFulfillmentPickupDetails} The populated <code>OrderFulfillmentPickupDetails</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('recipient')) {
      obj['recipient'] = OrderFulfillmentRecipient.constructFromObject(data['recipient']);
    }
      if (data.hasOwnProperty('expires_at')) {
      obj['expires_at'] = ApiClient.convertToType(data['expires_at'], 'String');
    }
      if (data.hasOwnProperty('auto_complete_duration')) {
      obj['auto_complete_duration'] = ApiClient.convertToType(data['auto_complete_duration'], 'String');
    }
      if (data.hasOwnProperty('schedule_type')) {
      obj['schedule_type'] = ApiClient.convertToType(data['schedule_type'], 'String');
    }
      if (data.hasOwnProperty('pickup_at')) {
      obj['pickup_at'] = ApiClient.convertToType(data['pickup_at'], 'String');
    }
      if (data.hasOwnProperty('pickup_window_duration')) {
      obj['pickup_window_duration'] = ApiClient.convertToType(data['pickup_window_duration'], 'String');
    }
      if (data.hasOwnProperty('prep_time_duration')) {
      obj['prep_time_duration'] = ApiClient.convertToType(data['prep_time_duration'], 'String');
    }
      if (data.hasOwnProperty('note')) {
      obj['note'] = ApiClient.convertToType(data['note'], 'String');
    }
      if (data.hasOwnProperty('placed_at')) {
      obj['placed_at'] = ApiClient.convertToType(data['placed_at'], 'String');
    }
      if (data.hasOwnProperty('accepted_at')) {
      obj['accepted_at'] = ApiClient.convertToType(data['accepted_at'], 'String');
    }
      if (data.hasOwnProperty('rejected_at')) {
      obj['rejected_at'] = ApiClient.convertToType(data['rejected_at'], 'String');
    }
      if (data.hasOwnProperty('ready_at')) {
      obj['ready_at'] = ApiClient.convertToType(data['ready_at'], 'String');
    }
      if (data.hasOwnProperty('expired_at')) {
      obj['expired_at'] = ApiClient.convertToType(data['expired_at'], 'String');
    }
      if (data.hasOwnProperty('picked_up_at')) {
      obj['picked_up_at'] = ApiClient.convertToType(data['picked_up_at'], 'String');
    }
      if (data.hasOwnProperty('canceled_at')) {
      obj['canceled_at'] = ApiClient.convertToType(data['canceled_at'], 'String');
    }
      if (data.hasOwnProperty('cancel_reason')) {
      obj['cancel_reason'] = ApiClient.convertToType(data['cancel_reason'], 'String');
    }
    }
  return obj;
}

/**
 * The recipient of this pickup fulfillment.
 * @member {module:model/OrderFulfillmentRecipient} recipient
 */
exports.prototype['recipient'] = undefined;
/**
 * The expiry [timestamp](#workingwithdates) in RFC 3339 format, e.g., \"2016-09-04T23:59:33.123Z\". This timestamp indicates when the pickup fulfillment will expire if it is not accepted by the merchant. Expiration time can only be set up to 7 days in the future. If not set, this pickup fulfillment will be automatically accepted when placed.
 * @member {String} expires_at
 */
exports.prototype['expires_at'] = undefined;
/**
 * The auto completion duration in RFC3339 duration format, e.g., \"P1W3D\". If set, an open and accepted pickup fulfillment will automatically move to the `COMPLETED` state after this period of time. If not set, this pickup fulfillment will remain accepted until it is canceled or completed.
 * @member {String} auto_complete_duration
 */
exports.prototype['auto_complete_duration'] = undefined;
/**
 * The schedule type of the pickup fulfillment. Defaults to `SCHEDULED`. See [OrderFulfillmentPickupDetailsScheduleType](#type-orderfulfillmentpickupdetailsscheduletype) for possible values
 * @member {module:model/OrderFulfillmentPickupDetails.ScheduleTypeEnum} schedule_type
 */
exports.prototype['schedule_type'] = undefined;
/**
 * The pickup [timestamp](#workingwithdates) in RFC3339 timestamp format, e.g., \"2016-09-04T23:59:33.123Z\". For fulfillments with the schedule type `ASAP`, this is automatically set to the current time plus the expected duration to prepare the fulfillment. This represents the start of the pickup window.
 * @member {String} pickup_at
 */
exports.prototype['pickup_at'] = undefined;
/**
 * The pickup window duration in RFC3339 duration format, e.g., \"P1W3D\". This duration represents the window of time for which the order should be picked up after the `pickup_at` time. Can be used as an informational guideline for merchants.
 * @member {String} pickup_window_duration
 */
exports.prototype['pickup_window_duration'] = undefined;
/**
 * The preparation time duration in RFC3339 duration format, e.g., \"P1W3D\". This duration indicates how long it takes the merchant to prepare this fulfillment.
 * @member {String} prep_time_duration
 */
exports.prototype['prep_time_duration'] = undefined;
/**
 * A general note about the pickup fulfillment.  Notes are useful for providing additional instructions and are displayed in Square apps.
 * @member {String} note
 */
exports.prototype['note'] = undefined;
/**
 * The [timestamp](#workingwithdates) in RFC3339 timestamp format, e.g., \"2016-09-04T23:59:33.123Z\", indicating when the fulfillment was placed.
 * @member {String} placed_at
 */
exports.prototype['placed_at'] = undefined;
/**
 * The [timestamp](#workingwithdates) in RFC3339 timestamp format, e.g., \"2016-09-04T23:59:33.123Z\", indicating when the fulfillment was accepted by the merchant.
 * @member {String} accepted_at
 */
exports.prototype['accepted_at'] = undefined;
/**
 * The [timestamp](#workingwithdates) in RFC3339 timestamp format, e.g., \"2016-09-04T23:59:33.123Z\", indicating when the fulfillment was rejected.
 * @member {String} rejected_at
 */
exports.prototype['rejected_at'] = undefined;
/**
 * The [timestamp](#workingwithdates) in RFC3339 timestamp format, e.g., \"2016-09-04T23:59:33.123Z\", indicating when the merchant set the fulfillment as ready for pickup.
 * @member {String} ready_at
 */
exports.prototype['ready_at'] = undefined;
/**
 * The [timestamp](#workingwithdates) in RFC3339 timestamp format, e.g., \"2016-09-04T23:59:33.123Z\", indicating when the fulfillment expired.
 * @member {String} expired_at
 */
exports.prototype['expired_at'] = undefined;
/**
 * The [timestamp](#workingwithdates) in RFC3339 timestamp format, e.g., \"2016-09-04T23:59:33.123Z\", indicating when the fulfillment was picked up by the recipient.
 * @member {String} picked_up_at
 */
exports.prototype['picked_up_at'] = undefined;
/**
 * The [timestamp](#workingwithdates) in RFC3339 timestamp format, e.g., \"2016-09-04T23:59:33.123Z\", indicating when the fulfillment was canceled by the merchant or buyer.
 * @member {String} canceled_at
 */
exports.prototype['canceled_at'] = undefined;
/**
 * A description of why the pickup was canceled. Max length is 100 characters.
 * @member {String} cancel_reason
 */
exports.prototype['cancel_reason'] = undefined;


  /**
   * Allowed values for the <code>schedule_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ScheduleTypeEnum = {
    /**
     * value: "SCHEDULED"
     * @const
     */
    "SCHEDULED": "SCHEDULED",
    /**
     * value: "ASAP"
     * @const
     */
    "ASAP": "ASAP"  };


module.exports = exports;



