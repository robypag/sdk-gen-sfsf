import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { FoBusinessUnit } from './FoBusinessUnit';
/**
 * Request builder class for operations supported on the [[FoBusinessUnit]] entity.
 */
export declare class FoBusinessUnitRequestBuilder extends RequestBuilder<FoBusinessUnit> {
    /**
     * Returns a request builder for retrieving one `FoBusinessUnit` entity based on its keys.
     * @param externalCode Key property. See [[FoBusinessUnit.externalCode]].
     * @param startDate Key property. See [[FoBusinessUnit.startDate]].
     * @returns A request builder for creating requests to retrieve one `FoBusinessUnit` entity based on its keys.
     */
    getByKey(externalCode: string, startDate: Moment): GetByKeyRequestBuilder<FoBusinessUnit>;
    /**
     * Returns a request builder for querying all `FoBusinessUnit` entities.
     * @returns A request builder for creating requests to retrieve all `FoBusinessUnit` entities.
     */
    getAll(): GetAllRequestBuilder<FoBusinessUnit>;
    /**
     * Returns a request builder for creating a `FoBusinessUnit` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `FoBusinessUnit`.
     */
    create(entity: FoBusinessUnit): CreateRequestBuilder<FoBusinessUnit>;
    /**
     * Returns a request builder for updating an entity of type `FoBusinessUnit`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `FoBusinessUnit`.
     */
    update(entity: FoBusinessUnit): UpdateRequestBuilder<FoBusinessUnit>;
    /**
     * Returns a request builder for deleting an entity of type `FoBusinessUnit`.
     * @param externalCode Key property. See [[FoBusinessUnit.externalCode]].
     * @param startDate Key property. See [[FoBusinessUnit.startDate]].
     * @returns A request builder for creating requests that delete an entity of type `FoBusinessUnit`.
     */
    delete(externalCode: string, startDate: Moment): DeleteRequestBuilder<FoBusinessUnit>;
    /**
     * Returns a request builder for deleting an entity of type `FoBusinessUnit`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `FoBusinessUnit` by taking the entity as a parameter.
     */
    delete(entity: FoBusinessUnit): DeleteRequestBuilder<FoBusinessUnit>;
}
//# sourceMappingURL=FoBusinessUnitRequestBuilder.d.ts.map