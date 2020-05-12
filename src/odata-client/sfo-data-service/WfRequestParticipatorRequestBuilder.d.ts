import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { WfRequestParticipator } from './WfRequestParticipator';
/**
 * Request builder class for operations supported on the [[WfRequestParticipator]] entity.
 */
export declare class WfRequestParticipatorRequestBuilder extends RequestBuilder<WfRequestParticipator> {
    /**
     * Returns a request builder for retrieving one `WfRequestParticipator` entity based on its keys.
     * @param wfRequestParticipatorId Key property. See [[WfRequestParticipator.wfRequestParticipatorId]].
     * @returns A request builder for creating requests to retrieve one `WfRequestParticipator` entity based on its keys.
     */
    getByKey(wfRequestParticipatorId: BigNumber): GetByKeyRequestBuilder<WfRequestParticipator>;
    /**
     * Returns a request builder for querying all `WfRequestParticipator` entities.
     * @returns A request builder for creating requests to retrieve all `WfRequestParticipator` entities.
     */
    getAll(): GetAllRequestBuilder<WfRequestParticipator>;
}
//# sourceMappingURL=WfRequestParticipatorRequestBuilder.d.ts.map