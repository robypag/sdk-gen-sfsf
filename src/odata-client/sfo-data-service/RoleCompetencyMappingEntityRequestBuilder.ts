/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { RoleCompetencyMappingEntity } from './RoleCompetencyMappingEntity';

/**
 * Request builder class for operations supported on the [[RoleCompetencyMappingEntity]] entity.
 */
export class RoleCompetencyMappingEntityRequestBuilder extends RequestBuilder<RoleCompetencyMappingEntity> {
  /**
   * Returns a request builder for retrieving one `RoleCompetencyMappingEntity` entity based on its keys.
   * @param roleEntityExternalCode Key property. See [[RoleCompetencyMappingEntity.roleEntityExternalCode]].
   * @param externalCode Key property. See [[RoleCompetencyMappingEntity.externalCode]].
   * @returns A request builder for creating requests to retrieve one `RoleCompetencyMappingEntity` entity based on its keys.
   */
  getByKey(roleEntityExternalCode: string, externalCode: string): GetByKeyRequestBuilder<RoleCompetencyMappingEntity> {
    return new GetByKeyRequestBuilder(RoleCompetencyMappingEntity, {
      RoleEntity_externalCode: roleEntityExternalCode,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `RoleCompetencyMappingEntity` entities.
   * @returns A request builder for creating requests to retrieve all `RoleCompetencyMappingEntity` entities.
   */
  getAll(): GetAllRequestBuilder<RoleCompetencyMappingEntity> {
    return new GetAllRequestBuilder(RoleCompetencyMappingEntity);
  }

  /**
   * Returns a request builder for creating a `RoleCompetencyMappingEntity` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RoleCompetencyMappingEntity`.
   */
  create(entity: RoleCompetencyMappingEntity): CreateRequestBuilder<RoleCompetencyMappingEntity> {
    return new CreateRequestBuilder(RoleCompetencyMappingEntity, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `RoleCompetencyMappingEntity`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RoleCompetencyMappingEntity`.
   */
  update(entity: RoleCompetencyMappingEntity): UpdateRequestBuilder<RoleCompetencyMappingEntity> {
    return new UpdateRequestBuilder(RoleCompetencyMappingEntity, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RoleCompetencyMappingEntity`.
   * @param roleEntityExternalCode Key property. See [[RoleCompetencyMappingEntity.roleEntityExternalCode]].
   * @param externalCode Key property. See [[RoleCompetencyMappingEntity.externalCode]].
   * @returns A request builder for creating requests that delete an entity of type `RoleCompetencyMappingEntity`.
   */
  delete(roleEntityExternalCode: string, externalCode: string): DeleteRequestBuilder<RoleCompetencyMappingEntity>;
  /**
   * Returns a request builder for deleting an entity of type `RoleCompetencyMappingEntity`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RoleCompetencyMappingEntity` by taking the entity as a parameter.
   */
  delete(entity: RoleCompetencyMappingEntity): DeleteRequestBuilder<RoleCompetencyMappingEntity>;
  delete(roleEntityExternalCodeOrEntity: any, externalCode?: string): DeleteRequestBuilder<RoleCompetencyMappingEntity> {
    return new DeleteRequestBuilder(RoleCompetencyMappingEntity, roleEntityExternalCodeOrEntity instanceof RoleCompetencyMappingEntity ? roleEntityExternalCodeOrEntity : {
      RoleEntity_externalCode: roleEntityExternalCodeOrEntity!,
      externalCode: externalCode!
    });
  }
}
