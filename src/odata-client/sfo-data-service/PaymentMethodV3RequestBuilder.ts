/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { PaymentMethodV3 } from './PaymentMethodV3';

/**
 * Request builder class for operations supported on the [[PaymentMethodV3]] entity.
 */
export class PaymentMethodV3RequestBuilder extends RequestBuilder<PaymentMethodV3> {
  /**
   * Returns a request builder for retrieving one `PaymentMethodV3` entity based on its keys.
   * @param externalCode Key property. See [[PaymentMethodV3.externalCode]].
   * @returns A request builder for creating requests to retrieve one `PaymentMethodV3` entity based on its keys.
   */
  getByKey(externalCode: string): GetByKeyRequestBuilder<PaymentMethodV3> {
    return new GetByKeyRequestBuilder(PaymentMethodV3, { externalCode: externalCode });
  }

  /**
   * Returns a request builder for querying all `PaymentMethodV3` entities.
   * @returns A request builder for creating requests to retrieve all `PaymentMethodV3` entities.
   */
  getAll(): GetAllRequestBuilder<PaymentMethodV3> {
    return new GetAllRequestBuilder(PaymentMethodV3);
  }

  /**
   * Returns a request builder for creating a `PaymentMethodV3` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PaymentMethodV3`.
   */
  create(entity: PaymentMethodV3): CreateRequestBuilder<PaymentMethodV3> {
    return new CreateRequestBuilder(PaymentMethodV3, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `PaymentMethodV3`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PaymentMethodV3`.
   */
  update(entity: PaymentMethodV3): UpdateRequestBuilder<PaymentMethodV3> {
    return new UpdateRequestBuilder(PaymentMethodV3, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PaymentMethodV3`.
   * @param externalCode Key property. See [[PaymentMethodV3.externalCode]].
   * @returns A request builder for creating requests that delete an entity of type `PaymentMethodV3`.
   */
  delete(externalCode: string): DeleteRequestBuilder<PaymentMethodV3>;
  /**
   * Returns a request builder for deleting an entity of type `PaymentMethodV3`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PaymentMethodV3` by taking the entity as a parameter.
   */
  delete(entity: PaymentMethodV3): DeleteRequestBuilder<PaymentMethodV3>;
  delete(externalCodeOrEntity: any): DeleteRequestBuilder<PaymentMethodV3> {
    return new DeleteRequestBuilder(PaymentMethodV3, externalCodeOrEntity instanceof PaymentMethodV3 ? externalCodeOrEntity : { externalCode: externalCodeOrEntity! });
  }
}
