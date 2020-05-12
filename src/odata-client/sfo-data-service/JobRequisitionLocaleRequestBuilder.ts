/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { JobRequisitionLocale } from './JobRequisitionLocale';

/**
 * Request builder class for operations supported on the [[JobRequisitionLocale]] entity.
 */
export class JobRequisitionLocaleRequestBuilder extends RequestBuilder<JobRequisitionLocale> {
  /**
   * Returns a request builder for retrieving one `JobRequisitionLocale` entity based on its keys.
   * @param jobReqLocalId Key property. See [[JobRequisitionLocale.jobReqLocalId]].
   * @returns A request builder for creating requests to retrieve one `JobRequisitionLocale` entity based on its keys.
   */
  getByKey(jobReqLocalId: BigNumber): GetByKeyRequestBuilder<JobRequisitionLocale> {
    return new GetByKeyRequestBuilder(JobRequisitionLocale, { jobReqLocalId: jobReqLocalId });
  }

  /**
   * Returns a request builder for querying all `JobRequisitionLocale` entities.
   * @returns A request builder for creating requests to retrieve all `JobRequisitionLocale` entities.
   */
  getAll(): GetAllRequestBuilder<JobRequisitionLocale> {
    return new GetAllRequestBuilder(JobRequisitionLocale);
  }
}
