/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { RbpBasicPermission } from './RbpBasicPermission';

/**
 * Request builder class for operations supported on the [[RbpBasicPermission]] entity.
 */
export class RbpBasicPermissionRequestBuilder extends RequestBuilder<RbpBasicPermission> {
  /**
   * Returns a request builder for retrieving one `RbpBasicPermission` entity based on its keys.
   * @param permissionId Key property. See [[RbpBasicPermission.permissionId]].
   * @returns A request builder for creating requests to retrieve one `RbpBasicPermission` entity based on its keys.
   */
  getByKey(permissionId: BigNumber): GetByKeyRequestBuilder<RbpBasicPermission> {
    return new GetByKeyRequestBuilder(RbpBasicPermission, { permissionId: permissionId });
  }

  /**
   * Returns a request builder for querying all `RbpBasicPermission` entities.
   * @returns A request builder for creating requests to retrieve all `RbpBasicPermission` entities.
   */
  getAll(): GetAllRequestBuilder<RbpBasicPermission> {
    return new GetAllRequestBuilder(RbpBasicPermission);
  }
}
