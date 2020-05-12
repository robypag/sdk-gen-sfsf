/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { OnboardingNewHireActivitiesStep } from './OnboardingNewHireActivitiesStep';

/**
 * Request builder class for operations supported on the [[OnboardingNewHireActivitiesStep]] entity.
 */
export class OnboardingNewHireActivitiesStepRequestBuilder extends RequestBuilder<OnboardingNewHireActivitiesStep> {
  /**
   * Returns a request builder for retrieving one `OnboardingNewHireActivitiesStep` entity based on its keys.
   * @param onboardingProcessOnboardingProcessId Key property. See [[OnboardingNewHireActivitiesStep.onboardingProcessOnboardingProcessId]].
   * @param processStepId Key property. See [[OnboardingNewHireActivitiesStep.processStepId]].
   * @returns A request builder for creating requests to retrieve one `OnboardingNewHireActivitiesStep` entity based on its keys.
   */
  getByKey(onboardingProcessOnboardingProcessId: BigNumber, processStepId: BigNumber): GetByKeyRequestBuilder<OnboardingNewHireActivitiesStep> {
    return new GetByKeyRequestBuilder(OnboardingNewHireActivitiesStep, {
      OnboardingProcess_onboardingProcessId: onboardingProcessOnboardingProcessId,
      processStepId: processStepId
    });
  }

  /**
   * Returns a request builder for querying all `OnboardingNewHireActivitiesStep` entities.
   * @returns A request builder for creating requests to retrieve all `OnboardingNewHireActivitiesStep` entities.
   */
  getAll(): GetAllRequestBuilder<OnboardingNewHireActivitiesStep> {
    return new GetAllRequestBuilder(OnboardingNewHireActivitiesStep);
  }

  /**
   * Returns a request builder for creating a `OnboardingNewHireActivitiesStep` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `OnboardingNewHireActivitiesStep`.
   */
  create(entity: OnboardingNewHireActivitiesStep): CreateRequestBuilder<OnboardingNewHireActivitiesStep> {
    return new CreateRequestBuilder(OnboardingNewHireActivitiesStep, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `OnboardingNewHireActivitiesStep`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `OnboardingNewHireActivitiesStep`.
   */
  update(entity: OnboardingNewHireActivitiesStep): UpdateRequestBuilder<OnboardingNewHireActivitiesStep> {
    return new UpdateRequestBuilder(OnboardingNewHireActivitiesStep, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `OnboardingNewHireActivitiesStep`.
   * @param onboardingProcessOnboardingProcessId Key property. See [[OnboardingNewHireActivitiesStep.onboardingProcessOnboardingProcessId]].
   * @param processStepId Key property. See [[OnboardingNewHireActivitiesStep.processStepId]].
   * @returns A request builder for creating requests that delete an entity of type `OnboardingNewHireActivitiesStep`.
   */
  delete(onboardingProcessOnboardingProcessId: BigNumber, processStepId: BigNumber): DeleteRequestBuilder<OnboardingNewHireActivitiesStep>;
  /**
   * Returns a request builder for deleting an entity of type `OnboardingNewHireActivitiesStep`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `OnboardingNewHireActivitiesStep` by taking the entity as a parameter.
   */
  delete(entity: OnboardingNewHireActivitiesStep): DeleteRequestBuilder<OnboardingNewHireActivitiesStep>;
  delete(onboardingProcessOnboardingProcessIdOrEntity: any, processStepId?: BigNumber): DeleteRequestBuilder<OnboardingNewHireActivitiesStep> {
    return new DeleteRequestBuilder(OnboardingNewHireActivitiesStep, onboardingProcessOnboardingProcessIdOrEntity instanceof OnboardingNewHireActivitiesStep ? onboardingProcessOnboardingProcessIdOrEntity : {
      OnboardingProcess_onboardingProcessId: onboardingProcessOnboardingProcessIdOrEntity!,
      processStepId: processStepId!
    });
  }
}
