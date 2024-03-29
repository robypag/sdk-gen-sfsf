import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { FamilyEntity } from './FamilyEntity';
/**
 * Request builder class for operations supported on the [[FamilyEntity]] entity.
 */
export declare class FamilyEntityRequestBuilder extends RequestBuilder<FamilyEntity> {
    /**
     * Returns a request builder for retrieving one `FamilyEntity` entity based on its keys.
     * @param externalCode Key property. See [[FamilyEntity.externalCode]].
     * @returns A request builder for creating requests to retrieve one `FamilyEntity` entity based on its keys.
     */
    getByKey(externalCode: string): GetByKeyRequestBuilder<FamilyEntity>;
    /**
     * Returns a request builder for querying all `FamilyEntity` entities.
     * @returns A request builder for creating requests to retrieve all `FamilyEntity` entities.
     */
    getAll(): GetAllRequestBuilder<FamilyEntity>;
    /**
     * Returns a request builder for creating a `FamilyEntity` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `FamilyEntity`.
     */
    create(entity: FamilyEntity): CreateRequestBuilder<FamilyEntity>;
    /**
     * Returns a request builder for updating an entity of type `FamilyEntity`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `FamilyEntity`.
     */
    update(entity: FamilyEntity): UpdateRequestBuilder<FamilyEntity>;
    /**
     * Returns a request builder for deleting an entity of type `FamilyEntity`.
     * @param externalCode Key property. See [[FamilyEntity.externalCode]].
     * @returns A request builder for creating requests that delete an entity of type `FamilyEntity`.
     */
    delete(externalCode: string): DeleteRequestBuilder<FamilyEntity>;
    /**
     * Returns a request builder for deleting an entity of type `FamilyEntity`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `FamilyEntity` by taking the entity as a parameter.
     */
    delete(entity: FamilyEntity): DeleteRequestBuilder<FamilyEntity>;
}
//# sourceMappingURL=FamilyEntityRequestBuilder.d.ts.map