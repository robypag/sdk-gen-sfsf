/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { JobApplicationStatus } from './JobApplicationStatus';

/**
 * Request builder class for operations supported on the [[JobApplicationStatus]] entity.
 */
export class JobApplicationStatusRequestBuilder extends RequestBuilder<JobApplicationStatus> {
  /**
   * Returns a request builder for retrieving one `JobApplicationStatus` entity based on its keys.
   * @param appStatusSetId Key property. See [[JobApplicationStatus.appStatusSetId]].
   * @returns A request builder for creating requests to retrieve one `JobApplicationStatus` entity based on its keys.
   */
  getByKey(appStatusSetId: BigNumber): GetByKeyRequestBuilder<JobApplicationStatus> {
    return new GetByKeyRequestBuilder(JobApplicationStatus, { appStatusSetId: appStatusSetId });
  }

  /**
   * Returns a request builder for querying all `JobApplicationStatus` entities.
   * @returns A request builder for creating requests to retrieve all `JobApplicationStatus` entities.
   */
  getAll(): GetAllRequestBuilder<JobApplicationStatus> {
    return new GetAllRequestBuilder(JobApplicationStatus);
  }
}
