import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { PaymentInformationDetailV3Esp } from './PaymentInformationDetailV3Esp';
/**
 * Request builder class for operations supported on the [[PaymentInformationDetailV3Esp]] entity.
 */
export declare class PaymentInformationDetailV3EspRequestBuilder extends RequestBuilder<PaymentInformationDetailV3Esp> {
    /**
     * Returns a request builder for retrieving one `PaymentInformationDetailV3Esp` entity based on its keys.
     * @param paymentInformationDetailV3ExternalCode Key property. See [[PaymentInformationDetailV3Esp.paymentInformationDetailV3ExternalCode]].
     * @param paymentInformationV3EffectiveStartDate Key property. See [[PaymentInformationDetailV3Esp.paymentInformationV3EffectiveStartDate]].
     * @param paymentInformationV3Worker Key property. See [[PaymentInformationDetailV3Esp.paymentInformationV3Worker]].
     * @param externalCode Key property. See [[PaymentInformationDetailV3Esp.externalCode]].
     * @returns A request builder for creating requests to retrieve one `PaymentInformationDetailV3Esp` entity based on its keys.
     */
    getByKey(paymentInformationDetailV3ExternalCode: BigNumber, paymentInformationV3EffectiveStartDate: Moment, paymentInformationV3Worker: string, externalCode: BigNumber): GetByKeyRequestBuilder<PaymentInformationDetailV3Esp>;
    /**
     * Returns a request builder for querying all `PaymentInformationDetailV3Esp` entities.
     * @returns A request builder for creating requests to retrieve all `PaymentInformationDetailV3Esp` entities.
     */
    getAll(): GetAllRequestBuilder<PaymentInformationDetailV3Esp>;
    /**
     * Returns a request builder for creating a `PaymentInformationDetailV3Esp` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PaymentInformationDetailV3Esp`.
     */
    create(entity: PaymentInformationDetailV3Esp): CreateRequestBuilder<PaymentInformationDetailV3Esp>;
    /**
     * Returns a request builder for updating an entity of type `PaymentInformationDetailV3Esp`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PaymentInformationDetailV3Esp`.
     */
    update(entity: PaymentInformationDetailV3Esp): UpdateRequestBuilder<PaymentInformationDetailV3Esp>;
    /**
     * Returns a request builder for deleting an entity of type `PaymentInformationDetailV3Esp`.
     * @param paymentInformationDetailV3ExternalCode Key property. See [[PaymentInformationDetailV3Esp.paymentInformationDetailV3ExternalCode]].
     * @param paymentInformationV3EffectiveStartDate Key property. See [[PaymentInformationDetailV3Esp.paymentInformationV3EffectiveStartDate]].
     * @param paymentInformationV3Worker Key property. See [[PaymentInformationDetailV3Esp.paymentInformationV3Worker]].
     * @param externalCode Key property. See [[PaymentInformationDetailV3Esp.externalCode]].
     * @returns A request builder for creating requests that delete an entity of type `PaymentInformationDetailV3Esp`.
     */
    delete(paymentInformationDetailV3ExternalCode: BigNumber, paymentInformationV3EffectiveStartDate: Moment, paymentInformationV3Worker: string, externalCode: BigNumber): DeleteRequestBuilder<PaymentInformationDetailV3Esp>;
    /**
     * Returns a request builder for deleting an entity of type `PaymentInformationDetailV3Esp`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `PaymentInformationDetailV3Esp` by taking the entity as a parameter.
     */
    delete(entity: PaymentInformationDetailV3Esp): DeleteRequestBuilder<PaymentInformationDetailV3Esp>;
}
//# sourceMappingURL=PaymentInformationDetailV3EspRequestBuilder.d.ts.map