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
var CreateLocationRequest = require('../model/CreateLocationRequest');
var CreateLocationResponse = require('../model/CreateLocationResponse');
var ListLocationsResponse = require('../model/ListLocationsResponse');
var RetrieveLocationResponse = require('../model/RetrieveLocationResponse');
var UpdateLocationRequest = require('../model/UpdateLocationRequest');
var UpdateLocationResponse = require('../model/UpdateLocationResponse');

/**
 * Locations service.
 * @module api/LocationsApi
 */

/**
 * Constructs a new LocationsApi.
 * @alias module:api/LocationsApi
 * @class
 * @param {module:ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
module.exports = function(apiClient) {
  this.apiClient = apiClient || ApiClient.instance;



  /**
   * CreateLocation
   * Note: This endpoint is in beta.
   * Creates a location. For more information about locations, see [Locations API Overview](/locations-api).
   * @param {module:model/CreateLocationRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateLocationResponse} and HTTP response
   */
  this.createLocationWithHttpInfo = function(body) {
    var postBody = body;

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling createLocation");
    }


    var pathParams = {
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2020-07-22';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = CreateLocationResponse;

    return this.apiClient.callApi(
      '/v2/locations', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * CreateLocation
   * Creates a location. For more information about locations, see [Locations API Overview](/locations-api).
   * @param {module:model/CreateLocationRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateLocationResponse}
   */
  this.createLocation = function(body) {
    return this.createLocationWithHttpInfo(body)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * ListLocations
   * Provides information of all locations of a business.  Most other Connect API endpoints have a required &#x60;location_id&#x60; path parameter. The &#x60;id&#x60; field of the [&#x60;Location&#x60;](#type-location) objects returned by this endpoint correspond to that &#x60;location_id&#x60; parameter.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListLocationsResponse} and HTTP response
   */
  this.listLocationsWithHttpInfo = function() {
    var postBody = null;


    var pathParams = {
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2020-07-22';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = ListLocationsResponse;

    return this.apiClient.callApi(
      '/v2/locations', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * ListLocations
   * Provides information of all locations of a business.  Most other Connect API endpoints have a required &#x60;location_id&#x60; path parameter. The &#x60;id&#x60; field of the [&#x60;Location&#x60;](#type-location) objects returned by this endpoint correspond to that &#x60;location_id&#x60; parameter.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListLocationsResponse}
   */
  this.listLocations = function() {
    return this.listLocationsWithHttpInfo()
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * RetrieveLocation
   * Retrieves details of a location. You can specify \&quot;main\&quot;  as the location ID to retrieve details of the  main location. For more information,  see [Locations API Overview](/docs/locations-api).
   * @param {String} locationId The ID of the location to retrieve. If you specify the string \&quot;main\&quot;, then the endpoint returns the main location.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RetrieveLocationResponse} and HTTP response
   */
  this.retrieveLocationWithHttpInfo = function(locationId) {
    var postBody = null;

    // verify the required parameter 'locationId' is set
    if (locationId === undefined || locationId === null) {
      throw new Error("Missing the required parameter 'locationId' when calling retrieveLocation");
    }


    var pathParams = {
      'location_id': locationId
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2020-07-22';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = RetrieveLocationResponse;

    return this.apiClient.callApi(
      '/v2/locations/{location_id}', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * RetrieveLocation
   * Retrieves details of a location. You can specify \&quot;main\&quot;  as the location ID to retrieve details of the  main location. For more information,  see [Locations API Overview](/docs/locations-api).
   * @param {String} locationId The ID of the location to retrieve. If you specify the string \&quot;main\&quot;, then the endpoint returns the main location.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RetrieveLocationResponse}
   */
  this.retrieveLocation = function(locationId) {
    return this.retrieveLocationWithHttpInfo(locationId)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * UpdateLocation
   * Note: This endpoint is in beta.
   * Updates a location.
   * @param {String} locationId The ID of the location to update.
   * @param {module:model/UpdateLocationRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UpdateLocationResponse} and HTTP response
   */
  this.updateLocationWithHttpInfo = function(locationId, body) {
    var postBody = body;

    // verify the required parameter 'locationId' is set
    if (locationId === undefined || locationId === null) {
      throw new Error("Missing the required parameter 'locationId' when calling updateLocation");
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling updateLocation");
    }


    var pathParams = {
      'location_id': locationId
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2020-07-22';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = UpdateLocationResponse;

    return this.apiClient.callApi(
      '/v2/locations/{location_id}', 'PUT',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * UpdateLocation
   * Updates a location.
   * @param {String} locationId The ID of the location to update.
   * @param {module:model/UpdateLocationRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UpdateLocationResponse}
   */
  this.updateLocation = function(locationId, body) {
    return this.updateLocationWithHttpInfo(locationId, body)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }
};
