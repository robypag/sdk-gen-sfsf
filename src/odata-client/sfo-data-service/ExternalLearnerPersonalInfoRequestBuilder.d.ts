import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder } from '@sap-cloud-sdk/core';
import { ExternalLearnerPersonalInfo } from './ExternalLearnerPersonalInfo';
/**
 * Request builder class for operations supported on the [[ExternalLearnerPersonalInfo]] entity.
 */
export declare class ExternalLearnerPersonalInfoRequestBuilder extends RequestBuilder<ExternalLearnerPersonalInfo> {
    /**
     * Returns a request builder for retrieving one `ExternalLearnerPersonalInfo` entity based on its keys.
     * @param itemId Key property. See [[ExternalLearnerPersonalInfo.itemId]].
     * @returns A request builder for creating requests to retrieve one `ExternalLearnerPersonalInfo` entity based on its keys.
     */
    getByKey(itemId: BigNumber): GetByKeyRequestBuilder<ExternalLearnerPersonalInfo>;
    /**
     * Returns a request builder for querying all `ExternalLearnerPersonalInfo` entities.
     * @returns A request builder for creating requests to retrieve all `ExternalLearnerPersonalInfo` entities.
     */
    getAll(): GetAllRequestBuilder<ExternalLearnerPersonalInfo>;
    /**
     * Returns a request builder for creating a `ExternalLearnerPersonalInfo` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ExternalLearnerPersonalInfo`.
     */
    create(entity: ExternalLearnerPersonalInfo): CreateRequestBuilder<ExternalLearnerPersonalInfo>;
}
//# sourceMappingURL=ExternalLearnerPersonalInfoRequestBuilder.d.ts.map