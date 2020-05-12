import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { PaymentInformationDetailV3Zwe } from './PaymentInformationDetailV3Zwe';
/**
 * Request builder class for operations supported on the [[PaymentInformationDetailV3Zwe]] entity.
 */
export declare class PaymentInformationDetailV3ZweRequestBuilder extends RequestBuilder<PaymentInformationDetailV3Zwe> {
    /**
     * Returns a request builder for retrieving one `PaymentInformationDetailV3Zwe` entity based on its keys.
     * @param paymentInformationDetailV3ExternalCode Key property. See [[PaymentInformationDetailV3Zwe.paymentInformationDetailV3ExternalCode]].
     * @param paymentInformationV3EffectiveStartDate Key property. See [[PaymentInformationDetailV3Zwe.paymentInformationV3EffectiveStartDate]].
     * @param paymentInformationV3Worker Key property. See [[PaymentInformationDetailV3Zwe.paymentInformationV3Worker]].
     * @param externalCode Key property. See [[PaymentInformationDetailV3Zwe.externalCode]].
     * @returns A request builder for creating requests to retrieve one `PaymentInformationDetailV3Zwe` entity based on its keys.
     */
    getByKey(paymentInformationDetailV3ExternalCode: BigNumber, paymentInformationV3EffectiveStartDate: Moment, paymentInformationV3Worker: string, externalCode: BigNumber): GetByKeyRequestBuilder<PaymentInformationDetailV3Zwe>;
    /**
     * Returns a request builder for querying all `PaymentInformationDetailV3Zwe` entities.
     * @returns A request builder for creating requests to retrieve all `PaymentInformationDetailV3Zwe` entities.
     */
    getAll(): GetAllRequestBuilder<PaymentInformationDetailV3Zwe>;
    /**
     * Returns a request builder for creating a `PaymentInformationDetailV3Zwe` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PaymentInformationDetailV3Zwe`.
     */
    create(entity: PaymentInformationDetailV3Zwe): CreateRequestBuilder<PaymentInformationDetailV3Zwe>;
    /**
     * Returns a request builder for updating an entity of type `PaymentInformationDetailV3Zwe`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PaymentInformationDetailV3Zwe`.
     */
    update(entity: PaymentInformationDetailV3Zwe): UpdateRequestBuilder<PaymentInformationDetailV3Zwe>;
    /**
     * Returns a request builder for deleting an entity of type `PaymentInformationDetailV3Zwe`.
     * @param paymentInformationDetailV3ExternalCode Key property. See [[PaymentInformationDetailV3Zwe.paymentInformationDetailV3ExternalCode]].
     * @param paymentInformationV3EffectiveStartDate Key property. See [[PaymentInformationDetailV3Zwe.paymentInformationV3EffectiveStartDate]].
     * @param paymentInformationV3Worker Key property. See [[PaymentInformationDetailV3Zwe.paymentInformationV3Worker]].
     * @param externalCode Key property. See [[PaymentInformationDetailV3Zwe.externalCode]].
     * @returns A request builder for creating requests that delete an entity of type `PaymentInformationDetailV3Zwe`.
     */
    delete(paymentInformationDetailV3ExternalCode: BigNumber, paymentInformationV3EffectiveStartDate: Moment, paymentInformationV3Worker: string, externalCode: BigNumber): DeleteRequestBuilder<PaymentInformationDetailV3Zwe>;
    /**
     * Returns a request builder for deleting an entity of type `PaymentInformationDetailV3Zwe`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `PaymentInformationDetailV3Zwe` by taking the entity as a parameter.
     */
    delete(entity: PaymentInformationDetailV3Zwe): DeleteRequestBuilder<PaymentInformationDetailV3Zwe>;
}
//# sourceMappingURL=PaymentInformationDetailV3ZweRequestBuilder.d.ts.map