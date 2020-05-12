/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder } from '@sap-cloud-sdk/core';
import { CandidateBackground_Mobility } from './CandidateBackground_Mobility';

/**
 * Request builder class for operations supported on the [[CandidateBackground_Mobility]] entity.
 */
export class CandidateBackground_MobilityRequestBuilder extends RequestBuilder<CandidateBackground_Mobility> {
  /**
   * Returns a request builder for retrieving one `CandidateBackground_Mobility` entity based on its keys.
   * @param backgroundElementId Key property. See [[CandidateBackground_Mobility.backgroundElementId]].
   * @returns A request builder for creating requests to retrieve one `CandidateBackground_Mobility` entity based on its keys.
   */
  getByKey(backgroundElementId: BigNumber): GetByKeyRequestBuilder<CandidateBackground_Mobility> {
    return new GetByKeyRequestBuilder(CandidateBackground_Mobility, { backgroundElementId: backgroundElementId });
  }

  /**
   * Returns a request builder for querying all `CandidateBackground_Mobility` entities.
   * @returns A request builder for creating requests to retrieve all `CandidateBackground_Mobility` entities.
   */
  getAll(): GetAllRequestBuilder<CandidateBackground_Mobility> {
    return new GetAllRequestBuilder(CandidateBackground_Mobility);
  }

  /**
   * Returns a request builder for creating a `CandidateBackground_Mobility` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CandidateBackground_Mobility`.
   */
  create(entity: CandidateBackground_Mobility): CreateRequestBuilder<CandidateBackground_Mobility> {
    return new CreateRequestBuilder(CandidateBackground_Mobility, entity);
  }
}
