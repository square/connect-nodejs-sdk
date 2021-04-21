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
var Booking = require('./Booking');




/**
 * The CreateBookingRequest model module.
 * Note: This model is in beta.
 * @module model/CreateBookingRequest
 */

/**
 * Constructs a new <code>CreateBookingRequest</code>.
 * 
 * @alias module:model/CreateBookingRequest
 * @class
 * @param booking {module:model/Booking} The details of the booking to be created.
 */
var exports = function(booking) {
  var _this = this;


  _this['booking'] = booking;
};

/**
 * Constructs a <code>CreateBookingRequest</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/CreateBookingRequest} obj Optional instance to populate.
 * @return {module:model/CreateBookingRequest} The populated <code>CreateBookingRequest</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('idempotency_key')) {
      obj['idempotency_key'] = ApiClient.convertToType(data['idempotency_key'], 'String');
    }
      if (data.hasOwnProperty('booking')) {
      obj['booking'] = Booking.constructFromObject(data['booking']);
    }
    }
  return obj;
}

/**
 * A unique key to make this request an idempotent operation.
 * @member {String} idempotency_key
 */
exports.prototype['idempotency_key'] = undefined;
/**
 * The details of the booking to be created.
 * @member {module:model/Booking} booking
 */
exports.prototype['booking'] = undefined;



module.exports = exports;


