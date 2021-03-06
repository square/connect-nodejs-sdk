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
var Subscription = require('./Subscription');




/**
 * The CreateSubscriptionResponse model module.
 * Note: This model is in beta.
 * @module model/CreateSubscriptionResponse
 */

/**
 * Constructs a new <code>CreateSubscriptionResponse</code>.
 * Defines the fields that are included in the response from the [CreateSubscription](#endpoint-subscriptions-createsubscription) endpoint.
 * @alias module:model/CreateSubscriptionResponse
 * @class
 */
var exports = function() {
  var _this = this;



};

/**
 * Constructs a <code>CreateSubscriptionResponse</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/CreateSubscriptionResponse} obj Optional instance to populate.
 * @return {module:model/CreateSubscriptionResponse} The populated <code>CreateSubscriptionResponse</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('errors')) {
      obj['errors'] = ApiClient.convertToType(data['errors'], [Error]);
    }
      if (data.hasOwnProperty('subscription')) {
      obj['subscription'] = Subscription.constructFromObject(data['subscription']);
    }
    }
  return obj;
}

/**
 * Information about errors encountered during the request.
 * @member {Array.<module:model/Error>} errors
 */
exports.prototype['errors'] = undefined;
/**
 * The newly created subscription.   For more information, see  [Subscription object](https://developer.squareup.com/docs/docs/subscriptions-api/overview#subscription-object).
 * @member {module:model/Subscription} subscription
 */
exports.prototype['subscription'] = undefined;



module.exports = exports;



