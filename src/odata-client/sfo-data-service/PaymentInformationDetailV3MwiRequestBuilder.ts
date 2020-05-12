/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { PaymentInformationDetailV3Mwi } from './PaymentInformationDetailV3Mwi';

/**
 * Request builder class for operations supported on the [[PaymentInformationDetailV3Mwi]] entity.
 */
export class PaymentInformationDetailV3MwiRequestBuilder extends RequestBuilder<PaymentInformationDetailV3Mwi> {
  /**
   * Returns a request builder for retrieving one `PaymentInformationDetailV3Mwi` entity based on its keys.
   * @param paymentInformationDetailV3ExternalCode Key property. See [[PaymentInformationDetailV3Mwi.paymentInformationDetailV3ExternalCode]].
   * @param paymentInformationV3EffectiveStartDate Key property. See [[PaymentInformationDetailV3Mwi.paymentInformationV3EffectiveStartDate]].
   * @param paymentInformationV3Worker Key property. See [[PaymentInformationDetailV3Mwi.paymentInformationV3Worker]].
   * @param externalCode Key property. See [[PaymentInformationDetailV3Mwi.externalCode]].
   * @returns A request builder for creating requests to retrieve one `PaymentInformationDetailV3Mwi` entity based on its keys.
   */
  getByKey(paymentInformationDetailV3ExternalCode: BigNumber, paymentInformationV3EffectiveStartDate: Moment, paymentInformationV3Worker: string, externalCode: BigNumber): GetByKeyRequestBuilder<PaymentInformationDetailV3Mwi> {
    return new GetByKeyRequestBuilder(PaymentInformationDetailV3Mwi, {
      PaymentInformationDetailV3_externalCode: paymentInformationDetailV3ExternalCode,
      PaymentInformationV3_effectiveStartDate: paymentInformationV3EffectiveStartDate,
      PaymentInformationV3_worker: paymentInformationV3Worker,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `PaymentInformationDetailV3Mwi` entities.
   * @returns A request builder for creating requests to retrieve all `PaymentInformationDetailV3Mwi` entities.
   */
  getAll(): GetAllRequestBuilder<PaymentInformationDetailV3Mwi> {
    return new GetAllRequestBuilder(PaymentInformationDetailV3Mwi);
  }

  /**
   * Returns a request builder for creating a `PaymentInformationDetailV3Mwi` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PaymentInformationDetailV3Mwi`.
   */
  create(entity: PaymentInformationDetailV3Mwi): CreateRequestBuilder<PaymentInformationDetailV3Mwi> {
    return new CreateRequestBuilder(PaymentInformationDetailV3Mwi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `PaymentInformationDetailV3Mwi`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PaymentInformationDetailV3Mwi`.
   */
  update(entity: PaymentInformationDetailV3Mwi): UpdateRequestBuilder<PaymentInformationDetailV3Mwi> {
    return new UpdateRequestBuilder(PaymentInformationDetailV3Mwi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PaymentInformationDetailV3Mwi`.
   * @param paymentInformationDetailV3ExternalCode Key property. See [[PaymentInformationDetailV3Mwi.paymentInformationDetailV3ExternalCode]].
   * @param paymentInformationV3EffectiveStartDate Key property. See [[PaymentInformationDetailV3Mwi.paymentInformationV3EffectiveStartDate]].
   * @param paymentInformationV3Worker Key property. See [[PaymentInformationDetailV3Mwi.paymentInformationV3Worker]].
   * @param externalCode Key property. See [[PaymentInformationDetailV3Mwi.externalCode]].
   * @returns A request builder for creating requests that delete an entity of type `PaymentInformationDetailV3Mwi`.
   */
  delete(paymentInformationDetailV3ExternalCode: BigNumber, paymentInformationV3EffectiveStartDate: Moment, paymentInformationV3Worker: string, externalCode: BigNumber): DeleteRequestBuilder<PaymentInformationDetailV3Mwi>;
  /**
   * Returns a request builder for deleting an entity of type `PaymentInformationDetailV3Mwi`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PaymentInformationDetailV3Mwi` by taking the entity as a parameter.
   */
  delete(entity: PaymentInformationDetailV3Mwi): DeleteRequestBuilder<PaymentInformationDetailV3Mwi>;
  delete(paymentInformationDetailV3ExternalCodeOrEntity: any, paymentInformationV3EffectiveStartDate?: Moment, paymentInformationV3Worker?: string, externalCode?: BigNumber): DeleteRequestBuilder<PaymentInformationDetailV3Mwi> {
    return new DeleteRequestBuilder(PaymentInformationDetailV3Mwi, paymentInformationDetailV3ExternalCodeOrEntity instanceof PaymentInformationDetailV3Mwi ? paymentInformationDetailV3ExternalCodeOrEntity : {
      PaymentInformationDetailV3_externalCode: paymentInformationDetailV3ExternalCodeOrEntity!,
      PaymentInformationV3_effectiveStartDate: paymentInformationV3EffectiveStartDate!,
      PaymentInformationV3_worker: paymentInformationV3Worker!,
      externalCode: externalCode!
    });
  }
}
