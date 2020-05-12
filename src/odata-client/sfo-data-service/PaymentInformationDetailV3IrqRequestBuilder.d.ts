import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { PaymentInformationDetailV3Irq } from './PaymentInformationDetailV3Irq';
/**
 * Request builder class for operations supported on the [[PaymentInformationDetailV3Irq]] entity.
 */
export declare class PaymentInformationDetailV3IrqRequestBuilder extends RequestBuilder<PaymentInformationDetailV3Irq> {
    /**
     * Returns a request builder for retrieving one `PaymentInformationDetailV3Irq` entity based on its keys.
     * @param paymentInformationDetailV3ExternalCode Key property. See [[PaymentInformationDetailV3Irq.paymentInformationDetailV3ExternalCode]].
     * @param paymentInformationV3EffectiveStartDate Key property. See [[PaymentInformationDetailV3Irq.paymentInformationV3EffectiveStartDate]].
     * @param paymentInformationV3Worker Key property. See [[PaymentInformationDetailV3Irq.paymentInformationV3Worker]].
     * @param externalCode Key property. See [[PaymentInformationDetailV3Irq.externalCode]].
     * @returns A request builder for creating requests to retrieve one `PaymentInformationDetailV3Irq` entity based on its keys.
     */
    getByKey(paymentInformationDetailV3ExternalCode: BigNumber, paymentInformationV3EffectiveStartDate: Moment, paymentInformationV3Worker: string, externalCode: BigNumber): GetByKeyRequestBuilder<PaymentInformationDetailV3Irq>;
    /**
     * Returns a request builder for querying all `PaymentInformationDetailV3Irq` entities.
     * @returns A request builder for creating requests to retrieve all `PaymentInformationDetailV3Irq` entities.
     */
    getAll(): GetAllRequestBuilder<PaymentInformationDetailV3Irq>;
    /**
     * Returns a request builder for creating a `PaymentInformationDetailV3Irq` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PaymentInformationDetailV3Irq`.
     */
    create(entity: PaymentInformationDetailV3Irq): CreateRequestBuilder<PaymentInformationDetailV3Irq>;
    /**
     * Returns a request builder for updating an entity of type `PaymentInformationDetailV3Irq`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PaymentInformationDetailV3Irq`.
     */
    update(entity: PaymentInformationDetailV3Irq): UpdateRequestBuilder<PaymentInformationDetailV3Irq>;
    /**
     * Returns a request builder for deleting an entity of type `PaymentInformationDetailV3Irq`.
     * @param paymentInformationDetailV3ExternalCode Key property. See [[PaymentInformationDetailV3Irq.paymentInformationDetailV3ExternalCode]].
     * @param paymentInformationV3EffectiveStartDate Key property. See [[PaymentInformationDetailV3Irq.paymentInformationV3EffectiveStartDate]].
     * @param paymentInformationV3Worker Key property. See [[PaymentInformationDetailV3Irq.paymentInformationV3Worker]].
     * @param externalCode Key property. See [[PaymentInformationDetailV3Irq.externalCode]].
     * @returns A request builder for creating requests that delete an entity of type `PaymentInformationDetailV3Irq`.
     */
    delete(paymentInformationDetailV3ExternalCode: BigNumber, paymentInformationV3EffectiveStartDate: Moment, paymentInformationV3Worker: string, externalCode: BigNumber): DeleteRequestBuilder<PaymentInformationDetailV3Irq>;
    /**
     * Returns a request builder for deleting an entity of type `PaymentInformationDetailV3Irq`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `PaymentInformationDetailV3Irq` by taking the entity as a parameter.
     */
    delete(entity: PaymentInformationDetailV3Irq): DeleteRequestBuilder<PaymentInformationDetailV3Irq>;
}
//# sourceMappingURL=PaymentInformationDetailV3IrqRequestBuilder.d.ts.map