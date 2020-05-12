import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { PositionCompetencyMappingEntity } from './PositionCompetencyMappingEntity';
/**
 * Request builder class for operations supported on the [[PositionCompetencyMappingEntity]] entity.
 */
export declare class PositionCompetencyMappingEntityRequestBuilder extends RequestBuilder<PositionCompetencyMappingEntity> {
    /**
     * Returns a request builder for retrieving one `PositionCompetencyMappingEntity` entity based on its keys.
     * @param positionEntityExternalCode Key property. See [[PositionCompetencyMappingEntity.positionEntityExternalCode]].
     * @param externalCode Key property. See [[PositionCompetencyMappingEntity.externalCode]].
     * @returns A request builder for creating requests to retrieve one `PositionCompetencyMappingEntity` entity based on its keys.
     */
    getByKey(positionEntityExternalCode: string, externalCode: string): GetByKeyRequestBuilder<PositionCompetencyMappingEntity>;
    /**
     * Returns a request builder for querying all `PositionCompetencyMappingEntity` entities.
     * @returns A request builder for creating requests to retrieve all `PositionCompetencyMappingEntity` entities.
     */
    getAll(): GetAllRequestBuilder<PositionCompetencyMappingEntity>;
    /**
     * Returns a request builder for creating a `PositionCompetencyMappingEntity` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PositionCompetencyMappingEntity`.
     */
    create(entity: PositionCompetencyMappingEntity): CreateRequestBuilder<PositionCompetencyMappingEntity>;
    /**
     * Returns a request builder for updating an entity of type `PositionCompetencyMappingEntity`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PositionCompetencyMappingEntity`.
     */
    update(entity: PositionCompetencyMappingEntity): UpdateRequestBuilder<PositionCompetencyMappingEntity>;
    /**
     * Returns a request builder for deleting an entity of type `PositionCompetencyMappingEntity`.
     * @param positionEntityExternalCode Key property. See [[PositionCompetencyMappingEntity.positionEntityExternalCode]].
     * @param externalCode Key property. See [[PositionCompetencyMappingEntity.externalCode]].
     * @returns A request builder for creating requests that delete an entity of type `PositionCompetencyMappingEntity`.
     */
    delete(positionEntityExternalCode: string, externalCode: string): DeleteRequestBuilder<PositionCompetencyMappingEntity>;
    /**
     * Returns a request builder for deleting an entity of type `PositionCompetencyMappingEntity`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `PositionCompetencyMappingEntity` by taking the entity as a parameter.
     */
    delete(entity: PositionCompetencyMappingEntity): DeleteRequestBuilder<PositionCompetencyMappingEntity>;
}
//# sourceMappingURL=PositionCompetencyMappingEntityRequestBuilder.d.ts.map