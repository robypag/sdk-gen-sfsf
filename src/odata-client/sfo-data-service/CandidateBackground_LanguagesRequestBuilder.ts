/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder } from '@sap-cloud-sdk/core';
import { CandidateBackground_Languages } from './CandidateBackground_Languages';

/**
 * Request builder class for operations supported on the [[CandidateBackground_Languages]] entity.
 */
export class CandidateBackground_LanguagesRequestBuilder extends RequestBuilder<CandidateBackground_Languages> {
  /**
   * Returns a request builder for retrieving one `CandidateBackground_Languages` entity based on its keys.
   * @param backgroundElementId Key property. See [[CandidateBackground_Languages.backgroundElementId]].
   * @returns A request builder for creating requests to retrieve one `CandidateBackground_Languages` entity based on its keys.
   */
  getByKey(backgroundElementId: BigNumber): GetByKeyRequestBuilder<CandidateBackground_Languages> {
    return new GetByKeyRequestBuilder(CandidateBackground_Languages, { backgroundElementId: backgroundElementId });
  }

  /**
   * Returns a request builder for querying all `CandidateBackground_Languages` entities.
   * @returns A request builder for creating requests to retrieve all `CandidateBackground_Languages` entities.
   */
  getAll(): GetAllRequestBuilder<CandidateBackground_Languages> {
    return new GetAllRequestBuilder(CandidateBackground_Languages);
  }

  /**
   * Returns a request builder for creating a `CandidateBackground_Languages` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CandidateBackground_Languages`.
   */
  create(entity: CandidateBackground_Languages): CreateRequestBuilder<CandidateBackground_Languages> {
    return new CreateRequestBuilder(CandidateBackground_Languages, entity);
  }
}
