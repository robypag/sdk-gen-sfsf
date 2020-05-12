import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { JobReqFoLocation } from './JobReqFoLocation';
/**
 * Request builder class for operations supported on the [[JobReqFoLocation]] entity.
 */
export declare class JobReqFoLocationRequestBuilder extends RequestBuilder<JobReqFoLocation> {
    /**
     * Returns a request builder for retrieving one `JobReqFoLocation` entity based on its keys.
     * @param jobReqMultiSelectId Key property. See [[JobReqFoLocation.jobReqMultiSelectId]].
     * @returns A request builder for creating requests to retrieve one `JobReqFoLocation` entity based on its keys.
     */
    getByKey(jobReqMultiSelectId: BigNumber): GetByKeyRequestBuilder<JobReqFoLocation>;
    /**
     * Returns a request builder for querying all `JobReqFoLocation` entities.
     * @returns A request builder for creating requests to retrieve all `JobReqFoLocation` entities.
     */
    getAll(): GetAllRequestBuilder<JobReqFoLocation>;
}
//# sourceMappingURL=JobReqFoLocationRequestBuilder.d.ts.map