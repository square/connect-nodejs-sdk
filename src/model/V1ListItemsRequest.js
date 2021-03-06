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
 * @deprecated
 * The V1ListItemsRequest model module.
 * @module model/V1ListItemsRequest
 */

/**
 * Constructs a new <code>V1ListItemsRequest</code>.
 * 
 * @alias module:model/V1ListItemsRequest
 * @class
 */
var exports = function() {
  var _this = this;


};

/**
 * Constructs a <code>V1ListItemsRequest</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/V1ListItemsRequest} obj Optional instance to populate.
 * @return {module:model/V1ListItemsRequest} The populated <code>V1ListItemsRequest</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('batch_token')) {
      obj['batch_token'] = ApiClient.convertToType(data['batch_token'], 'String');
    }
    }
  return obj;
}

/**
 * A pagination cursor to retrieve the next set of results for your original query to the endpoint.
 * @member {String} batch_token
 */
exports.prototype['batch_token'] = undefined;



module.exports = exports;



