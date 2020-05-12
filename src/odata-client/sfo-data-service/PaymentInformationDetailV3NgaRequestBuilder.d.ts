import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { PaymentInformationDetailV3Nga } from './PaymentInformationDetailV3Nga';
/**
 * Request builder class for operations supported on the [[PaymentInformationDetailV3Nga]] entity.
 */
export declare class PaymentInformationDetailV3NgaRequestBuilder extends RequestBuilder<PaymentInformationDetailV3Nga> {
    /**
     * Returns a request builder for retrieving one `PaymentInformationDetailV3Nga` entity based on its keys.
     * @param paymentInformationDetailV3ExternalCode Key property. See [[PaymentInformationDetailV3Nga.paymentInformationDetailV3ExternalCode]].
     * @param paymentInformationV3EffectiveStartDate Key property. See [[PaymentInformationDetailV3Nga.paymentInformationV3EffectiveStartDate]].
     * @param paymentInformationV3Worker Key property. See [[PaymentInformationDetailV3Nga.paymentInformationV3Worker]].
     * @param externalCode Key property. See [[PaymentInformationDetailV3Nga.externalCode]].
     * @returns A request builder for creating requests to retrieve one `PaymentInformationDetailV3Nga` entity based on its keys.
     */
    getByKey(paymentInformationDetailV3ExternalCode: BigNumber, paymentInformationV3EffectiveStartDate: Moment, paymentInformationV3Worker: string, externalCode: BigNumber): GetByKeyRequestBuilder<PaymentInformationDetailV3Nga>;
    /**
     * Returns a request builder for querying all `PaymentInformationDetailV3Nga` entities.
     * @returns A request builder for creating requests to retrieve all `PaymentInformationDetailV3Nga` entities.
     */
    getAll(): GetAllRequestBuilder<PaymentInformationDetailV3Nga>;
    /**
     * Returns a request builder for creating a `PaymentInformationDetailV3Nga` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PaymentInformationDetailV3Nga`.
     */
    create(entity: PaymentInformationDetailV3Nga): CreateRequestBuilder<PaymentInformationDetailV3Nga>;
    /**
     * Returns a request builder for updating an entity of type `PaymentInformationDetailV3Nga`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PaymentInformationDetailV3Nga`.
     */
    update(entity: PaymentInformationDetailV3Nga): UpdateRequestBuilder<PaymentInformationDetailV3Nga>;
    /**
     * Returns a request builder for deleting an entity of type `PaymentInformationDetailV3Nga`.
     * @param paymentInformationDetailV3ExternalCode Key property. See [[PaymentInformationDetailV3Nga.paymentInformationDetailV3ExternalCode]].
     * @param paymentInformationV3EffectiveStartDate Key property. See [[PaymentInformationDetailV3Nga.paymentInformationV3EffectiveStartDate]].
     * @param paymentInformationV3Worker Key property. See [[PaymentInformationDetailV3Nga.paymentInformationV3Worker]].
     * @param externalCode Key property. See [[PaymentInformationDetailV3Nga.externalCode]].
     * @returns A request builder for creating requests that delete an entity of type `PaymentInformationDetailV3Nga`.
     */
    delete(paymentInformationDetailV3ExternalCode: BigNumber, paymentInformationV3EffectiveStartDate: Moment, paymentInformationV3Worker: string, externalCode: BigNumber): DeleteRequestBuilder<PaymentInformationDetailV3Nga>;
    /**
     * Returns a request builder for deleting an entity of type `PaymentInformationDetailV3Nga`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `PaymentInformationDetailV3Nga` by taking the entity as a parameter.
     */
    delete(entity: PaymentInformationDetailV3Nga): DeleteRequestBuilder<PaymentInformationDetailV3Nga>;
}
//# sourceMappingURL=PaymentInformationDetailV3NgaRequestBuilder.d.ts.map