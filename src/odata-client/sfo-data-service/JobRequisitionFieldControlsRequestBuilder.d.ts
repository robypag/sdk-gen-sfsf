import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { JobRequisitionFieldControls } from './JobRequisitionFieldControls';
/**
 * Request builder class for operations supported on the [[JobRequisitionFieldControls]] entity.
 */
export declare class JobRequisitionFieldControlsRequestBuilder extends RequestBuilder<JobRequisitionFieldControls> {
    /**
     * Returns a request builder for retrieving one `JobRequisitionFieldControls` entity based on its keys.
     * @param jobReqId Key property. See [[JobRequisitionFieldControls.jobReqId]].
     * @returns A request builder for creating requests to retrieve one `JobRequisitionFieldControls` entity based on its keys.
     */
    getByKey(jobReqId: number): GetByKeyRequestBuilder<JobRequisitionFieldControls>;
    /**
     * Returns a request builder for querying all `JobRequisitionFieldControls` entities.
     * @returns A request builder for creating requests to retrieve all `JobRequisitionFieldControls` entities.
     */
    getAll(): GetAllRequestBuilder<JobRequisitionFieldControls>;
}
//# sourceMappingURL=JobRequisitionFieldControlsRequestBuilder.d.ts.map