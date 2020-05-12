import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { PaymentInformationDetailV3Bra } from './PaymentInformationDetailV3Bra';
/**
 * Request builder class for operations supported on the [[PaymentInformationDetailV3Bra]] entity.
 */
export declare class PaymentInformationDetailV3BraRequestBuilder extends RequestBuilder<PaymentInformationDetailV3Bra> {
    /**
     * Returns a request builder for retrieving one `PaymentInformationDetailV3Bra` entity based on its keys.
     * @param paymentInformationDetailV3ExternalCode Key property. See [[PaymentInformationDetailV3Bra.paymentInformationDetailV3ExternalCode]].
     * @param paymentInformationV3EffectiveStartDate Key property. See [[PaymentInformationDetailV3Bra.paymentInformationV3EffectiveStartDate]].
     * @param paymentInformationV3Worker Key property. See [[PaymentInformationDetailV3Bra.paymentInformationV3Worker]].
     * @param externalCode Key property. See [[PaymentInformationDetailV3Bra.externalCode]].
     * @returns A request builder for creating requests to retrieve one `PaymentInformationDetailV3Bra` entity based on its keys.
     */
    getByKey(paymentInformationDetailV3ExternalCode: BigNumber, paymentInformationV3EffectiveStartDate: Moment, paymentInformationV3Worker: string, externalCode: BigNumber): GetByKeyRequestBuilder<PaymentInformationDetailV3Bra>;
    /**
     * Returns a request builder for querying all `PaymentInformationDetailV3Bra` entities.
     * @returns A request builder for creating requests to retrieve all `PaymentInformationDetailV3Bra` entities.
     */
    getAll(): GetAllRequestBuilder<PaymentInformationDetailV3Bra>;
    /**
     * Returns a request builder for creating a `PaymentInformationDetailV3Bra` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PaymentInformationDetailV3Bra`.
     */
    create(entity: PaymentInformationDetailV3Bra): CreateRequestBuilder<PaymentInformationDetailV3Bra>;
    /**
     * Returns a request builder for updating an entity of type `PaymentInformationDetailV3Bra`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PaymentInformationDetailV3Bra`.
     */
    update(entity: PaymentInformationDetailV3Bra): UpdateRequestBuilder<PaymentInformationDetailV3Bra>;
    /**
     * Returns a request builder for deleting an entity of type `PaymentInformationDetailV3Bra`.
     * @param paymentInformationDetailV3ExternalCode Key property. See [[PaymentInformationDetailV3Bra.paymentInformationDetailV3ExternalCode]].
     * @param paymentInformationV3EffectiveStartDate Key property. See [[PaymentInformationDetailV3Bra.paymentInformationV3EffectiveStartDate]].
     * @param paymentInformationV3Worker Key property. See [[PaymentInformationDetailV3Bra.paymentInformationV3Worker]].
     * @param externalCode Key property. See [[PaymentInformationDetailV3Bra.externalCode]].
     * @returns A request builder for creating requests that delete an entity of type `PaymentInformationDetailV3Bra`.
     */
    delete(paymentInformationDetailV3ExternalCode: BigNumber, paymentInformationV3EffectiveStartDate: Moment, paymentInformationV3Worker: string, externalCode: BigNumber): DeleteRequestBuilder<PaymentInformationDetailV3Bra>;
    /**
     * Returns a request builder for deleting an entity of type `PaymentInformationDetailV3Bra`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `PaymentInformationDetailV3Bra` by taking the entity as a parameter.
     */
    delete(entity: PaymentInformationDetailV3Bra): DeleteRequestBuilder<PaymentInformationDetailV3Bra>;
}
//# sourceMappingURL=PaymentInformationDetailV3BraRequestBuilder.d.ts.map