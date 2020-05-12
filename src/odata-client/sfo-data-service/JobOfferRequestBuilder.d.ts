import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder } from '@sap-cloud-sdk/core';
import { JobOffer } from './JobOffer';
/**
 * Request builder class for operations supported on the [[JobOffer]] entity.
 */
export declare class JobOfferRequestBuilder extends RequestBuilder<JobOffer> {
    /**
     * Returns a request builder for retrieving one `JobOffer` entity based on its keys.
     * @param offerApprovalId Key property. See [[JobOffer.offerApprovalId]].
     * @returns A request builder for creating requests to retrieve one `JobOffer` entity based on its keys.
     */
    getByKey(offerApprovalId: BigNumber): GetByKeyRequestBuilder<JobOffer>;
    /**
     * Returns a request builder for querying all `JobOffer` entities.
     * @returns A request builder for creating requests to retrieve all `JobOffer` entities.
     */
    getAll(): GetAllRequestBuilder<JobOffer>;
    /**
     * Returns a request builder for creating a `JobOffer` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `JobOffer`.
     */
    create(entity: JobOffer): CreateRequestBuilder<JobOffer>;
    /**
     * Returns a request builder for updating an entity of type `JobOffer`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `JobOffer`.
     */
    update(entity: JobOffer): UpdateRequestBuilder<JobOffer>;
}
//# sourceMappingURL=JobOfferRequestBuilder.d.ts.map