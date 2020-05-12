import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { DevLearning_4201 } from './DevLearning_4201';
/**
 * Request builder class for operations supported on the [[DevLearning_4201]] entity.
 */
export declare class DevLearning_4201RequestBuilder extends RequestBuilder<DevLearning_4201> {
    /**
     * Returns a request builder for retrieving one `DevLearning_4201` entity based on its keys.
     * @param learningId Key property. See [[DevLearning_4201.learningId]].
     * @returns A request builder for creating requests to retrieve one `DevLearning_4201` entity based on its keys.
     */
    getByKey(learningId: BigNumber): GetByKeyRequestBuilder<DevLearning_4201>;
    /**
     * Returns a request builder for querying all `DevLearning_4201` entities.
     * @returns A request builder for creating requests to retrieve all `DevLearning_4201` entities.
     */
    getAll(): GetAllRequestBuilder<DevLearning_4201>;
}
//# sourceMappingURL=DevLearning_4201RequestBuilder.d.ts.map