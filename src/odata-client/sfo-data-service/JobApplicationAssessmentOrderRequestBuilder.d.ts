import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { JobApplicationAssessmentOrder } from './JobApplicationAssessmentOrder';
/**
 * Request builder class for operations supported on the [[JobApplicationAssessmentOrder]] entity.
 */
export declare class JobApplicationAssessmentOrderRequestBuilder extends RequestBuilder<JobApplicationAssessmentOrder> {
    /**
     * Returns a request builder for retrieving one `JobApplicationAssessmentOrder` entity based on its keys.
     * @param id Key property. See [[JobApplicationAssessmentOrder.id]].
     * @returns A request builder for creating requests to retrieve one `JobApplicationAssessmentOrder` entity based on its keys.
     */
    getByKey(id: BigNumber): GetByKeyRequestBuilder<JobApplicationAssessmentOrder>;
    /**
     * Returns a request builder for querying all `JobApplicationAssessmentOrder` entities.
     * @returns A request builder for creating requests to retrieve all `JobApplicationAssessmentOrder` entities.
     */
    getAll(): GetAllRequestBuilder<JobApplicationAssessmentOrder>;
}
//# sourceMappingURL=JobApplicationAssessmentOrderRequestBuilder.d.ts.map