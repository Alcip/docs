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
 * The ApprovedApprovalResponsePayloadApprover model module.
 * @module model/ApprovedApprovalResponsePayloadApprover
 * @version 2.0.0
 */
class ApprovedApprovalResponsePayloadApprover {
    /**
     * Constructs a new <code>ApprovedApprovalResponsePayloadApprover</code>.
     * Approval approver
     * @alias module:model/ApprovedApprovalResponsePayloadApprover
     */
    constructor() { 
        
        ApprovedApprovalResponsePayloadApprover.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ApprovedApprovalResponsePayloadApprover</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApprovedApprovalResponsePayloadApprover} obj Optional instance to populate.
     * @return {module:model/ApprovedApprovalResponsePayloadApprover} The populated <code>ApprovedApprovalResponsePayloadApprover</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApprovedApprovalResponsePayloadApprover();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Approver ID
 * @member {String} id
 */
ApprovedApprovalResponsePayloadApprover.prototype['id'] = undefined;






export default ApprovedApprovalResponsePayloadApprover;

