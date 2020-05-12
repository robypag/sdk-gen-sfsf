import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { PaymentInformationDetailV3Chl } from './PaymentInformationDetailV3Chl';
/**
 * Request builder class for operations supported on the [[PaymentInformationDetailV3Chl]] entity.
 */
export declare class PaymentInformationDetailV3ChlRequestBuilder extends RequestBuilder<PaymentInformationDetailV3Chl> {
    /**
     * Returns a request builder for retrieving one `PaymentInformationDetailV3Chl` entity based on its keys.
     * @param paymentInformationDetailV3ExternalCode Key property. See [[PaymentInformationDetailV3Chl.paymentInformationDetailV3ExternalCode]].
     * @param paymentInformationV3EffectiveStartDate Key property. See [[PaymentInformationDetailV3Chl.paymentInformationV3EffectiveStartDate]].
     * @param paymentInformationV3Worker Key property. See [[PaymentInformationDetailV3Chl.paymentInformationV3Worker]].
     * @param externalCode Key property. See [[PaymentInformationDetailV3Chl.externalCode]].
     * @returns A request builder for creating requests to retrieve one `PaymentInformationDetailV3Chl` entity based on its keys.
     */
    getByKey(paymentInformationDetailV3ExternalCode: BigNumber, paymentInformationV3EffectiveStartDate: Moment, paymentInformationV3Worker: string, externalCode: BigNumber): GetByKeyRequestBuilder<PaymentInformationDetailV3Chl>;
    /**
     * Returns a request builder for querying all `PaymentInformationDetailV3Chl` entities.
     * @returns A request builder for creating requests to retrieve all `PaymentInformationDetailV3Chl` entities.
     */
    getAll(): GetAllRequestBuilder<PaymentInformationDetailV3Chl>;
    /**
     * Returns a request builder for creating a `PaymentInformationDetailV3Chl` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PaymentInformationDetailV3Chl`.
     */
    create(entity: PaymentInformationDetailV3Chl): CreateRequestBuilder<PaymentInformationDetailV3Chl>;
    /**
     * Returns a request builder for updating an entity of type `PaymentInformationDetailV3Chl`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PaymentInformationDetailV3Chl`.
     */
    update(entity: PaymentInformationDetailV3Chl): UpdateRequestBuilder<PaymentInformationDetailV3Chl>;
    /**
     * Returns a request builder for deleting an entity of type `PaymentInformationDetailV3Chl`.
     * @param paymentInformationDetailV3ExternalCode Key property. See [[PaymentInformationDetailV3Chl.paymentInformationDetailV3ExternalCode]].
     * @param paymentInformationV3EffectiveStartDate Key property. See [[PaymentInformationDetailV3Chl.paymentInformationV3EffectiveStartDate]].
     * @param paymentInformationV3Worker Key property. See [[PaymentInformationDetailV3Chl.paymentInformationV3Worker]].
     * @param externalCode Key property. See [[PaymentInformationDetailV3Chl.externalCode]].
     * @returns A request builder for creating requests that delete an entity of type `PaymentInformationDetailV3Chl`.
     */
    delete(paymentInformationDetailV3ExternalCode: BigNumber, paymentInformationV3EffectiveStartDate: Moment, paymentInformationV3Worker: string, externalCode: BigNumber): DeleteRequestBuilder<PaymentInformationDetailV3Chl>;
    /**
     * Returns a request builder for deleting an entity of type `PaymentInformationDetailV3Chl`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `PaymentInformationDetailV3Chl` by taking the entity as a parameter.
     */
    delete(entity: PaymentInformationDetailV3Chl): DeleteRequestBuilder<PaymentInformationDetailV3Chl>;
}
//# sourceMappingURL=PaymentInformationDetailV3ChlRequestBuilder.d.ts.map