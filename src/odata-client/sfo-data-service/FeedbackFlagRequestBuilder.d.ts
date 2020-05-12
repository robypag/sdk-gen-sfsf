import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { FeedbackFlag } from './FeedbackFlag';
/**
 * Request builder class for operations supported on the [[FeedbackFlag]] entity.
 */
export declare class FeedbackFlagRequestBuilder extends RequestBuilder<FeedbackFlag> {
    /**
     * Returns a request builder for retrieving one `FeedbackFlag` entity based on its keys.
     * @param feedbackFlagId Key property. See [[FeedbackFlag.feedbackFlagId]].
     * @returns A request builder for creating requests to retrieve one `FeedbackFlag` entity based on its keys.
     */
    getByKey(feedbackFlagId: string): GetByKeyRequestBuilder<FeedbackFlag>;
    /**
     * Returns a request builder for querying all `FeedbackFlag` entities.
     * @returns A request builder for creating requests to retrieve all `FeedbackFlag` entities.
     */
    getAll(): GetAllRequestBuilder<FeedbackFlag>;
    /**
     * Returns a request builder for creating a `FeedbackFlag` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `FeedbackFlag`.
     */
    create(entity: FeedbackFlag): CreateRequestBuilder<FeedbackFlag>;
    /**
     * Returns a request builder for updating an entity of type `FeedbackFlag`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `FeedbackFlag`.
     */
    update(entity: FeedbackFlag): UpdateRequestBuilder<FeedbackFlag>;
    /**
     * Returns a request builder for deleting an entity of type `FeedbackFlag`.
     * @param feedbackFlagId Key property. See [[FeedbackFlag.feedbackFlagId]].
     * @returns A request builder for creating requests that delete an entity of type `FeedbackFlag`.
     */
    delete(feedbackFlagId: string): DeleteRequestBuilder<FeedbackFlag>;
    /**
     * Returns a request builder for deleting an entity of type `FeedbackFlag`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `FeedbackFlag` by taking the entity as a parameter.
     */
    delete(entity: FeedbackFlag): DeleteRequestBuilder<FeedbackFlag>;
}
//# sourceMappingURL=FeedbackFlagRequestBuilder.d.ts.map