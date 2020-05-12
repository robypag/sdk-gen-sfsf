import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { SimpleDevGoal } from './SimpleDevGoal';
/**
 * Request builder class for operations supported on the [[SimpleDevGoal]] entity.
 */
export declare class SimpleDevGoalRequestBuilder extends RequestBuilder<SimpleDevGoal> {
    /**
     * Returns a request builder for retrieving one `SimpleDevGoal` entity based on its keys.
     * @param id Key property. See [[SimpleDevGoal.id]].
     * @returns A request builder for creating requests to retrieve one `SimpleDevGoal` entity based on its keys.
     */
    getByKey(id: BigNumber): GetByKeyRequestBuilder<SimpleDevGoal>;
    /**
     * Returns a request builder for querying all `SimpleDevGoal` entities.
     * @returns A request builder for creating requests to retrieve all `SimpleDevGoal` entities.
     */
    getAll(): GetAllRequestBuilder<SimpleDevGoal>;
}
//# sourceMappingURL=SimpleDevGoalRequestBuilder.d.ts.map