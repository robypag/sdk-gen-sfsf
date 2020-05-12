/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { CandidateProfileExtension } from './CandidateProfileExtension';

/**
 * Request builder class for operations supported on the [[CandidateProfileExtension]] entity.
 */
export class CandidateProfileExtensionRequestBuilder extends RequestBuilder<CandidateProfileExtension> {
  /**
   * Returns a request builder for retrieving one `CandidateProfileExtension` entity based on its keys.
   * @param candidateId Key property. See [[CandidateProfileExtension.candidateId]].
   * @returns A request builder for creating requests to retrieve one `CandidateProfileExtension` entity based on its keys.
   */
  getByKey(candidateId: BigNumber): GetByKeyRequestBuilder<CandidateProfileExtension> {
    return new GetByKeyRequestBuilder(CandidateProfileExtension, { candidateId: candidateId });
  }

  /**
   * Returns a request builder for querying all `CandidateProfileExtension` entities.
   * @returns A request builder for creating requests to retrieve all `CandidateProfileExtension` entities.
   */
  getAll(): GetAllRequestBuilder<CandidateProfileExtension> {
    return new GetAllRequestBuilder(CandidateProfileExtension);
  }

  /**
   * Returns a request builder for creating a `CandidateProfileExtension` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CandidateProfileExtension`.
   */
  create(entity: CandidateProfileExtension): CreateRequestBuilder<CandidateProfileExtension> {
    return new CreateRequestBuilder(CandidateProfileExtension, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `CandidateProfileExtension`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CandidateProfileExtension`.
   */
  update(entity: CandidateProfileExtension): UpdateRequestBuilder<CandidateProfileExtension> {
    return new UpdateRequestBuilder(CandidateProfileExtension, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CandidateProfileExtension`.
   * @param candidateId Key property. See [[CandidateProfileExtension.candidateId]].
   * @returns A request builder for creating requests that delete an entity of type `CandidateProfileExtension`.
   */
  delete(candidateId: BigNumber): DeleteRequestBuilder<CandidateProfileExtension>;
  /**
   * Returns a request builder for deleting an entity of type `CandidateProfileExtension`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CandidateProfileExtension` by taking the entity as a parameter.
   */
  delete(entity: CandidateProfileExtension): DeleteRequestBuilder<CandidateProfileExtension>;
  delete(candidateIdOrEntity: any): DeleteRequestBuilder<CandidateProfileExtension> {
    return new DeleteRequestBuilder(CandidateProfileExtension, candidateIdOrEntity instanceof CandidateProfileExtension ? candidateIdOrEntity : { candidateId: candidateIdOrEntity! });
  }
}
