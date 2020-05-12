import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { SkillEntity } from './SkillEntity';
/**
 * Request builder class for operations supported on the [[SkillEntity]] entity.
 */
export declare class SkillEntityRequestBuilder extends RequestBuilder<SkillEntity> {
    /**
     * Returns a request builder for retrieving one `SkillEntity` entity based on its keys.
     * @param externalCode Key property. See [[SkillEntity.externalCode]].
     * @returns A request builder for creating requests to retrieve one `SkillEntity` entity based on its keys.
     */
    getByKey(externalCode: string): GetByKeyRequestBuilder<SkillEntity>;
    /**
     * Returns a request builder for querying all `SkillEntity` entities.
     * @returns A request builder for creating requests to retrieve all `SkillEntity` entities.
     */
    getAll(): GetAllRequestBuilder<SkillEntity>;
    /**
     * Returns a request builder for creating a `SkillEntity` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SkillEntity`.
     */
    create(entity: SkillEntity): CreateRequestBuilder<SkillEntity>;
    /**
     * Returns a request builder for updating an entity of type `SkillEntity`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SkillEntity`.
     */
    update(entity: SkillEntity): UpdateRequestBuilder<SkillEntity>;
    /**
     * Returns a request builder for deleting an entity of type `SkillEntity`.
     * @param externalCode Key property. See [[SkillEntity.externalCode]].
     * @returns A request builder for creating requests that delete an entity of type `SkillEntity`.
     */
    delete(externalCode: string): DeleteRequestBuilder<SkillEntity>;
    /**
     * Returns a request builder for deleting an entity of type `SkillEntity`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `SkillEntity` by taking the entity as a parameter.
     */
    delete(entity: SkillEntity): DeleteRequestBuilder<SkillEntity>;
}
//# sourceMappingURL=SkillEntityRequestBuilder.d.ts.map