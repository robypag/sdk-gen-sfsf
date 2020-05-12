import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { TrendData_SysOverallCustom1 } from './TrendData_SysOverallCustom1';
/**
 * Request builder class for operations supported on the [[TrendData_SysOverallCustom1]] entity.
 */
export declare class TrendData_SysOverallCustom1RequestBuilder extends RequestBuilder<TrendData_SysOverallCustom1> {
    /**
     * Returns a request builder for retrieving one `TrendData_SysOverallCustom1` entity based on its keys.
     * @param id Key property. See [[TrendData_SysOverallCustom1.id]].
     * @returns A request builder for creating requests to retrieve one `TrendData_SysOverallCustom1` entity based on its keys.
     */
    getByKey(id: BigNumber): GetByKeyRequestBuilder<TrendData_SysOverallCustom1>;
    /**
     * Returns a request builder for querying all `TrendData_SysOverallCustom1` entities.
     * @returns A request builder for creating requests to retrieve all `TrendData_SysOverallCustom1` entities.
     */
    getAll(): GetAllRequestBuilder<TrendData_SysOverallCustom1>;
    /**
     * Returns a request builder for creating a `TrendData_SysOverallCustom1` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `TrendData_SysOverallCustom1`.
     */
    create(entity: TrendData_SysOverallCustom1): CreateRequestBuilder<TrendData_SysOverallCustom1>;
    /**
     * Returns a request builder for updating an entity of type `TrendData_SysOverallCustom1`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `TrendData_SysOverallCustom1`.
     */
    update(entity: TrendData_SysOverallCustom1): UpdateRequestBuilder<TrendData_SysOverallCustom1>;
    /**
     * Returns a request builder for deleting an entity of type `TrendData_SysOverallCustom1`.
     * @param id Key property. See [[TrendData_SysOverallCustom1.id]].
     * @returns A request builder for creating requests that delete an entity of type `TrendData_SysOverallCustom1`.
     */
    delete(id: BigNumber): DeleteRequestBuilder<TrendData_SysOverallCustom1>;
    /**
     * Returns a request builder for deleting an entity of type `TrendData_SysOverallCustom1`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `TrendData_SysOverallCustom1` by taking the entity as a parameter.
     */
    delete(entity: TrendData_SysOverallCustom1): DeleteRequestBuilder<TrendData_SysOverallCustom1>;
}
//# sourceMappingURL=TrendData_SysOverallCustom1RequestBuilder.d.ts.map