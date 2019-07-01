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
var Money = require('./Money');
var OrderReturnTax = require('./OrderReturnTax');




/**
 * The OrderReturnServiceCharge model module.
 * @module model/OrderReturnServiceCharge
 */

/**
 * Constructs a new <code>OrderReturnServiceCharge</code>.
 * The service charge applied to the original order.
 * @alias module:model/OrderReturnServiceCharge
 * @class
 */
var exports = function() {
  var _this = this;













};

/**
 * Constructs a <code>OrderReturnServiceCharge</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/OrderReturnServiceCharge} obj Optional instance to populate.
 * @return {module:model/OrderReturnServiceCharge} The populated <code>OrderReturnServiceCharge</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('uid')) {
      obj['uid'] = ApiClient.convertToType(data['uid'], 'String');
    }
      if (data.hasOwnProperty('source_service_charge_uid')) {
      obj['source_service_charge_uid'] = ApiClient.convertToType(data['source_service_charge_uid'], 'String');
    }
      if (data.hasOwnProperty('name')) {
      obj['name'] = ApiClient.convertToType(data['name'], 'String');
    }
      if (data.hasOwnProperty('catalog_object_id')) {
      obj['catalog_object_id'] = ApiClient.convertToType(data['catalog_object_id'], 'String');
    }
      if (data.hasOwnProperty('percentage')) {
      obj['percentage'] = ApiClient.convertToType(data['percentage'], 'String');
    }
      if (data.hasOwnProperty('amount_money')) {
      obj['amount_money'] = Money.constructFromObject(data['amount_money']);
    }
      if (data.hasOwnProperty('applied_money')) {
      obj['applied_money'] = Money.constructFromObject(data['applied_money']);
    }
      if (data.hasOwnProperty('total_money')) {
      obj['total_money'] = Money.constructFromObject(data['total_money']);
    }
      if (data.hasOwnProperty('total_tax_money')) {
      obj['total_tax_money'] = Money.constructFromObject(data['total_tax_money']);
    }
      if (data.hasOwnProperty('calculation_phase')) {
      obj['calculation_phase'] = ApiClient.convertToType(data['calculation_phase'], 'String');
    }
      if (data.hasOwnProperty('taxable')) {
      obj['taxable'] = ApiClient.convertToType(data['taxable'], 'Boolean');
    }
      if (data.hasOwnProperty('return_taxes')) {
      obj['return_taxes'] = ApiClient.convertToType(data['return_taxes'], [OrderReturnTax]);
    }
    }
  return obj;
}

/**
 * Unique ID that identifies the return service charge only within this order.  This field is read-only.
 * @member {String} uid
 */
exports.prototype['uid'] = undefined;
/**
 * `uid` of the Service Charge from the Order which contains the original charge of this service charge, null for unlinked returns.
 * @member {String} source_service_charge_uid
 */
exports.prototype['source_service_charge_uid'] = undefined;
/**
 * The name of the service charge.
 * @member {String} name
 */
exports.prototype['name'] = undefined;
/**
 * The ID referencing the service charge [CatalogObject](#type-catalogobject)
 * @member {String} catalog_object_id
 */
exports.prototype['catalog_object_id'] = undefined;
/**
 * The percentage of the service charge, as a string representation of a decimal number.  A value of `7.25` corresponds to a percentage of 7.25%.  Exactly one of percentage or amount_money should be set.
 * @member {String} percentage
 */
exports.prototype['percentage'] = undefined;
/**
 * The amount of a non-percentage based service charge.  Exactly one of percentage or amount_money should be set.
 * @member {module:model/Money} amount_money
 */
exports.prototype['amount_money'] = undefined;
/**
 * The amount of money applied to the order by the service charge, as calculated by the server.  For fixed-amount service charges, `applied_money` is equal to `amount_money`.  For percentage-based service charges, `applied_money` is the money calculated using the percentage. The `applied_money` field will include any inclusive tax amounts as well.  This field is read-only.
 * @member {module:model/Money} applied_money
 */
exports.prototype['applied_money'] = undefined;
/**
 * The total amount of money to collect for the service charge.  Note that `total_money` does not equal `applied_money` plus `total_tax_money` if an inclusive tax is applied to the service charge since the inclusive tax amount will be included in both `applied_money` and `total_tax_money`.  This field is read-only.
 * @member {module:model/Money} total_money
 */
exports.prototype['total_money'] = undefined;
/**
 * The total amount of tax money to collect for the service charge.  This field is read-only.
 * @member {module:model/Money} total_tax_money
 */
exports.prototype['total_tax_money'] = undefined;
/**
 * The calculation phase after which to apply the service charge.  This field is read-only. See [OrderServiceChargeCalculationPhase](#type-orderservicechargecalculationphase) for possible values
 * @member {String} calculation_phase
 */
exports.prototype['calculation_phase'] = undefined;
/**
 * Indicates whether the surcharge can be taxed. Service charges calculated in the `TOTAL_PHASE` cannot be marked as taxable.
 * @member {Boolean} taxable
 */
exports.prototype['taxable'] = undefined;
/**
 * The taxes which apply to the service charge. Return-level taxes apply by default to service charge calculated in the `SUBTOTAL_PHASE` if the service charge is marked as taxable.
 * @member {Array.<module:model/OrderReturnTax>} return_taxes
 */
exports.prototype['return_taxes'] = undefined;



module.exports = exports;



