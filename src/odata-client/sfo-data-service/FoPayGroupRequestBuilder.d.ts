import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { FoPayGroup } from './FoPayGroup';
/**
 * Request builder class for operations supported on the [[FoPayGroup]] entity.
 */
export declare class FoPayGroupRequestBuilder extends RequestBuilder<FoPayGroup> {
    /**
     * Returns a request builder for retrieving one `FoPayGroup` entity based on its keys.
     * @param externalCode Key property. See [[FoPayGroup.externalCode]].
     * @param startDate Key property. See [[FoPayGroup.startDate]].
     * @returns A request builder for creating requests to retrieve one `FoPayGroup` entity based on its keys.
     */
    getByKey(externalCode: string, startDate: Moment): GetByKeyRequestBuilder<FoPayGroup>;
    /**
     * Returns a request builder for querying all `FoPayGroup` entities.
     * @returns A request builder for creating requests to retrieve all `FoPayGroup` entities.
     */
    getAll(): GetAllRequestBuilder<FoPayGroup>;
    /**
     * Returns a request builder for creating a `FoPayGroup` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `FoPayGroup`.
     */
    create(entity: FoPayGroup): CreateRequestBuilder<FoPayGroup>;
    /**
     * Returns a request builder for updating an entity of type `FoPayGroup`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `FoPayGroup`.
     */
    update(entity: FoPayGroup): UpdateRequestBuilder<FoPayGroup>;
    /**
     * Returns a request builder for deleting an entity of type `FoPayGroup`.
     * @param externalCode Key property. See [[FoPayGroup.externalCode]].
     * @param startDate Key property. See [[FoPayGroup.startDate]].
     * @returns A request builder for creating requests that delete an entity of type `FoPayGroup`.
     */
    delete(externalCode: string, startDate: Moment): DeleteRequestBuilder<FoPayGroup>;
    /**
     * Returns a request builder for deleting an entity of type `FoPayGroup`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `FoPayGroup` by taking the entity as a parameter.
     */
    delete(entity: FoPayGroup): DeleteRequestBuilder<FoPayGroup>;
}
//# sourceMappingURL=FoPayGroupRequestBuilder.d.ts.map