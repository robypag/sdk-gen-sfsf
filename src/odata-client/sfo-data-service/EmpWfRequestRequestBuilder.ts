/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { EmpWfRequest } from './EmpWfRequest';

/**
 * Request builder class for operations supported on the [[EmpWfRequest]] entity.
 */
export class EmpWfRequestRequestBuilder extends RequestBuilder<EmpWfRequest> {
  /**
   * Returns a request builder for retrieving one `EmpWfRequest` entity based on its keys.
   * @param empWfRequestId Key property. See [[EmpWfRequest.empWfRequestId]].
   * @returns A request builder for creating requests to retrieve one `EmpWfRequest` entity based on its keys.
   */
  getByKey(empWfRequestId: BigNumber): GetByKeyRequestBuilder<EmpWfRequest> {
    return new GetByKeyRequestBuilder(EmpWfRequest, { empWfRequestId: empWfRequestId });
  }

  /**
   * Returns a request builder for querying all `EmpWfRequest` entities.
   * @returns A request builder for creating requests to retrieve all `EmpWfRequest` entities.
   */
  getAll(): GetAllRequestBuilder<EmpWfRequest> {
    return new GetAllRequestBuilder(EmpWfRequest);
  }
}
