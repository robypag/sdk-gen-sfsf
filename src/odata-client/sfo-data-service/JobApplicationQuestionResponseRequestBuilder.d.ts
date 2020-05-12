import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder } from '@sap-cloud-sdk/core';
import { JobApplicationQuestionResponse } from './JobApplicationQuestionResponse';
/**
 * Request builder class for operations supported on the [[JobApplicationQuestionResponse]] entity.
 */
export declare class JobApplicationQuestionResponseRequestBuilder extends RequestBuilder<JobApplicationQuestionResponse> {
    /**
     * Returns a request builder for retrieving one `JobApplicationQuestionResponse` entity based on its keys.
     * @param applicationId Key property. See [[JobApplicationQuestionResponse.applicationId]].
     * @param order Key property. See [[JobApplicationQuestionResponse.order]].
     * @returns A request builder for creating requests to retrieve one `JobApplicationQuestionResponse` entity based on its keys.
     */
    getByKey(applicationId: BigNumber, order: BigNumber): GetByKeyRequestBuilder<JobApplicationQuestionResponse>;
    /**
     * Returns a request builder for querying all `JobApplicationQuestionResponse` entities.
     * @returns A request builder for creating requests to retrieve all `JobApplicationQuestionResponse` entities.
     */
    getAll(): GetAllRequestBuilder<JobApplicationQuestionResponse>;
    /**
     * Returns a request builder for creating a `JobApplicationQuestionResponse` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `JobApplicationQuestionResponse`.
     */
    create(entity: JobApplicationQuestionResponse): CreateRequestBuilder<JobApplicationQuestionResponse>;
}
//# sourceMappingURL=JobApplicationQuestionResponseRequestBuilder.d.ts.map