import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { JobAppTemplate_Candidate_Detail_Global } from './JobAppTemplate_Candidate_Detail_Global';
/**
 * Request builder class for operations supported on the [[JobAppTemplate_Candidate_Detail_Global]] entity.
 */
export declare class JobAppTemplate_Candidate_Detail_GlobalRequestBuilder extends RequestBuilder<JobAppTemplate_Candidate_Detail_Global> {
    /**
     * Returns a request builder for retrieving one `JobAppTemplate_Candidate_Detail_Global` entity based on its keys.
     * @param templateId Key property. See [[JobAppTemplate_Candidate_Detail_Global.templateId]].
     * @returns A request builder for creating requests to retrieve one `JobAppTemplate_Candidate_Detail_Global` entity based on its keys.
     */
    getByKey(templateId: BigNumber): GetByKeyRequestBuilder<JobAppTemplate_Candidate_Detail_Global>;
    /**
     * Returns a request builder for querying all `JobAppTemplate_Candidate_Detail_Global` entities.
     * @returns A request builder for creating requests to retrieve all `JobAppTemplate_Candidate_Detail_Global` entities.
     */
    getAll(): GetAllRequestBuilder<JobAppTemplate_Candidate_Detail_Global>;
}
//# sourceMappingURL=JobAppTemplate_Candidate_Detail_GlobalRequestBuilder.d.ts.map