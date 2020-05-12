/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { JobRequisitionPostingFieldControls } from './JobRequisitionPostingFieldControls';

/**
 * Request builder class for operations supported on the [[JobRequisitionPostingFieldControls]] entity.
 */
export class JobRequisitionPostingFieldControlsRequestBuilder extends RequestBuilder<JobRequisitionPostingFieldControls> {
  /**
   * Returns a request builder for retrieving one `JobRequisitionPostingFieldControls` entity based on its keys.
   * @param jobPostingId Key property. See [[JobRequisitionPostingFieldControls.jobPostingId]].
   * @param jobReqId Key property. See [[JobRequisitionPostingFieldControls.jobReqId]].
   * @returns A request builder for creating requests to retrieve one `JobRequisitionPostingFieldControls` entity based on its keys.
   */
  getByKey(jobPostingId: number, jobReqId: number): GetByKeyRequestBuilder<JobRequisitionPostingFieldControls> {
    return new GetByKeyRequestBuilder(JobRequisitionPostingFieldControls, {
      jobPostingId: jobPostingId,
      jobReqId: jobReqId
    });
  }

  /**
   * Returns a request builder for querying all `JobRequisitionPostingFieldControls` entities.
   * @returns A request builder for creating requests to retrieve all `JobRequisitionPostingFieldControls` entities.
   */
  getAll(): GetAllRequestBuilder<JobRequisitionPostingFieldControls> {
    return new GetAllRequestBuilder(JobRequisitionPostingFieldControls);
  }
}
