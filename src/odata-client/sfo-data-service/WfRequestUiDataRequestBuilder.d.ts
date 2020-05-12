import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { WfRequestUiData } from './WfRequestUiData';
/**
 * Request builder class for operations supported on the [[WfRequestUiData]] entity.
 */
export declare class WfRequestUiDataRequestBuilder extends RequestBuilder<WfRequestUiData> {
    /**
     * Returns a request builder for retrieving one `WfRequestUiData` entity based on its keys.
     * @param wfRequestId Key property. See [[WfRequestUiData.wfRequestId]].
     * @returns A request builder for creating requests to retrieve one `WfRequestUiData` entity based on its keys.
     */
    getByKey(wfRequestId: BigNumber): GetByKeyRequestBuilder<WfRequestUiData>;
    /**
     * Returns a request builder for querying all `WfRequestUiData` entities.
     * @returns A request builder for creating requests to retrieve all `WfRequestUiData` entities.
     */
    getAll(): GetAllRequestBuilder<WfRequestUiData>;
}
//# sourceMappingURL=WfRequestUiDataRequestBuilder.d.ts.map