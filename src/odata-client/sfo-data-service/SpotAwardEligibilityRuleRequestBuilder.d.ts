import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { SpotAwardEligibilityRule } from './SpotAwardEligibilityRule';
/**
 * Request builder class for operations supported on the [[SpotAwardEligibilityRule]] entity.
 */
export declare class SpotAwardEligibilityRuleRequestBuilder extends RequestBuilder<SpotAwardEligibilityRule> {
    /**
     * Returns a request builder for retrieving one `SpotAwardEligibilityRule` entity based on its keys.
     * @param spotAwardProgramExternalCode Key property. See [[SpotAwardEligibilityRule.spotAwardProgramExternalCode]].
     * @param externalCode Key property. See [[SpotAwardEligibilityRule.externalCode]].
     * @returns A request builder for creating requests to retrieve one `SpotAwardEligibilityRule` entity based on its keys.
     */
    getByKey(spotAwardProgramExternalCode: string, externalCode: string): GetByKeyRequestBuilder<SpotAwardEligibilityRule>;
    /**
     * Returns a request builder for querying all `SpotAwardEligibilityRule` entities.
     * @returns A request builder for creating requests to retrieve all `SpotAwardEligibilityRule` entities.
     */
    getAll(): GetAllRequestBuilder<SpotAwardEligibilityRule>;
    /**
     * Returns a request builder for creating a `SpotAwardEligibilityRule` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SpotAwardEligibilityRule`.
     */
    create(entity: SpotAwardEligibilityRule): CreateRequestBuilder<SpotAwardEligibilityRule>;
    /**
     * Returns a request builder for updating an entity of type `SpotAwardEligibilityRule`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SpotAwardEligibilityRule`.
     */
    update(entity: SpotAwardEligibilityRule): UpdateRequestBuilder<SpotAwardEligibilityRule>;
    /**
     * Returns a request builder for deleting an entity of type `SpotAwardEligibilityRule`.
     * @param spotAwardProgramExternalCode Key property. See [[SpotAwardEligibilityRule.spotAwardProgramExternalCode]].
     * @param externalCode Key property. See [[SpotAwardEligibilityRule.externalCode]].
     * @returns A request builder for creating requests that delete an entity of type `SpotAwardEligibilityRule`.
     */
    delete(spotAwardProgramExternalCode: string, externalCode: string): DeleteRequestBuilder<SpotAwardEligibilityRule>;
    /**
     * Returns a request builder for deleting an entity of type `SpotAwardEligibilityRule`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `SpotAwardEligibilityRule` by taking the entity as a parameter.
     */
    delete(entity: SpotAwardEligibilityRule): DeleteRequestBuilder<SpotAwardEligibilityRule>;
}
//# sourceMappingURL=SpotAwardEligibilityRuleRequestBuilder.d.ts.map