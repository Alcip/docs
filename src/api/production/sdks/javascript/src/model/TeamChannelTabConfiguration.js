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
 * The TeamChannelTabConfiguration model module.
 * @module model/TeamChannelTabConfiguration
 * @version 2.0.0
 */
class TeamChannelTabConfiguration {
    /**
     * Constructs a new <code>TeamChannelTabConfiguration</code>.
     * @alias module:model/TeamChannelTabConfiguration
     */
    constructor() { 
        
        TeamChannelTabConfiguration.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TeamChannelTabConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TeamChannelTabConfiguration} obj Optional instance to populate.
     * @return {module:model/TeamChannelTabConfiguration} The populated <code>TeamChannelTabConfiguration</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TeamChannelTabConfiguration();

            if (data.hasOwnProperty('entityId')) {
                obj['entityId'] = ApiClient.convertToType(data['entityId'], 'String');
            }
            if (data.hasOwnProperty('contentUrl')) {
                obj['contentUrl'] = ApiClient.convertToType(data['contentUrl'], 'String');
            }
            if (data.hasOwnProperty('websiteUrl')) {
                obj['websiteUrl'] = ApiClient.convertToType(data['websiteUrl'], 'String');
            }
            if (data.hasOwnProperty('removeUrl')) {
                obj['removeUrl'] = ApiClient.convertToType(data['removeUrl'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Team Channel Tab Configuration Entity ID
 * @member {String} entityId
 */
TeamChannelTabConfiguration.prototype['entityId'] = undefined;

/**
 * Team Channel Tab Configuration Content URL
 * @member {String} contentUrl
 */
TeamChannelTabConfiguration.prototype['contentUrl'] = undefined;

/**
 * Team Channel Tab Configuration Website URL
 * @member {String} websiteUrl
 */
TeamChannelTabConfiguration.prototype['websiteUrl'] = undefined;

/**
 * Team Channel Tab Configuration Remove URL
 * @member {String} removeUrl
 */
TeamChannelTabConfiguration.prototype['removeUrl'] = undefined;






export default TeamChannelTabConfiguration;

