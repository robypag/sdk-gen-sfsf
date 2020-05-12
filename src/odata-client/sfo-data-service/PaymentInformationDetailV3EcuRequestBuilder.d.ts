import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { PaymentInformationDetailV3Ecu } from './PaymentInformationDetailV3Ecu';
/**
 * Request builder class for operations supported on the [[PaymentInformationDetailV3Ecu]] entity.
 */
export declare class PaymentInformationDetailV3EcuRequestBuilder extends RequestBuilder<PaymentInformationDetailV3Ecu> {
    /**
     * Returns a request builder for retrieving one `PaymentInformationDetailV3Ecu` entity based on its keys.
     * @param paymentInformationDetailV3ExternalCode Key property. See [[PaymentInformationDetailV3Ecu.paymentInformationDetailV3ExternalCode]].
     * @param paymentInformationV3EffectiveStartDate Key property. See [[PaymentInformationDetailV3Ecu.paymentInformationV3EffectiveStartDate]].
     * @param paymentInformationV3Worker Key property. See [[PaymentInformationDetailV3Ecu.paymentInformationV3Worker]].
     * @param externalCode Key property. See [[PaymentInformationDetailV3Ecu.externalCode]].
     * @returns A request builder for creating requests to retrieve one `PaymentInformationDetailV3Ecu` entity based on its keys.
     */
    getByKey(paymentInformationDetailV3ExternalCode: BigNumber, paymentInformationV3EffectiveStartDate: Moment, paymentInformationV3Worker: string, externalCode: BigNumber): GetByKeyRequestBuilder<PaymentInformationDetailV3Ecu>;
    /**
     * Returns a request builder for querying all `PaymentInformationDetailV3Ecu` entities.
     * @returns A request builder for creating requests to retrieve all `PaymentInformationDetailV3Ecu` entities.
     */
    getAll(): GetAllRequestBuilder<PaymentInformationDetailV3Ecu>;
    /**
     * Returns a request builder for creating a `PaymentInformationDetailV3Ecu` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PaymentInformationDetailV3Ecu`.
     */
    create(entity: PaymentInformationDetailV3Ecu): CreateRequestBuilder<PaymentInformationDetailV3Ecu>;
    /**
     * Returns a request builder for updating an entity of type `PaymentInformationDetailV3Ecu`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PaymentInformationDetailV3Ecu`.
     */
    update(entity: PaymentInformationDetailV3Ecu): UpdateRequestBuilder<PaymentInformationDetailV3Ecu>;
    /**
     * Returns a request builder for deleting an entity of type `PaymentInformationDetailV3Ecu`.
     * @param paymentInformationDetailV3ExternalCode Key property. See [[PaymentInformationDetailV3Ecu.paymentInformationDetailV3ExternalCode]].
     * @param paymentInformationV3EffectiveStartDate Key property. See [[PaymentInformationDetailV3Ecu.paymentInformationV3EffectiveStartDate]].
     * @param paymentInformationV3Worker Key property. See [[PaymentInformationDetailV3Ecu.paymentInformationV3Worker]].
     * @param externalCode Key property. See [[PaymentInformationDetailV3Ecu.externalCode]].
     * @returns A request builder for creating requests that delete an entity of type `PaymentInformationDetailV3Ecu`.
     */
    delete(paymentInformationDetailV3ExternalCode: BigNumber, paymentInformationV3EffectiveStartDate: Moment, paymentInformationV3Worker: string, externalCode: BigNumber): DeleteRequestBuilder<PaymentInformationDetailV3Ecu>;
    /**
     * Returns a request builder for deleting an entity of type `PaymentInformationDetailV3Ecu`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `PaymentInformationDetailV3Ecu` by taking the entity as a parameter.
     */
    delete(entity: PaymentInformationDetailV3Ecu): DeleteRequestBuilder<PaymentInformationDetailV3Ecu>;
}
//# sourceMappingURL=PaymentInformationDetailV3EcuRequestBuilder.d.ts.map