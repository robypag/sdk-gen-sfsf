import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { PaymentInformationDetailV3Mex } from './PaymentInformationDetailV3Mex';
/**
 * Request builder class for operations supported on the [[PaymentInformationDetailV3Mex]] entity.
 */
export declare class PaymentInformationDetailV3MexRequestBuilder extends RequestBuilder<PaymentInformationDetailV3Mex> {
    /**
     * Returns a request builder for retrieving one `PaymentInformationDetailV3Mex` entity based on its keys.
     * @param paymentInformationDetailV3ExternalCode Key property. See [[PaymentInformationDetailV3Mex.paymentInformationDetailV3ExternalCode]].
     * @param paymentInformationV3EffectiveStartDate Key property. See [[PaymentInformationDetailV3Mex.paymentInformationV3EffectiveStartDate]].
     * @param paymentInformationV3Worker Key property. See [[PaymentInformationDetailV3Mex.paymentInformationV3Worker]].
     * @param externalCode Key property. See [[PaymentInformationDetailV3Mex.externalCode]].
     * @returns A request builder for creating requests to retrieve one `PaymentInformationDetailV3Mex` entity based on its keys.
     */
    getByKey(paymentInformationDetailV3ExternalCode: BigNumber, paymentInformationV3EffectiveStartDate: Moment, paymentInformationV3Worker: string, externalCode: BigNumber): GetByKeyRequestBuilder<PaymentInformationDetailV3Mex>;
    /**
     * Returns a request builder for querying all `PaymentInformationDetailV3Mex` entities.
     * @returns A request builder for creating requests to retrieve all `PaymentInformationDetailV3Mex` entities.
     */
    getAll(): GetAllRequestBuilder<PaymentInformationDetailV3Mex>;
    /**
     * Returns a request builder for creating a `PaymentInformationDetailV3Mex` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PaymentInformationDetailV3Mex`.
     */
    create(entity: PaymentInformationDetailV3Mex): CreateRequestBuilder<PaymentInformationDetailV3Mex>;
    /**
     * Returns a request builder for updating an entity of type `PaymentInformationDetailV3Mex`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PaymentInformationDetailV3Mex`.
     */
    update(entity: PaymentInformationDetailV3Mex): UpdateRequestBuilder<PaymentInformationDetailV3Mex>;
    /**
     * Returns a request builder for deleting an entity of type `PaymentInformationDetailV3Mex`.
     * @param paymentInformationDetailV3ExternalCode Key property. See [[PaymentInformationDetailV3Mex.paymentInformationDetailV3ExternalCode]].
     * @param paymentInformationV3EffectiveStartDate Key property. See [[PaymentInformationDetailV3Mex.paymentInformationV3EffectiveStartDate]].
     * @param paymentInformationV3Worker Key property. See [[PaymentInformationDetailV3Mex.paymentInformationV3Worker]].
     * @param externalCode Key property. See [[PaymentInformationDetailV3Mex.externalCode]].
     * @returns A request builder for creating requests that delete an entity of type `PaymentInformationDetailV3Mex`.
     */
    delete(paymentInformationDetailV3ExternalCode: BigNumber, paymentInformationV3EffectiveStartDate: Moment, paymentInformationV3Worker: string, externalCode: BigNumber): DeleteRequestBuilder<PaymentInformationDetailV3Mex>;
    /**
     * Returns a request builder for deleting an entity of type `PaymentInformationDetailV3Mex`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `PaymentInformationDetailV3Mex` by taking the entity as a parameter.
     */
    delete(entity: PaymentInformationDetailV3Mex): DeleteRequestBuilder<PaymentInformationDetailV3Mex>;
}
//# sourceMappingURL=PaymentInformationDetailV3MexRequestBuilder.d.ts.map