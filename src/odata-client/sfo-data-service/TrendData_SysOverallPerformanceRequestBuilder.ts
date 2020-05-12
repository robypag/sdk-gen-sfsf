/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { TrendData_SysOverallPerformance } from './TrendData_SysOverallPerformance';

/**
 * Request builder class for operations supported on the [[TrendData_SysOverallPerformance]] entity.
 */
export class TrendData_SysOverallPerformanceRequestBuilder extends RequestBuilder<TrendData_SysOverallPerformance> {
  /**
   * Returns a request builder for retrieving one `TrendData_SysOverallPerformance` entity based on its keys.
   * @param id Key property. See [[TrendData_SysOverallPerformance.id]].
   * @returns A request builder for creating requests to retrieve one `TrendData_SysOverallPerformance` entity based on its keys.
   */
  getByKey(id: BigNumber): GetByKeyRequestBuilder<TrendData_SysOverallPerformance> {
    return new GetByKeyRequestBuilder(TrendData_SysOverallPerformance, { id: id });
  }

  /**
   * Returns a request builder for querying all `TrendData_SysOverallPerformance` entities.
   * @returns A request builder for creating requests to retrieve all `TrendData_SysOverallPerformance` entities.
   */
  getAll(): GetAllRequestBuilder<TrendData_SysOverallPerformance> {
    return new GetAllRequestBuilder(TrendData_SysOverallPerformance);
  }

  /**
   * Returns a request builder for creating a `TrendData_SysOverallPerformance` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TrendData_SysOverallPerformance`.
   */
  create(entity: TrendData_SysOverallPerformance): CreateRequestBuilder<TrendData_SysOverallPerformance> {
    return new CreateRequestBuilder(TrendData_SysOverallPerformance, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `TrendData_SysOverallPerformance`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TrendData_SysOverallPerformance`.
   */
  update(entity: TrendData_SysOverallPerformance): UpdateRequestBuilder<TrendData_SysOverallPerformance> {
    return new UpdateRequestBuilder(TrendData_SysOverallPerformance, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `TrendData_SysOverallPerformance`.
   * @param id Key property. See [[TrendData_SysOverallPerformance.id]].
   * @returns A request builder for creating requests that delete an entity of type `TrendData_SysOverallPerformance`.
   */
  delete(id: BigNumber): DeleteRequestBuilder<TrendData_SysOverallPerformance>;
  /**
   * Returns a request builder for deleting an entity of type `TrendData_SysOverallPerformance`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TrendData_SysOverallPerformance` by taking the entity as a parameter.
   */
  delete(entity: TrendData_SysOverallPerformance): DeleteRequestBuilder<TrendData_SysOverallPerformance>;
  delete(idOrEntity: any): DeleteRequestBuilder<TrendData_SysOverallPerformance> {
    return new DeleteRequestBuilder(TrendData_SysOverallPerformance, idOrEntity instanceof TrendData_SysOverallPerformance ? idOrEntity : { id: idOrEntity! });
  }
}
