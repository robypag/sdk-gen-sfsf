import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { TalentPool } from './TalentPool';
/**
 * Request builder class for operations supported on the [[TalentPool]] entity.
 */
export declare class TalentPoolRequestBuilder extends RequestBuilder<TalentPool> {
    /**
     * Returns a request builder for retrieving one `TalentPool` entity based on its keys.
     * @param code Key property. See [[TalentPool.code]].
     * @param effectiveStartDate Key property. See [[TalentPool.effectiveStartDate]].
     * @returns A request builder for creating requests to retrieve one `TalentPool` entity based on its keys.
     */
    getByKey(code: string, effectiveStartDate: Moment): GetByKeyRequestBuilder<TalentPool>;
    /**
     * Returns a request builder for querying all `TalentPool` entities.
     * @returns A request builder for creating requests to retrieve all `TalentPool` entities.
     */
    getAll(): GetAllRequestBuilder<TalentPool>;
    /**
     * Returns a request builder for creating a `TalentPool` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `TalentPool`.
     */
    create(entity: TalentPool): CreateRequestBuilder<TalentPool>;
    /**
     * Returns a request builder for updating an entity of type `TalentPool`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `TalentPool`.
     */
    update(entity: TalentPool): UpdateRequestBuilder<TalentPool>;
    /**
     * Returns a request builder for deleting an entity of type `TalentPool`.
     * @param code Key property. See [[TalentPool.code]].
     * @param effectiveStartDate Key property. See [[TalentPool.effectiveStartDate]].
     * @returns A request builder for creating requests that delete an entity of type `TalentPool`.
     */
    delete(code: string, effectiveStartDate: Moment): DeleteRequestBuilder<TalentPool>;
    /**
     * Returns a request builder for deleting an entity of type `TalentPool`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `TalentPool` by taking the entity as a parameter.
     */
    delete(entity: TalentPool): DeleteRequestBuilder<TalentPool>;
}
//# sourceMappingURL=TalentPoolRequestBuilder.d.ts.map