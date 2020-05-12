import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { PaymentInformationDetailV3Mmr } from './PaymentInformationDetailV3Mmr';
/**
 * Request builder class for operations supported on the [[PaymentInformationDetailV3Mmr]] entity.
 */
export declare class PaymentInformationDetailV3MmrRequestBuilder extends RequestBuilder<PaymentInformationDetailV3Mmr> {
    /**
     * Returns a request builder for retrieving one `PaymentInformationDetailV3Mmr` entity based on its keys.
     * @param paymentInformationDetailV3ExternalCode Key property. See [[PaymentInformationDetailV3Mmr.paymentInformationDetailV3ExternalCode]].
     * @param paymentInformationV3EffectiveStartDate Key property. See [[PaymentInformationDetailV3Mmr.paymentInformationV3EffectiveStartDate]].
     * @param paymentInformationV3Worker Key property. See [[PaymentInformationDetailV3Mmr.paymentInformationV3Worker]].
     * @param externalCode Key property. See [[PaymentInformationDetailV3Mmr.externalCode]].
     * @returns A request builder for creating requests to retrieve one `PaymentInformationDetailV3Mmr` entity based on its keys.
     */
    getByKey(paymentInformationDetailV3ExternalCode: BigNumber, paymentInformationV3EffectiveStartDate: Moment, paymentInformationV3Worker: string, externalCode: BigNumber): GetByKeyRequestBuilder<PaymentInformationDetailV3Mmr>;
    /**
     * Returns a request builder for querying all `PaymentInformationDetailV3Mmr` entities.
     * @returns A request builder for creating requests to retrieve all `PaymentInformationDetailV3Mmr` entities.
     */
    getAll(): GetAllRequestBuilder<PaymentInformationDetailV3Mmr>;
    /**
     * Returns a request builder for creating a `PaymentInformationDetailV3Mmr` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PaymentInformationDetailV3Mmr`.
     */
    create(entity: PaymentInformationDetailV3Mmr): CreateRequestBuilder<PaymentInformationDetailV3Mmr>;
    /**
     * Returns a request builder for updating an entity of type `PaymentInformationDetailV3Mmr`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PaymentInformationDetailV3Mmr`.
     */
    update(entity: PaymentInformationDetailV3Mmr): UpdateRequestBuilder<PaymentInformationDetailV3Mmr>;
    /**
     * Returns a request builder for deleting an entity of type `PaymentInformationDetailV3Mmr`.
     * @param paymentInformationDetailV3ExternalCode Key property. See [[PaymentInformationDetailV3Mmr.paymentInformationDetailV3ExternalCode]].
     * @param paymentInformationV3EffectiveStartDate Key property. See [[PaymentInformationDetailV3Mmr.paymentInformationV3EffectiveStartDate]].
     * @param paymentInformationV3Worker Key property. See [[PaymentInformationDetailV3Mmr.paymentInformationV3Worker]].
     * @param externalCode Key property. See [[PaymentInformationDetailV3Mmr.externalCode]].
     * @returns A request builder for creating requests that delete an entity of type `PaymentInformationDetailV3Mmr`.
     */
    delete(paymentInformationDetailV3ExternalCode: BigNumber, paymentInformationV3EffectiveStartDate: Moment, paymentInformationV3Worker: string, externalCode: BigNumber): DeleteRequestBuilder<PaymentInformationDetailV3Mmr>;
    /**
     * Returns a request builder for deleting an entity of type `PaymentInformationDetailV3Mmr`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `PaymentInformationDetailV3Mmr` by taking the entity as a parameter.
     */
    delete(entity: PaymentInformationDetailV3Mmr): DeleteRequestBuilder<PaymentInformationDetailV3Mmr>;
}
//# sourceMappingURL=PaymentInformationDetailV3MmrRequestBuilder.d.ts.map