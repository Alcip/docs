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

import ApiClient from '../ApiClient';

/**
 * The TeamChannelTabTeamsApp model module.
 * @module model/TeamChannelTabTeamsApp
 * @version 2.0.0
 */
class TeamChannelTabTeamsApp {
    /**
     * Constructs a new <code>TeamChannelTabTeamsApp</code>.
     * @alias module:model/TeamChannelTabTeamsApp
     */
    constructor() { 
        
        TeamChannelTabTeamsApp.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TeamChannelTabTeamsApp</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TeamChannelTabTeamsApp} obj Optional instance to populate.
     * @return {module:model/TeamChannelTabTeamsApp} The populated <code>TeamChannelTabTeamsApp</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TeamChannelTabTeamsApp();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('externalId')) {
                obj['externalId'] = ApiClient.convertToType(data['externalId'], 'String');
            }
            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
            if (data.hasOwnProperty('distributionMethod')) {
                obj['distributionMethod'] = ApiClient.convertToType(data['distributionMethod'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Team Channel Tab Teams App ID
 * @member {String} id
 */
TeamChannelTabTeamsApp.prototype['id'] = undefined;

/**
 * Team Channel Tab Teams App External ID
 * @member {String} externalId
 */
TeamChannelTabTeamsApp.prototype['externalId'] = undefined;

/**
 * Team Channel Tab Teams App Display Name
 * @member {String} displayName
 */
TeamChannelTabTeamsApp.prototype['displayName'] = undefined;

/**
 * Team Channel Tab Teams App Distribution Method
 * @member {String} distributionMethod
 */
TeamChannelTabTeamsApp.prototype['distributionMethod'] = undefined;






export default TeamChannelTabTeamsApp;

