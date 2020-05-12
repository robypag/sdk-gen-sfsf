/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FoWfConfigStepApprover } from './FoWfConfigStepApprover';

/**
 * Request builder class for operations supported on the [[FoWfConfigStepApprover]] entity.
 */
export class FoWfConfigStepApproverRequestBuilder extends RequestBuilder<FoWfConfigStepApprover> {
  /**
   * Returns a request builder for retrieving one `FoWfConfigStepApprover` entity based on its keys.
   * @param externalCode Key property. See [[FoWfConfigStepApprover.externalCode]].
   * @param stepNum Key property. See [[FoWfConfigStepApprover.stepNum]].
   * @returns A request builder for creating requests to retrieve one `FoWfConfigStepApprover` entity based on its keys.
   */
  getByKey(externalCode: string, stepNum: BigNumber): GetByKeyRequestBuilder<FoWfConfigStepApprover> {
    return new GetByKeyRequestBuilder(FoWfConfigStepApprover, {
      externalCode: externalCode,
      stepNum: stepNum
    });
  }

  /**
   * Returns a request builder for querying all `FoWfConfigStepApprover` entities.
   * @returns A request builder for creating requests to retrieve all `FoWfConfigStepApprover` entities.
   */
  getAll(): GetAllRequestBuilder<FoWfConfigStepApprover> {
    return new GetAllRequestBuilder(FoWfConfigStepApprover);
  }
}
