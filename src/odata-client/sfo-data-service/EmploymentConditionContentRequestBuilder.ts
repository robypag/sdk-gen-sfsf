/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { EmploymentConditionContent } from './EmploymentConditionContent';

/**
 * Request builder class for operations supported on the [[EmploymentConditionContent]] entity.
 */
export class EmploymentConditionContentRequestBuilder extends RequestBuilder<EmploymentConditionContent> {
  /**
   * Returns a request builder for retrieving one `EmploymentConditionContent` entity based on its keys.
   * @param jobProfileExternalCode Key property. See [[EmploymentConditionContent.jobProfileExternalCode]].
   * @param externalCode Key property. See [[EmploymentConditionContent.externalCode]].
   * @returns A request builder for creating requests to retrieve one `EmploymentConditionContent` entity based on its keys.
   */
  getByKey(jobProfileExternalCode: string, externalCode: string): GetByKeyRequestBuilder<EmploymentConditionContent> {
    return new GetByKeyRequestBuilder(EmploymentConditionContent, {
      JobProfile_externalCode: jobProfileExternalCode,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `EmploymentConditionContent` entities.
   * @returns A request builder for creating requests to retrieve all `EmploymentConditionContent` entities.
   */
  getAll(): GetAllRequestBuilder<EmploymentConditionContent> {
    return new GetAllRequestBuilder(EmploymentConditionContent);
  }

  /**
   * Returns a request builder for creating a `EmploymentConditionContent` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EmploymentConditionContent`.
   */
  create(entity: EmploymentConditionContent): CreateRequestBuilder<EmploymentConditionContent> {
    return new CreateRequestBuilder(EmploymentConditionContent, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `EmploymentConditionContent`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EmploymentConditionContent`.
   */
  update(entity: EmploymentConditionContent): UpdateRequestBuilder<EmploymentConditionContent> {
    return new UpdateRequestBuilder(EmploymentConditionContent, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `EmploymentConditionContent`.
   * @param jobProfileExternalCode Key property. See [[EmploymentConditionContent.jobProfileExternalCode]].
   * @param externalCode Key property. See [[EmploymentConditionContent.externalCode]].
   * @returns A request builder for creating requests that delete an entity of type `EmploymentConditionContent`.
   */
  delete(jobProfileExternalCode: string, externalCode: string): DeleteRequestBuilder<EmploymentConditionContent>;
  /**
   * Returns a request builder for deleting an entity of type `EmploymentConditionContent`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EmploymentConditionContent` by taking the entity as a parameter.
   */
  delete(entity: EmploymentConditionContent): DeleteRequestBuilder<EmploymentConditionContent>;
  delete(jobProfileExternalCodeOrEntity: any, externalCode?: string): DeleteRequestBuilder<EmploymentConditionContent> {
    return new DeleteRequestBuilder(EmploymentConditionContent, jobProfileExternalCodeOrEntity instanceof EmploymentConditionContent ? jobProfileExternalCodeOrEntity : {
      JobProfile_externalCode: jobProfileExternalCodeOrEntity!,
      externalCode: externalCode!
    });
  }
}
