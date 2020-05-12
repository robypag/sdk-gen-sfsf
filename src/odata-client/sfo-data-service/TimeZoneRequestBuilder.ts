/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { TimeZone } from './TimeZone';

/**
 * Request builder class for operations supported on the [[TimeZone]] entity.
 */
export class TimeZoneRequestBuilder extends RequestBuilder<TimeZone> {
  /**
   * Returns a request builder for retrieving one `TimeZone` entity based on its keys.
   * @param effectiveStartDate Key property. See [[TimeZone.effectiveStartDate]].
   * @param externalCode Key property. See [[TimeZone.externalCode]].
   * @returns A request builder for creating requests to retrieve one `TimeZone` entity based on its keys.
   */
  getByKey(effectiveStartDate: Moment, externalCode: string): GetByKeyRequestBuilder<TimeZone> {
    return new GetByKeyRequestBuilder(TimeZone, {
      effectiveStartDate: effectiveStartDate,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `TimeZone` entities.
   * @returns A request builder for creating requests to retrieve all `TimeZone` entities.
   */
  getAll(): GetAllRequestBuilder<TimeZone> {
    return new GetAllRequestBuilder(TimeZone);
  }

  /**
   * Returns a request builder for creating a `TimeZone` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TimeZone`.
   */
  create(entity: TimeZone): CreateRequestBuilder<TimeZone> {
    return new CreateRequestBuilder(TimeZone, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `TimeZone`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TimeZone`.
   */
  update(entity: TimeZone): UpdateRequestBuilder<TimeZone> {
    return new UpdateRequestBuilder(TimeZone, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `TimeZone`.
   * @param effectiveStartDate Key property. See [[TimeZone.effectiveStartDate]].
   * @param externalCode Key property. See [[TimeZone.externalCode]].
   * @returns A request builder for creating requests that delete an entity of type `TimeZone`.
   */
  delete(effectiveStartDate: Moment, externalCode: string): DeleteRequestBuilder<TimeZone>;
  /**
   * Returns a request builder for deleting an entity of type `TimeZone`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TimeZone` by taking the entity as a parameter.
   */
  delete(entity: TimeZone): DeleteRequestBuilder<TimeZone>;
  delete(effectiveStartDateOrEntity: any, externalCode?: string): DeleteRequestBuilder<TimeZone> {
    return new DeleteRequestBuilder(TimeZone, effectiveStartDateOrEntity instanceof TimeZone ? effectiveStartDateOrEntity : {
      effectiveStartDate: effectiveStartDateOrEntity!,
      externalCode: externalCode!
    });
  }
}
