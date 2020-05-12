import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { EducationDegreeEntity } from './EducationDegreeEntity';
/**
 * Request builder class for operations supported on the [[EducationDegreeEntity]] entity.
 */
export declare class EducationDegreeEntityRequestBuilder extends RequestBuilder<EducationDegreeEntity> {
    /**
     * Returns a request builder for retrieving one `EducationDegreeEntity` entity based on its keys.
     * @param externalCode Key property. See [[EducationDegreeEntity.externalCode]].
     * @returns A request builder for creating requests to retrieve one `EducationDegreeEntity` entity based on its keys.
     */
    getByKey(externalCode: string): GetByKeyRequestBuilder<EducationDegreeEntity>;
    /**
     * Returns a request builder for querying all `EducationDegreeEntity` entities.
     * @returns A request builder for creating requests to retrieve all `EducationDegreeEntity` entities.
     */
    getAll(): GetAllRequestBuilder<EducationDegreeEntity>;
    /**
     * Returns a request builder for creating a `EducationDegreeEntity` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `EducationDegreeEntity`.
     */
    create(entity: EducationDegreeEntity): CreateRequestBuilder<EducationDegreeEntity>;
    /**
     * Returns a request builder for updating an entity of type `EducationDegreeEntity`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `EducationDegreeEntity`.
     */
    update(entity: EducationDegreeEntity): UpdateRequestBuilder<EducationDegreeEntity>;
    /**
     * Returns a request builder for deleting an entity of type `EducationDegreeEntity`.
     * @param externalCode Key property. See [[EducationDegreeEntity.externalCode]].
     * @returns A request builder for creating requests that delete an entity of type `EducationDegreeEntity`.
     */
    delete(externalCode: string): DeleteRequestBuilder<EducationDegreeEntity>;
    /**
     * Returns a request builder for deleting an entity of type `EducationDegreeEntity`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `EducationDegreeEntity` by taking the entity as a parameter.
     */
    delete(entity: EducationDegreeEntity): DeleteRequestBuilder<EducationDegreeEntity>;
}
//# sourceMappingURL=EducationDegreeEntityRequestBuilder.d.ts.map