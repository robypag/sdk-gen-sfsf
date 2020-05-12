/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { PaymentMethodAssignmentV3 } from './PaymentMethodAssignmentV3';

/**
 * Request builder class for operations supported on the [[PaymentMethodAssignmentV3]] entity.
 */
export class PaymentMethodAssignmentV3RequestBuilder extends RequestBuilder<PaymentMethodAssignmentV3> {
  /**
   * Returns a request builder for retrieving one `PaymentMethodAssignmentV3` entity based on its keys.
   * @param paymentMethodV3ExternalCode Key property. See [[PaymentMethodAssignmentV3.paymentMethodV3ExternalCode]].
   * @param externalCode Key property. See [[PaymentMethodAssignmentV3.externalCode]].
   * @returns A request builder for creating requests to retrieve one `PaymentMethodAssignmentV3` entity based on its keys.
   */
  getByKey(paymentMethodV3ExternalCode: string, externalCode: BigNumber): GetByKeyRequestBuilder<PaymentMethodAssignmentV3> {
    return new GetByKeyRequestBuilder(PaymentMethodAssignmentV3, {
      PaymentMethodV3_externalCode: paymentMethodV3ExternalCode,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `PaymentMethodAssignmentV3` entities.
   * @returns A request builder for creating requests to retrieve all `PaymentMethodAssignmentV3` entities.
   */
  getAll(): GetAllRequestBuilder<PaymentMethodAssignmentV3> {
    return new GetAllRequestBuilder(PaymentMethodAssignmentV3);
  }

  /**
   * Returns a request builder for creating a `PaymentMethodAssignmentV3` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PaymentMethodAssignmentV3`.
   */
  create(entity: PaymentMethodAssignmentV3): CreateRequestBuilder<PaymentMethodAssignmentV3> {
    return new CreateRequestBuilder(PaymentMethodAssignmentV3, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `PaymentMethodAssignmentV3`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PaymentMethodAssignmentV3`.
   */
  update(entity: PaymentMethodAssignmentV3): UpdateRequestBuilder<PaymentMethodAssignmentV3> {
    return new UpdateRequestBuilder(PaymentMethodAssignmentV3, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PaymentMethodAssignmentV3`.
   * @param paymentMethodV3ExternalCode Key property. See [[PaymentMethodAssignmentV3.paymentMethodV3ExternalCode]].
   * @param externalCode Key property. See [[PaymentMethodAssignmentV3.externalCode]].
   * @returns A request builder for creating requests that delete an entity of type `PaymentMethodAssignmentV3`.
   */
  delete(paymentMethodV3ExternalCode: string, externalCode: BigNumber): DeleteRequestBuilder<PaymentMethodAssignmentV3>;
  /**
   * Returns a request builder for deleting an entity of type `PaymentMethodAssignmentV3`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PaymentMethodAssignmentV3` by taking the entity as a parameter.
   */
  delete(entity: PaymentMethodAssignmentV3): DeleteRequestBuilder<PaymentMethodAssignmentV3>;
  delete(paymentMethodV3ExternalCodeOrEntity: any, externalCode?: BigNumber): DeleteRequestBuilder<PaymentMethodAssignmentV3> {
    return new DeleteRequestBuilder(PaymentMethodAssignmentV3, paymentMethodV3ExternalCodeOrEntity instanceof PaymentMethodAssignmentV3 ? paymentMethodV3ExternalCodeOrEntity : {
      PaymentMethodV3_externalCode: paymentMethodV3ExternalCodeOrEntity!,
      externalCode: externalCode!
    });
  }
}
