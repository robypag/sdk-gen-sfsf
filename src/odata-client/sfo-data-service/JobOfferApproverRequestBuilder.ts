/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { JobOfferApprover } from './JobOfferApprover';

/**
 * Request builder class for operations supported on the [[JobOfferApprover]] entity.
 */
export class JobOfferApproverRequestBuilder extends RequestBuilder<JobOfferApprover> {
  /**
   * Returns a request builder for retrieving one `JobOfferApprover` entity based on its keys.
   * @param offerApproverId Key property. See [[JobOfferApprover.offerApproverId]].
   * @returns A request builder for creating requests to retrieve one `JobOfferApprover` entity based on its keys.
   */
  getByKey(offerApproverId: BigNumber): GetByKeyRequestBuilder<JobOfferApprover> {
    return new GetByKeyRequestBuilder(JobOfferApprover, { offerApproverId: offerApproverId });
  }

  /**
   * Returns a request builder for querying all `JobOfferApprover` entities.
   * @returns A request builder for creating requests to retrieve all `JobOfferApprover` entities.
   */
  getAll(): GetAllRequestBuilder<JobOfferApprover> {
    return new GetAllRequestBuilder(JobOfferApprover);
  }
}
