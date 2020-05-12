import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { SimpleGoal } from './SimpleGoal';
/**
 * Request builder class for operations supported on the [[SimpleGoal]] entity.
 */
export declare class SimpleGoalRequestBuilder extends RequestBuilder<SimpleGoal> {
    /**
     * Returns a request builder for retrieving one `SimpleGoal` entity based on its keys.
     * @param id Key property. See [[SimpleGoal.id]].
     * @returns A request builder for creating requests to retrieve one `SimpleGoal` entity based on its keys.
     */
    getByKey(id: BigNumber): GetByKeyRequestBuilder<SimpleGoal>;
    /**
     * Returns a request builder for querying all `SimpleGoal` entities.
     * @returns A request builder for creating requests to retrieve all `SimpleGoal` entities.
     */
    getAll(): GetAllRequestBuilder<SimpleGoal>;
}
//# sourceMappingURL=SimpleGoalRequestBuilder.d.ts.map