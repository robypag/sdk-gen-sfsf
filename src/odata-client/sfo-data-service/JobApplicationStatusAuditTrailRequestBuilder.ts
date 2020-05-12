/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { JobApplicationStatusAuditTrail } from './JobApplicationStatusAuditTrail';

/**
 * Request builder class for operations supported on the [[JobApplicationStatusAuditTrail]] entity.
 */
export class JobApplicationStatusAuditTrailRequestBuilder extends RequestBuilder<JobApplicationStatusAuditTrail> {
  /**
   * Returns a request builder for retrieving one `JobApplicationStatusAuditTrail` entity based on its keys.
   * @param revNumber Key property. See [[JobApplicationStatusAuditTrail.revNumber]].
   * @returns A request builder for creating requests to retrieve one `JobApplicationStatusAuditTrail` entity based on its keys.
   */
  getByKey(revNumber: BigNumber): GetByKeyRequestBuilder<JobApplicationStatusAuditTrail> {
    return new GetByKeyRequestBuilder(JobApplicationStatusAuditTrail, { revNumber: revNumber });
  }

  /**
   * Returns a request builder for querying all `JobApplicationStatusAuditTrail` entities.
   * @returns A request builder for creating requests to retrieve all `JobApplicationStatusAuditTrail` entities.
   */
  getAll(): GetAllRequestBuilder<JobApplicationStatusAuditTrail> {
    return new GetAllRequestBuilder(JobApplicationStatusAuditTrail);
  }
}
