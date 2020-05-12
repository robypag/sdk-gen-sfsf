import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { JobResponsibilityContent } from './JobResponsibilityContent';
/**
 * Request builder class for operations supported on the [[JobResponsibilityContent]] entity.
 */
export declare class JobResponsibilityContentRequestBuilder extends RequestBuilder<JobResponsibilityContent> {
    /**
     * Returns a request builder for retrieving one `JobResponsibilityContent` entity based on its keys.
     * @param jobProfileExternalCode Key property. See [[JobResponsibilityContent.jobProfileExternalCode]].
     * @param externalCode Key property. See [[JobResponsibilityContent.externalCode]].
     * @returns A request builder for creating requests to retrieve one `JobResponsibilityContent` entity based on its keys.
     */
    getByKey(jobProfileExternalCode: string, externalCode: string): GetByKeyRequestBuilder<JobResponsibilityContent>;
    /**
     * Returns a request builder for querying all `JobResponsibilityContent` entities.
     * @returns A request builder for creating requests to retrieve all `JobResponsibilityContent` entities.
     */
    getAll(): GetAllRequestBuilder<JobResponsibilityContent>;
    /**
     * Returns a request builder for creating a `JobResponsibilityContent` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `JobResponsibilityContent`.
     */
    create(entity: JobResponsibilityContent): CreateRequestBuilder<JobResponsibilityContent>;
    /**
     * Returns a request builder for updating an entity of type `JobResponsibilityContent`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `JobResponsibilityContent`.
     */
    update(entity: JobResponsibilityContent): UpdateRequestBuilder<JobResponsibilityContent>;
    /**
     * Returns a request builder for deleting an entity of type `JobResponsibilityContent`.
     * @param jobProfileExternalCode Key property. See [[JobResponsibilityContent.jobProfileExternalCode]].
     * @param externalCode Key property. See [[JobResponsibilityContent.externalCode]].
     * @returns A request builder for creating requests that delete an entity of type `JobResponsibilityContent`.
     */
    delete(jobProfileExternalCode: string, externalCode: string): DeleteRequestBuilder<JobResponsibilityContent>;
    /**
     * Returns a request builder for deleting an entity of type `JobResponsibilityContent`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `JobResponsibilityContent` by taking the entity as a parameter.
     */
    delete(entity: JobResponsibilityContent): DeleteRequestBuilder<JobResponsibilityContent>;
}
//# sourceMappingURL=JobResponsibilityContentRequestBuilder.d.ts.map