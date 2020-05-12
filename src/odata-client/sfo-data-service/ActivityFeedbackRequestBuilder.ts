/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { ActivityFeedback } from './ActivityFeedback';

/**
 * Request builder class for operations supported on the [[ActivityFeedback]] entity.
 */
export class ActivityFeedbackRequestBuilder extends RequestBuilder<ActivityFeedback> {
  /**
   * Returns a request builder for retrieving one `ActivityFeedback` entity based on its keys.
   * @param activityActivityId Key property. See [[ActivityFeedback.activityActivityId]].
   * @param activityFeedbackId Key property. See [[ActivityFeedback.activityFeedbackId]].
   * @returns A request builder for creating requests to retrieve one `ActivityFeedback` entity based on its keys.
   */
  getByKey(activityActivityId: BigNumber, activityFeedbackId: BigNumber): GetByKeyRequestBuilder<ActivityFeedback> {
    return new GetByKeyRequestBuilder(ActivityFeedback, {
      Activity_activityId: activityActivityId,
      activityFeedbackId: activityFeedbackId
    });
  }

  /**
   * Returns a request builder for querying all `ActivityFeedback` entities.
   * @returns A request builder for creating requests to retrieve all `ActivityFeedback` entities.
   */
  getAll(): GetAllRequestBuilder<ActivityFeedback> {
    return new GetAllRequestBuilder(ActivityFeedback);
  }

  /**
   * Returns a request builder for creating a `ActivityFeedback` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ActivityFeedback`.
   */
  create(entity: ActivityFeedback): CreateRequestBuilder<ActivityFeedback> {
    return new CreateRequestBuilder(ActivityFeedback, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `ActivityFeedback`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ActivityFeedback`.
   */
  update(entity: ActivityFeedback): UpdateRequestBuilder<ActivityFeedback> {
    return new UpdateRequestBuilder(ActivityFeedback, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ActivityFeedback`.
   * @param activityActivityId Key property. See [[ActivityFeedback.activityActivityId]].
   * @param activityFeedbackId Key property. See [[ActivityFeedback.activityFeedbackId]].
   * @returns A request builder for creating requests that delete an entity of type `ActivityFeedback`.
   */
  delete(activityActivityId: BigNumber, activityFeedbackId: BigNumber): DeleteRequestBuilder<ActivityFeedback>;
  /**
   * Returns a request builder for deleting an entity of type `ActivityFeedback`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ActivityFeedback` by taking the entity as a parameter.
   */
  delete(entity: ActivityFeedback): DeleteRequestBuilder<ActivityFeedback>;
  delete(activityActivityIdOrEntity: any, activityFeedbackId?: BigNumber): DeleteRequestBuilder<ActivityFeedback> {
    return new DeleteRequestBuilder(ActivityFeedback, activityActivityIdOrEntity instanceof ActivityFeedback ? activityActivityIdOrEntity : {
      Activity_activityId: activityActivityIdOrEntity!,
      activityFeedbackId: activityFeedbackId!
    });
  }
}
