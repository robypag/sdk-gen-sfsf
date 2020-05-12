/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { DevGoalDetail } from './DevGoalDetail';

/**
 * Request builder class for operations supported on the [[DevGoalDetail]] entity.
 */
export class DevGoalDetailRequestBuilder extends RequestBuilder<DevGoalDetail> {
  /**
   * Returns a request builder for retrieving one `DevGoalDetail` entity based on its keys.
   * @param activityActivityId Key property. See [[DevGoalDetail.activityActivityId]].
   * @param externalCode Key property. See [[DevGoalDetail.externalCode]].
   * @returns A request builder for creating requests to retrieve one `DevGoalDetail` entity based on its keys.
   */
  getByKey(activityActivityId: BigNumber, externalCode: BigNumber): GetByKeyRequestBuilder<DevGoalDetail> {
    return new GetByKeyRequestBuilder(DevGoalDetail, {
      Activity_activityId: activityActivityId,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `DevGoalDetail` entities.
   * @returns A request builder for creating requests to retrieve all `DevGoalDetail` entities.
   */
  getAll(): GetAllRequestBuilder<DevGoalDetail> {
    return new GetAllRequestBuilder(DevGoalDetail);
  }

  /**
   * Returns a request builder for creating a `DevGoalDetail` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DevGoalDetail`.
   */
  create(entity: DevGoalDetail): CreateRequestBuilder<DevGoalDetail> {
    return new CreateRequestBuilder(DevGoalDetail, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `DevGoalDetail`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DevGoalDetail`.
   */
  update(entity: DevGoalDetail): UpdateRequestBuilder<DevGoalDetail> {
    return new UpdateRequestBuilder(DevGoalDetail, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `DevGoalDetail`.
   * @param activityActivityId Key property. See [[DevGoalDetail.activityActivityId]].
   * @param externalCode Key property. See [[DevGoalDetail.externalCode]].
   * @returns A request builder for creating requests that delete an entity of type `DevGoalDetail`.
   */
  delete(activityActivityId: BigNumber, externalCode: BigNumber): DeleteRequestBuilder<DevGoalDetail>;
  /**
   * Returns a request builder for deleting an entity of type `DevGoalDetail`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DevGoalDetail` by taking the entity as a parameter.
   */
  delete(entity: DevGoalDetail): DeleteRequestBuilder<DevGoalDetail>;
  delete(activityActivityIdOrEntity: any, externalCode?: BigNumber): DeleteRequestBuilder<DevGoalDetail> {
    return new DeleteRequestBuilder(DevGoalDetail, activityActivityIdOrEntity instanceof DevGoalDetail ? activityActivityIdOrEntity : {
      Activity_activityId: activityActivityIdOrEntity!,
      externalCode: externalCode!
    });
  }
}
