const SquareConnect = require('../../src/index');
const {
  accounts,
  expect,
  handleUnexpectedError
} = require('../support/setup');

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

describe('DevicesApi', function() {
  beforeEach(function() {
    const defaultClient = SquareConnect.ApiClient.instance;
    const oauth2 = defaultClient.authentications['oauth2'];
    // Some APIs do not work with sandbox. Replace `sandbox` with `production` for those test suites.
    oauth2.accessToken = accounts.sandbox.access_token;
    this.api  = new SquareConnect.DevicesApi();
  });

  afterEach(function(){
  });

  describe('DevicesApi', function() {
    describe('createDeviceCode', function() {
      it('should call createDeviceCode successfully', function(done) {
        //uncomment below and update the code to test createDeviceCode
        //instance.createDeviceCode(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDeviceCode', function() {
      it('should call getDeviceCode successfully', function(done) {
        //uncomment below and update the code to test getDeviceCode
        //instance.getDeviceCode(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listDeviceCodes', function() {
      it('should call listDeviceCodes successfully', function(done) {
        //uncomment below and update the code to test listDeviceCodes
        //instance.listDeviceCodes(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });
});
