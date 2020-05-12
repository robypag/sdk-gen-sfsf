import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { JobOfferFieldControls } from './JobOfferFieldControls';
/**
 * Request builder class for operations supported on the [[JobOfferFieldControls]] entity.
 */
export declare class JobOfferFieldControlsRequestBuilder extends RequestBuilder<JobOfferFieldControls> {
    /**
     * Returns a request builder for retrieving one `JobOfferFieldControls` entity based on its keys.
     * @param offerApprovalId Key property. See [[JobOfferFieldControls.offerApprovalId]].
     * @returns A request builder for creating requests to retrieve one `JobOfferFieldControls` entity based on its keys.
     */
    getByKey(offerApprovalId: number): GetByKeyRequestBuilder<JobOfferFieldControls>;
    /**
     * Returns a request builder for querying all `JobOfferFieldControls` entities.
     * @returns A request builder for creating requests to retrieve all `JobOfferFieldControls` entities.
     */
    getAll(): GetAllRequestBuilder<JobOfferFieldControls>;
}
//# sourceMappingURL=JobOfferFieldControlsRequestBuilder.d.ts.map