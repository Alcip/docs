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

import ApiClient from '../ApiClient';

/**
 * The Users model module.
 * @module model/Users
 * @version 1.2.3
 */
class Users {
    /**
     * Constructs a new <code>Users</code>.
     * A collection of Microsoft 365 users.
     * @alias module:model/Users
     */
    constructor() { 
        
        Users.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Users</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Users} obj Optional instance to populate.
     * @return {module:model/Users} The populated <code>Users</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Users();

            if (data.hasOwnProperty('@odata.context')) {
                obj['@odata.context'] = ApiClient.convertToType(data['@odata.context'], 'String');
            }
            if (data.hasOwnProperty('@odata.count')) {
                obj['@odata.count'] = ApiClient.convertToType(data['@odata.count'], 'Number');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], [Object]);
            }
        }
        return obj;
    }


}

/**
 * Odata context
 * @member {String} @odata.context
 */
Users.prototype['@odata.context'] = undefined;

/**
 * Number of uisers in the collection
 * @member {Number} @odata.count
 */
Users.prototype['@odata.count'] = undefined;

/**
 * Array of users
 * @member {Array.<Object>} value
 */
Users.prototype['value'] = undefined;






export default Users;
