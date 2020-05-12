/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { TalentPool } from './TalentPool';

/**
 * Request builder class for operations supported on the [[TalentPool]] entity.
 */
export class TalentPoolRequestBuilder extends RequestBuilder<TalentPool> {
  /**
   * Returns a request builder for retrieving one `TalentPool` entity based on its keys.
   * @param code Key property. See [[TalentPool.code]].
   * @param effectiveStartDate Key property. See [[TalentPool.effectiveStartDate]].
   * @returns A request builder for creating requests to retrieve one `TalentPool` entity based on its keys.
   */
  getByKey(code: string, effectiveStartDate: Moment): GetByKeyRequestBuilder<TalentPool> {
    return new GetByKeyRequestBuilder(TalentPool, {
      code: code,
      effectiveStartDate: effectiveStartDate
    });
  }

  /**
   * Returns a request builder for querying all `TalentPool` entities.
   * @returns A request builder for creating requests to retrieve all `TalentPool` entities.
   */
  getAll(): GetAllRequestBuilder<TalentPool> {
    return new GetAllRequestBuilder(TalentPool);
  }

  /**
   * Returns a request builder for creating a `TalentPool` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TalentPool`.
   */
  create(entity: TalentPool): CreateRequestBuilder<TalentPool> {
    return new CreateRequestBuilder(TalentPool, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `TalentPool`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TalentPool`.
   */
  update(entity: TalentPool): UpdateRequestBuilder<TalentPool> {
    return new UpdateRequestBuilder(TalentPool, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `TalentPool`.
   * @param code Key property. See [[TalentPool.code]].
   * @param effectiveStartDate Key property. See [[TalentPool.effectiveStartDate]].
   * @returns A request builder for creating requests that delete an entity of type `TalentPool`.
   */
  delete(code: string, effectiveStartDate: Moment): DeleteRequestBuilder<TalentPool>;
  /**
   * Returns a request builder for deleting an entity of type `TalentPool`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TalentPool` by taking the entity as a parameter.
   */
  delete(entity: TalentPool): DeleteRequestBuilder<TalentPool>;
  delete(codeOrEntity: any, effectiveStartDate?: Moment): DeleteRequestBuilder<TalentPool> {
    return new DeleteRequestBuilder(TalentPool, codeOrEntity instanceof TalentPool ? codeOrEntity : {
      code: codeOrEntity!,
      effectiveStartDate: effectiveStartDate!
    });
  }
}
