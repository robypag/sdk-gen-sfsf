/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { PayCalendar } from './PayCalendar';

/**
 * Request builder class for operations supported on the [[PayCalendar]] entity.
 */
export class PayCalendarRequestBuilder extends RequestBuilder<PayCalendar> {
  /**
   * Returns a request builder for retrieving one `PayCalendar` entity based on its keys.
   * @param payGroup Key property. See [[PayCalendar.payGroup]].
   * @returns A request builder for creating requests to retrieve one `PayCalendar` entity based on its keys.
   */
  getByKey(payGroup: string): GetByKeyRequestBuilder<PayCalendar> {
    return new GetByKeyRequestBuilder(PayCalendar, { payGroup: payGroup });
  }

  /**
   * Returns a request builder for querying all `PayCalendar` entities.
   * @returns A request builder for creating requests to retrieve all `PayCalendar` entities.
   */
  getAll(): GetAllRequestBuilder<PayCalendar> {
    return new GetAllRequestBuilder(PayCalendar);
  }

  /**
   * Returns a request builder for creating a `PayCalendar` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PayCalendar`.
   */
  create(entity: PayCalendar): CreateRequestBuilder<PayCalendar> {
    return new CreateRequestBuilder(PayCalendar, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `PayCalendar`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PayCalendar`.
   */
  update(entity: PayCalendar): UpdateRequestBuilder<PayCalendar> {
    return new UpdateRequestBuilder(PayCalendar, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PayCalendar`.
   * @param payGroup Key property. See [[PayCalendar.payGroup]].
   * @returns A request builder for creating requests that delete an entity of type `PayCalendar`.
   */
  delete(payGroup: string): DeleteRequestBuilder<PayCalendar>;
  /**
   * Returns a request builder for deleting an entity of type `PayCalendar`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PayCalendar` by taking the entity as a parameter.
   */
  delete(entity: PayCalendar): DeleteRequestBuilder<PayCalendar>;
  delete(payGroupOrEntity: any): DeleteRequestBuilder<PayCalendar> {
    return new DeleteRequestBuilder(PayCalendar, payGroupOrEntity instanceof PayCalendar ? payGroupOrEntity : { payGroup: payGroupOrEntity! });
  }
}
