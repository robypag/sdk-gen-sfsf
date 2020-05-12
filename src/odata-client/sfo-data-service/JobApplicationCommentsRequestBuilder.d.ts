import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { JobApplicationComments } from './JobApplicationComments';
/**
 * Request builder class for operations supported on the [[JobApplicationComments]] entity.
 */
export declare class JobApplicationCommentsRequestBuilder extends RequestBuilder<JobApplicationComments> {
    /**
     * Returns a request builder for retrieving one `JobApplicationComments` entity based on its keys.
     * @param commentId Key property. See [[JobApplicationComments.commentId]].
     * @returns A request builder for creating requests to retrieve one `JobApplicationComments` entity based on its keys.
     */
    getByKey(commentId: BigNumber): GetByKeyRequestBuilder<JobApplicationComments>;
    /**
     * Returns a request builder for querying all `JobApplicationComments` entities.
     * @returns A request builder for creating requests to retrieve all `JobApplicationComments` entities.
     */
    getAll(): GetAllRequestBuilder<JobApplicationComments>;
    /**
     * Returns a request builder for creating a `JobApplicationComments` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `JobApplicationComments`.
     */
    create(entity: JobApplicationComments): CreateRequestBuilder<JobApplicationComments>;
    /**
     * Returns a request builder for updating an entity of type `JobApplicationComments`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `JobApplicationComments`.
     */
    update(entity: JobApplicationComments): UpdateRequestBuilder<JobApplicationComments>;
    /**
     * Returns a request builder for deleting an entity of type `JobApplicationComments`.
     * @param commentId Key property. See [[JobApplicationComments.commentId]].
     * @returns A request builder for creating requests that delete an entity of type `JobApplicationComments`.
     */
    delete(commentId: BigNumber): DeleteRequestBuilder<JobApplicationComments>;
    /**
     * Returns a request builder for deleting an entity of type `JobApplicationComments`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `JobApplicationComments` by taking the entity as a parameter.
     */
    delete(entity: JobApplicationComments): DeleteRequestBuilder<JobApplicationComments>;
}
//# sourceMappingURL=JobApplicationCommentsRequestBuilder.d.ts.map