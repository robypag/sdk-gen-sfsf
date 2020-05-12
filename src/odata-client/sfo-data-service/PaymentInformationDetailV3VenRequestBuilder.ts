/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { PaymentInformationDetailV3Ven } from './PaymentInformationDetailV3Ven';

/**
 * Request builder class for operations supported on the [[PaymentInformationDetailV3Ven]] entity.
 */
export class PaymentInformationDetailV3VenRequestBuilder extends RequestBuilder<PaymentInformationDetailV3Ven> {
  /**
   * Returns a request builder for retrieving one `PaymentInformationDetailV3Ven` entity based on its keys.
   * @param paymentInformationDetailV3ExternalCode Key property. See [[PaymentInformationDetailV3Ven.paymentInformationDetailV3ExternalCode]].
   * @param paymentInformationV3EffectiveStartDate Key property. See [[PaymentInformationDetailV3Ven.paymentInformationV3EffectiveStartDate]].
   * @param paymentInformationV3Worker Key property. See [[PaymentInformationDetailV3Ven.paymentInformationV3Worker]].
   * @param externalCode Key property. See [[PaymentInformationDetailV3Ven.externalCode]].
   * @returns A request builder for creating requests to retrieve one `PaymentInformationDetailV3Ven` entity based on its keys.
   */
  getByKey(paymentInformationDetailV3ExternalCode: BigNumber, paymentInformationV3EffectiveStartDate: Moment, paymentInformationV3Worker: string, externalCode: BigNumber): GetByKeyRequestBuilder<PaymentInformationDetailV3Ven> {
    return new GetByKeyRequestBuilder(PaymentInformationDetailV3Ven, {
      PaymentInformationDetailV3_externalCode: paymentInformationDetailV3ExternalCode,
      PaymentInformationV3_effectiveStartDate: paymentInformationV3EffectiveStartDate,
      PaymentInformationV3_worker: paymentInformationV3Worker,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `PaymentInformationDetailV3Ven` entities.
   * @returns A request builder for creating requests to retrieve all `PaymentInformationDetailV3Ven` entities.
   */
  getAll(): GetAllRequestBuilder<PaymentInformationDetailV3Ven> {
    return new GetAllRequestBuilder(PaymentInformationDetailV3Ven);
  }

  /**
   * Returns a request builder for creating a `PaymentInformationDetailV3Ven` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PaymentInformationDetailV3Ven`.
   */
  create(entity: PaymentInformationDetailV3Ven): CreateRequestBuilder<PaymentInformationDetailV3Ven> {
    return new CreateRequestBuilder(PaymentInformationDetailV3Ven, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `PaymentInformationDetailV3Ven`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PaymentInformationDetailV3Ven`.
   */
  update(entity: PaymentInformationDetailV3Ven): UpdateRequestBuilder<PaymentInformationDetailV3Ven> {
    return new UpdateRequestBuilder(PaymentInformationDetailV3Ven, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PaymentInformationDetailV3Ven`.
   * @param paymentInformationDetailV3ExternalCode Key property. See [[PaymentInformationDetailV3Ven.paymentInformationDetailV3ExternalCode]].
   * @param paymentInformationV3EffectiveStartDate Key property. See [[PaymentInformationDetailV3Ven.paymentInformationV3EffectiveStartDate]].
   * @param paymentInformationV3Worker Key property. See [[PaymentInformationDetailV3Ven.paymentInformationV3Worker]].
   * @param externalCode Key property. See [[PaymentInformationDetailV3Ven.externalCode]].
   * @returns A request builder for creating requests that delete an entity of type `PaymentInformationDetailV3Ven`.
   */
  delete(paymentInformationDetailV3ExternalCode: BigNumber, paymentInformationV3EffectiveStartDate: Moment, paymentInformationV3Worker: string, externalCode: BigNumber): DeleteRequestBuilder<PaymentInformationDetailV3Ven>;
  /**
   * Returns a request builder for deleting an entity of type `PaymentInformationDetailV3Ven`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PaymentInformationDetailV3Ven` by taking the entity as a parameter.
   */
  delete(entity: PaymentInformationDetailV3Ven): DeleteRequestBuilder<PaymentInformationDetailV3Ven>;
  delete(paymentInformationDetailV3ExternalCodeOrEntity: any, paymentInformationV3EffectiveStartDate?: Moment, paymentInformationV3Worker?: string, externalCode?: BigNumber): DeleteRequestBuilder<PaymentInformationDetailV3Ven> {
    return new DeleteRequestBuilder(PaymentInformationDetailV3Ven, paymentInformationDetailV3ExternalCodeOrEntity instanceof PaymentInformationDetailV3Ven ? paymentInformationDetailV3ExternalCodeOrEntity : {
      PaymentInformationDetailV3_externalCode: paymentInformationDetailV3ExternalCodeOrEntity!,
      PaymentInformationV3_effectiveStartDate: paymentInformationV3EffectiveStartDate!,
      PaymentInformationV3_worker: paymentInformationV3Worker!,
      externalCode: externalCode!
    });
  }
}
