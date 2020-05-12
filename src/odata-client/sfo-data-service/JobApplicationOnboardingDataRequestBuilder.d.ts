import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { JobApplicationOnboardingData } from './JobApplicationOnboardingData';
/**
 * Request builder class for operations supported on the [[JobApplicationOnboardingData]] entity.
 */
export declare class JobApplicationOnboardingDataRequestBuilder extends RequestBuilder<JobApplicationOnboardingData> {
    /**
     * Returns a request builder for retrieving one `JobApplicationOnboardingData` entity based on its keys.
     * @param onboardingId Key property. See [[JobApplicationOnboardingData.onboardingId]].
     * @returns A request builder for creating requests to retrieve one `JobApplicationOnboardingData` entity based on its keys.
     */
    getByKey(onboardingId: BigNumber): GetByKeyRequestBuilder<JobApplicationOnboardingData>;
    /**
     * Returns a request builder for querying all `JobApplicationOnboardingData` entities.
     * @returns A request builder for creating requests to retrieve all `JobApplicationOnboardingData` entities.
     */
    getAll(): GetAllRequestBuilder<JobApplicationOnboardingData>;
}
//# sourceMappingURL=JobApplicationOnboardingDataRequestBuilder.d.ts.map