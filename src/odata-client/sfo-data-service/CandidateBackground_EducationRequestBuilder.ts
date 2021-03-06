/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder } from '@sap-cloud-sdk/core';
import { CandidateBackground_Education } from './CandidateBackground_Education';

/**
 * Request builder class for operations supported on the [[CandidateBackground_Education]] entity.
 */
export class CandidateBackground_EducationRequestBuilder extends RequestBuilder<CandidateBackground_Education> {
  /**
   * Returns a request builder for retrieving one `CandidateBackground_Education` entity based on its keys.
   * @param backgroundElementId Key property. See [[CandidateBackground_Education.backgroundElementId]].
   * @returns A request builder for creating requests to retrieve one `CandidateBackground_Education` entity based on its keys.
   */
  getByKey(backgroundElementId: BigNumber): GetByKeyRequestBuilder<CandidateBackground_Education> {
    return new GetByKeyRequestBuilder(CandidateBackground_Education, { backgroundElementId: backgroundElementId });
  }

  /**
   * Returns a request builder for querying all `CandidateBackground_Education` entities.
   * @returns A request builder for creating requests to retrieve all `CandidateBackground_Education` entities.
   */
  getAll(): GetAllRequestBuilder<CandidateBackground_Education> {
    return new GetAllRequestBuilder(CandidateBackground_Education);
  }

  /**
   * Returns a request builder for creating a `CandidateBackground_Education` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CandidateBackground_Education`.
   */
  create(entity: CandidateBackground_Education): CreateRequestBuilder<CandidateBackground_Education> {
    return new CreateRequestBuilder(CandidateBackground_Education, entity);
  }
}
