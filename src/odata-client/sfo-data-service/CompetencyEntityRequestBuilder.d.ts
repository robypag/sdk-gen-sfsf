import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { CompetencyEntity } from './CompetencyEntity';
/**
 * Request builder class for operations supported on the [[CompetencyEntity]] entity.
 */
export declare class CompetencyEntityRequestBuilder extends RequestBuilder<CompetencyEntity> {
    /**
     * Returns a request builder for retrieving one `CompetencyEntity` entity based on its keys.
     * @param externalCode Key property. See [[CompetencyEntity.externalCode]].
     * @returns A request builder for creating requests to retrieve one `CompetencyEntity` entity based on its keys.
     */
    getByKey(externalCode: string): GetByKeyRequestBuilder<CompetencyEntity>;
    /**
     * Returns a request builder for querying all `CompetencyEntity` entities.
     * @returns A request builder for creating requests to retrieve all `CompetencyEntity` entities.
     */
    getAll(): GetAllRequestBuilder<CompetencyEntity>;
    /**
     * Returns a request builder for creating a `CompetencyEntity` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CompetencyEntity`.
     */
    create(entity: CompetencyEntity): CreateRequestBuilder<CompetencyEntity>;
    /**
     * Returns a request builder for updating an entity of type `CompetencyEntity`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CompetencyEntity`.
     */
    update(entity: CompetencyEntity): UpdateRequestBuilder<CompetencyEntity>;
    /**
     * Returns a request builder for deleting an entity of type `CompetencyEntity`.
     * @param externalCode Key property. See [[CompetencyEntity.externalCode]].
     * @returns A request builder for creating requests that delete an entity of type `CompetencyEntity`.
     */
    delete(externalCode: string): DeleteRequestBuilder<CompetencyEntity>;
    /**
     * Returns a request builder for deleting an entity of type `CompetencyEntity`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `CompetencyEntity` by taking the entity as a parameter.
     */
    delete(entity: CompetencyEntity): DeleteRequestBuilder<CompetencyEntity>;
}
//# sourceMappingURL=CompetencyEntityRequestBuilder.d.ts.map