/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FoDynamicRole } from './FoDynamicRole';

/**
 * Request builder class for operations supported on the [[FoDynamicRole]] entity.
 */
export class FoDynamicRoleRequestBuilder extends RequestBuilder<FoDynamicRole> {
  /**
   * Returns a request builder for retrieving one `FoDynamicRole` entity based on its keys.
   * @param dynamicRoleAssignmentId Key property. See [[FoDynamicRole.dynamicRoleAssignmentId]].
   * @returns A request builder for creating requests to retrieve one `FoDynamicRole` entity based on its keys.
   */
  getByKey(dynamicRoleAssignmentId: BigNumber): GetByKeyRequestBuilder<FoDynamicRole> {
    return new GetByKeyRequestBuilder(FoDynamicRole, { dynamicRoleAssignmentId: dynamicRoleAssignmentId });
  }

  /**
   * Returns a request builder for querying all `FoDynamicRole` entities.
   * @returns A request builder for creating requests to retrieve all `FoDynamicRole` entities.
   */
  getAll(): GetAllRequestBuilder<FoDynamicRole> {
    return new GetAllRequestBuilder(FoDynamicRole);
  }
}
