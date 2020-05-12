import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { DynamicGroup } from './DynamicGroup';
/**
 * Request builder class for operations supported on the [[DynamicGroup]] entity.
 */
export declare class DynamicGroupRequestBuilder extends RequestBuilder<DynamicGroup> {
    /**
     * Returns a request builder for retrieving one `DynamicGroup` entity based on its keys.
     * @param groupId Key property. See [[DynamicGroup.groupId]].
     * @returns A request builder for creating requests to retrieve one `DynamicGroup` entity based on its keys.
     */
    getByKey(groupId: BigNumber): GetByKeyRequestBuilder<DynamicGroup>;
    /**
     * Returns a request builder for querying all `DynamicGroup` entities.
     * @returns A request builder for creating requests to retrieve all `DynamicGroup` entities.
     */
    getAll(): GetAllRequestBuilder<DynamicGroup>;
}
//# sourceMappingURL=DynamicGroupRequestBuilder.d.ts.map