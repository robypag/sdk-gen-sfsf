/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder } from '@sap-cloud-sdk/core';
import { ExternalLearnerPersonalInfo } from './ExternalLearnerPersonalInfo';

/**
 * Request builder class for operations supported on the [[ExternalLearnerPersonalInfo]] entity.
 */
export class ExternalLearnerPersonalInfoRequestBuilder extends RequestBuilder<ExternalLearnerPersonalInfo> {
  /**
   * Returns a request builder for retrieving one `ExternalLearnerPersonalInfo` entity based on its keys.
   * @param itemId Key property. See [[ExternalLearnerPersonalInfo.itemId]].
   * @returns A request builder for creating requests to retrieve one `ExternalLearnerPersonalInfo` entity based on its keys.
   */
  getByKey(itemId: BigNumber): GetByKeyRequestBuilder<ExternalLearnerPersonalInfo> {
    return new GetByKeyRequestBuilder(ExternalLearnerPersonalInfo, { itemId: itemId });
  }

  /**
   * Returns a request builder for querying all `ExternalLearnerPersonalInfo` entities.
   * @returns A request builder for creating requests to retrieve all `ExternalLearnerPersonalInfo` entities.
   */
  getAll(): GetAllRequestBuilder<ExternalLearnerPersonalInfo> {
    return new GetAllRequestBuilder(ExternalLearnerPersonalInfo);
  }

  /**
   * Returns a request builder for creating a `ExternalLearnerPersonalInfo` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExternalLearnerPersonalInfo`.
   */
  create(entity: ExternalLearnerPersonalInfo): CreateRequestBuilder<ExternalLearnerPersonalInfo> {
    return new CreateRequestBuilder(ExternalLearnerPersonalInfo, entity);
  }
}
