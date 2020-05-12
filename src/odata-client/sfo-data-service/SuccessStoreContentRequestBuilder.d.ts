import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { SuccessStoreContent } from './SuccessStoreContent';
/**
 * Request builder class for operations supported on the [[SuccessStoreContent]] entity.
 */
export declare class SuccessStoreContentRequestBuilder extends RequestBuilder<SuccessStoreContent> {
    /**
     * Returns a request builder for retrieving one `SuccessStoreContent` entity based on its keys.
     * @param contentId Key property. See [[SuccessStoreContent.contentId]].
     * @returns A request builder for creating requests to retrieve one `SuccessStoreContent` entity based on its keys.
     */
    getByKey(contentId: BigNumber): GetByKeyRequestBuilder<SuccessStoreContent>;
    /**
     * Returns a request builder for querying all `SuccessStoreContent` entities.
     * @returns A request builder for creating requests to retrieve all `SuccessStoreContent` entities.
     */
    getAll(): GetAllRequestBuilder<SuccessStoreContent>;
}
//# sourceMappingURL=SuccessStoreContentRequestBuilder.d.ts.map