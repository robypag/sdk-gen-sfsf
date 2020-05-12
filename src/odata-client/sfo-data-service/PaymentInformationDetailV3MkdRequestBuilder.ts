/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { PaymentInformationDetailV3Mkd } from './PaymentInformationDetailV3Mkd';

/**
 * Request builder class for operations supported on the [[PaymentInformationDetailV3Mkd]] entity.
 */
export class PaymentInformationDetailV3MkdRequestBuilder extends RequestBuilder<PaymentInformationDetailV3Mkd> {
  /**
   * Returns a request builder for retrieving one `PaymentInformationDetailV3Mkd` entity based on its keys.
   * @param paymentInformationDetailV3ExternalCode Key property. See [[PaymentInformationDetailV3Mkd.paymentInformationDetailV3ExternalCode]].
   * @param paymentInformationV3EffectiveStartDate Key property. See [[PaymentInformationDetailV3Mkd.paymentInformationV3EffectiveStartDate]].
   * @param paymentInformationV3Worker Key property. See [[PaymentInformationDetailV3Mkd.paymentInformationV3Worker]].
   * @param externalCode Key property. See [[PaymentInformationDetailV3Mkd.externalCode]].
   * @returns A request builder for creating requests to retrieve one `PaymentInformationDetailV3Mkd` entity based on its keys.
   */
  getByKey(paymentInformationDetailV3ExternalCode: BigNumber, paymentInformationV3EffectiveStartDate: Moment, paymentInformationV3Worker: string, externalCode: BigNumber): GetByKeyRequestBuilder<PaymentInformationDetailV3Mkd> {
    return new GetByKeyRequestBuilder(PaymentInformationDetailV3Mkd, {
      PaymentInformationDetailV3_externalCode: paymentInformationDetailV3ExternalCode,
      PaymentInformationV3_effectiveStartDate: paymentInformationV3EffectiveStartDate,
      PaymentInformationV3_worker: paymentInformationV3Worker,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `PaymentInformationDetailV3Mkd` entities.
   * @returns A request builder for creating requests to retrieve all `PaymentInformationDetailV3Mkd` entities.
   */
  getAll(): GetAllRequestBuilder<PaymentInformationDetailV3Mkd> {
    return new GetAllRequestBuilder(PaymentInformationDetailV3Mkd);
  }

  /**
   * Returns a request builder for creating a `PaymentInformationDetailV3Mkd` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PaymentInformationDetailV3Mkd`.
   */
  create(entity: PaymentInformationDetailV3Mkd): CreateRequestBuilder<PaymentInformationDetailV3Mkd> {
    return new CreateRequestBuilder(PaymentInformationDetailV3Mkd, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `PaymentInformationDetailV3Mkd`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PaymentInformationDetailV3Mkd`.
   */
  update(entity: PaymentInformationDetailV3Mkd): UpdateRequestBuilder<PaymentInformationDetailV3Mkd> {
    return new UpdateRequestBuilder(PaymentInformationDetailV3Mkd, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PaymentInformationDetailV3Mkd`.
   * @param paymentInformationDetailV3ExternalCode Key property. See [[PaymentInformationDetailV3Mkd.paymentInformationDetailV3ExternalCode]].
   * @param paymentInformationV3EffectiveStartDate Key property. See [[PaymentInformationDetailV3Mkd.paymentInformationV3EffectiveStartDate]].
   * @param paymentInformationV3Worker Key property. See [[PaymentInformationDetailV3Mkd.paymentInformationV3Worker]].
   * @param externalCode Key property. See [[PaymentInformationDetailV3Mkd.externalCode]].
   * @returns A request builder for creating requests that delete an entity of type `PaymentInformationDetailV3Mkd`.
   */
  delete(paymentInformationDetailV3ExternalCode: BigNumber, paymentInformationV3EffectiveStartDate: Moment, paymentInformationV3Worker: string, externalCode: BigNumber): DeleteRequestBuilder<PaymentInformationDetailV3Mkd>;
  /**
   * Returns a request builder for deleting an entity of type `PaymentInformationDetailV3Mkd`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PaymentInformationDetailV3Mkd` by taking the entity as a parameter.
   */
  delete(entity: PaymentInformationDetailV3Mkd): DeleteRequestBuilder<PaymentInformationDetailV3Mkd>;
  delete(paymentInformationDetailV3ExternalCodeOrEntity: any, paymentInformationV3EffectiveStartDate?: Moment, paymentInformationV3Worker?: string, externalCode?: BigNumber): DeleteRequestBuilder<PaymentInformationDetailV3Mkd> {
    return new DeleteRequestBuilder(PaymentInformationDetailV3Mkd, paymentInformationDetailV3ExternalCodeOrEntity instanceof PaymentInformationDetailV3Mkd ? paymentInformationDetailV3ExternalCodeOrEntity : {
      PaymentInformationDetailV3_externalCode: paymentInformationDetailV3ExternalCodeOrEntity!,
      PaymentInformationV3_effectiveStartDate: paymentInformationV3EffectiveStartDate!,
      PaymentInformationV3_worker: paymentInformationV3Worker!,
      externalCode: externalCode!
    });
  }
}
