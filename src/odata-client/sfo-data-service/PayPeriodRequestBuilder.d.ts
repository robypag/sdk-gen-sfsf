import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { PayPeriod } from './PayPeriod';
/**
 * Request builder class for operations supported on the [[PayPeriod]] entity.
 */
export declare class PayPeriodRequestBuilder extends RequestBuilder<PayPeriod> {
    /**
     * Returns a request builder for retrieving one `PayPeriod` entity based on its keys.
     * @param payCalendarPayGroup Key property. See [[PayPeriod.payCalendarPayGroup]].
     * @param externalCode Key property. See [[PayPeriod.externalCode]].
     * @returns A request builder for creating requests to retrieve one `PayPeriod` entity based on its keys.
     */
    getByKey(payCalendarPayGroup: string, externalCode: BigNumber): GetByKeyRequestBuilder<PayPeriod>;
    /**
     * Returns a request builder for querying all `PayPeriod` entities.
     * @returns A request builder for creating requests to retrieve all `PayPeriod` entities.
     */
    getAll(): GetAllRequestBuilder<PayPeriod>;
    /**
     * Returns a request builder for creating a `PayPeriod` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PayPeriod`.
     */
    create(entity: PayPeriod): CreateRequestBuilder<PayPeriod>;
    /**
     * Returns a request builder for updating an entity of type `PayPeriod`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PayPeriod`.
     */
    update(entity: PayPeriod): UpdateRequestBuilder<PayPeriod>;
    /**
     * Returns a request builder for deleting an entity of type `PayPeriod`.
     * @param payCalendarPayGroup Key property. See [[PayPeriod.payCalendarPayGroup]].
     * @param externalCode Key property. See [[PayPeriod.externalCode]].
     * @returns A request builder for creating requests that delete an entity of type `PayPeriod`.
     */
    delete(payCalendarPayGroup: string, externalCode: BigNumber): DeleteRequestBuilder<PayPeriod>;
    /**
     * Returns a request builder for deleting an entity of type `PayPeriod`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `PayPeriod` by taking the entity as a parameter.
     */
    delete(entity: PayPeriod): DeleteRequestBuilder<PayPeriod>;
}
//# sourceMappingURL=PayPeriodRequestBuilder.d.ts.map