import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { EducationMajorEntity } from './EducationMajorEntity';
/**
 * Request builder class for operations supported on the [[EducationMajorEntity]] entity.
 */
export declare class EducationMajorEntityRequestBuilder extends RequestBuilder<EducationMajorEntity> {
    /**
     * Returns a request builder for retrieving one `EducationMajorEntity` entity based on its keys.
     * @param externalCode Key property. See [[EducationMajorEntity.externalCode]].
     * @returns A request builder for creating requests to retrieve one `EducationMajorEntity` entity based on its keys.
     */
    getByKey(externalCode: string): GetByKeyRequestBuilder<EducationMajorEntity>;
    /**
     * Returns a request builder for querying all `EducationMajorEntity` entities.
     * @returns A request builder for creating requests to retrieve all `EducationMajorEntity` entities.
     */
    getAll(): GetAllRequestBuilder<EducationMajorEntity>;
    /**
     * Returns a request builder for creating a `EducationMajorEntity` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `EducationMajorEntity`.
     */
    create(entity: EducationMajorEntity): CreateRequestBuilder<EducationMajorEntity>;
    /**
     * Returns a request builder for updating an entity of type `EducationMajorEntity`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `EducationMajorEntity`.
     */
    update(entity: EducationMajorEntity): UpdateRequestBuilder<EducationMajorEntity>;
    /**
     * Returns a request builder for deleting an entity of type `EducationMajorEntity`.
     * @param externalCode Key property. See [[EducationMajorEntity.externalCode]].
     * @returns A request builder for creating requests that delete an entity of type `EducationMajorEntity`.
     */
    delete(externalCode: string): DeleteRequestBuilder<EducationMajorEntity>;
    /**
     * Returns a request builder for deleting an entity of type `EducationMajorEntity`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `EducationMajorEntity` by taking the entity as a parameter.
     */
    delete(entity: EducationMajorEntity): DeleteRequestBuilder<EducationMajorEntity>;
}
//# sourceMappingURL=EducationMajorEntityRequestBuilder.d.ts.map