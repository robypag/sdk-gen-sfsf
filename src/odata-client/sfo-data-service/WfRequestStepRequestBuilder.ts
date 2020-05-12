/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { WfRequestStep } from './WfRequestStep';

/**
 * Request builder class for operations supported on the [[WfRequestStep]] entity.
 */
export class WfRequestStepRequestBuilder extends RequestBuilder<WfRequestStep> {
  /**
   * Returns a request builder for retrieving one `WfRequestStep` entity based on its keys.
   * @param wfRequestStepId Key property. See [[WfRequestStep.wfRequestStepId]].
   * @returns A request builder for creating requests to retrieve one `WfRequestStep` entity based on its keys.
   */
  getByKey(wfRequestStepId: BigNumber): GetByKeyRequestBuilder<WfRequestStep> {
    return new GetByKeyRequestBuilder(WfRequestStep, { wfRequestStepId: wfRequestStepId });
  }

  /**
   * Returns a request builder for querying all `WfRequestStep` entities.
   * @returns A request builder for creating requests to retrieve all `WfRequestStep` entities.
   */
  getAll(): GetAllRequestBuilder<WfRequestStep> {
    return new GetAllRequestBuilder(WfRequestStep);
  }
}
