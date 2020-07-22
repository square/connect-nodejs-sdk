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
var Invoice = require('./Invoice');




/**
 * The CreateInvoiceResponse model module.
 * Note: This model is in beta.
 * @module model/CreateInvoiceResponse
 */

/**
 * Constructs a new <code>CreateInvoiceResponse</code>.
 * The response returned by the &#x60;CreateInvoice&#x60; request.
 * @alias module:model/CreateInvoiceResponse
 * @class
 */
var exports = function() {
  var _this = this;



};

/**
 * Constructs a <code>CreateInvoiceResponse</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/CreateInvoiceResponse} obj Optional instance to populate.
 * @return {module:model/CreateInvoiceResponse} The populated <code>CreateInvoiceResponse</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('invoice')) {
      obj['invoice'] = Invoice.constructFromObject(data['invoice']);
    }
      if (data.hasOwnProperty('errors')) {
      obj['errors'] = ApiClient.convertToType(data['errors'], [Error]);
    }
    }
  return obj;
}

/**
 * The newly created invoice.
 * @member {module:model/Invoice} invoice
 */
exports.prototype['invoice'] = undefined;
/**
 * Information about errors encountered during the request.
 * @member {Array.<module:model/Error>} errors
 */
exports.prototype['errors'] = undefined;



module.exports = exports;



