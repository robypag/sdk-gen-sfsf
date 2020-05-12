import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { EpProfileUserInfoPortlet } from './EpProfileUserInfoPortlet';
/**
 * Request builder class for operations supported on the [[EpProfileUserInfoPortlet]] entity.
 */
export declare class EpProfileUserInfoPortletRequestBuilder extends RequestBuilder<EpProfileUserInfoPortlet> {
    /**
     * Returns a request builder for retrieving one `EpProfileUserInfoPortlet` entity based on its keys.
     * @param dashboardId Key property. See [[EpProfileUserInfoPortlet.dashboardId]].
     * @param portletId Key property. See [[EpProfileUserInfoPortlet.portletId]].
     * @param userId Key property. See [[EpProfileUserInfoPortlet.userId]].
     * @returns A request builder for creating requests to retrieve one `EpProfileUserInfoPortlet` entity based on its keys.
     */
    getByKey(dashboardId: string, portletId: string, userId: string): GetByKeyRequestBuilder<EpProfileUserInfoPortlet>;
    /**
     * Returns a request builder for querying all `EpProfileUserInfoPortlet` entities.
     * @returns A request builder for creating requests to retrieve all `EpProfileUserInfoPortlet` entities.
     */
    getAll(): GetAllRequestBuilder<EpProfileUserInfoPortlet>;
}
//# sourceMappingURL=EpProfileUserInfoPortletRequestBuilder.d.ts.map