import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { ContinuousFeedback } from './ContinuousFeedback';
/**
 * Request builder class for operations supported on the [[ContinuousFeedback]] entity.
 */
export declare class ContinuousFeedbackRequestBuilder extends RequestBuilder<ContinuousFeedback> {
    /**
     * Returns a request builder for retrieving one `ContinuousFeedback` entity based on its keys.
     * @param feedbackId Key property. See [[ContinuousFeedback.feedbackId]].
     * @returns A request builder for creating requests to retrieve one `ContinuousFeedback` entity based on its keys.
     */
    getByKey(feedbackId: BigNumber): GetByKeyRequestBuilder<ContinuousFeedback>;
    /**
     * Returns a request builder for querying all `ContinuousFeedback` entities.
     * @returns A request builder for creating requests to retrieve all `ContinuousFeedback` entities.
     */
    getAll(): GetAllRequestBuilder<ContinuousFeedback>;
    /**
     * Returns a request builder for creating a `ContinuousFeedback` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ContinuousFeedback`.
     */
    create(entity: ContinuousFeedback): CreateRequestBuilder<ContinuousFeedback>;
    /**
     * Returns a request builder for updating an entity of type `ContinuousFeedback`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ContinuousFeedback`.
     */
    update(entity: ContinuousFeedback): UpdateRequestBuilder<ContinuousFeedback>;
    /**
     * Returns a request builder for deleting an entity of type `ContinuousFeedback`.
     * @param feedbackId Key property. See [[ContinuousFeedback.feedbackId]].
     * @returns A request builder for creating requests that delete an entity of type `ContinuousFeedback`.
     */
    delete(feedbackId: BigNumber): DeleteRequestBuilder<ContinuousFeedback>;
    /**
     * Returns a request builder for deleting an entity of type `ContinuousFeedback`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `ContinuousFeedback` by taking the entity as a parameter.
     */
    delete(entity: ContinuousFeedback): DeleteRequestBuilder<ContinuousFeedback>;
}
//# sourceMappingURL=ContinuousFeedbackRequestBuilder.d.ts.map