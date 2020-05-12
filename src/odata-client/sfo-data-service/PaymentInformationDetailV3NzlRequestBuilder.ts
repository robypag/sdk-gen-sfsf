/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { PaymentInformationDetailV3Nzl } from './PaymentInformationDetailV3Nzl';

/**
 * Request builder class for operations supported on the [[PaymentInformationDetailV3Nzl]] entity.
 */
export class PaymentInformationDetailV3NzlRequestBuilder extends RequestBuilder<PaymentInformationDetailV3Nzl> {
  /**
   * Returns a request builder for retrieving one `PaymentInformationDetailV3Nzl` entity based on its keys.
   * @param paymentInformationDetailV3ExternalCode Key property. See [[PaymentInformationDetailV3Nzl.paymentInformationDetailV3ExternalCode]].
   * @param paymentInformationV3EffectiveStartDate Key property. See [[PaymentInformationDetailV3Nzl.paymentInformationV3EffectiveStartDate]].
   * @param paymentInformationV3Worker Key property. See [[PaymentInformationDetailV3Nzl.paymentInformationV3Worker]].
   * @param externalCode Key property. See [[PaymentInformationDetailV3Nzl.externalCode]].
   * @returns A request builder for creating requests to retrieve one `PaymentInformationDetailV3Nzl` entity based on its keys.
   */
  getByKey(paymentInformationDetailV3ExternalCode: BigNumber, paymentInformationV3EffectiveStartDate: Moment, paymentInformationV3Worker: string, externalCode: BigNumber): GetByKeyRequestBuilder<PaymentInformationDetailV3Nzl> {
    return new GetByKeyRequestBuilder(PaymentInformationDetailV3Nzl, {
      PaymentInformationDetailV3_externalCode: paymentInformationDetailV3ExternalCode,
      PaymentInformationV3_effectiveStartDate: paymentInformationV3EffectiveStartDate,
      PaymentInformationV3_worker: paymentInformationV3Worker,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `PaymentInformationDetailV3Nzl` entities.
   * @returns A request builder for creating requests to retrieve all `PaymentInformationDetailV3Nzl` entities.
   */
  getAll(): GetAllRequestBuilder<PaymentInformationDetailV3Nzl> {
    return new GetAllRequestBuilder(PaymentInformationDetailV3Nzl);
  }

  /**
   * Returns a request builder for creating a `PaymentInformationDetailV3Nzl` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PaymentInformationDetailV3Nzl`.
   */
  create(entity: PaymentInformationDetailV3Nzl): CreateRequestBuilder<PaymentInformationDetailV3Nzl> {
    return new CreateRequestBuilder(PaymentInformationDetailV3Nzl, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `PaymentInformationDetailV3Nzl`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PaymentInformationDetailV3Nzl`.
   */
  update(entity: PaymentInformationDetailV3Nzl): UpdateRequestBuilder<PaymentInformationDetailV3Nzl> {
    return new UpdateRequestBuilder(PaymentInformationDetailV3Nzl, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PaymentInformationDetailV3Nzl`.
   * @param paymentInformationDetailV3ExternalCode Key property. See [[PaymentInformationDetailV3Nzl.paymentInformationDetailV3ExternalCode]].
   * @param paymentInformationV3EffectiveStartDate Key property. See [[PaymentInformationDetailV3Nzl.paymentInformationV3EffectiveStartDate]].
   * @param paymentInformationV3Worker Key property. See [[PaymentInformationDetailV3Nzl.paymentInformationV3Worker]].
   * @param externalCode Key property. See [[PaymentInformationDetailV3Nzl.externalCode]].
   * @returns A request builder for creating requests that delete an entity of type `PaymentInformationDetailV3Nzl`.
   */
  delete(paymentInformationDetailV3ExternalCode: BigNumber, paymentInformationV3EffectiveStartDate: Moment, paymentInformationV3Worker: string, externalCode: BigNumber): DeleteRequestBuilder<PaymentInformationDetailV3Nzl>;
  /**
   * Returns a request builder for deleting an entity of type `PaymentInformationDetailV3Nzl`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PaymentInformationDetailV3Nzl` by taking the entity as a parameter.
   */
  delete(entity: PaymentInformationDetailV3Nzl): DeleteRequestBuilder<PaymentInformationDetailV3Nzl>;
  delete(paymentInformationDetailV3ExternalCodeOrEntity: any, paymentInformationV3EffectiveStartDate?: Moment, paymentInformationV3Worker?: string, externalCode?: BigNumber): DeleteRequestBuilder<PaymentInformationDetailV3Nzl> {
    return new DeleteRequestBuilder(PaymentInformationDetailV3Nzl, paymentInformationDetailV3ExternalCodeOrEntity instanceof PaymentInformationDetailV3Nzl ? paymentInformationDetailV3ExternalCodeOrEntity : {
      PaymentInformationDetailV3_externalCode: paymentInformationDetailV3ExternalCodeOrEntity!,
      PaymentInformationV3_effectiveStartDate: paymentInformationV3EffectiveStartDate!,
      PaymentInformationV3_worker: paymentInformationV3Worker!,
      externalCode: externalCode!
    });
  }
}
