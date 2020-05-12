/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { RbpRole } from './RbpRole';

/**
 * Request builder class for operations supported on the [[RbpRole]] entity.
 */
export class RbpRoleRequestBuilder extends RequestBuilder<RbpRole> {
  /**
   * Returns a request builder for retrieving one `RbpRole` entity based on its keys.
   * @param roleId Key property. See [[RbpRole.roleId]].
   * @returns A request builder for creating requests to retrieve one `RbpRole` entity based on its keys.
   */
  getByKey(roleId: BigNumber): GetByKeyRequestBuilder<RbpRole> {
    return new GetByKeyRequestBuilder(RbpRole, { roleId: roleId });
  }

  /**
   * Returns a request builder for querying all `RbpRole` entities.
   * @returns A request builder for creating requests to retrieve all `RbpRole` entities.
   */
  getAll(): GetAllRequestBuilder<RbpRole> {
    return new GetAllRequestBuilder(RbpRole);
  }

  /**
   * Returns a request builder for deleting an entity of type `RbpRole`.
   * @param roleId Key property. See [[RbpRole.roleId]].
   * @returns A request builder for creating requests that delete an entity of type `RbpRole`.
   */
  delete(roleId: BigNumber): DeleteRequestBuilder<RbpRole>;
  /**
   * Returns a request builder for deleting an entity of type `RbpRole`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RbpRole` by taking the entity as a parameter.
   */
  delete(entity: RbpRole): DeleteRequestBuilder<RbpRole>;
  delete(roleIdOrEntity: any): DeleteRequestBuilder<RbpRole> {
    return new DeleteRequestBuilder(RbpRole, roleIdOrEntity instanceof RbpRole ? roleIdOrEntity : { roleId: roleIdOrEntity! });
  }
}
