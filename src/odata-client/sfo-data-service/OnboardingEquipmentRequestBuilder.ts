/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { OnboardingEquipment } from './OnboardingEquipment';

/**
 * Request builder class for operations supported on the [[OnboardingEquipment]] entity.
 */
export class OnboardingEquipmentRequestBuilder extends RequestBuilder<OnboardingEquipment> {
  /**
   * Returns a request builder for retrieving one `OnboardingEquipment` entity based on its keys.
   * @param onboardingEquipmentActivityActivityId Key property. See [[OnboardingEquipment.onboardingEquipmentActivityActivityId]].
   * @param onboardingNewHireActivitiesStepProcessStepId Key property. See [[OnboardingEquipment.onboardingNewHireActivitiesStepProcessStepId]].
   * @param onboardingProcessOnboardingProcessId Key property. See [[OnboardingEquipment.onboardingProcessOnboardingProcessId]].
   * @param equipmentId Key property. See [[OnboardingEquipment.equipmentId]].
   * @returns A request builder for creating requests to retrieve one `OnboardingEquipment` entity based on its keys.
   */
  getByKey(onboardingEquipmentActivityActivityId: BigNumber, onboardingNewHireActivitiesStepProcessStepId: BigNumber, onboardingProcessOnboardingProcessId: BigNumber, equipmentId: string): GetByKeyRequestBuilder<OnboardingEquipment> {
    return new GetByKeyRequestBuilder(OnboardingEquipment, {
      OnboardingEquipmentActivity_activityId: onboardingEquipmentActivityActivityId,
      OnboardingNewHireActivitiesStep_processStepId: onboardingNewHireActivitiesStepProcessStepId,
      OnboardingProcess_onboardingProcessId: onboardingProcessOnboardingProcessId,
      equipmentId: equipmentId
    });
  }

  /**
   * Returns a request builder for querying all `OnboardingEquipment` entities.
   * @returns A request builder for creating requests to retrieve all `OnboardingEquipment` entities.
   */
  getAll(): GetAllRequestBuilder<OnboardingEquipment> {
    return new GetAllRequestBuilder(OnboardingEquipment);
  }

  /**
   * Returns a request builder for creating a `OnboardingEquipment` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `OnboardingEquipment`.
   */
  create(entity: OnboardingEquipment): CreateRequestBuilder<OnboardingEquipment> {
    return new CreateRequestBuilder(OnboardingEquipment, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `OnboardingEquipment`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `OnboardingEquipment`.
   */
  update(entity: OnboardingEquipment): UpdateRequestBuilder<OnboardingEquipment> {
    return new UpdateRequestBuilder(OnboardingEquipment, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `OnboardingEquipment`.
   * @param onboardingEquipmentActivityActivityId Key property. See [[OnboardingEquipment.onboardingEquipmentActivityActivityId]].
   * @param onboardingNewHireActivitiesStepProcessStepId Key property. See [[OnboardingEquipment.onboardingNewHireActivitiesStepProcessStepId]].
   * @param onboardingProcessOnboardingProcessId Key property. See [[OnboardingEquipment.onboardingProcessOnboardingProcessId]].
   * @param equipmentId Key property. See [[OnboardingEquipment.equipmentId]].
   * @returns A request builder for creating requests that delete an entity of type `OnboardingEquipment`.
   */
  delete(onboardingEquipmentActivityActivityId: BigNumber, onboardingNewHireActivitiesStepProcessStepId: BigNumber, onboardingProcessOnboardingProcessId: BigNumber, equipmentId: string): DeleteRequestBuilder<OnboardingEquipment>;
  /**
   * Returns a request builder for deleting an entity of type `OnboardingEquipment`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `OnboardingEquipment` by taking the entity as a parameter.
   */
  delete(entity: OnboardingEquipment): DeleteRequestBuilder<OnboardingEquipment>;
  delete(onboardingEquipmentActivityActivityIdOrEntity: any, onboardingNewHireActivitiesStepProcessStepId?: BigNumber, onboardingProcessOnboardingProcessId?: BigNumber, equipmentId?: string): DeleteRequestBuilder<OnboardingEquipment> {
    return new DeleteRequestBuilder(OnboardingEquipment, onboardingEquipmentActivityActivityIdOrEntity instanceof OnboardingEquipment ? onboardingEquipmentActivityActivityIdOrEntity : {
      OnboardingEquipmentActivity_activityId: onboardingEquipmentActivityActivityIdOrEntity!,
      OnboardingNewHireActivitiesStep_processStepId: onboardingNewHireActivitiesStepProcessStepId!,
      OnboardingProcess_onboardingProcessId: onboardingProcessOnboardingProcessId!,
      equipmentId: equipmentId!
    });
  }
}
