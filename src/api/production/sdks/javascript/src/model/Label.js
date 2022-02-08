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
 * The Label model module.
 * @module model/Label
 * @version 2.0.0
 */
class Label {
    /**
     * Constructs a new <code>Label</code>.
     * A Microsoft 365 sensitivity label.
     * @alias module:model/Label
     */
    constructor() { 
        
        Label.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Label</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Label} obj Optional instance to populate.
     * @return {module:model/Label} The populated <code>Label</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Label();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('color')) {
                obj['color'] = ApiClient.convertToType(data['color'], 'String');
            }
            if (data.hasOwnProperty('sensitivity')) {
                obj['sensitivity'] = ApiClient.convertToType(data['sensitivity'], 'Number');
            }
            if (data.hasOwnProperty('tooltip')) {
                obj['tooltip'] = ApiClient.convertToType(data['tooltip'], 'String');
            }
            if (data.hasOwnProperty('isActive')) {
                obj['isActive'] = ApiClient.convertToType(data['isActive'], 'Boolean');
            }
            if (data.hasOwnProperty('parent')) {
                obj['parent'] = ApiClient.convertToType(data['parent'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Label ID
 * @member {String} id
 */
Label.prototype['id'] = undefined;

/**
 * Label name
 * @member {String} name
 */
Label.prototype['name'] = undefined;

/**
 * Label description
 * @member {String} description
 */
Label.prototype['description'] = undefined;

/**
 * Label color
 * @member {String} color
 */
Label.prototype['color'] = undefined;

/**
 * Label sensitivity
 * @member {Number} sensitivity
 */
Label.prototype['sensitivity'] = undefined;

/**
 * Label tooltip
 * @member {String} tooltip
 */
Label.prototype['tooltip'] = undefined;

/**
 * Is label active
 * @member {Boolean} isActive
 */
Label.prototype['isActive'] = undefined;

/**
 * Parent label
 * @member {String} parent
 */
Label.prototype['parent'] = undefined;






export default Label;

