import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { EducationMajorContent } from './EducationMajorContent';
/**
 * Request builder class for operations supported on the [[EducationMajorContent]] entity.
 */
export declare class EducationMajorContentRequestBuilder extends RequestBuilder<EducationMajorContent> {
    /**
     * Returns a request builder for retrieving one `EducationMajorContent` entity based on its keys.
     * @param jobProfileExternalCode Key property. See [[EducationMajorContent.jobProfileExternalCode]].
     * @param externalCode Key property. See [[EducationMajorContent.externalCode]].
     * @returns A request builder for creating requests to retrieve one `EducationMajorContent` entity based on its keys.
     */
    getByKey(jobProfileExternalCode: string, externalCode: string): GetByKeyRequestBuilder<EducationMajorContent>;
    /**
     * Returns a request builder for querying all `EducationMajorContent` entities.
     * @returns A request builder for creating requests to retrieve all `EducationMajorContent` entities.
     */
    getAll(): GetAllRequestBuilder<EducationMajorContent>;
    /**
     * Returns a request builder for creating a `EducationMajorContent` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `EducationMajorContent`.
     */
    create(entity: EducationMajorContent): CreateRequestBuilder<EducationMajorContent>;
    /**
     * Returns a request builder for updating an entity of type `EducationMajorContent`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `EducationMajorContent`.
     */
    update(entity: EducationMajorContent): UpdateRequestBuilder<EducationMajorContent>;
    /**
     * Returns a request builder for deleting an entity of type `EducationMajorContent`.
     * @param jobProfileExternalCode Key property. See [[EducationMajorContent.jobProfileExternalCode]].
     * @param externalCode Key property. See [[EducationMajorContent.externalCode]].
     * @returns A request builder for creating requests that delete an entity of type `EducationMajorContent`.
     */
    delete(jobProfileExternalCode: string, externalCode: string): DeleteRequestBuilder<EducationMajorContent>;
    /**
     * Returns a request builder for deleting an entity of type `EducationMajorContent`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `EducationMajorContent` by taking the entity as a parameter.
     */
    delete(entity: EducationMajorContent): DeleteRequestBuilder<EducationMajorContent>;
}
//# sourceMappingURL=EducationMajorContentRequestBuilder.d.ts.map