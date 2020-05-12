import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { InterviewQuestionEntity } from './InterviewQuestionEntity';
/**
 * Request builder class for operations supported on the [[InterviewQuestionEntity]] entity.
 */
export declare class InterviewQuestionEntityRequestBuilder extends RequestBuilder<InterviewQuestionEntity> {
    /**
     * Returns a request builder for retrieving one `InterviewQuestionEntity` entity based on its keys.
     * @param externalCode Key property. See [[InterviewQuestionEntity.externalCode]].
     * @returns A request builder for creating requests to retrieve one `InterviewQuestionEntity` entity based on its keys.
     */
    getByKey(externalCode: string): GetByKeyRequestBuilder<InterviewQuestionEntity>;
    /**
     * Returns a request builder for querying all `InterviewQuestionEntity` entities.
     * @returns A request builder for creating requests to retrieve all `InterviewQuestionEntity` entities.
     */
    getAll(): GetAllRequestBuilder<InterviewQuestionEntity>;
    /**
     * Returns a request builder for creating a `InterviewQuestionEntity` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `InterviewQuestionEntity`.
     */
    create(entity: InterviewQuestionEntity): CreateRequestBuilder<InterviewQuestionEntity>;
    /**
     * Returns a request builder for updating an entity of type `InterviewQuestionEntity`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `InterviewQuestionEntity`.
     */
    update(entity: InterviewQuestionEntity): UpdateRequestBuilder<InterviewQuestionEntity>;
    /**
     * Returns a request builder for deleting an entity of type `InterviewQuestionEntity`.
     * @param externalCode Key property. See [[InterviewQuestionEntity.externalCode]].
     * @returns A request builder for creating requests that delete an entity of type `InterviewQuestionEntity`.
     */
    delete(externalCode: string): DeleteRequestBuilder<InterviewQuestionEntity>;
    /**
     * Returns a request builder for deleting an entity of type `InterviewQuestionEntity`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `InterviewQuestionEntity` by taking the entity as a parameter.
     */
    delete(entity: InterviewQuestionEntity): DeleteRequestBuilder<InterviewQuestionEntity>;
}
//# sourceMappingURL=InterviewQuestionEntityRequestBuilder.d.ts.map