import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { JobReqTemplate_Pipeline_Job_Requisition } from './JobReqTemplate_Pipeline_Job_Requisition';
/**
 * Request builder class for operations supported on the [[JobReqTemplate_Pipeline_Job_Requisition]] entity.
 */
export declare class JobReqTemplate_Pipeline_Job_RequisitionRequestBuilder extends RequestBuilder<JobReqTemplate_Pipeline_Job_Requisition> {
    /**
     * Returns a request builder for retrieving one `JobReqTemplate_Pipeline_Job_Requisition` entity based on its keys.
     * @param templateId Key property. See [[JobReqTemplate_Pipeline_Job_Requisition.templateId]].
     * @returns A request builder for creating requests to retrieve one `JobReqTemplate_Pipeline_Job_Requisition` entity based on its keys.
     */
    getByKey(templateId: BigNumber): GetByKeyRequestBuilder<JobReqTemplate_Pipeline_Job_Requisition>;
    /**
     * Returns a request builder for querying all `JobReqTemplate_Pipeline_Job_Requisition` entities.
     * @returns A request builder for creating requests to retrieve all `JobReqTemplate_Pipeline_Job_Requisition` entities.
     */
    getAll(): GetAllRequestBuilder<JobReqTemplate_Pipeline_Job_Requisition>;
}
//# sourceMappingURL=JobReqTemplate_Pipeline_Job_RequisitionRequestBuilder.d.ts.map