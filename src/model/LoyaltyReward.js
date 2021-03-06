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
 * The LoyaltyReward model module.
 * Note: This model is in beta.
 * @module model/LoyaltyReward
 */

/**
 * Constructs a new <code>LoyaltyReward</code>.
 * 
 * @alias module:model/LoyaltyReward
 * @class
 * @param loyaltyAccountId {String} The Square-assigned ID of the `loyalty account` to which the reward belongs.
 * @param rewardTierId {String} The Square-assigned ID of the `reward tier` used to create the reward.
 */
var exports = function(loyaltyAccountId, rewardTierId) {
  var _this = this;



  _this['loyalty_account_id'] = loyaltyAccountId;
  _this['reward_tier_id'] = rewardTierId;





};

/**
 * Constructs a <code>LoyaltyReward</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/LoyaltyReward} obj Optional instance to populate.
 * @return {module:model/LoyaltyReward} The populated <code>LoyaltyReward</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
      obj['id'] = ApiClient.convertToType(data['id'], 'String');
    }
      if (data.hasOwnProperty('status')) {
      obj['status'] = ApiClient.convertToType(data['status'], 'String');
    }
      if (data.hasOwnProperty('loyalty_account_id')) {
      obj['loyalty_account_id'] = ApiClient.convertToType(data['loyalty_account_id'], 'String');
    }
      if (data.hasOwnProperty('reward_tier_id')) {
      obj['reward_tier_id'] = ApiClient.convertToType(data['reward_tier_id'], 'String');
    }
      if (data.hasOwnProperty('points')) {
      obj['points'] = ApiClient.convertToType(data['points'], 'Number');
    }
      if (data.hasOwnProperty('order_id')) {
      obj['order_id'] = ApiClient.convertToType(data['order_id'], 'String');
    }
      if (data.hasOwnProperty('created_at')) {
      obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
    }
      if (data.hasOwnProperty('updated_at')) {
      obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
    }
      if (data.hasOwnProperty('redeemed_at')) {
      obj['redeemed_at'] = ApiClient.convertToType(data['redeemed_at'], 'String');
    }
    }
  return obj;
}

/**
 * The Square-assigned ID of the loyalty reward.
 * @member {String} id
 */
exports.prototype['id'] = undefined;
/**
 * The status of a loyalty reward. See [LoyaltyRewardStatus](#type-loyaltyrewardstatus) for possible values
 * @member {String} status
 */
exports.prototype['status'] = undefined;
/**
 * The Square-assigned ID of the `loyalty account` to which the reward belongs.
 * @member {String} loyalty_account_id
 */
exports.prototype['loyalty_account_id'] = undefined;
/**
 * The Square-assigned ID of the `reward tier` used to create the reward.
 * @member {String} reward_tier_id
 */
exports.prototype['reward_tier_id'] = undefined;
/**
 * The number of loyalty points used for the reward.
 * @member {Number} points
 */
exports.prototype['points'] = undefined;
/**
 * The Square-assigned ID of the `order` to which the reward is attached.
 * @member {String} order_id
 */
exports.prototype['order_id'] = undefined;
/**
 * The timestamp when the reward was created, in RFC 3339 format.
 * @member {String} created_at
 */
exports.prototype['created_at'] = undefined;
/**
 * The timestamp when the reward was last updated, in RFC 3339 format.
 * @member {String} updated_at
 */
exports.prototype['updated_at'] = undefined;
/**
 * The timestamp when the reward was redeemed, in RFC 3339 format.
 * @member {String} redeemed_at
 */
exports.prototype['redeemed_at'] = undefined;



module.exports = exports;



