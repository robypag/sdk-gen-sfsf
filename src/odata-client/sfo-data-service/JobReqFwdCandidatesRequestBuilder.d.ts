import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { JobReqFwdCandidates } from './JobReqFwdCandidates';
/**
 * Request builder class for operations supported on the [[JobReqFwdCandidates]] entity.
 */
export declare class JobReqFwdCandidatesRequestBuilder extends RequestBuilder<JobReqFwdCandidates> {
    /**
     * Returns a request builder for retrieving one `JobReqFwdCandidates` entity based on its keys.
     * @param candidateId Key property. See [[JobReqFwdCandidates.candidateId]].
     * @param jobReqId Key property. See [[JobReqFwdCandidates.jobReqId]].
     * @returns A request builder for creating requests to retrieve one `JobReqFwdCandidates` entity based on its keys.
     */
    getByKey(candidateId: BigNumber, jobReqId: BigNumber): GetByKeyRequestBuilder<JobReqFwdCandidates>;
    /**
     * Returns a request builder for querying all `JobReqFwdCandidates` entities.
     * @returns A request builder for creating requests to retrieve all `JobReqFwdCandidates` entities.
     */
    getAll(): GetAllRequestBuilder<JobReqFwdCandidates>;
    /**
     * Returns a request builder for creating a `JobReqFwdCandidates` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `JobReqFwdCandidates`.
     */
    create(entity: JobReqFwdCandidates): CreateRequestBuilder<JobReqFwdCandidates>;
    /**
     * Returns a request builder for updating an entity of type `JobReqFwdCandidates`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `JobReqFwdCandidates`.
     */
    update(entity: JobReqFwdCandidates): UpdateRequestBuilder<JobReqFwdCandidates>;
    /**
     * Returns a request builder for deleting an entity of type `JobReqFwdCandidates`.
     * @param candidateId Key property. See [[JobReqFwdCandidates.candidateId]].
     * @param jobReqId Key property. See [[JobReqFwdCandidates.jobReqId]].
     * @returns A request builder for creating requests that delete an entity of type `JobReqFwdCandidates`.
     */
    delete(candidateId: BigNumber, jobReqId: BigNumber): DeleteRequestBuilder<JobReqFwdCandidates>;
    /**
     * Returns a request builder for deleting an entity of type `JobReqFwdCandidates`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `JobReqFwdCandidates` by taking the entity as a parameter.
     */
    delete(entity: JobReqFwdCandidates): DeleteRequestBuilder<JobReqFwdCandidates>;
}
//# sourceMappingURL=JobReqFwdCandidatesRequestBuilder.d.ts.map