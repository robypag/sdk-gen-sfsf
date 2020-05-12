import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { JobProfile } from './JobProfile';
/**
 * Request builder class for operations supported on the [[JobProfile]] entity.
 */
export declare class JobProfileRequestBuilder extends RequestBuilder<JobProfile> {
    /**
     * Returns a request builder for retrieving one `JobProfile` entity based on its keys.
     * @param externalCode Key property. See [[JobProfile.externalCode]].
     * @returns A request builder for creating requests to retrieve one `JobProfile` entity based on its keys.
     */
    getByKey(externalCode: string): GetByKeyRequestBuilder<JobProfile>;
    /**
     * Returns a request builder for querying all `JobProfile` entities.
     * @returns A request builder for creating requests to retrieve all `JobProfile` entities.
     */
    getAll(): GetAllRequestBuilder<JobProfile>;
    /**
     * Returns a request builder for creating a `JobProfile` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `JobProfile`.
     */
    create(entity: JobProfile): CreateRequestBuilder<JobProfile>;
    /**
     * Returns a request builder for updating an entity of type `JobProfile`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `JobProfile`.
     */
    update(entity: JobProfile): UpdateRequestBuilder<JobProfile>;
    /**
     * Returns a request builder for deleting an entity of type `JobProfile`.
     * @param externalCode Key property. See [[JobProfile.externalCode]].
     * @returns A request builder for creating requests that delete an entity of type `JobProfile`.
     */
    delete(externalCode: string): DeleteRequestBuilder<JobProfile>;
    /**
     * Returns a request builder for deleting an entity of type `JobProfile`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `JobProfile` by taking the entity as a parameter.
     */
    delete(entity: JobProfile): DeleteRequestBuilder<JobProfile>;
}
//# sourceMappingURL=JobProfileRequestBuilder.d.ts.map