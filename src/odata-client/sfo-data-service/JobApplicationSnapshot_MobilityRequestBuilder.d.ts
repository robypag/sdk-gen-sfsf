import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { JobApplicationSnapshot_Mobility } from './JobApplicationSnapshot_Mobility';
/**
 * Request builder class for operations supported on the [[JobApplicationSnapshot_Mobility]] entity.
 */
export declare class JobApplicationSnapshot_MobilityRequestBuilder extends RequestBuilder<JobApplicationSnapshot_Mobility> {
    /**
     * Returns a request builder for retrieving one `JobApplicationSnapshot_Mobility` entity based on its keys.
     * @param backgroundElementId Key property. See [[JobApplicationSnapshot_Mobility.backgroundElementId]].
     * @returns A request builder for creating requests to retrieve one `JobApplicationSnapshot_Mobility` entity based on its keys.
     */
    getByKey(backgroundElementId: BigNumber): GetByKeyRequestBuilder<JobApplicationSnapshot_Mobility>;
    /**
     * Returns a request builder for querying all `JobApplicationSnapshot_Mobility` entities.
     * @returns A request builder for creating requests to retrieve all `JobApplicationSnapshot_Mobility` entities.
     */
    getAll(): GetAllRequestBuilder<JobApplicationSnapshot_Mobility>;
}
//# sourceMappingURL=JobApplicationSnapshot_MobilityRequestBuilder.d.ts.map