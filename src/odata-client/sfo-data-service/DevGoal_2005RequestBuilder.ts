/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { DevGoal_2005 } from './DevGoal_2005';

/**
 * Request builder class for operations supported on the [[DevGoal_2005]] entity.
 */
export class DevGoal_2005RequestBuilder extends RequestBuilder<DevGoal_2005> {
  /**
   * Returns a request builder for retrieving one `DevGoal_2005` entity based on its keys.
   * @param id Key property. See [[DevGoal_2005.id]].
   * @returns A request builder for creating requests to retrieve one `DevGoal_2005` entity based on its keys.
   */
  getByKey(id: BigNumber): GetByKeyRequestBuilder<DevGoal_2005> {
    return new GetByKeyRequestBuilder(DevGoal_2005, { id: id });
  }

  /**
   * Returns a request builder for querying all `DevGoal_2005` entities.
   * @returns A request builder for creating requests to retrieve all `DevGoal_2005` entities.
   */
  getAll(): GetAllRequestBuilder<DevGoal_2005> {
    return new GetAllRequestBuilder(DevGoal_2005);
  }

  /**
   * Returns a request builder for creating a `DevGoal_2005` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DevGoal_2005`.
   */
  create(entity: DevGoal_2005): CreateRequestBuilder<DevGoal_2005> {
    return new CreateRequestBuilder(DevGoal_2005, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `DevGoal_2005`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DevGoal_2005`.
   */
  update(entity: DevGoal_2005): UpdateRequestBuilder<DevGoal_2005> {
    return new UpdateRequestBuilder(DevGoal_2005, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `DevGoal_2005`.
   * @param id Key property. See [[DevGoal_2005.id]].
   * @returns A request builder for creating requests that delete an entity of type `DevGoal_2005`.
   */
  delete(id: BigNumber): DeleteRequestBuilder<DevGoal_2005>;
  /**
   * Returns a request builder for deleting an entity of type `DevGoal_2005`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DevGoal_2005` by taking the entity as a parameter.
   */
  delete(entity: DevGoal_2005): DeleteRequestBuilder<DevGoal_2005>;
  delete(idOrEntity: any): DeleteRequestBuilder<DevGoal_2005> {
    return new DeleteRequestBuilder(DevGoal_2005, idOrEntity instanceof DevGoal_2005 ? idOrEntity : { id: idOrEntity! });
  }
}
