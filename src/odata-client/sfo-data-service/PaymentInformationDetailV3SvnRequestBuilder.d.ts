import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { PaymentInformationDetailV3Svn } from './PaymentInformationDetailV3Svn';
/**
 * Request builder class for operations supported on the [[PaymentInformationDetailV3Svn]] entity.
 */
export declare class PaymentInformationDetailV3SvnRequestBuilder extends RequestBuilder<PaymentInformationDetailV3Svn> {
    /**
     * Returns a request builder for retrieving one `PaymentInformationDetailV3Svn` entity based on its keys.
     * @param paymentInformationDetailV3ExternalCode Key property. See [[PaymentInformationDetailV3Svn.paymentInformationDetailV3ExternalCode]].
     * @param paymentInformationV3EffectiveStartDate Key property. See [[PaymentInformationDetailV3Svn.paymentInformationV3EffectiveStartDate]].
     * @param paymentInformationV3Worker Key property. See [[PaymentInformationDetailV3Svn.paymentInformationV3Worker]].
     * @param externalCode Key property. See [[PaymentInformationDetailV3Svn.externalCode]].
     * @returns A request builder for creating requests to retrieve one `PaymentInformationDetailV3Svn` entity based on its keys.
     */
    getByKey(paymentInformationDetailV3ExternalCode: BigNumber, paymentInformationV3EffectiveStartDate: Moment, paymentInformationV3Worker: string, externalCode: BigNumber): GetByKeyRequestBuilder<PaymentInformationDetailV3Svn>;
    /**
     * Returns a request builder for querying all `PaymentInformationDetailV3Svn` entities.
     * @returns A request builder for creating requests to retrieve all `PaymentInformationDetailV3Svn` entities.
     */
    getAll(): GetAllRequestBuilder<PaymentInformationDetailV3Svn>;
    /**
     * Returns a request builder for creating a `PaymentInformationDetailV3Svn` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PaymentInformationDetailV3Svn`.
     */
    create(entity: PaymentInformationDetailV3Svn): CreateRequestBuilder<PaymentInformationDetailV3Svn>;
    /**
     * Returns a request builder for updating an entity of type `PaymentInformationDetailV3Svn`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PaymentInformationDetailV3Svn`.
     */
    update(entity: PaymentInformationDetailV3Svn): UpdateRequestBuilder<PaymentInformationDetailV3Svn>;
    /**
     * Returns a request builder for deleting an entity of type `PaymentInformationDetailV3Svn`.
     * @param paymentInformationDetailV3ExternalCode Key property. See [[PaymentInformationDetailV3Svn.paymentInformationDetailV3ExternalCode]].
     * @param paymentInformationV3EffectiveStartDate Key property. See [[PaymentInformationDetailV3Svn.paymentInformationV3EffectiveStartDate]].
     * @param paymentInformationV3Worker Key property. See [[PaymentInformationDetailV3Svn.paymentInformationV3Worker]].
     * @param externalCode Key property. See [[PaymentInformationDetailV3Svn.externalCode]].
     * @returns A request builder for creating requests that delete an entity of type `PaymentInformationDetailV3Svn`.
     */
    delete(paymentInformationDetailV3ExternalCode: BigNumber, paymentInformationV3EffectiveStartDate: Moment, paymentInformationV3Worker: string, externalCode: BigNumber): DeleteRequestBuilder<PaymentInformationDetailV3Svn>;
    /**
     * Returns a request builder for deleting an entity of type `PaymentInformationDetailV3Svn`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `PaymentInformationDetailV3Svn` by taking the entity as a parameter.
     */
    delete(entity: PaymentInformationDetailV3Svn): DeleteRequestBuilder<PaymentInformationDetailV3Svn>;
}
//# sourceMappingURL=PaymentInformationDetailV3SvnRequestBuilder.d.ts.map