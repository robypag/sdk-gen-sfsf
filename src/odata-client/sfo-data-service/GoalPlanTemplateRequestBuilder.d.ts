import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { GoalPlanTemplate } from './GoalPlanTemplate';
/**
 * Request builder class for operations supported on the [[GoalPlanTemplate]] entity.
 */
export declare class GoalPlanTemplateRequestBuilder extends RequestBuilder<GoalPlanTemplate> {
    /**
     * Returns a request builder for retrieving one `GoalPlanTemplate` entity based on its keys.
     * @param id Key property. See [[GoalPlanTemplate.id]].
     * @returns A request builder for creating requests to retrieve one `GoalPlanTemplate` entity based on its keys.
     */
    getByKey(id: BigNumber): GetByKeyRequestBuilder<GoalPlanTemplate>;
    /**
     * Returns a request builder for querying all `GoalPlanTemplate` entities.
     * @returns A request builder for creating requests to retrieve all `GoalPlanTemplate` entities.
     */
    getAll(): GetAllRequestBuilder<GoalPlanTemplate>;
}
//# sourceMappingURL=GoalPlanTemplateRequestBuilder.d.ts.map