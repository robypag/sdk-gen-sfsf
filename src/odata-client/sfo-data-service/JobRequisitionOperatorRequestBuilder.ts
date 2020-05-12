/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { JobRequisitionOperator } from './JobRequisitionOperator';

/**
 * Request builder class for operations supported on the [[JobRequisitionOperator]] entity.
 */
export class JobRequisitionOperatorRequestBuilder extends RequestBuilder<JobRequisitionOperator> {
  /**
   * Returns a request builder for retrieving one `JobRequisitionOperator` entity based on its keys.
   * @param jobReqId Key property. See [[JobRequisitionOperator.jobReqId]].
   * @param operatorRole Key property. See [[JobRequisitionOperator.operatorRole]].
   * @returns A request builder for creating requests to retrieve one `JobRequisitionOperator` entity based on its keys.
   */
  getByKey(jobReqId: BigNumber, operatorRole: string): GetByKeyRequestBuilder<JobRequisitionOperator> {
    return new GetByKeyRequestBuilder(JobRequisitionOperator, {
      jobReqId: jobReqId,
      operatorRole: operatorRole
    });
  }

  /**
   * Returns a request builder for querying all `JobRequisitionOperator` entities.
   * @returns A request builder for creating requests to retrieve all `JobRequisitionOperator` entities.
   */
  getAll(): GetAllRequestBuilder<JobRequisitionOperator> {
    return new GetAllRequestBuilder(JobRequisitionOperator);
  }
}
