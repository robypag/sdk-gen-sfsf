import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { PaymentInformationDetailV3Moz } from './PaymentInformationDetailV3Moz';
/**
 * Request builder class for operations supported on the [[PaymentInformationDetailV3Moz]] entity.
 */
export declare class PaymentInformationDetailV3MozRequestBuilder extends RequestBuilder<PaymentInformationDetailV3Moz> {
    /**
     * Returns a request builder for retrieving one `PaymentInformationDetailV3Moz` entity based on its keys.
     * @param paymentInformationDetailV3ExternalCode Key property. See [[PaymentInformationDetailV3Moz.paymentInformationDetailV3ExternalCode]].
     * @param paymentInformationV3EffectiveStartDate Key property. See [[PaymentInformationDetailV3Moz.paymentInformationV3EffectiveStartDate]].
     * @param paymentInformationV3Worker Key property. See [[PaymentInformationDetailV3Moz.paymentInformationV3Worker]].
     * @param externalCode Key property. See [[PaymentInformationDetailV3Moz.externalCode]].
     * @returns A request builder for creating requests to retrieve one `PaymentInformationDetailV3Moz` entity based on its keys.
     */
    getByKey(paymentInformationDetailV3ExternalCode: BigNumber, paymentInformationV3EffectiveStartDate: Moment, paymentInformationV3Worker: string, externalCode: BigNumber): GetByKeyRequestBuilder<PaymentInformationDetailV3Moz>;
    /**
     * Returns a request builder for querying all `PaymentInformationDetailV3Moz` entities.
     * @returns A request builder for creating requests to retrieve all `PaymentInformationDetailV3Moz` entities.
     */
    getAll(): GetAllRequestBuilder<PaymentInformationDetailV3Moz>;
    /**
     * Returns a request builder for creating a `PaymentInformationDetailV3Moz` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PaymentInformationDetailV3Moz`.
     */
    create(entity: PaymentInformationDetailV3Moz): CreateRequestBuilder<PaymentInformationDetailV3Moz>;
    /**
     * Returns a request builder for updating an entity of type `PaymentInformationDetailV3Moz`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PaymentInformationDetailV3Moz`.
     */
    update(entity: PaymentInformationDetailV3Moz): UpdateRequestBuilder<PaymentInformationDetailV3Moz>;
    /**
     * Returns a request builder for deleting an entity of type `PaymentInformationDetailV3Moz`.
     * @param paymentInformationDetailV3ExternalCode Key property. See [[PaymentInformationDetailV3Moz.paymentInformationDetailV3ExternalCode]].
     * @param paymentInformationV3EffectiveStartDate Key property. See [[PaymentInformationDetailV3Moz.paymentInformationV3EffectiveStartDate]].
     * @param paymentInformationV3Worker Key property. See [[PaymentInformationDetailV3Moz.paymentInformationV3Worker]].
     * @param externalCode Key property. See [[PaymentInformationDetailV3Moz.externalCode]].
     * @returns A request builder for creating requests that delete an entity of type `PaymentInformationDetailV3Moz`.
     */
    delete(paymentInformationDetailV3ExternalCode: BigNumber, paymentInformationV3EffectiveStartDate: Moment, paymentInformationV3Worker: string, externalCode: BigNumber): DeleteRequestBuilder<PaymentInformationDetailV3Moz>;
    /**
     * Returns a request builder for deleting an entity of type `PaymentInformationDetailV3Moz`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `PaymentInformationDetailV3Moz` by taking the entity as a parameter.
     */
    delete(entity: PaymentInformationDetailV3Moz): DeleteRequestBuilder<PaymentInformationDetailV3Moz>;
}
//# sourceMappingURL=PaymentInformationDetailV3MozRequestBuilder.d.ts.map