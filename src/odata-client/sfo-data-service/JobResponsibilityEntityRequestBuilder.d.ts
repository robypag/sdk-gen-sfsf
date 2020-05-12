import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { JobResponsibilityEntity } from './JobResponsibilityEntity';
/**
 * Request builder class for operations supported on the [[JobResponsibilityEntity]] entity.
 */
export declare class JobResponsibilityEntityRequestBuilder extends RequestBuilder<JobResponsibilityEntity> {
    /**
     * Returns a request builder for retrieving one `JobResponsibilityEntity` entity based on its keys.
     * @param externalCode Key property. See [[JobResponsibilityEntity.externalCode]].
     * @returns A request builder for creating requests to retrieve one `JobResponsibilityEntity` entity based on its keys.
     */
    getByKey(externalCode: string): GetByKeyRequestBuilder<JobResponsibilityEntity>;
    /**
     * Returns a request builder for querying all `JobResponsibilityEntity` entities.
     * @returns A request builder for creating requests to retrieve all `JobResponsibilityEntity` entities.
     */
    getAll(): GetAllRequestBuilder<JobResponsibilityEntity>;
    /**
     * Returns a request builder for creating a `JobResponsibilityEntity` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `JobResponsibilityEntity`.
     */
    create(entity: JobResponsibilityEntity): CreateRequestBuilder<JobResponsibilityEntity>;
    /**
     * Returns a request builder for updating an entity of type `JobResponsibilityEntity`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `JobResponsibilityEntity`.
     */
    update(entity: JobResponsibilityEntity): UpdateRequestBuilder<JobResponsibilityEntity>;
    /**
     * Returns a request builder for deleting an entity of type `JobResponsibilityEntity`.
     * @param externalCode Key property. See [[JobResponsibilityEntity.externalCode]].
     * @returns A request builder for creating requests that delete an entity of type `JobResponsibilityEntity`.
     */
    delete(externalCode: string): DeleteRequestBuilder<JobResponsibilityEntity>;
    /**
     * Returns a request builder for deleting an entity of type `JobResponsibilityEntity`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `JobResponsibilityEntity` by taking the entity as a parameter.
     */
    delete(entity: JobResponsibilityEntity): DeleteRequestBuilder<JobResponsibilityEntity>;
}
//# sourceMappingURL=JobResponsibilityEntityRequestBuilder.d.ts.map