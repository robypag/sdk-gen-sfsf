import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { FamilyCompetencyMappingEntity } from './FamilyCompetencyMappingEntity';
/**
 * Request builder class for operations supported on the [[FamilyCompetencyMappingEntity]] entity.
 */
export declare class FamilyCompetencyMappingEntityRequestBuilder extends RequestBuilder<FamilyCompetencyMappingEntity> {
    /**
     * Returns a request builder for retrieving one `FamilyCompetencyMappingEntity` entity based on its keys.
     * @param familyEntityExternalCode Key property. See [[FamilyCompetencyMappingEntity.familyEntityExternalCode]].
     * @param externalCode Key property. See [[FamilyCompetencyMappingEntity.externalCode]].
     * @returns A request builder for creating requests to retrieve one `FamilyCompetencyMappingEntity` entity based on its keys.
     */
    getByKey(familyEntityExternalCode: string, externalCode: string): GetByKeyRequestBuilder<FamilyCompetencyMappingEntity>;
    /**
     * Returns a request builder for querying all `FamilyCompetencyMappingEntity` entities.
     * @returns A request builder for creating requests to retrieve all `FamilyCompetencyMappingEntity` entities.
     */
    getAll(): GetAllRequestBuilder<FamilyCompetencyMappingEntity>;
    /**
     * Returns a request builder for creating a `FamilyCompetencyMappingEntity` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `FamilyCompetencyMappingEntity`.
     */
    create(entity: FamilyCompetencyMappingEntity): CreateRequestBuilder<FamilyCompetencyMappingEntity>;
    /**
     * Returns a request builder for updating an entity of type `FamilyCompetencyMappingEntity`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `FamilyCompetencyMappingEntity`.
     */
    update(entity: FamilyCompetencyMappingEntity): UpdateRequestBuilder<FamilyCompetencyMappingEntity>;
    /**
     * Returns a request builder for deleting an entity of type `FamilyCompetencyMappingEntity`.
     * @param familyEntityExternalCode Key property. See [[FamilyCompetencyMappingEntity.familyEntityExternalCode]].
     * @param externalCode Key property. See [[FamilyCompetencyMappingEntity.externalCode]].
     * @returns A request builder for creating requests that delete an entity of type `FamilyCompetencyMappingEntity`.
     */
    delete(familyEntityExternalCode: string, externalCode: string): DeleteRequestBuilder<FamilyCompetencyMappingEntity>;
    /**
     * Returns a request builder for deleting an entity of type `FamilyCompetencyMappingEntity`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `FamilyCompetencyMappingEntity` by taking the entity as a parameter.
     */
    delete(entity: FamilyCompetencyMappingEntity): DeleteRequestBuilder<FamilyCompetencyMappingEntity>;
}
//# sourceMappingURL=FamilyCompetencyMappingEntityRequestBuilder.d.ts.map