import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { PaymentInformationDetailV3 } from './PaymentInformationDetailV3';
/**
 * Request builder class for operations supported on the [[PaymentInformationDetailV3]] entity.
 */
export declare class PaymentInformationDetailV3RequestBuilder extends RequestBuilder<PaymentInformationDetailV3> {
    /**
     * Returns a request builder for retrieving one `PaymentInformationDetailV3` entity based on its keys.
     * @param paymentInformationV3EffectiveStartDate Key property. See [[PaymentInformationDetailV3.paymentInformationV3EffectiveStartDate]].
     * @param paymentInformationV3Worker Key property. See [[PaymentInformationDetailV3.paymentInformationV3Worker]].
     * @param externalCode Key property. See [[PaymentInformationDetailV3.externalCode]].
     * @returns A request builder for creating requests to retrieve one `PaymentInformationDetailV3` entity based on its keys.
     */
    getByKey(paymentInformationV3EffectiveStartDate: Moment, paymentInformationV3Worker: string, externalCode: BigNumber): GetByKeyRequestBuilder<PaymentInformationDetailV3>;
    /**
     * Returns a request builder for querying all `PaymentInformationDetailV3` entities.
     * @returns A request builder for creating requests to retrieve all `PaymentInformationDetailV3` entities.
     */
    getAll(): GetAllRequestBuilder<PaymentInformationDetailV3>;
    /**
     * Returns a request builder for creating a `PaymentInformationDetailV3` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PaymentInformationDetailV3`.
     */
    create(entity: PaymentInformationDetailV3): CreateRequestBuilder<PaymentInformationDetailV3>;
    /**
     * Returns a request builder for updating an entity of type `PaymentInformationDetailV3`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PaymentInformationDetailV3`.
     */
    update(entity: PaymentInformationDetailV3): UpdateRequestBuilder<PaymentInformationDetailV3>;
    /**
     * Returns a request builder for deleting an entity of type `PaymentInformationDetailV3`.
     * @param paymentInformationV3EffectiveStartDate Key property. See [[PaymentInformationDetailV3.paymentInformationV3EffectiveStartDate]].
     * @param paymentInformationV3Worker Key property. See [[PaymentInformationDetailV3.paymentInformationV3Worker]].
     * @param externalCode Key property. See [[PaymentInformationDetailV3.externalCode]].
     * @returns A request builder for creating requests that delete an entity of type `PaymentInformationDetailV3`.
     */
    delete(paymentInformationV3EffectiveStartDate: Moment, paymentInformationV3Worker: string, externalCode: BigNumber): DeleteRequestBuilder<PaymentInformationDetailV3>;
    /**
     * Returns a request builder for deleting an entity of type `PaymentInformationDetailV3`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `PaymentInformationDetailV3` by taking the entity as a parameter.
     */
    delete(entity: PaymentInformationDetailV3): DeleteRequestBuilder<PaymentInformationDetailV3>;
}
//# sourceMappingURL=PaymentInformationDetailV3RequestBuilder.d.ts.map