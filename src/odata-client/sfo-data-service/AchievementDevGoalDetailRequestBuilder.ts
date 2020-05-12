/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { AchievementDevGoalDetail } from './AchievementDevGoalDetail';

/**
 * Request builder class for operations supported on the [[AchievementDevGoalDetail]] entity.
 */
export class AchievementDevGoalDetailRequestBuilder extends RequestBuilder<AchievementDevGoalDetail> {
  /**
   * Returns a request builder for retrieving one `AchievementDevGoalDetail` entity based on its keys.
   * @param achievementAchievementId Key property. See [[AchievementDevGoalDetail.achievementAchievementId]].
   * @param externalCode Key property. See [[AchievementDevGoalDetail.externalCode]].
   * @returns A request builder for creating requests to retrieve one `AchievementDevGoalDetail` entity based on its keys.
   */
  getByKey(achievementAchievementId: BigNumber, externalCode: BigNumber): GetByKeyRequestBuilder<AchievementDevGoalDetail> {
    return new GetByKeyRequestBuilder(AchievementDevGoalDetail, {
      Achievement_achievementId: achievementAchievementId,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `AchievementDevGoalDetail` entities.
   * @returns A request builder for creating requests to retrieve all `AchievementDevGoalDetail` entities.
   */
  getAll(): GetAllRequestBuilder<AchievementDevGoalDetail> {
    return new GetAllRequestBuilder(AchievementDevGoalDetail);
  }

  /**
   * Returns a request builder for creating a `AchievementDevGoalDetail` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AchievementDevGoalDetail`.
   */
  create(entity: AchievementDevGoalDetail): CreateRequestBuilder<AchievementDevGoalDetail> {
    return new CreateRequestBuilder(AchievementDevGoalDetail, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `AchievementDevGoalDetail`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AchievementDevGoalDetail`.
   */
  update(entity: AchievementDevGoalDetail): UpdateRequestBuilder<AchievementDevGoalDetail> {
    return new UpdateRequestBuilder(AchievementDevGoalDetail, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AchievementDevGoalDetail`.
   * @param achievementAchievementId Key property. See [[AchievementDevGoalDetail.achievementAchievementId]].
   * @param externalCode Key property. See [[AchievementDevGoalDetail.externalCode]].
   * @returns A request builder for creating requests that delete an entity of type `AchievementDevGoalDetail`.
   */
  delete(achievementAchievementId: BigNumber, externalCode: BigNumber): DeleteRequestBuilder<AchievementDevGoalDetail>;
  /**
   * Returns a request builder for deleting an entity of type `AchievementDevGoalDetail`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AchievementDevGoalDetail` by taking the entity as a parameter.
   */
  delete(entity: AchievementDevGoalDetail): DeleteRequestBuilder<AchievementDevGoalDetail>;
  delete(achievementAchievementIdOrEntity: any, externalCode?: BigNumber): DeleteRequestBuilder<AchievementDevGoalDetail> {
    return new DeleteRequestBuilder(AchievementDevGoalDetail, achievementAchievementIdOrEntity instanceof AchievementDevGoalDetail ? achievementAchievementIdOrEntity : {
      Achievement_achievementId: achievementAchievementIdOrEntity!,
      externalCode: externalCode!
    });
  }
}
