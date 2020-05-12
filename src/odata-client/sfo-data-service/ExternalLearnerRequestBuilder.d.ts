import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder } from '@sap-cloud-sdk/core';
import { ExternalLearner } from './ExternalLearner';
/**
 * Request builder class for operations supported on the [[ExternalLearner]] entity.
 */
export declare class ExternalLearnerRequestBuilder extends RequestBuilder<ExternalLearner> {
    /**
     * Returns a request builder for retrieving one `ExternalLearner` entity based on its keys.
     * @param userId Key property. See [[ExternalLearner.userId]].
     * @returns A request builder for creating requests to retrieve one `ExternalLearner` entity based on its keys.
     */
    getByKey(userId: string): GetByKeyRequestBuilder<ExternalLearner>;
    /**
     * Returns a request builder for querying all `ExternalLearner` entities.
     * @returns A request builder for creating requests to retrieve all `ExternalLearner` entities.
     */
    getAll(): GetAllRequestBuilder<ExternalLearner>;
    /**
     * Returns a request builder for creating a `ExternalLearner` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ExternalLearner`.
     */
    create(entity: ExternalLearner): CreateRequestBuilder<ExternalLearner>;
}
//# sourceMappingURL=ExternalLearnerRequestBuilder.d.ts.map