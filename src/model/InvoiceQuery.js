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
var InvoiceFilter = require('./InvoiceFilter');
var InvoiceSort = require('./InvoiceSort');




/**
 * The InvoiceQuery model module.
 * Note: This model is in beta.
 * @module model/InvoiceQuery
 */

/**
 * Constructs a new <code>InvoiceQuery</code>.
 * Describes query criteria for searching invoices.
 * @alias module:model/InvoiceQuery
 * @class
 * @param filter {module:model/InvoiceFilter} Query filters to apply in  searching invoices.  For more information, see [Retrieve invoices](https://developer.squareup.com/docs/docs/invoices-api/overview#retrieve-invoices).
 */
var exports = function(filter) {
  var _this = this;

  _this['filter'] = filter;

};

/**
 * Constructs a <code>InvoiceQuery</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/InvoiceQuery} obj Optional instance to populate.
 * @return {module:model/InvoiceQuery} The populated <code>InvoiceQuery</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('filter')) {
      obj['filter'] = InvoiceFilter.constructFromObject(data['filter']);
    }
      if (data.hasOwnProperty('sort')) {
      obj['sort'] = InvoiceSort.constructFromObject(data['sort']);
    }
    }
  return obj;
}

/**
 * Query filters to apply in  searching invoices.  For more information, see [Retrieve invoices](https://developer.squareup.com/docs/docs/invoices-api/overview#retrieve-invoices).
 * @member {module:model/InvoiceFilter} filter
 */
exports.prototype['filter'] = undefined;
/**
 * Describes the sort order for the search result.
 * @member {module:model/InvoiceSort} sort
 */
exports.prototype['sort'] = undefined;



module.exports = exports;



