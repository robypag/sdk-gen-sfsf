import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { RbpRule } from './RbpRule';
/**
 * Request builder class for operations supported on the [[RbpRule]] entity.
 */
export declare class RbpRuleRequestBuilder extends RequestBuilder<RbpRule> {
    /**
     * Returns a request builder for retrieving one `RbpRule` entity based on its keys.
     * @param ruleId Key property. See [[RbpRule.ruleId]].
     * @returns A request builder for creating requests to retrieve one `RbpRule` entity based on its keys.
     */
    getByKey(ruleId: BigNumber): GetByKeyRequestBuilder<RbpRule>;
    /**
     * Returns a request builder for querying all `RbpRule` entities.
     * @returns A request builder for creating requests to retrieve all `RbpRule` entities.
     */
    getAll(): GetAllRequestBuilder<RbpRule>;
    /**
     * Returns a request builder for deleting an entity of type `RbpRule`.
     * @param ruleId Key property. See [[RbpRule.ruleId]].
     * @returns A request builder for creating requests that delete an entity of type `RbpRule`.
     */
    delete(ruleId: BigNumber): DeleteRequestBuilder<RbpRule>;
    /**
     * Returns a request builder for deleting an entity of type `RbpRule`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `RbpRule` by taking the entity as a parameter.
     */
    delete(entity: RbpRule): DeleteRequestBuilder<RbpRule>;
}
//# sourceMappingURL=RbpRuleRequestBuilder.d.ts.map