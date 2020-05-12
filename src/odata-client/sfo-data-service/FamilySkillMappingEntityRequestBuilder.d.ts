import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { FamilySkillMappingEntity } from './FamilySkillMappingEntity';
/**
 * Request builder class for operations supported on the [[FamilySkillMappingEntity]] entity.
 */
export declare class FamilySkillMappingEntityRequestBuilder extends RequestBuilder<FamilySkillMappingEntity> {
    /**
     * Returns a request builder for retrieving one `FamilySkillMappingEntity` entity based on its keys.
     * @param familyEntityExternalCode Key property. See [[FamilySkillMappingEntity.familyEntityExternalCode]].
     * @param externalCode Key property. See [[FamilySkillMappingEntity.externalCode]].
     * @returns A request builder for creating requests to retrieve one `FamilySkillMappingEntity` entity based on its keys.
     */
    getByKey(familyEntityExternalCode: string, externalCode: string): GetByKeyRequestBuilder<FamilySkillMappingEntity>;
    /**
     * Returns a request builder for querying all `FamilySkillMappingEntity` entities.
     * @returns A request builder for creating requests to retrieve all `FamilySkillMappingEntity` entities.
     */
    getAll(): GetAllRequestBuilder<FamilySkillMappingEntity>;
    /**
     * Returns a request builder for creating a `FamilySkillMappingEntity` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `FamilySkillMappingEntity`.
     */
    create(entity: FamilySkillMappingEntity): CreateRequestBuilder<FamilySkillMappingEntity>;
    /**
     * Returns a request builder for updating an entity of type `FamilySkillMappingEntity`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `FamilySkillMappingEntity`.
     */
    update(entity: FamilySkillMappingEntity): UpdateRequestBuilder<FamilySkillMappingEntity>;
    /**
     * Returns a request builder for deleting an entity of type `FamilySkillMappingEntity`.
     * @param familyEntityExternalCode Key property. See [[FamilySkillMappingEntity.familyEntityExternalCode]].
     * @param externalCode Key property. See [[FamilySkillMappingEntity.externalCode]].
     * @returns A request builder for creating requests that delete an entity of type `FamilySkillMappingEntity`.
     */
    delete(familyEntityExternalCode: string, externalCode: string): DeleteRequestBuilder<FamilySkillMappingEntity>;
    /**
     * Returns a request builder for deleting an entity of type `FamilySkillMappingEntity`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `FamilySkillMappingEntity` by taking the entity as a parameter.
     */
    delete(entity: FamilySkillMappingEntity): DeleteRequestBuilder<FamilySkillMappingEntity>;
}
//# sourceMappingURL=FamilySkillMappingEntityRequestBuilder.d.ts.map