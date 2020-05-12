import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { JobApplicationInterview } from './JobApplicationInterview';
/**
 * Request builder class for operations supported on the [[JobApplicationInterview]] entity.
 */
export declare class JobApplicationInterviewRequestBuilder extends RequestBuilder<JobApplicationInterview> {
    /**
     * Returns a request builder for retrieving one `JobApplicationInterview` entity based on its keys.
     * @param applicationInterviewId Key property. See [[JobApplicationInterview.applicationInterviewId]].
     * @returns A request builder for creating requests to retrieve one `JobApplicationInterview` entity based on its keys.
     */
    getByKey(applicationInterviewId: BigNumber): GetByKeyRequestBuilder<JobApplicationInterview>;
    /**
     * Returns a request builder for querying all `JobApplicationInterview` entities.
     * @returns A request builder for creating requests to retrieve all `JobApplicationInterview` entities.
     */
    getAll(): GetAllRequestBuilder<JobApplicationInterview>;
    /**
     * Returns a request builder for creating a `JobApplicationInterview` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `JobApplicationInterview`.
     */
    create(entity: JobApplicationInterview): CreateRequestBuilder<JobApplicationInterview>;
    /**
     * Returns a request builder for updating an entity of type `JobApplicationInterview`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `JobApplicationInterview`.
     */
    update(entity: JobApplicationInterview): UpdateRequestBuilder<JobApplicationInterview>;
    /**
     * Returns a request builder for deleting an entity of type `JobApplicationInterview`.
     * @param applicationInterviewId Key property. See [[JobApplicationInterview.applicationInterviewId]].
     * @returns A request builder for creating requests that delete an entity of type `JobApplicationInterview`.
     */
    delete(applicationInterviewId: BigNumber): DeleteRequestBuilder<JobApplicationInterview>;
    /**
     * Returns a request builder for deleting an entity of type `JobApplicationInterview`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `JobApplicationInterview` by taking the entity as a parameter.
     */
    delete(entity: JobApplicationInterview): DeleteRequestBuilder<JobApplicationInterview>;
}
//# sourceMappingURL=JobApplicationInterviewRequestBuilder.d.ts.map