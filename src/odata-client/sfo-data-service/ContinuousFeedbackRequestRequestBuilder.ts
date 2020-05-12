/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder } from '@sap-cloud-sdk/core';
import { ContinuousFeedbackRequest } from './ContinuousFeedbackRequest';

/**
 * Request builder class for operations supported on the [[ContinuousFeedbackRequest]] entity.
 */
export class ContinuousFeedbackRequestRequestBuilder extends RequestBuilder<ContinuousFeedbackRequest> {
  /**
   * Returns a request builder for retrieving one `ContinuousFeedbackRequest` entity based on its keys.
   * @param requestId Key property. See [[ContinuousFeedbackRequest.requestId]].
   * @returns A request builder for creating requests to retrieve one `ContinuousFeedbackRequest` entity based on its keys.
   */
  getByKey(requestId: BigNumber): GetByKeyRequestBuilder<ContinuousFeedbackRequest> {
    return new GetByKeyRequestBuilder(ContinuousFeedbackRequest, { requestId: requestId });
  }

  /**
   * Returns a request builder for querying all `ContinuousFeedbackRequest` entities.
   * @returns A request builder for creating requests to retrieve all `ContinuousFeedbackRequest` entities.
   */
  getAll(): GetAllRequestBuilder<ContinuousFeedbackRequest> {
    return new GetAllRequestBuilder(ContinuousFeedbackRequest);
  }

  /**
   * Returns a request builder for creating a `ContinuousFeedbackRequest` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ContinuousFeedbackRequest`.
   */
  create(entity: ContinuousFeedbackRequest): CreateRequestBuilder<ContinuousFeedbackRequest> {
    return new CreateRequestBuilder(ContinuousFeedbackRequest, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `ContinuousFeedbackRequest`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ContinuousFeedbackRequest`.
   */
  update(entity: ContinuousFeedbackRequest): UpdateRequestBuilder<ContinuousFeedbackRequest> {
    return new UpdateRequestBuilder(ContinuousFeedbackRequest, entity);
  }
}
