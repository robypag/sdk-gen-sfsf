import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { RelevantIndustryContent } from './RelevantIndustryContent';
/**
 * Request builder class for operations supported on the [[RelevantIndustryContent]] entity.
 */
export declare class RelevantIndustryContentRequestBuilder extends RequestBuilder<RelevantIndustryContent> {
    /**
     * Returns a request builder for retrieving one `RelevantIndustryContent` entity based on its keys.
     * @param jobProfileExternalCode Key property. See [[RelevantIndustryContent.jobProfileExternalCode]].
     * @param externalCode Key property. See [[RelevantIndustryContent.externalCode]].
     * @returns A request builder for creating requests to retrieve one `RelevantIndustryContent` entity based on its keys.
     */
    getByKey(jobProfileExternalCode: string, externalCode: string): GetByKeyRequestBuilder<RelevantIndustryContent>;
    /**
     * Returns a request builder for querying all `RelevantIndustryContent` entities.
     * @returns A request builder for creating requests to retrieve all `RelevantIndustryContent` entities.
     */
    getAll(): GetAllRequestBuilder<RelevantIndustryContent>;
    /**
     * Returns a request builder for creating a `RelevantIndustryContent` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `RelevantIndustryContent`.
     */
    create(entity: RelevantIndustryContent): CreateRequestBuilder<RelevantIndustryContent>;
    /**
     * Returns a request builder for updating an entity of type `RelevantIndustryContent`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `RelevantIndustryContent`.
     */
    update(entity: RelevantIndustryContent): UpdateRequestBuilder<RelevantIndustryContent>;
    /**
     * Returns a request builder for deleting an entity of type `RelevantIndustryContent`.
     * @param jobProfileExternalCode Key property. See [[RelevantIndustryContent.jobProfileExternalCode]].
     * @param externalCode Key property. See [[RelevantIndustryContent.externalCode]].
     * @returns A request builder for creating requests that delete an entity of type `RelevantIndustryContent`.
     */
    delete(jobProfileExternalCode: string, externalCode: string): DeleteRequestBuilder<RelevantIndustryContent>;
    /**
     * Returns a request builder for deleting an entity of type `RelevantIndustryContent`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `RelevantIndustryContent` by taking the entity as a parameter.
     */
    delete(entity: RelevantIndustryContent): DeleteRequestBuilder<RelevantIndustryContent>;
}
//# sourceMappingURL=RelevantIndustryContentRequestBuilder.d.ts.map