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
 * The HookEvent model module.
 * @module model/HookEvent
 * @version 2.0.0
 */
class HookEvent {
    /**
     * Constructs a new <code>HookEvent</code>.
     * Webhook event
     * @alias module:model/HookEvent
     */
    constructor() { 
        
        HookEvent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HookEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HookEvent} obj Optional instance to populate.
     * @return {module:model/HookEvent} The populated <code>HookEvent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HookEvent();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Webhook event code
 * @member {String} code
 */
HookEvent.prototype['code'] = undefined;






export default HookEvent;

