/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { PaymentInformationDetailV3Ita } from './PaymentInformationDetailV3Ita';

/**
 * Request builder class for operations supported on the [[PaymentInformationDetailV3Ita]] entity.
 */
export class PaymentInformationDetailV3ItaRequestBuilder extends RequestBuilder<PaymentInformationDetailV3Ita> {
  /**
   * Returns a request builder for retrieving one `PaymentInformationDetailV3Ita` entity based on its keys.
   * @param paymentInformationDetailV3ExternalCode Key property. See [[PaymentInformationDetailV3Ita.paymentInformationDetailV3ExternalCode]].
   * @param paymentInformationV3EffectiveStartDate Key property. See [[PaymentInformationDetailV3Ita.paymentInformationV3EffectiveStartDate]].
   * @param paymentInformationV3Worker Key property. See [[PaymentInformationDetailV3Ita.paymentInformationV3Worker]].
   * @param externalCode Key property. See [[PaymentInformationDetailV3Ita.externalCode]].
   * @returns A request builder for creating requests to retrieve one `PaymentInformationDetailV3Ita` entity based on its keys.
   */
  getByKey(paymentInformationDetailV3ExternalCode: BigNumber, paymentInformationV3EffectiveStartDate: Moment, paymentInformationV3Worker: string, externalCode: BigNumber): GetByKeyRequestBuilder<PaymentInformationDetailV3Ita> {
    return new GetByKeyRequestBuilder(PaymentInformationDetailV3Ita, {
      PaymentInformationDetailV3_externalCode: paymentInformationDetailV3ExternalCode,
      PaymentInformationV3_effectiveStartDate: paymentInformationV3EffectiveStartDate,
      PaymentInformationV3_worker: paymentInformationV3Worker,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `PaymentInformationDetailV3Ita` entities.
   * @returns A request builder for creating requests to retrieve all `PaymentInformationDetailV3Ita` entities.
   */
  getAll(): GetAllRequestBuilder<PaymentInformationDetailV3Ita> {
    return new GetAllRequestBuilder(PaymentInformationDetailV3Ita);
  }

  /**
   * Returns a request builder for creating a `PaymentInformationDetailV3Ita` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PaymentInformationDetailV3Ita`.
   */
  create(entity: PaymentInformationDetailV3Ita): CreateRequestBuilder<PaymentInformationDetailV3Ita> {
    return new CreateRequestBuilder(PaymentInformationDetailV3Ita, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `PaymentInformationDetailV3Ita`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PaymentInformationDetailV3Ita`.
   */
  update(entity: PaymentInformationDetailV3Ita): UpdateRequestBuilder<PaymentInformationDetailV3Ita> {
    return new UpdateRequestBuilder(PaymentInformationDetailV3Ita, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PaymentInformationDetailV3Ita`.
   * @param paymentInformationDetailV3ExternalCode Key property. See [[PaymentInformationDetailV3Ita.paymentInformationDetailV3ExternalCode]].
   * @param paymentInformationV3EffectiveStartDate Key property. See [[PaymentInformationDetailV3Ita.paymentInformationV3EffectiveStartDate]].
   * @param paymentInformationV3Worker Key property. See [[PaymentInformationDetailV3Ita.paymentInformationV3Worker]].
   * @param externalCode Key property. See [[PaymentInformationDetailV3Ita.externalCode]].
   * @returns A request builder for creating requests that delete an entity of type `PaymentInformationDetailV3Ita`.
   */
  delete(paymentInformationDetailV3ExternalCode: BigNumber, paymentInformationV3EffectiveStartDate: Moment, paymentInformationV3Worker: string, externalCode: BigNumber): DeleteRequestBuilder<PaymentInformationDetailV3Ita>;
  /**
   * Returns a request builder for deleting an entity of type `PaymentInformationDetailV3Ita`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PaymentInformationDetailV3Ita` by taking the entity as a parameter.
   */
  delete(entity: PaymentInformationDetailV3Ita): DeleteRequestBuilder<PaymentInformationDetailV3Ita>;
  delete(paymentInformationDetailV3ExternalCodeOrEntity: any, paymentInformationV3EffectiveStartDate?: Moment, paymentInformationV3Worker?: string, externalCode?: BigNumber): DeleteRequestBuilder<PaymentInformationDetailV3Ita> {
    return new DeleteRequestBuilder(PaymentInformationDetailV3Ita, paymentInformationDetailV3ExternalCodeOrEntity instanceof PaymentInformationDetailV3Ita ? paymentInformationDetailV3ExternalCodeOrEntity : {
      PaymentInformationDetailV3_externalCode: paymentInformationDetailV3ExternalCodeOrEntity!,
      PaymentInformationV3_effectiveStartDate: paymentInformationV3EffectiveStartDate!,
      PaymentInformationV3_worker: paymentInformationV3Worker!,
      externalCode: externalCode!
    });
  }
}
