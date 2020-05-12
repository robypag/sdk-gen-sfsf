import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { EpProfileView } from './EpProfileView';
/**
 * Request builder class for operations supported on the [[EpProfileView]] entity.
 */
export declare class EpProfileViewRequestBuilder extends RequestBuilder<EpProfileView> {
    /**
     * Returns a request builder for retrieving one `EpProfileView` entity based on its keys.
     * @param dashboardId Key property. See [[EpProfileView.dashboardId]].
     * @param userId Key property. See [[EpProfileView.userId]].
     * @returns A request builder for creating requests to retrieve one `EpProfileView` entity based on its keys.
     */
    getByKey(dashboardId: string, userId: string): GetByKeyRequestBuilder<EpProfileView>;
    /**
     * Returns a request builder for querying all `EpProfileView` entities.
     * @returns A request builder for creating requests to retrieve all `EpProfileView` entities.
     */
    getAll(): GetAllRequestBuilder<EpProfileView>;
}
//# sourceMappingURL=EpProfileViewRequestBuilder.d.ts.map