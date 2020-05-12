/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { PaymentInformationDetailV3Usa } from './PaymentInformationDetailV3Usa';

/**
 * Request builder class for operations supported on the [[PaymentInformationDetailV3Usa]] entity.
 */
export class PaymentInformationDetailV3UsaRequestBuilder extends RequestBuilder<PaymentInformationDetailV3Usa> {
  /**
   * Returns a request builder for retrieving one `PaymentInformationDetailV3Usa` entity based on its keys.
   * @param paymentInformationDetailV3ExternalCode Key property. See [[PaymentInformationDetailV3Usa.paymentInformationDetailV3ExternalCode]].
   * @param paymentInformationV3EffectiveStartDate Key property. See [[PaymentInformationDetailV3Usa.paymentInformationV3EffectiveStartDate]].
   * @param paymentInformationV3Worker Key property. See [[PaymentInformationDetailV3Usa.paymentInformationV3Worker]].
   * @param externalCode Key property. See [[PaymentInformationDetailV3Usa.externalCode]].
   * @returns A request builder for creating requests to retrieve one `PaymentInformationDetailV3Usa` entity based on its keys.
   */
  getByKey(paymentInformationDetailV3ExternalCode: BigNumber, paymentInformationV3EffectiveStartDate: Moment, paymentInformationV3Worker: string, externalCode: BigNumber): GetByKeyRequestBuilder<PaymentInformationDetailV3Usa> {
    return new GetByKeyRequestBuilder(PaymentInformationDetailV3Usa, {
      PaymentInformationDetailV3_externalCode: paymentInformationDetailV3ExternalCode,
      PaymentInformationV3_effectiveStartDate: paymentInformationV3EffectiveStartDate,
      PaymentInformationV3_worker: paymentInformationV3Worker,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `PaymentInformationDetailV3Usa` entities.
   * @returns A request builder for creating requests to retrieve all `PaymentInformationDetailV3Usa` entities.
   */
  getAll(): GetAllRequestBuilder<PaymentInformationDetailV3Usa> {
    return new GetAllRequestBuilder(PaymentInformationDetailV3Usa);
  }

  /**
   * Returns a request builder for creating a `PaymentInformationDetailV3Usa` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PaymentInformationDetailV3Usa`.
   */
  create(entity: PaymentInformationDetailV3Usa): CreateRequestBuilder<PaymentInformationDetailV3Usa> {
    return new CreateRequestBuilder(PaymentInformationDetailV3Usa, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `PaymentInformationDetailV3Usa`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PaymentInformationDetailV3Usa`.
   */
  update(entity: PaymentInformationDetailV3Usa): UpdateRequestBuilder<PaymentInformationDetailV3Usa> {
    return new UpdateRequestBuilder(PaymentInformationDetailV3Usa, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PaymentInformationDetailV3Usa`.
   * @param paymentInformationDetailV3ExternalCode Key property. See [[PaymentInformationDetailV3Usa.paymentInformationDetailV3ExternalCode]].
   * @param paymentInformationV3EffectiveStartDate Key property. See [[PaymentInformationDetailV3Usa.paymentInformationV3EffectiveStartDate]].
   * @param paymentInformationV3Worker Key property. See [[PaymentInformationDetailV3Usa.paymentInformationV3Worker]].
   * @param externalCode Key property. See [[PaymentInformationDetailV3Usa.externalCode]].
   * @returns A request builder for creating requests that delete an entity of type `PaymentInformationDetailV3Usa`.
   */
  delete(paymentInformationDetailV3ExternalCode: BigNumber, paymentInformationV3EffectiveStartDate: Moment, paymentInformationV3Worker: string, externalCode: BigNumber): DeleteRequestBuilder<PaymentInformationDetailV3Usa>;
  /**
   * Returns a request builder for deleting an entity of type `PaymentInformationDetailV3Usa`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PaymentInformationDetailV3Usa` by taking the entity as a parameter.
   */
  delete(entity: PaymentInformationDetailV3Usa): DeleteRequestBuilder<PaymentInformationDetailV3Usa>;
  delete(paymentInformationDetailV3ExternalCodeOrEntity: any, paymentInformationV3EffectiveStartDate?: Moment, paymentInformationV3Worker?: string, externalCode?: BigNumber): DeleteRequestBuilder<PaymentInformationDetailV3Usa> {
    return new DeleteRequestBuilder(PaymentInformationDetailV3Usa, paymentInformationDetailV3ExternalCodeOrEntity instanceof PaymentInformationDetailV3Usa ? paymentInformationDetailV3ExternalCodeOrEntity : {
      PaymentInformationDetailV3_externalCode: paymentInformationDetailV3ExternalCodeOrEntity!,
      PaymentInformationV3_effectiveStartDate: paymentInformationV3EffectiveStartDate!,
      PaymentInformationV3_worker: paymentInformationV3Worker!,
      externalCode: externalCode!
    });
  }
}
