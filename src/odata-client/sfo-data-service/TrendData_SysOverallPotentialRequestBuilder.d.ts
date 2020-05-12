import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { TrendData_SysOverallPotential } from './TrendData_SysOverallPotential';
/**
 * Request builder class for operations supported on the [[TrendData_SysOverallPotential]] entity.
 */
export declare class TrendData_SysOverallPotentialRequestBuilder extends RequestBuilder<TrendData_SysOverallPotential> {
    /**
     * Returns a request builder for retrieving one `TrendData_SysOverallPotential` entity based on its keys.
     * @param id Key property. See [[TrendData_SysOverallPotential.id]].
     * @returns A request builder for creating requests to retrieve one `TrendData_SysOverallPotential` entity based on its keys.
     */
    getByKey(id: BigNumber): GetByKeyRequestBuilder<TrendData_SysOverallPotential>;
    /**
     * Returns a request builder for querying all `TrendData_SysOverallPotential` entities.
     * @returns A request builder for creating requests to retrieve all `TrendData_SysOverallPotential` entities.
     */
    getAll(): GetAllRequestBuilder<TrendData_SysOverallPotential>;
    /**
     * Returns a request builder for creating a `TrendData_SysOverallPotential` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `TrendData_SysOverallPotential`.
     */
    create(entity: TrendData_SysOverallPotential): CreateRequestBuilder<TrendData_SysOverallPotential>;
    /**
     * Returns a request builder for updating an entity of type `TrendData_SysOverallPotential`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `TrendData_SysOverallPotential`.
     */
    update(entity: TrendData_SysOverallPotential): UpdateRequestBuilder<TrendData_SysOverallPotential>;
    /**
     * Returns a request builder for deleting an entity of type `TrendData_SysOverallPotential`.
     * @param id Key property. See [[TrendData_SysOverallPotential.id]].
     * @returns A request builder for creating requests that delete an entity of type `TrendData_SysOverallPotential`.
     */
    delete(id: BigNumber): DeleteRequestBuilder<TrendData_SysOverallPotential>;
    /**
     * Returns a request builder for deleting an entity of type `TrendData_SysOverallPotential`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `TrendData_SysOverallPotential` by taking the entity as a parameter.
     */
    delete(entity: TrendData_SysOverallPotential): DeleteRequestBuilder<TrendData_SysOverallPotential>;
}
//# sourceMappingURL=TrendData_SysOverallPotentialRequestBuilder.d.ts.map