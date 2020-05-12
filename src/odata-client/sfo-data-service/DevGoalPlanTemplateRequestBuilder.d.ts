import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { DevGoalPlanTemplate } from './DevGoalPlanTemplate';
/**
 * Request builder class for operations supported on the [[DevGoalPlanTemplate]] entity.
 */
export declare class DevGoalPlanTemplateRequestBuilder extends RequestBuilder<DevGoalPlanTemplate> {
    /**
     * Returns a request builder for retrieving one `DevGoalPlanTemplate` entity based on its keys.
     * @param id Key property. See [[DevGoalPlanTemplate.id]].
     * @returns A request builder for creating requests to retrieve one `DevGoalPlanTemplate` entity based on its keys.
     */
    getByKey(id: BigNumber): GetByKeyRequestBuilder<DevGoalPlanTemplate>;
    /**
     * Returns a request builder for querying all `DevGoalPlanTemplate` entities.
     * @returns A request builder for creating requests to retrieve all `DevGoalPlanTemplate` entities.
     */
    getAll(): GetAllRequestBuilder<DevGoalPlanTemplate>;
}
//# sourceMappingURL=DevGoalPlanTemplateRequestBuilder.d.ts.map