/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { PaymentInformationDetailV3Col } from './PaymentInformationDetailV3Col';

/**
 * Request builder class for operations supported on the [[PaymentInformationDetailV3Col]] entity.
 */
export class PaymentInformationDetailV3ColRequestBuilder extends RequestBuilder<PaymentInformationDetailV3Col> {
  /**
   * Returns a request builder for retrieving one `PaymentInformationDetailV3Col` entity based on its keys.
   * @param paymentInformationDetailV3ExternalCode Key property. See [[PaymentInformationDetailV3Col.paymentInformationDetailV3ExternalCode]].
   * @param paymentInformationV3EffectiveStartDate Key property. See [[PaymentInformationDetailV3Col.paymentInformationV3EffectiveStartDate]].
   * @param paymentInformationV3Worker Key property. See [[PaymentInformationDetailV3Col.paymentInformationV3Worker]].
   * @param externalCode Key property. See [[PaymentInformationDetailV3Col.externalCode]].
   * @returns A request builder for creating requests to retrieve one `PaymentInformationDetailV3Col` entity based on its keys.
   */
  getByKey(paymentInformationDetailV3ExternalCode: BigNumber, paymentInformationV3EffectiveStartDate: Moment, paymentInformationV3Worker: string, externalCode: BigNumber): GetByKeyRequestBuilder<PaymentInformationDetailV3Col> {
    return new GetByKeyRequestBuilder(PaymentInformationDetailV3Col, {
      PaymentInformationDetailV3_externalCode: paymentInformationDetailV3ExternalCode,
      PaymentInformationV3_effectiveStartDate: paymentInformationV3EffectiveStartDate,
      PaymentInformationV3_worker: paymentInformationV3Worker,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `PaymentInformationDetailV3Col` entities.
   * @returns A request builder for creating requests to retrieve all `PaymentInformationDetailV3Col` entities.
   */
  getAll(): GetAllRequestBuilder<PaymentInformationDetailV3Col> {
    return new GetAllRequestBuilder(PaymentInformationDetailV3Col);
  }

  /**
   * Returns a request builder for creating a `PaymentInformationDetailV3Col` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PaymentInformationDetailV3Col`.
   */
  create(entity: PaymentInformationDetailV3Col): CreateRequestBuilder<PaymentInformationDetailV3Col> {
    return new CreateRequestBuilder(PaymentInformationDetailV3Col, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `PaymentInformationDetailV3Col`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PaymentInformationDetailV3Col`.
   */
  update(entity: PaymentInformationDetailV3Col): UpdateRequestBuilder<PaymentInformationDetailV3Col> {
    return new UpdateRequestBuilder(PaymentInformationDetailV3Col, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PaymentInformationDetailV3Col`.
   * @param paymentInformationDetailV3ExternalCode Key property. See [[PaymentInformationDetailV3Col.paymentInformationDetailV3ExternalCode]].
   * @param paymentInformationV3EffectiveStartDate Key property. See [[PaymentInformationDetailV3Col.paymentInformationV3EffectiveStartDate]].
   * @param paymentInformationV3Worker Key property. See [[PaymentInformationDetailV3Col.paymentInformationV3Worker]].
   * @param externalCode Key property. See [[PaymentInformationDetailV3Col.externalCode]].
   * @returns A request builder for creating requests that delete an entity of type `PaymentInformationDetailV3Col`.
   */
  delete(paymentInformationDetailV3ExternalCode: BigNumber, paymentInformationV3EffectiveStartDate: Moment, paymentInformationV3Worker: string, externalCode: BigNumber): DeleteRequestBuilder<PaymentInformationDetailV3Col>;
  /**
   * Returns a request builder for deleting an entity of type `PaymentInformationDetailV3Col`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PaymentInformationDetailV3Col` by taking the entity as a parameter.
   */
  delete(entity: PaymentInformationDetailV3Col): DeleteRequestBuilder<PaymentInformationDetailV3Col>;
  delete(paymentInformationDetailV3ExternalCodeOrEntity: any, paymentInformationV3EffectiveStartDate?: Moment, paymentInformationV3Worker?: string, externalCode?: BigNumber): DeleteRequestBuilder<PaymentInformationDetailV3Col> {
    return new DeleteRequestBuilder(PaymentInformationDetailV3Col, paymentInformationDetailV3ExternalCodeOrEntity instanceof PaymentInformationDetailV3Col ? paymentInformationDetailV3ExternalCodeOrEntity : {
      PaymentInformationDetailV3_externalCode: paymentInformationDetailV3ExternalCodeOrEntity!,
      PaymentInformationV3_effectiveStartDate: paymentInformationV3EffectiveStartDate!,
      PaymentInformationV3_worker: paymentInformationV3Worker!,
      externalCode: externalCode!
    });
  }
}
