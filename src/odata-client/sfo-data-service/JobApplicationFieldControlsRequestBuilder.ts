/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { JobApplicationFieldControls } from './JobApplicationFieldControls';

/**
 * Request builder class for operations supported on the [[JobApplicationFieldControls]] entity.
 */
export class JobApplicationFieldControlsRequestBuilder extends RequestBuilder<JobApplicationFieldControls> {
  /**
   * Returns a request builder for retrieving one `JobApplicationFieldControls` entity based on its keys.
   * @param applicationId Key property. See [[JobApplicationFieldControls.applicationId]].
   * @returns A request builder for creating requests to retrieve one `JobApplicationFieldControls` entity based on its keys.
   */
  getByKey(applicationId: number): GetByKeyRequestBuilder<JobApplicationFieldControls> {
    return new GetByKeyRequestBuilder(JobApplicationFieldControls, { applicationId: applicationId });
  }

  /**
   * Returns a request builder for querying all `JobApplicationFieldControls` entities.
   * @returns A request builder for creating requests to retrieve all `JobApplicationFieldControls` entities.
   */
  getAll(): GetAllRequestBuilder<JobApplicationFieldControls> {
    return new GetAllRequestBuilder(JobApplicationFieldControls);
  }
}
