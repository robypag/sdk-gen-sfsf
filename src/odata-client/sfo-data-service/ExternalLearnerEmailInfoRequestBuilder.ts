/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder } from '@sap-cloud-sdk/core';
import { ExternalLearnerEmailInfo } from './ExternalLearnerEmailInfo';

/**
 * Request builder class for operations supported on the [[ExternalLearnerEmailInfo]] entity.
 */
export class ExternalLearnerEmailInfoRequestBuilder extends RequestBuilder<ExternalLearnerEmailInfo> {
  /**
   * Returns a request builder for retrieving one `ExternalLearnerEmailInfo` entity based on its keys.
   * @param itemId Key property. See [[ExternalLearnerEmailInfo.itemId]].
   * @returns A request builder for creating requests to retrieve one `ExternalLearnerEmailInfo` entity based on its keys.
   */
  getByKey(itemId: BigNumber): GetByKeyRequestBuilder<ExternalLearnerEmailInfo> {
    return new GetByKeyRequestBuilder(ExternalLearnerEmailInfo, { itemId: itemId });
  }

  /**
   * Returns a request builder for querying all `ExternalLearnerEmailInfo` entities.
   * @returns A request builder for creating requests to retrieve all `ExternalLearnerEmailInfo` entities.
   */
  getAll(): GetAllRequestBuilder<ExternalLearnerEmailInfo> {
    return new GetAllRequestBuilder(ExternalLearnerEmailInfo);
  }

  /**
   * Returns a request builder for creating a `ExternalLearnerEmailInfo` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExternalLearnerEmailInfo`.
   */
  create(entity: ExternalLearnerEmailInfo): CreateRequestBuilder<ExternalLearnerEmailInfo> {
    return new CreateRequestBuilder(ExternalLearnerEmailInfo, entity);
  }
}
