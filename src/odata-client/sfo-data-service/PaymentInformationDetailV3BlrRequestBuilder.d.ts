import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { PaymentInformationDetailV3Blr } from './PaymentInformationDetailV3Blr';
/**
 * Request builder class for operations supported on the [[PaymentInformationDetailV3Blr]] entity.
 */
export declare class PaymentInformationDetailV3BlrRequestBuilder extends RequestBuilder<PaymentInformationDetailV3Blr> {
    /**
     * Returns a request builder for retrieving one `PaymentInformationDetailV3Blr` entity based on its keys.
     * @param paymentInformationDetailV3ExternalCode Key property. See [[PaymentInformationDetailV3Blr.paymentInformationDetailV3ExternalCode]].
     * @param paymentInformationV3EffectiveStartDate Key property. See [[PaymentInformationDetailV3Blr.paymentInformationV3EffectiveStartDate]].
     * @param paymentInformationV3Worker Key property. See [[PaymentInformationDetailV3Blr.paymentInformationV3Worker]].
     * @param externalCode Key property. See [[PaymentInformationDetailV3Blr.externalCode]].
     * @returns A request builder for creating requests to retrieve one `PaymentInformationDetailV3Blr` entity based on its keys.
     */
    getByKey(paymentInformationDetailV3ExternalCode: BigNumber, paymentInformationV3EffectiveStartDate: Moment, paymentInformationV3Worker: string, externalCode: BigNumber): GetByKeyRequestBuilder<PaymentInformationDetailV3Blr>;
    /**
     * Returns a request builder for querying all `PaymentInformationDetailV3Blr` entities.
     * @returns A request builder for creating requests to retrieve all `PaymentInformationDetailV3Blr` entities.
     */
    getAll(): GetAllRequestBuilder<PaymentInformationDetailV3Blr>;
    /**
     * Returns a request builder for creating a `PaymentInformationDetailV3Blr` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PaymentInformationDetailV3Blr`.
     */
    create(entity: PaymentInformationDetailV3Blr): CreateRequestBuilder<PaymentInformationDetailV3Blr>;
    /**
     * Returns a request builder for updating an entity of type `PaymentInformationDetailV3Blr`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PaymentInformationDetailV3Blr`.
     */
    update(entity: PaymentInformationDetailV3Blr): UpdateRequestBuilder<PaymentInformationDetailV3Blr>;
    /**
     * Returns a request builder for deleting an entity of type `PaymentInformationDetailV3Blr`.
     * @param paymentInformationDetailV3ExternalCode Key property. See [[PaymentInformationDetailV3Blr.paymentInformationDetailV3ExternalCode]].
     * @param paymentInformationV3EffectiveStartDate Key property. See [[PaymentInformationDetailV3Blr.paymentInformationV3EffectiveStartDate]].
     * @param paymentInformationV3Worker Key property. See [[PaymentInformationDetailV3Blr.paymentInformationV3Worker]].
     * @param externalCode Key property. See [[PaymentInformationDetailV3Blr.externalCode]].
     * @returns A request builder for creating requests that delete an entity of type `PaymentInformationDetailV3Blr`.
     */
    delete(paymentInformationDetailV3ExternalCode: BigNumber, paymentInformationV3EffectiveStartDate: Moment, paymentInformationV3Worker: string, externalCode: BigNumber): DeleteRequestBuilder<PaymentInformationDetailV3Blr>;
    /**
     * Returns a request builder for deleting an entity of type `PaymentInformationDetailV3Blr`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `PaymentInformationDetailV3Blr` by taking the entity as a parameter.
     */
    delete(entity: PaymentInformationDetailV3Blr): DeleteRequestBuilder<PaymentInformationDetailV3Blr>;
}
//# sourceMappingURL=PaymentInformationDetailV3BlrRequestBuilder.d.ts.map