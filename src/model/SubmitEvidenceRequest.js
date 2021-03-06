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
 * The SubmitEvidenceRequest model module.
 * Note: This model is in beta.
 * @module model/SubmitEvidenceRequest
 */

/**
 * Constructs a new <code>SubmitEvidenceRequest</code>.
 * Defines the parameters for a &#x60;SubmitEvidence&#x60; request.
 * @alias module:model/SubmitEvidenceRequest
 * @class
 */
var exports = function() {
  var _this = this;

};

/**
 * Constructs a <code>SubmitEvidenceRequest</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/SubmitEvidenceRequest} obj Optional instance to populate.
 * @return {module:model/SubmitEvidenceRequest} The populated <code>SubmitEvidenceRequest</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

    }
  return obj;
}




module.exports = exports;



