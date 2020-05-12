import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { PaymentInformationDetailV3Isr } from './PaymentInformationDetailV3Isr';
/**
 * Request builder class for operations supported on the [[PaymentInformationDetailV3Isr]] entity.
 */
export declare class PaymentInformationDetailV3IsrRequestBuilder extends RequestBuilder<PaymentInformationDetailV3Isr> {
    /**
     * Returns a request builder for retrieving one `PaymentInformationDetailV3Isr` entity based on its keys.
     * @param paymentInformationDetailV3ExternalCode Key property. See [[PaymentInformationDetailV3Isr.paymentInformationDetailV3ExternalCode]].
     * @param paymentInformationV3EffectiveStartDate Key property. See [[PaymentInformationDetailV3Isr.paymentInformationV3EffectiveStartDate]].
     * @param paymentInformationV3Worker Key property. See [[PaymentInformationDetailV3Isr.paymentInformationV3Worker]].
     * @param externalCode Key property. See [[PaymentInformationDetailV3Isr.externalCode]].
     * @returns A request builder for creating requests to retrieve one `PaymentInformationDetailV3Isr` entity based on its keys.
     */
    getByKey(paymentInformationDetailV3ExternalCode: BigNumber, paymentInformationV3EffectiveStartDate: Moment, paymentInformationV3Worker: string, externalCode: BigNumber): GetByKeyRequestBuilder<PaymentInformationDetailV3Isr>;
    /**
     * Returns a request builder for querying all `PaymentInformationDetailV3Isr` entities.
     * @returns A request builder for creating requests to retrieve all `PaymentInformationDetailV3Isr` entities.
     */
    getAll(): GetAllRequestBuilder<PaymentInformationDetailV3Isr>;
    /**
     * Returns a request builder for creating a `PaymentInformationDetailV3Isr` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PaymentInformationDetailV3Isr`.
     */
    create(entity: PaymentInformationDetailV3Isr): CreateRequestBuilder<PaymentInformationDetailV3Isr>;
    /**
     * Returns a request builder for updating an entity of type `PaymentInformationDetailV3Isr`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PaymentInformationDetailV3Isr`.
     */
    update(entity: PaymentInformationDetailV3Isr): UpdateRequestBuilder<PaymentInformationDetailV3Isr>;
    /**
     * Returns a request builder for deleting an entity of type `PaymentInformationDetailV3Isr`.
     * @param paymentInformationDetailV3ExternalCode Key property. See [[PaymentInformationDetailV3Isr.paymentInformationDetailV3ExternalCode]].
     * @param paymentInformationV3EffectiveStartDate Key property. See [[PaymentInformationDetailV3Isr.paymentInformationV3EffectiveStartDate]].
     * @param paymentInformationV3Worker Key property. See [[PaymentInformationDetailV3Isr.paymentInformationV3Worker]].
     * @param externalCode Key property. See [[PaymentInformationDetailV3Isr.externalCode]].
     * @returns A request builder for creating requests that delete an entity of type `PaymentInformationDetailV3Isr`.
     */
    delete(paymentInformationDetailV3ExternalCode: BigNumber, paymentInformationV3EffectiveStartDate: Moment, paymentInformationV3Worker: string, externalCode: BigNumber): DeleteRequestBuilder<PaymentInformationDetailV3Isr>;
    /**
     * Returns a request builder for deleting an entity of type `PaymentInformationDetailV3Isr`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `PaymentInformationDetailV3Isr` by taking the entity as a parameter.
     */
    delete(entity: PaymentInformationDetailV3Isr): DeleteRequestBuilder<PaymentInformationDetailV3Isr>;
}
//# sourceMappingURL=PaymentInformationDetailV3IsrRequestBuilder.d.ts.map