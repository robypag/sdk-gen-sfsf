/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { JobApplicationStatusLabel } from './JobApplicationStatusLabel';

/**
 * Request builder class for operations supported on the [[JobApplicationStatusLabel]] entity.
 */
export class JobApplicationStatusLabelRequestBuilder extends RequestBuilder<JobApplicationStatusLabel> {
  /**
   * Returns a request builder for retrieving one `JobApplicationStatusLabel` entity based on its keys.
   * @param appStatusId Key property. See [[JobApplicationStatusLabel.appStatusId]].
   * @returns A request builder for creating requests to retrieve one `JobApplicationStatusLabel` entity based on its keys.
   */
  getByKey(appStatusId: BigNumber): GetByKeyRequestBuilder<JobApplicationStatusLabel> {
    return new GetByKeyRequestBuilder(JobApplicationStatusLabel, { appStatusId: appStatusId });
  }

  /**
   * Returns a request builder for querying all `JobApplicationStatusLabel` entities.
   * @returns A request builder for creating requests to retrieve all `JobApplicationStatusLabel` entities.
   */
  getAll(): GetAllRequestBuilder<JobApplicationStatusLabel> {
    return new GetAllRequestBuilder(JobApplicationStatusLabel);
  }
}
