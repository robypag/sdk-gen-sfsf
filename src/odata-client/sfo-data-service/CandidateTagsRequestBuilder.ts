/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder } from '@sap-cloud-sdk/core';
import { CandidateTags } from './CandidateTags';

/**
 * Request builder class for operations supported on the [[CandidateTags]] entity.
 */
export class CandidateTagsRequestBuilder extends RequestBuilder<CandidateTags> {
  /**
   * Returns a request builder for retrieving one `CandidateTags` entity based on its keys.
   * @param tagId Key property. See [[CandidateTags.tagId]].
   * @returns A request builder for creating requests to retrieve one `CandidateTags` entity based on its keys.
   */
  getByKey(tagId: BigNumber): GetByKeyRequestBuilder<CandidateTags> {
    return new GetByKeyRequestBuilder(CandidateTags, { tagId: tagId });
  }

  /**
   * Returns a request builder for querying all `CandidateTags` entities.
   * @returns A request builder for creating requests to retrieve all `CandidateTags` entities.
   */
  getAll(): GetAllRequestBuilder<CandidateTags> {
    return new GetAllRequestBuilder(CandidateTags);
  }

  /**
   * Returns a request builder for creating a `CandidateTags` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CandidateTags`.
   */
  create(entity: CandidateTags): CreateRequestBuilder<CandidateTags> {
    return new CreateRequestBuilder(CandidateTags, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `CandidateTags`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CandidateTags`.
   */
  update(entity: CandidateTags): UpdateRequestBuilder<CandidateTags> {
    return new UpdateRequestBuilder(CandidateTags, entity);
  }
}
