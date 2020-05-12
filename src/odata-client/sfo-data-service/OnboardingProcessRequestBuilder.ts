/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { OnboardingProcess } from './OnboardingProcess';

/**
 * Request builder class for operations supported on the [[OnboardingProcess]] entity.
 */
export class OnboardingProcessRequestBuilder extends RequestBuilder<OnboardingProcess> {
  /**
   * Returns a request builder for retrieving one `OnboardingProcess` entity based on its keys.
   * @param onboardingProcessId Key property. See [[OnboardingProcess.onboardingProcessId]].
   * @returns A request builder for creating requests to retrieve one `OnboardingProcess` entity based on its keys.
   */
  getByKey(onboardingProcessId: BigNumber): GetByKeyRequestBuilder<OnboardingProcess> {
    return new GetByKeyRequestBuilder(OnboardingProcess, { onboardingProcessId: onboardingProcessId });
  }

  /**
   * Returns a request builder for querying all `OnboardingProcess` entities.
   * @returns A request builder for creating requests to retrieve all `OnboardingProcess` entities.
   */
  getAll(): GetAllRequestBuilder<OnboardingProcess> {
    return new GetAllRequestBuilder(OnboardingProcess);
  }

  /**
   * Returns a request builder for creating a `OnboardingProcess` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `OnboardingProcess`.
   */
  create(entity: OnboardingProcess): CreateRequestBuilder<OnboardingProcess> {
    return new CreateRequestBuilder(OnboardingProcess, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `OnboardingProcess`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `OnboardingProcess`.
   */
  update(entity: OnboardingProcess): UpdateRequestBuilder<OnboardingProcess> {
    return new UpdateRequestBuilder(OnboardingProcess, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `OnboardingProcess`.
   * @param onboardingProcessId Key property. See [[OnboardingProcess.onboardingProcessId]].
   * @returns A request builder for creating requests that delete an entity of type `OnboardingProcess`.
   */
  delete(onboardingProcessId: BigNumber): DeleteRequestBuilder<OnboardingProcess>;
  /**
   * Returns a request builder for deleting an entity of type `OnboardingProcess`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `OnboardingProcess` by taking the entity as a parameter.
   */
  delete(entity: OnboardingProcess): DeleteRequestBuilder<OnboardingProcess>;
  delete(onboardingProcessIdOrEntity: any): DeleteRequestBuilder<OnboardingProcess> {
    return new DeleteRequestBuilder(OnboardingProcess, onboardingProcessIdOrEntity instanceof OnboardingProcess ? onboardingProcessIdOrEntity : { onboardingProcessId: onboardingProcessIdOrEntity! });
  }
}
