import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { JobRequisition } from './JobRequisition';
/**
 * Request builder class for operations supported on the [[JobRequisition]] entity.
 */
export declare class JobRequisitionRequestBuilder extends RequestBuilder<JobRequisition> {
    /**
     * Returns a request builder for retrieving one `JobRequisition` entity based on its keys.
     * @param jobReqId Key property. See [[JobRequisition.jobReqId]].
     * @returns A request builder for creating requests to retrieve one `JobRequisition` entity based on its keys.
     */
    getByKey(jobReqId: BigNumber): GetByKeyRequestBuilder<JobRequisition>;
    /**
     * Returns a request builder for querying all `JobRequisition` entities.
     * @returns A request builder for creating requests to retrieve all `JobRequisition` entities.
     */
    getAll(): GetAllRequestBuilder<JobRequisition>;
    /**
     * Returns a request builder for creating a `JobRequisition` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `JobRequisition`.
     */
    create(entity: JobRequisition): CreateRequestBuilder<JobRequisition>;
    /**
     * Returns a request builder for updating an entity of type `JobRequisition`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `JobRequisition`.
     */
    update(entity: JobRequisition): UpdateRequestBuilder<JobRequisition>;
    /**
     * Returns a request builder for deleting an entity of type `JobRequisition`.
     * @param jobReqId Key property. See [[JobRequisition.jobReqId]].
     * @returns A request builder for creating requests that delete an entity of type `JobRequisition`.
     */
    delete(jobReqId: BigNumber): DeleteRequestBuilder<JobRequisition>;
    /**
     * Returns a request builder for deleting an entity of type `JobRequisition`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `JobRequisition` by taking the entity as a parameter.
     */
    delete(entity: JobRequisition): DeleteRequestBuilder<JobRequisition>;
}
//# sourceMappingURL=JobRequisitionRequestBuilder.d.ts.map