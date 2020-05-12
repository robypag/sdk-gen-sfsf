import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { RoleTalentPoolMappingEntity } from './RoleTalentPoolMappingEntity';
/**
 * Request builder class for operations supported on the [[RoleTalentPoolMappingEntity]] entity.
 */
export declare class RoleTalentPoolMappingEntityRequestBuilder extends RequestBuilder<RoleTalentPoolMappingEntity> {
    /**
     * Returns a request builder for retrieving one `RoleTalentPoolMappingEntity` entity based on its keys.
     * @param roleEntityExternalCode Key property. See [[RoleTalentPoolMappingEntity.roleEntityExternalCode]].
     * @param externalCode Key property. See [[RoleTalentPoolMappingEntity.externalCode]].
     * @returns A request builder for creating requests to retrieve one `RoleTalentPoolMappingEntity` entity based on its keys.
     */
    getByKey(roleEntityExternalCode: string, externalCode: string): GetByKeyRequestBuilder<RoleTalentPoolMappingEntity>;
    /**
     * Returns a request builder for querying all `RoleTalentPoolMappingEntity` entities.
     * @returns A request builder for creating requests to retrieve all `RoleTalentPoolMappingEntity` entities.
     */
    getAll(): GetAllRequestBuilder<RoleTalentPoolMappingEntity>;
    /**
     * Returns a request builder for creating a `RoleTalentPoolMappingEntity` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `RoleTalentPoolMappingEntity`.
     */
    create(entity: RoleTalentPoolMappingEntity): CreateRequestBuilder<RoleTalentPoolMappingEntity>;
    /**
     * Returns a request builder for updating an entity of type `RoleTalentPoolMappingEntity`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `RoleTalentPoolMappingEntity`.
     */
    update(entity: RoleTalentPoolMappingEntity): UpdateRequestBuilder<RoleTalentPoolMappingEntity>;
    /**
     * Returns a request builder for deleting an entity of type `RoleTalentPoolMappingEntity`.
     * @param roleEntityExternalCode Key property. See [[RoleTalentPoolMappingEntity.roleEntityExternalCode]].
     * @param externalCode Key property. See [[RoleTalentPoolMappingEntity.externalCode]].
     * @returns A request builder for creating requests that delete an entity of type `RoleTalentPoolMappingEntity`.
     */
    delete(roleEntityExternalCode: string, externalCode: string): DeleteRequestBuilder<RoleTalentPoolMappingEntity>;
    /**
     * Returns a request builder for deleting an entity of type `RoleTalentPoolMappingEntity`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `RoleTalentPoolMappingEntity` by taking the entity as a parameter.
     */
    delete(entity: RoleTalentPoolMappingEntity): DeleteRequestBuilder<RoleTalentPoolMappingEntity>;
}
//# sourceMappingURL=RoleTalentPoolMappingEntityRequestBuilder.d.ts.map