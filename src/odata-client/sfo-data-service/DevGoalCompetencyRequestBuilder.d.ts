import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { DevGoalCompetency } from './DevGoalCompetency';
/**
 * Request builder class for operations supported on the [[DevGoalCompetency]] entity.
 */
export declare class DevGoalCompetencyRequestBuilder extends RequestBuilder<DevGoalCompetency> {
    /**
     * Returns a request builder for retrieving one `DevGoalCompetency` entity based on its keys.
     * @param id Key property. See [[DevGoalCompetency.id]].
     * @returns A request builder for creating requests to retrieve one `DevGoalCompetency` entity based on its keys.
     */
    getByKey(id: BigNumber): GetByKeyRequestBuilder<DevGoalCompetency>;
    /**
     * Returns a request builder for querying all `DevGoalCompetency` entities.
     * @returns A request builder for creating requests to retrieve all `DevGoalCompetency` entities.
     */
    getAll(): GetAllRequestBuilder<DevGoalCompetency>;
}
//# sourceMappingURL=DevGoalCompetencyRequestBuilder.d.ts.map