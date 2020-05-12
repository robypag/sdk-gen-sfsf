/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { EducationDegreeContent } from './EducationDegreeContent';

/**
 * Request builder class for operations supported on the [[EducationDegreeContent]] entity.
 */
export class EducationDegreeContentRequestBuilder extends RequestBuilder<EducationDegreeContent> {
  /**
   * Returns a request builder for retrieving one `EducationDegreeContent` entity based on its keys.
   * @param jobProfileExternalCode Key property. See [[EducationDegreeContent.jobProfileExternalCode]].
   * @param externalCode Key property. See [[EducationDegreeContent.externalCode]].
   * @returns A request builder for creating requests to retrieve one `EducationDegreeContent` entity based on its keys.
   */
  getByKey(jobProfileExternalCode: string, externalCode: string): GetByKeyRequestBuilder<EducationDegreeContent> {
    return new GetByKeyRequestBuilder(EducationDegreeContent, {
      JobProfile_externalCode: jobProfileExternalCode,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `EducationDegreeContent` entities.
   * @returns A request builder for creating requests to retrieve all `EducationDegreeContent` entities.
   */
  getAll(): GetAllRequestBuilder<EducationDegreeContent> {
    return new GetAllRequestBuilder(EducationDegreeContent);
  }

  /**
   * Returns a request builder for creating a `EducationDegreeContent` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EducationDegreeContent`.
   */
  create(entity: EducationDegreeContent): CreateRequestBuilder<EducationDegreeContent> {
    return new CreateRequestBuilder(EducationDegreeContent, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `EducationDegreeContent`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EducationDegreeContent`.
   */
  update(entity: EducationDegreeContent): UpdateRequestBuilder<EducationDegreeContent> {
    return new UpdateRequestBuilder(EducationDegreeContent, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `EducationDegreeContent`.
   * @param jobProfileExternalCode Key property. See [[EducationDegreeContent.jobProfileExternalCode]].
   * @param externalCode Key property. See [[EducationDegreeContent.externalCode]].
   * @returns A request builder for creating requests that delete an entity of type `EducationDegreeContent`.
   */
  delete(jobProfileExternalCode: string, externalCode: string): DeleteRequestBuilder<EducationDegreeContent>;
  /**
   * Returns a request builder for deleting an entity of type `EducationDegreeContent`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EducationDegreeContent` by taking the entity as a parameter.
   */
  delete(entity: EducationDegreeContent): DeleteRequestBuilder<EducationDegreeContent>;
  delete(jobProfileExternalCodeOrEntity: any, externalCode?: string): DeleteRequestBuilder<EducationDegreeContent> {
    return new DeleteRequestBuilder(EducationDegreeContent, jobProfileExternalCodeOrEntity instanceof EducationDegreeContent ? jobProfileExternalCodeOrEntity : {
      JobProfile_externalCode: jobProfileExternalCodeOrEntity!,
      externalCode: externalCode!
    });
  }
}
