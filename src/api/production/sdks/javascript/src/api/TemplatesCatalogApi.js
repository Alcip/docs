/**
 * nBold API
 * Visit our [API documentation](https://docs.nbold.co/api/) for more information. 
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: support@nbold.co
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import ApiError from '../model/ApiError';
import CatalogTemplates from '../model/CatalogTemplates';

/**
* TemplatesCatalog service.
* @module api/TemplatesCatalogApi
* @version 2.0.0
*/
export default class TemplatesCatalogApi {

    /**
    * Constructs a new TemplatesCatalogApi. 
    * @alias module:api/TemplatesCatalogApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getCatalogTemplates operation.
     * @callback module:api/TemplatesCatalogApi~getCatalogTemplatesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CatalogTemplates} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get teams templates
     * Get all the teams templates accessible in your organization. TIER 2️⃣ | ROLES - AUTHORIZED_APP, CATALOG_MANAGER, INTEGRATION_MANAGER, TEAMS_SERVICE_ADMIN, GLOBAL_ADMIN.
     * @param {Object} opts Optional parameters
     * @param {String} opts.language Optional. Default to 'en'. Language code to be used to filter the colection of templates, for instance 'en' or 'en-uk'.
     * @param {module:api/TemplatesCatalogApi~getCatalogTemplatesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CatalogTemplates}
     */
    getCatalogTemplates(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'language': opts['language']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = CatalogTemplates;
      return this.apiClient.callApi(
        '/catalog/templates', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getMyCatalogTemplates operation.
     * @callback module:api/TemplatesCatalogApi~getMyCatalogTemplatesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CatalogTemplates} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get my teams templates
     * Get teams templates accessible to the connected user filtered by the audience targeting rules. TIER 2️⃣ | ROLES - AUTHENTICATED_USER.
     * @param {Object} opts Optional parameters
     * @param {String} opts.language Optional. Default to 'en'. Language code to be used to filter the colection of templates, for instance 'en' or 'en-uk'.
     * @param {module:api/TemplatesCatalogApi~getMyCatalogTemplatesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CatalogTemplates}
     */
    getMyCatalogTemplates(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'language': opts['language']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = CatalogTemplates;
      return this.apiClient.callApi(
        '/me/catalog/templates', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
