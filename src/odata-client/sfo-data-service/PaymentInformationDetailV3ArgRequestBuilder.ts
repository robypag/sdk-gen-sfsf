/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { PaymentInformationDetailV3Arg } from './PaymentInformationDetailV3Arg';

/**
 * Request builder class for operations supported on the [[PaymentInformationDetailV3Arg]] entity.
 */
export class PaymentInformationDetailV3ArgRequestBuilder extends RequestBuilder<PaymentInformationDetailV3Arg> {
  /**
   * Returns a request builder for retrieving one `PaymentInformationDetailV3Arg` entity based on its keys.
   * @param paymentInformationDetailV3ExternalCode Key property. See [[PaymentInformationDetailV3Arg.paymentInformationDetailV3ExternalCode]].
   * @param paymentInformationV3EffectiveStartDate Key property. See [[PaymentInformationDetailV3Arg.paymentInformationV3EffectiveStartDate]].
   * @param paymentInformationV3Worker Key property. See [[PaymentInformationDetailV3Arg.paymentInformationV3Worker]].
   * @param externalCode Key property. See [[PaymentInformationDetailV3Arg.externalCode]].
   * @returns A request builder for creating requests to retrieve one `PaymentInformationDetailV3Arg` entity based on its keys.
   */
  getByKey(paymentInformationDetailV3ExternalCode: BigNumber, paymentInformationV3EffectiveStartDate: Moment, paymentInformationV3Worker: string, externalCode: BigNumber): GetByKeyRequestBuilder<PaymentInformationDetailV3Arg> {
    return new GetByKeyRequestBuilder(PaymentInformationDetailV3Arg, {
      PaymentInformationDetailV3_externalCode: paymentInformationDetailV3ExternalCode,
      PaymentInformationV3_effectiveStartDate: paymentInformationV3EffectiveStartDate,
      PaymentInformationV3_worker: paymentInformationV3Worker,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `PaymentInformationDetailV3Arg` entities.
   * @returns A request builder for creating requests to retrieve all `PaymentInformationDetailV3Arg` entities.
   */
  getAll(): GetAllRequestBuilder<PaymentInformationDetailV3Arg> {
    return new GetAllRequestBuilder(PaymentInformationDetailV3Arg);
  }

  /**
   * Returns a request builder for creating a `PaymentInformationDetailV3Arg` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PaymentInformationDetailV3Arg`.
   */
  create(entity: PaymentInformationDetailV3Arg): CreateRequestBuilder<PaymentInformationDetailV3Arg> {
    return new CreateRequestBuilder(PaymentInformationDetailV3Arg, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `PaymentInformationDetailV3Arg`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PaymentInformationDetailV3Arg`.
   */
  update(entity: PaymentInformationDetailV3Arg): UpdateRequestBuilder<PaymentInformationDetailV3Arg> {
    return new UpdateRequestBuilder(PaymentInformationDetailV3Arg, entity);
  }

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
  delete(paymentInformationDetailV3ExternalCodeOrEntity: any, paymentInformationV3EffectiveStartDate?: Moment, paymentInformationV3Worker?: string, externalCode?: BigNumber): DeleteRequestBuilder<PaymentInformationDetailV3Arg> {
    return new DeleteRequestBuilder(PaymentInformationDetailV3Arg, paymentInformationDetailV3ExternalCodeOrEntity instanceof PaymentInformationDetailV3Arg ? paymentInformationDetailV3ExternalCodeOrEntity : {
      PaymentInformationDetailV3_externalCode: paymentInformationDetailV3ExternalCodeOrEntity!,
      PaymentInformationV3_effectiveStartDate: paymentInformationV3EffectiveStartDate!,
      PaymentInformationV3_worker: paymentInformationV3Worker!,
      externalCode: externalCode!
    });
  }
}
