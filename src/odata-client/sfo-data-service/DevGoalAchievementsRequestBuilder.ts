/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { DevGoalAchievements } from './DevGoalAchievements';

/**
 * Request builder class for operations supported on the [[DevGoalAchievements]] entity.
 */
export class DevGoalAchievementsRequestBuilder extends RequestBuilder<DevGoalAchievements> {
  /**
   * Returns a request builder for retrieving one `DevGoalAchievements` entity based on its keys.
   * @param goalId Key property. See [[DevGoalAchievements.goalId]].
   * @param subjectUserId Key property. See [[DevGoalAchievements.subjectUserId]].
   * @returns A request builder for creating requests to retrieve one `DevGoalAchievements` entity based on its keys.
   */
  getByKey(goalId: string, subjectUserId: string): GetByKeyRequestBuilder<DevGoalAchievements> {
    return new GetByKeyRequestBuilder(DevGoalAchievements, {
      goalId: goalId,
      subjectUserId: subjectUserId
    });
  }

  /**
   * Returns a request builder for querying all `DevGoalAchievements` entities.
   * @returns A request builder for creating requests to retrieve all `DevGoalAchievements` entities.
   */
  getAll(): GetAllRequestBuilder<DevGoalAchievements> {
    return new GetAllRequestBuilder(DevGoalAchievements);
  }
}
