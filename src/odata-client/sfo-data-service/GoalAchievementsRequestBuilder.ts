/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { GoalAchievements } from './GoalAchievements';

/**
 * Request builder class for operations supported on the [[GoalAchievements]] entity.
 */
export class GoalAchievementsRequestBuilder extends RequestBuilder<GoalAchievements> {
  /**
   * Returns a request builder for retrieving one `GoalAchievements` entity based on its keys.
   * @param goalId Key property. See [[GoalAchievements.goalId]].
   * @param subjectUserId Key property. See [[GoalAchievements.subjectUserId]].
   * @returns A request builder for creating requests to retrieve one `GoalAchievements` entity based on its keys.
   */
  getByKey(goalId: string, subjectUserId: string): GetByKeyRequestBuilder<GoalAchievements> {
    return new GetByKeyRequestBuilder(GoalAchievements, {
      goalId: goalId,
      subjectUserId: subjectUserId
    });
  }

  /**
   * Returns a request builder for querying all `GoalAchievements` entities.
   * @returns A request builder for creating requests to retrieve all `GoalAchievements` entities.
   */
  getAll(): GetAllRequestBuilder<GoalAchievements> {
    return new GetAllRequestBuilder(GoalAchievements);
  }
}
