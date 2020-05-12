import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { DevGoalPermission_2005 } from './DevGoalPermission_2005';
/**
 * Request builder class for operations supported on the [[DevGoalPermission_2005]] entity.
 */
export declare class DevGoalPermission_2005RequestBuilder extends RequestBuilder<DevGoalPermission_2005> {
    /**
     * Returns a request builder for retrieving one `DevGoalPermission_2005` entity based on its keys.
     * @param id Key property. See [[DevGoalPermission_2005.id]].
     * @returns A request builder for creating requests to retrieve one `DevGoalPermission_2005` entity based on its keys.
     */
    getByKey(id: BigNumber): GetByKeyRequestBuilder<DevGoalPermission_2005>;
    /**
     * Returns a request builder for querying all `DevGoalPermission_2005` entities.
     * @returns A request builder for creating requests to retrieve all `DevGoalPermission_2005` entities.
     */
    getAll(): GetAllRequestBuilder<DevGoalPermission_2005>;
}
//# sourceMappingURL=DevGoalPermission_2005RequestBuilder.d.ts.map