import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { WfRequest } from './WfRequest';
/**
 * Request builder class for operations supported on the [[WfRequest]] entity.
 */
export declare class WfRequestRequestBuilder extends RequestBuilder<WfRequest> {
    /**
     * Returns a request builder for retrieving one `WfRequest` entity based on its keys.
     * @param wfRequestId Key property. See [[WfRequest.wfRequestId]].
     * @returns A request builder for creating requests to retrieve one `WfRequest` entity based on its keys.
     */
    getByKey(wfRequestId: BigNumber): GetByKeyRequestBuilder<WfRequest>;
    /**
     * Returns a request builder for querying all `WfRequest` entities.
     * @returns A request builder for creating requests to retrieve all `WfRequest` entities.
     */
    getAll(): GetAllRequestBuilder<WfRequest>;
}
//# sourceMappingURL=WfRequestRequestBuilder.d.ts.map