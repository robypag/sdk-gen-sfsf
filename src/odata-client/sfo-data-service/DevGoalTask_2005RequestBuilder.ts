/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { DevGoalTask_2005 } from './DevGoalTask_2005';

/**
 * Request builder class for operations supported on the [[DevGoalTask_2005]] entity.
 */
export class DevGoalTask_2005RequestBuilder extends RequestBuilder<DevGoalTask_2005> {
  /**
   * Returns a request builder for retrieving one `DevGoalTask_2005` entity based on its keys.
   * @param id Key property. See [[DevGoalTask_2005.id]].
   * @returns A request builder for creating requests to retrieve one `DevGoalTask_2005` entity based on its keys.
   */
  getByKey(id: BigNumber): GetByKeyRequestBuilder<DevGoalTask_2005> {
    return new GetByKeyRequestBuilder(DevGoalTask_2005, { id: id });
  }

  /**
   * Returns a request builder for querying all `DevGoalTask_2005` entities.
   * @returns A request builder for creating requests to retrieve all `DevGoalTask_2005` entities.
   */
  getAll(): GetAllRequestBuilder<DevGoalTask_2005> {
    return new GetAllRequestBuilder(DevGoalTask_2005);
  }

  /**
   * Returns a request builder for deleting an entity of type `DevGoalTask_2005`.
   * @param id Key property. See [[DevGoalTask_2005.id]].
   * @returns A request builder for creating requests that delete an entity of type `DevGoalTask_2005`.
   */
  delete(id: BigNumber): DeleteRequestBuilder<DevGoalTask_2005>;
  /**
   * Returns a request builder for deleting an entity of type `DevGoalTask_2005`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DevGoalTask_2005` by taking the entity as a parameter.
   */
  delete(entity: DevGoalTask_2005): DeleteRequestBuilder<DevGoalTask_2005>;
  delete(idOrEntity: any): DeleteRequestBuilder<DevGoalTask_2005> {
    return new DeleteRequestBuilder(DevGoalTask_2005, idOrEntity instanceof DevGoalTask_2005 ? idOrEntity : { id: idOrEntity! });
  }
}
