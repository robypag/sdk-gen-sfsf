/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { OnboardingGoalCategory } from './OnboardingGoalCategory';

/**
 * Request builder class for operations supported on the [[OnboardingGoalCategory]] entity.
 */
export class OnboardingGoalCategoryRequestBuilder extends RequestBuilder<OnboardingGoalCategory> {
  /**
   * Returns a request builder for retrieving one `OnboardingGoalCategory` entity based on its keys.
   * @param onboardingGoalActivityActivityId Key property. See [[OnboardingGoalCategory.onboardingGoalActivityActivityId]].
   * @param onboardingNewHireActivitiesStepProcessStepId Key property. See [[OnboardingGoalCategory.onboardingNewHireActivitiesStepProcessStepId]].
   * @param onboardingProcessOnboardingProcessId Key property. See [[OnboardingGoalCategory.onboardingProcessOnboardingProcessId]].
   * @param externalCode Key property. See [[OnboardingGoalCategory.externalCode]].
   * @returns A request builder for creating requests to retrieve one `OnboardingGoalCategory` entity based on its keys.
   */
  getByKey(onboardingGoalActivityActivityId: BigNumber, onboardingNewHireActivitiesStepProcessStepId: BigNumber, onboardingProcessOnboardingProcessId: BigNumber, externalCode: BigNumber): GetByKeyRequestBuilder<OnboardingGoalCategory> {
    return new GetByKeyRequestBuilder(OnboardingGoalCategory, {
      OnboardingGoalActivity_activityId: onboardingGoalActivityActivityId,
      OnboardingNewHireActivitiesStep_processStepId: onboardingNewHireActivitiesStepProcessStepId,
      OnboardingProcess_onboardingProcessId: onboardingProcessOnboardingProcessId,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `OnboardingGoalCategory` entities.
   * @returns A request builder for creating requests to retrieve all `OnboardingGoalCategory` entities.
   */
  getAll(): GetAllRequestBuilder<OnboardingGoalCategory> {
    return new GetAllRequestBuilder(OnboardingGoalCategory);
  }
}
