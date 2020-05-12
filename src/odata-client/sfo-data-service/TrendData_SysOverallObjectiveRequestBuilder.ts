/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { TrendData_SysOverallObjective } from './TrendData_SysOverallObjective';

/**
 * Request builder class for operations supported on the [[TrendData_SysOverallObjective]] entity.
 */
export class TrendData_SysOverallObjectiveRequestBuilder extends RequestBuilder<TrendData_SysOverallObjective> {
  /**
   * Returns a request builder for retrieving one `TrendData_SysOverallObjective` entity based on its keys.
   * @param id Key property. See [[TrendData_SysOverallObjective.id]].
   * @returns A request builder for creating requests to retrieve one `TrendData_SysOverallObjective` entity based on its keys.
   */
  getByKey(id: BigNumber): GetByKeyRequestBuilder<TrendData_SysOverallObjective> {
    return new GetByKeyRequestBuilder(TrendData_SysOverallObjective, { id: id });
  }

  /**
   * Returns a request builder for querying all `TrendData_SysOverallObjective` entities.
   * @returns A request builder for creating requests to retrieve all `TrendData_SysOverallObjective` entities.
   */
  getAll(): GetAllRequestBuilder<TrendData_SysOverallObjective> {
    return new GetAllRequestBuilder(TrendData_SysOverallObjective);
  }

  /**
   * Returns a request builder for creating a `TrendData_SysOverallObjective` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TrendData_SysOverallObjective`.
   */
  create(entity: TrendData_SysOverallObjective): CreateRequestBuilder<TrendData_SysOverallObjective> {
    return new CreateRequestBuilder(TrendData_SysOverallObjective, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `TrendData_SysOverallObjective`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TrendData_SysOverallObjective`.
   */
  update(entity: TrendData_SysOverallObjective): UpdateRequestBuilder<TrendData_SysOverallObjective> {
    return new UpdateRequestBuilder(TrendData_SysOverallObjective, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `TrendData_SysOverallObjective`.
   * @param id Key property. See [[TrendData_SysOverallObjective.id]].
   * @returns A request builder for creating requests that delete an entity of type `TrendData_SysOverallObjective`.
   */
  delete(id: BigNumber): DeleteRequestBuilder<TrendData_SysOverallObjective>;
  /**
   * Returns a request builder for deleting an entity of type `TrendData_SysOverallObjective`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TrendData_SysOverallObjective` by taking the entity as a parameter.
   */
  delete(entity: TrendData_SysOverallObjective): DeleteRequestBuilder<TrendData_SysOverallObjective>;
  delete(idOrEntity: any): DeleteRequestBuilder<TrendData_SysOverallObjective> {
    return new DeleteRequestBuilder(TrendData_SysOverallObjective, idOrEntity instanceof TrendData_SysOverallObjective ? idOrEntity : { id: idOrEntity! });
  }
}
