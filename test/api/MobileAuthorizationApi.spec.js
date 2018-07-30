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

describe('MobileAuthorizationApi', function() {
  beforeEach(function() {
    const defaultClient = SquareConnect.ApiClient.instance;
    const oauth2 = defaultClient.authentications['oauth2'];
    // Some APIs do not work with sandbox. Replace `sandbox` with `production` for those test suites.
    oauth2.accessToken = accounts.sandbox.access_token;
    this.api  = new SquareConnect.MobileAuthorizationApi();
  });

  afterEach(function(){
  });

  describe('MobileAuthorizationApi', function() {
    describe('createMobileAuthorizationCode', function() {
      it('should call createMobileAuthorizationCode successfully', function(done) {
        //uncomment below and update the code to test createMobileAuthorizationCode
        //instance.createMobileAuthorizationCode(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
});
