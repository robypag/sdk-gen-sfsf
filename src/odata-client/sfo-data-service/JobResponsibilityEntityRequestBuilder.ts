/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { JobResponsibilityEntity } from './JobResponsibilityEntity';

/**
 * Request builder class for operations supported on the [[JobResponsibilityEntity]] entity.
 */
export class JobResponsibilityEntityRequestBuilder extends RequestBuilder<JobResponsibilityEntity> {
  /**
   * Returns a request builder for retrieving one `JobResponsibilityEntity` entity based on its keys.
   * @param externalCode Key property. See [[JobResponsibilityEntity.externalCode]].
   * @returns A request builder for creating requests to retrieve one `JobResponsibilityEntity` entity based on its keys.
   */
  getByKey(externalCode: string): GetByKeyRequestBuilder<JobResponsibilityEntity> {
    return new GetByKeyRequestBuilder(JobResponsibilityEntity, { externalCode: externalCode });
  }

  /**
   * Returns a request builder for querying all `JobResponsibilityEntity` entities.
   * @returns A request builder for creating requests to retrieve all `JobResponsibilityEntity` entities.
   */
  getAll(): GetAllRequestBuilder<JobResponsibilityEntity> {
    return new GetAllRequestBuilder(JobResponsibilityEntity);
  }

  /**
   * Returns a request builder for creating a `JobResponsibilityEntity` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `JobResponsibilityEntity`.
   */
  create(entity: JobResponsibilityEntity): CreateRequestBuilder<JobResponsibilityEntity> {
    return new CreateRequestBuilder(JobResponsibilityEntity, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `JobResponsibilityEntity`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `JobResponsibilityEntity`.
   */
  update(entity: JobResponsibilityEntity): UpdateRequestBuilder<JobResponsibilityEntity> {
    return new UpdateRequestBuilder(JobResponsibilityEntity, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `JobResponsibilityEntity`.
   * @param externalCode Key property. See [[JobResponsibilityEntity.externalCode]].
   * @returns A request builder for creating requests that delete an entity of type `JobResponsibilityEntity`.
   */
  delete(externalCode: string): DeleteRequestBuilder<JobResponsibilityEntity>;
  /**
   * Returns a request builder for deleting an entity of type `JobResponsibilityEntity`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `JobResponsibilityEntity` by taking the entity as a parameter.
   */
  delete(entity: JobResponsibilityEntity): DeleteRequestBuilder<JobResponsibilityEntity>;
  delete(externalCodeOrEntity: any): DeleteRequestBuilder<JobResponsibilityEntity> {
    return new DeleteRequestBuilder(JobResponsibilityEntity, externalCodeOrEntity instanceof JobResponsibilityEntity ? externalCodeOrEntity : { externalCode: externalCodeOrEntity! });
  }
}
