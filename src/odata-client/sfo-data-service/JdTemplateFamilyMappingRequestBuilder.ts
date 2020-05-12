/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { JdTemplateFamilyMapping } from './JdTemplateFamilyMapping';

/**
 * Request builder class for operations supported on the [[JdTemplateFamilyMapping]] entity.
 */
export class JdTemplateFamilyMappingRequestBuilder extends RequestBuilder<JdTemplateFamilyMapping> {
  /**
   * Returns a request builder for retrieving one `JdTemplateFamilyMapping` entity based on its keys.
   * @param jobDescTemplateExternalCode Key property. See [[JdTemplateFamilyMapping.jobDescTemplateExternalCode]].
   * @param externalCode Key property. See [[JdTemplateFamilyMapping.externalCode]].
   * @returns A request builder for creating requests to retrieve one `JdTemplateFamilyMapping` entity based on its keys.
   */
  getByKey(jobDescTemplateExternalCode: string, externalCode: string): GetByKeyRequestBuilder<JdTemplateFamilyMapping> {
    return new GetByKeyRequestBuilder(JdTemplateFamilyMapping, {
      JobDescTemplate_externalCode: jobDescTemplateExternalCode,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `JdTemplateFamilyMapping` entities.
   * @returns A request builder for creating requests to retrieve all `JdTemplateFamilyMapping` entities.
   */
  getAll(): GetAllRequestBuilder<JdTemplateFamilyMapping> {
    return new GetAllRequestBuilder(JdTemplateFamilyMapping);
  }

  /**
   * Returns a request builder for creating a `JdTemplateFamilyMapping` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `JdTemplateFamilyMapping`.
   */
  create(entity: JdTemplateFamilyMapping): CreateRequestBuilder<JdTemplateFamilyMapping> {
    return new CreateRequestBuilder(JdTemplateFamilyMapping, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `JdTemplateFamilyMapping`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `JdTemplateFamilyMapping`.
   */
  update(entity: JdTemplateFamilyMapping): UpdateRequestBuilder<JdTemplateFamilyMapping> {
    return new UpdateRequestBuilder(JdTemplateFamilyMapping, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `JdTemplateFamilyMapping`.
   * @param jobDescTemplateExternalCode Key property. See [[JdTemplateFamilyMapping.jobDescTemplateExternalCode]].
   * @param externalCode Key property. See [[JdTemplateFamilyMapping.externalCode]].
   * @returns A request builder for creating requests that delete an entity of type `JdTemplateFamilyMapping`.
   */
  delete(jobDescTemplateExternalCode: string, externalCode: string): DeleteRequestBuilder<JdTemplateFamilyMapping>;
  /**
   * Returns a request builder for deleting an entity of type `JdTemplateFamilyMapping`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `JdTemplateFamilyMapping` by taking the entity as a parameter.
   */
  delete(entity: JdTemplateFamilyMapping): DeleteRequestBuilder<JdTemplateFamilyMapping>;
  delete(jobDescTemplateExternalCodeOrEntity: any, externalCode?: string): DeleteRequestBuilder<JdTemplateFamilyMapping> {
    return new DeleteRequestBuilder(JdTemplateFamilyMapping, jobDescTemplateExternalCodeOrEntity instanceof JdTemplateFamilyMapping ? jobDescTemplateExternalCodeOrEntity : {
      JobDescTemplate_externalCode: jobDescTemplateExternalCodeOrEntity!,
      externalCode: externalCode!
    });
  }
}
