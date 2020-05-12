import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { PaymentInformationDetailV3Ken } from './PaymentInformationDetailV3Ken';
/**
 * Request builder class for operations supported on the [[PaymentInformationDetailV3Ken]] entity.
 */
export declare class PaymentInformationDetailV3KenRequestBuilder extends RequestBuilder<PaymentInformationDetailV3Ken> {
    /**
     * Returns a request builder for retrieving one `PaymentInformationDetailV3Ken` entity based on its keys.
     * @param paymentInformationDetailV3ExternalCode Key property. See [[PaymentInformationDetailV3Ken.paymentInformationDetailV3ExternalCode]].
     * @param paymentInformationV3EffectiveStartDate Key property. See [[PaymentInformationDetailV3Ken.paymentInformationV3EffectiveStartDate]].
     * @param paymentInformationV3Worker Key property. See [[PaymentInformationDetailV3Ken.paymentInformationV3Worker]].
     * @param externalCode Key property. See [[PaymentInformationDetailV3Ken.externalCode]].
     * @returns A request builder for creating requests to retrieve one `PaymentInformationDetailV3Ken` entity based on its keys.
     */
    getByKey(paymentInformationDetailV3ExternalCode: BigNumber, paymentInformationV3EffectiveStartDate: Moment, paymentInformationV3Worker: string, externalCode: BigNumber): GetByKeyRequestBuilder<PaymentInformationDetailV3Ken>;
    /**
     * Returns a request builder for querying all `PaymentInformationDetailV3Ken` entities.
     * @returns A request builder for creating requests to retrieve all `PaymentInformationDetailV3Ken` entities.
     */
    getAll(): GetAllRequestBuilder<PaymentInformationDetailV3Ken>;
    /**
     * Returns a request builder for creating a `PaymentInformationDetailV3Ken` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PaymentInformationDetailV3Ken`.
     */
    create(entity: PaymentInformationDetailV3Ken): CreateRequestBuilder<PaymentInformationDetailV3Ken>;
    /**
     * Returns a request builder for updating an entity of type `PaymentInformationDetailV3Ken`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PaymentInformationDetailV3Ken`.
     */
    update(entity: PaymentInformationDetailV3Ken): UpdateRequestBuilder<PaymentInformationDetailV3Ken>;
    /**
     * Returns a request builder for deleting an entity of type `PaymentInformationDetailV3Ken`.
     * @param paymentInformationDetailV3ExternalCode Key property. See [[PaymentInformationDetailV3Ken.paymentInformationDetailV3ExternalCode]].
     * @param paymentInformationV3EffectiveStartDate Key property. See [[PaymentInformationDetailV3Ken.paymentInformationV3EffectiveStartDate]].
     * @param paymentInformationV3Worker Key property. See [[PaymentInformationDetailV3Ken.paymentInformationV3Worker]].
     * @param externalCode Key property. See [[PaymentInformationDetailV3Ken.externalCode]].
     * @returns A request builder for creating requests that delete an entity of type `PaymentInformationDetailV3Ken`.
     */
    delete(paymentInformationDetailV3ExternalCode: BigNumber, paymentInformationV3EffectiveStartDate: Moment, paymentInformationV3Worker: string, externalCode: BigNumber): DeleteRequestBuilder<PaymentInformationDetailV3Ken>;
    /**
     * Returns a request builder for deleting an entity of type `PaymentInformationDetailV3Ken`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `PaymentInformationDetailV3Ken` by taking the entity as a parameter.
     */
    delete(entity: PaymentInformationDetailV3Ken): DeleteRequestBuilder<PaymentInformationDetailV3Ken>;
}
//# sourceMappingURL=PaymentInformationDetailV3KenRequestBuilder.d.ts.map