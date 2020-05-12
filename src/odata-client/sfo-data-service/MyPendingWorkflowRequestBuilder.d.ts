import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { MyPendingWorkflow } from './MyPendingWorkflow';
/**
 * Request builder class for operations supported on the [[MyPendingWorkflow]] entity.
 */
export declare class MyPendingWorkflowRequestBuilder extends RequestBuilder<MyPendingWorkflow> {
    /**
     * Returns a request builder for retrieving one `MyPendingWorkflow` entity based on its keys.
     * @param wfRequestId Key property. See [[MyPendingWorkflow.wfRequestId]].
     * @returns A request builder for creating requests to retrieve one `MyPendingWorkflow` entity based on its keys.
     */
    getByKey(wfRequestId: string): GetByKeyRequestBuilder<MyPendingWorkflow>;
    /**
     * Returns a request builder for querying all `MyPendingWorkflow` entities.
     * @returns A request builder for creating requests to retrieve all `MyPendingWorkflow` entities.
     */
    getAll(): GetAllRequestBuilder<MyPendingWorkflow>;
}
//# sourceMappingURL=MyPendingWorkflowRequestBuilder.d.ts.map