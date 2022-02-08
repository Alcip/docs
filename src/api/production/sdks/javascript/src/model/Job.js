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
 * The Job model module.
 * @module model/Job
 * @version 2.0.0
 */
class Job {
    /**
     * Constructs a new <code>Job</code>.
     * A job that performs some tasks asynchronously. See [https://docs.nbold.co/api/reference/Models/Job](https://docs.nbold.co/api/reference/Models/Job) for more information.
     * @alias module:model/Job
     */
    constructor() { 
        
        Job.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Job</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Job} obj Optional instance to populate.
     * @return {module:model/Job} The populated <code>Job</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Job();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('log')) {
                obj['log'] = ApiClient.convertToType(data['log'], ['String']);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('progress')) {
                obj['progress'] = ApiClient.convertToType(data['progress'], 'Number');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], Object);
            }
        }
        return obj;
    }


}

/**
 * The job ID, auto-generated at creation
 * @member {String} id
 */
Job.prototype['id'] = undefined;

/**
 * A collection of JobLogsEntry. See [https://docs.nbold.co/api/reference/Models/JobLogs](https://docs.nbold.co/api/reference/Models/JobLogs) for more information.
 * @member {Array.<String>} log
 */
Job.prototype['log'] = undefined;

/**
 * The job type (for instance `ProvisioningRequest`)
 * @member {String} type
 */
Job.prototype['type'] = undefined;

/**
 * The job current status
 * @member {module:model/Job.StatusEnum} status
 */
Job.prototype['status'] = undefined;

/**
 * The job current progress
 * @member {Number} progress
 */
Job.prototype['progress'] = undefined;

/**
 * The job data (for instance a `ProvisioningRequest` object)
 * @member {Object} data
 */
Job.prototype['data'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
Job['StatusEnum'] = {

    /**
     * value: "active"
     * @const
     */
    "active": "active",

    /**
     * value: "waiting"
     * @const
     */
    "waiting": "waiting",

    /**
     * value: "completed"
     * @const
     */
    "completed": "completed",

    /**
     * value: "failed"
     * @const
     */
    "failed": "failed",

    /**
     * value: "deleyed"
     * @const
     */
    "deleyed": "deleyed",

    /**
     * value: "paused"
     * @const
     */
    "paused": "paused",

    /**
     * value: "unknownFutureValue"
     * @const
     */
    "unknownFutureValue": "unknownFutureValue"
};



export default Job;

