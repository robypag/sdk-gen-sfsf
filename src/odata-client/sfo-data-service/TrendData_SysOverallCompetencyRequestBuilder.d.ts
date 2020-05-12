import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { TrendData_SysOverallCompetency } from './TrendData_SysOverallCompetency';
/**
 * Request builder class for operations supported on the [[TrendData_SysOverallCompetency]] entity.
 */
export declare class TrendData_SysOverallCompetencyRequestBuilder extends RequestBuilder<TrendData_SysOverallCompetency> {
    /**
     * Returns a request builder for retrieving one `TrendData_SysOverallCompetency` entity based on its keys.
     * @param id Key property. See [[TrendData_SysOverallCompetency.id]].
     * @returns A request builder for creating requests to retrieve one `TrendData_SysOverallCompetency` entity based on its keys.
     */
    getByKey(id: BigNumber): GetByKeyRequestBuilder<TrendData_SysOverallCompetency>;
    /**
     * Returns a request builder for querying all `TrendData_SysOverallCompetency` entities.
     * @returns A request builder for creating requests to retrieve all `TrendData_SysOverallCompetency` entities.
     */
    getAll(): GetAllRequestBuilder<TrendData_SysOverallCompetency>;
    /**
     * Returns a request builder for creating a `TrendData_SysOverallCompetency` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `TrendData_SysOverallCompetency`.
     */
    create(entity: TrendData_SysOverallCompetency): CreateRequestBuilder<TrendData_SysOverallCompetency>;
    /**
     * Returns a request builder for updating an entity of type `TrendData_SysOverallCompetency`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `TrendData_SysOverallCompetency`.
     */
    update(entity: TrendData_SysOverallCompetency): UpdateRequestBuilder<TrendData_SysOverallCompetency>;
    /**
     * Returns a request builder for deleting an entity of type `TrendData_SysOverallCompetency`.
     * @param id Key property. See [[TrendData_SysOverallCompetency.id]].
     * @returns A request builder for creating requests that delete an entity of type `TrendData_SysOverallCompetency`.
     */
    delete(id: BigNumber): DeleteRequestBuilder<TrendData_SysOverallCompetency>;
    /**
     * Returns a request builder for deleting an entity of type `TrendData_SysOverallCompetency`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `TrendData_SysOverallCompetency` by taking the entity as a parameter.
     */
    delete(entity: TrendData_SysOverallCompetency): DeleteRequestBuilder<TrendData_SysOverallCompetency>;
}
//# sourceMappingURL=TrendData_SysOverallCompetencyRequestBuilder.d.ts.map