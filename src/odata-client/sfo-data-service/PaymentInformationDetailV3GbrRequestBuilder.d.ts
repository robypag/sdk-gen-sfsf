import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { PaymentInformationDetailV3Gbr } from './PaymentInformationDetailV3Gbr';
/**
 * Request builder class for operations supported on the [[PaymentInformationDetailV3Gbr]] entity.
 */
export declare class PaymentInformationDetailV3GbrRequestBuilder extends RequestBuilder<PaymentInformationDetailV3Gbr> {
    /**
     * Returns a request builder for retrieving one `PaymentInformationDetailV3Gbr` entity based on its keys.
     * @param paymentInformationDetailV3ExternalCode Key property. See [[PaymentInformationDetailV3Gbr.paymentInformationDetailV3ExternalCode]].
     * @param paymentInformationV3EffectiveStartDate Key property. See [[PaymentInformationDetailV3Gbr.paymentInformationV3EffectiveStartDate]].
     * @param paymentInformationV3Worker Key property. See [[PaymentInformationDetailV3Gbr.paymentInformationV3Worker]].
     * @param externalCode Key property. See [[PaymentInformationDetailV3Gbr.externalCode]].
     * @returns A request builder for creating requests to retrieve one `PaymentInformationDetailV3Gbr` entity based on its keys.
     */
    getByKey(paymentInformationDetailV3ExternalCode: BigNumber, paymentInformationV3EffectiveStartDate: Moment, paymentInformationV3Worker: string, externalCode: BigNumber): GetByKeyRequestBuilder<PaymentInformationDetailV3Gbr>;
    /**
     * Returns a request builder for querying all `PaymentInformationDetailV3Gbr` entities.
     * @returns A request builder for creating requests to retrieve all `PaymentInformationDetailV3Gbr` entities.
     */
    getAll(): GetAllRequestBuilder<PaymentInformationDetailV3Gbr>;
    /**
     * Returns a request builder for creating a `PaymentInformationDetailV3Gbr` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PaymentInformationDetailV3Gbr`.
     */
    create(entity: PaymentInformationDetailV3Gbr): CreateRequestBuilder<PaymentInformationDetailV3Gbr>;
    /**
     * Returns a request builder for updating an entity of type `PaymentInformationDetailV3Gbr`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PaymentInformationDetailV3Gbr`.
     */
    update(entity: PaymentInformationDetailV3Gbr): UpdateRequestBuilder<PaymentInformationDetailV3Gbr>;
    /**
     * Returns a request builder for deleting an entity of type `PaymentInformationDetailV3Gbr`.
     * @param paymentInformationDetailV3ExternalCode Key property. See [[PaymentInformationDetailV3Gbr.paymentInformationDetailV3ExternalCode]].
     * @param paymentInformationV3EffectiveStartDate Key property. See [[PaymentInformationDetailV3Gbr.paymentInformationV3EffectiveStartDate]].
     * @param paymentInformationV3Worker Key property. See [[PaymentInformationDetailV3Gbr.paymentInformationV3Worker]].
     * @param externalCode Key property. See [[PaymentInformationDetailV3Gbr.externalCode]].
     * @returns A request builder for creating requests that delete an entity of type `PaymentInformationDetailV3Gbr`.
     */
    delete(paymentInformationDetailV3ExternalCode: BigNumber, paymentInformationV3EffectiveStartDate: Moment, paymentInformationV3Worker: string, externalCode: BigNumber): DeleteRequestBuilder<PaymentInformationDetailV3Gbr>;
    /**
     * Returns a request builder for deleting an entity of type `PaymentInformationDetailV3Gbr`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `PaymentInformationDetailV3Gbr` by taking the entity as a parameter.
     */
    delete(entity: PaymentInformationDetailV3Gbr): DeleteRequestBuilder<PaymentInformationDetailV3Gbr>;
}
//# sourceMappingURL=PaymentInformationDetailV3GbrRequestBuilder.d.ts.map