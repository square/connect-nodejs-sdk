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
var Device = require('./Device');
var V1CashDrawerEvent = require('./V1CashDrawerEvent');
var V1Money = require('./V1Money');




/**
 * @deprecated
 * The V1CashDrawerShift model module.
 * @module model/V1CashDrawerShift
 */

/**
 * Constructs a new <code>V1CashDrawerShift</code>.
 * Contains details for a single cash drawer shift.
 * @alias module:model/V1CashDrawerShift
 * @class
 */
var exports = function() {
  var _this = this;




















};

/**
 * Constructs a <code>V1CashDrawerShift</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/V1CashDrawerShift} obj Optional instance to populate.
 * @return {module:model/V1CashDrawerShift} The populated <code>V1CashDrawerShift</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
      obj['id'] = ApiClient.convertToType(data['id'], 'String');
    }
      if (data.hasOwnProperty('event_type')) {
      obj['event_type'] = ApiClient.convertToType(data['event_type'], 'String');
    }
      if (data.hasOwnProperty('opened_at')) {
      obj['opened_at'] = ApiClient.convertToType(data['opened_at'], 'String');
    }
      if (data.hasOwnProperty('ended_at')) {
      obj['ended_at'] = ApiClient.convertToType(data['ended_at'], 'String');
    }
      if (data.hasOwnProperty('closed_at')) {
      obj['closed_at'] = ApiClient.convertToType(data['closed_at'], 'String');
    }
      if (data.hasOwnProperty('employee_ids')) {
      obj['employee_ids'] = ApiClient.convertToType(data['employee_ids'], ['String']);
    }
      if (data.hasOwnProperty('opening_employee_id')) {
      obj['opening_employee_id'] = ApiClient.convertToType(data['opening_employee_id'], 'String');
    }
      if (data.hasOwnProperty('ending_employee_id')) {
      obj['ending_employee_id'] = ApiClient.convertToType(data['ending_employee_id'], 'String');
    }
      if (data.hasOwnProperty('closing_employee_id')) {
      obj['closing_employee_id'] = ApiClient.convertToType(data['closing_employee_id'], 'String');
    }
      if (data.hasOwnProperty('description')) {
      obj['description'] = ApiClient.convertToType(data['description'], 'String');
    }
      if (data.hasOwnProperty('starting_cash_money')) {
      obj['starting_cash_money'] = V1Money.constructFromObject(data['starting_cash_money']);
    }
      if (data.hasOwnProperty('cash_payment_money')) {
      obj['cash_payment_money'] = V1Money.constructFromObject(data['cash_payment_money']);
    }
      if (data.hasOwnProperty('cash_refunds_money')) {
      obj['cash_refunds_money'] = V1Money.constructFromObject(data['cash_refunds_money']);
    }
      if (data.hasOwnProperty('cash_paid_in_money')) {
      obj['cash_paid_in_money'] = V1Money.constructFromObject(data['cash_paid_in_money']);
    }
      if (data.hasOwnProperty('cash_paid_out_money')) {
      obj['cash_paid_out_money'] = V1Money.constructFromObject(data['cash_paid_out_money']);
    }
      if (data.hasOwnProperty('expected_cash_money')) {
      obj['expected_cash_money'] = V1Money.constructFromObject(data['expected_cash_money']);
    }
      if (data.hasOwnProperty('closed_cash_money')) {
      obj['closed_cash_money'] = V1Money.constructFromObject(data['closed_cash_money']);
    }
      if (data.hasOwnProperty('device')) {
      obj['device'] = Device.constructFromObject(data['device']);
    }
      if (data.hasOwnProperty('events')) {
      obj['events'] = ApiClient.convertToType(data['events'], [V1CashDrawerEvent]);
    }
    }
  return obj;
}

/**
 * The shift's unique ID.
 * @member {String} id
 */
exports.prototype['id'] = undefined;
/**
 * The shift's current state. See [V1CashDrawerShiftEventType](#type-v1cashdrawershifteventtype) for possible values
 * @member {String} event_type
 */
exports.prototype['event_type'] = undefined;
/**
 * The time when the shift began, in ISO 8601 format.
 * @member {String} opened_at
 */
exports.prototype['opened_at'] = undefined;
/**
 * The time when the shift ended, in ISO 8601 format.
 * @member {String} ended_at
 */
exports.prototype['ended_at'] = undefined;
/**
 * The time when the shift was closed, in ISO 8601 format.
 * @member {String} closed_at
 */
exports.prototype['closed_at'] = undefined;
/**
 * The IDs of all employees that were logged into Square Register at some point during the cash drawer shift.
 * @member {Array.<String>} employee_ids
 */
exports.prototype['employee_ids'] = undefined;
/**
 * The ID of the employee that started the cash drawer shift.
 * @member {String} opening_employee_id
 */
exports.prototype['opening_employee_id'] = undefined;
/**
 * The ID of the employee that ended the cash drawer shift.
 * @member {String} ending_employee_id
 */
exports.prototype['ending_employee_id'] = undefined;
/**
 * The ID of the employee that closed the cash drawer shift by auditing the cash drawer's contents.
 * @member {String} closing_employee_id
 */
exports.prototype['closing_employee_id'] = undefined;
/**
 * A description of the cash drawer shift.
 * @member {String} description
 */
exports.prototype['description'] = undefined;
/**
 * The amount of money in the cash drawer at the start of the shift.
 * @member {module:model/V1Money} starting_cash_money
 */
exports.prototype['starting_cash_money'] = undefined;
/**
 * The amount of money added to the cash drawer from cash payments.
 * @member {module:model/V1Money} cash_payment_money
 */
exports.prototype['cash_payment_money'] = undefined;
/**
 * The amount of money removed from the cash drawer from cash refunds. This value is always negative or zero.
 * @member {module:model/V1Money} cash_refunds_money
 */
exports.prototype['cash_refunds_money'] = undefined;
/**
 * The amount of money added to the cash drawer for reasons other than cash payments.
 * @member {module:model/V1Money} cash_paid_in_money
 */
exports.prototype['cash_paid_in_money'] = undefined;
/**
 * The amount of money removed from the cash drawer for reasons other than cash refunds.
 * @member {module:model/V1Money} cash_paid_out_money
 */
exports.prototype['cash_paid_out_money'] = undefined;
/**
 * The amount of money that should be in the cash drawer at the end of the shift, based on the shift's other money amounts.
 * @member {module:model/V1Money} expected_cash_money
 */
exports.prototype['expected_cash_money'] = undefined;
/**
 * The amount of money found in the cash drawer at the end of the shift by an auditing employee.
 * @member {module:model/V1Money} closed_cash_money
 */
exports.prototype['closed_cash_money'] = undefined;
/**
 * The device running Square Register that was connected to the cash drawer.
 * @member {module:model/Device} device
 */
exports.prototype['device'] = undefined;
/**
 * All of the events (payments, refunds, and so on) that involved the cash drawer during the shift.
 * @member {Array.<module:model/V1CashDrawerEvent>} events
 */
exports.prototype['events'] = undefined;



module.exports = exports;



