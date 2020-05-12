/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { OnboardingMeetingEvent } from './OnboardingMeetingEvent';

/**
 * Request builder class for operations supported on the [[OnboardingMeetingEvent]] entity.
 */
export class OnboardingMeetingEventRequestBuilder extends RequestBuilder<OnboardingMeetingEvent> {
  /**
   * Returns a request builder for retrieving one `OnboardingMeetingEvent` entity based on its keys.
   * @param onboardingMeetingActivityActivityId Key property. See [[OnboardingMeetingEvent.onboardingMeetingActivityActivityId]].
   * @param onboardingNewHireActivitiesStepProcessStepId Key property. See [[OnboardingMeetingEvent.onboardingNewHireActivitiesStepProcessStepId]].
   * @param onboardingProcessOnboardingProcessId Key property. See [[OnboardingMeetingEvent.onboardingProcessOnboardingProcessId]].
   * @param externalCode Key property. See [[OnboardingMeetingEvent.externalCode]].
   * @returns A request builder for creating requests to retrieve one `OnboardingMeetingEvent` entity based on its keys.
   */
  getByKey(onboardingMeetingActivityActivityId: BigNumber, onboardingNewHireActivitiesStepProcessStepId: BigNumber, onboardingProcessOnboardingProcessId: BigNumber, externalCode: string): GetByKeyRequestBuilder<OnboardingMeetingEvent> {
    return new GetByKeyRequestBuilder(OnboardingMeetingEvent, {
      OnboardingMeetingActivity_activityId: onboardingMeetingActivityActivityId,
      OnboardingNewHireActivitiesStep_processStepId: onboardingNewHireActivitiesStepProcessStepId,
      OnboardingProcess_onboardingProcessId: onboardingProcessOnboardingProcessId,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `OnboardingMeetingEvent` entities.
   * @returns A request builder for creating requests to retrieve all `OnboardingMeetingEvent` entities.
   */
  getAll(): GetAllRequestBuilder<OnboardingMeetingEvent> {
    return new GetAllRequestBuilder(OnboardingMeetingEvent);
  }

  /**
   * Returns a request builder for creating a `OnboardingMeetingEvent` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `OnboardingMeetingEvent`.
   */
  create(entity: OnboardingMeetingEvent): CreateRequestBuilder<OnboardingMeetingEvent> {
    return new CreateRequestBuilder(OnboardingMeetingEvent, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `OnboardingMeetingEvent`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `OnboardingMeetingEvent`.
   */
  update(entity: OnboardingMeetingEvent): UpdateRequestBuilder<OnboardingMeetingEvent> {
    return new UpdateRequestBuilder(OnboardingMeetingEvent, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `OnboardingMeetingEvent`.
   * @param onboardingMeetingActivityActivityId Key property. See [[OnboardingMeetingEvent.onboardingMeetingActivityActivityId]].
   * @param onboardingNewHireActivitiesStepProcessStepId Key property. See [[OnboardingMeetingEvent.onboardingNewHireActivitiesStepProcessStepId]].
   * @param onboardingProcessOnboardingProcessId Key property. See [[OnboardingMeetingEvent.onboardingProcessOnboardingProcessId]].
   * @param externalCode Key property. See [[OnboardingMeetingEvent.externalCode]].
   * @returns A request builder for creating requests that delete an entity of type `OnboardingMeetingEvent`.
   */
  delete(onboardingMeetingActivityActivityId: BigNumber, onboardingNewHireActivitiesStepProcessStepId: BigNumber, onboardingProcessOnboardingProcessId: BigNumber, externalCode: string): DeleteRequestBuilder<OnboardingMeetingEvent>;
  /**
   * Returns a request builder for deleting an entity of type `OnboardingMeetingEvent`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `OnboardingMeetingEvent` by taking the entity as a parameter.
   */
  delete(entity: OnboardingMeetingEvent): DeleteRequestBuilder<OnboardingMeetingEvent>;
  delete(onboardingMeetingActivityActivityIdOrEntity: any, onboardingNewHireActivitiesStepProcessStepId?: BigNumber, onboardingProcessOnboardingProcessId?: BigNumber, externalCode?: string): DeleteRequestBuilder<OnboardingMeetingEvent> {
    return new DeleteRequestBuilder(OnboardingMeetingEvent, onboardingMeetingActivityActivityIdOrEntity instanceof OnboardingMeetingEvent ? onboardingMeetingActivityActivityIdOrEntity : {
      OnboardingMeetingActivity_activityId: onboardingMeetingActivityActivityIdOrEntity!,
      OnboardingNewHireActivitiesStep_processStepId: onboardingNewHireActivitiesStepProcessStepId!,
      OnboardingProcess_onboardingProcessId: onboardingProcessOnboardingProcessId!,
      externalCode: externalCode!
    });
  }
}
