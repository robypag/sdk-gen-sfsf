import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { JobRequisitionOperator } from './JobRequisitionOperator';
/**
 * Request builder class for operations supported on the [[JobRequisitionOperator]] entity.
 */
export declare class JobRequisitionOperatorRequestBuilder extends RequestBuilder<JobRequisitionOperator> {
    /**
     * Returns a request builder for retrieving one `JobRequisitionOperator` entity based on its keys.
     * @param jobReqId Key property. See [[JobRequisitionOperator.jobReqId]].
     * @param operatorRole Key property. See [[JobRequisitionOperator.operatorRole]].
     * @returns A request builder for creating requests to retrieve one `JobRequisitionOperator` entity based on its keys.
     */
    getByKey(jobReqId: BigNumber, operatorRole: string): GetByKeyRequestBuilder<JobRequisitionOperator>;
    /**
     * Returns a request builder for querying all `JobRequisitionOperator` entities.
     * @returns A request builder for creating requests to retrieve all `JobRequisitionOperator` entities.
     */
    getAll(): GetAllRequestBuilder<JobRequisitionOperator>;
}
//# sourceMappingURL=JobRequisitionOperatorRequestBuilder.d.ts.map