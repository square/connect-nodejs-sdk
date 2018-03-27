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
var Transaction = require('./Transaction');




/**
 * The RetrieveTransactionResponse model module.
 * @module model/RetrieveTransactionResponse
 * @version 2.6.0
 */

/**
 * Constructs a new <code>RetrieveTransactionResponse</code>.
 * Defines the fields that are included in the response body of a request to the [RetrieveTransaction](#endpont-retrievetransaction) endpoint.  One of &#x60;errors&#x60; or &#x60;transaction&#x60; is present in a given response (never both).
 * @alias module:model/RetrieveTransactionResponse
 * @class
 */
var exports = function() {
  var _this = this;



};

/**
 * Constructs a <code>RetrieveTransactionResponse</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/RetrieveTransactionResponse} obj Optional instance to populate.
 * @return {module:model/RetrieveTransactionResponse} The populated <code>RetrieveTransactionResponse</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('errors')) {
      obj['errors'] = ApiClient.convertToType(data['errors'], [Error]);
    }
      if (data.hasOwnProperty('transaction')) {
      obj['transaction'] = Transaction.constructFromObject(data['transaction']);
    }
    }
  return obj;
}

/**
 * Any errors that occurred during the request.
 * @member {Array.<module:model/Error>} errors
 */
exports.prototype['errors'] = undefined;
/**
 * The requested transaction.
 * @member {module:model/Transaction} transaction
 */
exports.prototype['transaction'] = undefined;



module.exports = exports;



