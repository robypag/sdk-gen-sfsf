import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { InterviewOverallAssessment } from './InterviewOverallAssessment';
/**
 * Request builder class for operations supported on the [[InterviewOverallAssessment]] entity.
 */
export declare class InterviewOverallAssessmentRequestBuilder extends RequestBuilder<InterviewOverallAssessment> {
    /**
     * Returns a request builder for retrieving one `InterviewOverallAssessment` entity based on its keys.
     * @param interviewOverallAssessmentId Key property. See [[InterviewOverallAssessment.interviewOverallAssessmentId]].
     * @returns A request builder for creating requests to retrieve one `InterviewOverallAssessment` entity based on its keys.
     */
    getByKey(interviewOverallAssessmentId: BigNumber): GetByKeyRequestBuilder<InterviewOverallAssessment>;
    /**
     * Returns a request builder for querying all `InterviewOverallAssessment` entities.
     * @returns A request builder for creating requests to retrieve all `InterviewOverallAssessment` entities.
     */
    getAll(): GetAllRequestBuilder<InterviewOverallAssessment>;
    /**
     * Returns a request builder for creating a `InterviewOverallAssessment` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `InterviewOverallAssessment`.
     */
    create(entity: InterviewOverallAssessment): CreateRequestBuilder<InterviewOverallAssessment>;
    /**
     * Returns a request builder for updating an entity of type `InterviewOverallAssessment`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `InterviewOverallAssessment`.
     */
    update(entity: InterviewOverallAssessment): UpdateRequestBuilder<InterviewOverallAssessment>;
    /**
     * Returns a request builder for deleting an entity of type `InterviewOverallAssessment`.
     * @param interviewOverallAssessmentId Key property. See [[InterviewOverallAssessment.interviewOverallAssessmentId]].
     * @returns A request builder for creating requests that delete an entity of type `InterviewOverallAssessment`.
     */
    delete(interviewOverallAssessmentId: BigNumber): DeleteRequestBuilder<InterviewOverallAssessment>;
    /**
     * Returns a request builder for deleting an entity of type `InterviewOverallAssessment`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `InterviewOverallAssessment` by taking the entity as a parameter.
     */
    delete(entity: InterviewOverallAssessment): DeleteRequestBuilder<InterviewOverallAssessment>;
}
//# sourceMappingURL=InterviewOverallAssessmentRequestBuilder.d.ts.map