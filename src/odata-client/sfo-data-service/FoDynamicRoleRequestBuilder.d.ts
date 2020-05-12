import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FoDynamicRole } from './FoDynamicRole';
/**
 * Request builder class for operations supported on the [[FoDynamicRole]] entity.
 */
export declare class FoDynamicRoleRequestBuilder extends RequestBuilder<FoDynamicRole> {
    /**
     * Returns a request builder for retrieving one `FoDynamicRole` entity based on its keys.
     * @param dynamicRoleAssignmentId Key property. See [[FoDynamicRole.dynamicRoleAssignmentId]].
     * @returns A request builder for creating requests to retrieve one `FoDynamicRole` entity based on its keys.
     */
    getByKey(dynamicRoleAssignmentId: BigNumber): GetByKeyRequestBuilder<FoDynamicRole>;
    /**
     * Returns a request builder for querying all `FoDynamicRole` entities.
     * @returns A request builder for creating requests to retrieve all `FoDynamicRole` entities.
     */
    getAll(): GetAllRequestBuilder<FoDynamicRole>;
}
//# sourceMappingURL=FoDynamicRoleRequestBuilder.d.ts.map