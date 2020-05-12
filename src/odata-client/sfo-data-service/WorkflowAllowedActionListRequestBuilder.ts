/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { WorkflowAllowedActionList } from './WorkflowAllowedActionList';

/**
 * Request builder class for operations supported on the [[WorkflowAllowedActionList]] entity.
 */
export class WorkflowAllowedActionListRequestBuilder extends RequestBuilder<WorkflowAllowedActionList> {
  /**
   * Returns a request builder for retrieving one `WorkflowAllowedActionList` entity based on its keys.
   * @param wfRequestId Key property. See [[WorkflowAllowedActionList.wfRequestId]].
   * @returns A request builder for creating requests to retrieve one `WorkflowAllowedActionList` entity based on its keys.
   */
  getByKey(wfRequestId: BigNumber): GetByKeyRequestBuilder<WorkflowAllowedActionList> {
    return new GetByKeyRequestBuilder(WorkflowAllowedActionList, { wfRequestId: wfRequestId });
  }

  /**
   * Returns a request builder for querying all `WorkflowAllowedActionList` entities.
   * @returns A request builder for creating requests to retrieve all `WorkflowAllowedActionList` entities.
   */
  getAll(): GetAllRequestBuilder<WorkflowAllowedActionList> {
    return new GetAllRequestBuilder(WorkflowAllowedActionList);
  }
}
