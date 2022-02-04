/**
 * SalesTim API
 * The unified Microsoft Teams Governance API. Visit our [Tech Hub](https://developers.salestim.com/api/) for more information. 
 *
 * The version of the OpenAPI document: 1.2.3
 * Contact: support@salestim.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import ApiError from '../model/ApiError';
import Labels from '../model/Labels';

/**
* SensitivityLabels service.
* @module api/SensitivityLabelsApi
* @version 1.2.3
*/
export default class SensitivityLabelsApi {

    /**
    * Constructs a new SensitivityLabelsApi. 
    * @alias module:api/SensitivityLabelsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getMyLabels operation.
     * @callback module:api/SensitivityLabelsApi~getMyLabelsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Labels} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get my sensitivity labels
     * Get my Microsoft 365 sensitivity labels. TIER 2️⃣ | ROLES - AUTHENTICATED_USER.
     * @param {module:api/SensitivityLabelsApi~getMyLabelsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Labels}
     */
    getMyLabels(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Labels;
      return this.apiClient.callApi(
        '/me/labels', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}