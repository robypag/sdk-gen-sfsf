/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { PayScaleLevel } from './PayScaleLevel';

/**
 * Request builder class for operations supported on the [[PayScaleLevel]] entity.
 */
export class PayScaleLevelRequestBuilder extends RequestBuilder<PayScaleLevel> {
  /**
   * Returns a request builder for retrieving one `PayScaleLevel` entity based on its keys.
   * @param code Key property. See [[PayScaleLevel.code]].
   * @param effectiveStartDate Key property. See [[PayScaleLevel.effectiveStartDate]].
   * @returns A request builder for creating requests to retrieve one `PayScaleLevel` entity based on its keys.
   */
  getByKey(code: string, effectiveStartDate: Moment): GetByKeyRequestBuilder<PayScaleLevel> {
    return new GetByKeyRequestBuilder(PayScaleLevel, {
      code: code,
      effectiveStartDate: effectiveStartDate
    });
  }

  /**
   * Returns a request builder for querying all `PayScaleLevel` entities.
   * @returns A request builder for creating requests to retrieve all `PayScaleLevel` entities.
   */
  getAll(): GetAllRequestBuilder<PayScaleLevel> {
    return new GetAllRequestBuilder(PayScaleLevel);
  }

  /**
   * Returns a request builder for creating a `PayScaleLevel` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PayScaleLevel`.
   */
  create(entity: PayScaleLevel): CreateRequestBuilder<PayScaleLevel> {
    return new CreateRequestBuilder(PayScaleLevel, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `PayScaleLevel`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PayScaleLevel`.
   */
  update(entity: PayScaleLevel): UpdateRequestBuilder<PayScaleLevel> {
    return new UpdateRequestBuilder(PayScaleLevel, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PayScaleLevel`.
   * @param code Key property. See [[PayScaleLevel.code]].
   * @param effectiveStartDate Key property. See [[PayScaleLevel.effectiveStartDate]].
   * @returns A request builder for creating requests that delete an entity of type `PayScaleLevel`.
   */
  delete(code: string, effectiveStartDate: Moment): DeleteRequestBuilder<PayScaleLevel>;
  /**
   * Returns a request builder for deleting an entity of type `PayScaleLevel`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PayScaleLevel` by taking the entity as a parameter.
   */
  delete(entity: PayScaleLevel): DeleteRequestBuilder<PayScaleLevel>;
  delete(codeOrEntity: any, effectiveStartDate?: Moment): DeleteRequestBuilder<PayScaleLevel> {
    return new DeleteRequestBuilder(PayScaleLevel, codeOrEntity instanceof PayScaleLevel ? codeOrEntity : {
      code: codeOrEntity!,
      effectiveStartDate: effectiveStartDate!
    });
  }
}
