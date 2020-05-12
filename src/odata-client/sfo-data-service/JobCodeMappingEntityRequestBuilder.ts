/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { JobCodeMappingEntity } from './JobCodeMappingEntity';

/**
 * Request builder class for operations supported on the [[JobCodeMappingEntity]] entity.
 */
export class JobCodeMappingEntityRequestBuilder extends RequestBuilder<JobCodeMappingEntity> {
  /**
   * Returns a request builder for retrieving one `JobCodeMappingEntity` entity based on its keys.
   * @param roleEntityExternalCode Key property. See [[JobCodeMappingEntity.roleEntityExternalCode]].
   * @param externalCode Key property. See [[JobCodeMappingEntity.externalCode]].
   * @returns A request builder for creating requests to retrieve one `JobCodeMappingEntity` entity based on its keys.
   */
  getByKey(roleEntityExternalCode: string, externalCode: string): GetByKeyRequestBuilder<JobCodeMappingEntity> {
    return new GetByKeyRequestBuilder(JobCodeMappingEntity, {
      RoleEntity_externalCode: roleEntityExternalCode,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `JobCodeMappingEntity` entities.
   * @returns A request builder for creating requests to retrieve all `JobCodeMappingEntity` entities.
   */
  getAll(): GetAllRequestBuilder<JobCodeMappingEntity> {
    return new GetAllRequestBuilder(JobCodeMappingEntity);
  }

  /**
   * Returns a request builder for creating a `JobCodeMappingEntity` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `JobCodeMappingEntity`.
   */
  create(entity: JobCodeMappingEntity): CreateRequestBuilder<JobCodeMappingEntity> {
    return new CreateRequestBuilder(JobCodeMappingEntity, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `JobCodeMappingEntity`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `JobCodeMappingEntity`.
   */
  update(entity: JobCodeMappingEntity): UpdateRequestBuilder<JobCodeMappingEntity> {
    return new UpdateRequestBuilder(JobCodeMappingEntity, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `JobCodeMappingEntity`.
   * @param roleEntityExternalCode Key property. See [[JobCodeMappingEntity.roleEntityExternalCode]].
   * @param externalCode Key property. See [[JobCodeMappingEntity.externalCode]].
   * @returns A request builder for creating requests that delete an entity of type `JobCodeMappingEntity`.
   */
  delete(roleEntityExternalCode: string, externalCode: string): DeleteRequestBuilder<JobCodeMappingEntity>;
  /**
   * Returns a request builder for deleting an entity of type `JobCodeMappingEntity`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `JobCodeMappingEntity` by taking the entity as a parameter.
   */
  delete(entity: JobCodeMappingEntity): DeleteRequestBuilder<JobCodeMappingEntity>;
  delete(roleEntityExternalCodeOrEntity: any, externalCode?: string): DeleteRequestBuilder<JobCodeMappingEntity> {
    return new DeleteRequestBuilder(JobCodeMappingEntity, roleEntityExternalCodeOrEntity instanceof JobCodeMappingEntity ? roleEntityExternalCodeOrEntity : {
      RoleEntity_externalCode: roleEntityExternalCodeOrEntity!,
      externalCode: externalCode!
    });
  }
}
