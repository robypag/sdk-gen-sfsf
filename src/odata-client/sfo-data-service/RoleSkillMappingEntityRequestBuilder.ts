/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { RoleSkillMappingEntity } from './RoleSkillMappingEntity';

/**
 * Request builder class for operations supported on the [[RoleSkillMappingEntity]] entity.
 */
export class RoleSkillMappingEntityRequestBuilder extends RequestBuilder<RoleSkillMappingEntity> {
  /**
   * Returns a request builder for retrieving one `RoleSkillMappingEntity` entity based on its keys.
   * @param roleEntityExternalCode Key property. See [[RoleSkillMappingEntity.roleEntityExternalCode]].
   * @param externalCode Key property. See [[RoleSkillMappingEntity.externalCode]].
   * @returns A request builder for creating requests to retrieve one `RoleSkillMappingEntity` entity based on its keys.
   */
  getByKey(roleEntityExternalCode: string, externalCode: string): GetByKeyRequestBuilder<RoleSkillMappingEntity> {
    return new GetByKeyRequestBuilder(RoleSkillMappingEntity, {
      RoleEntity_externalCode: roleEntityExternalCode,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `RoleSkillMappingEntity` entities.
   * @returns A request builder for creating requests to retrieve all `RoleSkillMappingEntity` entities.
   */
  getAll(): GetAllRequestBuilder<RoleSkillMappingEntity> {
    return new GetAllRequestBuilder(RoleSkillMappingEntity);
  }

  /**
   * Returns a request builder for creating a `RoleSkillMappingEntity` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RoleSkillMappingEntity`.
   */
  create(entity: RoleSkillMappingEntity): CreateRequestBuilder<RoleSkillMappingEntity> {
    return new CreateRequestBuilder(RoleSkillMappingEntity, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `RoleSkillMappingEntity`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RoleSkillMappingEntity`.
   */
  update(entity: RoleSkillMappingEntity): UpdateRequestBuilder<RoleSkillMappingEntity> {
    return new UpdateRequestBuilder(RoleSkillMappingEntity, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RoleSkillMappingEntity`.
   * @param roleEntityExternalCode Key property. See [[RoleSkillMappingEntity.roleEntityExternalCode]].
   * @param externalCode Key property. See [[RoleSkillMappingEntity.externalCode]].
   * @returns A request builder for creating requests that delete an entity of type `RoleSkillMappingEntity`.
   */
  delete(roleEntityExternalCode: string, externalCode: string): DeleteRequestBuilder<RoleSkillMappingEntity>;
  /**
   * Returns a request builder for deleting an entity of type `RoleSkillMappingEntity`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RoleSkillMappingEntity` by taking the entity as a parameter.
   */
  delete(entity: RoleSkillMappingEntity): DeleteRequestBuilder<RoleSkillMappingEntity>;
  delete(roleEntityExternalCodeOrEntity: any, externalCode?: string): DeleteRequestBuilder<RoleSkillMappingEntity> {
    return new DeleteRequestBuilder(RoleSkillMappingEntity, roleEntityExternalCodeOrEntity instanceof RoleSkillMappingEntity ? roleEntityExternalCodeOrEntity : {
      RoleEntity_externalCode: roleEntityExternalCodeOrEntity!,
      externalCode: externalCode!
    });
  }
}
