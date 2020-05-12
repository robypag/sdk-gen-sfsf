import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { FoDivision } from './FoDivision';
/**
 * Request builder class for operations supported on the [[FoDivision]] entity.
 */
export declare class FoDivisionRequestBuilder extends RequestBuilder<FoDivision> {
    /**
     * Returns a request builder for retrieving one `FoDivision` entity based on its keys.
     * @param externalCode Key property. See [[FoDivision.externalCode]].
     * @param startDate Key property. See [[FoDivision.startDate]].
     * @returns A request builder for creating requests to retrieve one `FoDivision` entity based on its keys.
     */
    getByKey(externalCode: string, startDate: Moment): GetByKeyRequestBuilder<FoDivision>;
    /**
     * Returns a request builder for querying all `FoDivision` entities.
     * @returns A request builder for creating requests to retrieve all `FoDivision` entities.
     */
    getAll(): GetAllRequestBuilder<FoDivision>;
    /**
     * Returns a request builder for creating a `FoDivision` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `FoDivision`.
     */
    create(entity: FoDivision): CreateRequestBuilder<FoDivision>;
    /**
     * Returns a request builder for updating an entity of type `FoDivision`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `FoDivision`.
     */
    update(entity: FoDivision): UpdateRequestBuilder<FoDivision>;
    /**
     * Returns a request builder for deleting an entity of type `FoDivision`.
     * @param externalCode Key property. See [[FoDivision.externalCode]].
     * @param startDate Key property. See [[FoDivision.startDate]].
     * @returns A request builder for creating requests that delete an entity of type `FoDivision`.
     */
    delete(externalCode: string, startDate: Moment): DeleteRequestBuilder<FoDivision>;
    /**
     * Returns a request builder for deleting an entity of type `FoDivision`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `FoDivision` by taking the entity as a parameter.
     */
    delete(entity: FoDivision): DeleteRequestBuilder<FoDivision>;
}
//# sourceMappingURL=FoDivisionRequestBuilder.d.ts.map