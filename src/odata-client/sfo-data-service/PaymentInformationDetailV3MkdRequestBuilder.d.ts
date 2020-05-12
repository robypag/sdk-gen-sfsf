import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { PaymentInformationDetailV3Mkd } from './PaymentInformationDetailV3Mkd';
/**
 * Request builder class for operations supported on the [[PaymentInformationDetailV3Mkd]] entity.
 */
export declare class PaymentInformationDetailV3MkdRequestBuilder extends RequestBuilder<PaymentInformationDetailV3Mkd> {
    /**
     * Returns a request builder for retrieving one `PaymentInformationDetailV3Mkd` entity based on its keys.
     * @param paymentInformationDetailV3ExternalCode Key property. See [[PaymentInformationDetailV3Mkd.paymentInformationDetailV3ExternalCode]].
     * @param paymentInformationV3EffectiveStartDate Key property. See [[PaymentInformationDetailV3Mkd.paymentInformationV3EffectiveStartDate]].
     * @param paymentInformationV3Worker Key property. See [[PaymentInformationDetailV3Mkd.paymentInformationV3Worker]].
     * @param externalCode Key property. See [[PaymentInformationDetailV3Mkd.externalCode]].
     * @returns A request builder for creating requests to retrieve one `PaymentInformationDetailV3Mkd` entity based on its keys.
     */
    getByKey(paymentInformationDetailV3ExternalCode: BigNumber, paymentInformationV3EffectiveStartDate: Moment, paymentInformationV3Worker: string, externalCode: BigNumber): GetByKeyRequestBuilder<PaymentInformationDetailV3Mkd>;
    /**
     * Returns a request builder for querying all `PaymentInformationDetailV3Mkd` entities.
     * @returns A request builder for creating requests to retrieve all `PaymentInformationDetailV3Mkd` entities.
     */
    getAll(): GetAllRequestBuilder<PaymentInformationDetailV3Mkd>;
    /**
     * Returns a request builder for creating a `PaymentInformationDetailV3Mkd` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PaymentInformationDetailV3Mkd`.
     */
    create(entity: PaymentInformationDetailV3Mkd): CreateRequestBuilder<PaymentInformationDetailV3Mkd>;
    /**
     * Returns a request builder for updating an entity of type `PaymentInformationDetailV3Mkd`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PaymentInformationDetailV3Mkd`.
     */
    update(entity: PaymentInformationDetailV3Mkd): UpdateRequestBuilder<PaymentInformationDetailV3Mkd>;
    /**
     * Returns a request builder for deleting an entity of type `PaymentInformationDetailV3Mkd`.
     * @param paymentInformationDetailV3ExternalCode Key property. See [[PaymentInformationDetailV3Mkd.paymentInformationDetailV3ExternalCode]].
     * @param paymentInformationV3EffectiveStartDate Key property. See [[PaymentInformationDetailV3Mkd.paymentInformationV3EffectiveStartDate]].
     * @param paymentInformationV3Worker Key property. See [[PaymentInformationDetailV3Mkd.paymentInformationV3Worker]].
     * @param externalCode Key property. See [[PaymentInformationDetailV3Mkd.externalCode]].
     * @returns A request builder for creating requests that delete an entity of type `PaymentInformationDetailV3Mkd`.
     */
    delete(paymentInformationDetailV3ExternalCode: BigNumber, paymentInformationV3EffectiveStartDate: Moment, paymentInformationV3Worker: string, externalCode: BigNumber): DeleteRequestBuilder<PaymentInformationDetailV3Mkd>;
    /**
     * Returns a request builder for deleting an entity of type `PaymentInformationDetailV3Mkd`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `PaymentInformationDetailV3Mkd` by taking the entity as a parameter.
     */
    delete(entity: PaymentInformationDetailV3Mkd): DeleteRequestBuilder<PaymentInformationDetailV3Mkd>;
}
//# sourceMappingURL=PaymentInformationDetailV3MkdRequestBuilder.d.ts.map