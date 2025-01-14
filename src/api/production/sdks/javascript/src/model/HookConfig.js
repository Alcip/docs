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
 * The HookConfig model module.
 * @module model/HookConfig
 * @version 2.0.0
 */
class HookConfig {
    /**
     * Constructs a new <code>HookConfig</code>.
     * Webhook configuration
     * @alias module:model/HookConfig
     */
    constructor() { 
        
        HookConfig.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HookConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HookConfig} obj Optional instance to populate.
     * @return {module:model/HookConfig} The populated <code>HookConfig</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HookConfig();

            if (data.hasOwnProperty('verb')) {
                obj['verb'] = ApiClient.convertToType(data['verb'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('content_type')) {
                obj['content_type'] = ApiClient.convertToType(data['content_type'], 'String');
            }
            if (data.hasOwnProperty('secret')) {
                obj['secret'] = ApiClient.convertToType(data['secret'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Webhook configuration verb
 * @member {String} verb
 */
HookConfig.prototype['verb'] = undefined;

/**
 * Webhook configuration url
 * @member {String} url
 */
HookConfig.prototype['url'] = undefined;

/**
 * Webhook configuration content type
 * @member {String} content_type
 */
HookConfig.prototype['content_type'] = undefined;

/**
 * Webhook configuration secret
 * @member {String} secret
 */
HookConfig.prototype['secret'] = undefined;






export default HookConfig;

