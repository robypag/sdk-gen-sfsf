import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { JobApplicationStatusLabel } from './JobApplicationStatusLabel';
/**
 * Request builder class for operations supported on the [[JobApplicationStatusLabel]] entity.
 */
export declare class JobApplicationStatusLabelRequestBuilder extends RequestBuilder<JobApplicationStatusLabel> {
    /**
     * Returns a request builder for retrieving one `JobApplicationStatusLabel` entity based on its keys.
     * @param appStatusId Key property. See [[JobApplicationStatusLabel.appStatusId]].
     * @returns A request builder for creating requests to retrieve one `JobApplicationStatusLabel` entity based on its keys.
     */
    getByKey(appStatusId: BigNumber): GetByKeyRequestBuilder<JobApplicationStatusLabel>;
    /**
     * Returns a request builder for querying all `JobApplicationStatusLabel` entities.
     * @returns A request builder for creating requests to retrieve all `JobApplicationStatusLabel` entities.
     */
    getAll(): GetAllRequestBuilder<JobApplicationStatusLabel>;
}
//# sourceMappingURL=JobApplicationStatusLabelRequestBuilder.d.ts.map