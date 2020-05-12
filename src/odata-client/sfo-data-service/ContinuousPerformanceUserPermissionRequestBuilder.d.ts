import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { ContinuousPerformanceUserPermission } from './ContinuousPerformanceUserPermission';
/**
 * Request builder class for operations supported on the [[ContinuousPerformanceUserPermission]] entity.
 */
export declare class ContinuousPerformanceUserPermissionRequestBuilder extends RequestBuilder<ContinuousPerformanceUserPermission> {
    /**
     * Returns a request builder for retrieving one `ContinuousPerformanceUserPermission` entity based on its keys.
     * @param permStringValue Key property. See [[ContinuousPerformanceUserPermission.permStringValue]].
     * @param permType Key property. See [[ContinuousPerformanceUserPermission.permType]].
     * @param targetUserId Key property. See [[ContinuousPerformanceUserPermission.targetUserId]].
     * @returns A request builder for creating requests to retrieve one `ContinuousPerformanceUserPermission` entity based on its keys.
     */
    getByKey(permStringValue: string, permType: string, targetUserId: string): GetByKeyRequestBuilder<ContinuousPerformanceUserPermission>;
    /**
     * Returns a request builder for querying all `ContinuousPerformanceUserPermission` entities.
     * @returns A request builder for creating requests to retrieve all `ContinuousPerformanceUserPermission` entities.
     */
    getAll(): GetAllRequestBuilder<ContinuousPerformanceUserPermission>;
}
//# sourceMappingURL=ContinuousPerformanceUserPermissionRequestBuilder.d.ts.map