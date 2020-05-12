/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder } from '@sap-cloud-sdk/core';
import { JobApplicationBackgroundCheckResult } from './JobApplicationBackgroundCheckResult';

/**
 * Request builder class for operations supported on the [[JobApplicationBackgroundCheckResult]] entity.
 */
export class JobApplicationBackgroundCheckResultRequestBuilder extends RequestBuilder<JobApplicationBackgroundCheckResult> {
  /**
   * Returns a request builder for retrieving one `JobApplicationBackgroundCheckResult` entity based on its keys.
   * @param statusId Key property. See [[JobApplicationBackgroundCheckResult.statusId]].
   * @returns A request builder for creating requests to retrieve one `JobApplicationBackgroundCheckResult` entity based on its keys.
   */
  getByKey(statusId: BigNumber): GetByKeyRequestBuilder<JobApplicationBackgroundCheckResult> {
    return new GetByKeyRequestBuilder(JobApplicationBackgroundCheckResult, { statusId: statusId });
  }

  /**
   * Returns a request builder for querying all `JobApplicationBackgroundCheckResult` entities.
   * @returns A request builder for creating requests to retrieve all `JobApplicationBackgroundCheckResult` entities.
   */
  getAll(): GetAllRequestBuilder<JobApplicationBackgroundCheckResult> {
    return new GetAllRequestBuilder(JobApplicationBackgroundCheckResult);
  }

  /**
   * Returns a request builder for creating a `JobApplicationBackgroundCheckResult` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `JobApplicationBackgroundCheckResult`.
   */
  create(entity: JobApplicationBackgroundCheckResult): CreateRequestBuilder<JobApplicationBackgroundCheckResult> {
    return new CreateRequestBuilder(JobApplicationBackgroundCheckResult, entity);
  }
}
