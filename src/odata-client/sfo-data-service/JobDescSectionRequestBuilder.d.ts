import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { JobDescSection } from './JobDescSection';
/**
 * Request builder class for operations supported on the [[JobDescSection]] entity.
 */
export declare class JobDescSectionRequestBuilder extends RequestBuilder<JobDescSection> {
    /**
     * Returns a request builder for retrieving one `JobDescSection` entity based on its keys.
     * @param jobDescTemplateExternalCode Key property. See [[JobDescSection.jobDescTemplateExternalCode]].
     * @param externalCode Key property. See [[JobDescSection.externalCode]].
     * @returns A request builder for creating requests to retrieve one `JobDescSection` entity based on its keys.
     */
    getByKey(jobDescTemplateExternalCode: string, externalCode: string): GetByKeyRequestBuilder<JobDescSection>;
    /**
     * Returns a request builder for querying all `JobDescSection` entities.
     * @returns A request builder for creating requests to retrieve all `JobDescSection` entities.
     */
    getAll(): GetAllRequestBuilder<JobDescSection>;
    /**
     * Returns a request builder for creating a `JobDescSection` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `JobDescSection`.
     */
    create(entity: JobDescSection): CreateRequestBuilder<JobDescSection>;
    /**
     * Returns a request builder for updating an entity of type `JobDescSection`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `JobDescSection`.
     */
    update(entity: JobDescSection): UpdateRequestBuilder<JobDescSection>;
    /**
     * Returns a request builder for deleting an entity of type `JobDescSection`.
     * @param jobDescTemplateExternalCode Key property. See [[JobDescSection.jobDescTemplateExternalCode]].
     * @param externalCode Key property. See [[JobDescSection.externalCode]].
     * @returns A request builder for creating requests that delete an entity of type `JobDescSection`.
     */
    delete(jobDescTemplateExternalCode: string, externalCode: string): DeleteRequestBuilder<JobDescSection>;
    /**
     * Returns a request builder for deleting an entity of type `JobDescSection`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `JobDescSection` by taking the entity as a parameter.
     */
    delete(entity: JobDescSection): DeleteRequestBuilder<JobDescSection>;
}
//# sourceMappingURL=JobDescSectionRequestBuilder.d.ts.map