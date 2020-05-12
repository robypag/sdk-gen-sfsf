/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { JobDescTemplate } from './JobDescTemplate';

/**
 * Request builder class for operations supported on the [[JobDescTemplate]] entity.
 */
export class JobDescTemplateRequestBuilder extends RequestBuilder<JobDescTemplate> {
  /**
   * Returns a request builder for retrieving one `JobDescTemplate` entity based on its keys.
   * @param externalCode Key property. See [[JobDescTemplate.externalCode]].
   * @returns A request builder for creating requests to retrieve one `JobDescTemplate` entity based on its keys.
   */
  getByKey(externalCode: string): GetByKeyRequestBuilder<JobDescTemplate> {
    return new GetByKeyRequestBuilder(JobDescTemplate, { externalCode: externalCode });
  }

  /**
   * Returns a request builder for querying all `JobDescTemplate` entities.
   * @returns A request builder for creating requests to retrieve all `JobDescTemplate` entities.
   */
  getAll(): GetAllRequestBuilder<JobDescTemplate> {
    return new GetAllRequestBuilder(JobDescTemplate);
  }

  /**
   * Returns a request builder for creating a `JobDescTemplate` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `JobDescTemplate`.
   */
  create(entity: JobDescTemplate): CreateRequestBuilder<JobDescTemplate> {
    return new CreateRequestBuilder(JobDescTemplate, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `JobDescTemplate`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `JobDescTemplate`.
   */
  update(entity: JobDescTemplate): UpdateRequestBuilder<JobDescTemplate> {
    return new UpdateRequestBuilder(JobDescTemplate, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `JobDescTemplate`.
   * @param externalCode Key property. See [[JobDescTemplate.externalCode]].
   * @returns A request builder for creating requests that delete an entity of type `JobDescTemplate`.
   */
  delete(externalCode: string): DeleteRequestBuilder<JobDescTemplate>;
  /**
   * Returns a request builder for deleting an entity of type `JobDescTemplate`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `JobDescTemplate` by taking the entity as a parameter.
   */
  delete(entity: JobDescTemplate): DeleteRequestBuilder<JobDescTemplate>;
  delete(externalCodeOrEntity: any): DeleteRequestBuilder<JobDescTemplate> {
    return new DeleteRequestBuilder(JobDescTemplate, externalCodeOrEntity instanceof JobDescTemplate ? externalCodeOrEntity : { externalCode: externalCodeOrEntity! });
  }
}
