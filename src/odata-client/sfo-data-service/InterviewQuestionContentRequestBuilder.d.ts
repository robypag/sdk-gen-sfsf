import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { InterviewQuestionContent } from './InterviewQuestionContent';
/**
 * Request builder class for operations supported on the [[InterviewQuestionContent]] entity.
 */
export declare class InterviewQuestionContentRequestBuilder extends RequestBuilder<InterviewQuestionContent> {
    /**
     * Returns a request builder for retrieving one `InterviewQuestionContent` entity based on its keys.
     * @param jobProfileExternalCode Key property. See [[InterviewQuestionContent.jobProfileExternalCode]].
     * @param externalCode Key property. See [[InterviewQuestionContent.externalCode]].
     * @returns A request builder for creating requests to retrieve one `InterviewQuestionContent` entity based on its keys.
     */
    getByKey(jobProfileExternalCode: string, externalCode: string): GetByKeyRequestBuilder<InterviewQuestionContent>;
    /**
     * Returns a request builder for querying all `InterviewQuestionContent` entities.
     * @returns A request builder for creating requests to retrieve all `InterviewQuestionContent` entities.
     */
    getAll(): GetAllRequestBuilder<InterviewQuestionContent>;
    /**
     * Returns a request builder for creating a `InterviewQuestionContent` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `InterviewQuestionContent`.
     */
    create(entity: InterviewQuestionContent): CreateRequestBuilder<InterviewQuestionContent>;
    /**
     * Returns a request builder for updating an entity of type `InterviewQuestionContent`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `InterviewQuestionContent`.
     */
    update(entity: InterviewQuestionContent): UpdateRequestBuilder<InterviewQuestionContent>;
    /**
     * Returns a request builder for deleting an entity of type `InterviewQuestionContent`.
     * @param jobProfileExternalCode Key property. See [[InterviewQuestionContent.jobProfileExternalCode]].
     * @param externalCode Key property. See [[InterviewQuestionContent.externalCode]].
     * @returns A request builder for creating requests that delete an entity of type `InterviewQuestionContent`.
     */
    delete(jobProfileExternalCode: string, externalCode: string): DeleteRequestBuilder<InterviewQuestionContent>;
    /**
     * Returns a request builder for deleting an entity of type `InterviewQuestionContent`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `InterviewQuestionContent` by taking the entity as a parameter.
     */
    delete(entity: InterviewQuestionContent): DeleteRequestBuilder<InterviewQuestionContent>;
}
//# sourceMappingURL=InterviewQuestionContentRequestBuilder.d.ts.map