/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { PaymentInformationDetailV3Zaf } from './PaymentInformationDetailV3Zaf';

/**
 * Request builder class for operations supported on the [[PaymentInformationDetailV3Zaf]] entity.
 */
export class PaymentInformationDetailV3ZafRequestBuilder extends RequestBuilder<PaymentInformationDetailV3Zaf> {
  /**
   * Returns a request builder for retrieving one `PaymentInformationDetailV3Zaf` entity based on its keys.
   * @param paymentInformationDetailV3ExternalCode Key property. See [[PaymentInformationDetailV3Zaf.paymentInformationDetailV3ExternalCode]].
   * @param paymentInformationV3EffectiveStartDate Key property. See [[PaymentInformationDetailV3Zaf.paymentInformationV3EffectiveStartDate]].
   * @param paymentInformationV3Worker Key property. See [[PaymentInformationDetailV3Zaf.paymentInformationV3Worker]].
   * @param externalCode Key property. See [[PaymentInformationDetailV3Zaf.externalCode]].
   * @returns A request builder for creating requests to retrieve one `PaymentInformationDetailV3Zaf` entity based on its keys.
   */
  getByKey(paymentInformationDetailV3ExternalCode: BigNumber, paymentInformationV3EffectiveStartDate: Moment, paymentInformationV3Worker: string, externalCode: BigNumber): GetByKeyRequestBuilder<PaymentInformationDetailV3Zaf> {
    return new GetByKeyRequestBuilder(PaymentInformationDetailV3Zaf, {
      PaymentInformationDetailV3_externalCode: paymentInformationDetailV3ExternalCode,
      PaymentInformationV3_effectiveStartDate: paymentInformationV3EffectiveStartDate,
      PaymentInformationV3_worker: paymentInformationV3Worker,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `PaymentInformationDetailV3Zaf` entities.
   * @returns A request builder for creating requests to retrieve all `PaymentInformationDetailV3Zaf` entities.
   */
  getAll(): GetAllRequestBuilder<PaymentInformationDetailV3Zaf> {
    return new GetAllRequestBuilder(PaymentInformationDetailV3Zaf);
  }

  /**
   * Returns a request builder for creating a `PaymentInformationDetailV3Zaf` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PaymentInformationDetailV3Zaf`.
   */
  create(entity: PaymentInformationDetailV3Zaf): CreateRequestBuilder<PaymentInformationDetailV3Zaf> {
    return new CreateRequestBuilder(PaymentInformationDetailV3Zaf, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `PaymentInformationDetailV3Zaf`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PaymentInformationDetailV3Zaf`.
   */
  update(entity: PaymentInformationDetailV3Zaf): UpdateRequestBuilder<PaymentInformationDetailV3Zaf> {
    return new UpdateRequestBuilder(PaymentInformationDetailV3Zaf, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PaymentInformationDetailV3Zaf`.
   * @param paymentInformationDetailV3ExternalCode Key property. See [[PaymentInformationDetailV3Zaf.paymentInformationDetailV3ExternalCode]].
   * @param paymentInformationV3EffectiveStartDate Key property. See [[PaymentInformationDetailV3Zaf.paymentInformationV3EffectiveStartDate]].
   * @param paymentInformationV3Worker Key property. See [[PaymentInformationDetailV3Zaf.paymentInformationV3Worker]].
   * @param externalCode Key property. See [[PaymentInformationDetailV3Zaf.externalCode]].
   * @returns A request builder for creating requests that delete an entity of type `PaymentInformationDetailV3Zaf`.
   */
  delete(paymentInformationDetailV3ExternalCode: BigNumber, paymentInformationV3EffectiveStartDate: Moment, paymentInformationV3Worker: string, externalCode: BigNumber): DeleteRequestBuilder<PaymentInformationDetailV3Zaf>;
  /**
   * Returns a request builder for deleting an entity of type `PaymentInformationDetailV3Zaf`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PaymentInformationDetailV3Zaf` by taking the entity as a parameter.
   */
  delete(entity: PaymentInformationDetailV3Zaf): DeleteRequestBuilder<PaymentInformationDetailV3Zaf>;
  delete(paymentInformationDetailV3ExternalCodeOrEntity: any, paymentInformationV3EffectiveStartDate?: Moment, paymentInformationV3Worker?: string, externalCode?: BigNumber): DeleteRequestBuilder<PaymentInformationDetailV3Zaf> {
    return new DeleteRequestBuilder(PaymentInformationDetailV3Zaf, paymentInformationDetailV3ExternalCodeOrEntity instanceof PaymentInformationDetailV3Zaf ? paymentInformationDetailV3ExternalCodeOrEntity : {
      PaymentInformationDetailV3_externalCode: paymentInformationDetailV3ExternalCodeOrEntity!,
      PaymentInformationV3_effectiveStartDate: paymentInformationV3EffectiveStartDate!,
      PaymentInformationV3_worker: paymentInformationV3Worker!,
      externalCode: externalCode!
    });
  }
}
