import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { PaymentInformationDetailV3Per } from './PaymentInformationDetailV3Per';
/**
 * Request builder class for operations supported on the [[PaymentInformationDetailV3Per]] entity.
 */
export declare class PaymentInformationDetailV3PerRequestBuilder extends RequestBuilder<PaymentInformationDetailV3Per> {
    /**
     * Returns a request builder for retrieving one `PaymentInformationDetailV3Per` entity based on its keys.
     * @param paymentInformationDetailV3ExternalCode Key property. See [[PaymentInformationDetailV3Per.paymentInformationDetailV3ExternalCode]].
     * @param paymentInformationV3EffectiveStartDate Key property. See [[PaymentInformationDetailV3Per.paymentInformationV3EffectiveStartDate]].
     * @param paymentInformationV3Worker Key property. See [[PaymentInformationDetailV3Per.paymentInformationV3Worker]].
     * @param externalCode Key property. See [[PaymentInformationDetailV3Per.externalCode]].
     * @returns A request builder for creating requests to retrieve one `PaymentInformationDetailV3Per` entity based on its keys.
     */
    getByKey(paymentInformationDetailV3ExternalCode: BigNumber, paymentInformationV3EffectiveStartDate: Moment, paymentInformationV3Worker: string, externalCode: BigNumber): GetByKeyRequestBuilder<PaymentInformationDetailV3Per>;
    /**
     * Returns a request builder for querying all `PaymentInformationDetailV3Per` entities.
     * @returns A request builder for creating requests to retrieve all `PaymentInformationDetailV3Per` entities.
     */
    getAll(): GetAllRequestBuilder<PaymentInformationDetailV3Per>;
    /**
     * Returns a request builder for creating a `PaymentInformationDetailV3Per` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PaymentInformationDetailV3Per`.
     */
    create(entity: PaymentInformationDetailV3Per): CreateRequestBuilder<PaymentInformationDetailV3Per>;
    /**
     * Returns a request builder for updating an entity of type `PaymentInformationDetailV3Per`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PaymentInformationDetailV3Per`.
     */
    update(entity: PaymentInformationDetailV3Per): UpdateRequestBuilder<PaymentInformationDetailV3Per>;
    /**
     * Returns a request builder for deleting an entity of type `PaymentInformationDetailV3Per`.
     * @param paymentInformationDetailV3ExternalCode Key property. See [[PaymentInformationDetailV3Per.paymentInformationDetailV3ExternalCode]].
     * @param paymentInformationV3EffectiveStartDate Key property. See [[PaymentInformationDetailV3Per.paymentInformationV3EffectiveStartDate]].
     * @param paymentInformationV3Worker Key property. See [[PaymentInformationDetailV3Per.paymentInformationV3Worker]].
     * @param externalCode Key property. See [[PaymentInformationDetailV3Per.externalCode]].
     * @returns A request builder for creating requests that delete an entity of type `PaymentInformationDetailV3Per`.
     */
    delete(paymentInformationDetailV3ExternalCode: BigNumber, paymentInformationV3EffectiveStartDate: Moment, paymentInformationV3Worker: string, externalCode: BigNumber): DeleteRequestBuilder<PaymentInformationDetailV3Per>;
    /**
     * Returns a request builder for deleting an entity of type `PaymentInformationDetailV3Per`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `PaymentInformationDetailV3Per` by taking the entity as a parameter.
     */
    delete(entity: PaymentInformationDetailV3Per): DeleteRequestBuilder<PaymentInformationDetailV3Per>;
}
//# sourceMappingURL=PaymentInformationDetailV3PerRequestBuilder.d.ts.map