/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { RoleTalentPoolMappingEntity } from './RoleTalentPoolMappingEntity';

/**
 * Request builder class for operations supported on the [[RoleTalentPoolMappingEntity]] entity.
 */
export class RoleTalentPoolMappingEntityRequestBuilder extends RequestBuilder<RoleTalentPoolMappingEntity> {
  /**
   * Returns a request builder for retrieving one `RoleTalentPoolMappingEntity` entity based on its keys.
   * @param roleEntityExternalCode Key property. See [[RoleTalentPoolMappingEntity.roleEntityExternalCode]].
   * @param externalCode Key property. See [[RoleTalentPoolMappingEntity.externalCode]].
   * @returns A request builder for creating requests to retrieve one `RoleTalentPoolMappingEntity` entity based on its keys.
   */
  getByKey(roleEntityExternalCode: string, externalCode: string): GetByKeyRequestBuilder<RoleTalentPoolMappingEntity> {
    return new GetByKeyRequestBuilder(RoleTalentPoolMappingEntity, {
      RoleEntity_externalCode: roleEntityExternalCode,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `RoleTalentPoolMappingEntity` entities.
   * @returns A request builder for creating requests to retrieve all `RoleTalentPoolMappingEntity` entities.
   */
  getAll(): GetAllRequestBuilder<RoleTalentPoolMappingEntity> {
    return new GetAllRequestBuilder(RoleTalentPoolMappingEntity);
  }

  /**
   * Returns a request builder for creating a `RoleTalentPoolMappingEntity` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RoleTalentPoolMappingEntity`.
   */
  create(entity: RoleTalentPoolMappingEntity): CreateRequestBuilder<RoleTalentPoolMappingEntity> {
    return new CreateRequestBuilder(RoleTalentPoolMappingEntity, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `RoleTalentPoolMappingEntity`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RoleTalentPoolMappingEntity`.
   */
  update(entity: RoleTalentPoolMappingEntity): UpdateRequestBuilder<RoleTalentPoolMappingEntity> {
    return new UpdateRequestBuilder(RoleTalentPoolMappingEntity, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RoleTalentPoolMappingEntity`.
   * @param roleEntityExternalCode Key property. See [[RoleTalentPoolMappingEntity.roleEntityExternalCode]].
   * @param externalCode Key property. See [[RoleTalentPoolMappingEntity.externalCode]].
   * @returns A request builder for creating requests that delete an entity of type `RoleTalentPoolMappingEntity`.
   */
  delete(roleEntityExternalCode: string, externalCode: string): DeleteRequestBuilder<RoleTalentPoolMappingEntity>;
  /**
   * Returns a request builder for deleting an entity of type `RoleTalentPoolMappingEntity`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RoleTalentPoolMappingEntity` by taking the entity as a parameter.
   */
  delete(entity: RoleTalentPoolMappingEntity): DeleteRequestBuilder<RoleTalentPoolMappingEntity>;
  delete(roleEntityExternalCodeOrEntity: any, externalCode?: string): DeleteRequestBuilder<RoleTalentPoolMappingEntity> {
    return new DeleteRequestBuilder(RoleTalentPoolMappingEntity, roleEntityExternalCodeOrEntity instanceof RoleTalentPoolMappingEntity ? roleEntityExternalCodeOrEntity : {
      RoleEntity_externalCode: roleEntityExternalCodeOrEntity!,
      externalCode: externalCode!
    });
  }
}
