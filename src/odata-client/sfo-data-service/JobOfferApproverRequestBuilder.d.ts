import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { JobOfferApprover } from './JobOfferApprover';
/**
 * Request builder class for operations supported on the [[JobOfferApprover]] entity.
 */
export declare class JobOfferApproverRequestBuilder extends RequestBuilder<JobOfferApprover> {
    /**
     * Returns a request builder for retrieving one `JobOfferApprover` entity based on its keys.
     * @param offerApproverId Key property. See [[JobOfferApprover.offerApproverId]].
     * @returns A request builder for creating requests to retrieve one `JobOfferApprover` entity based on its keys.
     */
    getByKey(offerApproverId: BigNumber): GetByKeyRequestBuilder<JobOfferApprover>;
    /**
     * Returns a request builder for querying all `JobOfferApprover` entities.
     * @returns A request builder for creating requests to retrieve all `JobOfferApprover` entities.
     */
    getAll(): GetAllRequestBuilder<JobOfferApprover>;
}
//# sourceMappingURL=JobOfferApproverRequestBuilder.d.ts.map