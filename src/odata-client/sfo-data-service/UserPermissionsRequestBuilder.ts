/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { UserPermissions } from './UserPermissions';

/**
 * Request builder class for operations supported on the [[UserPermissions]] entity.
 */
export class UserPermissionsRequestBuilder extends RequestBuilder<UserPermissions> {
  /**
   * Returns a request builder for retrieving one `UserPermissions` entity based on its keys.
   * @param userId Key property. See [[UserPermissions.userId]].
   * @returns A request builder for creating requests to retrieve one `UserPermissions` entity based on its keys.
   */
  getByKey(userId: number): GetByKeyRequestBuilder<UserPermissions> {
    return new GetByKeyRequestBuilder(UserPermissions, { userId: userId });
  }

  /**
   * Returns a request builder for querying all `UserPermissions` entities.
   * @returns A request builder for creating requests to retrieve all `UserPermissions` entities.
   */
  getAll(): GetAllRequestBuilder<UserPermissions> {
    return new GetAllRequestBuilder(UserPermissions);
  }
}
