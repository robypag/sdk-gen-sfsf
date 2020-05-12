import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { BehaviorMappingEntity } from './BehaviorMappingEntity';
/**
 * Request builder class for operations supported on the [[BehaviorMappingEntity]] entity.
 */
export declare class BehaviorMappingEntityRequestBuilder extends RequestBuilder<BehaviorMappingEntity> {
    /**
     * Returns a request builder for retrieving one `BehaviorMappingEntity` entity based on its keys.
     * @param competencyEntityExternalCode Key property. See [[BehaviorMappingEntity.competencyEntityExternalCode]].
     * @param externalCode Key property. See [[BehaviorMappingEntity.externalCode]].
     * @returns A request builder for creating requests to retrieve one `BehaviorMappingEntity` entity based on its keys.
     */
    getByKey(competencyEntityExternalCode: string, externalCode: string): GetByKeyRequestBuilder<BehaviorMappingEntity>;
    /**
     * Returns a request builder for querying all `BehaviorMappingEntity` entities.
     * @returns A request builder for creating requests to retrieve all `BehaviorMappingEntity` entities.
     */
    getAll(): GetAllRequestBuilder<BehaviorMappingEntity>;
    /**
     * Returns a request builder for creating a `BehaviorMappingEntity` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BehaviorMappingEntity`.
     */
    create(entity: BehaviorMappingEntity): CreateRequestBuilder<BehaviorMappingEntity>;
    /**
     * Returns a request builder for updating an entity of type `BehaviorMappingEntity`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BehaviorMappingEntity`.
     */
    update(entity: BehaviorMappingEntity): UpdateRequestBuilder<BehaviorMappingEntity>;
    /**
     * Returns a request builder for deleting an entity of type `BehaviorMappingEntity`.
     * @param competencyEntityExternalCode Key property. See [[BehaviorMappingEntity.competencyEntityExternalCode]].
     * @param externalCode Key property. See [[BehaviorMappingEntity.externalCode]].
     * @returns A request builder for creating requests that delete an entity of type `BehaviorMappingEntity`.
     */
    delete(competencyEntityExternalCode: string, externalCode: string): DeleteRequestBuilder<BehaviorMappingEntity>;
    /**
     * Returns a request builder for deleting an entity of type `BehaviorMappingEntity`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `BehaviorMappingEntity` by taking the entity as a parameter.
     */
    delete(entity: BehaviorMappingEntity): DeleteRequestBuilder<BehaviorMappingEntity>;
}
//# sourceMappingURL=BehaviorMappingEntityRequestBuilder.d.ts.map