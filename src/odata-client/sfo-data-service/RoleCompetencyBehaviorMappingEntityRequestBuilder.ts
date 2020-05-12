/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { RoleCompetencyBehaviorMappingEntity } from './RoleCompetencyBehaviorMappingEntity';

/**
 * Request builder class for operations supported on the [[RoleCompetencyBehaviorMappingEntity]] entity.
 */
export class RoleCompetencyBehaviorMappingEntityRequestBuilder extends RequestBuilder<RoleCompetencyBehaviorMappingEntity> {
  /**
   * Returns a request builder for retrieving one `RoleCompetencyBehaviorMappingEntity` entity based on its keys.
   * @param roleEntityExternalCode Key property. See [[RoleCompetencyBehaviorMappingEntity.roleEntityExternalCode]].
   * @param externalCode Key property. See [[RoleCompetencyBehaviorMappingEntity.externalCode]].
   * @returns A request builder for creating requests to retrieve one `RoleCompetencyBehaviorMappingEntity` entity based on its keys.
   */
  getByKey(roleEntityExternalCode: string, externalCode: string): GetByKeyRequestBuilder<RoleCompetencyBehaviorMappingEntity> {
    return new GetByKeyRequestBuilder(RoleCompetencyBehaviorMappingEntity, {
      RoleEntity_externalCode: roleEntityExternalCode,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `RoleCompetencyBehaviorMappingEntity` entities.
   * @returns A request builder for creating requests to retrieve all `RoleCompetencyBehaviorMappingEntity` entities.
   */
  getAll(): GetAllRequestBuilder<RoleCompetencyBehaviorMappingEntity> {
    return new GetAllRequestBuilder(RoleCompetencyBehaviorMappingEntity);
  }

  /**
   * Returns a request builder for creating a `RoleCompetencyBehaviorMappingEntity` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RoleCompetencyBehaviorMappingEntity`.
   */
  create(entity: RoleCompetencyBehaviorMappingEntity): CreateRequestBuilder<RoleCompetencyBehaviorMappingEntity> {
    return new CreateRequestBuilder(RoleCompetencyBehaviorMappingEntity, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `RoleCompetencyBehaviorMappingEntity`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RoleCompetencyBehaviorMappingEntity`.
   */
  update(entity: RoleCompetencyBehaviorMappingEntity): UpdateRequestBuilder<RoleCompetencyBehaviorMappingEntity> {
    return new UpdateRequestBuilder(RoleCompetencyBehaviorMappingEntity, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RoleCompetencyBehaviorMappingEntity`.
   * @param roleEntityExternalCode Key property. See [[RoleCompetencyBehaviorMappingEntity.roleEntityExternalCode]].
   * @param externalCode Key property. See [[RoleCompetencyBehaviorMappingEntity.externalCode]].
   * @returns A request builder for creating requests that delete an entity of type `RoleCompetencyBehaviorMappingEntity`.
   */
  delete(roleEntityExternalCode: string, externalCode: string): DeleteRequestBuilder<RoleCompetencyBehaviorMappingEntity>;
  /**
   * Returns a request builder for deleting an entity of type `RoleCompetencyBehaviorMappingEntity`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RoleCompetencyBehaviorMappingEntity` by taking the entity as a parameter.
   */
  delete(entity: RoleCompetencyBehaviorMappingEntity): DeleteRequestBuilder<RoleCompetencyBehaviorMappingEntity>;
  delete(roleEntityExternalCodeOrEntity: any, externalCode?: string): DeleteRequestBuilder<RoleCompetencyBehaviorMappingEntity> {
    return new DeleteRequestBuilder(RoleCompetencyBehaviorMappingEntity, roleEntityExternalCodeOrEntity instanceof RoleCompetencyBehaviorMappingEntity ? roleEntityExternalCodeOrEntity : {
      RoleEntity_externalCode: roleEntityExternalCodeOrEntity!,
      externalCode: externalCode!
    });
  }
}
