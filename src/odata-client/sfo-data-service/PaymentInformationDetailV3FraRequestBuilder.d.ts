import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { PaymentInformationDetailV3Fra } from './PaymentInformationDetailV3Fra';
/**
 * Request builder class for operations supported on the [[PaymentInformationDetailV3Fra]] entity.
 */
export declare class PaymentInformationDetailV3FraRequestBuilder extends RequestBuilder<PaymentInformationDetailV3Fra> {
    /**
     * Returns a request builder for retrieving one `PaymentInformationDetailV3Fra` entity based on its keys.
     * @param paymentInformationDetailV3ExternalCode Key property. See [[PaymentInformationDetailV3Fra.paymentInformationDetailV3ExternalCode]].
     * @param paymentInformationV3EffectiveStartDate Key property. See [[PaymentInformationDetailV3Fra.paymentInformationV3EffectiveStartDate]].
     * @param paymentInformationV3Worker Key property. See [[PaymentInformationDetailV3Fra.paymentInformationV3Worker]].
     * @param externalCode Key property. See [[PaymentInformationDetailV3Fra.externalCode]].
     * @returns A request builder for creating requests to retrieve one `PaymentInformationDetailV3Fra` entity based on its keys.
     */
    getByKey(paymentInformationDetailV3ExternalCode: BigNumber, paymentInformationV3EffectiveStartDate: Moment, paymentInformationV3Worker: string, externalCode: BigNumber): GetByKeyRequestBuilder<PaymentInformationDetailV3Fra>;
    /**
     * Returns a request builder for querying all `PaymentInformationDetailV3Fra` entities.
     * @returns A request builder for creating requests to retrieve all `PaymentInformationDetailV3Fra` entities.
     */
    getAll(): GetAllRequestBuilder<PaymentInformationDetailV3Fra>;
    /**
     * Returns a request builder for creating a `PaymentInformationDetailV3Fra` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PaymentInformationDetailV3Fra`.
     */
    create(entity: PaymentInformationDetailV3Fra): CreateRequestBuilder<PaymentInformationDetailV3Fra>;
    /**
     * Returns a request builder for updating an entity of type `PaymentInformationDetailV3Fra`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PaymentInformationDetailV3Fra`.
     */
    update(entity: PaymentInformationDetailV3Fra): UpdateRequestBuilder<PaymentInformationDetailV3Fra>;
    /**
     * Returns a request builder for deleting an entity of type `PaymentInformationDetailV3Fra`.
     * @param paymentInformationDetailV3ExternalCode Key property. See [[PaymentInformationDetailV3Fra.paymentInformationDetailV3ExternalCode]].
     * @param paymentInformationV3EffectiveStartDate Key property. See [[PaymentInformationDetailV3Fra.paymentInformationV3EffectiveStartDate]].
     * @param paymentInformationV3Worker Key property. See [[PaymentInformationDetailV3Fra.paymentInformationV3Worker]].
     * @param externalCode Key property. See [[PaymentInformationDetailV3Fra.externalCode]].
     * @returns A request builder for creating requests that delete an entity of type `PaymentInformationDetailV3Fra`.
     */
    delete(paymentInformationDetailV3ExternalCode: BigNumber, paymentInformationV3EffectiveStartDate: Moment, paymentInformationV3Worker: string, externalCode: BigNumber): DeleteRequestBuilder<PaymentInformationDetailV3Fra>;
    /**
     * Returns a request builder for deleting an entity of type `PaymentInformationDetailV3Fra`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `PaymentInformationDetailV3Fra` by taking the entity as a parameter.
     */
    delete(entity: PaymentInformationDetailV3Fra): DeleteRequestBuilder<PaymentInformationDetailV3Fra>;
}
//# sourceMappingURL=PaymentInformationDetailV3FraRequestBuilder.d.ts.map