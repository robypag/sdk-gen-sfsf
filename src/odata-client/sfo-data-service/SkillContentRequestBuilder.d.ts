import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { SkillContent } from './SkillContent';
/**
 * Request builder class for operations supported on the [[SkillContent]] entity.
 */
export declare class SkillContentRequestBuilder extends RequestBuilder<SkillContent> {
    /**
     * Returns a request builder for retrieving one `SkillContent` entity based on its keys.
     * @param jobProfileExternalCode Key property. See [[SkillContent.jobProfileExternalCode]].
     * @param externalCode Key property. See [[SkillContent.externalCode]].
     * @returns A request builder for creating requests to retrieve one `SkillContent` entity based on its keys.
     */
    getByKey(jobProfileExternalCode: string, externalCode: string): GetByKeyRequestBuilder<SkillContent>;
    /**
     * Returns a request builder for querying all `SkillContent` entities.
     * @returns A request builder for creating requests to retrieve all `SkillContent` entities.
     */
    getAll(): GetAllRequestBuilder<SkillContent>;
    /**
     * Returns a request builder for creating a `SkillContent` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SkillContent`.
     */
    create(entity: SkillContent): CreateRequestBuilder<SkillContent>;
    /**
     * Returns a request builder for updating an entity of type `SkillContent`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SkillContent`.
     */
    update(entity: SkillContent): UpdateRequestBuilder<SkillContent>;
    /**
     * Returns a request builder for deleting an entity of type `SkillContent`.
     * @param jobProfileExternalCode Key property. See [[SkillContent.jobProfileExternalCode]].
     * @param externalCode Key property. See [[SkillContent.externalCode]].
     * @returns A request builder for creating requests that delete an entity of type `SkillContent`.
     */
    delete(jobProfileExternalCode: string, externalCode: string): DeleteRequestBuilder<SkillContent>;
    /**
     * Returns a request builder for deleting an entity of type `SkillContent`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `SkillContent` by taking the entity as a parameter.
     */
    delete(entity: SkillContent): DeleteRequestBuilder<SkillContent>;
}
//# sourceMappingURL=SkillContentRequestBuilder.d.ts.map