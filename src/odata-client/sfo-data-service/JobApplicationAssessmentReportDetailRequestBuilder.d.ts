import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { JobApplicationAssessmentReportDetail } from './JobApplicationAssessmentReportDetail';
/**
 * Request builder class for operations supported on the [[JobApplicationAssessmentReportDetail]] entity.
 */
export declare class JobApplicationAssessmentReportDetailRequestBuilder extends RequestBuilder<JobApplicationAssessmentReportDetail> {
    /**
     * Returns a request builder for retrieving one `JobApplicationAssessmentReportDetail` entity based on its keys.
     * @param id Key property. See [[JobApplicationAssessmentReportDetail.id]].
     * @returns A request builder for creating requests to retrieve one `JobApplicationAssessmentReportDetail` entity based on its keys.
     */
    getByKey(id: BigNumber): GetByKeyRequestBuilder<JobApplicationAssessmentReportDetail>;
    /**
     * Returns a request builder for querying all `JobApplicationAssessmentReportDetail` entities.
     * @returns A request builder for creating requests to retrieve all `JobApplicationAssessmentReportDetail` entities.
     */
    getAll(): GetAllRequestBuilder<JobApplicationAssessmentReportDetail>;
}
//# sourceMappingURL=JobApplicationAssessmentReportDetailRequestBuilder.d.ts.map