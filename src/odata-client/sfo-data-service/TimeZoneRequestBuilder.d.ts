import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { TimeZone } from './TimeZone';
/**
 * Request builder class for operations supported on the [[TimeZone]] entity.
 */
export declare class TimeZoneRequestBuilder extends RequestBuilder<TimeZone> {
    /**
     * Returns a request builder for retrieving one `TimeZone` entity based on its keys.
     * @param effectiveStartDate Key property. See [[TimeZone.effectiveStartDate]].
     * @param externalCode Key property. See [[TimeZone.externalCode]].
     * @returns A request builder for creating requests to retrieve one `TimeZone` entity based on its keys.
     */
    getByKey(effectiveStartDate: Moment, externalCode: string): GetByKeyRequestBuilder<TimeZone>;
    /**
     * Returns a request builder for querying all `TimeZone` entities.
     * @returns A request builder for creating requests to retrieve all `TimeZone` entities.
     */
    getAll(): GetAllRequestBuilder<TimeZone>;
    /**
     * Returns a request builder for creating a `TimeZone` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `TimeZone`.
     */
    create(entity: TimeZone): CreateRequestBuilder<TimeZone>;
    /**
     * Returns a request builder for updating an entity of type `TimeZone`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `TimeZone`.
     */
    update(entity: TimeZone): UpdateRequestBuilder<TimeZone>;
    /**
     * Returns a request builder for deleting an entity of type `TimeZone`.
     * @param effectiveStartDate Key property. See [[TimeZone.effectiveStartDate]].
     * @param externalCode Key property. See [[TimeZone.externalCode]].
     * @returns A request builder for creating requests that delete an entity of type `TimeZone`.
     */
    delete(effectiveStartDate: Moment, externalCode: string): DeleteRequestBuilder<TimeZone>;
    /**
     * Returns a request builder for deleting an entity of type `TimeZone`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `TimeZone` by taking the entity as a parameter.
     */
    delete(entity: TimeZone): DeleteRequestBuilder<TimeZone>;
}
//# sourceMappingURL=TimeZoneRequestBuilder.d.ts.map