/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { PaymentInformationDetailV3Nam } from './PaymentInformationDetailV3Nam';

/**
 * Request builder class for operations supported on the [[PaymentInformationDetailV3Nam]] entity.
 */
export class PaymentInformationDetailV3NamRequestBuilder extends RequestBuilder<PaymentInformationDetailV3Nam> {
  /**
   * Returns a request builder for retrieving one `PaymentInformationDetailV3Nam` entity based on its keys.
   * @param paymentInformationDetailV3ExternalCode Key property. See [[PaymentInformationDetailV3Nam.paymentInformationDetailV3ExternalCode]].
   * @param paymentInformationV3EffectiveStartDate Key property. See [[PaymentInformationDetailV3Nam.paymentInformationV3EffectiveStartDate]].
   * @param paymentInformationV3Worker Key property. See [[PaymentInformationDetailV3Nam.paymentInformationV3Worker]].
   * @param externalCode Key property. See [[PaymentInformationDetailV3Nam.externalCode]].
   * @returns A request builder for creating requests to retrieve one `PaymentInformationDetailV3Nam` entity based on its keys.
   */
  getByKey(paymentInformationDetailV3ExternalCode: BigNumber, paymentInformationV3EffectiveStartDate: Moment, paymentInformationV3Worker: string, externalCode: BigNumber): GetByKeyRequestBuilder<PaymentInformationDetailV3Nam> {
    return new GetByKeyRequestBuilder(PaymentInformationDetailV3Nam, {
      PaymentInformationDetailV3_externalCode: paymentInformationDetailV3ExternalCode,
      PaymentInformationV3_effectiveStartDate: paymentInformationV3EffectiveStartDate,
      PaymentInformationV3_worker: paymentInformationV3Worker,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `PaymentInformationDetailV3Nam` entities.
   * @returns A request builder for creating requests to retrieve all `PaymentInformationDetailV3Nam` entities.
   */
  getAll(): GetAllRequestBuilder<PaymentInformationDetailV3Nam> {
    return new GetAllRequestBuilder(PaymentInformationDetailV3Nam);
  }

  /**
   * Returns a request builder for creating a `PaymentInformationDetailV3Nam` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PaymentInformationDetailV3Nam`.
   */
  create(entity: PaymentInformationDetailV3Nam): CreateRequestBuilder<PaymentInformationDetailV3Nam> {
    return new CreateRequestBuilder(PaymentInformationDetailV3Nam, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `PaymentInformationDetailV3Nam`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PaymentInformationDetailV3Nam`.
   */
  update(entity: PaymentInformationDetailV3Nam): UpdateRequestBuilder<PaymentInformationDetailV3Nam> {
    return new UpdateRequestBuilder(PaymentInformationDetailV3Nam, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PaymentInformationDetailV3Nam`.
   * @param paymentInformationDetailV3ExternalCode Key property. See [[PaymentInformationDetailV3Nam.paymentInformationDetailV3ExternalCode]].
   * @param paymentInformationV3EffectiveStartDate Key property. See [[PaymentInformationDetailV3Nam.paymentInformationV3EffectiveStartDate]].
   * @param paymentInformationV3Worker Key property. See [[PaymentInformationDetailV3Nam.paymentInformationV3Worker]].
   * @param externalCode Key property. See [[PaymentInformationDetailV3Nam.externalCode]].
   * @returns A request builder for creating requests that delete an entity of type `PaymentInformationDetailV3Nam`.
   */
  delete(paymentInformationDetailV3ExternalCode: BigNumber, paymentInformationV3EffectiveStartDate: Moment, paymentInformationV3Worker: string, externalCode: BigNumber): DeleteRequestBuilder<PaymentInformationDetailV3Nam>;
  /**
   * Returns a request builder for deleting an entity of type `PaymentInformationDetailV3Nam`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PaymentInformationDetailV3Nam` by taking the entity as a parameter.
   */
  delete(entity: PaymentInformationDetailV3Nam): DeleteRequestBuilder<PaymentInformationDetailV3Nam>;
  delete(paymentInformationDetailV3ExternalCodeOrEntity: any, paymentInformationV3EffectiveStartDate?: Moment, paymentInformationV3Worker?: string, externalCode?: BigNumber): DeleteRequestBuilder<PaymentInformationDetailV3Nam> {
    return new DeleteRequestBuilder(PaymentInformationDetailV3Nam, paymentInformationDetailV3ExternalCodeOrEntity instanceof PaymentInformationDetailV3Nam ? paymentInformationDetailV3ExternalCodeOrEntity : {
      PaymentInformationDetailV3_externalCode: paymentInformationDetailV3ExternalCodeOrEntity!,
      PaymentInformationV3_effectiveStartDate: paymentInformationV3EffectiveStartDate!,
      PaymentInformationV3_worker: paymentInformationV3Worker!,
      externalCode: externalCode!
    });
  }
}
