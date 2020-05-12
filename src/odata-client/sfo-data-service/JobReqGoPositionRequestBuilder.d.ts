import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { JobReqGoPosition } from './JobReqGoPosition';
/**
 * Request builder class for operations supported on the [[JobReqGoPosition]] entity.
 */
export declare class JobReqGoPositionRequestBuilder extends RequestBuilder<JobReqGoPosition> {
    /**
     * Returns a request builder for retrieving one `JobReqGoPosition` entity based on its keys.
     * @param jobReqMultiSelectId Key property. See [[JobReqGoPosition.jobReqMultiSelectId]].
     * @returns A request builder for creating requests to retrieve one `JobReqGoPosition` entity based on its keys.
     */
    getByKey(jobReqMultiSelectId: BigNumber): GetByKeyRequestBuilder<JobReqGoPosition>;
    /**
     * Returns a request builder for querying all `JobReqGoPosition` entities.
     * @returns A request builder for creating requests to retrieve all `JobReqGoPosition` entities.
     */
    getAll(): GetAllRequestBuilder<JobReqGoPosition>;
}
//# sourceMappingURL=JobReqGoPositionRequestBuilder.d.ts.map