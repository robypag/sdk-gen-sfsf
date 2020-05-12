/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { OnboardingCandidateInfo } from './OnboardingCandidateInfo';

/**
 * Request builder class for operations supported on the [[OnboardingCandidateInfo]] entity.
 */
export class OnboardingCandidateInfoRequestBuilder extends RequestBuilder<OnboardingCandidateInfo> {
  /**
   * Returns a request builder for retrieving one `OnboardingCandidateInfo` entity based on its keys.
   * @param applicantId Key property. See [[OnboardingCandidateInfo.applicantId]].
   * @returns A request builder for creating requests to retrieve one `OnboardingCandidateInfo` entity based on its keys.
   */
  getByKey(applicantId: string): GetByKeyRequestBuilder<OnboardingCandidateInfo> {
    return new GetByKeyRequestBuilder(OnboardingCandidateInfo, { applicantId: applicantId });
  }

  /**
   * Returns a request builder for querying all `OnboardingCandidateInfo` entities.
   * @returns A request builder for creating requests to retrieve all `OnboardingCandidateInfo` entities.
   */
  getAll(): GetAllRequestBuilder<OnboardingCandidateInfo> {
    return new GetAllRequestBuilder(OnboardingCandidateInfo);
  }

  /**
   * Returns a request builder for creating a `OnboardingCandidateInfo` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `OnboardingCandidateInfo`.
   */
  create(entity: OnboardingCandidateInfo): CreateRequestBuilder<OnboardingCandidateInfo> {
    return new CreateRequestBuilder(OnboardingCandidateInfo, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `OnboardingCandidateInfo`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `OnboardingCandidateInfo`.
   */
  update(entity: OnboardingCandidateInfo): UpdateRequestBuilder<OnboardingCandidateInfo> {
    return new UpdateRequestBuilder(OnboardingCandidateInfo, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `OnboardingCandidateInfo`.
   * @param applicantId Key property. See [[OnboardingCandidateInfo.applicantId]].
   * @returns A request builder for creating requests that delete an entity of type `OnboardingCandidateInfo`.
   */
  delete(applicantId: string): DeleteRequestBuilder<OnboardingCandidateInfo>;
  /**
   * Returns a request builder for deleting an entity of type `OnboardingCandidateInfo`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `OnboardingCandidateInfo` by taking the entity as a parameter.
   */
  delete(entity: OnboardingCandidateInfo): DeleteRequestBuilder<OnboardingCandidateInfo>;
  delete(applicantIdOrEntity: any): DeleteRequestBuilder<OnboardingCandidateInfo> {
    return new DeleteRequestBuilder(OnboardingCandidateInfo, applicantIdOrEntity instanceof OnboardingCandidateInfo ? applicantIdOrEntity : { applicantId: applicantIdOrEntity! });
  }
}
