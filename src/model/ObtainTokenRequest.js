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
 * The ObtainTokenRequest model module.
 * @module model/ObtainTokenRequest
 */

/**
 * Constructs a new <code>ObtainTokenRequest</code>.
 * 
 * @alias module:model/ObtainTokenRequest
 * @class
 * @param clientId {String} The Square-issued ID of your application, available from the [application dashboard](https://connect.squareup.com/apps).
 * @param clientSecret {String} The Square-issued application secret for your application, available from the [application dashboard](https://connect.squareup.com/apps).
 * @param grantType {String} Specifies the method to request an OAuth access token. Valid values are: `authorization_code`, `refresh_token`, and `migration_token`
 */
var exports = function(clientId, clientSecret, grantType) {
  var _this = this;

  _this['client_id'] = clientId;
  _this['client_secret'] = clientSecret;


  _this['grant_type'] = grantType;



};

/**
 * Constructs a <code>ObtainTokenRequest</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/ObtainTokenRequest} obj Optional instance to populate.
 * @return {module:model/ObtainTokenRequest} The populated <code>ObtainTokenRequest</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('client_id')) {
      obj['client_id'] = ApiClient.convertToType(data['client_id'], 'String');
    }
      if (data.hasOwnProperty('client_secret')) {
      obj['client_secret'] = ApiClient.convertToType(data['client_secret'], 'String');
    }
      if (data.hasOwnProperty('code')) {
      obj['code'] = ApiClient.convertToType(data['code'], 'String');
    }
      if (data.hasOwnProperty('redirect_uri')) {
      obj['redirect_uri'] = ApiClient.convertToType(data['redirect_uri'], 'String');
    }
      if (data.hasOwnProperty('grant_type')) {
      obj['grant_type'] = ApiClient.convertToType(data['grant_type'], 'String');
    }
      if (data.hasOwnProperty('refresh_token')) {
      obj['refresh_token'] = ApiClient.convertToType(data['refresh_token'], 'String');
    }
      if (data.hasOwnProperty('migration_token')) {
      obj['migration_token'] = ApiClient.convertToType(data['migration_token'], 'String');
    }
      if (data.hasOwnProperty('scopes')) {
      obj['scopes'] = ApiClient.convertToType(data['scopes'], ['String']);
    }
    }
  return obj;
}

/**
 * The Square-issued ID of your application, available from the [application dashboard](https://connect.squareup.com/apps).
 * @member {String} client_id
 */
exports.prototype['client_id'] = undefined;
/**
 * The Square-issued application secret for your application, available from the [application dashboard](https://connect.squareup.com/apps).
 * @member {String} client_secret
 */
exports.prototype['client_secret'] = undefined;
/**
 * The authorization code to exchange. This is required if `grant_type` is set to `authorization_code`, to indicate that the application wants to exchange an authorization code for an OAuth access token.
 * @member {String} code
 */
exports.prototype['code'] = undefined;
/**
 * The redirect URL assigned in the [application dashboard](https://connect.squareup.com/apps).
 * @member {String} redirect_uri
 */
exports.prototype['redirect_uri'] = undefined;
/**
 * Specifies the method to request an OAuth access token. Valid values are: `authorization_code`, `refresh_token`, and `migration_token`
 * @member {String} grant_type
 */
exports.prototype['grant_type'] = undefined;
/**
 * A valid refresh token for generating a new OAuth access token. A valid refresh token is required if `grant_type` is set to `refresh_token` , to indicate the application wants a replacement for an expired OAuth access token.
 * @member {String} refresh_token
 */
exports.prototype['refresh_token'] = undefined;
/**
 * Legacy OAuth access token obtained using a Connect API version prior to 2019-03-13. This parameter is required if `grant_type` is set to `migration_token` to indicate that the application wants to get a replacement OAuth access token. The response also returns a refresh token. For more information, see [Migrate to Using Refresh Tokens](https://developer.squareup.com/docs/authz/oauth/migration).
 * @member {String} migration_token
 */
exports.prototype['migration_token'] = undefined;
/**
 * __OPTIONAL__  A JSON list of strings that are the permissions the application is requesting. For example: \"`[\"MERCHANT_PROFILE_READ\",\"PAYMENTS_READ\",\"BANK_ACCOUNTS_READ\"]`\" The access token returned in the response will be granted the permissions that comprise the intersection between the given list of permissions, and those that belong to the provided refresh token.
 * @member {Array.<String>} scopes
 */
exports.prototype['scopes'] = undefined;



module.exports = exports;



