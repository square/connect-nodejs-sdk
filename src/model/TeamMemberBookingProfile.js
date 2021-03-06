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
 * The TeamMemberBookingProfile model module.
 * Note: This model is in beta.
 * @module model/TeamMemberBookingProfile
 */

/**
 * Constructs a new <code>TeamMemberBookingProfile</code>.
 * The booking profile of a seller&#39;s team member, including the team member&#39;s ID, display name, description and whether the team member can be booked as a service provider.
 * @alias module:model/TeamMemberBookingProfile
 * @class
 */
var exports = function() {
  var _this = this;






};

/**
 * Constructs a <code>TeamMemberBookingProfile</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/TeamMemberBookingProfile} obj Optional instance to populate.
 * @return {module:model/TeamMemberBookingProfile} The populated <code>TeamMemberBookingProfile</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('team_member_id')) {
      obj['team_member_id'] = ApiClient.convertToType(data['team_member_id'], 'String');
    }
      if (data.hasOwnProperty('description')) {
      obj['description'] = ApiClient.convertToType(data['description'], 'String');
    }
      if (data.hasOwnProperty('display_name')) {
      obj['display_name'] = ApiClient.convertToType(data['display_name'], 'String');
    }
      if (data.hasOwnProperty('is_bookable')) {
      obj['is_bookable'] = ApiClient.convertToType(data['is_bookable'], 'Boolean');
    }
      if (data.hasOwnProperty('profile_image_url')) {
      obj['profile_image_url'] = ApiClient.convertToType(data['profile_image_url'], 'String');
    }
    }
  return obj;
}

/**
 * The ID of the `TeamMember` object for the team member associated with the booking profile.
 * @member {String} team_member_id
 */
exports.prototype['team_member_id'] = undefined;
/**
 * The description of the team member.
 * @member {String} description
 */
exports.prototype['description'] = undefined;
/**
 * The display name of the team member.
 * @member {String} display_name
 */
exports.prototype['display_name'] = undefined;
/**
 * Indicates whether the team member can be booked through the Bookings API or the seller's online booking channel or site (`true) or not (`false`).
 * @member {Boolean} is_bookable
 */
exports.prototype['is_bookable'] = undefined;
/**
 * The URL of the team member's image for the bookings profile.
 * @member {String} profile_image_url
 */
exports.prototype['profile_image_url'] = undefined;



module.exports = exports;



