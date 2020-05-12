import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { WorkflowAllowedActionList } from './WorkflowAllowedActionList';
/**
 * Request builder class for operations supported on the [[WorkflowAllowedActionList]] entity.
 */
export declare class WorkflowAllowedActionListRequestBuilder extends RequestBuilder<WorkflowAllowedActionList> {
    /**
     * Returns a request builder for retrieving one `WorkflowAllowedActionList` entity based on its keys.
     * @param wfRequestId Key property. See [[WorkflowAllowedActionList.wfRequestId]].
     * @returns A request builder for creating requests to retrieve one `WorkflowAllowedActionList` entity based on its keys.
     */
    getByKey(wfRequestId: BigNumber): GetByKeyRequestBuilder<WorkflowAllowedActionList>;
    /**
     * Returns a request builder for querying all `WorkflowAllowedActionList` entities.
     * @returns A request builder for creating requests to retrieve all `WorkflowAllowedActionList` entities.
     */
    getAll(): GetAllRequestBuilder<WorkflowAllowedActionList>;
}
//# sourceMappingURL=WorkflowAllowedActionListRequestBuilder.d.ts.map