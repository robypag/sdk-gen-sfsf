import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { GoalEnum } from './GoalEnum';
/**
 * Request builder class for operations supported on the [[GoalEnum]] entity.
 */
export declare class GoalEnumRequestBuilder extends RequestBuilder<GoalEnum> {
    /**
     * Returns a request builder for retrieving one `GoalEnum` entity based on its keys.
     * @param fieldId Key property. See [[GoalEnum.fieldId]].
     * @param planId Key property. See [[GoalEnum.planId]].
     * @param value Key property. See [[GoalEnum.value]].
     * @returns A request builder for creating requests to retrieve one `GoalEnum` entity based on its keys.
     */
    getByKey(fieldId: string, planId: BigNumber, value: string): GetByKeyRequestBuilder<GoalEnum>;
    /**
     * Returns a request builder for querying all `GoalEnum` entities.
     * @returns A request builder for creating requests to retrieve all `GoalEnum` entities.
     */
    getAll(): GetAllRequestBuilder<GoalEnum>;
}
//# sourceMappingURL=GoalEnumRequestBuilder.d.ts.map