/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { PaymentInformationV3 } from './PaymentInformationV3';

/**
 * Request builder class for operations supported on the [[PaymentInformationV3]] entity.
 */
export class PaymentInformationV3RequestBuilder extends RequestBuilder<PaymentInformationV3> {
  /**
   * Returns a request builder for retrieving one `PaymentInformationV3` entity based on its keys.
   * @param effectiveStartDate Key property. See [[PaymentInformationV3.effectiveStartDate]].
   * @param worker Key property. See [[PaymentInformationV3.worker]].
   * @returns A request builder for creating requests to retrieve one `PaymentInformationV3` entity based on its keys.
   */
  getByKey(effectiveStartDate: Moment, worker: string): GetByKeyRequestBuilder<PaymentInformationV3> {
    return new GetByKeyRequestBuilder(PaymentInformationV3, {
      effectiveStartDate: effectiveStartDate,
      worker: worker
    });
  }

  /**
   * Returns a request builder for querying all `PaymentInformationV3` entities.
   * @returns A request builder for creating requests to retrieve all `PaymentInformationV3` entities.
   */
  getAll(): GetAllRequestBuilder<PaymentInformationV3> {
    return new GetAllRequestBuilder(PaymentInformationV3);
  }

  /**
   * Returns a request builder for creating a `PaymentInformationV3` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PaymentInformationV3`.
   */
  create(entity: PaymentInformationV3): CreateRequestBuilder<PaymentInformationV3> {
    return new CreateRequestBuilder(PaymentInformationV3, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `PaymentInformationV3`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PaymentInformationV3`.
   */
  update(entity: PaymentInformationV3): UpdateRequestBuilder<PaymentInformationV3> {
    return new UpdateRequestBuilder(PaymentInformationV3, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PaymentInformationV3`.
   * @param effectiveStartDate Key property. See [[PaymentInformationV3.effectiveStartDate]].
   * @param worker Key property. See [[PaymentInformationV3.worker]].
   * @returns A request builder for creating requests that delete an entity of type `PaymentInformationV3`.
   */
  delete(effectiveStartDate: Moment, worker: string): DeleteRequestBuilder<PaymentInformationV3>;
  /**
   * Returns a request builder for deleting an entity of type `PaymentInformationV3`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PaymentInformationV3` by taking the entity as a parameter.
   */
  delete(entity: PaymentInformationV3): DeleteRequestBuilder<PaymentInformationV3>;
  delete(effectiveStartDateOrEntity: any, worker?: string): DeleteRequestBuilder<PaymentInformationV3> {
    return new DeleteRequestBuilder(PaymentInformationV3, effectiveStartDateOrEntity instanceof PaymentInformationV3 ? effectiveStartDateOrEntity : {
      effectiveStartDate: effectiveStartDateOrEntity!,
      worker: worker!
    });
  }
}
