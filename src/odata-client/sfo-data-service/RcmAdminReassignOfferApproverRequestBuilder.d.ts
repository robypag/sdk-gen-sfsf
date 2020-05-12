import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder } from '@sap-cloud-sdk/core';
import { RcmAdminReassignOfferApprover } from './RcmAdminReassignOfferApprover';
/**
 * Request builder class for operations supported on the [[RcmAdminReassignOfferApprover]] entity.
 */
export declare class RcmAdminReassignOfferApproverRequestBuilder extends RequestBuilder<RcmAdminReassignOfferApprover> {
    /**
     * Returns a request builder for retrieving one `RcmAdminReassignOfferApprover` entity based on its keys.
     * @param applicationId Key property. See [[RcmAdminReassignOfferApprover.applicationId]].
     * @param currUserId Key property. See [[RcmAdminReassignOfferApprover.currUserId]].
     * @param offerDetailId Key property. See [[RcmAdminReassignOfferApprover.offerDetailId]].
     * @returns A request builder for creating requests to retrieve one `RcmAdminReassignOfferApprover` entity based on its keys.
     */
    getByKey(applicationId: BigNumber, currUserId: string, offerDetailId: BigNumber): GetByKeyRequestBuilder<RcmAdminReassignOfferApprover>;
    /**
     * Returns a request builder for querying all `RcmAdminReassignOfferApprover` entities.
     * @returns A request builder for creating requests to retrieve all `RcmAdminReassignOfferApprover` entities.
     */
    getAll(): GetAllRequestBuilder<RcmAdminReassignOfferApprover>;
    /**
     * Returns a request builder for creating a `RcmAdminReassignOfferApprover` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `RcmAdminReassignOfferApprover`.
     */
    create(entity: RcmAdminReassignOfferApprover): CreateRequestBuilder<RcmAdminReassignOfferApprover>;
}
//# sourceMappingURL=RcmAdminReassignOfferApproverRequestBuilder.d.ts.map