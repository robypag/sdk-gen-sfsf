import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { Currency } from './Currency';
/**
 * Request builder class for operations supported on the [[Currency]] entity.
 */
export declare class CurrencyRequestBuilder extends RequestBuilder<Currency> {
    /**
     * Returns a request builder for retrieving one `Currency` entity based on its keys.
     * @param code Key property. See [[Currency.code]].
     * @param effectiveStartDate Key property. See [[Currency.effectiveStartDate]].
     * @returns A request builder for creating requests to retrieve one `Currency` entity based on its keys.
     */
    getByKey(code: string, effectiveStartDate: Moment): GetByKeyRequestBuilder<Currency>;
    /**
     * Returns a request builder for querying all `Currency` entities.
     * @returns A request builder for creating requests to retrieve all `Currency` entities.
     */
    getAll(): GetAllRequestBuilder<Currency>;
    /**
     * Returns a request builder for creating a `Currency` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Currency`.
     */
    create(entity: Currency): CreateRequestBuilder<Currency>;
    /**
     * Returns a request builder for updating an entity of type `Currency`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Currency`.
     */
    update(entity: Currency): UpdateRequestBuilder<Currency>;
    /**
     * Returns a request builder for deleting an entity of type `Currency`.
     * @param code Key property. See [[Currency.code]].
     * @param effectiveStartDate Key property. See [[Currency.effectiveStartDate]].
     * @returns A request builder for creating requests that delete an entity of type `Currency`.
     */
    delete(code: string, effectiveStartDate: Moment): DeleteRequestBuilder<Currency>;
    /**
     * Returns a request builder for deleting an entity of type `Currency`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `Currency` by taking the entity as a parameter.
     */
    delete(entity: Currency): DeleteRequestBuilder<Currency>;
}
//# sourceMappingURL=CurrencyRequestBuilder.d.ts.map