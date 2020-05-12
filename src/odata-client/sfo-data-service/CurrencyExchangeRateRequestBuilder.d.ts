import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { CurrencyExchangeRate } from './CurrencyExchangeRate';
/**
 * Request builder class for operations supported on the [[CurrencyExchangeRate]] entity.
 */
export declare class CurrencyExchangeRateRequestBuilder extends RequestBuilder<CurrencyExchangeRate> {
    /**
     * Returns a request builder for retrieving one `CurrencyExchangeRate` entity based on its keys.
     * @param effectiveStartDate Key property. See [[CurrencyExchangeRate.effectiveStartDate]].
     * @param externalCode Key property. See [[CurrencyExchangeRate.externalCode]].
     * @returns A request builder for creating requests to retrieve one `CurrencyExchangeRate` entity based on its keys.
     */
    getByKey(effectiveStartDate: Moment, externalCode: string): GetByKeyRequestBuilder<CurrencyExchangeRate>;
    /**
     * Returns a request builder for querying all `CurrencyExchangeRate` entities.
     * @returns A request builder for creating requests to retrieve all `CurrencyExchangeRate` entities.
     */
    getAll(): GetAllRequestBuilder<CurrencyExchangeRate>;
    /**
     * Returns a request builder for creating a `CurrencyExchangeRate` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CurrencyExchangeRate`.
     */
    create(entity: CurrencyExchangeRate): CreateRequestBuilder<CurrencyExchangeRate>;
    /**
     * Returns a request builder for updating an entity of type `CurrencyExchangeRate`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CurrencyExchangeRate`.
     */
    update(entity: CurrencyExchangeRate): UpdateRequestBuilder<CurrencyExchangeRate>;
    /**
     * Returns a request builder for deleting an entity of type `CurrencyExchangeRate`.
     * @param effectiveStartDate Key property. See [[CurrencyExchangeRate.effectiveStartDate]].
     * @param externalCode Key property. See [[CurrencyExchangeRate.externalCode]].
     * @returns A request builder for creating requests that delete an entity of type `CurrencyExchangeRate`.
     */
    delete(effectiveStartDate: Moment, externalCode: string): DeleteRequestBuilder<CurrencyExchangeRate>;
    /**
     * Returns a request builder for deleting an entity of type `CurrencyExchangeRate`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `CurrencyExchangeRate` by taking the entity as a parameter.
     */
    delete(entity: CurrencyExchangeRate): DeleteRequestBuilder<CurrencyExchangeRate>;
}
//# sourceMappingURL=CurrencyExchangeRateRequestBuilder.d.ts.map