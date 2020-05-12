import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { JobApplicationOnboardingStatus } from './JobApplicationOnboardingStatus';
/**
 * Request builder class for operations supported on the [[JobApplicationOnboardingStatus]] entity.
 */
export declare class JobApplicationOnboardingStatusRequestBuilder extends RequestBuilder<JobApplicationOnboardingStatus> {
    /**
     * Returns a request builder for retrieving one `JobApplicationOnboardingStatus` entity based on its keys.
     * @param onboardingStatusId Key property. See [[JobApplicationOnboardingStatus.onboardingStatusId]].
     * @returns A request builder for creating requests to retrieve one `JobApplicationOnboardingStatus` entity based on its keys.
     */
    getByKey(onboardingStatusId: BigNumber): GetByKeyRequestBuilder<JobApplicationOnboardingStatus>;
    /**
     * Returns a request builder for querying all `JobApplicationOnboardingStatus` entities.
     * @returns A request builder for creating requests to retrieve all `JobApplicationOnboardingStatus` entities.
     */
    getAll(): GetAllRequestBuilder<JobApplicationOnboardingStatus>;
}
//# sourceMappingURL=JobApplicationOnboardingStatusRequestBuilder.d.ts.map