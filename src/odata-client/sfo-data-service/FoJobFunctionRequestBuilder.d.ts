import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { FoJobFunction } from './FoJobFunction';
/**
 * Request builder class for operations supported on the [[FoJobFunction]] entity.
 */
export declare class FoJobFunctionRequestBuilder extends RequestBuilder<FoJobFunction> {
    /**
     * Returns a request builder for retrieving one `FoJobFunction` entity based on its keys.
     * @param externalCode Key property. See [[FoJobFunction.externalCode]].
     * @param startDate Key property. See [[FoJobFunction.startDate]].
     * @returns A request builder for creating requests to retrieve one `FoJobFunction` entity based on its keys.
     */
    getByKey(externalCode: string, startDate: Moment): GetByKeyRequestBuilder<FoJobFunction>;
    /**
     * Returns a request builder for querying all `FoJobFunction` entities.
     * @returns A request builder for creating requests to retrieve all `FoJobFunction` entities.
     */
    getAll(): GetAllRequestBuilder<FoJobFunction>;
    /**
     * Returns a request builder for creating a `FoJobFunction` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `FoJobFunction`.
     */
    create(entity: FoJobFunction): CreateRequestBuilder<FoJobFunction>;
    /**
     * Returns a request builder for updating an entity of type `FoJobFunction`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `FoJobFunction`.
     */
    update(entity: FoJobFunction): UpdateRequestBuilder<FoJobFunction>;
    /**
     * Returns a request builder for deleting an entity of type `FoJobFunction`.
     * @param externalCode Key property. See [[FoJobFunction.externalCode]].
     * @param startDate Key property. See [[FoJobFunction.startDate]].
     * @returns A request builder for creating requests that delete an entity of type `FoJobFunction`.
     */
    delete(externalCode: string, startDate: Moment): DeleteRequestBuilder<FoJobFunction>;
    /**
     * Returns a request builder for deleting an entity of type `FoJobFunction`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `FoJobFunction` by taking the entity as a parameter.
     */
    delete(entity: FoJobFunction): DeleteRequestBuilder<FoJobFunction>;
}
//# sourceMappingURL=FoJobFunctionRequestBuilder.d.ts.map