import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { WfRequestStep } from './WfRequestStep';
/**
 * Request builder class for operations supported on the [[WfRequestStep]] entity.
 */
export declare class WfRequestStepRequestBuilder extends RequestBuilder<WfRequestStep> {
    /**
     * Returns a request builder for retrieving one `WfRequestStep` entity based on its keys.
     * @param wfRequestStepId Key property. See [[WfRequestStep.wfRequestStepId]].
     * @returns A request builder for creating requests to retrieve one `WfRequestStep` entity based on its keys.
     */
    getByKey(wfRequestStepId: BigNumber): GetByKeyRequestBuilder<WfRequestStep>;
    /**
     * Returns a request builder for querying all `WfRequestStep` entities.
     * @returns A request builder for creating requests to retrieve all `WfRequestStep` entities.
     */
    getAll(): GetAllRequestBuilder<WfRequestStep>;
}
//# sourceMappingURL=WfRequestStepRequestBuilder.d.ts.map