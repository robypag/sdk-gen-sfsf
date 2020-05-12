import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { EmpCostDistribution } from './EmpCostDistribution';
/**
 * Request builder class for operations supported on the [[EmpCostDistribution]] entity.
 */
export declare class EmpCostDistributionRequestBuilder extends RequestBuilder<EmpCostDistribution> {
    /**
     * Returns a request builder for retrieving one `EmpCostDistribution` entity based on its keys.
     * @param effectiveStartDate Key property. See [[EmpCostDistribution.effectiveStartDate]].
     * @param usersSysId Key property. See [[EmpCostDistribution.usersSysId]].
     * @returns A request builder for creating requests to retrieve one `EmpCostDistribution` entity based on its keys.
     */
    getByKey(effectiveStartDate: Moment, usersSysId: string): GetByKeyRequestBuilder<EmpCostDistribution>;
    /**
     * Returns a request builder for querying all `EmpCostDistribution` entities.
     * @returns A request builder for creating requests to retrieve all `EmpCostDistribution` entities.
     */
    getAll(): GetAllRequestBuilder<EmpCostDistribution>;
    /**
     * Returns a request builder for creating a `EmpCostDistribution` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `EmpCostDistribution`.
     */
    create(entity: EmpCostDistribution): CreateRequestBuilder<EmpCostDistribution>;
    /**
     * Returns a request builder for updating an entity of type `EmpCostDistribution`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `EmpCostDistribution`.
     */
    update(entity: EmpCostDistribution): UpdateRequestBuilder<EmpCostDistribution>;
    /**
     * Returns a request builder for deleting an entity of type `EmpCostDistribution`.
     * @param effectiveStartDate Key property. See [[EmpCostDistribution.effectiveStartDate]].
     * @param usersSysId Key property. See [[EmpCostDistribution.usersSysId]].
     * @returns A request builder for creating requests that delete an entity of type `EmpCostDistribution`.
     */
    delete(effectiveStartDate: Moment, usersSysId: string): DeleteRequestBuilder<EmpCostDistribution>;
    /**
     * Returns a request builder for deleting an entity of type `EmpCostDistribution`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `EmpCostDistribution` by taking the entity as a parameter.
     */
    delete(entity: EmpCostDistribution): DeleteRequestBuilder<EmpCostDistribution>;
}
//# sourceMappingURL=EmpCostDistributionRequestBuilder.d.ts.map