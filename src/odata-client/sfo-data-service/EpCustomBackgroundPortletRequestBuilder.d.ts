import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { EpCustomBackgroundPortlet } from './EpCustomBackgroundPortlet';
/**
 * Request builder class for operations supported on the [[EpCustomBackgroundPortlet]] entity.
 */
export declare class EpCustomBackgroundPortletRequestBuilder extends RequestBuilder<EpCustomBackgroundPortlet> {
    /**
     * Returns a request builder for retrieving one `EpCustomBackgroundPortlet` entity based on its keys.
     * @param backgroundElementId Key property. See [[EpCustomBackgroundPortlet.backgroundElementId]].
     * @returns A request builder for creating requests to retrieve one `EpCustomBackgroundPortlet` entity based on its keys.
     */
    getByKey(backgroundElementId: string): GetByKeyRequestBuilder<EpCustomBackgroundPortlet>;
    /**
     * Returns a request builder for querying all `EpCustomBackgroundPortlet` entities.
     * @returns A request builder for creating requests to retrieve all `EpCustomBackgroundPortlet` entities.
     */
    getAll(): GetAllRequestBuilder<EpCustomBackgroundPortlet>;
}
//# sourceMappingURL=EpCustomBackgroundPortletRequestBuilder.d.ts.map