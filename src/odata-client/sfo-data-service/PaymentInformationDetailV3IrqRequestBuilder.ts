/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { PaymentInformationDetailV3Irq } from './PaymentInformationDetailV3Irq';

/**
 * Request builder class for operations supported on the [[PaymentInformationDetailV3Irq]] entity.
 */
export class PaymentInformationDetailV3IrqRequestBuilder extends RequestBuilder<PaymentInformationDetailV3Irq> {
  /**
   * Returns a request builder for retrieving one `PaymentInformationDetailV3Irq` entity based on its keys.
   * @param paymentInformationDetailV3ExternalCode Key property. See [[PaymentInformationDetailV3Irq.paymentInformationDetailV3ExternalCode]].
   * @param paymentInformationV3EffectiveStartDate Key property. See [[PaymentInformationDetailV3Irq.paymentInformationV3EffectiveStartDate]].
   * @param paymentInformationV3Worker Key property. See [[PaymentInformationDetailV3Irq.paymentInformationV3Worker]].
   * @param externalCode Key property. See [[PaymentInformationDetailV3Irq.externalCode]].
   * @returns A request builder for creating requests to retrieve one `PaymentInformationDetailV3Irq` entity based on its keys.
   */
  getByKey(paymentInformationDetailV3ExternalCode: BigNumber, paymentInformationV3EffectiveStartDate: Moment, paymentInformationV3Worker: string, externalCode: BigNumber): GetByKeyRequestBuilder<PaymentInformationDetailV3Irq> {
    return new GetByKeyRequestBuilder(PaymentInformationDetailV3Irq, {
      PaymentInformationDetailV3_externalCode: paymentInformationDetailV3ExternalCode,
      PaymentInformationV3_effectiveStartDate: paymentInformationV3EffectiveStartDate,
      PaymentInformationV3_worker: paymentInformationV3Worker,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `PaymentInformationDetailV3Irq` entities.
   * @returns A request builder for creating requests to retrieve all `PaymentInformationDetailV3Irq` entities.
   */
  getAll(): GetAllRequestBuilder<PaymentInformationDetailV3Irq> {
    return new GetAllRequestBuilder(PaymentInformationDetailV3Irq);
  }

  /**
   * Returns a request builder for creating a `PaymentInformationDetailV3Irq` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PaymentInformationDetailV3Irq`.
   */
  create(entity: PaymentInformationDetailV3Irq): CreateRequestBuilder<PaymentInformationDetailV3Irq> {
    return new CreateRequestBuilder(PaymentInformationDetailV3Irq, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `PaymentInformationDetailV3Irq`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PaymentInformationDetailV3Irq`.
   */
  update(entity: PaymentInformationDetailV3Irq): UpdateRequestBuilder<PaymentInformationDetailV3Irq> {
    return new UpdateRequestBuilder(PaymentInformationDetailV3Irq, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PaymentInformationDetailV3Irq`.
   * @param paymentInformationDetailV3ExternalCode Key property. See [[PaymentInformationDetailV3Irq.paymentInformationDetailV3ExternalCode]].
   * @param paymentInformationV3EffectiveStartDate Key property. See [[PaymentInformationDetailV3Irq.paymentInformationV3EffectiveStartDate]].
   * @param paymentInformationV3Worker Key property. See [[PaymentInformationDetailV3Irq.paymentInformationV3Worker]].
   * @param externalCode Key property. See [[PaymentInformationDetailV3Irq.externalCode]].
   * @returns A request builder for creating requests that delete an entity of type `PaymentInformationDetailV3Irq`.
   */
  delete(paymentInformationDetailV3ExternalCode: BigNumber, paymentInformationV3EffectiveStartDate: Moment, paymentInformationV3Worker: string, externalCode: BigNumber): DeleteRequestBuilder<PaymentInformationDetailV3Irq>;
  /**
   * Returns a request builder for deleting an entity of type `PaymentInformationDetailV3Irq`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PaymentInformationDetailV3Irq` by taking the entity as a parameter.
   */
  delete(entity: PaymentInformationDetailV3Irq): DeleteRequestBuilder<PaymentInformationDetailV3Irq>;
  delete(paymentInformationDetailV3ExternalCodeOrEntity: any, paymentInformationV3EffectiveStartDate?: Moment, paymentInformationV3Worker?: string, externalCode?: BigNumber): DeleteRequestBuilder<PaymentInformationDetailV3Irq> {
    return new DeleteRequestBuilder(PaymentInformationDetailV3Irq, paymentInformationDetailV3ExternalCodeOrEntity instanceof PaymentInformationDetailV3Irq ? paymentInformationDetailV3ExternalCodeOrEntity : {
      PaymentInformationDetailV3_externalCode: paymentInformationDetailV3ExternalCodeOrEntity!,
      PaymentInformationV3_effectiveStartDate: paymentInformationV3EffectiveStartDate!,
      PaymentInformationV3_worker: paymentInformationV3Worker!,
      externalCode: externalCode!
    });
  }
}
