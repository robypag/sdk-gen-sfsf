/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { JobOfferFieldControls } from './JobOfferFieldControls';

/**
 * Request builder class for operations supported on the [[JobOfferFieldControls]] entity.
 */
export class JobOfferFieldControlsRequestBuilder extends RequestBuilder<JobOfferFieldControls> {
  /**
   * Returns a request builder for retrieving one `JobOfferFieldControls` entity based on its keys.
   * @param offerApprovalId Key property. See [[JobOfferFieldControls.offerApprovalId]].
   * @returns A request builder for creating requests to retrieve one `JobOfferFieldControls` entity based on its keys.
   */
  getByKey(offerApprovalId: number): GetByKeyRequestBuilder<JobOfferFieldControls> {
    return new GetByKeyRequestBuilder(JobOfferFieldControls, { offerApprovalId: offerApprovalId });
  }

  /**
   * Returns a request builder for querying all `JobOfferFieldControls` entities.
   * @returns A request builder for creating requests to retrieve all `JobOfferFieldControls` entities.
   */
  getAll(): GetAllRequestBuilder<JobOfferFieldControls> {
    return new GetAllRequestBuilder(JobOfferFieldControls);
  }
}
