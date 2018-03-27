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
 * The CatalogQueryExact model module.
 * @module model/CatalogQueryExact
 * @version 2.6.0
 */

/**
 * Constructs a new <code>CatalogQueryExact</code>.
 * 
 * @alias module:model/CatalogQueryExact
 * @class
 * @param attributeName {String} The name of the attribute to be searched.
 * @param attributeValue {String} The desired value of the search attribute.
 */
var exports = function(attributeName, attributeValue) {
  var _this = this;

  _this['attribute_name'] = attributeName;
  _this['attribute_value'] = attributeValue;
};

/**
 * Constructs a <code>CatalogQueryExact</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/CatalogQueryExact} obj Optional instance to populate.
 * @return {module:model/CatalogQueryExact} The populated <code>CatalogQueryExact</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('attribute_name')) {
      obj['attribute_name'] = ApiClient.convertToType(data['attribute_name'], 'String');
    }
      if (data.hasOwnProperty('attribute_value')) {
      obj['attribute_value'] = ApiClient.convertToType(data['attribute_value'], 'String');
    }
    }
  return obj;
}

/**
 * The name of the attribute to be searched.
 * @member {String} attribute_name
 */
exports.prototype['attribute_name'] = undefined;
/**
 * The desired value of the search attribute.
 * @member {String} attribute_value
 */
exports.prototype['attribute_value'] = undefined;



module.exports = exports;



