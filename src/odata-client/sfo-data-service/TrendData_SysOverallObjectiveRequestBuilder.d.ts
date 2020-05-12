import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { TrendData_SysOverallObjective } from './TrendData_SysOverallObjective';
/**
 * Request builder class for operations supported on the [[TrendData_SysOverallObjective]] entity.
 */
export declare class TrendData_SysOverallObjectiveRequestBuilder extends RequestBuilder<TrendData_SysOverallObjective> {
    /**
     * Returns a request builder for retrieving one `TrendData_SysOverallObjective` entity based on its keys.
     * @param id Key property. See [[TrendData_SysOverallObjective.id]].
     * @returns A request builder for creating requests to retrieve one `TrendData_SysOverallObjective` entity based on its keys.
     */
    getByKey(id: BigNumber): GetByKeyRequestBuilder<TrendData_SysOverallObjective>;
    /**
     * Returns a request builder for querying all `TrendData_SysOverallObjective` entities.
     * @returns A request builder for creating requests to retrieve all `TrendData_SysOverallObjective` entities.
     */
    getAll(): GetAllRequestBuilder<TrendData_SysOverallObjective>;
    /**
     * Returns a request builder for creating a `TrendData_SysOverallObjective` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `TrendData_SysOverallObjective`.
     */
    create(entity: TrendData_SysOverallObjective): CreateRequestBuilder<TrendData_SysOverallObjective>;
    /**
     * Returns a request builder for updating an entity of type `TrendData_SysOverallObjective`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `TrendData_SysOverallObjective`.
     */
    update(entity: TrendData_SysOverallObjective): UpdateRequestBuilder<TrendData_SysOverallObjective>;
    /**
     * Returns a request builder for deleting an entity of type `TrendData_SysOverallObjective`.
     * @param id Key property. See [[TrendData_SysOverallObjective.id]].
     * @returns A request builder for creating requests that delete an entity of type `TrendData_SysOverallObjective`.
     */
    delete(id: BigNumber): DeleteRequestBuilder<TrendData_SysOverallObjective>;
    /**
     * Returns a request builder for deleting an entity of type `TrendData_SysOverallObjective`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `TrendData_SysOverallObjective` by taking the entity as a parameter.
     */
    delete(entity: TrendData_SysOverallObjective): DeleteRequestBuilder<TrendData_SysOverallObjective>;
}
//# sourceMappingURL=TrendData_SysOverallObjectiveRequestBuilder.d.ts.map