/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { PositionSkillMappingEntity } from './PositionSkillMappingEntity';

/**
 * Request builder class for operations supported on the [[PositionSkillMappingEntity]] entity.
 */
export class PositionSkillMappingEntityRequestBuilder extends RequestBuilder<PositionSkillMappingEntity> {
  /**
   * Returns a request builder for retrieving one `PositionSkillMappingEntity` entity based on its keys.
   * @param positionEntityExternalCode Key property. See [[PositionSkillMappingEntity.positionEntityExternalCode]].
   * @param externalCode Key property. See [[PositionSkillMappingEntity.externalCode]].
   * @returns A request builder for creating requests to retrieve one `PositionSkillMappingEntity` entity based on its keys.
   */
  getByKey(positionEntityExternalCode: string, externalCode: string): GetByKeyRequestBuilder<PositionSkillMappingEntity> {
    return new GetByKeyRequestBuilder(PositionSkillMappingEntity, {
      PositionEntity_externalCode: positionEntityExternalCode,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `PositionSkillMappingEntity` entities.
   * @returns A request builder for creating requests to retrieve all `PositionSkillMappingEntity` entities.
   */
  getAll(): GetAllRequestBuilder<PositionSkillMappingEntity> {
    return new GetAllRequestBuilder(PositionSkillMappingEntity);
  }

  /**
   * Returns a request builder for creating a `PositionSkillMappingEntity` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PositionSkillMappingEntity`.
   */
  create(entity: PositionSkillMappingEntity): CreateRequestBuilder<PositionSkillMappingEntity> {
    return new CreateRequestBuilder(PositionSkillMappingEntity, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `PositionSkillMappingEntity`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PositionSkillMappingEntity`.
   */
  update(entity: PositionSkillMappingEntity): UpdateRequestBuilder<PositionSkillMappingEntity> {
    return new UpdateRequestBuilder(PositionSkillMappingEntity, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PositionSkillMappingEntity`.
   * @param positionEntityExternalCode Key property. See [[PositionSkillMappingEntity.positionEntityExternalCode]].
   * @param externalCode Key property. See [[PositionSkillMappingEntity.externalCode]].
   * @returns A request builder for creating requests that delete an entity of type `PositionSkillMappingEntity`.
   */
  delete(positionEntityExternalCode: string, externalCode: string): DeleteRequestBuilder<PositionSkillMappingEntity>;
  /**
   * Returns a request builder for deleting an entity of type `PositionSkillMappingEntity`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PositionSkillMappingEntity` by taking the entity as a parameter.
   */
  delete(entity: PositionSkillMappingEntity): DeleteRequestBuilder<PositionSkillMappingEntity>;
  delete(positionEntityExternalCodeOrEntity: any, externalCode?: string): DeleteRequestBuilder<PositionSkillMappingEntity> {
    return new DeleteRequestBuilder(PositionSkillMappingEntity, positionEntityExternalCodeOrEntity instanceof PositionSkillMappingEntity ? positionEntityExternalCodeOrEntity : {
      PositionEntity_externalCode: positionEntityExternalCodeOrEntity!,
      externalCode: externalCode!
    });
  }
}
