/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { RoleEntity } from './RoleEntity';

/**
 * Request builder class for operations supported on the [[RoleEntity]] entity.
 */
export class RoleEntityRequestBuilder extends RequestBuilder<RoleEntity> {
  /**
   * Returns a request builder for retrieving one `RoleEntity` entity based on its keys.
   * @param externalCode Key property. See [[RoleEntity.externalCode]].
   * @returns A request builder for creating requests to retrieve one `RoleEntity` entity based on its keys.
   */
  getByKey(externalCode: string): GetByKeyRequestBuilder<RoleEntity> {
    return new GetByKeyRequestBuilder(RoleEntity, { externalCode: externalCode });
  }

  /**
   * Returns a request builder for querying all `RoleEntity` entities.
   * @returns A request builder for creating requests to retrieve all `RoleEntity` entities.
   */
  getAll(): GetAllRequestBuilder<RoleEntity> {
    return new GetAllRequestBuilder(RoleEntity);
  }

  /**
   * Returns a request builder for creating a `RoleEntity` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RoleEntity`.
   */
  create(entity: RoleEntity): CreateRequestBuilder<RoleEntity> {
    return new CreateRequestBuilder(RoleEntity, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `RoleEntity`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RoleEntity`.
   */
  update(entity: RoleEntity): UpdateRequestBuilder<RoleEntity> {
    return new UpdateRequestBuilder(RoleEntity, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RoleEntity`.
   * @param externalCode Key property. See [[RoleEntity.externalCode]].
   * @returns A request builder for creating requests that delete an entity of type `RoleEntity`.
   */
  delete(externalCode: string): DeleteRequestBuilder<RoleEntity>;
  /**
   * Returns a request builder for deleting an entity of type `RoleEntity`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RoleEntity` by taking the entity as a parameter.
   */
  delete(entity: RoleEntity): DeleteRequestBuilder<RoleEntity>;
  delete(externalCodeOrEntity: any): DeleteRequestBuilder<RoleEntity> {
    return new DeleteRequestBuilder(RoleEntity, externalCodeOrEntity instanceof RoleEntity ? externalCodeOrEntity : { externalCode: externalCodeOrEntity! });
  }
}
