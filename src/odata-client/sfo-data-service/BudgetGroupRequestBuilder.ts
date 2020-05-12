/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { BudgetGroup } from './BudgetGroup';

/**
 * Request builder class for operations supported on the [[BudgetGroup]] entity.
 */
export class BudgetGroupRequestBuilder extends RequestBuilder<BudgetGroup> {
  /**
   * Returns a request builder for retrieving one `BudgetGroup` entity based on its keys.
   * @param effectiveStartDate Key property. See [[BudgetGroup.effectiveStartDate]].
   * @param externalCode Key property. See [[BudgetGroup.externalCode]].
   * @returns A request builder for creating requests to retrieve one `BudgetGroup` entity based on its keys.
   */
  getByKey(effectiveStartDate: Moment, externalCode: string): GetByKeyRequestBuilder<BudgetGroup> {
    return new GetByKeyRequestBuilder(BudgetGroup, {
      effectiveStartDate: effectiveStartDate,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `BudgetGroup` entities.
   * @returns A request builder for creating requests to retrieve all `BudgetGroup` entities.
   */
  getAll(): GetAllRequestBuilder<BudgetGroup> {
    return new GetAllRequestBuilder(BudgetGroup);
  }

  /**
   * Returns a request builder for creating a `BudgetGroup` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BudgetGroup`.
   */
  create(entity: BudgetGroup): CreateRequestBuilder<BudgetGroup> {
    return new CreateRequestBuilder(BudgetGroup, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `BudgetGroup`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BudgetGroup`.
   */
  update(entity: BudgetGroup): UpdateRequestBuilder<BudgetGroup> {
    return new UpdateRequestBuilder(BudgetGroup, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `BudgetGroup`.
   * @param effectiveStartDate Key property. See [[BudgetGroup.effectiveStartDate]].
   * @param externalCode Key property. See [[BudgetGroup.externalCode]].
   * @returns A request builder for creating requests that delete an entity of type `BudgetGroup`.
   */
  delete(effectiveStartDate: Moment, externalCode: string): DeleteRequestBuilder<BudgetGroup>;
  /**
   * Returns a request builder for deleting an entity of type `BudgetGroup`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BudgetGroup` by taking the entity as a parameter.
   */
  delete(entity: BudgetGroup): DeleteRequestBuilder<BudgetGroup>;
  delete(effectiveStartDateOrEntity: any, externalCode?: string): DeleteRequestBuilder<BudgetGroup> {
    return new DeleteRequestBuilder(BudgetGroup, effectiveStartDateOrEntity instanceof BudgetGroup ? effectiveStartDateOrEntity : {
      effectiveStartDate: effectiveStartDateOrEntity!,
      externalCode: externalCode!
    });
  }
}
