import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { JobApplicationInterviewFieldControls } from './JobApplicationInterviewFieldControls';
/**
 * Request builder class for operations supported on the [[JobApplicationInterviewFieldControls]] entity.
 */
export declare class JobApplicationInterviewFieldControlsRequestBuilder extends RequestBuilder<JobApplicationInterviewFieldControls> {
    /**
     * Returns a request builder for retrieving one `JobApplicationInterviewFieldControls` entity based on its keys.
     * @param applicationInterviewId Key property. See [[JobApplicationInterviewFieldControls.applicationInterviewId]].
     * @returns A request builder for creating requests to retrieve one `JobApplicationInterviewFieldControls` entity based on its keys.
     */
    getByKey(applicationInterviewId: number): GetByKeyRequestBuilder<JobApplicationInterviewFieldControls>;
    /**
     * Returns a request builder for querying all `JobApplicationInterviewFieldControls` entities.
     * @returns A request builder for creating requests to retrieve all `JobApplicationInterviewFieldControls` entities.
     */
    getAll(): GetAllRequestBuilder<JobApplicationInterviewFieldControls>;
}
//# sourceMappingURL=JobApplicationInterviewFieldControlsRequestBuilder.d.ts.map