/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { GoalDetail } from './GoalDetail';

/**
 * Request builder class for operations supported on the [[GoalDetail]] entity.
 */
export class GoalDetailRequestBuilder extends RequestBuilder<GoalDetail> {
  /**
   * Returns a request builder for retrieving one `GoalDetail` entity based on its keys.
   * @param activityActivityId Key property. See [[GoalDetail.activityActivityId]].
   * @param externalCode Key property. See [[GoalDetail.externalCode]].
   * @returns A request builder for creating requests to retrieve one `GoalDetail` entity based on its keys.
   */
  getByKey(activityActivityId: BigNumber, externalCode: BigNumber): GetByKeyRequestBuilder<GoalDetail> {
    return new GetByKeyRequestBuilder(GoalDetail, {
      Activity_activityId: activityActivityId,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `GoalDetail` entities.
   * @returns A request builder for creating requests to retrieve all `GoalDetail` entities.
   */
  getAll(): GetAllRequestBuilder<GoalDetail> {
    return new GetAllRequestBuilder(GoalDetail);
  }

  /**
   * Returns a request builder for creating a `GoalDetail` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `GoalDetail`.
   */
  create(entity: GoalDetail): CreateRequestBuilder<GoalDetail> {
    return new CreateRequestBuilder(GoalDetail, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `GoalDetail`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `GoalDetail`.
   */
  update(entity: GoalDetail): UpdateRequestBuilder<GoalDetail> {
    return new UpdateRequestBuilder(GoalDetail, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `GoalDetail`.
   * @param activityActivityId Key property. See [[GoalDetail.activityActivityId]].
   * @param externalCode Key property. See [[GoalDetail.externalCode]].
   * @returns A request builder for creating requests that delete an entity of type `GoalDetail`.
   */
  delete(activityActivityId: BigNumber, externalCode: BigNumber): DeleteRequestBuilder<GoalDetail>;
  /**
   * Returns a request builder for deleting an entity of type `GoalDetail`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `GoalDetail` by taking the entity as a parameter.
   */
  delete(entity: GoalDetail): DeleteRequestBuilder<GoalDetail>;
  delete(activityActivityIdOrEntity: any, externalCode?: BigNumber): DeleteRequestBuilder<GoalDetail> {
    return new DeleteRequestBuilder(GoalDetail, activityActivityIdOrEntity instanceof GoalDetail ? activityActivityIdOrEntity : {
      Activity_activityId: activityActivityIdOrEntity!,
      externalCode: externalCode!
    });
  }
}
