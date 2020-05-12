/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { SpotAwardBudget } from './SpotAwardBudget';

/**
 * Request builder class for operations supported on the [[SpotAwardBudget]] entity.
 */
export class SpotAwardBudgetRequestBuilder extends RequestBuilder<SpotAwardBudget> {
  /**
   * Returns a request builder for retrieving one `SpotAwardBudget` entity based on its keys.
   * @param effectiveStartDate Key property. See [[SpotAwardBudget.effectiveStartDate]].
   * @param externalCode Key property. See [[SpotAwardBudget.externalCode]].
   * @returns A request builder for creating requests to retrieve one `SpotAwardBudget` entity based on its keys.
   */
  getByKey(effectiveStartDate: Moment, externalCode: string): GetByKeyRequestBuilder<SpotAwardBudget> {
    return new GetByKeyRequestBuilder(SpotAwardBudget, {
      effectiveStartDate: effectiveStartDate,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `SpotAwardBudget` entities.
   * @returns A request builder for creating requests to retrieve all `SpotAwardBudget` entities.
   */
  getAll(): GetAllRequestBuilder<SpotAwardBudget> {
    return new GetAllRequestBuilder(SpotAwardBudget);
  }

  /**
   * Returns a request builder for creating a `SpotAwardBudget` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SpotAwardBudget`.
   */
  create(entity: SpotAwardBudget): CreateRequestBuilder<SpotAwardBudget> {
    return new CreateRequestBuilder(SpotAwardBudget, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `SpotAwardBudget`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SpotAwardBudget`.
   */
  update(entity: SpotAwardBudget): UpdateRequestBuilder<SpotAwardBudget> {
    return new UpdateRequestBuilder(SpotAwardBudget, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `SpotAwardBudget`.
   * @param effectiveStartDate Key property. See [[SpotAwardBudget.effectiveStartDate]].
   * @param externalCode Key property. See [[SpotAwardBudget.externalCode]].
   * @returns A request builder for creating requests that delete an entity of type `SpotAwardBudget`.
   */
  delete(effectiveStartDate: Moment, externalCode: string): DeleteRequestBuilder<SpotAwardBudget>;
  /**
   * Returns a request builder for deleting an entity of type `SpotAwardBudget`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SpotAwardBudget` by taking the entity as a parameter.
   */
  delete(entity: SpotAwardBudget): DeleteRequestBuilder<SpotAwardBudget>;
  delete(effectiveStartDateOrEntity: any, externalCode?: string): DeleteRequestBuilder<SpotAwardBudget> {
    return new DeleteRequestBuilder(SpotAwardBudget, effectiveStartDateOrEntity instanceof SpotAwardBudget ? effectiveStartDateOrEntity : {
      effectiveStartDate: effectiveStartDateOrEntity!,
      externalCode: externalCode!
    });
  }
}
