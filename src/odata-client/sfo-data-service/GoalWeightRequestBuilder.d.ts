import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { GoalWeight } from './GoalWeight';
/**
 * Request builder class for operations supported on the [[GoalWeight]] entity.
 */
export declare class GoalWeightRequestBuilder extends RequestBuilder<GoalWeight> {
    /**
     * Returns a request builder for retrieving one `GoalWeight` entity based on its keys.
     * @param planId Key property. See [[GoalWeight.planId]].
     * @param type Key property. See [[GoalWeight.type]].
     * @returns A request builder for creating requests to retrieve one `GoalWeight` entity based on its keys.
     */
    getByKey(planId: BigNumber, type: string): GetByKeyRequestBuilder<GoalWeight>;
    /**
     * Returns a request builder for querying all `GoalWeight` entities.
     * @returns A request builder for creating requests to retrieve all `GoalWeight` entities.
     */
    getAll(): GetAllRequestBuilder<GoalWeight>;
}
//# sourceMappingURL=GoalWeightRequestBuilder.d.ts.map