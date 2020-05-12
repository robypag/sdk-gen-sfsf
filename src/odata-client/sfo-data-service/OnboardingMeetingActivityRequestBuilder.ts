/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { OnboardingMeetingActivity } from './OnboardingMeetingActivity';

/**
 * Request builder class for operations supported on the [[OnboardingMeetingActivity]] entity.
 */
export class OnboardingMeetingActivityRequestBuilder extends RequestBuilder<OnboardingMeetingActivity> {
  /**
   * Returns a request builder for retrieving one `OnboardingMeetingActivity` entity based on its keys.
   * @param onboardingNewHireActivitiesStepProcessStepId Key property. See [[OnboardingMeetingActivity.onboardingNewHireActivitiesStepProcessStepId]].
   * @param onboardingProcessOnboardingProcessId Key property. See [[OnboardingMeetingActivity.onboardingProcessOnboardingProcessId]].
   * @param activityId Key property. See [[OnboardingMeetingActivity.activityId]].
   * @returns A request builder for creating requests to retrieve one `OnboardingMeetingActivity` entity based on its keys.
   */
  getByKey(onboardingNewHireActivitiesStepProcessStepId: BigNumber, onboardingProcessOnboardingProcessId: BigNumber, activityId: BigNumber): GetByKeyRequestBuilder<OnboardingMeetingActivity> {
    return new GetByKeyRequestBuilder(OnboardingMeetingActivity, {
      OnboardingNewHireActivitiesStep_processStepId: onboardingNewHireActivitiesStepProcessStepId,
      OnboardingProcess_onboardingProcessId: onboardingProcessOnboardingProcessId,
      activityId: activityId
    });
  }

  /**
   * Returns a request builder for querying all `OnboardingMeetingActivity` entities.
   * @returns A request builder for creating requests to retrieve all `OnboardingMeetingActivity` entities.
   */
  getAll(): GetAllRequestBuilder<OnboardingMeetingActivity> {
    return new GetAllRequestBuilder(OnboardingMeetingActivity);
  }

  /**
   * Returns a request builder for creating a `OnboardingMeetingActivity` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `OnboardingMeetingActivity`.
   */
  create(entity: OnboardingMeetingActivity): CreateRequestBuilder<OnboardingMeetingActivity> {
    return new CreateRequestBuilder(OnboardingMeetingActivity, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `OnboardingMeetingActivity`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `OnboardingMeetingActivity`.
   */
  update(entity: OnboardingMeetingActivity): UpdateRequestBuilder<OnboardingMeetingActivity> {
    return new UpdateRequestBuilder(OnboardingMeetingActivity, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `OnboardingMeetingActivity`.
   * @param onboardingNewHireActivitiesStepProcessStepId Key property. See [[OnboardingMeetingActivity.onboardingNewHireActivitiesStepProcessStepId]].
   * @param onboardingProcessOnboardingProcessId Key property. See [[OnboardingMeetingActivity.onboardingProcessOnboardingProcessId]].
   * @param activityId Key property. See [[OnboardingMeetingActivity.activityId]].
   * @returns A request builder for creating requests that delete an entity of type `OnboardingMeetingActivity`.
   */
  delete(onboardingNewHireActivitiesStepProcessStepId: BigNumber, onboardingProcessOnboardingProcessId: BigNumber, activityId: BigNumber): DeleteRequestBuilder<OnboardingMeetingActivity>;
  /**
   * Returns a request builder for deleting an entity of type `OnboardingMeetingActivity`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `OnboardingMeetingActivity` by taking the entity as a parameter.
   */
  delete(entity: OnboardingMeetingActivity): DeleteRequestBuilder<OnboardingMeetingActivity>;
  delete(onboardingNewHireActivitiesStepProcessStepIdOrEntity: any, onboardingProcessOnboardingProcessId?: BigNumber, activityId?: BigNumber): DeleteRequestBuilder<OnboardingMeetingActivity> {
    return new DeleteRequestBuilder(OnboardingMeetingActivity, onboardingNewHireActivitiesStepProcessStepIdOrEntity instanceof OnboardingMeetingActivity ? onboardingNewHireActivitiesStepProcessStepIdOrEntity : {
      OnboardingNewHireActivitiesStep_processStepId: onboardingNewHireActivitiesStepProcessStepIdOrEntity!,
      OnboardingProcess_onboardingProcessId: onboardingProcessOnboardingProcessId!,
      activityId: activityId!
    });
  }
}
