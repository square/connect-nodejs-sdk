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
var SourceApplication = require('./SourceApplication');




/**
 * The InventoryTransfer model module.
 * @module model/InventoryTransfer
 */

/**
 * Constructs a new <code>InventoryTransfer</code>.
 * Represents the transfer of a quantity of product inventory at a particular time from one location to another.
 * @alias module:model/InventoryTransfer
 * @class
 */
var exports = function() {
  var _this = this;













};

/**
 * Constructs a <code>InventoryTransfer</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/InventoryTransfer} obj Optional instance to populate.
 * @return {module:model/InventoryTransfer} The populated <code>InventoryTransfer</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
      obj['id'] = ApiClient.convertToType(data['id'], 'String');
    }
      if (data.hasOwnProperty('reference_id')) {
      obj['reference_id'] = ApiClient.convertToType(data['reference_id'], 'String');
    }
      if (data.hasOwnProperty('state')) {
      obj['state'] = ApiClient.convertToType(data['state'], 'String');
    }
      if (data.hasOwnProperty('from_location_id')) {
      obj['from_location_id'] = ApiClient.convertToType(data['from_location_id'], 'String');
    }
      if (data.hasOwnProperty('to_location_id')) {
      obj['to_location_id'] = ApiClient.convertToType(data['to_location_id'], 'String');
    }
      if (data.hasOwnProperty('catalog_object_id')) {
      obj['catalog_object_id'] = ApiClient.convertToType(data['catalog_object_id'], 'String');
    }
      if (data.hasOwnProperty('catalog_object_type')) {
      obj['catalog_object_type'] = ApiClient.convertToType(data['catalog_object_type'], 'String');
    }
      if (data.hasOwnProperty('quantity')) {
      obj['quantity'] = ApiClient.convertToType(data['quantity'], 'String');
    }
      if (data.hasOwnProperty('occurred_at')) {
      obj['occurred_at'] = ApiClient.convertToType(data['occurred_at'], 'String');
    }
      if (data.hasOwnProperty('created_at')) {
      obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
    }
      if (data.hasOwnProperty('source')) {
      obj['source'] = SourceApplication.constructFromObject(data['source']);
    }
      if (data.hasOwnProperty('employee_id')) {
      obj['employee_id'] = ApiClient.convertToType(data['employee_id'], 'String');
    }
    }
  return obj;
}

/**
 * A unique ID generated by Square for the [InventoryTransfer](#type-inventorytransfer).
 * @member {String} id
 */
exports.prototype['id'] = undefined;
/**
 * An optional ID provided by the application to tie the [InventoryTransfer](#type-inventorytransfer) to an external system.
 * @member {String} reference_id
 */
exports.prototype['reference_id'] = undefined;
/**
 * The [InventoryState](#type-inventorystate) for the quantity of items being transfered. See [InventoryState](#type-inventorystate) for possible values
 * @member {module:model/InventoryTransfer.StateEnum} state
 */
exports.prototype['state'] = undefined;
/**
 * The Square ID of the [Location](#type-location) where the related quantity of items were tracked before the transfer.
 * @member {String} from_location_id
 */
exports.prototype['from_location_id'] = undefined;
/**
 * The Square ID of the [Location](#type-location) where the related quantity of items were tracked after the transfer.
 * @member {String} to_location_id
 */
exports.prototype['to_location_id'] = undefined;
/**
 * The Square generated ID of the [CatalogObject](#type-catalogobject) being tracked.
 * @member {String} catalog_object_id
 */
exports.prototype['catalog_object_id'] = undefined;
/**
 * The [CatalogObjectType](#type-catalogobjecttype) of the [CatalogObject](#type-catalogobject) being tracked.Tracking is only supported for the `ITEM_VARIATION` type.
 * @member {String} catalog_object_type
 */
exports.prototype['catalog_object_type'] = undefined;
/**
 * The number of items affected by the transfer as a decimal string. Fractional quantities are not supported.
 * @member {String} quantity
 */
exports.prototype['quantity'] = undefined;
/**
 * A client-generated timestamp in RFC 3339 format that indicates when the transfer took place. For write actions, the `occurred_at` timestamp cannot be older than 24 hours or in the future relative to the time of the request.
 * @member {String} occurred_at
 */
exports.prototype['occurred_at'] = undefined;
/**
 * A read-only timestamp in RFC 3339 format that indicates when Square received the transfer request.
 * @member {String} created_at
 */
exports.prototype['created_at'] = undefined;
/**
 * Read-only information about the application that initiated the inventory transfer.
 * @member {module:model/SourceApplication} source
 */
exports.prototype['source'] = undefined;
/**
 * The Square ID of the [Employee](#type-employee) responsible for the inventory transfer.
 * @member {String} employee_id
 */
exports.prototype['employee_id'] = undefined;


  /**
   * Allowed values for the <code>state</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StateEnum = {
    /**
     * value: "CUSTOM"
     * @const
     */
    "CUSTOM": "CUSTOM",
    /**
     * value: "IN_STOCK"
     * @const
     */
    "IN_STOCK": "IN_STOCK",
    /**
     * value: "SOLD"
     * @const
     */
    "SOLD": "SOLD",
    /**
     * value: "RETURNED_BY_CUSTOMER"
     * @const
     */
    "RETURNED_BY_CUSTOMER": "RETURNED_BY_CUSTOMER",
    /**
     * value: "RESERVED_FOR_SALE"
     * @const
     */
    "RESERVED_FOR_SALE": "RESERVED_FOR_SALE",
    /**
     * value: "SOLD_ONLINE"
     * @const
     */
    "SOLD_ONLINE": "SOLD_ONLINE",
    /**
     * value: "ORDERED_FROM_VENDOR"
     * @const
     */
    "ORDERED_FROM_VENDOR": "ORDERED_FROM_VENDOR",
    /**
     * value: "RECEIVED_FROM_VENDOR"
     * @const
     */
    "RECEIVED_FROM_VENDOR": "RECEIVED_FROM_VENDOR",
    /**
     * value: "IN_TRANSIT_TO"
     * @const
     */
    "IN_TRANSIT_TO": "IN_TRANSIT_TO",
    /**
     * value: "NONE"
     * @const
     */
    "NONE": "NONE",
    /**
     * value: "WASTE"
     * @const
     */
    "WASTE": "WASTE",
    /**
     * value: "UNLINKED_RETURN"
     * @const
     */
    "UNLINKED_RETURN": "UNLINKED_RETURN"  };


module.exports = exports;



