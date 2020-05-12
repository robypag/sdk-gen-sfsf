import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { WfRequestComments } from './WfRequestComments';
/**
 * Request builder class for operations supported on the [[WfRequestComments]] entity.
 */
export declare class WfRequestCommentsRequestBuilder extends RequestBuilder<WfRequestComments> {
    /**
     * Returns a request builder for retrieving one `WfRequestComments` entity based on its keys.
     * @param wfRequestCommentId Key property. See [[WfRequestComments.wfRequestCommentId]].
     * @returns A request builder for creating requests to retrieve one `WfRequestComments` entity based on its keys.
     */
    getByKey(wfRequestCommentId: BigNumber): GetByKeyRequestBuilder<WfRequestComments>;
    /**
     * Returns a request builder for querying all `WfRequestComments` entities.
     * @returns A request builder for creating requests to retrieve all `WfRequestComments` entities.
     */
    getAll(): GetAllRequestBuilder<WfRequestComments>;
}
//# sourceMappingURL=WfRequestCommentsRequestBuilder.d.ts.map