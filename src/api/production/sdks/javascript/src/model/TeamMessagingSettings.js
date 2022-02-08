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
 * The TeamMessagingSettings model module.
 * @module model/TeamMessagingSettings
 * @version 2.0.0
 */
class TeamMessagingSettings {
    /**
     * Constructs a new <code>TeamMessagingSettings</code>.
     * @alias module:model/TeamMessagingSettings
     */
    constructor() { 
        
        TeamMessagingSettings.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TeamMessagingSettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TeamMessagingSettings} obj Optional instance to populate.
     * @return {module:model/TeamMessagingSettings} The populated <code>TeamMessagingSettings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TeamMessagingSettings();

            if (data.hasOwnProperty('allowUserEditMessages')) {
                obj['allowUserEditMessages'] = ApiClient.convertToType(data['allowUserEditMessages'], 'Boolean');
            }
            if (data.hasOwnProperty('allowUserDeleteMessages')) {
                obj['allowUserDeleteMessages'] = ApiClient.convertToType(data['allowUserDeleteMessages'], 'Boolean');
            }
            if (data.hasOwnProperty('allowOwnerDeleteMessages')) {
                obj['allowOwnerDeleteMessages'] = ApiClient.convertToType(data['allowOwnerDeleteMessages'], 'Boolean');
            }
            if (data.hasOwnProperty('allowTeamMentions')) {
                obj['allowTeamMentions'] = ApiClient.convertToType(data['allowTeamMentions'], 'Boolean');
            }
            if (data.hasOwnProperty('allowChannelMentions')) {
                obj['allowChannelMentions'] = ApiClient.convertToType(data['allowChannelMentions'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Allow users to edit messages
 * @member {Boolean} allowUserEditMessages
 */
TeamMessagingSettings.prototype['allowUserEditMessages'] = undefined;

/**
 * Allow users to delete their own messages
 * @member {Boolean} allowUserDeleteMessages
 */
TeamMessagingSettings.prototype['allowUserDeleteMessages'] = undefined;

/**
 * Allow owners to delete messages
 * @member {Boolean} allowOwnerDeleteMessages
 */
TeamMessagingSettings.prototype['allowOwnerDeleteMessages'] = undefined;

/**
 * Allow team mentions
 * @member {Boolean} allowTeamMentions
 */
TeamMessagingSettings.prototype['allowTeamMentions'] = undefined;

/**
 * Allow channel mentions
 * @member {Boolean} allowChannelMentions
 */
TeamMessagingSettings.prototype['allowChannelMentions'] = undefined;






export default TeamMessagingSettings;

