/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { JobApplicationAssessmentOrder } from './JobApplicationAssessmentOrder';

/**
 * Request builder class for operations supported on the [[JobApplicationAssessmentOrder]] entity.
 */
export class JobApplicationAssessmentOrderRequestBuilder extends RequestBuilder<JobApplicationAssessmentOrder> {
  /**
   * Returns a request builder for retrieving one `JobApplicationAssessmentOrder` entity based on its keys.
   * @param id Key property. See [[JobApplicationAssessmentOrder.id]].
   * @returns A request builder for creating requests to retrieve one `JobApplicationAssessmentOrder` entity based on its keys.
   */
  getByKey(id: BigNumber): GetByKeyRequestBuilder<JobApplicationAssessmentOrder> {
    return new GetByKeyRequestBuilder(JobApplicationAssessmentOrder, { id: id });
  }

  /**
   * Returns a request builder for querying all `JobApplicationAssessmentOrder` entities.
   * @returns A request builder for creating requests to retrieve all `JobApplicationAssessmentOrder` entities.
   */
  getAll(): GetAllRequestBuilder<JobApplicationAssessmentOrder> {
    return new GetAllRequestBuilder(JobApplicationAssessmentOrder);
  }
}
