import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { JobRequisitionGroupOperator } from './JobRequisitionGroupOperator';
/**
 * Request builder class for operations supported on the [[JobRequisitionGroupOperator]] entity.
 */
export declare class JobRequisitionGroupOperatorRequestBuilder extends RequestBuilder<JobRequisitionGroupOperator> {
    /**
     * Returns a request builder for retrieving one `JobRequisitionGroupOperator` entity based on its keys.
     * @param jobReqId Key property. See [[JobRequisitionGroupOperator.jobReqId]].
     * @param operatorRole Key property. See [[JobRequisitionGroupOperator.operatorRole]].
     * @param userGroupId Key property. See [[JobRequisitionGroupOperator.userGroupId]].
     * @returns A request builder for creating requests to retrieve one `JobRequisitionGroupOperator` entity based on its keys.
     */
    getByKey(jobReqId: BigNumber, operatorRole: string, userGroupId: BigNumber): GetByKeyRequestBuilder<JobRequisitionGroupOperator>;
    /**
     * Returns a request builder for querying all `JobRequisitionGroupOperator` entities.
     * @returns A request builder for creating requests to retrieve all `JobRequisitionGroupOperator` entities.
     */
    getAll(): GetAllRequestBuilder<JobRequisitionGroupOperator>;
}
//# sourceMappingURL=JobRequisitionGroupOperatorRequestBuilder.d.ts.map