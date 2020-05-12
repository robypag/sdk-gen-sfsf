/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { JobRequisitionGroupOperator } from './JobRequisitionGroupOperator';

/**
 * Request builder class for operations supported on the [[JobRequisitionGroupOperator]] entity.
 */
export class JobRequisitionGroupOperatorRequestBuilder extends RequestBuilder<JobRequisitionGroupOperator> {
  /**
   * Returns a request builder for retrieving one `JobRequisitionGroupOperator` entity based on its keys.
   * @param jobReqId Key property. See [[JobRequisitionGroupOperator.jobReqId]].
   * @param operatorRole Key property. See [[JobRequisitionGroupOperator.operatorRole]].
   * @param userGroupId Key property. See [[JobRequisitionGroupOperator.userGroupId]].
   * @returns A request builder for creating requests to retrieve one `JobRequisitionGroupOperator` entity based on its keys.
   */
  getByKey(jobReqId: BigNumber, operatorRole: string, userGroupId: BigNumber): GetByKeyRequestBuilder<JobRequisitionGroupOperator> {
    return new GetByKeyRequestBuilder(JobRequisitionGroupOperator, {
      jobReqId: jobReqId,
      operatorRole: operatorRole,
      userGroupId: userGroupId
    });
  }

  /**
   * Returns a request builder for querying all `JobRequisitionGroupOperator` entities.
   * @returns A request builder for creating requests to retrieve all `JobRequisitionGroupOperator` entities.
   */
  getAll(): GetAllRequestBuilder<JobRequisitionGroupOperator> {
    return new GetAllRequestBuilder(JobRequisitionGroupOperator);
  }
}
