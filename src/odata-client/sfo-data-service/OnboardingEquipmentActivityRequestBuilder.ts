/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { OnboardingEquipmentActivity } from './OnboardingEquipmentActivity';

/**
 * Request builder class for operations supported on the [[OnboardingEquipmentActivity]] entity.
 */
export class OnboardingEquipmentActivityRequestBuilder extends RequestBuilder<OnboardingEquipmentActivity> {
  /**
   * Returns a request builder for retrieving one `OnboardingEquipmentActivity` entity based on its keys.
   * @param onboardingNewHireActivitiesStepProcessStepId Key property. See [[OnboardingEquipmentActivity.onboardingNewHireActivitiesStepProcessStepId]].
   * @param onboardingProcessOnboardingProcessId Key property. See [[OnboardingEquipmentActivity.onboardingProcessOnboardingProcessId]].
   * @param activityId Key property. See [[OnboardingEquipmentActivity.activityId]].
   * @returns A request builder for creating requests to retrieve one `OnboardingEquipmentActivity` entity based on its keys.
   */
  getByKey(onboardingNewHireActivitiesStepProcessStepId: BigNumber, onboardingProcessOnboardingProcessId: BigNumber, activityId: BigNumber): GetByKeyRequestBuilder<OnboardingEquipmentActivity> {
    return new GetByKeyRequestBuilder(OnboardingEquipmentActivity, {
      OnboardingNewHireActivitiesStep_processStepId: onboardingNewHireActivitiesStepProcessStepId,
      OnboardingProcess_onboardingProcessId: onboardingProcessOnboardingProcessId,
      activityId: activityId
    });
  }

  /**
   * Returns a request builder for querying all `OnboardingEquipmentActivity` entities.
   * @returns A request builder for creating requests to retrieve all `OnboardingEquipmentActivity` entities.
   */
  getAll(): GetAllRequestBuilder<OnboardingEquipmentActivity> {
    return new GetAllRequestBuilder(OnboardingEquipmentActivity);
  }

  /**
   * Returns a request builder for creating a `OnboardingEquipmentActivity` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `OnboardingEquipmentActivity`.
   */
  create(entity: OnboardingEquipmentActivity): CreateRequestBuilder<OnboardingEquipmentActivity> {
    return new CreateRequestBuilder(OnboardingEquipmentActivity, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `OnboardingEquipmentActivity`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `OnboardingEquipmentActivity`.
   */
  update(entity: OnboardingEquipmentActivity): UpdateRequestBuilder<OnboardingEquipmentActivity> {
    return new UpdateRequestBuilder(OnboardingEquipmentActivity, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `OnboardingEquipmentActivity`.
   * @param onboardingNewHireActivitiesStepProcessStepId Key property. See [[OnboardingEquipmentActivity.onboardingNewHireActivitiesStepProcessStepId]].
   * @param onboardingProcessOnboardingProcessId Key property. See [[OnboardingEquipmentActivity.onboardingProcessOnboardingProcessId]].
   * @param activityId Key property. See [[OnboardingEquipmentActivity.activityId]].
   * @returns A request builder for creating requests that delete an entity of type `OnboardingEquipmentActivity`.
   */
  delete(onboardingNewHireActivitiesStepProcessStepId: BigNumber, onboardingProcessOnboardingProcessId: BigNumber, activityId: BigNumber): DeleteRequestBuilder<OnboardingEquipmentActivity>;
  /**
   * Returns a request builder for deleting an entity of type `OnboardingEquipmentActivity`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `OnboardingEquipmentActivity` by taking the entity as a parameter.
   */
  delete(entity: OnboardingEquipmentActivity): DeleteRequestBuilder<OnboardingEquipmentActivity>;
  delete(onboardingNewHireActivitiesStepProcessStepIdOrEntity: any, onboardingProcessOnboardingProcessId?: BigNumber, activityId?: BigNumber): DeleteRequestBuilder<OnboardingEquipmentActivity> {
    return new DeleteRequestBuilder(OnboardingEquipmentActivity, onboardingNewHireActivitiesStepProcessStepIdOrEntity instanceof OnboardingEquipmentActivity ? onboardingNewHireActivitiesStepProcessStepIdOrEntity : {
      OnboardingNewHireActivitiesStep_processStepId: onboardingNewHireActivitiesStepProcessStepIdOrEntity!,
      OnboardingProcess_onboardingProcessId: onboardingProcessOnboardingProcessId!,
      activityId: activityId!
    });
  }
}
