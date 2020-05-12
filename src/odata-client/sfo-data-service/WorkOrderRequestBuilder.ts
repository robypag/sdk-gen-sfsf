/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { WorkOrder } from './WorkOrder';

/**
 * Request builder class for operations supported on the [[WorkOrder]] entity.
 */
export class WorkOrderRequestBuilder extends RequestBuilder<WorkOrder> {
  /**
   * Returns a request builder for retrieving one `WorkOrder` entity based on its keys.
   * @param effectiveStartDate Key property. See [[WorkOrder.effectiveStartDate]].
   * @param userSysId Key property. See [[WorkOrder.userSysId]].
   * @returns A request builder for creating requests to retrieve one `WorkOrder` entity based on its keys.
   */
  getByKey(effectiveStartDate: Moment, userSysId: string): GetByKeyRequestBuilder<WorkOrder> {
    return new GetByKeyRequestBuilder(WorkOrder, {
      effectiveStartDate: effectiveStartDate,
      userSysId: userSysId
    });
  }

  /**
   * Returns a request builder for querying all `WorkOrder` entities.
   * @returns A request builder for creating requests to retrieve all `WorkOrder` entities.
   */
  getAll(): GetAllRequestBuilder<WorkOrder> {
    return new GetAllRequestBuilder(WorkOrder);
  }

  /**
   * Returns a request builder for creating a `WorkOrder` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WorkOrder`.
   */
  create(entity: WorkOrder): CreateRequestBuilder<WorkOrder> {
    return new CreateRequestBuilder(WorkOrder, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `WorkOrder`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WorkOrder`.
   */
  update(entity: WorkOrder): UpdateRequestBuilder<WorkOrder> {
    return new UpdateRequestBuilder(WorkOrder, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `WorkOrder`.
   * @param effectiveStartDate Key property. See [[WorkOrder.effectiveStartDate]].
   * @param userSysId Key property. See [[WorkOrder.userSysId]].
   * @returns A request builder for creating requests that delete an entity of type `WorkOrder`.
   */
  delete(effectiveStartDate: Moment, userSysId: string): DeleteRequestBuilder<WorkOrder>;
  /**
   * Returns a request builder for deleting an entity of type `WorkOrder`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WorkOrder` by taking the entity as a parameter.
   */
  delete(entity: WorkOrder): DeleteRequestBuilder<WorkOrder>;
  delete(effectiveStartDateOrEntity: any, userSysId?: string): DeleteRequestBuilder<WorkOrder> {
    return new DeleteRequestBuilder(WorkOrder, effectiveStartDateOrEntity instanceof WorkOrder ? effectiveStartDateOrEntity : {
      effectiveStartDate: effectiveStartDateOrEntity!,
      userSysId: userSysId!
    });
  }
}
