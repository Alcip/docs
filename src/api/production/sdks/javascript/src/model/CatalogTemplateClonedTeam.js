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
 * The CatalogTemplateClonedTeam model module.
 * @module model/CatalogTemplateClonedTeam
 * @version 2.0.0
 */
class CatalogTemplateClonedTeam {
    /**
     * Constructs a new <code>CatalogTemplateClonedTeam</code>.
     * Properties of the source team that should be cloned.
     * @alias module:model/CatalogTemplateClonedTeam
     */
    constructor() { 
        
        CatalogTemplateClonedTeam.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CatalogTemplateClonedTeam</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CatalogTemplateClonedTeam} obj Optional instance to populate.
     * @return {module:model/CatalogTemplateClonedTeam} The populated <code>CatalogTemplateClonedTeam</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CatalogTemplateClonedTeam();

            if (data.hasOwnProperty('teamId')) {
                obj['teamId'] = ApiClient.convertToType(data['teamId'], 'String');
            }
            if (data.hasOwnProperty('teamName')) {
                obj['teamName'] = ApiClient.convertToType(data['teamName'], 'String');
            }
            if (data.hasOwnProperty('includeApps')) {
                obj['includeApps'] = ApiClient.convertToType(data['includeApps'], 'String');
            }
            if (data.hasOwnProperty('includeTabs')) {
                obj['includeTabs'] = ApiClient.convertToType(data['includeTabs'], 'String');
            }
            if (data.hasOwnProperty('includeSettings')) {
                obj['includeSettings'] = ApiClient.convertToType(data['includeSettings'], 'String');
            }
            if (data.hasOwnProperty('includeChannels')) {
                obj['includeChannels'] = ApiClient.convertToType(data['includeChannels'], 'String');
            }
            if (data.hasOwnProperty('includeMembers')) {
                obj['includeMembers'] = ApiClient.convertToType(data['includeMembers'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Source team ID.
 * @member {String} teamId
 */
CatalogTemplateClonedTeam.prototype['teamId'] = undefined;

/**
 * Source team name.
 * @member {String} teamName
 */
CatalogTemplateClonedTeam.prototype['teamName'] = undefined;

/**
 * Defines if apps should be cloned from the source team.
 * @member {String} includeApps
 */
CatalogTemplateClonedTeam.prototype['includeApps'] = undefined;

/**
 * Defines if tabs should be cloned from the source team.
 * @member {String} includeTabs
 */
CatalogTemplateClonedTeam.prototype['includeTabs'] = undefined;

/**
 * Defines if the team settings should be cloned from the source team.
 * @member {String} includeSettings
 */
CatalogTemplateClonedTeam.prototype['includeSettings'] = undefined;

/**
 * Defines if channels should be cloned from the source team.
 * @member {String} includeChannels
 */
CatalogTemplateClonedTeam.prototype['includeChannels'] = undefined;

/**
 * Defines if membership (members and owners) should be cloned from the source team.
 * @member {String} includeMembers
 */
CatalogTemplateClonedTeam.prototype['includeMembers'] = undefined;






export default CatalogTemplateClonedTeam;

