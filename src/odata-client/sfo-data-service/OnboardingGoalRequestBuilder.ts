/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { OnboardingGoal } from './OnboardingGoal';

/**
 * Request builder class for operations supported on the [[OnboardingGoal]] entity.
 */
export class OnboardingGoalRequestBuilder extends RequestBuilder<OnboardingGoal> {
  /**
   * Returns a request builder for retrieving one `OnboardingGoal` entity based on its keys.
   * @param onboardingGoalActivityActivityId Key property. See [[OnboardingGoal.onboardingGoalActivityActivityId]].
   * @param onboardingGoalCategoryExternalCode Key property. See [[OnboardingGoal.onboardingGoalCategoryExternalCode]].
   * @param onboardingNewHireActivitiesStepProcessStepId Key property. See [[OnboardingGoal.onboardingNewHireActivitiesStepProcessStepId]].
   * @param onboardingProcessOnboardingProcessId Key property. See [[OnboardingGoal.onboardingProcessOnboardingProcessId]].
   * @param goalId Key property. See [[OnboardingGoal.goalId]].
   * @returns A request builder for creating requests to retrieve one `OnboardingGoal` entity based on its keys.
   */
  getByKey(onboardingGoalActivityActivityId: BigNumber, onboardingGoalCategoryExternalCode: BigNumber, onboardingNewHireActivitiesStepProcessStepId: BigNumber, onboardingProcessOnboardingProcessId: BigNumber, goalId: BigNumber): GetByKeyRequestBuilder<OnboardingGoal> {
    return new GetByKeyRequestBuilder(OnboardingGoal, {
      OnboardingGoalActivity_activityId: onboardingGoalActivityActivityId,
      OnboardingGoalCategory_externalCode: onboardingGoalCategoryExternalCode,
      OnboardingNewHireActivitiesStep_processStepId: onboardingNewHireActivitiesStepProcessStepId,
      OnboardingProcess_onboardingProcessId: onboardingProcessOnboardingProcessId,
      goalId: goalId
    });
  }

  /**
   * Returns a request builder for querying all `OnboardingGoal` entities.
   * @returns A request builder for creating requests to retrieve all `OnboardingGoal` entities.
   */
  getAll(): GetAllRequestBuilder<OnboardingGoal> {
    return new GetAllRequestBuilder(OnboardingGoal);
  }
}
