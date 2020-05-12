import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { PaymentInformationDetailV3Jpn } from './PaymentInformationDetailV3Jpn';
/**
 * Request builder class for operations supported on the [[PaymentInformationDetailV3Jpn]] entity.
 */
export declare class PaymentInformationDetailV3JpnRequestBuilder extends RequestBuilder<PaymentInformationDetailV3Jpn> {
    /**
     * Returns a request builder for retrieving one `PaymentInformationDetailV3Jpn` entity based on its keys.
     * @param paymentInformationDetailV3ExternalCode Key property. See [[PaymentInformationDetailV3Jpn.paymentInformationDetailV3ExternalCode]].
     * @param paymentInformationV3EffectiveStartDate Key property. See [[PaymentInformationDetailV3Jpn.paymentInformationV3EffectiveStartDate]].
     * @param paymentInformationV3Worker Key property. See [[PaymentInformationDetailV3Jpn.paymentInformationV3Worker]].
     * @param externalCode Key property. See [[PaymentInformationDetailV3Jpn.externalCode]].
     * @returns A request builder for creating requests to retrieve one `PaymentInformationDetailV3Jpn` entity based on its keys.
     */
    getByKey(paymentInformationDetailV3ExternalCode: BigNumber, paymentInformationV3EffectiveStartDate: Moment, paymentInformationV3Worker: string, externalCode: BigNumber): GetByKeyRequestBuilder<PaymentInformationDetailV3Jpn>;
    /**
     * Returns a request builder for querying all `PaymentInformationDetailV3Jpn` entities.
     * @returns A request builder for creating requests to retrieve all `PaymentInformationDetailV3Jpn` entities.
     */
    getAll(): GetAllRequestBuilder<PaymentInformationDetailV3Jpn>;
    /**
     * Returns a request builder for creating a `PaymentInformationDetailV3Jpn` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PaymentInformationDetailV3Jpn`.
     */
    create(entity: PaymentInformationDetailV3Jpn): CreateRequestBuilder<PaymentInformationDetailV3Jpn>;
    /**
     * Returns a request builder for updating an entity of type `PaymentInformationDetailV3Jpn`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PaymentInformationDetailV3Jpn`.
     */
    update(entity: PaymentInformationDetailV3Jpn): UpdateRequestBuilder<PaymentInformationDetailV3Jpn>;
    /**
     * Returns a request builder for deleting an entity of type `PaymentInformationDetailV3Jpn`.
     * @param paymentInformationDetailV3ExternalCode Key property. See [[PaymentInformationDetailV3Jpn.paymentInformationDetailV3ExternalCode]].
     * @param paymentInformationV3EffectiveStartDate Key property. See [[PaymentInformationDetailV3Jpn.paymentInformationV3EffectiveStartDate]].
     * @param paymentInformationV3Worker Key property. See [[PaymentInformationDetailV3Jpn.paymentInformationV3Worker]].
     * @param externalCode Key property. See [[PaymentInformationDetailV3Jpn.externalCode]].
     * @returns A request builder for creating requests that delete an entity of type `PaymentInformationDetailV3Jpn`.
     */
    delete(paymentInformationDetailV3ExternalCode: BigNumber, paymentInformationV3EffectiveStartDate: Moment, paymentInformationV3Worker: string, externalCode: BigNumber): DeleteRequestBuilder<PaymentInformationDetailV3Jpn>;
    /**
     * Returns a request builder for deleting an entity of type `PaymentInformationDetailV3Jpn`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `PaymentInformationDetailV3Jpn` by taking the entity as a parameter.
     */
    delete(entity: PaymentInformationDetailV3Jpn): DeleteRequestBuilder<PaymentInformationDetailV3Jpn>;
}
//# sourceMappingURL=PaymentInformationDetailV3JpnRequestBuilder.d.ts.map