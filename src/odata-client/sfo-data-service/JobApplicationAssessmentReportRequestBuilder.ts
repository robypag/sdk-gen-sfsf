/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder } from '@sap-cloud-sdk/core';
import { JobApplicationAssessmentReport } from './JobApplicationAssessmentReport';

/**
 * Request builder class for operations supported on the [[JobApplicationAssessmentReport]] entity.
 */
export class JobApplicationAssessmentReportRequestBuilder extends RequestBuilder<JobApplicationAssessmentReport> {
  /**
   * Returns a request builder for retrieving one `JobApplicationAssessmentReport` entity based on its keys.
   * @param id Key property. See [[JobApplicationAssessmentReport.id]].
   * @returns A request builder for creating requests to retrieve one `JobApplicationAssessmentReport` entity based on its keys.
   */
  getByKey(id: BigNumber): GetByKeyRequestBuilder<JobApplicationAssessmentReport> {
    return new GetByKeyRequestBuilder(JobApplicationAssessmentReport, { id: id });
  }

  /**
   * Returns a request builder for querying all `JobApplicationAssessmentReport` entities.
   * @returns A request builder for creating requests to retrieve all `JobApplicationAssessmentReport` entities.
   */
  getAll(): GetAllRequestBuilder<JobApplicationAssessmentReport> {
    return new GetAllRequestBuilder(JobApplicationAssessmentReport);
  }

  /**
   * Returns a request builder for creating a `JobApplicationAssessmentReport` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `JobApplicationAssessmentReport`.
   */
  create(entity: JobApplicationAssessmentReport): CreateRequestBuilder<JobApplicationAssessmentReport> {
    return new CreateRequestBuilder(JobApplicationAssessmentReport, entity);
  }
}
