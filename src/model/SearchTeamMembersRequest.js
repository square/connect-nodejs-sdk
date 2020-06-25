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
var SearchTeamMembersQuery = require('./SearchTeamMembersQuery');




/**
 * The SearchTeamMembersRequest model module.
 * @module model/SearchTeamMembersRequest
 */

/**
 * Constructs a new <code>SearchTeamMembersRequest</code>.
 * Represents a search request for a filtered list of &#x60;TeamMember&#x60; objects.
 * @alias module:model/SearchTeamMembersRequest
 * @class
 */
var exports = function() {
  var _this = this;




};

/**
 * Constructs a <code>SearchTeamMembersRequest</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/SearchTeamMembersRequest} obj Optional instance to populate.
 * @return {module:model/SearchTeamMembersRequest} The populated <code>SearchTeamMembersRequest</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('query')) {
      obj['query'] = SearchTeamMembersQuery.constructFromObject(data['query']);
    }
      if (data.hasOwnProperty('limit')) {
      obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
    }
      if (data.hasOwnProperty('cursor')) {
      obj['cursor'] = ApiClient.convertToType(data['cursor'], 'String');
    }
    }
  return obj;
}

/**
 * The query parameters.
 * @member {module:model/SearchTeamMembersQuery} query
 */
exports.prototype['query'] = undefined;
/**
 * The maximum number of `TeamMember` objects in a page (25 by default).
 * @member {Number} limit
 */
exports.prototype['limit'] = undefined;
/**
 * The opaque cursor for fetching the next page. Read about [pagination](https://developer.squareup.com/docs/docs/working-with-apis/pagination) with Square APIs for more information.
 * @member {String} cursor
 */
exports.prototype['cursor'] = undefined;



module.exports = exports;



