import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { JobApplicationBackgroundCheckRequest } from './JobApplicationBackgroundCheckRequest';
/**
 * Request builder class for operations supported on the [[JobApplicationBackgroundCheckRequest]] entity.
 */
export declare class JobApplicationBackgroundCheckRequestRequestBuilder extends RequestBuilder<JobApplicationBackgroundCheckRequest> {
    /**
     * Returns a request builder for retrieving one `JobApplicationBackgroundCheckRequest` entity based on its keys.
     * @param requestId Key property. See [[JobApplicationBackgroundCheckRequest.requestId]].
     * @returns A request builder for creating requests to retrieve one `JobApplicationBackgroundCheckRequest` entity based on its keys.
     */
    getByKey(requestId: BigNumber): GetByKeyRequestBuilder<JobApplicationBackgroundCheckRequest>;
    /**
     * Returns a request builder for querying all `JobApplicationBackgroundCheckRequest` entities.
     * @returns A request builder for creating requests to retrieve all `JobApplicationBackgroundCheckRequest` entities.
     */
    getAll(): GetAllRequestBuilder<JobApplicationBackgroundCheckRequest>;
    /**
     * Returns a request builder for creating a `JobApplicationBackgroundCheckRequest` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `JobApplicationBackgroundCheckRequest`.
     */
    create(entity: JobApplicationBackgroundCheckRequest): CreateRequestBuilder<JobApplicationBackgroundCheckRequest>;
    /**
     * Returns a request builder for updating an entity of type `JobApplicationBackgroundCheckRequest`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `JobApplicationBackgroundCheckRequest`.
     */
    update(entity: JobApplicationBackgroundCheckRequest): UpdateRequestBuilder<JobApplicationBackgroundCheckRequest>;
    /**
     * Returns a request builder for deleting an entity of type `JobApplicationBackgroundCheckRequest`.
     * @param requestId Key property. See [[JobApplicationBackgroundCheckRequest.requestId]].
     * @returns A request builder for creating requests that delete an entity of type `JobApplicationBackgroundCheckRequest`.
     */
    delete(requestId: BigNumber): DeleteRequestBuilder<JobApplicationBackgroundCheckRequest>;
    /**
     * Returns a request builder for deleting an entity of type `JobApplicationBackgroundCheckRequest`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `JobApplicationBackgroundCheckRequest` by taking the entity as a parameter.
     */
    delete(entity: JobApplicationBackgroundCheckRequest): DeleteRequestBuilder<JobApplicationBackgroundCheckRequest>;
}
//# sourceMappingURL=JobApplicationBackgroundCheckRequestRequestBuilder.d.ts.map