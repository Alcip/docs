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
import TeamChannelTabConfiguration from './TeamChannelTabConfiguration';
import TeamChannelTabTeamsApp from './TeamChannelTabTeamsApp';

/**
 * The TeamChannelTab model module.
 * @module model/TeamChannelTab
 * @version 2.0.0
 */
class TeamChannelTab {
    /**
     * Constructs a new <code>TeamChannelTab</code>.
     * Tab from a Channel of a Microsoft Teams team.
     * @alias module:model/TeamChannelTab
     */
    constructor() { 
        
        TeamChannelTab.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TeamChannelTab</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TeamChannelTab} obj Optional instance to populate.
     * @return {module:model/TeamChannelTab} The populated <code>TeamChannelTab</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TeamChannelTab();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
            if (data.hasOwnProperty('configuration')) {
                obj['configuration'] = TeamChannelTabConfiguration.constructFromObject(data['configuration']);
            }
            if (data.hasOwnProperty('teamsApp')) {
                obj['teamsApp'] = TeamChannelTabTeamsApp.constructFromObject(data['teamsApp']);
            }
            if (data.hasOwnProperty('sortOrderIndex')) {
                obj['sortOrderIndex'] = ApiClient.convertToType(data['sortOrderIndex'], 'String');
            }
            if (data.hasOwnProperty('webUrl')) {
                obj['webUrl'] = ApiClient.convertToType(data['webUrl'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Team Channel Tab ID
 * @member {String} id
 */
TeamChannelTab.prototype['id'] = undefined;

/**
 * Team Channel Tab Display Name
 * @member {String} displayName
 */
TeamChannelTab.prototype['displayName'] = undefined;

/**
 * @member {module:model/TeamChannelTabConfiguration} configuration
 */
TeamChannelTab.prototype['configuration'] = undefined;

/**
 * @member {module:model/TeamChannelTabTeamsApp} teamsApp
 */
TeamChannelTab.prototype['teamsApp'] = undefined;

/**
 * Team Channel Tab Sort Order Index
 * @member {String} sortOrderIndex
 */
TeamChannelTab.prototype['sortOrderIndex'] = undefined;

/**
 * Team Channel Tab Web URL
 * @member {String} webUrl
 */
TeamChannelTab.prototype['webUrl'] = undefined;






export default TeamChannelTab;

