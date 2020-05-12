/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { JobRequisitionLocaleFieldControls } from './JobRequisitionLocaleFieldControls';

/**
 * Request builder class for operations supported on the [[JobRequisitionLocaleFieldControls]] entity.
 */
export class JobRequisitionLocaleFieldControlsRequestBuilder extends RequestBuilder<JobRequisitionLocaleFieldControls> {
  /**
   * Returns a request builder for retrieving one `JobRequisitionLocaleFieldControls` entity based on its keys.
   * @param jobReqLocalId Key property. See [[JobRequisitionLocaleFieldControls.jobReqLocalId]].
   * @returns A request builder for creating requests to retrieve one `JobRequisitionLocaleFieldControls` entity based on its keys.
   */
  getByKey(jobReqLocalId: number): GetByKeyRequestBuilder<JobRequisitionLocaleFieldControls> {
    return new GetByKeyRequestBuilder(JobRequisitionLocaleFieldControls, { jobReqLocalId: jobReqLocalId });
  }

  /**
   * Returns a request builder for querying all `JobRequisitionLocaleFieldControls` entities.
   * @returns A request builder for creating requests to retrieve all `JobRequisitionLocaleFieldControls` entities.
   */
  getAll(): GetAllRequestBuilder<JobRequisitionLocaleFieldControls> {
    return new GetAllRequestBuilder(JobRequisitionLocaleFieldControls);
  }
}
