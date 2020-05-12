import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { JobApplicationAudit } from './JobApplicationAudit';
/**
 * Request builder class for operations supported on the [[JobApplicationAudit]] entity.
 */
export declare class JobApplicationAuditRequestBuilder extends RequestBuilder<JobApplicationAudit> {
    /**
     * Returns a request builder for retrieving one `JobApplicationAudit` entity based on its keys.
     * @param fieldOrderPos Key property. See [[JobApplicationAudit.fieldOrderPos]].
     * @param revNumber Key property. See [[JobApplicationAudit.revNumber]].
     * @returns A request builder for creating requests to retrieve one `JobApplicationAudit` entity based on its keys.
     */
    getByKey(fieldOrderPos: BigNumber, revNumber: BigNumber): GetByKeyRequestBuilder<JobApplicationAudit>;
    /**
     * Returns a request builder for querying all `JobApplicationAudit` entities.
     * @returns A request builder for creating requests to retrieve all `JobApplicationAudit` entities.
     */
    getAll(): GetAllRequestBuilder<JobApplicationAudit>;
}
//# sourceMappingURL=JobApplicationAuditRequestBuilder.d.ts.map