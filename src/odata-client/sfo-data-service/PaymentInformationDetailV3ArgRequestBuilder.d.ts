import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { PaymentInformationDetailV3Arg } from './PaymentInformationDetailV3Arg';
/**
 * Request builder class for operations supported on the [[PaymentInformationDetailV3Arg]] entity.
 */
export declare class PaymentInformationDetailV3ArgRequestBuilder extends RequestBuilder<PaymentInformationDetailV3Arg> {
    /**
     * Returns a request builder for retrieving one `PaymentInformationDetailV3Arg` entity based on its keys.
     * @param paymentInformationDetailV3ExternalCode Key property. See [[PaymentInformationDetailV3Arg.paymentInformationDetailV3ExternalCode]].
     * @param paymentInformationV3EffectiveStartDate Key property. See [[PaymentInformationDetailV3Arg.paymentInformationV3EffectiveStartDate]].
     * @param paymentInformationV3Worker Key property. See [[PaymentInformationDetailV3Arg.paymentInformationV3Worker]].
     * @param externalCode Key property. See [[PaymentInformationDetailV3Arg.externalCode]].
     * @returns A request builder for creating requests to retrieve one `PaymentInformationDetailV3Arg` entity based on its keys.
     */
    getByKey(paymentInformationDetailV3ExternalCode: BigNumber, paymentInformationV3EffectiveStartDate: Moment, paymentInformationV3Worker: string, externalCode: BigNumber): GetByKeyRequestBuilder<PaymentInformationDetailV3Arg>;
    /**
     * Returns a request builder for querying all `PaymentInformationDetailV3Arg` entities.
     * @returns A request builder for creating requests to retrieve all `PaymentInformationDetailV3Arg` entities.
     */
    getAll(): GetAllRequestBuilder<PaymentInformationDetailV3Arg>;
    /**
     * Returns a request builder for creating a `PaymentInformationDetailV3Arg` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PaymentInformationDetailV3Arg`.
     */
    create(entity: PaymentInformationDetailV3Arg): CreateRequestBuilder<PaymentInformationDetailV3Arg>;
    /**
     * Returns a request builder for updating an entity of type `PaymentInformationDetailV3Arg`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PaymentInformationDetailV3Arg`.
     */
    update(entity: PaymentInformationDetailV3Arg): UpdateRequestBuilder<PaymentInformationDetailV3Arg>;
    /**
     * Returns a request builder for deleting an entity of type `PaymentInformationDetailV3Arg`.
     * @param paymentInformationDetailV3ExternalCode Key property. See [[PaymentInformationDetailV3Arg.paymentInformationDetailV3ExternalCode]].
     * @param paymentInformationV3EffectiveStartDate Key property. See [[PaymentInformationDetailV3Arg.paymentInformationV3EffectiveStartDate]].
     * @param paymentInformationV3Worker Key property. See [[PaymentInformationDetailV3Arg.paymentInformationV3Worker]].
     * @param externalCode Key property. See [[PaymentInformationDetailV3Arg.externalCode]].
     * @returns A request builder for creating requests that delete an entity of type `PaymentInformationDetailV3Arg`.
     */
    delete(paymentInformationDetailV3ExternalCode: BigNumber, paymentInformationV3EffectiveStartDate: Moment, paymentInformationV3Worker: string, externalCode: BigNumber): DeleteRequestBuilder<PaymentInformationDetailV3Arg>;
    /**
     * Returns a request builder for deleting an entity of type `PaymentInformationDetailV3Arg`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `PaymentInformationDetailV3Arg` by taking the entity as a parameter.
     */
    delete(entity: PaymentInformationDetailV3Arg): DeleteRequestBuilder<PaymentInformationDetailV3Arg>;
}
//# sourceMappingURL=PaymentInformationDetailV3ArgRequestBuilder.d.ts.map