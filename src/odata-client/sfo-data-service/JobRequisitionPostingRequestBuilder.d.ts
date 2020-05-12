import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { JobRequisitionPosting } from './JobRequisitionPosting';
/**
 * Request builder class for operations supported on the [[JobRequisitionPosting]] entity.
 */
export declare class JobRequisitionPostingRequestBuilder extends RequestBuilder<JobRequisitionPosting> {
    /**
     * Returns a request builder for retrieving one `JobRequisitionPosting` entity based on its keys.
     * @param jobPostingId Key property. See [[JobRequisitionPosting.jobPostingId]].
     * @param jobReqId Key property. See [[JobRequisitionPosting.jobReqId]].
     * @returns A request builder for creating requests to retrieve one `JobRequisitionPosting` entity based on its keys.
     */
    getByKey(jobPostingId: BigNumber, jobReqId: BigNumber): GetByKeyRequestBuilder<JobRequisitionPosting>;
    /**
     * Returns a request builder for querying all `JobRequisitionPosting` entities.
     * @returns A request builder for creating requests to retrieve all `JobRequisitionPosting` entities.
     */
    getAll(): GetAllRequestBuilder<JobRequisitionPosting>;
    /**
     * Returns a request builder for updating an entity of type `JobRequisitionPosting`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `JobRequisitionPosting`.
     */
    update(entity: JobRequisitionPosting): UpdateRequestBuilder<JobRequisitionPosting>;
    /**
     * Returns a request builder for deleting an entity of type `JobRequisitionPosting`.
     * @param jobPostingId Key property. See [[JobRequisitionPosting.jobPostingId]].
     * @param jobReqId Key property. See [[JobRequisitionPosting.jobReqId]].
     * @returns A request builder for creating requests that delete an entity of type `JobRequisitionPosting`.
     */
    delete(jobPostingId: BigNumber, jobReqId: BigNumber): DeleteRequestBuilder<JobRequisitionPosting>;
    /**
     * Returns a request builder for deleting an entity of type `JobRequisitionPosting`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `JobRequisitionPosting` by taking the entity as a parameter.
     */
    delete(entity: JobRequisitionPosting): DeleteRequestBuilder<JobRequisitionPosting>;
}
//# sourceMappingURL=JobRequisitionPostingRequestBuilder.d.ts.map