/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { ActivityStatus } from './ActivityStatus';

/**
 * Request builder class for operations supported on the [[ActivityStatus]] entity.
 */
export class ActivityStatusRequestBuilder extends RequestBuilder<ActivityStatus> {
  /**
   * Returns a request builder for retrieving one `ActivityStatus` entity based on its keys.
   * @param activityStatusId Key property. See [[ActivityStatus.activityStatusId]].
   * @returns A request builder for creating requests to retrieve one `ActivityStatus` entity based on its keys.
   */
  getByKey(activityStatusId: string): GetByKeyRequestBuilder<ActivityStatus> {
    return new GetByKeyRequestBuilder(ActivityStatus, { activityStatusId: activityStatusId });
  }

  /**
   * Returns a request builder for querying all `ActivityStatus` entities.
   * @returns A request builder for creating requests to retrieve all `ActivityStatus` entities.
   */
  getAll(): GetAllRequestBuilder<ActivityStatus> {
    return new GetAllRequestBuilder(ActivityStatus);
  }

  /**
   * Returns a request builder for creating a `ActivityStatus` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ActivityStatus`.
   */
  create(entity: ActivityStatus): CreateRequestBuilder<ActivityStatus> {
    return new CreateRequestBuilder(ActivityStatus, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `ActivityStatus`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ActivityStatus`.
   */
  update(entity: ActivityStatus): UpdateRequestBuilder<ActivityStatus> {
    return new UpdateRequestBuilder(ActivityStatus, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ActivityStatus`.
   * @param activityStatusId Key property. See [[ActivityStatus.activityStatusId]].
   * @returns A request builder for creating requests that delete an entity of type `ActivityStatus`.
   */
  delete(activityStatusId: string): DeleteRequestBuilder<ActivityStatus>;
  /**
   * Returns a request builder for deleting an entity of type `ActivityStatus`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ActivityStatus` by taking the entity as a parameter.
   */
  delete(entity: ActivityStatus): DeleteRequestBuilder<ActivityStatus>;
  delete(activityStatusIdOrEntity: any): DeleteRequestBuilder<ActivityStatus> {
    return new DeleteRequestBuilder(ActivityStatus, activityStatusIdOrEntity instanceof ActivityStatus ? activityStatusIdOrEntity : { activityStatusId: activityStatusIdOrEntity! });
  }
}
