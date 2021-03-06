/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { CompetencyContent } from './CompetencyContent';

/**
 * Request builder class for operations supported on the [[CompetencyContent]] entity.
 */
export class CompetencyContentRequestBuilder extends RequestBuilder<CompetencyContent> {
  /**
   * Returns a request builder for retrieving one `CompetencyContent` entity based on its keys.
   * @param jobProfileExternalCode Key property. See [[CompetencyContent.jobProfileExternalCode]].
   * @param externalCode Key property. See [[CompetencyContent.externalCode]].
   * @returns A request builder for creating requests to retrieve one `CompetencyContent` entity based on its keys.
   */
  getByKey(jobProfileExternalCode: string, externalCode: string): GetByKeyRequestBuilder<CompetencyContent> {
    return new GetByKeyRequestBuilder(CompetencyContent, {
      JobProfile_externalCode: jobProfileExternalCode,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `CompetencyContent` entities.
   * @returns A request builder for creating requests to retrieve all `CompetencyContent` entities.
   */
  getAll(): GetAllRequestBuilder<CompetencyContent> {
    return new GetAllRequestBuilder(CompetencyContent);
  }

  /**
   * Returns a request builder for creating a `CompetencyContent` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CompetencyContent`.
   */
  create(entity: CompetencyContent): CreateRequestBuilder<CompetencyContent> {
    return new CreateRequestBuilder(CompetencyContent, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `CompetencyContent`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CompetencyContent`.
   */
  update(entity: CompetencyContent): UpdateRequestBuilder<CompetencyContent> {
    return new UpdateRequestBuilder(CompetencyContent, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CompetencyContent`.
   * @param jobProfileExternalCode Key property. See [[CompetencyContent.jobProfileExternalCode]].
   * @param externalCode Key property. See [[CompetencyContent.externalCode]].
   * @returns A request builder for creating requests that delete an entity of type `CompetencyContent`.
   */
  delete(jobProfileExternalCode: string, externalCode: string): DeleteRequestBuilder<CompetencyContent>;
  /**
   * Returns a request builder for deleting an entity of type `CompetencyContent`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CompetencyContent` by taking the entity as a parameter.
   */
  delete(entity: CompetencyContent): DeleteRequestBuilder<CompetencyContent>;
  delete(jobProfileExternalCodeOrEntity: any, externalCode?: string): DeleteRequestBuilder<CompetencyContent> {
    return new DeleteRequestBuilder(CompetencyContent, jobProfileExternalCodeOrEntity instanceof CompetencyContent ? jobProfileExternalCodeOrEntity : {
      JobProfile_externalCode: jobProfileExternalCodeOrEntity!,
      externalCode: externalCode!
    });
  }
}
