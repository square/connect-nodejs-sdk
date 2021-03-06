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
var SearchSubscriptionsQuery = require('./SearchSubscriptionsQuery');




/**
 * The SearchSubscriptionsRequest model module.
 * Note: This model is in beta.
 * @module model/SearchSubscriptionsRequest
 */

/**
 * Constructs a new <code>SearchSubscriptionsRequest</code>.
 * Defines parameters in a [SearchSubscriptions](#endpoint-subscriptions-searchsubscriptions) endpoint  request.
 * @alias module:model/SearchSubscriptionsRequest
 * @class
 */
var exports = function() {
  var _this = this;




};

/**
 * Constructs a <code>SearchSubscriptionsRequest</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/SearchSubscriptionsRequest} obj Optional instance to populate.
 * @return {module:model/SearchSubscriptionsRequest} The populated <code>SearchSubscriptionsRequest</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('cursor')) {
      obj['cursor'] = ApiClient.convertToType(data['cursor'], 'String');
    }
      if (data.hasOwnProperty('limit')) {
      obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
    }
      if (data.hasOwnProperty('query')) {
      obj['query'] = SearchSubscriptionsQuery.constructFromObject(data['query']);
    }
    }
  return obj;
}

/**
 * A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for the original query.  For more information, see [Pagination](https://developer.squareup.com/docs/docs/working-with-apis/pagination).
 * @member {String} cursor
 */
exports.prototype['cursor'] = undefined;
/**
 * The upper limit on the number of subscriptions to return  in the response.   Default: `200`
 * @member {Number} limit
 */
exports.prototype['limit'] = undefined;
/**
 * Query subscriptions based on the given conditions and sort order. Calling SearchSubscriptions without an explicit query parameter will return all subscriptions.
 * @member {module:model/SearchSubscriptionsQuery} query
 */
exports.prototype['query'] = undefined;



module.exports = exports;



